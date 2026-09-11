import Link from "next/link";
import { ControlFlowDiagram } from "@/components/architecture/ControlFlowDiagram";
import { PlatformArchitectureDiagram } from "@/components/architecture/PlatformArchitectureDiagram";
import { ProvenanceLifecycleDiagram } from "@/components/architecture/ProvenanceLifecycleDiagram";
import { Section } from "@/components/Section";
import { allCapabilityLinks } from "@/lib/capabilities";

const controlPlaneItems = [
  "Identity binds every workflow to a verified principal.",
  "Mandates define what an operator or agent is allowed to propose.",
  "Policy versions make approval logic explicit and reviewable.",
  "Independent deterministic risk decides whether execution can proceed.",
];

const executionPlaneItems = [
  "Accounts issue deterministic commands instead of open-ended agent actions.",
  "Markets and Pay inherit the same authorization and settlement model.",
  "Ledger and settlement publish final state, balances, and reconciliation truth.",
  "Confidential execution protects sensitive financial state and extends to private perps.",
];

const trustControls = [
  "No unrestricted AI wallet keys.",
  "No AI self-policy modification.",
  "Independent deterministic risk engine.",
  "Replay, rate, and spend controls.",
  "Kill switch and suspension controls.",
  "End-to-end provenance and auditability.",
];

const ctaLinks = [
  { href: "/docs/rfc-index", label: "Docs RFC index" },
  { href: "/docs/developer-guide/api-sdk-onboarding", label: "API + SDK onboarding" },
  { href: "/docs/governance-and-security-model", label: "Governance + security model" },
  { href: "/docs/audit-and-provenance", label: "Audit + provenance" },
];

export default function HomePage() {
  return (
    <>
      <Section className="hero" title="Ryvra">
        <h1>Programmable financial infrastructure for bounded autonomous finance.</h1>
        <p className="lead">
          AI proposes, Ryvra authorizes, and deterministic systems execute. Ryvra
          gives teams programmable authority through identity, mandates, policy, and
          risk, then anchors finality in ledger and settlement.
        </p>
        <p>
          The platform separates agent interfaces from financial authority so teams
          can automate payments, markets, and treasury workflows without implying
          unrestricted AI control.
        </p>
        <div className="button-row">
          <Link className="button button-primary" href="/docs/developer-guide/api-sdk-onboarding">
            Start API + SDK onboarding
          </Link>
          <Link className="button button-secondary" href="/docs/governance-and-security-model">
            Review governance + security
          </Link>
          <Link className="button button-secondary" href="/capabilities">
            Explore capability pages
          </Link>
        </div>
      </Section>

      <Section title="Authority model">
        <div className="grid grid-2">
          <article className="card">
            <strong>Bounded autonomy</strong>
            <p>
              Ryvra supports autonomous-finance workflows only inside pre-defined
              authority boundaries. Agents can propose intents, but they do not
              receive open-ended wallet control or self-issued permissions.
            </p>
          </article>
          <article className="card">
            <strong>Truth and finality</strong>
            <p>
              Ledger and settlement are the source of truth for balances, state,
              reconciliation, and terminal outcomes across every execution path.
            </p>
          </article>
          <article className="card">
            <strong>Programmable control plane</strong>
            <p>
              Identity, mandates, policy, and risk define what can be proposed,
              what can be authorized, and what deterministic systems are allowed to
              execute.
            </p>
          </article>
          <article className="card">
            <strong>Confidential execution</strong>
            <p>
              Sensitive financial state can be evaluated inside protected
              execution environments while still preserving authorization,
              settlement discipline, and auditability.
            </p>
          </article>
        </div>
      </Section>

      <Section title="Architecture">
        <p className="lead">
          Ryvra separates proposal, authorization, execution, and settlement so the
          system is programmable without handing unsafe authority to AI.
        </p>
        <PlatformArchitectureDiagram />
        <div className="grid grid-2 architecture-list-grid">
          <article className="card">
            <strong>Control Plane</strong>
            <ul className="tokenomics-list">
              {controlPlaneItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="card">
            <strong>Execution Plane</strong>
            <ul className="tokenomics-list">
              {executionPlaneItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </Section>

      <Section title="Control flow">
        <ControlFlowDiagram />
      </Section>

      <Section title="Security and trust">
        <p className="lead">
          Ryvra is designed to make the security boundary legible to developers,
          operators, enterprises, and regulators.
        </p>
        <div className="grid grid-2">
          <article className="card">
            <strong>Explicit controls</strong>
            <ul className="tokenomics-list">
              {trustControls.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="card">
            <strong>Why it matters</strong>
            <p>
              Bounded autonomy reduces the risk of opaque execution. Ryvra keeps
              policy human-governed, keeps risk deterministic, and preserves audit
              evidence from intent intake through final settlement.
            </p>
          </article>
        </div>
      </Section>

      <Section title="Lifecycle and provenance">
        <ProvenanceLifecycleDiagram />
      </Section>

      <Section title="Capability pages">
        <div className="grid grid-2">
          {allCapabilityLinks.map((link) => (
            <article className="card" key={link.href}>
              <strong>{link.label}</strong>
              <p>Open the module page for product scope, control boundaries, and related docs.</p>
              <div className="button-row">
                <Link className="button button-secondary" href={link.href}>
                  Open page
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section title="Developer and enterprise paths">
        <div className="grid grid-2">
          {ctaLinks.map((link) => (
            <article className="card" key={link.href}>
              <strong>{link.label}</strong>
              <p>Use the linked resource for production design, onboarding, and review.</p>
              <div className="button-row">
                <Link className="button button-secondary" href={link.href}>
                  Open resource
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
