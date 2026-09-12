import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import ts from 'typescript';
import { loadDocsModule } from './docs-validation-data.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const litepaperFilePath = path.resolve(__dirname, '..', 'app', 'litepaper', 'page.tsx');
const litepaperSource = fs.readFileSync(litepaperFilePath, 'utf8');
const litepaperAst = ts.createSourceFile(litepaperFilePath, litepaperSource, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
const docs = loadDocsModule();
const pageByHref = new Map(docs.docsPages.map((page) => [page.href, page]));
const errors = [];

function getTagName(node) {
  return ts.isIdentifier(node.tagName) ? node.tagName.text : node.tagName.getText(litepaperAst);
}

function getJsxAttribute(node, name) {
  const attribute = node.attributes.properties.find(
    (property) => ts.isJsxAttribute(property) && property.name.text === name,
  );

  return attribute && ts.isJsxAttribute(attribute) ? attribute : undefined;
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

const litepaperSectionIds = new Set();
const litepaperLinks = new Set();

function visit(node) {
  if (ts.isJsxOpeningElement(node) || ts.isJsxSelfClosingElement(node)) {
    const tagName = getTagName(node);
    const id = getStringAttributeValue(getJsxAttribute(node, 'id'));

    if (id && /^h[1-6]$/.test(tagName)) {
      litepaperSectionIds.add(id);
    }

    if (tagName === 'Link') {
      const href = getStringAttributeValue(getJsxAttribute(node, 'href'));
      if (href) {
        litepaperLinks.add(href);
      }
    }
  }

  ts.forEachChild(node, visit);
}

visit(litepaperAst);

const requiredLitepaperIds = [
  'what-ryvra-is',
  'why-programmable-financial-authority-matters',
  'how-agent-safety-boundaries-work',
  'how-ledger-settlement-and-provenance-fit-together',
  'confidential-execution-and-private-markets',
];

for (const id of requiredLitepaperIds) {
  if (!litepaperSectionIds.has(id)) {
    errors.push(`Litepaper page is missing required section id: ${id}`);
  }
}

for (const href of ['/docs/tokenomics/litepaper-faq', '/docs/tokenomics/tokenomics-faq']) {
  if (![...litepaperLinks].some((link) => link === href || link.startsWith(`${href}#`))) {
    errors.push(`Litepaper page is missing FAQ link: ${href}`);
  }
}

for (const href of ['/docs/tokenomics/litepaper-faq', '/docs/tokenomics/tokenomics-faq']) {
  const page = pageByHref.get(href);
  if (!page) {
    errors.push(`Missing docs page: ${href}`);
    continue;
  }

  const headingIds = new Set(page.headings.map((heading) => heading.id));
  if (!headingIds.has('who-is-this-for')) {
    errors.push(`${href} is missing the who-is-this-for section.`);
  }
  if (!headingIds.has('last-updated')) {
    errors.push(`${href} is missing the last-updated section.`);
  }

  const faqHeadings = page.headings.filter((heading) => heading.kind === 'faq');
  if (faqHeadings.length === 0) {
    errors.push(`${href} has no FAQ entries.`);
  }

  for (const heading of faqHeadings) {
    if (!Array.isArray(heading.audience) || heading.audience.length === 0) {
      errors.push(`${href}#${heading.id} is missing audience tags.`);
    }
  }
}

const tokenomicsOverview = pageByHref.get('/docs/tokenomics');
if (!tokenomicsOverview) {
  errors.push('Missing /docs/tokenomics overview page.');
} else {
  const overviewLinks = new Set(
    tokenomicsOverview.headings.flatMap((heading) => (heading.links || []).map((link) => link.href)),
  );
  for (const href of ['/docs/tokenomics/litepaper-faq', '/docs/tokenomics/tokenomics-faq']) {
    if (!overviewLinks.has(href)) {
      errors.push(`/docs/tokenomics should link to ${href}`);
    }
  }
}

if (errors.length > 0) {
  console.error('Content integration checks failed:');
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log('Content integration checks passed.');
