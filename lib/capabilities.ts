export type CapabilityLink = {
  href: string;
  label: string;
};

export type CapabilityPageContent = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  metadataDescription: string;
  primaryCtas: Array<CapabilityLink & { variant: "primary" | "secondary" }>;
  capabilities: Array<{ title: string; body: string }>;
  controls: string[];
  operators: Array<{ title: string; body: string }>;
  docsLinks: CapabilityLink[];
  relatedPages: CapabilityLink[];
};

const allCapabilityLinks: CapabilityLink[] = [
  { href: "/capabilities/agent-gateway", label: "Agent Gateway" },
  { href: "/capabilities/agent-runtime", label: "Agent Runtime" },
  { href: "/capabilities/agent-sdk", label: "Agent SDK" },
  { href: "/capabilities/private-execution", label: "Private Execution" },
  { href: "/capabilities/private-perps", label: "Private Perps" },
  { href: "/capabilities/agentic-payments", label: "Agentic Payments" },
  { href: "/capabilities/agentic-markets", label: "Agentic Markets" },
  { href: "/capabilities/autonomous-treasury", label: "Autonomous Treasury" },
];

function relatedPages(currentHref: string): CapabilityLink[] {
  return allCapabilityLinks.filter((link) => link.href !== currentHref);
}

export const capabilityPages: CapabilityPageContent[] = [
  {
    slug: "agent-gateway",
    title: "Agent Gateway",
    summary: "A bounded boundary for financial agents to submit intents without ever holding unrestricted authority.",
    description:
      "Agent Gateway normalizes intents from copilots, applications, and enterprise systems, binds them to verified identity and mandate context, and routes only authorized work into Ryvra execution systems.",
    metadataDescription:
      "Ryvra Agent Gateway for safe financial intent intake, identity binding, mandate enforcement, and deterministic handoff.",
    primaryCtas: [
      { href: "/docs/governance-and-security-model", label: "Governance and security model", variant: "primary" },
      { href: "/docs/developer-guide/api-sdk-onboarding", label: "API and SDK onboarding", variant: "secondary" },
    ],
    capabilities: [
      { title: "Intent normalization", body: "Translate agent proposals into a deterministic command model before any execution path is opened." },
      { title: "Authority binding", body: "Attach verified principals, mandates, and policy versions so authority is explicit and reviewable." },
      { title: "Boundary isolation", body: "Separate agent context from execution systems so proposals cannot mutate policy or bypass approval rails." },
      { title: "Replay-safe ingress", body: "Apply correlation, rate, and replay controls at the first boundary crossing." },
    ],
    controls: [
      "No unrestricted AI wallet keys.",
      "No direct agent path to self-modify policy or mandates.",
      "Independent deterministic risk checks run before execution handoff.",
      "Suspension and kill-switch controls can stop new agent-originated intents immediately.",
    ],
    operators: [
      { title: "Platform teams", body: "Use Agent Gateway to define safe ingress standards across internal copilots and partner applications." },
      { title: "Enterprises", body: "Use Agent Gateway to onboard finance agents with explicit identity, mandate, and policy boundaries." },
    ],
    docsLinks: [
      { href: "/docs/developer-guide/architecture-overview", label: "Architecture overview" },
      { href: "/docs/governance-and-security-model", label: "Governance and security model" },
      { href: "/docs/audit-and-provenance", label: "Audit and provenance" },
      { href: "/docs/rfc-index", label: "RFC index" },
    ],
    relatedPages: relatedPages("/capabilities/agent-gateway"),
  },
  {
    slug: "agent-runtime",
    title: "Agent Runtime",
    summary: "A controlled runtime for evaluating, simulating, and issuing authorized finance actions inside Ryvra boundaries.",
    description:
      "Agent Runtime gives product teams a safe place to orchestrate autonomous-finance workflows with simulation, approvals, and deterministic state transitions instead of unconstrained AI execution.",
    metadataDescription:
      "Ryvra Agent Runtime for controlled autonomous-finance orchestration with simulation, approval, and deterministic execution.",
    primaryCtas: [
      { href: "/docs/developer-guide/api-sdk-onboarding", label: "Start onboarding", variant: "primary" },
      { href: "/docs/audit-and-provenance", label: "Review provenance model", variant: "secondary" },
    ],
    capabilities: [
      { title: "Simulation before action", body: "Evaluate candidate actions against current mandates, policy, and settlement constraints before execution." },
      { title: "Deterministic command issue", body: "Convert approved intents into typed commands for accounts, pay, markets, and treasury workflows." },
      { title: "Lifecycle controls", body: "Suspend, retry, or cancel in-flight work using explicit operational controls rather than opaque agent behavior." },
      { title: "Evidence retention", body: "Preserve the proposal, authorization, execution, and settlement chain for every workflow." },
    ],
    controls: [
      "Runtime actions stay bounded by pre-issued mandates and policy versions.",
      "Independent risk evaluation remains outside the agent reasoning loop.",
      "Spend, rate, and replay controls apply to every issued command.",
      "Human operators can pause or revoke runtime authority at any time.",
    ],
    operators: [
      { title: "Product builders", body: "Compose agent-assisted payment, market, and treasury workflows without handing the agent final authority." },
      { title: "Risk and operations teams", body: "Review deterministic evidence and retain emergency suspension paths across the full workflow." },
    ],
    docsLinks: [
      { href: "/docs/developer-guide/api-sdk-onboarding", label: "API and SDK onboarding" },
      { href: "/docs/developer-guide/architecture-overview", label: "Architecture overview" },
      { href: "/docs/governance-and-security-model", label: "Governance and security model" },
    ],
    relatedPages: relatedPages("/capabilities/agent-runtime"),
  },
  {
    slug: "agent-sdk",
    title: "Agent SDK",
    summary: "SDK primitives for building bounded financial agents on top of Ryvra policies, identities, and deterministic command surfaces.",
    description:
      "Agent SDK packages identity binding, mandate-aware requests, simulation hooks, and provenance capture so teams can integrate quickly without inventing their own unsafe agent control model.",
    metadataDescription:
      "Ryvra Agent SDK with mandate-aware requests, simulation hooks, provenance capture, and deterministic finance integrations.",
    primaryCtas: [
      { href: "/docs/developer-guide/api-sdk-onboarding", label: "API and SDK onboarding", variant: "primary" },
      { href: "/docs/rfc-index", label: "Read RFC index", variant: "secondary" },
    ],
    capabilities: [
      { title: "Typed command surfaces", body: "Use SDK helpers for payments, markets, accounts, and treasury actions with clear lifecycle expectations." },
      { title: "Policy-aware client flows", body: "Submit requests with identity, mandate, idempotency, and policy metadata wired in from the start." },
      { title: "Provenance capture", body: "Attach correlation and evidence fields that simplify audit and incident response." },
      { title: "Integration acceleration", body: "Reduce custom glue code across agent products and enterprise finance systems." },
    ],
    controls: [
      "SDK flows are designed for bounded autonomy, not unrestricted trading or wallet control.",
      "Auth and signing remain operator-managed and rotation-friendly.",
      "Commands stay subject to gateway, policy, risk, and settlement checks.",
      "Observability hooks expose request, event, and settlement provenance.",
    ],
    operators: [
      { title: "Developers", body: "Ship agentic finance integrations faster with standard authority and evidence patterns." },
      { title: "Enterprise platform teams", body: "Standardize safe agent integrations across internal business units and products." },
    ],
    docsLinks: [
      { href: "/docs/developer-guide/api-sdk-onboarding", label: "API and SDK onboarding" },
      { href: "/docs/developer-guide/authentication", label: "Authentication" },
      { href: "/docs/developer-guide/rate-limits-idempotency", label: "Rate limits and idempotency" },
      { href: "/docs/audit-and-provenance", label: "Audit and provenance" },
    ],
    relatedPages: relatedPages("/capabilities/agent-sdk"),
  },
  {
    slug: "private-execution",
    title: "Private Execution",
    summary: "Confidential execution for sensitive financial state without sacrificing authorization, deterministic controls, or auditability.",
    description:
      "Private Execution lets teams process strategy, balances, limits, and private state inside protected environments while preserving Ryvra’s policy, risk, ledger, and provenance guarantees.",
    metadataDescription:
      "Ryvra Private Execution for confidential financial state with policy enforcement, deterministic controls, and auditable settlement.",
    primaryCtas: [
      { href: "/docs/audit-and-provenance", label: "Audit and provenance", variant: "primary" },
      { href: "/docs/governance-and-security-model", label: "Governance and security model", variant: "secondary" },
    ],
    capabilities: [
      { title: "Sensitive state protection", body: "Keep balance thresholds, treasury logic, and strategy inputs confidential during evaluation and execution." },
      { title: "Policy parity", body: "Apply the same identity, mandate, and risk controls used in the open execution path." },
      { title: "Deterministic outputs", body: "Emit settlement-ready commands and final state records that reconcile to the shared ledger." },
      { title: "Composable privacy", body: "Extend private execution to higher-sensitivity products such as private perps." },
    ],
    controls: [
      "Confidential execution does not bypass ledger, settlement, or authorization controls.",
      "Risk policy stays independently enforced even when underlying state is private.",
      "Emergency suspension paths remain available to operators.",
      "Provenance artifacts are preserved without exposing sensitive raw state publicly.",
    ],
    operators: [
      { title: "Institutions", body: "Protect sensitive operational state while still keeping approvals and finality deterministic." },
      { title: "Product teams", body: "Launch privacy-preserving workflows without giving up observability or control discipline." },
    ],
    docsLinks: [
      { href: "/docs/developer-guide/architecture-overview", label: "Architecture overview" },
      { href: "/docs/governance-and-security-model", label: "Governance and security model" },
      { href: "/docs/audit-and-provenance", label: "Audit and provenance" },
    ],
    relatedPages: relatedPages("/capabilities/private-execution"),
  },
  {
    slug: "private-perps",
    title: "Private Perps",
    summary: "A private-perpetuals extension that inherits Ryvra controls, provenance, and settlement discipline for higher-sensitivity market workflows.",
    description:
      "Private Perps extends confidential execution into derivatives-style strategies while keeping authority bounded by mandates, policy, risk controls, and shared settlement truth.",
    metadataDescription:
      "Ryvra Private Perps extension for confidential markets with bounded authority, independent risk, and settlement finality.",
    primaryCtas: [
      { href: "/docs/developer-guide/architecture-overview", label: "Architecture overview", variant: "primary" },
      { href: "/docs/audit-and-provenance", label: "Audit and provenance", variant: "secondary" },
    ],
    capabilities: [
      { title: "Private strategy handling", body: "Keep market-sensitive inputs and positions within confidential execution boundaries." },
      { title: "Shared risk discipline", body: "Apply deterministic leverage, exposure, and spend rules outside the agent reasoning loop." },
      { title: "Settlement alignment", body: "Anchor terminal position and cash outcomes to the common ledger and settlement layer." },
      { title: "Extension model", body: "Treat private perps as an execution-plane extension, not a separate trust model." },
    ],
    controls: [
      "No unrestricted AI trading authority.",
      "No agent ability to rewrite risk policy or disable market controls.",
      "Risk engine remains deterministic and independently reviewable.",
      "Replay, rate, and circuit-breaker controls cover all trade issuance paths.",
    ],
    operators: [
      { title: "Market operators", body: "Offer confidential market workflows with stronger control boundaries than generic bot architectures." },
      { title: "Compliance and risk teams", body: "Retain enforceable leverage, exposure, and audit standards even in private execution contexts." },
    ],
    docsLinks: [
      { href: "/docs/developer-guide/trading-integration", label: "Trading integration" },
      { href: "/docs/governance-and-security-model", label: "Governance and security model" },
      { href: "/docs/audit-and-provenance", label: "Audit and provenance" },
    ],
    relatedPages: relatedPages("/capabilities/private-perps"),
  },
  {
    slug: "agentic-payments",
    title: "Agentic Payments",
    summary: "Programmable payment workflows where agents can initiate proposals while Ryvra governs authorization, controls, and settlement finality.",
    description:
      "Agentic Payments supports payout, collection, approval, and exception flows for teams that want automation with mandate-aware boundaries, deterministic execution, and clear reconciliation.",
    metadataDescription:
      "Ryvra Agentic Payments with mandate-aware automation, deterministic execution, and settlement-backed reconciliation.",
    primaryCtas: [
      { href: "/docs/developer-guide/payments-integration", label: "Payments integration", variant: "primary" },
      { href: "/docs/governance-and-security-model", label: "Governance and security model", variant: "secondary" },
    ],
    capabilities: [
      { title: "Bounded payment initiation", body: "Allow agents to propose payouts, collections, and retries within mandate-defined limits." },
      { title: "Policy-aware approvals", body: "Route high-value or exceptional flows through deterministic checks and escalation paths." },
      { title: "Settlement-backed reconciliation", body: "Use the shared ledger and settlement layer as the final source for accounting and dispute handling." },
      { title: "Operational controls", body: "Pause, replay, or cancel workflows with explicit controls and evidence retention." },
    ],
    controls: [
      "Spend ceilings, replay windows, and rate controls are enforced independently of the agent.",
      "Agents cannot authorize themselves or mint new payment authority.",
      "Kill switch and suspension controls remain operator-controlled.",
      "Audit records preserve proposal, authorization, execution, and final settlement states.",
    ],
    operators: [
      { title: "Finance operations", body: "Automate repetitive payment workflows without losing approval boundaries or reconciliation discipline." },
      { title: "Merchants and platforms", body: "Integrate payment automation with safer enterprise controls and clearer finality semantics." },
    ],
    docsLinks: [
      { href: "/docs/developer-guide/payments-integration", label: "Payments integration" },
      { href: "/docs/developer-guide/api-sdk-onboarding", label: "API and SDK onboarding" },
      { href: "/docs/audit-and-provenance", label: "Audit and provenance" },
    ],
    relatedPages: relatedPages("/capabilities/agentic-payments"),
  },
  {
    slug: "agentic-markets",
    title: "Agentic Markets",
    summary: "Programmable market operations with bounded automation, explicit mandates, and deterministic settlement outcomes.",
    description:
      "Agentic Markets enables automation around quoting, routing, and market actions while preserving independent risk controls, policy boundaries, and final settlement truth.",
    metadataDescription:
      "Ryvra Agentic Markets for bounded market automation with explicit mandates, independent risk, and deterministic settlement.",
    primaryCtas: [
      { href: "/docs/developer-guide/trading-integration", label: "Trading integration", variant: "primary" },
      { href: "/docs/rfc-index", label: "Read RFC index", variant: "secondary" },
    ],
    capabilities: [
      { title: "Mandate-scoped market actions", body: "Let agents work inside pre-approved instrument, size, and timing boundaries." },
      { title: "Independent risk layer", body: "Separate agent suggestions from deterministic risk and compliance enforcement." },
      { title: "Shared account context", body: "Use the same authority and settlement model across accounts, markets, and treasury workflows." },
      { title: "Auditable market lifecycle", body: "Retain full decision and execution lineage for review and operations." },
    ],
    controls: [
      "No unrestricted autonomous trading claims or hidden execution paths.",
      "Risk, rate, and replay controls operate before market execution.",
      "Agents cannot alter their own guardrails.",
      "Settlement and ledger remain the source of final market truth.",
    ],
    operators: [
      { title: "Trading platforms", body: "Build controlled market automation with clearer authority and evidence models." },
      { title: "Governance teams", body: "Define what can be automated without surrendering policy or risk control." },
    ],
    docsLinks: [
      { href: "/docs/developer-guide/trading-integration", label: "Trading integration" },
      { href: "/docs/governance-and-security-model", label: "Governance and security model" },
      { href: "/docs/audit-and-provenance", label: "Audit and provenance" },
    ],
    relatedPages: relatedPages("/capabilities/agentic-markets"),
  },
  {
    slug: "autonomous-treasury",
    title: "Autonomous Treasury",
    summary: "Treasury automation with bounded authority, deterministic execution, confidential state support, and settlement-backed finality.",
    description:
      "Autonomous Treasury helps finance teams automate cash movement, balance management, and policy-driven execution while keeping mandate issuance, risk controls, and suspension authority firmly in human-governed systems.",
    metadataDescription:
      "Ryvra Autonomous Treasury for bounded treasury automation with confidential state, deterministic execution, and settlement-backed finality.",
    primaryCtas: [
      { href: "/docs/governance-and-security-model", label: "Governance and security model", variant: "primary" },
      { href: "/docs/developer-guide/api-sdk-onboarding", label: "API and SDK onboarding", variant: "secondary" },
    ],
    capabilities: [
      { title: "Programmable authority", body: "Issue mandates for treasury actions by entity, threshold, timing, and policy domain." },
      { title: "Confidential state handling", body: "Protect sensitive treasury balances and instructions with confidential execution support." },
      { title: "Deterministic movement", body: "Execute approved cash and asset actions through accounts, pay, and market modules." },
      { title: "Truth-layer accounting", body: "Anchor final balances and closes to the shared ledger and settlement system." },
    ],
    controls: [
      "Treasury automation remains bounded by identity, mandates, policy, and risk.",
      "Agents do not receive unrestricted signing authority.",
      "Independent risk engines and spend controls mediate execution.",
      "Operators can suspend, revoke, or fully stop treasury automation when needed.",
    ],
    operators: [
      { title: "Enterprise finance", body: "Automate treasury operations without adopting opaque or ungoverned agent execution." },
      { title: "Protocol operators", body: "Coordinate markets, pay, and account flows under one authority and settlement model." },
    ],
    docsLinks: [
      { href: "/docs/governance-and-security-model", label: "Governance and security model" },
      { href: "/docs/audit-and-provenance", label: "Audit and provenance" },
      { href: "/docs/developer-guide/architecture-overview", label: "Architecture overview" },
    ],
    relatedPages: relatedPages("/capabilities/autonomous-treasury"),
  },
];

export const capabilityPageBySlug = new Map(
  capabilityPages.map((page) => [page.slug, page] as const),
);

export { allCapabilityLinks };
