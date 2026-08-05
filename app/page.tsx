import Link from "next/link";
import { AllocationEnvelopeRangeBar } from "@/components/tokenomics/AllocationEnvelopeRangeBar";
import { CapHalvingStepChart } from "@/components/tokenomics/CapHalvingStepChart";
import { EligibilityFunnelDiagram } from "@/components/tokenomics/EligibilityFunnelDiagram";
import { Section } from "@/components/Section";
import { TgeConversionCard } from "@/components/tokenomics/TgeConversionCard";
import {
  TOKENOMICS_AS_OF_DATE,
  TOKENOMICS_FAQ_ITEMS,
  TOKENOMICS_GOVERNANCE_PARAMETERS,
  TOKENOMICS_LEGAL_COMPLIANCE_CONSTRAINTS,
  TOKENOMICS_POLICY_ASSUMPTIONS,
  TOKENOMICS_VISUAL_DISCLOSURE,
} from "@/lib/tokenomics";

export default function HomePage() {
  return (
    <>
      <Section className="hero" title="Ryvra Protocol">
        <h1>Eligible transactions contribute.</h1>
        <p className="lead">
          Ryvra is an EIP-4337 account abstraction and Unified Assets protocol
          for payments and markets. Eligible, finalized, policy-compliant
          transactions can earn pre-TGE contribution points through Proof of
          Transaction (PoT).
        </p>
        <div className="button-row">
          <Link className="button button-primary" href="/build">
            Build on Ryvra
          </Link>
          <Link className="button button-secondary" href="/brand">
            Brand narrative
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
            <strong>Unified Assets</strong>
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

      <Section id="tokenomics-pot" title="Proof of Transaction (PoT)">
        <p className="lead">
          Proof of Transaction rewards eligible economic activity with points
          before TGE, under published caps and anti-abuse controls.
        </p>
        <ul>
          <li>{TOKENOMICS_POLICY_ASSUMPTIONS[0]}</li>
          <li>{TOKENOMICS_POLICY_ASSUMPTIONS[1]}</li>
          <li>
            As of {TOKENOMICS_AS_OF_DATE}, the roadmap target references a Q4
            2026 TGE window.
          </li>
        </ul>
      </Section>

      <Section id="tokenomics-snapshot" title="Tokenomics Snapshot">
        <p className="lead">
          Compact reference to current public tokenomics parameters.
        </p>
        <div className="grid grid-3">
          <article className="card">
            <strong>Current policy assumptions</strong>
            <ul className="tokenomics-list">
              {TOKENOMICS_POLICY_ASSUMPTIONS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="card">
            <strong>Governance-adjustable parameters</strong>
            <ul className="tokenomics-list">
              {TOKENOMICS_GOVERNANCE_PARAMETERS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="card">
            <strong>Legal/compliance constraints</strong>
            <ul className="tokenomics-list">
              {TOKENOMICS_LEGAL_COMPLIANCE_CONSTRAINTS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
        <p className="disclaimer">
          As of {TOKENOMICS_AS_OF_DATE}. {TOKENOMICS_VISUAL_DISCLOSURE}
        </p>
        <div className="button-row">
          <Link className="button button-secondary" href="#tokenomics-faq">
            Jump to homepage FAQ
          </Link>
          <Link className="button button-secondary" href="/litepaper#tokenomics-faq">
            Open litepaper FAQ view
          </Link>
        </div>
      </Section>

      <Section id="tokenomics-visuals" title="Tokenomics Visuals (Illustrative)">
        <p className="lead">
          Visual references for cap halving, eligibility funneling, proportional
          conversion, and allocation envelopes.
        </p>
        <p className="disclaimer">
          As of {TOKENOMICS_AS_OF_DATE}. {TOKENOMICS_VISUAL_DISCLOSURE}
        </p>
        <div className="tokenomics-visual-grid">
          <CapHalvingStepChart />
          <EligibilityFunnelDiagram />
          <TgeConversionCard />
          <AllocationEnvelopeRangeBar />
        </div>
      </Section>

      <Section id="tokenomics-faq" title="Tokenomics FAQ">
        <div className="grid grid-2">
          {TOKENOMICS_FAQ_ITEMS.map((item) => (
            <article className="card" key={item.question}>
              <strong>{item.question}</strong>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
        <div className="button-row">
          <Link className="button button-secondary" href="/litepaper#tokenomics-visuals">
            View tokenomics visuals on litepaper page
          </Link>
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
