import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { loadDocsModule } from './docs-validation-data.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const litepaperFilePath = path.resolve(__dirname, '..', 'app', 'litepaper', 'page.tsx');
const litepaperSource = fs.readFileSync(litepaperFilePath, 'utf8');
const docs = loadDocsModule();
const pageByHref = new Map(docs.docsPages.map((page) => [page.href, page]));
const errors = [];

const requiredLitepaperIds = [
  'what-ryvra-is',
  'why-programmable-financial-authority-matters',
  'how-agent-safety-boundaries-work',
  'how-ledger-settlement-and-provenance-fit-together',
  'confidential-execution-and-private-markets',
];

for (const id of requiredLitepaperIds) {
  if (!litepaperSource.includes(`id="${id}"`)) {
    errors.push(`Litepaper page is missing required section id: ${id}`);
  }
}

for (const href of ['/docs/tokenomics/litepaper-faq', '/docs/tokenomics/tokenomics-faq']) {
  if (!litepaperSource.includes(`href="${href}"`) && !litepaperSource.includes(`href={"${href}"}`)) {
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

  const faqHeadings = page.headings.filter((heading) => heading.id.startsWith('faq-'));
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
