import type { Metadata } from "next";
import Link from "next/link";
import { AllocationEnvelopeRangeBar } from "@/components/tokenomics/AllocationEnvelopeRangeBar";
import { CapHalvingStepChart } from "@/components/tokenomics/CapHalvingStepChart";
import { EligibilityFunnelDiagram } from "@/components/tokenomics/EligibilityFunnelDiagram";
import { Section } from "@/components/Section";
import { TgeConversionCard } from "@/components/tokenomics/TgeConversionCard";
import {
  TOKENOMICS_ALLOCATION_POLICY_DISCLOSURE,
  TOKENOMICS_AS_OF_DATE,
  TOKENOMICS_CANONICAL_SOURCE_PATH,
  TOKENOMICS_CONVERSION_POLICY_DISCLOSURE,
  TOKENOMICS_FAQ_ITEMS,
  TOKENOMICS_GOVERNANCE_PARAMETERS,
  TOKENOMICS_KEY_PARAMETERS,
  TOKENOMICS_LEGAL_COMPLIANCE_CONSTRAINTS,
  TOKENOMICS_LITEPAPER_STATUS,
  TOKENOMICS_LITEPAPER_VERSION,
  TOKENOMICS_POLICY_ASSUMPTIONS,
  TOKENOMICS_VISUAL_DISCLOSURE,
} from "@/lib/tokenomics";

const siteUrl = "https://ryvra.org";
const metadataTitle = "Litepaper: Tokenomics Production Finalization";
const metadataDescription =
  "Production-safe tokenomics litepaper snapshot with canonical source wiring, structured parameters, and explicit policy disclosures.";
const canonicalUrl = `${siteUrl}/litepaper`;

export const metadata: Metadata = {
  title: metadataTitle,
  description: metadataDescription,
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: `Ryvra | ${metadataTitle}`,
    description: metadataDescription,
    url: canonicalUrl,
    type: "article",
  },
  twitter: {
    card: "summary",
    title: `Ryvra | ${metadataTitle}`,
    description: metadataDescription,
  },
};

export default function LitepaperPage() {
  return (
    <Section
      id="tokenomics-production-pass"
      title="Ryvra Tokenomics Litepaper Snapshot"
    >
      <p className="lead">
        Status: {TOKENOMICS_LITEPAPER_STATUS} · Version:{" "}
        {TOKENOMICS_LITEPAPER_VERSION} · As of {TOKENOMICS_AS_OF_DATE}
      </p>
      <p>
        This production snapshot aligns homepage and litepaper tokenomics
        wording under one canonical content model.
      </p>
      <p className="disclaimer">
        Canonical source-of-truth: <code>{TOKENOMICS_CANONICAL_SOURCE_PATH}</code>
        . Markdown companion files in <code>content/</code> mirror this source
        to avoid TSX/markdown policy drift.
      </p>

      <h3 id="key-parameters">Key parameters (structured snapshot)</h3>
      <div className="grid grid-2">
        {TOKENOMICS_KEY_PARAMETERS.map((parameter) => (
          <article className="card" key={parameter.label}>
            <strong>{parameter.label}</strong>
            <p>{parameter.detail}</p>
          </article>
        ))}
      </div>

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

      <h3 id="tokenomics-visuals">Phase 3 visuals reused (illustrative, non-final)</h3>
      <p className="disclaimer">
        As of {TOKENOMICS_AS_OF_DATE}. {TOKENOMICS_VISUAL_DISCLOSURE}
      </p>
      <div className="tokenomics-visual-grid">
        <CapHalvingStepChart />
        <EligibilityFunnelDiagram />
      </div>

      <h3 id="conversion-framework">Conversion framework (illustrative)</h3>
      <div className="tokenomics-visual-grid">
        <TgeConversionCard />
      </div>
      <p className="disclaimer">{TOKENOMICS_CONVERSION_POLICY_DISCLOSURE}</p>

      <h3 id="allocation-envelope">Allocation envelope (illustrative)</h3>
      <div className="tokenomics-visual-grid">
        <AllocationEnvelopeRangeBar />
      </div>
      <p className="disclaimer">{TOKENOMICS_ALLOCATION_POLICY_DISCLOSURE}</p>

      <h3 id="tokenomics-faq">Canonical tokenomics FAQ</h3>
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
        Homepage tokenomics and FAQ sections reuse the same canonical content
        model as this litepaper snapshot.
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
