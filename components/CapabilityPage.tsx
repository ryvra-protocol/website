import Link from "next/link";
import { Section } from "@/components/Section";
import type { CapabilityPageContent } from "@/lib/capabilities";

export function CapabilityPage({ page }: { page: CapabilityPageContent }) {
  return (
    <>
      <section className="section hero section-unnumbered">
        <span className="tag tag-authority">Capability</span>
        <h1 className="hero-title">{page.title}</h1>
        <p className="hero-lead">{page.summary}</p>
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
      </section>

      <Section title="What it enables">
        <div className="clause-list clause-list-split">
          {page.capabilities.map((capability) => (
            <div className="clause-item" key={capability.title}>
              <h3>{capability.title}</h3>
              <p>{capability.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Control model">
        <p className="lead">
          Constraints this module holds regardless of what an agent proposes.
        </p>
        <ul className="rule-list rule-list-divided">
          {page.controls.map((control) => (
            <li key={control}>{control}</li>
          ))}
        </ul>
      </Section>

      <Section title="Where it fits">
        <div className="clause-list clause-list-split">
          {page.operators.map((operator) => (
            <div className="clause-item" key={operator.title}>
              <h3>{operator.title}</h3>
              <p>{operator.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Related resources">
        <div className="related-columns">
          <div>
            <h3 className="related-title">Documentation</h3>
            <ul className="index-list index-list-compact">
              {page.docsLinks.map((link) => (
                <li key={link.href}>
                  <Link className="index-row" href={link.href}>
                    <span className="index-row-label">{link.label}</span>
                    <span className="index-row-marker" aria-hidden="true">
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="related-title">Platform suite</h3>
            <ul className="index-list index-list-compact">
              {page.relatedPages.map((link) => (
                <li key={link.href}>
                  <Link className="index-row" href={link.href}>
                    <span className="index-row-label">{link.label}</span>
                    <span className="index-row-marker" aria-hidden="true">
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
    </>
  );
}
