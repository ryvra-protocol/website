import type { Metadata } from "next";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Reliability Posture",
  description:
    "Ryvra production reliability posture for policy gates, deterministic normalization, reconciliation, and fallback behavior.",
  alternates: { canonical: "/docs/reliability" },
  openGraph: {
    title: "Ryvra Reliability Posture",
    description:
      "Trust and reliability commitments for production unified assets and ERC-4337 execution.",
    url: "https://ryvra.org/docs/reliability",
    type: "article",
  },
};

export default function ReliabilityPage() {
  return (
    <Section title="Production Reliability and Trust Posture">
      <p className="lead">
        This page summarizes public reliability guarantees for production
        operation without exposing sensitive implementation details.
      </p>

      <h3>Policy-gated execution</h3>
      <p>
        Execution is evaluated against policy gates before state mutation. Flows
        that do not satisfy required controls fail closed.
      </p>

      <h3>Deterministic normalization</h3>
      <p>
        Supported asset and account inputs are normalized through deterministic
        rules so equivalent requests resolve to consistent outcomes.
      </p>

      <h3>Reconciliation guarantees</h3>
      <p>
        Execution, ledger, and settlement records are reconciled under versioned
        policy controls with auditable outcomes.
      </p>

      <h3>Fallback behaviors</h3>
      <p>
        When dependencies degrade, fallback paths prioritize state safety,
        deterministic failure handling, and recoverable operations.
      </p>
    </Section>
  );
}
