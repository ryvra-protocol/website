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

const path = [
  {
    title: "Start the integration",
    body: "Review API and SDK onboarding, environment assumptions, and the first workflows that are safe to run.",
    links: [{ href: "/docs/developer-guide/api-sdk-onboarding", label: "API and SDK onboarding" }],
  },
  {
    title: "Validate the control model",
    body: "Confirm authority boundaries, security constraints and governance expectations before any production cutover.",
    links: [{ href: "/docs/governance-and-security-model", label: "Governance and security model" }],
  },
  {
    title: "Study the architecture",
    body: "Align internal design and review paths against the architecture overview and the RFC index.",
    links: [
      { href: "/docs/developer-guide/architecture-overview", label: "Architecture overview" },
      { href: "/docs/rfc-index", label: "RFC index" },
    ],
  },
  {
    title: "Prepare enterprise operations",
    body: "Work through provenance, auditability, suspension and emergency control patterns before go-live.",
    links: [{ href: "/docs/audit-and-provenance", label: "Audit and provenance" }],
  },
];

export default function BuildPage() {
  return (
    <>
      <section className="section hero section-unnumbered">
        <span className="tag tag-authority">Integration</span>
        <h1 className="hero-title">Build with Ryvra</h1>
        <p className="hero-lead">
          Build bounded autonomous-finance products on the control plane, the execution plane and
          ledger-backed settlement.
        </p>
        <div className="button-row">
          <Link className="button button-primary" href="/docs/developer-guide/api-sdk-onboarding">
            Start the quickstart
          </Link>
          <Link className="button button-secondary" href="/docs/rfc-technical-specs">
            Read the specs
          </Link>
        </div>
      </section>

      <Section title="Integration path">
        <p className="lead">
          Four stages, in order. Each one has a canonical page that the docs treat as the source of
          truth.
        </p>

        <ol className="path-list">
          {path.map((step, index) => (
            <li className="path-step" key={step.title}>
              <span className="path-index" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="path-body">
                <h3>{step.title}</h3>
                <p>{step.body}</p>
                <div className="button-row">
                  {step.links.map((link) => (
                    <Link className="button button-secondary" href={link.href} key={link.href}>
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section title="Escalation">
        <p>
          Integration and escalation contact:{" "}
          <a href="mailto:ecosystem@ryvra.org">ecosystem@ryvra.org</a>
        </p>
      </Section>
    </>
  );
}
