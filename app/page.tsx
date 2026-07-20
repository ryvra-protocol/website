import Link from "next/link";
import { Section } from "@/components/Section";

export default function HomePage() {
  return (
    <>
      <Section className="hero" title="Ryvra Thesis">
        <h1>Every transaction contributes.</h1>
        <p className="lead">
          Ryvra aligns Account Abstraction, Unified Assets, and Proof of
          Transaction into one interoperable account layer for coordinated global
          finance.
        </p>
        <div className="button-row">
          <Link className="button button-primary" href="/build">
            Build on Ryvra
          </Link>
          <Link className="button button-secondary" href="/litepaper">
            Read Litepaper
          </Link>
        </div>
      </Section>

      <Section title="The Problem">
        <p className="lead">
          Financial infrastructure is fragmented across chains, custodial silos,
          and incompatible account systems. This fragmentation increases cost,
          limits composability, and obscures verifiable participation.
        </p>
      </Section>

      <Section title="The Solution">
        <p className="lead">
          Ryvra introduces a unified account layer where users and applications
          can coordinate assets, identity, and transaction logic through one
          consistent execution model.
        </p>
      </Section>

      <Section title="Core Modules">
        <div className="grid grid-3">
          <article className="card">
            <strong>Accounts</strong>
            <p>Programmable AA-native accounts for secure user operations.</p>
          </article>
          <article className="card">
            <strong>Pay</strong>
            <p>Efficient payment rails designed for everyday and B2B flows.</p>
          </article>
          <article className="card">
            <strong>Markets</strong>
            <p>Shared liquidity and pricing primitives over unified assets.</p>
          </article>
        </div>
      </Section>

      <Section title="Proof of Transaction (PoT)">
        <ul>
          <li>Participation points begin during the pre-TGE phase.</li>
          <li>Baseline accrual is capped at 2 points per day.</li>
          <li>Emission scales by proportional halving across epochs.</li>
          <li>Current timeline references a Q4 2026 TGE target window.</li>
        </ul>
        <p className="disclaimer">
          Tokenomics parameters are subject to governance and legal review and
          do not constitute investment advice or performance commitments.
        </p>
      </Section>

      <Section title="For Developers and Ecosystem Partners">
        <p className="lead">
          Build account-native products, integrate Ryvra modules, and partner on
          ecosystem distribution and infrastructure pilots.
        </p>
        <div className="button-row">
          <Link className="button button-primary" href="/build">
            Start Builder Intake
          </Link>
          <Link className="button button-secondary" href="/docs">
            Explore Docs
          </Link>
        </div>
      </Section>
    </>
  );
}
