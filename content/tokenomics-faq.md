# Ryvra Tokenomics FAQ (Canonical v2)

**As of:** 2026-08-05

> Illustrative and non-final. Informational only, not investment advice, not an offer or solicitation, and not a guarantee of token issuance, value, or return.

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

## Frequently asked questions

### What is Proof of Transaction (PoT)?

PoT is Ryvra’s pre-TGE contribution framework. Eligible, finalized, policy-compliant transactions can accrue contribution points before TGE.

### Are all transactions eligible?

No. Transactions must finalize successfully, satisfy policy rules and thresholds, and pass anti-abuse checks before points are credited.

### Is there a daily earning cap?

Yes. The current launch assumption is a maximum of 2.0 points/day/account in epoch 0.

### What does “halved proportionally” mean?

The daily maximum points cap is modeled to halve by epoch index (2.0 → 1.0 → 0.5 → 0.25 in the current illustration).

### Can points be reduced or removed?

Yes. Ryvra policy can reduce, delay, or void points for sybil, wash, spam, manipulative, or otherwise non-compliant behavior.

### How are points converted at TGE?

Conversion is proportional to eligible snapshot points:
`user_RYV = (user_eligible_points / total_eligible_points) × TGE_points_allocation`.

### Are points tokens today?

No. Points are a pre-TGE program metric and do not represent token ownership before final issuance terms are published.

### Is the TGE date fixed?

No. The current roadmap references Q4 2026, and timing can change based on governance, legal/compliance, and readiness reviews.

### Will unlock or vesting mechanics be the same for all participants?

Not necessarily. Final unlock and vesting mechanics will be published in final token documentation after approvals.

### Is participation available in every jurisdiction?

No. Participation and claiming availability can vary by jurisdiction and applicable compliance constraints.
