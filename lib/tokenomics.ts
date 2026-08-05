export type TokenomicsFaqItem = {
  question: string;
  answer: string;
};

export type AllocationEnvelopeRange = {
  label: string;
  min: number;
  max: number;
};

export type TokenomicsKeyParameter = {
  label: string;
  detail: string;
};

export const TOKENOMICS_AS_OF_DATE = "2026-08-05";
export const TOKENOMICS_LITEPAPER_STATUS = "Public Draft — Non-binding";
export const TOKENOMICS_LITEPAPER_VERSION = "v1.0";
export const TOKENOMICS_CANONICAL_SOURCE_PATH = "lib/tokenomics.ts";

export const TOKENOMICS_CAP_HALVING_STEPS = [
  { epoch: 0, dailyMax: 2.0 },
  { epoch: 1, dailyMax: 1.0 },
  { epoch: 2, dailyMax: 0.5 },
  { epoch: 3, dailyMax: 0.25 },
] as const;

export const TOKENOMICS_ELIGIBILITY_FUNNEL_STAGES = [
  "Submitted transactions",
  "Finalized transactions",
  "Policy-compliant transactions",
  "Anti-abuse pass set",
  "Credited points",
] as const;

export const TOKENOMICS_POLICY_ASSUMPTIONS = [
  "Base launch cap is 2.0 points/day/account (maximum) in epoch 0.",
  "Illustrative cap schedule uses daily_max(n) = 2 × (0.5)^n (2.0 → 1.0 → 0.5 → 0.25).",
  "Working epoch cadence is 90 days unless governance approves a different cadence.",
  "Current roadmap target references a Q4 2026 TGE window.",
] as const;

export const TOKENOMICS_GOVERNANCE_PARAMETERS = [
  "Epoch duration, epoch start dates, and halving boundaries.",
  "Eligibility thresholds, risk controls, anti-abuse tuning, and concentration limits.",
  "Points-to-token conversion allocation size and vesting or unlock schedule design.",
] as const;

export const TOKENOMICS_LEGAL_COMPLIANCE_CONSTRAINTS = [
  "Participation, accrual, and claims may be limited by jurisdiction and compliance requirements.",
  "Points are a program metric before TGE and are not tokens before issuance terms are published.",
  "Final token mechanics require legal/compliance review and governance approval before publication.",
] as const;

export const TOKENOMICS_FAQ_ITEMS: readonly TokenomicsFaqItem[] = [
  {
    question: "What is Proof of Transaction (PoT)?",
    answer:
      "PoT is Ryvra’s pre-TGE contribution framework. Eligible, finalized, policy-compliant transactions can accrue contribution points before TGE.",
  },
  {
    question: "Are all transactions eligible?",
    answer:
      "No. Transactions must finalize successfully, satisfy policy rules and thresholds, and pass anti-abuse checks before points are credited.",
  },
  {
    question: "Is there a daily earning cap?",
    answer:
      "Yes. The current launch assumption is a maximum of 2.0 points/day/account in epoch 0.",
  },
  {
    question: "What does “halved proportionally” mean?",
    answer:
      "The daily maximum points cap is modeled to halve by epoch index (2.0 → 1.0 → 0.5 → 0.25 in the current illustration).",
  },
  {
    question: "Can points be reduced or removed?",
    answer:
      "Yes. Ryvra policy can reduce, delay, or void points for sybil, wash, spam, manipulative, or otherwise non-compliant behavior.",
  },
  {
    question: "How are points converted at TGE?",
    answer:
      "Conversion is proportional to eligible snapshot points: user_RYV = (user_eligible_points / total_eligible_points) × TGE_points_allocation.",
  },
  {
    question: "Are points tokens today?",
    answer:
      "No. Points are a pre-TGE program metric and do not represent token ownership before final issuance terms are published.",
  },
  {
    question: "Is the TGE date fixed?",
    answer:
      "No. The current roadmap references Q4 2026, and timing can change based on governance, legal/compliance, and readiness reviews.",
  },
  {
    question: "Will unlock or vesting mechanics be the same for all participants?",
    answer:
      "Not necessarily. Final unlock and vesting mechanics will be published in final token documentation after approvals.",
  },
  {
    question: "Is participation available in every jurisdiction?",
    answer:
      "No. Participation and claiming availability can vary by jurisdiction and applicable compliance constraints.",
  },
];

export const TOKENOMICS_TGE_FORMULA =
  "user_RYV = (user_eligible_points / total_eligible_points) × TGE_points_allocation";

export const TOKENOMICS_TGE_EXAMPLE = {
  userEligiblePoints: 12_500,
  totalEligiblePoints: 10_000_000,
  tgePointsAllocation: 120_000_000,
  userSharePercent: 0.125,
  illustrativeTokens: 150_000,
} as const;

export const TOKENOMICS_ALLOCATION_ENVELOPE_RANGES: readonly AllocationEnvelopeRange[] = [
  { label: "Community & Ecosystem", min: 35, max: 50 },
  { label: "Team & Contributors", min: 15, max: 25 },
  { label: "Investors / Treasury", min: 15, max: 30 },
  { label: "Liquidity & Market Ops", min: 5, max: 15 },
];

export const TOKENOMICS_VISUAL_DISCLOSURE =
  "Illustrative and non-final. Informational only, not investment advice, not an offer or solicitation, and not a guarantee of token issuance, value, or return.";

export const TOKENOMICS_KEY_PARAMETERS: readonly TokenomicsKeyParameter[] = [
  {
    label: "Daily cap",
    detail: "2.0 points/day/account maximum in epoch 0 under current public assumptions.",
  },
  {
    label: "Halving rule",
    detail:
      "Illustrative cap schedule follows daily_max(n) = 2 × (0.5)^n (2.0 → 1.0 → 0.5 → 0.25).",
  },
  {
    label: "Eligibility",
    detail:
      "Transactions must finalize, satisfy policy thresholds, and remain compliance-aligned before point accrual.",
  },
  {
    label: "Anti-abuse controls",
    detail:
      "Policy can reduce, delay, or void points for sybil, wash, spam, manipulative, or otherwise non-compliant behavior.",
  },
  {
    label: "Conversion framework",
    detail:
      `Proportional snapshot conversion uses ${TOKENOMICS_TGE_FORMULA} with governance-defined allocation inputs.`,
  },
] as const;

export const TOKENOMICS_CONVERSION_POLICY_DISCLOSURE =
  "Legal/policy disclosure: conversion inputs, eligible-point snapshots, and any issuance mechanics are non-final and require governance plus legal/compliance approval.";

export const TOKENOMICS_ALLOCATION_POLICY_DISCLOSURE =
  "Legal/policy disclosure: allocation envelopes are illustrative only and may change after governance decisions and legal/compliance review.";
