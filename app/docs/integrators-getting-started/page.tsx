import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Integrator Getting Started",
  description:
    "Production onboarding path for Ryvra integrators: prerequisites, supported flows, environments, and escalation.",
  alternates: { canonical: "/docs/integrators-getting-started" },
  openGraph: {
    title: "Ryvra Integrator Getting Started",
    description:
      "Actionable onboarding path for production integrations across account abstraction and unified assets.",
    url: "https://ryvra.org/docs/integrators-getting-started",
    type: "article",
  },
};

export default function IntegratorsGettingStartedPage() {
  return (
    <Section title="Integrator Getting Started">
      <p className="lead">
        Use this path to align production integrations with the currently shipped
        Unified Assets and ERC-4337 capabilities.
      </p>

      <h3>Prerequisites</h3>
      <ul>
        <li>Production API credentials and environment provisioning.</li>
        <li>Support for policy-aware account execution handling.</li>
        <li>Operational ownership for reconciliation and incident response.</li>
      </ul>

      <h3>Supported flows</h3>
      <ul>
        <li>ERC-4337 smart-account execution and lifecycle handling.</li>
        <li>Unified asset transfer and settlement flows for supported assets.</li>
        <li>Policy-gated payment and market interactions.</li>
      </ul>

      <h3>Environment assumptions</h3>
      <ul>
        <li>Separated test and production environments.</li>
        <li>Version pinning to documented API and compatibility contracts.</li>
        <li>Monitoring for execution status, reconciliation, and fallbacks.</li>
      </ul>

      <h3>Support and escalation</h3>
      <ul>
        <li>
          Integration support intake: <a href="mailto:ecosystem@ryvra.org">ecosystem@ryvra.org</a>
        </li>
        <li>
          Operational escalation path: <a href="mailto:ops@ryvra.org">ops@ryvra.org</a>
        </li>
        <li>
          Security disclosure path: <a href="mailto:security@ryvra.org">security@ryvra.org</a>
        </li>
      </ul>

      <div className="button-row">
        <Link className="button button-secondary" href="/docs/apis">
          API references
        </Link>
        <Link className="button button-secondary" href="/docs/operations">
          Operations guidance
        </Link>
        <Link className="button button-primary" href="/docs/release-notes">
          Release highlights
        </Link>
      </div>
    </Section>
  );
}
