import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Operations",
  description:
    "Operations guidance for production integrations across Ryvra Unified Assets and ERC-4337 execution flows.",
  alternates: { canonical: "/docs/operations" },
  openGraph: {
    title: "Ryvra Operations Guidance",
    description:
      "Operational assumptions and escalation paths for production Ryvra integrations.",
    url: "https://ryvra.org/docs/operations",
    type: "article",
  },
};

export default function OperationsPage() {
  return (
    <Section title="Operations Guidance">
      <p className="lead">
        Operations ownership should include monitoring, reconciliation controls,
        and incident escalation for policy-gated execution flows.
      </p>

      <h3>Operational checklist</h3>
      <ul>
        <li>Monitor execution acceptance, rejection, and fallback rates.</li>
        <li>Reconcile execution outputs against ledger state on every release.</li>
        <li>Track compatibility version changes before production cutovers.</li>
        <li>Maintain tested escalation paths for integration and security events.</li>
      </ul>

      <div className="button-row">
        <Link className="button button-secondary" href="/docs/reliability">
          Reliability posture
        </Link>
        <Link className="button button-primary" href="/docs/release-notes">
          Release highlights
        </Link>
      </div>
    </Section>
  );
}
