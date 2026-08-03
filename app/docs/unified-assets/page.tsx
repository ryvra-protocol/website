import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Unified Assets",
  description:
    "Production overview of the Ryvra Unified Assets model, normalization guarantees, and integrator value.",
  alternates: { canonical: "/docs/unified-assets" },
  openGraph: {
    title: "Ryvra Unified Assets",
    description:
      "Canonical asset model for payments and markets with deterministic normalization and reconciliation guarantees.",
    url: "https://ryvra.org/docs/unified-assets",
    type: "article",
  },
};

export default function UnifiedAssetsPage() {
  return (
    <Section title="Unified Assets: Production Overview">
      <p className="lead">
        Ryvra Unified Assets provides one canonical asset model across supported
        stablecoins, crypto assets, tokenized RWAs, and metals so integrators can
        build once and operate with consistent behavior.
      </p>

      <h3>User value</h3>
      <ul>
        <li>Consistent balances and transaction semantics across products.</li>
        <li>Predictable transfer, settlement, and history behavior.</li>
        <li>Unified experience between payment and market workflows.</li>
      </ul>

      <h3>Integrator value</h3>
      <ul>
        <li>Single normalization model for asset metadata and state.</li>
        <li>Shared ledger assumptions across accounts, pay, and markets.</li>
        <li>Reduced bespoke mapping logic between product surfaces.</li>
      </ul>

      <h3>Production guarantees</h3>
      <ul>
        <li>Policy-gated execution before state mutation.</li>
        <li>Deterministic normalization for supported asset classes.</li>
        <li>Reconciliation guarantees between execution and ledger state.</li>
        <li>Fallback behaviors for unsupported or degraded asset paths.</li>
      </ul>

      <div className="button-row">
        <Link className="button button-secondary" href="/docs/architecture">
          Architecture
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
