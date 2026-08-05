# Ryvra Litepaper: Tokenomics Production Snapshot

**As of:** 2026-08-05

Ryvra applies Proof of Transaction (PoT) to align measurable participation with network growth while separating current assumptions from governance-adjustable and legal/compliance-constrained elements.

## Current policy assumptions

- Base launch cap is **2.0 points/day/account (maximum)** in epoch 0.
- Illustrative cap schedule uses `daily_max(n) = 2 × (0.5)^n` with 2.0 → 1.0 → 0.5 → 0.25.
- Working epoch cadence is 90 days unless governance approves a different cadence.
- Current roadmap target references a Q4 2026 TGE window.

## Governance-adjustable parameters

- Epoch duration, epoch start dates, and halving boundaries.
- Eligibility thresholds, risk controls, anti-abuse tuning, and concentration limits.
- Points-to-token conversion allocation size and vesting or unlock schedule design.

## Legal and compliance constraints

- Participation, accrual, and claims may be limited by jurisdiction and compliance requirements.
- Points are a program metric before TGE and are not tokens before issuance terms are published.
- Final token mechanics require legal/compliance review and governance approval before publication.

## Visual reference set (illustrative, non-final)

1. **Cap Halving Step Chart:** epoch index vs daily max points (2.0 → 1.0 → 0.5 → 0.25).
2. **Eligibility Funnel:** submitted tx → finalized → policy-compliant → anti-abuse pass → credited points.
3. **TGE Conversion Card:** proportional formula with worked example.
4. **Allocation Envelope Range Bar:** non-final allocation ranges for major buckets.

## Formula and worked example

- Formula: `user_RYV = (user_eligible_points / total_eligible_points) × TGE_points_allocation`
- Example inputs:
  - `user_eligible_points = 12,500`
  - `total_eligible_points = 10,000,000`
  - `TGE_points_allocation = 120,000,000 RYV`
  - `user_share = 0.125%`
  - `illustrative_user_RYV = 150,000 RYV`

## Allocation envelope ranges (illustrative)

- Community & Ecosystem: **35–50%**
- Team & Contributors: **15–25%**
- Investors / Treasury: **15–30%**
- Liquidity & Market Ops: **5–15%**

## Disclosure

Illustrative and non-final. Informational only, not investment advice, not an offer or solicitation, and not a guarantee of token issuance, value, or return.
