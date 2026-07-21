import { Section } from "@/components/Section";

export default function LitepaperPage() {
  return (
    <Section title="Ryvra Tokenomics (Draft): Proof of Transaction, Points, and TGE Conversion">
      <p className="lead">
        Status: Draft (v0.1) · Last updated: 2026-07-17 · TGE target: Q4 2026
      </p>
      <p>
        Ryvra uses a two-phase incentive model: pre-TGE points for eligible
        transaction contribution, followed by transparent $RYV conversion at TGE.
      </p>

      <h3>1) Purpose</h3>
      <ol>
        <li>
          <strong>Pre-TGE:</strong> users earn Ryvra Points from eligible
          transaction activity.
        </li>
        <li>
          <strong>At TGE:</strong> finalized eligible points become redeemable
          for $RYV via published conversion rules.
        </li>
      </ol>

      <h3>2) Core principles</h3>
      <ul>
        <li>Contribution-first rewards tied to verified transaction utility.</li>
        <li>Abuse resistance with anti-sybil and anti-wash controls.</li>
        <li>Predictable, auditable policy-versioned scoring and caps.</li>
        <li>Distribution quality prioritized over aggressive emissions.</li>
      </ul>

      <h3>3) Pre-TGE points program</h3>
      <p>
        A transaction is points-eligible only if it is successfully finalized,
        policy-compliant, above minimum economic thresholds, and not flagged by
        anti-abuse rules.
      </p>
      <p>
        <strong>Base daily cap:</strong> 2.0 points/day/account (maximum, not a
        guarantee).
      </p>
      <p>
        <strong>Proportional halving:</strong> daily_max(n) = 2 × (0.5)^n with
        proposed 90-day epochs (final duration governance-defined).
      </p>

      <h3>4) Points scoring model (pre-TGE)</h3>
      <p>S_raw = f(notional, tx_type, quality, risk modifiers)</p>
      <p>P_day = min(Σ(S_raw × M), daily_max(n))</p>
      <ul>
        <li>M is a policy-controlled global scaling factor.</li>
        <li>daily_max(n) is the halving-adjusted cap per epoch.</li>
      </ul>
      <p>
        Suggested initial tx weighting includes payments and markets baseline
        weighting, optional settlement-quality bonus, and zero/penalty for
        no-value loops.
      </p>

      <h3>5) Anti-abuse and risk controls</h3>
      <p>
        Ryvra may reduce, delay, or void points for wash/circular behavior,
        sybil farming, inorganic volume, or exploitative scripting.
      </p>
      <ul>
        <li>Risk-tier participation limits and velocity caps.</li>
        <li>Cluster correlation analysis and delayed finality windows.</li>
        <li>Retroactive slashing for confirmed abuse.</li>
      </ul>

      <h3>6) Points ledger and transparency</h3>
      <p>
        Point events should store account id, timestamp, tx reference, policy
        version, raw score, modifiers/penalties, and final credited points.
      </p>
      <p>
        Ryvra should publish policy versions, epoch schedules, halving
        milestones, and aggregate points statistics.
      </p>

      <h3>7) TGE conversion framework</h3>
      <p>
        user_RYV = (user_eligible_points / total_eligible_points) ×
        TGE_Points_Allocation
      </p>
      <ul>
        <li>User points are finalized and non-slashed at snapshot.</li>
        <li>Snapshot time is announced in advance.</li>
        <li>Claims may use immediate unlock or vesting.</li>
      </ul>

      <h3>8) Draft allocation envelope (non-final)</h3>
      <ul>
        <li>Community & Ecosystem: 35–50%</li>
        <li>Team & Contributors: 15–25%</li>
        <li>Investors/Treasury: 15–30%</li>
        <li>Liquidity & Market Operations: 5–15%</li>
        <li>
          Pre-TGE points conversion bucket: subset of community allocation
          (example planning range 20–40% of community bucket)
        </li>
      </ul>

      <h3>9) Compliance and disclosure</h3>
      <p className="disclaimer">
        Points are a program metric before TGE and not guaranteed token value.
        Participation may be jurisdiction-restricted. Final TGE terms, policy
        parameters, and conversion mechanics are subject to governance and legal
        review.
      </p>

      <h3>10) TL;DR</h3>
      <ul>
        <li>Users earn points from real, verified transaction activity.</li>
        <li>Base cap starts at 2 points/day/account.</li>
        <li>Cap halves proportionally each epoch.</li>
        <li>
          Finalized points convert to $RYV at Q4 2026 TGE via proportional
          allocation.
        </li>
      </ul>
    </Section>
  );
}
