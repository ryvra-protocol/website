import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "ERC-4337 Account Abstraction",
  description:
    "Production overview of Ryvra ERC-4337 account abstraction capabilities for users and integrators.",
  alternates: { canonical: "/docs/erc-4337" },
  openGraph: {
    title: "Ryvra ERC-4337 Account Abstraction",
    description:
      "Smart account execution, policy controls, and integration guidance for production ERC-4337 flows.",
    url: "https://ryvra.org/docs/erc-4337",
    type: "article",
  },
};

export default function Erc4337Page() {
  return (
    <Section title="ERC-4337 Account Abstraction: Production Overview">
      <p className="lead">
        Ryvra uses ERC-4337 account abstraction to support smart-account-native
        execution with policy controls and predictable integration boundaries.
      </p>

      <h3>User value</h3>
      <ul>
        <li>Flexible signing and execution flows with policy enforcement.</li>
        <li>Improved UX for fee handling and session-based interactions.</li>
        <li>Consistent controls across payment and market surfaces.</li>
      </ul>

      <h3>Integrator value</h3>
      <ul>
        <li>Clear user operation lifecycle assumptions.</li>
        <li>Versioned interfaces for account and execution boundaries.</li>
        <li>Structured compatibility expectations across modules.</li>
      </ul>

      <h3>Operational boundaries</h3>
      <ul>
        <li>Execution is policy-gated before inclusion and settlement.</li>
        <li>Unsupported policy combinations fail with deterministic outcomes.</li>
        <li>Fallback behaviors preserve ledger consistency during degradation.</li>
      </ul>

      <div className="button-row">
        <Link className="button button-secondary" href="/docs/integrators-getting-started">
          Integrator getting started
        </Link>
        <Link className="button button-secondary" href="/docs/reliability">
          Reliability posture
        </Link>
        <Link className="button button-primary" href="/docs/apis">
          Compatibility matrix + APIs
        </Link>
      </div>
    </Section>
  );
}
