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

export default function LitepaperPage() {
  return (
    <Section
      id="tokenomics-production-pass"
      title="Ryvra Tokenomics Production Snapshot"
    >
      <p className="lead">
        Status: Production hardening pass · As of {TOKENOMICS_AS_OF_DATE}
      </p>
      <p>
        This page aligns homepage tokenomics wording and the canonical FAQ
        source with a single production-ready framing of assumptions,
        governance-adjustable parameters, and compliance constraints.
      </p>

      <h3 id="current-policy-assumptions">Current policy assumptions</h3>
      <ul>
        {TOKENOMICS_POLICY_ASSUMPTIONS.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h3 id="governance-adjustable-parameters">
        Governance-adjustable parameters
      </h3>
      <ul>
        {TOKENOMICS_GOVERNANCE_PARAMETERS.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h3 id="legal-compliance-constraints">Legal and compliance constraints</h3>
      <ul>
        {TOKENOMICS_LEGAL_COMPLIANCE_CONSTRAINTS.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h3 id="tokenomics-visuals">Tokenomics visuals (illustrative, non-final)</h3>
      <p className="disclaimer">
        As of {TOKENOMICS_AS_OF_DATE}. {TOKENOMICS_VISUAL_DISCLOSURE}
      </p>
      <div className="tokenomics-visual-grid">
        <CapHalvingStepChart />
        <EligibilityFunnelDiagram />
        <TgeConversionCard />
        <AllocationEnvelopeRangeBar />
      </div>

      <h3 id="tokenomics-faq">Canonical tokenomics FAQ</h3>
      <p>
        Canonical source files are versioned in <code>content/tokenomics-faq.md</code>{" "}
        and <code>content/litepaper-tokenomics.md</code>.
      </p>
      <div className="grid grid-2">
        {TOKENOMICS_FAQ_ITEMS.map((item) => (
          <article className="card" key={item.question}>
            <strong>{item.question}</strong>
            <p>{item.answer}</p>
          </article>
        ))}
      </div>

      <h3>Cross-linkage</h3>
      <p>
        Tokenomics and FAQ wording on the homepage follows the same canonical
        content model as this page.
      </p>
      <div className="button-row">
        <Link className="button button-secondary" href="/#tokenomics-snapshot">
          Homepage tokenomics snapshot
        </Link>
        <Link className="button button-secondary" href="/#tokenomics-faq">
          Homepage tokenomics FAQ
        </Link>
      </div>
    </Section>
  );
}
