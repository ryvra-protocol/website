import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { loadDocsModule } from './docs-validation-data.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const docs = loadDocsModule();
const docsPages = docs.docsPages;
const docsPageOrder = docs.docsPageOrder;
const getDocBreadcrumbs = docs.getDocBreadcrumbs;
const getDocNeighbors = docs.getDocNeighbors;

const errors = [];
const pageByHref = new Map();
const placeholderPattern = /\b(placeholder|coming soon|tba|tbd|scaffold|deferred)\b/i;
const sitemapFilePath = path.resolve(__dirname, '..', 'app', 'sitemap.ts');

function normalizeToken(value) {
  return value
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

function flattenDocsListItems(items = []) {
  return items.flatMap((item) => {
    if (typeof item === 'string') {
      return [item];
    }

    return [
      item.summary,
      item.body || '',
      item.code || '',
      ...flattenDocsListItems(item.children || []),
    ];
  });
}

if (!Array.isArray(docsPages) || docsPages.length === 0) {
  errors.push('docsPages is empty.');
}

if (!Array.isArray(docsPageOrder) || docsPageOrder.length === 0) {
  errors.push('docsPageOrder is empty.');
}

for (const page of docsPages) {
  if (pageByHref.has(page.href)) {
    errors.push(`Duplicate docs page href found: ${page.href}`);
    continue;
  }
  pageByHref.set(page.href, page);

  if (!page.metadataTitle || !page.metadataDescription) {
    errors.push(`Missing metadata title/description for route: ${page.href}`);
  }

  if (!page.lastUpdated) {
    errors.push(`Missing lastUpdated marker for route: ${page.href}`);
  }

  if (!page.compatibilityWindow) {
    errors.push(`Missing compatibilityWindow marker for route: ${page.href}`);
  }

  const text = [
    page.title,
    page.description,
    page.calloutTitle,
    page.calloutBody,
    ...page.headings.flatMap((heading) => [
      heading.title,
      heading.body || '',
      ...(heading.audience || []),
      ...flattenDocsListItems(heading.bullets || []),
      ...flattenDocsListItems(heading.steps || []),
    ]),
  ].join(' ');

  if (placeholderPattern.test(text)) {
    errors.push(`Placeholder language found in route: ${page.href}`);
  }
}

const uniqueOrderEntries = new Set(docsPageOrder);
if (uniqueOrderEntries.size !== docsPageOrder.length) {
  errors.push('docsPageOrder contains duplicate href entries.');
}

for (const href of docsPageOrder) {
  if (!pageByHref.has(href)) {
    errors.push(`docsPageOrder contains unknown href: ${href}`);
  }
}

if (docsPageOrder.length !== docsPages.length) {
  errors.push(`docsPageOrder length (${docsPageOrder.length}) does not match docsPages length (${docsPages.length}).`);
}

for (const page of docsPages) {
  if (page.href !== '/docs' && !page.parentHref) {
    errors.push(`Orphan docs route without parentHref: ${page.href}`);
  }

  if (page.parentHref && !pageByHref.has(page.parentHref)) {
    errors.push(`Route ${page.href} has missing parent route: ${page.parentHref}`);
  }

  const breadcrumbs = getDocBreadcrumbs(page.href);
  if (breadcrumbs.length === 0) {
    errors.push(`Breadcrumbs missing for route: ${page.href}`);
    continue;
  }

  if (breadcrumbs[0].href !== '/docs') {
    errors.push(`Breadcrumbs for ${page.href} do not start at /docs.`);
  }

  if (breadcrumbs[breadcrumbs.length - 1].href !== page.href) {
    errors.push(`Breadcrumbs for ${page.href} do not end at current route.`);
  }

  for (const heading of page.headings) {
    const normalizedTitle = normalizeToken(heading.title);
    const normalizedId = normalizeToken(heading.id);
    if (
      normalizedTitle === 'last updated' ||
      normalizedId === 'last updated' ||
      normalizedTitle === 'compatibility window' ||
      normalizedId === 'compatibility window'
    ) {
      errors.push(`Inline metadata heading found in ${page.href}#${heading.id}; metadata must render in footer only.`);
    }

    for (const link of heading.links || []) {
      if (!pageByHref.has(link.href)) {
        errors.push(`Broken docs link ${link.href} referenced from ${page.href}#${heading.id}`);
      }
    }
  }

  const { previous, next } = getDocNeighbors(page.href);
  const index = docsPageOrder.indexOf(page.href);
  const expectedPrevious = docsPageOrder[index - 1];
  const expectedNext = docsPageOrder[index + 1];

  if ((previous && previous.href) !== expectedPrevious) {
    errors.push(`Previous-page sequence mismatch at route: ${page.href}`);
  }

  if ((next && next.href) !== expectedNext) {
    errors.push(`Next-page sequence mismatch at route: ${page.href}`);
  }
}

const docsLanding = pageByHref.get('/docs');
const landingLinks = new Set(
  (docsLanding?.headings || []).flatMap((heading) => (heading.links || []).map((link) => link.href)),
);
for (const personaHref of ['/docs/user-guide', '/docs/merchant-guide', '/docs/developer-guide']) {
  if (!landingLinks.has(personaHref)) {
    errors.push(`Landing page missing persona route link: ${personaHref}`);
  }
}

const sitemapSource = fs.readFileSync(sitemapFilePath, 'utf8');
if (!sitemapSource.includes('docsPageOrder')) {
  errors.push('Sitemap does not include docsPageOrder routes.');
}

if (errors.length > 0) {
  console.error('Docs link integrity check failed:');
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log(`Docs link integrity check passed for ${docsPages.length} routes.`);
