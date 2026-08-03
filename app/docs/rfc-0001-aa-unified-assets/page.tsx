import type { Metadata } from "next";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "RFC-0001 AA + Unified Assets",
  description:
    "Reference summary for account abstraction and unified assets with links to source implementation documentation.",
  alternates: { canonical: "/docs/rfc-0001-aa-unified-assets" },
  openGraph: {
    title: "RFC-0001: AA + Unified Assets",
    description:
      "Architecture foundations and implementation doc references for production integrations.",
    url: "https://ryvra.org/docs/rfc-0001-aa-unified-assets",
    type: "article",
  },
};

export default function RfcPage() {
  return (
    <Section title="RFC-0001: AA + Unified Assets">
      <p className="lead">
        This page summarizes the architecture foundation for Ryvra account
        abstraction and unified asset handling and points to implementation-level
        documentation maintained in core repositories.
      </p>
      <ul>
        <li>
          protocol-core: protocol interfaces, compatibility contracts, and
          approval boundaries.
        </li>
        <li>accounts: ERC-4337 execution orchestration and account controls.</li>
        <li>asset-registry + ledger-settlement: normalization and reconciliation.</li>
      </ul>
      <p>
        For versioned implementation details, use the documentation trees in the
        corresponding repositories and compatibility matrix references.
      </p>
    </Section>
  );
}
