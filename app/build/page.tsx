import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Build with Ryvra",
  description:
    "Production integration entry point for teams building bounded autonomous-finance workflows on Ryvra.",
  alternates: { canonical: "/build" },
  openGraph: {
    title: "Build with Ryvra",
    description:
      "Integrator entry point with prerequisites, supported flows, and escalation links.",
    url: "https://ryvra.org/build",
    type: "website",
  },
};

export default function BuildPage() {
  return (
    <Section title="Build with Ryvra">
      <p className="lead">
        Build bounded autonomous-finance products on top of Ryvra’s control plane,
        execution plane, and ledger-backed settlement model.
      </p>

      <div className="grid grid-2">
        <article className="card">
          <strong>Start integration</strong>
          <p>Review API and SDK onboarding, environment assumptions, and first safe workflows.</p>
          <div className="button-row">
            <Link className="button button-primary" href="/docs/developer-guide/api-sdk-onboarding">
              API + SDK onboarding
            </Link>
          </div>
        </article>
        <article className="card">
          <strong>Validate control model</strong>
          <p>Review authority boundaries, security constraints, and governance expectations before production cutover.</p>
          <div className="button-row">
            <Link className="button button-secondary" href="/docs/governance-and-security-model">
              Governance + security model
            </Link>
          </div>
        </article>
      </div>

      <div className="grid grid-2">
        <article className="card">
          <strong>Study the architecture</strong>
          <p>Use the architecture overview and RFC index to align internal design and review paths.</p>
          <div className="button-row">
            <Link className="button button-secondary" href="/docs/developer-guide/architecture-overview">
              Architecture overview
            </Link>
            <Link className="button button-secondary" href="/docs/rfc-index">
              RFC index
            </Link>
          </div>
        </article>
        <article className="card">
          <strong>Prepare enterprise operations</strong>
          <p>Understand provenance, auditability, suspension, and emergency control patterns before go-live.</p>
          <div className="button-row">
            <Link className="button button-secondary" href="/docs/audit-and-provenance">
              Audit + provenance
            </Link>
          </div>
        </article>
      </div>

      <p>
        Integration and escalation contact: <a href="mailto:ecosystem@ryvra.org">ecosystem@ryvra.org</a>
      </p>
    </Section>
  );
}
