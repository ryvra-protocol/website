import Link from "next/link";
import { Section } from "@/components/Section";
import type { CapabilityPageContent } from "@/lib/capabilities";

export function CapabilityPage({ page }: { page: CapabilityPageContent }) {
  return (
    <>
      <Section className="hero" title={page.title}>
        <p className="lead">{page.summary}</p>
        <p>{page.description}</p>
        <div className="button-row">
          {page.primaryCtas.map((cta) => (
            <Link
              key={cta.href}
              className={`button ${cta.variant === "primary" ? "button-primary" : "button-secondary"}`}
              href={cta.href}
            >
              {cta.label}
            </Link>
          ))}
        </div>
      </Section>

      <Section title="What it enables">
        <div className="grid grid-2">
          {page.capabilities.map((capability) => (
            <article className="card" key={capability.title}>
              <strong>{capability.title}</strong>
              <p>{capability.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section title="Control model">
        <ul>
          {page.controls.map((control) => (
            <li key={control}>{control}</li>
          ))}
        </ul>
      </Section>

      <Section title="Where it fits">
        <div className="grid grid-2">
          {page.operators.map((operator) => (
            <article className="card" key={operator.title}>
              <strong>{operator.title}</strong>
              <p>{operator.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section title="Related resources">
        <div className="grid grid-2">
          <article className="card">
            <strong>Documentation</strong>
            <ul className="tokenomics-list">
              {page.docsLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </article>
          <article className="card">
            <strong>Platform suite</strong>
            <ul className="tokenomics-list">
              {page.relatedPages.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </Section>
    </>
  );
}
