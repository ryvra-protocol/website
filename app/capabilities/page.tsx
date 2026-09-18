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
      <section className="section hero section-unnumbered">
        <span className="tag tag-authority">Platform</span>
        <h1 className="hero-title">Ryvra capabilities</h1>
        <p className="hero-lead">
          Programmable financial infrastructure for bounded autonomous-finance workflows across
          payments, markets and treasury operations.
        </p>
        <p>
          Every module follows the same model: AI can propose, Ryvra authorizes, and deterministic
          systems execute against ledger and settlement truth.
        </p>
      </section>

      <Section title="Platform modules">
        <ul className="index-list">
          {capabilityPages.map((page) => (
            <li key={page.slug}>
              <Link className="index-row" href={`/capabilities/${page.slug}`}>
                <span className="index-row-label">{page.title}</span>
                <span className="index-row-marker" aria-hidden="true">
                  &rarr;
                </span>
                <span className="index-row-desc">{page.summary}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
