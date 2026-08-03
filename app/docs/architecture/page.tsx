import type { Metadata } from "next";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Architecture",
  description:
    "Production architecture map and ownership boundaries across Ryvra protocol repositories.",
  alternates: { canonical: "/docs/architecture" },
  openGraph: {
    title: "Ryvra Architecture",
    description:
      "Repository ownership boundaries for protocol-core, accounts, markets, pay, asset-registry, and ledger-settlement.",
    url: "https://ryvra.org/docs/architecture",
    type: "article",
  },
};

const ownership = [
  {
    repo: "protocol-core",
    scope: "Protocol standards, compatibility contracts, and governance-controlled interfaces.",
  },
  {
    repo: "accounts",
    scope: "ERC-4337 account abstraction orchestration and account policy boundaries.",
  },
  {
    repo: "asset-registry",
    scope: "Unified asset definitions, normalization rules, and asset metadata governance.",
  },
  {
    repo: "ledger-settlement",
    scope: "Ledger consistency, settlement state transitions, and reconciliation controls.",
  },
  {
    repo: "pay",
    scope: "Payment rail integrations and policy-compliant transfer flows.",
  },
  {
    repo: "markets",
    scope: "Market execution flows using shared account and unified asset assumptions.",
  },
];

export default function ArchitecturePage() {
  return (
    <Section title="Production Architecture and Ownership">
      <p className="lead">
        Ownership is split by bounded responsibilities so integrators can target
        clear interfaces and avoid coupling to internal implementation details.
      </p>
      <div className="grid grid-2">
        {ownership.map((item) => (
          <article className="card" key={item.repo}>
            <strong>{item.repo}</strong>
            <p>{item.scope}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
