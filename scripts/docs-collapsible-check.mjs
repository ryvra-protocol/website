import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { loadDocsModule } from './docs-validation-data.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const docsListPath = path.resolve(__dirname, '..', 'components', 'docs', 'DocsList.tsx');
const docsListControlsPath = path.resolve(__dirname, '..', 'components', 'docs', 'DocsListControls.tsx');
const docsPageFramePath = path.resolve(__dirname, '..', 'components', 'docs', 'DocsPageFrame.tsx');
const docsListSource = fs.readFileSync(docsListPath, 'utf8');
const controlsSource = fs.readFileSync(docsListControlsPath, 'utf8');
const pageFrameSource = fs.readFileSync(docsPageFramePath, 'utf8');
const docs = loadDocsModule();
const errors = [];

if (!docsListSource.includes('<details') || !docsListSource.includes('<summary')) {
  errors.push('DocsList must use native <details><summary> semantics.');
}

if (!docsListSource.includes('<DocsList')) {
  errors.push('DocsList must render nested list items recursively.');
}

if (!controlsSource.includes('Expand all') || !controlsSource.includes('Collapse all')) {
  errors.push('DocsListControls must expose Expand all and Collapse all controls.');
}

if (!pageFrameSource.includes('<DocsListControls') || !pageFrameSource.includes('<DocsList items={heading.steps} ordered />')) {
  errors.push('DocsPageFrame must wire collapsible controls and ordered-list rendering.');
}

if (!pageFrameSource.includes('<DocsList items={heading.bullets} />') || !pageFrameSource.includes('mode="links"')) {
  errors.push('DocsPageFrame must wire unordered and linked list rendering.');
}

const pages = docs.docsPages;
const hasOrdered = pages.some((page) => page.headings.some((heading) => (heading.steps || []).length > 0));
const hasUnordered = pages.some((page) => page.headings.some((heading) => (heading.bullets || []).length > 0));
const hasDeeplyNested = pages.some((page) =>
  page.headings.some((heading) =>
    (heading.bullets || []).some(
      (item) => typeof item !== 'string' && Array.isArray(item.children) && item.children.length > 0,
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
