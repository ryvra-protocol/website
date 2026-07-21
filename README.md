# Ryvra Website

Public-facing Ryvra website and lightweight docs portal baseline.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS (minimal baseline)
- pnpm **10.16.0** (required)

## Local setup

1. Enable Corepack and activate pnpm 10.16.0:

   ```bash
   corepack enable
   corepack prepare pnpm@10.16.0 --activate
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Start development server:

   ```bash
   pnpm dev
   ```

## Scripts

- `pnpm dev` – local development
- `pnpm build` – production build
- `pnpm start` – run production server
- `pnpm lint` – lint checks
- `pnpm typecheck` – TypeScript type checks

## Deployment notes

- Vercel-ready by default (`next build` output).
- CI enforces lint, typecheck, and build before merge.
- No runtime secrets required for current static-first baseline.

## Content update workflow

- Reusable narrative files are in `/content`.
- Update markdown content first, then align page copy in `app/` routes.
- Keep institutional tone and include disclaimers for tokenomics references.
