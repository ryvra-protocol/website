# Contributing

## Development standard

- Use **pnpm 10.16.0** only.
- Keep changes minimal, typed, and maintainable.
- Maintain institutional-grade language and avoid speculative token language.

## Local workflow

1. `corepack prepare pnpm@10.16.0 --activate`
2. `pnpm install`
3. `pnpm lint && pnpm typecheck && pnpm build`

## Pull requests

- Include a clear summary of page/component/content changes.
- Note any tokenomics or legal-disclaimer related text updates.
- Keep follow-up work in TODO sections when backend systems are not yet implemented.

## FAQ authoring

- Author live docs FAQ pages in `/lib/docs.ts` and keep editorial mirrors in `/content/` aligned when those pages are reader-facing source material.
- Add `audience` tags to each FAQ entry using `User`, `Merchant`, and/or `Developer`.
- Lead with a direct natural-language answer, then link to deeper docs instead of front-loading jargon.

## Collapsible docs lists

- Docs lists are rendered globally as semantic `<details>/<summary>` items through `/components/docs/DocsList.tsx`.
- Keep each list item's visible summary readable on its own because collapsed state is the default presentation.
- Use nested `children` only when the extra detail truly belongs under the parent list item.
- Avoid relying on raw markdown-only list formatting tricks; author structured list content in `/lib/docs.ts` so nested details, code blocks, and links stay predictable.
