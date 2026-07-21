# Ryvra Protocol (v1)

Ryvra is an **Account Abstraction (EIP-4337)** and **Unified Assets** protocol for programmable payments and multi-asset markets.

> **Core idea:** every valid user transaction is a measurable contribution to the network.  
> Ryvra uses **Proof of Transaction (PoT)** to reward contributors with protocol tokens.

---

## What Ryvra does

- **Smart Accounts (EIP-4337):** user operations, session keys, spending policies
- **Gas Abstraction:** paymaster-enabled sponsored or flexible fee payment
- **Unified Assets:** one canonical asset model across stablecoins, crypto, RWAs, and metals
- **Shared Ledger + Settlement:** consistent balances and reconciliation across products
- **Proof of Transaction (PoT):** transparent contribution accounting and token rewards

---

## Architecture at a glance

```text
Clients (Web/Mobile/API)
   ↓
API Gateway + Auth
   ↓
AA Service (4337) ── Bundler/Paymaster
   ↓
Policy + Risk Engine
   ↓
Unified Asset Registry + Ledger + Settlement
   ↓
Ryvra Pay (rails) + Ryvra Markets (trading)
   ↓
PoT Engine (contribution scoring + rewards)
```

---

## Proof of Transaction (PoT)

PoT is Ryvra’s incentive layer.

### High-level flow
1. User submits a valid transaction intent/UserOp.
2. Transaction is executed and finalized.
3. Contribution event is recorded (with anti-abuse checks).
4. Reward score is computed by policy.
5. Tokens are distributed on epoch settlement.

### Goals
- Reward real economic activity.
- Discourage spam/wash activity.
- Align long-term usage with long-term ownership.

> PoT parameters are governed and may evolve (weights, caps, eligibility rules).

---

## Repository goals (v1)

- Define protocol interfaces and core specs.
- Ship reference implementation for:
  - account abstraction orchestration,
  - unified asset registry,
  - contribution/reward accounting.
- Provide SDK and API foundations for Ryvra Pay and Ryvra Markets.

---

## Status

⚠️ **Early-stage protocol repository (v1 draft).**  
Interfaces and RFCs are expected to evolve rapidly.

---

## Documentation

- `docs/rfc-0001-aa-unified-assets.md` — AA + Unified Assets protocol spec (v1)
- `docs/tokenomics-proof-of-transaction.md` — PoT design and reward policy (draft)
- `docs/security-model.md` — threat model and controls (draft)

---

## Design principles

- **User sovereignty:** user signatures and account policies are authoritative
- **Determinism:** contribution accounting should be auditable and reproducible
- **Safety:** anti-sybil, anti-spam, anti-wash controls are mandatory
- **Composability:** apps build on protocol primitives, not bespoke flows
- **Compliance-ready:** modular risk and policy hooks by jurisdiction/product

---

## Quick start (placeholder)

```bash
pnpm install
pnpm dev
```

(Setup docs will be expanded as modules are published.)

---

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

---

## Contributing

We welcome protocol feedback, architecture critiques, and implementation PRs.

- Open an issue for design discussion
- Link proposals to an RFC
- Include test coverage for critical logic

---

## License

TBD (recommended: dual model for protocol code + docs governance policy).
