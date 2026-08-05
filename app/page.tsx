import Link from "next/link";
import { Section } from "@/components/Section";

const faqItems = [
  {
    q: "What is Proof of Transaction (PoT)?",
    a: "PoT is Ryvra’s contribution framework. Eligible, finalized, policy-compliant transactions generate contribution points before TGE.",
  },
  {
    q: "Are all transactions eligible?",
    a: "No. Transactions must meet policy requirements (valid execution, thresholds, compliance checks, and anti-abuse criteria).",
  },
  {
    q: "Is there a daily earning cap?",
    a: "Yes. Base cap starts at 2 points/day/account.",
  },
  {
    q: "What does “halved proportionally” mean?",
    a: "The daily max points cap decreases by half each epoch: 2.0 → 1.0 → 0.5 → 0.25 ...",
  },
  {
    q: "How are points converted at TGE?",
    a: "Using proportional allocation from the designated points conversion pool: user share = user eligible points / total eligible points.",
  },
  {
    q: "Are points tokens today?",
    a: "No. Points are a pre-TGE program metric and not a token.",
  },
];

export default function HomePage() {
  return (
    <>
      <Section className="hero" title="Ryvra Protocol">
        <h1>Eligible transactions contribute.</h1>
        <p className="lead">
          Ryvra is an account abstraction and unified asset protocol for
          payments and markets. Eligible, finalized, policy-compliant
          transactions can earn pre-TGE contribution points through Proof of
          Transaction.
        </p>
        <div className="button-row">
          <Link className="button button-primary" href="/build">
            Build on Ryvra
          </Link>
          <Link className="button button-secondary" href="/docs/getting-started">
            Read docs
          </Link>
        </div>
      </Section>

      <Section title="Why Ryvra">
        <p className="lead">
          Ryvra reduces integration fragmentation by standardizing account
          execution, asset handling, and policy controls across protocol
          modules.
        </p>
        <div className="grid grid-2">
          <article className="card">
            <strong>EIP-4337 Account Abstraction</strong>
            <p>Smart accounts, UserOps, session policies, and composable controls.</p>
          </article>
          <article className="card">
            <strong>Unified Asset Model</strong>
            <p>One canonical framework across stablecoins, crypto, RWAs, and metals.</p>
          </article>
          <article className="card">
            <strong>Policy + Risk Hooks</strong>
            <p>Compliance-aware controls and modular enforcement by product and region.</p>
          </article>
          <article className="card">
            <strong>PoT Rewards Engine</strong>
            <p>Transparent points accounting for contribution and allocation policy.</p>
          </article>
        </div>
      </Section>

      <Section title="Built as protocol modules">
        <div className="grid grid-3">
          <article className="card">
            <strong>Ryvra Accounts</strong>
            <p>
              EIP-4337 smart account orchestration, session keys, sponsorship
              policy, and account-level controls.
            </p>
          </article>
          <article className="card">
            <strong>Ryvra Pay</strong>
            <p>
              Stablecoin rails for payouts, collections, and treasury movement
              with programmable policy checks.
            </p>
          </article>
          <article className="card">
            <strong>Ryvra Markets</strong>
            <p>
              Crypto/RWA/metals execution with shared account context and unified
              asset treatment.
            </p>
          </article>
        </div>
      </Section>

      <Section title="Proof of Transaction (PoT)">
        <p className="lead">
          Proof of Transaction rewards eligible economic activity with points
          before TGE, under published caps and anti-abuse controls.
        </p>
        <ul>
          <li>Base launch cap: 2 points/day/account (maximum, not a guarantee).</li>
          <li>Epoch model: daily_max(n) = 2 × (0.5)^n (proposed 90-day epochs).</li>
          <li>As of 2026-08-04, target TGE window is Q4 2026 (subject to governance and legal review).</li>
        </ul>
      </Section>

      <Section title="Tokenomics Snapshot">
        <p className="lead">
          Compact reference to current public tokenomics parameters.
        </p>
        <div className="grid grid-2">
          <article className="card">
            <strong>Base cap</strong>
            <p>2 points/day/account maximum during the initial epoch.</p>
          </article>
          <article className="card">
            <strong>Proportional halving model</strong>
            <p>daily_max(n) = 2 × (0.5)^n with proposed 90-day epochs.</p>
          </article>
          <article className="card">
            <strong>Eligibility conditions</strong>
            <p>Transactions must be finalized, policy-compliant, threshold-valid, and pass anti-abuse checks.</p>
          </article>
          <article className="card">
            <strong>TGE proportional conversion</strong>
            <p>user share = user eligible points / total eligible points from the designated conversion allocation.</p>
          </article>
        </div>
        <p className="disclaimer">
          Informational only. Not investment advice, an offer of securities, or
          a promise of token value. Participation and claims may be restricted
          by jurisdiction. Final parameters remain subject to governance and
          legal review.
        </p>
      </Section>

      <Section title="Tokenomics FAQ">
        <div className="grid grid-2">
          {faqItems.map((item) => (
            <article className="card" key={item.q}>
              <strong>{item.q}</strong>
              <p>{item.a}</p>
            </article>
          ))}
        </div>
        <div className="button-row">
          <Link className="button button-secondary" href="/docs/glossary">
            View glossary
          </Link>
          <Link className="button button-primary" href="/docs">
            Explore docs
          </Link>
        </div>
      </Section>
    </>
  );
}
