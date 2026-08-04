import { loadDocsModule } from './docs-validation-data.mjs';

const docs = loadDocsModule();
const docsPages = docs.docsPages;
const errors = [];
const anchorPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

for (const page of docsPages) {
  if (!Array.isArray(page.headings) || page.headings.length === 0) {
    errors.push(`Route ${page.href} has no headings for TOC/anchor generation.`);
    continue;
  }

  const headingIds = new Set();

  for (const heading of page.headings) {
    if (!heading.id || !anchorPattern.test(heading.id)) {
      errors.push(`Route ${page.href} has non-normalized heading id: ${heading.id}`);
      continue;
    }

    if (headingIds.has(heading.id)) {
      errors.push(`Route ${page.href} has duplicate heading id: ${heading.id}`);
      continue;
    }

    headingIds.add(heading.id);
  }
}

if (errors.length > 0) {
  console.error('Docs anchor integrity check failed:');
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log(`Docs anchor integrity check passed for ${docsPages.length} routes.`);
