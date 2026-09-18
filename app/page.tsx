import Link from "next/link";
import { ControlFlowDiagram } from "@/components/architecture/ControlFlowDiagram";
import { PlatformArchitectureDiagram } from "@/components/architecture/PlatformArchitectureDiagram";
import { ProvenanceLifecycleDiagram } from "@/components/architecture/ProvenanceLifecycleDiagram";
import { Section } from "@/components/Section";
import { capabilityPages } from "@/lib/capabilities";

// The four-beat thesis. Beat two is the product, so it carries the ink.
const thesis = [
  {
    text: "AI proposes",
    note: "Copilots, applications and operations systems submit financial intents through the Agent Gateway.",
  },
  {
    text: "Ryvra authorizes",
    note: "Identity, mandates, versioned policy and independent deterministic risk decide what may execute.",
    authority: true,
  },
  {
    text: "Deterministic systems execute",
    note: "Accounts, pay, markets and treasury run bounded commands, never open-ended agent actions.",
  },
  {
    text: "Ledger and settlement finalize",
    note: "Balances, reconciliation and terminal outcomes become the record everything reconciles against.",
  },
];

const developerPaths = [
  { href: "/docs/developer-guide/api-sdk-onboarding", label: "API and SDK onboarding", note: "Quickstart" },
  { href: "/docs/developer-guide/architecture-overview", label: "Architecture overview", note: "Reference" },
  { href: "/docs/rfc-technical-specs", label: "RFC and technical specs", note: "Spec" },
  { href: "/capabilities/agent-sdk", label: "Agent SDK", note: "Module" },
];

const institutionPaths = [
  { href: "/docs/governance-and-security-model", label: "Governance and security model", note: "Control" },
  { href: "/docs/security-and-risk", label: "Security and risk", note: "Review" },
  { href: "/docs/audit-and-provenance", label: "Audit and provenance", note: "Evidence" },
  { href: "/docs/merchant-guide", label: "Merchant guide", note: "Operations" },
];

const authorityModel = [
  {
    title: "Bounded autonomy",
    body: "Autonomous-finance workflows run only inside pre-defined authority boundaries. Agents propose intents. They do not receive open-ended wallet control or self-issued permissions.",
  },
  {
    title: "Programmable control plane",
    body: "Identity, mandates, policy and risk define what can be proposed, what can be authorized, and what deterministic systems are allowed to execute.",
  },
  {
    title: "Truth and finality",
    body: "Ledger and settlement are the source of truth for balances, state, reconciliation and terminal outcomes across every execution path.",
  },
  {
    title: "Confidential execution",
    body: "Sensitive financial state can be evaluated inside protected execution environments while preserving authorization, settlement discipline and auditability.",
  },
];

const controlPlaneItems = [
  "Identity binds every workflow to a verified principal.",
  "Mandates define what an operator or agent is allowed to propose.",
  "Policy versions make approval logic explicit and reviewable.",
  "Independent deterministic risk decides whether execution can proceed.",
];

const executionPlaneItems = [
  "Accounts issue deterministic commands instead of open-ended agent actions.",
  "Markets and Pay inherit the same authorization and settlement model.",
  "Ledger and settlement publish final state, balances and reconciliation truth.",
  "Confidential execution protects sensitive financial state and extends to private perps.",
];

// The prohibitions are the strongest claim on the site, so they are set as a
// specification rather than buried in a bullet list.
const controls: Array<{ control: string; status: "denied" | "enforced" }> = [
  { control: "Unrestricted AI wallet keys", status: "denied" },
  { control: "AI self-policy modification", status: "denied" },
  { control: "Open-ended agent execution authority", status: "denied" },
  { control: "Independent deterministic risk engine", status: "enforced" },
  { control: "Replay, rate and spend controls", status: "enforced" },
  { control: "Kill switch and suspension controls", status: "enforced" },
  { control: "End-to-end provenance and auditability", status: "enforced" },
];

export default function HomePage() {
  return (
    <>
      <section className="section hero section-unnumbered">
        <h1 className="hero-display">Programmable financial infrastructure for bounded autonomous finance.</h1>
        <p className="hero-lead">
          Ryvra separates agent interfaces from financial authority, so teams can automate payments,
          markets and treasury workflows without handing unsafe control to AI.
        </p>

        <ol className="thesis">
          {thesis.map((step, index) => (
            <li
              key={step.text}
              className={`thesis-step${step.authority ? " thesis-step-authority" : ""}`}
              style={{ "--i": index } as React.CSSProperties}
            >
              <span className="thesis-index" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="thesis-text">
                {step.text}
                <span className="thesis-note">{step.note}</span>
              </span>
            </li>
          ))}
        </ol>

        <div className="button-row">
          <Link className="button button-primary" href="/docs/developer-guide/api-sdk-onboarding">
            Start developer quickstart
          </Link>
          <Link className="button button-secondary" href="/docs/security-and-risk">
            Review security and risk
          </Link>
        </div>
      </section>

      <Section title="Where to start">
        <p className="lead">
          Engineers and institutional reviewers need different first pages. These are the two paths
          through the same control model.
        </p>

        <div className="fork">
          <div className="fork-panel">
            <span className="tag tag-authority">For developers</span>
            <h3 className="fork-title">Build against the primitives</h3>
            <p>
              Consistent primitives for identity, mandates, policy, risk and deterministic execution,
              instead of inventing custom agent safeguards per integration.
            </p>
            <ul className="fork-links">
              {developerPaths.map((path) => (
                <li key={path.href}>
                  <Link className="fork-link" href={path.href}>
                    <span>{path.label}</span>
                    <span className="fork-link-note">{path.note}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="button-row">
              <Link className="button button-secondary" href="/build">
                Build with Ryvra
              </Link>
            </div>
          </div>

          <div className="fork-panel fork-panel-emphasis">
            <span className="tag tag-steel">For institutions</span>
            <h3 className="fork-title">Review the control boundary</h3>
            <p>
              Human-governed policy, deterministic risk and audit-ready evidence from proposal through
              authorization, execution, settlement and operator intervention.
            </p>
            <ul className="fork-links">
              {institutionPaths.map((path) => (
                <li key={path.href}>
                  <Link className="fork-link" href={path.href}>
                    <span>{path.label}</span>
                    <span className="fork-link-note">{path.note}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="button-row">
              <Link className="button button-secondary" href="/docs/user-guide">
                Explore user docs
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Authority model">
        <div className="clause-list clause-list-split">
          {authorityModel.map((item) => (
            <div className="clause-item" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Architecture">
        <p className="lead">
          Proposal, authorization, execution and settlement are separate concerns. The system stays
          programmable without granting unsafe authority to AI.
        </p>

        <PlatformArchitectureDiagram />

        <div className="clause-list clause-list-split">
          <div className="clause-item">
            <span className="tag tag-authority">Control plane</span>
            <h3>Decides what is permitted</h3>
            <ul className="rule-list">
              {controlPlaneItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="clause-item">
            <span className="tag tag-steel">Execution plane</span>
            <h3>Carries out what was authorized</h3>
            <ul className="rule-list">
              {executionPlaneItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section title="Control flow">
        <p className="lead">
          Every intent crosses the same boundary in the same order, whether it originates from a
          copilot, an application or an internal operations system.
        </p>
        <ControlFlowDiagram />
      </Section>

      <Section title="Security and trust">
        <p className="lead">
          The security boundary is written down, not implied. These are the constraints the platform
          holds regardless of what an agent proposes.
        </p>

        <table className="spec-table">
          <caption>Platform authority constraints, enforced independently of agent reasoning.</caption>
          <thead>
            <tr>
              <th scope="col">Control</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {controls.map((row) => (
              <tr key={row.control}>
                <th scope="row">{row.control}</th>
                <td>
                  <span className={`spec-status spec-status-${row.status}`}>
                    {row.status === "denied" ? "Denied" : "Enforced"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <p>
          Bounded autonomy reduces the risk of opaque execution. Policy stays human-governed, risk
          stays deterministic, and audit evidence is preserved from intent intake through final
          settlement.
        </p>
      </Section>

      <Section title="Lifecycle and provenance">
        <p className="lead">
          Provenance is carried across the whole lifecycle, so a completed workflow can be explained
          after the fact rather than reconstructed.
        </p>
        <ProvenanceLifecycleDiagram />
      </Section>

      <Section title="Capabilities">
        <p className="lead">
          Eight modules, one authorization model. Each page covers product scope, control boundaries
          and the related documentation.
        </p>

        <ul className="index-list">
          {capabilityPages.map((page) => (
            <li key={page.slug}>
              <Link className="index-row" href={`/capabilities/${page.slug}`}>
                <span className="index-row-label">{page.title}</span>
                <span className="index-row-marker" aria-hidden="true">
                  →
                </span>
                <span className="index-row-desc">{page.summary}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <section className="section band section-unnumbered">
        <h2 className="band-title">Start where your review begins.</h2>
        <p>
          Integration and escalation contact: <a href="mailto:ecosystem@ryvra.org">ecosystem@ryvra.org</a>
        </p>
        <div className="button-row">
          <Link className="button button-on-dark" href="/build">
            Build with Ryvra
          </Link>
          <Link className="button button-outline-on-dark" href="/docs">
            Read the docs
          </Link>
        </div>
      </section>
    </>
  );
}
