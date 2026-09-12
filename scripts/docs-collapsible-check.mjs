import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import ts from 'typescript';
import { loadDocsModule } from './docs-validation-data.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const docsListPath = path.resolve(__dirname, '..', 'components', 'docs', 'DocsList.tsx');
const docsListControlsPath = path.resolve(__dirname, '..', 'components', 'docs', 'DocsListControls.tsx');
const docsPageFramePath = path.resolve(__dirname, '..', 'components', 'docs', 'DocsPageFrame.tsx');
const docsSectionBlockPath = path.resolve(__dirname, '..', 'components', 'docs', 'DocsSectionBlock.tsx');
const docsSectionConfigPath = path.resolve(__dirname, '..', 'lib', 'docsSectionBlocks.ts');
const navbarPath = path.resolve(__dirname, '..', 'components', 'Navbar.tsx');
const footerPath = path.resolve(__dirname, '..', 'components', 'Footer.tsx');
const docs = loadDocsModule();
const errors = [];

function parseTsx(filePath) {
  const source = fs.readFileSync(filePath, 'utf8');
  return {
    source,
    ast: ts.createSourceFile(filePath, source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX),
  };
}

function getTagName(node, sourceFile) {
  return ts.isIdentifier(node.tagName) ? node.tagName.text : node.tagName.getText(sourceFile);
}

function getJsxAttribute(node, name) {
  const attribute = node.attributes.properties.find(
    (property) => ts.isJsxAttribute(property) && property.name.text === name,
  );

  return attribute && ts.isJsxAttribute(attribute) ? attribute : undefined;
}

function hasBooleanAttribute(node, name) {
  return Boolean(getJsxAttribute(node, name));
}

function getExpressionText(attribute, sourceFile) {
  if (
    !attribute ||
    !attribute.initializer ||
    !ts.isJsxExpression(attribute.initializer) ||
    !attribute.initializer.expression
  ) {
    return undefined;
  }

  return attribute.initializer.expression.getText(sourceFile.ast);
}

function getStringAttributeValue(attribute) {
  if (!attribute || !attribute.initializer) {
    return undefined;
  }

  if (ts.isStringLiteral(attribute.initializer)) {
    return attribute.initializer.text;
  }

  if (
    ts.isJsxExpression(attribute.initializer) &&
    attribute.initializer.expression &&
    (ts.isStringLiteral(attribute.initializer.expression) ||
      ts.isNoSubstitutionTemplateLiteral(attribute.initializer.expression))
  ) {
    return attribute.initializer.expression.text;
  }

  return undefined;
}

function collectJsxTags(sourceFile) {
  const tags = [];

  function visit(node) {
    if (ts.isJsxOpeningElement(node) || ts.isJsxSelfClosingElement(node)) {
      tags.push(node);
    }
    ts.forEachChild(node, visit);
  }

  visit(sourceFile.ast);
  return tags;
}

function collectImports(sourceFile) {
  return sourceFile.ast.statements.filter(ts.isImportDeclaration);
}

function containsStringLiteral(node, value) {
  let found = false;

  function visit(current) {
    if (
      (ts.isStringLiteral(current) || ts.isNoSubstitutionTemplateLiteral(current)) &&
      current.text === value
    ) {
      found = true;
      return;
    }

    ts.forEachChild(current, visit);
  }

  visit(node);
  return found;
}

function containsWindowLocationHashAccess(node) {
  let found = false;

  function visit(current) {
    if (
      ts.isPropertyAccessExpression(current) &&
      current.name.text === 'hash' &&
      ts.isPropertyAccessExpression(current.expression) &&
      current.expression.name.text === 'location' &&
      ts.isIdentifier(current.expression.expression) &&
      current.expression.expression.text === 'window'
    ) {
      found = true;
      return;
    }

    ts.forEachChild(current, visit);
  }

  visit(node);
  return found;
}

const docsList = parseTsx(docsListPath);
const docsListControls = parseTsx(docsListControlsPath);
const docsPageFrame = parseTsx(docsPageFramePath);
const docsSectionBlock = parseTsx(docsSectionBlockPath);
const docsSectionConfig = parseTsx(docsSectionConfigPath);
const navbar = parseTsx(navbarPath);
const footer = parseTsx(footerPath);

const docsListTags = collectJsxTags(docsList);
if (!docsListTags.some((node) => getTagName(node, docsList.ast) === 'details')) {
  errors.push('DocsList must use native <details> semantics.');
}
if (!docsListTags.some((node) => getTagName(node, docsList.ast) === 'summary')) {
  errors.push('DocsList must use native <summary> semantics.');
}
if (
  !docsListTags.some(
    (node) =>
      getTagName(node, docsList.ast) === 'DocsList' &&
      getExpressionText(getJsxAttribute(node, 'items'), docsList) === 'normalized.children',
  )
) {
  errors.push('DocsList must render nested list items recursively.');
}

const docsListControlTags = collectJsxTags(docsListControls);
const controlsText = docsListControls.source;
if (!controlsText.includes('Expand all') || !controlsText.includes('Collapse all')) {
  errors.push('DocsListControls must expose Expand all and Collapse all controls.');
}
if (!controlsText.includes('docs:set-all-sections')) {
  errors.push('DocsListControls must dispatch a global docs:set-all-sections event.');
}
if (!docsListControlTags.some((node) => getTagName(node, docsListControls.ast) === 'button')) {
  errors.push('DocsListControls must render button controls.');
}

const pageFrameImports = collectImports(docsPageFrame);
const hasDocsListImport = pageFrameImports.some(
  (node) => node.moduleSpecifier.getText(docsPageFrame.ast).includes('DocsList'),
);
const hasDocsListControlsImport = pageFrameImports.some(
  (node) => node.moduleSpecifier.getText(docsPageFrame.ast).includes('DocsListControls'),
);
const hasDocsSectionBlockImport = pageFrameImports.some(
  (node) => node.moduleSpecifier.getText(docsPageFrame.ast).includes('DocsSectionBlock'),
);
if (!hasDocsListImport || !hasDocsListControlsImport || !hasDocsSectionBlockImport) {
  errors.push('DocsPageFrame must import DocsList, DocsListControls, and DocsSectionBlock.');
}

const pageFrameTags = collectJsxTags(docsPageFrame);
const docsListUsage = pageFrameTags.filter((node) => getTagName(node, docsPageFrame.ast) === 'DocsList');
if (!pageFrameTags.some((node) => getTagName(node, docsPageFrame.ast) === 'DocsListControls')) {
  errors.push('DocsPageFrame must render DocsListControls.');
}
if (!pageFrameTags.some((node) => getTagName(node, docsPageFrame.ast) === 'DocsSectionBlock')) {
  errors.push('DocsPageFrame must render DocsSectionBlock wrappers.');
}
if (!docsListUsage.some((node) => hasBooleanAttribute(node, 'ordered'))) {
  errors.push('DocsPageFrame must render ordered docs lists through DocsList.');
}
if (!docsListUsage.some((node) => !hasBooleanAttribute(node, 'ordered'))) {
  errors.push('DocsPageFrame must render unordered docs lists through DocsList.');
}
if (!pageFrameTags.some((node) => getTagName(node, docsPageFrame.ast) === 'ul')) {
  errors.push('DocsPageFrame must continue rendering plain related-link lists.');
}

const pageFrameMetaNodes = pageFrameTags.filter(
  (node) => getStringAttributeValue(getJsxAttribute(node, 'className')) === 'docs-page-meta',
);
if (pageFrameMetaNodes.length !== 1) {
  errors.push('DocsPageFrame must render exactly one metadata footer block.');
}
const pagerNodes = pageFrameTags.filter(
  (node) => getStringAttributeValue(getJsxAttribute(node, 'className')) === 'docs-pager',
);
const pagerNode = pagerNodes[0];
const metadataNode = pageFrameMetaNodes[0];
const pagerElementNode = pagerNode && ts.isJsxOpeningElement(pagerNode) ? pagerNode.parent : pagerNode;
const metadataElementNode =
  metadataNode && ts.isJsxOpeningElement(metadataNode) ? metadataNode.parent : metadataNode;
if (!pagerElementNode || !metadataElementNode || metadataElementNode.pos < pagerElementNode.end) {
  errors.push('DocsPageFrame metadata block must appear after the main docs content and pager.');
}
const metadataNodeSource = metadataElementNode
  ? docsPageFrame.source.slice(metadataElementNode.pos, metadataElementNode.end)
  : '';
if (!metadataNodeSource.includes('Last updated:')) {
  errors.push('DocsPageFrame metadata footer must include Last updated.');
}
if (!metadataNodeSource.includes('Compatibility window:')) {
  errors.push('DocsPageFrame metadata footer must include Compatibility window.');
}

const docsSectionBlockText = docsSectionBlock.source;
if (!docsSectionBlockText.includes('aria-expanded={open}')) {
  errors.push('DocsSectionBlock must expose aria-expanded state on its toggle.');
}
if (!containsWindowLocationHashAccess(docsSectionBlock.ast)) {
  errors.push('DocsSectionBlock must auto-expand when the URL hash targets a section.');
}
if (!containsStringLiteral(docsSectionBlock.ast, 'hashchange')) {
  errors.push('DocsSectionBlock must react to hash changes.');
}
if (!containsStringLiteral(docsSectionBlock.ast, 'docs:set-all-sections')) {
  errors.push('DocsSectionBlock must listen for global section expand/collapse events.');
}
if (!docsSectionBlockText.includes('role="region"')) {
  errors.push('DocsSectionBlock must expose section content as an accessible region.');
}

if (containsStringLiteral(navbar.ast, '/founder')) {
  errors.push('Navbar must not include /founder in top navigation links.');
}
if (!containsStringLiteral(footer.ast, '/founder')) {
  errors.push('Footer must retain Founder link for direct discovery.');
}

const docsSectionConfigText = docsSectionConfig.source;
for (const requiredKind of [
  '"summary"',
  '"audience"',
  '"prerequisites"',
  '"step-by-step"',
  '"troubleshooting"',
  '"faq"',
  '"related-pages"',
  '"last-updated"',
]) {
  if (!docsSectionConfigText.includes(requiredKind)) {
    errors.push(`docsSectionBlocks must support the ${requiredKind} section kind.`);
  }
}

const pages = docs.docsPages;
const hasOrdered = pages.some((page) => page.headings.some((heading) => (heading.steps || []).length > 0));
const hasUnordered = pages.some((page) => page.headings.some((heading) => (heading.bullets || []).length > 0));
const hasDeeplyNested = pages.some((page) =>
  page.headings.some((heading) =>
    [heading.bullets || [], heading.steps || []].some((items) =>
      items.some(
        (item) => typeof item !== 'string' && Array.isArray(item.children) && item.children.length > 0,
      ),
    ),
  ),
);

if (!hasOrdered) {
  errors.push('Expected at least one ordered docs list for collapsible coverage.');
}
if (!hasUnordered) {
  errors.push('Expected at least one unordered docs list for collapsible coverage.');
}
if (!hasDeeplyNested) {
  errors.push('Expected at least one nested docs list item for collapsible coverage.');
}

if (errors.length > 0) {
  console.error('Docs collapsible checks failed:');
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log('Docs collapsible checks passed.');
