import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Build with Ryvra",
  description:
    "Production integration entry point for teams building on Ryvra Unified Assets and EIP-4337 capabilities.",
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
        Production integrations should follow the documented compatibility and
        operations path for Unified Assets and EIP-4337 account abstraction.
      </p>

      <div className="grid grid-2">
        <article className="card">
          <strong>Start integration</strong>
          <p>Review prerequisites, supported flows, and environment assumptions.</p>
          <div className="button-row">
            <Link className="button button-primary" href="/docs/getting-started">
              Getting started
            </Link>
          </div>
        </article>
        <article className="card">
          <strong>Validate compatibility</strong>
          <p>Use compatibility matrix and API references before production cutover.</p>
          <div className="button-row">
            <Link className="button button-secondary" href="/docs/developer-guide/api-overview">
              API overview
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
