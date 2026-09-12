import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { loadDocsModule } from './docs-validation-data.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const docsPageFramePath = path.resolve(__dirname, '..', 'components', 'docs', 'DocsPageFrame.tsx');
const docsSectionBlocksPath = path.resolve(__dirname, '..', 'lib', 'docsSectionBlocks.ts');
const navbarPath = path.resolve(__dirname, '..', 'components', 'Navbar.tsx');
const footerPath = path.resolve(__dirname, '..', 'components', 'Footer.tsx');

const docsPageFrameSource = fs.readFileSync(docsPageFramePath, 'utf8');
const docsSectionBlocksSource = fs.readFileSync(docsSectionBlocksPath, 'utf8');
const navbarSource = fs.readFileSync(navbarPath, 'utf8');
const footerSource = fs.readFileSync(footerPath, 'utf8');
const docs = loadDocsModule();
const errors = [];

const pagerIndex = docsPageFrameSource.indexOf('<nav className="docs-pager"');
const metadataIndex = docsPageFrameSource.indexOf('<footer className="docs-page-meta"');
if (metadataIndex === -1) {
  errors.push('DocsPageFrame must render the page metadata footer.');
}
if (docsPageFrameSource.includes('<div className="docs-page-meta"')) {
  errors.push('DocsPageFrame must not render the metadata block near the page header.');
}
if (pagerIndex === -1 || metadataIndex === -1 || metadataIndex < pagerIndex) {
  errors.push('DocsPageFrame must render metadata after the pager at the end of the article.');
}
if (!docsPageFrameSource.includes('<DocsCallout variant={page.calloutVariant} title="Purpose">')) {
  errors.push('DocsPageFrame must render a consistent Purpose callout title.');
}
if (!docsPageFrameSource.includes('getDocsDisplayTitle(heading)')) {
  errors.push('DocsPageFrame must use shared docs display-title normalization.');
}

if (!docsSectionBlocksSource.includes('return "Purpose";')) {
  errors.push('Docs section display-title normalization must collapse purpose-first variants to Purpose.');
}
if (!docsSectionBlocksSource.includes('return "Prerequisites";')) {
  errors.push('Docs section display-title normalization must preserve Prerequisites labels.');
}
if (!docsSectionBlocksSource.includes('return "Step-by-step";')) {
  errors.push('Docs section display-title normalization must preserve Step-by-step labels.');
}
if (!docsSectionBlocksSource.includes('return "Troubleshooting";')) {
  errors.push('Docs section display-title normalization must preserve Troubleshooting labels.');
}
if (!docsSectionBlocksSource.includes('return "Related pages";')) {
  errors.push('Docs section display-title normalization must preserve Related pages labels.');
}

if (navbarSource.includes('href: "/founder"')) {
  errors.push('Top navbar must not include /founder.');
}
if (!footerSource.includes('href: "/founder"')) {
  errors.push('Footer must keep the /founder link.');
}
if (!navbarSource.includes('wordmark-mark') || !navbarSource.includes('wordmark-text')) {
  errors.push('Navbar wordmark should use the styled logo treatment.');
}

for (const page of docs.docsPages) {
  if (!page.calloutBody || !page.calloutBody.trim()) {
    errors.push(`Docs page is missing its purpose statement: ${page.href}`);
  }

  for (const heading of page.headings) {
    const normalized = `${heading.id} ${heading.title}`
      .toLowerCase()
      .replace(/&/g, ' and ')
      .replace(/[^a-z0-9]+/g, ' ')
      .trim();

    if (normalized === 'last updated' || normalized === 'compatibility window') {
      errors.push(`Docs page still contains duplicate metadata heading content: ${page.href}#${heading.id}`);
    }
  }
}

if (errors.length > 0) {
  console.error('Docs UI checks failed:');
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log(`Docs UI checks passed for ${docs.docsPages.length} routes.`);
