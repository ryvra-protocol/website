import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import { capabilityPages } from "@/lib/capabilities";

export const metadata: Metadata = {
  title: "Capability Pages",
  description:
    "Explore Ryvra capability pages for agent gateway, runtime, SDK, private execution, private perps, and autonomous-finance workflows.",
  alternates: { canonical: "/capabilities" },
};

export default function CapabilitiesPage() {
  return (
    <>
      <Section className="hero" title="Ryvra capabilities">
        <p className="lead">
          Ryvra provides programmable financial infrastructure for bounded autonomous-finance
          workflows across payments, markets, and treasury operations.
        </p>
        <p>
          Every capability page follows the same model: AI can propose, Ryvra authorizes, and
          deterministic systems execute against ledger and settlement truth.
        </p>
      </Section>

      <Section title="Platform modules">
        <div className="grid grid-2">
          {capabilityPages.map((page) => (
            <article className="card" key={page.slug}>
              <strong>{page.title}</strong>
              <p>{page.summary}</p>
              <div className="button-row">
                <Link className="button button-secondary" href={`/capabilities/${page.slug}`}>
                  Open page
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
