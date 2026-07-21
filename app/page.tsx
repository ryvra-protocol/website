import Link from "next/link";
import { Section } from "@/components/Section";

const faqItems = [
  {
    q: "What is Proof of Transaction (PoT)?",
    a: "PoT is Ryvra’s contribution framework. Eligible, finalized, policy-compliant transactions generate contribution points before TGE.",
  },
  {
    q: "How do I earn points?",
    a: "By performing eligible transactions on Ryvra products/modules. Activity must pass quality and anti-abuse checks.",
  },
  {
    q: "Is there a daily earning cap?",
    a: "Yes. Base cap starts at 2 points/day/account.",
  },
  {
    q: "What does halved proportionally mean?",
    a: "The daily max points cap decreases by half each epoch: 2.0 → 1.0 → 0.5 → 0.25 ...",
  },
];

export default function HomePage() {
  return (
    <>
      <Section className="hero" title="Ryvra Protocol">
        <h1>Every transaction contributes.</h1>
        <p className="lead">
          Ryvra is the Account Abstraction and Unified Assets protocol for
          payments and markets—where verified transaction activity earns
          contribution rewards through Proof of Transaction.
        </p>
        <div className="button-row">
          <Link className="button button-primary" href="/build">
            Build on Ryvra
          </Link>
          <Link className="button button-secondary" href="/litepaper">
            Read the Litepaper
          </Link>
        </div>
      </Section>

      <Section title="Why Ryvra">
        <p className="lead">
          Finance is fragmented by default. Ryvra unifies account execution,
          asset state, and incentives into one programmable protocol so teams can
          build reliable payment and market experiences on shared foundations.
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
            <p>Compliance-ready controls and modular enforcement by product and region.</p>
          </article>
          <article className="card">
            <strong>PoT Rewards Engine</strong>
            <p>Transparent accounting for contribution and reward distribution.</p>
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
          Ryvra rewards eligible economic activity via Proof of Transaction.
          Before TGE, users earn points under transparent caps and anti-abuse
          rules.
        </p>
        <ul>
          <li>Base launch cap: 2 points/day/account.</li>
          <li>Epoch model: cap halves proportionally over time.</li>
          <li>Target TGE window: Q4 2026 (subject to updates).</li>
        </ul>
        <p className="disclaimer">
          Tokenomics parameters may evolve through governance and legal review.
          This content is informational and does not constitute investment advice.
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
          <Link className="button button-secondary" href="/docs/tokenomics-faq">
            View full FAQ
          </Link>
          <Link className="button button-primary" href="/docs">
            Explore docs
          </Link>
        </div>
      </Section>
    </>
  );
}
