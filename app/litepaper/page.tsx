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
const metadataTitle = "Litepaper";
const metadataDescription =
  "Audience-first Ryvra litepaper covering programmable financial authority, safety boundaries, settlement truth, confidentiality, and tokenomics links.";
const canonicalUrl = `${siteUrl}/litepaper`;

const overviewCards = [
  {
    title: "For users",
    body: "Ryvra helps people use programmable finance without needing to trust an AI with unrestricted wallet control.",
  },
  {
    title: "For merchants",
    body: "Ryvra gives operations teams one control model for payments, payouts, reconciliation, and escalation.",
  },
  {
    title: "For developers",
    body: "Ryvra exposes clear boundaries for what software may propose, what governed systems may approve, and what deterministic services may execute.",
  },
] as const;

const authorityReasons = [
  "It keeps approval logic reviewable instead of burying it inside an AI prompt or agent runtime.",
  "It lets teams automate low-friction work without giving up human governance, spend controls, or emergency suspension paths.",
  "It creates one trust model across payments, markets, treasury, and future confidential workflows.",
] as const;

const safetyBoundaries = [
  "Agents can propose intents, but they do not get unrestricted private keys or self-issued permissions.",
  "Verified identity, mandates, policy versions, and independent risk checks decide what can move forward.",
  "Replay controls, rate controls, spend controls, and kill switches stay outside agent reasoning.",
] as const;

const truthLayerItems = [
  "The ledger records balances and state transitions that other systems reconcile against.",
  "Settlement marks when a workflow is truly final rather than merely requested or optimistic.",
  "Provenance preserves the evidence chain from proposal to authorization, execution, and any intervention later.",
] as const;

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
    <Section id="litepaper" title="Ryvra Litepaper">
      <p className="lead">
        Status: {TOKENOMICS_LITEPAPER_STATUS} · Version: {TOKENOMICS_LITEPAPER_VERSION}
        {" · "}As of {TOKENOMICS_AS_OF_DATE}
      </p>
      <p>
        Ryvra is programmable financial infrastructure for a simple idea: software can
        help propose what should happen, but authority over money still has to be
        governed, reviewable, and safe.
      </p>
      <p className="disclaimer">
        Canonical tokenomics source-of-truth: <code>{TOKENOMICS_CANONICAL_SOURCE_PATH}</code>.
        Editorial mirrors in <code>content/</code> stay aligned to that source.
      </p>

      <h3 id="what-ryvra-is">What Ryvra is</h3>
      <p>
        Ryvra separates AI reasoning from financial authority. That means an agent can
        suggest a payment, trade, treasury move, or workflow step, while Ryvra decides
        whether that request is in scope, safe, and authorized before anything executes.
      </p>
      <div className="grid grid-3">
        {overviewCards.map((card) => (
          <article className="card" key={card.title}>
            <strong>{card.title}</strong>
            <p>{card.body}</p>
          </article>
        ))}
      </div>

      <h3 id="why-programmable-financial-authority-matters">
        Why programmable financial authority matters
      </h3>
      <p>
        The hard problem is not getting an AI to generate an idea. The hard problem is
        making sure only the right ideas can become real financial actions.
      </p>
      <ul>
        {authorityReasons.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h3 id="how-agent-safety-boundaries-work">How agent safety boundaries work</h3>
      <p>
        Ryvra uses the Agent Gateway and control-plane systems to keep proposal logic
        separate from execution authority. The result is bounded automation instead of
        opaque AI control.
      </p>
      <ul>
        {safetyBoundaries.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h3 id="how-ledger-settlement-and-provenance-fit-together">
        How ledger, settlement, and provenance fit together
      </h3>
      <p>
        Ryvra is designed so people, products, and auditors can tell the difference
        between a request, an approval, an execution step, and a final financial
        outcome.
      </p>
      <ul>
        {truthLayerItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h3 id="confidential-execution-and-private-markets">
        Confidential execution and private markets
      </h3>
      <p>
        Some financial workflows need sensitive data to stay protected. Ryvra extends
        the same authority, risk, and settlement model into protected execution
        environments so private processing does not become ungoverned processing.
      </p>
      <p>
        In plain language: privacy changes where data is processed, not who gets to
        approve actions or how teams audit the result.
      </p>

      <h3 id="overview-first-deep-spec-second">Overview first, deep spec second</h3>
      <p>
        Start with the audience-first docs if you want the shortest path to understanding
        the trust model, then use the tokenomics and RFC layers when you need exact
        terminology or deeper implementation detail.
      </p>
      <div className="button-row">
        <Link className="button button-secondary" href="/docs/tokenomics/litepaper-faq">
          Litepaper FAQ
        </Link>
        <Link className="button button-secondary" href="/docs/tokenomics/tokenomics-faq">
          Tokenomics FAQ
        </Link>
        <Link className="button button-secondary" href="/docs/rfc-technical-specs">
          RFC / technical specs
        </Link>
      </div>

      <h3 id="key-parameters">Tokenomics snapshot</h3>
      <p>
        Ryvra keeps the tokenomics overview readable here and the structured assumptions
        below so readers can distinguish current public framing from later, deeper
        specification detail.
      </p>
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

      <h3 id="governance-adjustable-parameters">Governance-adjustable parameters</h3>
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

      <h3 id="tokenomics-visuals">Illustrative visuals</h3>
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

      <h3 id="tokenomics-faq-preview">Questions readers usually ask next</h3>
      <div className="grid grid-2">
        {TOKENOMICS_FAQ_ITEMS.slice(0, 4).map((item) => (
          <article className="card" key={item.question}>
            <strong>{item.question}</strong>
            <p>{item.answer}</p>
          </article>
        ))}
      </div>
      <div className="button-row">
        <Link className="button button-secondary" href="/docs/tokenomics/litepaper-faq#faq-1">
          Start with litepaper FAQs
        </Link>
        <Link className="button button-secondary" href="/docs/tokenomics/tokenomics-faq#faq-1">
          Start with tokenomics FAQs
        </Link>
      </div>
    </Section>
  );
}
