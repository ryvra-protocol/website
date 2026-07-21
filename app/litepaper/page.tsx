import { Section } from "@/components/Section";

export default function LitepaperPage() {
  return (
    <Section title="Ryvra Litepaper: Tokenomics Snapshot">
      <p className="lead">
        Ryvra uses Proof of Transaction (PoT) to reflect verifiable network
        participation before and after TGE. The model prioritizes utility and
        measurable activity rather than passive holding.
      </p>

      <h3>Key mechanics</h3>
      <ul>
        <li>Daily baseline points cap: 2 points per eligible account.</li>
        <li>Epoch-based halving: emission decreases proportionally per epoch.</li>
        <li>Pre-TGE accounting period informs initial allocation logic.</li>
      </ul>

      <h3>Readable formulas</h3>
      <p>
        Daily Points = min(2, Eligible Activity Score × Epoch Weight)
      </p>
      <p>
        Epoch Weight(e) = 1 / 2^(e-1)
      </p>
      <p>
        Total Points = Σ Daily Points across approved participation windows
      </p>

      <h3>Timing note</h3>
      <p>
        Current planning references a Q4 2026 TGE window, subject to protocol
        readiness, governance, and legal review.
      </p>

      <h3>Disclaimer</h3>
      <p className="disclaimer">
        This litepaper summary is informational only, is subject to legal review,
        and does not represent an offer, solicitation, investment guarantee, or
        promise of token value.
      </p>
    </Section>
  );
}
