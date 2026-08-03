import type { Metadata } from "next";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Release Notes",
  description:
    "Production release highlights for Ryvra Unified Assets and ERC-4337 account abstraction rollout.",
  alternates: { canonical: "/docs/release-notes" },
  openGraph: {
    title: "Ryvra Production Release Notes",
    description:
      "Public scope summary for production rollout pages and integrator guidance.",
    url: "https://ryvra.org/docs/release-notes",
    type: "article",
  },
};

export default function ReleaseNotesPage() {
  return (
    <Section title="Release Highlights: Unified Assets + ERC-4337">
      <p className="lead">
        Public rollout scope for production website and docs publication aligned
        with approved implementation across core protocol repositories.
      </p>

      <h3>Shipped capabilities</h3>
      <ul>
        <li>Production-facing Unified Assets overview and guarantees.</li>
        <li>Production-facing ERC-4337 account abstraction overview.</li>
        <li>Integrator getting-started path with support/escalation routes.</li>
        <li>Reliability posture for policy, normalization, reconciliation, and fallback.</li>
        <li>Updated information architecture for architecture, APIs, operations, and release notes.</li>
      </ul>

      <h3>Scope boundaries</h3>
      <ul>
        <li>This release describes protocol capabilities and integration boundaries.</li>
        <li>Internal implementation details remain in engineering repositories and runbooks.</li>
        <li>No speculative roadmap items are represented as shipped features.</li>
      </ul>
    </Section>
  );
}
