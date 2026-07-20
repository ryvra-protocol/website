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
