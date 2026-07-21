import { Section } from "@/components/Section";

const faqs = [
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
  {
    q: "Are all transactions eligible?",
    a: "No. Transactions must meet policy requirements (valid execution, thresholds, compliance checks, and anti-abuse criteria).",
  },
  {
    q: "Can points be removed?",
    a: "Yes. Ryvra can reduce or void points for behavior flagged as sybil, wash, spam, or manipulative.",
  },
  {
    q: "When is TGE?",
    a: "Target is Q4 2026.",
  },
  {
    q: "How are points converted at TGE?",
    a: "Using proportional allocation from the designated points conversion pool: user share = user eligible points / total eligible points.",
  },
  {
    q: "Are points tokens today?",
    a: "No. Points are a pre-TGE program metric and not a token.",
  },
  {
    q: "Will claims be fully unlocked at TGE?",
    a: "Final unlock/vesting mechanics will be published before TGE.",
  },
  {
    q: "How does Ryvra prevent whales from dominating rewards?",
    a: "Through caps, anti-abuse controls, policy scoring constraints, and potential concentration limits.",
  },
  {
    q: "Will policy parameters change?",
    a: "They may evolve. All material changes are versioned and publicly documented.",
  },
  {
    q: "Is participation available globally?",
    a: "Participation may be restricted by jurisdiction and compliance requirements.",
  },
  {
    q: "Where can I follow updates?",
    a: "Official Ryvra docs, announcements, and governance channels (to be published).",
  },
];

export default function TokenomicsFaqPage() {
  return (
    <Section title="Ryvra Tokenomics FAQ (v1)">
      <p className="lead">
        Frequently asked questions on Proof of Transaction (PoT), points policy,
        and pre-TGE participation mechanics.
      </p>
      <div className="grid grid-2">
        {faqs.map((item) => (
          <article className="card" key={item.q}>
            <strong>{item.q}</strong>
            <p>{item.a}</p>
          </article>
        ))}
      </div>
      <p className="disclaimer">
        This FAQ is informational only and may change through governance, legal,
        and policy updates.
      </p>
    </Section>
  );
}
