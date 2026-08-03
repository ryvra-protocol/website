import type { Metadata } from "next";
import { DocCard } from "@/components/DocCard";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Documentation",
  description:
    "Production documentation portal for Ryvra Unified Assets and ERC-4337 account abstraction rollout.",
  alternates: { canonical: "/docs" },
  openGraph: {
    title: "Ryvra Documentation",
    description:
      "Architecture, APIs, operations, release notes, and launch pages for production integrations.",
    url: "https://ryvra.org/docs",
    type: "website",
  },
};

const docs = [
  {
    title: "Unified Assets",
    description:
      "Production overview of canonical asset behavior, guarantees, and integration value.",
    href: "/docs/unified-assets",
  },
  {
    title: "ERC-4337 Account Abstraction",
    description:
      "Production overview of smart account execution boundaries and value.",
    href: "/docs/erc-4337",
  },
  {
    title: "Integrator Getting Started",
    description:
      "Prerequisites, supported flows, environment assumptions, and escalation paths.",
    href: "/docs/integrators-getting-started",
  },
  {
    title: "Architecture",
    description:
      "Ownership boundaries across protocol-core, accounts, markets, pay, asset-registry, and ledger-settlement.",
    href: "/docs/architecture",
  },
  {
    title: "APIs and Compatibility",
    description:
      "Compatibility matrix references and API entry points for production consumers.",
    href: "/docs/apis",
  },
  {
    title: "Operations",
    description: "Operational assumptions, checks, and escalation readiness guidance.",
    href: "/docs/operations",
  },
  {
    title: "Reliability Posture",
    description:
      "Policy-gated execution, deterministic normalization, reconciliation, and fallback behavior.",
    href: "/docs/reliability",
  },
  {
    title: "Release Notes",
    description:
      "Production rollout highlights with shipped scope boundaries and non-goals.",
    href: "/docs/release-notes",
  },
  {
    title: "RFC-0001 AA + Unified Assets",
    description:
      "Foundational architecture reference and source-of-truth implementation links.",
    href: "/docs/rfc-0001-aa-unified-assets",
  },
];

export default function DocsIndexPage() {
  return (
    <Section title="Ryvra Documentation Portal">
      <p className="lead">
        Production documentation for Unified Assets and ERC-4337 integrations,
        including architecture, compatibility, operations, reliability, and
        release scope.
      </p>
      <div className="grid grid-2">
        {docs.map((doc) => (
          <DocCard key={doc.title} {...doc} />
        ))}
      </div>
      <p className="lead">Last updated: 2026-08-03</p>
    </Section>
  );
}
