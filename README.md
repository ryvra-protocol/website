# Ryvra Website

Ryvra is programmable financial infrastructure for bounded autonomous finance.

> **Messaging baseline:** AI proposes, Ryvra authorizes, deterministic systems execute.  
> Ledger and settlement provide truth and finality.

---

## What this website communicates

- **Programmable authority:** identity, mandates, policy, and independent risk determine what can execute
- **Execution modules:** accounts, pay, markets, and treasury workflows share one authorization model
- **Truth layer:** ledger and settlement anchor balances, reconciliation, and terminal outcomes
- **Confidential execution:** sensitive financial state can remain private without giving up control or auditability
- **Bounded autonomy:** Ryvra avoids claims of unrestricted AI wallet control or self-governing agents

---

## Website surface ownership

| Surface | Ownership |
| --- | --- |
| `/` homepage messaging, architecture, security, provenance | Website + product marketing |
| `/capabilities/*` capability pages | Product + solutions engineering |
| `/build` developer and enterprise CTA path | Developer relations + integrations |
| `/brand` messaging framework narrative | Product marketing |
| `/docs/*` RFCs, onboarding, governance/security, provenance, integration docs | Developer relations + protocol/docs |

---

## Messaging framework

Use this framework consistently across the site:

1. **AI proposes** financial intents or workflow suggestions.
2. **Ryvra authorizes** through identity, mandates, policy, and deterministic risk.
3. **Deterministic systems execute** against accounts, markets, pay, and treasury modules.
4. **Ledger and settlement finalize** state, balances, and audit truth.
5. **Confidential execution extends** the platform for sensitive financial state and private perps.

Avoid copy that implies:

- unrestricted autonomous trading
- AI-controlled authority
- opaque or unauditable execution

---

## Source-of-truth documentation links

- Docs home: `/docs`
- Users track: `/docs/user-guide`
- Merchants track: `/docs/merchant-guide`
- Developers track: `/docs/developer-guide`
- Tokenomics: `/docs/tokenomics`
- Security and risk: `/docs/security-and-risk`
- RFC / technical specs: `/docs/rfc-technical-specs`

These docs routes are the canonical public-navigation layer for website messaging about architecture, authority, tokenomics, and trust boundaries.

---

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

---

## Scripts

- `pnpm dev` – local development
- `pnpm build` – production build
- `pnpm start` – run production server
- `pnpm lint` – lint checks
- `pnpm typecheck` – TypeScript type checks
- `pnpm docs:link-check` – docs route and internal link integrity checks
- `pnpm docs:anchor-check` – docs heading anchor normalization checks

---

## Stack

- Next.js 16 + App Router
- React 19
- TypeScript 5
- Tailwind CSS 4
- pnpm 10.16.0

---

## Maintenance notes

- Homepage and capability pages should use natural language and compliance-friendly wording.
- Update `/content/brand-narrative.md` when messaging framework changes.
- Update `/lib/docs.ts` when audience tracks, glossary terms, tokenomics links, or CTA targets change.
- Keep the docs portal in a “natural language first, spec second” structure.
- Check `/docs/docs-ia-v2` and `/docs/writing-style-and-templates` before making larger documentation IA changes.
