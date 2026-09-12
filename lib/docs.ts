export type DocsCalloutVariant = "info" | "warn" | "success" | "note";

export type DocsSidebarItem = {
  href: string;
  title: string;
};

export type DocsSidebarGroup = {
  title: string;
  items: DocsSidebarItem[];
};

export type DocsAudience = "User" | "Merchant" | "Developer";

export type DocsListItem =
  | string
  | {
      summary: string;
      body?: string;
      children?: DocsListItem[];
      childrenOrdered?: boolean;
      code?: string;
    };

export type DocsHeading = {
  id: string;
  title: string;
  kind?: "faq";
  body?: string;
  audience?: DocsAudience[];
  bullets?: DocsListItem[];
  steps?: DocsListItem[];
  links?: DocsSidebarItem[];
};

export type DocsPage = DocsSidebarItem & {
  description: string;
  metadataTitle?: string;
  metadataDescription?: string;
  lastUpdated: string;
  compatibilityWindow: string;
  parentHref?: string;
  calloutVariant: DocsCalloutVariant;
  calloutTitle: string;
  calloutBody: string;
  headings: DocsHeading[];
};

export type DocsBreadcrumb = DocsSidebarItem;

type AuthoredDocContent = {
  description: string;
  metadataTitle?: string;
  metadataDescription?: string;
  lastUpdated?: string;
  compatibilityWindow?: string;
  calloutVariant?: DocsCalloutVariant;
  calloutTitle?: string;
  calloutBody?: string;
  headings: DocsHeading[];
};

export const docsSidebarGroups: DocsSidebarGroup[] = [
  {
    title: "Overview",
    items: [
      { href: "/docs", title: "Documentation" },
      { href: "/docs/introduction", title: "What is Ryvra?" },
      { href: "/docs/getting-started", title: "Getting Started" },
      { href: "/docs/docs-ia-v2", title: "Docs IA v2 Audit" },
    ],
  },
  {
    title: "For Users",
    items: [
      { href: "/docs/user-guide", title: "For Users" },
      { href: "/docs/user-guide/accounts-and-wallets", title: "Account and Security Basics" },
      { href: "/docs/user-guide/send-transaction", title: "Payments and Transfers" },
      { href: "/docs/user-guide/buy-sell-trade", title: "Markets Basics" },
      { href: "/docs/user-guide/liquidity-and-staking", title: "Liquidity and Staking" },
      { href: "/docs/user-guide/send-payments", title: "Send Payments" },
      { href: "/docs/user-guide/fees-limits-and-risks", title: "Safety Controls and Support" },
      { href: "/docs/user-guide/security-best-practices", title: "Security Best Practices" },
      { href: "/docs/user-guide/faq", title: "FAQ" },
    ],
  },
  {
    title: "For Merchants",
    items: [
      { href: "/docs/merchant-guide", title: "For Merchants" },
      { href: "/docs/merchant-guide/overview", title: "Why Ryvra for Merchants" },
      { href: "/docs/merchant-guide/onboarding", title: "Merchant Onboarding" },
      {
        href: "/docs/merchant-guide/payouts-and-collections-workflows",
        title: "Payouts and Collections Workflows",
      },
      {
        href: "/docs/merchant-guide/checkout-payment-links",
        title: "Checkout and Payment Links",
      },
      { href: "/docs/merchant-guide/invoicing", title: "Invoicing" },
      { href: "/docs/merchant-guide/subscriptions", title: "Subscriptions" },
      { href: "/docs/merchant-guide/payouts-settlement", title: "Payouts and Settlement" },
      {
        href: "/docs/merchant-guide/treasury-and-reconciliation-basics",
        title: "Treasury and Reconciliation Basics",
      },
      { href: "/docs/merchant-guide/refunds-disputes", title: "Refunds and Disputes" },
      {
        href: "/docs/merchant-guide/reconciliation-reporting",
        title: "Reconciliation and Reporting",
      },
      { href: "/docs/merchant-guide/risk-compliance", title: "Risk and Compliance Controls" },
      { href: "/docs/merchant-guide/operational-checklists", title: "Operational Checklists" },
      { href: "/docs/merchant-guide/merchant-faq", title: "Merchant FAQ" },
    ],
  },
  {
    title: "For Developers",
    items: [
      { href: "/docs/developer-guide", title: "For Developers" },
      {
        href: "/docs/developer-guide/architecture-overview",
        title: "Architecture Overview",
      },
      {
        href: "/docs/developer-guide/api-sdk-onboarding",
        title: "Quickstart: SDK + Gateway Flow",
      },
      { href: "/docs/developer-guide/financial-intent-model", title: "FinancialIntent Model" },
      { href: "/docs/developer-guide/api-overview", title: "API References and Examples" },
      { href: "/docs/developer-guide/authentication", title: "Auth, Mandate, and Capability Flow" },
      { href: "/docs/developer-guide/policy-risk-integration", title: "Policy and Risk Integration" },
      { href: "/docs/developer-guide/ledger-settlement-integration", title: "Ledger and Settlement Integration" },
      {
        href: "/docs/developer-guide/private-execution-perps-integration-points",
        title: "Private Execution and Perps Integration Points",
      },
      { href: "/docs/developer-guide/unified-assets", title: "Unified Assets" },
      {
        href: "/docs/developer-guide/account-abstraction-erc4337",
        title: "Account Abstraction ERC-4337",
      },
      { href: "/docs/developer-guide/trading-integration", title: "Trading Integration" },
      {
        href: "/docs/developer-guide/payments-integration",
        title: "Payments Integration",
      },
      {
        href: "/docs/developer-guide/liquidity-staking-integration",
        title: "Liquidity and Staking Integration",
      },
      { href: "/docs/developer-guide/webhooks-events", title: "Webhooks and Events" },
      {
        href: "/docs/developer-guide/error-model-and-retries",
        title: "Error Model and Retries",
      },
      {
        href: "/docs/developer-guide/rate-limits-idempotency",
        title: "Rate Limits and Idempotency",
      },
      {
        href: "/docs/developer-guide/environments-and-deployment",
        title: "Environments and Deployment",
      },
      { href: "/docs/developer-guide/testing-sandbox", title: "Testing and Sandbox Guidance" },
      {
        href: "/docs/developer-guide/observability-and-runbooks",
        title: "Observability and Runbooks",
      },
      { href: "/docs/developer-guide/troubleshooting", title: "Troubleshooting" },
      {
        href: "/docs/developer-guide/changelog-and-versioning",
        title: "Changelog and Versioning",
      },
    ],
  },
  {
    title: "Tokenomics",
    items: [
      { href: "/docs/tokenomics", title: "Tokenomics" },
      {
        href: "/docs/tokenomics/litepaper-faq",
        title: "Litepaper FAQ",
      },
      {
        href: "/docs/tokenomics/tokenomics-faq",
        title: "Tokenomics FAQ",
      },
      {
        href: "/docs/tokenomics/detailed-tokenomics-specification",
        title: "Detailed Tokenomics Specification",
      },
    ],
  },
  {
    title: "Security & Risk",
    items: [
      { href: "/docs/security-and-risk", title: "Security and Risk" },
      { href: "/docs/governance-and-security-model", title: "Governance and Security Model" },
      { href: "/docs/audit-and-provenance", title: "Audit and Provenance" },
      { href: "/docs/support-and-escalation", title: "Support and Escalation" },
    ],
  },
  {
    title: "RFC / Technical Specs",
    items: [
      { href: "/docs/rfc-technical-specs", title: "RFC / Technical Specs" },
      { href: "/docs/rfc-index", title: "RFC Index" },
    ],
  },
  {
    title: "Reference",
    items: [
      { href: "/docs/writing-style-and-templates", title: "Writing Style and Templates" },
      { href: "/docs/release-notes", title: "Release Notes" },
      { href: "/docs/glossary", title: "Glossary" },
    ],
  },
];

const docsSidebarItems = docsSidebarGroups.flatMap((group) => group.items);

const docsSidebarTitleByHref = new Map(docsSidebarItems.map((item) => [item.href, item.title]));

const userGuideItems = docsSidebarGroups.find((group) => group.title === "For Users")?.items ?? [];

export const docsPageOrder = docsSidebarItems.map((item) => item.href);

function getParentHref(href: string): string | undefined {
  if (href === "/docs") {
    return undefined;
  }

  const segments = href.split("/").filter(Boolean);
  if (segments.length === 2) {
    return "/docs";
  }

  return `/${segments.slice(0, -1).join("/")}`;
}

function getCalloutVariant(href: string): DocsCalloutVariant {
  if (href.includes("security") || href.includes("risk") || href.includes("troubleshooting")) {
    return "warn";
  }

  if (href.includes("getting-started") || href.includes("onboarding") || href.includes("testing")) {
    return "success";
  }

  if (href.includes("faq") || href.includes("glossary") || href.includes("release-notes")) {
    return "note";
  }

  return "info";
}

const docsPortalLastUpdated = "2026-08-04";
const docsPortalCompatibilityWindow =
  "Applies to the currently shipped Ryvra docs portal and interfaces published through August 2026.";

function getDocLink(href: string): DocsSidebarItem {
  const title = docsSidebarTitleByHref.get(href);
  if (!title) {
    throw new Error(`Unknown documentation href: ${href}`);
  }

  return { href, title };
}

const authoredDocsByHref: Record<string, AuthoredDocContent> = {
  "/docs": {
    description:
      "Start with the audience track that matches your role, then move into tokenomics, security, or technical specs only when you need more depth.",
    metadataTitle: "Documentation",
    metadataDescription:
      "Choose your Ryvra docs path for users, merchants, or developers, with production guidance for operations and integrations.",
    calloutVariant: "info",
    calloutTitle: "Natural language first, spec second",
    calloutBody:
      "Start from the role that matches your objective, then use the linked advanced pages only when you need exact protocol, security, or tokenomics details.",
    headings: [
      {
        id: "choose-your-path",
        title: "Choose your path",
        body: "Pick the path that matches your role and current task.",
        links: [
          getDocLink("/docs/user-guide"),
          getDocLink("/docs/merchant-guide"),
          getDocLink("/docs/developer-guide"),
          getDocLink("/docs/tokenomics"),
          getDocLink("/docs/security-and-risk"),
          getDocLink("/docs/rfc-technical-specs"),
        ],
      },
      {
        id: "im-a-user-start-here",
        title: "I’m a user: start here",
        body: "The user track explains account safety, payments, transfers, markets basics, and support in plain language before deeper concepts.",
        bullets: [
          "Start with account and security basics.",
          "Use the workflow pages for payments, transfers, and markets.",
          "Check safety controls and support before retrying blocked or failed actions.",
        ],
        links: [getDocLink("/docs/user-guide")],
      },
      {
        id: "core-user-workflows",
        title: "Core user workflows",
        body: "Jump directly to the most common user actions.",
        links: [
          getDocLink("/docs/user-guide/accounts-and-wallets"),
          getDocLink("/docs/user-guide/buy-sell-trade"),
          getDocLink("/docs/user-guide/send-transaction"),
          getDocLink("/docs/user-guide/liquidity-and-staking"),
          getDocLink("/docs/user-guide/send-payments"),
        ],
      },
      {
        id: "im-a-merchant-start-here",
        title: "I’m a merchant: start here",
        body: "The merchant track focuses on business outcomes, onboarding, collections, payouts, treasury, reconciliation, and operational controls.",
        links: [
          getDocLink("/docs/merchant-guide"),
          getDocLink("/docs/merchant-guide/onboarding"),
          getDocLink("/docs/merchant-guide/payouts-and-collections-workflows"),
          getDocLink("/docs/merchant-guide/treasury-and-reconciliation-basics"),
        ],
      },
      {
        id: "im-a-developer-start-here",
        title: "I’m a developer: start here",
        body: "The developer track keeps technical depth, but starts with architecture, quickstart, FinancialIntent, and policy or settlement concepts before advanced specs.",
        links: [
          getDocLink("/docs/developer-guide"),
          getDocLink("/docs/developer-guide/api-sdk-onboarding"),
          getDocLink("/docs/developer-guide/financial-intent-model"),
          getDocLink("/docs/developer-guide/ledger-settlement-integration"),
          getDocLink("/docs/rfc-technical-specs"),
        ],
      },
      {
        id: "source-of-truth-resources",
        title: "Source-of-truth resources",
        body: "Use these pages when you need canonical security, provenance, RFC, or migration detail.",
        links: [
          getDocLink("/docs/docs-ia-v2"),
          getDocLink("/docs/tokenomics"),
          getDocLink("/docs/security-and-risk"),
          getDocLink("/docs/rfc-technical-specs"),
          getDocLink("/docs/rfc-index"),
          getDocLink("/docs/governance-and-security-model"),
          getDocLink("/docs/audit-and-provenance"),
        ],
      },
    ],
  },
  "/docs/introduction": {
    description:
      "Ryvra is programmable financial infrastructure where AI can suggest actions, but governed systems decide what is allowed and deterministic systems execute the result.",
    metadataTitle: "What is Ryvra?",
    metadataDescription:
      "Plain-language introduction to Ryvra, its bounded-autonomy model, and why authority, settlement, and provenance matter.",
    calloutVariant: "info",
    calloutTitle: "Think in layers",
    calloutBody:
      "Ryvra separates proposal, authorization, execution, and settlement so automation can help without silently holding unrestricted financial authority.",
    headings: [
      {
        id: "summary",
        title: "Summary",
        body: "Ryvra is built so automation can propose financial workflows while identity, mandates, policy, risk, and deterministic execution systems keep authority visible and reviewable.",
      },
      {
        id: "audience",
        title: "Audience",
        body: "New readers, partners, and reviewers who need the simplest explanation before opening deeper guides or specs.",
      },
      {
        id: "core-ideas",
        title: "Core ideas",
        bullets: [
          "AI proposes; it does not self-authorize.",
          "Identity, mandates, policy, and risk define what may happen.",
          "Deterministic payment, market, and treasury systems execute only after approval.",
          "Ledger and settlement publish final truth for balances and workflow outcomes.",
        ],
      },
      {
        id: "why-people-use-ryvra",
        title: "Why people use Ryvra",
        bullets: [
          "Users get clearer controls around payments, transfers, and market actions.",
          "Merchants get safer automation for collections, payouts, treasury, and reconciliation workflows.",
          "Developers get one control model across multiple financial modules.",
        ],
      },
      {
        id: "what-to-read-next",
        title: "What to read next",
        bullets: [
          "Use the audience track that matches your role for the plain-language walkthrough.",
          "Use tokenomics and security pages for cross-cutting policy and risk context.",
          "Use the RFC / Technical Specs layer when you need exact architecture wording.",
        ],
      },
      {
        id: "related-docs",
        title: "Related docs",
        links: [
          getDocLink("/docs/getting-started"),
          getDocLink("/docs/user-guide"),
          getDocLink("/docs/merchant-guide"),
          getDocLink("/docs/developer-guide"),
          getDocLink("/docs/rfc-technical-specs"),
        ],
      },
    ],
  },
  "/docs/getting-started": {
    description:
      "Choose the right audience track, complete the minimum safety checks, and avoid jumping into advanced specs before you need them.",
    metadataTitle: "Getting Started",
    metadataDescription:
      "Getting started checklist for Ryvra docs users with prerequisites, first-step flows, expected outcomes, and recovery guidance.",
    calloutVariant: "success",
    calloutTitle: "Start with your role",
    calloutBody:
      "Pick the user, merchant, or developer track first. Then use tokenomics, security, and spec pages only when they answer a real question you have.",
    headings: [
      {
        id: "prerequisites",
        title: "Prerequisites",
        bullets: [
          "Confirm your role for this session: user, merchant operator, or integration developer.",
          "Use the official Ryvra domain and approved account access path.",
          "Have access to the environment you need (account wallet, merchant workspace, or integration sandbox).",
          "Understand that AI may propose work, but authorization stays in Ryvra control systems and finality stays in ledger and settlement.",
        ],
      },
      {
        id: "step-by-step-start-flow",
        title: "Step-by-step start flow",
        steps: [
          "Open the documentation landing page and choose your persona track.",
          "Read the guide overview page for role-specific assumptions, authority boundaries, and safety controls.",
          "Review governance and security guidance before enabling any autonomous-finance workflow.",
          "Complete the role-specific prerequisites page before executing live actions.",
          "Run one low-risk workflow end to end and verify terminal status against ledger and settlement outputs.",
          "Use the RFC index and glossary to validate current terminology, interfaces, and rollout scope.",
        ],
      },
      {
        id: "persona-routes",
        title: "Audience-first routes",
        links: [
          getDocLink("/docs/user-guide"),
          getDocLink("/docs/merchant-guide"),
          getDocLink("/docs/developer-guide"),
          getDocLink("/docs/tokenomics"),
          getDocLink("/docs/security-and-risk"),
        ],
      },
      {
        id: "expected-outcome",
        title: "Expected outcome",
        bullets: [
          "You can identify the correct guide and complete first-step workflows without route ambiguity.",
          "You know when to stay in the plain-language track and when to open the deeper specification layer.",
          "You can escalate to role-specific troubleshooting guidance when an operation fails or must be suspended.",
        ],
      },
      {
        id: "common-failures",
        title: "Common failures",
        bullets: [
          "Starting from the wrong persona guide and applying incorrect assumptions.",
          "Skipping prerequisite checks and encountering preventable validation failures.",
          "Opening jargon-heavy material too early and missing the simpler workflow explanation.",
        ],
      },
      {
        id: "recovery-steps",
        title: "Recovery steps",
        steps: [
          "Return to the documentation landing page and switch to the correct persona guide.",
          "Re-run prerequisite checklists before repeating failed operations.",
          "Validate latest guidance in tokenomics, security, release notes, and relevant troubleshooting pages.",
        ],
        links: [
          getDocLink("/docs/tokenomics"),
          getDocLink("/docs/security-and-risk"),
          getDocLink("/docs/release-notes"),
          getDocLink("/docs/developer-guide/troubleshooting"),
        ],
      },
      {
        id: "source-of-truth-docs",
        title: "Source-of-truth docs",
        links: [
          getDocLink("/docs/docs-ia-v2"),
          getDocLink("/docs/rfc-technical-specs"),
          getDocLink("/docs/rfc-index"),
          getDocLink("/docs/governance-and-security-model"),
          getDocLink("/docs/audit-and-provenance"),
        ],
      },
    ],
  },
  "/docs/docs-ia-v2": {
    description:
      "Audit of the previous documentation structure and the reasoning behind the audience-first redesign.",
    metadataTitle: "Docs IA v2 Audit",
    metadataDescription:
      "As-is documentation map, quality scoring, duplication notes, and migration rationale for the Ryvra docs IA v2 rollout.",
    calloutVariant: "note",
    calloutTitle: "What changed",
    calloutBody:
      "IA v2 keeps technical depth but moves readers through plain-language audience tracks before sending them to advanced specs.",
    headings: [
      {
        id: "key-findings",
        title: "Key findings",
        bullets: [
          "Security and provenance topics were important but fragmented across overview and developer pages.",
          "Tokenomics lived outside the docs portal, which made it harder to discover in the main navigation.",
          "RFC-heavy material appeared too early for first-time readers.",
          "Merchant documentation had strong procedures, but weaker business-value framing and checklist discovery.",
        ],
      },
      {
        id: "as-is-map",
        title: "As-Is map",
        bullets: [
          "`lib/docs.ts` → `/docs`, `/docs/introduction`, `/docs/getting-started`, `/docs/rfc-index`, `/docs/governance-and-security-model`, `/docs/audit-and-provenance` — audience: mixed — quality: clarity 3/5, completeness 4/5, freshness 3/5.",
          "`lib/docs.ts` → `/docs/user-guide/*` — audience: user — quality: clarity 4/5, completeness 4/5, freshness 3/5.",
          "`lib/docs.ts` → `/docs/merchant-guide/*` — audience: merchant — quality: clarity 4/5, completeness 4/5, freshness 3/5.",
          "`lib/docs.ts` → `/docs/developer-guide/*` — audience: developer — quality: clarity 3/5, completeness 4/5, freshness 4/5.",
          "`app/litepaper/page.tsx`, `content/litepaper-tokenomics.md`, `content/tokenomics-faq.md`, `lib/tokenomics.ts` — audience: mixed/tokenomics — quality: clarity 3/5, completeness 4/5, freshness 4/5.",
        ],
      },
      {
        id: "gaps",
        title: "Gaps and duplication",
        bullets: [
          "Duplicate safety language existed across user transaction, payment, and security pages.",
          "Merchant payout and reconciliation guidance overlapped but did not lead with treasury-close language.",
          "Developer retry, policy, and event concepts were distributed across several pages instead of one onboarding path.",
          "Beginner explanations for tokenomics, governance, and confidentiality terms were too thin.",
        ],
      },
      {
        id: "migration-plan",
        title: "Migration and redirect plan",
        bullets: [
          "The new sidebar leads with Users, Merchants, Developers, Tokenomics, Security and Risk, and RFC / Technical Specs.",
          "Existing detailed routes stay live so current links continue to work.",
          "New overview pages link readers into existing deep pages instead of replacing them with less detailed copies.",
          "Release notes document the IA v2 rollout so external readers can understand the change.",
        ],
      },
      {
        id: "related-docs",
        title: "Related docs",
        links: [
          getDocLink("/docs/release-notes"),
          getDocLink("/docs/writing-style-and-templates"),
          getDocLink("/docs/rfc-technical-specs"),
        ],
      },
    ],
  },
  "/docs/rfc-index": {
    description:
      "Use the RFC index as the source-of-truth map for Ryvra architecture, authority, execution, settlement, and confidentiality concepts.",
    metadataTitle: "RFC Index",
    metadataDescription:
      "Ryvra RFC index covering architecture, agent gateway boundaries, authority model, settlement, confidentiality, and audit concepts.",
    calloutVariant: "note",
    calloutTitle: "Canonical architecture references",
    calloutBody:
      "Use this page as the documentation index for the architecture and control model that website messaging should follow.",
    headings: [
      {
        id: "who-is-this-for",
        title: "Who is this for?",
        body: "Developers, reviewers, and advanced readers who need the deeper architecture and source-of-truth map rather than the introductory explanation.",
      },
      {
        id: "prerequisites",
        title: "Prerequisites",
        bullets: [
          "Read the audience-specific overview page first when possible.",
          "Know which architecture, governance, or execution topic you need to verify.",
        ],
      },
      {
        id: "in-plain-english",
        title: "In plain English",
        body: "This page is the jump-off point for the deepest public material in the portal. It keeps advanced topics available without forcing first-time readers to start here.",
      },
      {
        id: "how-to-use-this-index",
        title: "How to use this index",
        body: "Start with the authority and architecture references, then move into execution, confidentiality, and operational evidence concepts.",
      },
      {
        id: "core-rfcs",
        title: "Core RFC references",
        body: "These linked pages are the current canonical references for the RFC topics reflected in website messaging and implementation planning.",
        links: [
          getDocLink("/docs/developer-guide/architecture-overview"),
          getDocLink("/docs/governance-and-security-model"),
          getDocLink("/docs/audit-and-provenance"),
          getDocLink("/docs/developer-guide/api-sdk-onboarding"),
          getDocLink("/docs/developer-guide/api-overview"),
        ],
      },
      {
        id: "recommended-reading-order",
        title: "Recommended reading order",
        links: [
          getDocLink("/docs/tokenomics/litepaper-faq"),
          getDocLink("/docs/developer-guide/architecture-overview"),
          getDocLink("/docs/governance-and-security-model"),
          getDocLink("/docs/audit-and-provenance"),
          getDocLink("/docs/developer-guide/api-sdk-onboarding"),
        ],
      },
      {
        id: "implementation-guides",
        title: "Implementation guides",
        links: [
          getDocLink("/docs/developer-guide/api-overview"),
          getDocLink("/docs/developer-guide/payments-integration"),
          getDocLink("/docs/developer-guide/trading-integration"),
          getDocLink("/docs/developer-guide/authentication"),
        ],
      },
      {
        id: "deep-spec-link",
        title: "Deep spec link",
        links: [getDocLink("/docs/rfc-technical-specs")],
      },
    ],
  },
  "/docs/governance-and-security-model": {
    description:
      "Understand Ryvra’s governance and security model for bounded autonomy, policy control, deterministic risk, and emergency intervention.",
    metadataTitle: "Governance and Security Model",
    metadataDescription:
      "Ryvra governance and security model covering bounded autonomy, mandates, policy control, risk, kill switches, and operator authority.",
    calloutVariant: "warn",
    calloutTitle: "Authority is programmable, not unrestricted",
    calloutBody:
      "Ryvra does not give AI unrestricted wallet keys or self-modifying policy authority. Authorization stays in governed control systems.",
    headings: [
      {
        id: "who-is-this-for",
        title: "Who is this for?",
        body: "Users, merchants, developers, and reviewers who need the core trust-boundary explanation behind the simpler audience pages.",
      },
      {
        id: "prerequisites",
        title: "Prerequisites",
        bullets: [
          "Know which workflow or control boundary you are reviewing.",
          "Read the audience-first guide for your role if you need a simpler introduction first.",
        ],
      },
      {
        id: "in-plain-english",
        title: "In plain English",
        body: "Ryvra is built so software can help propose financial actions without silently becoming the authority that approves them.",
      },
      {
        id: "core-principles",
        title: "Core principles",
        bullets: [
          "AI can propose an intent, but Ryvra systems authorize whether it may proceed.",
          "Authority is issued through verified identity, mandates, policy, and independent risk.",
          "Ledger and settlement define final state and audit truth.",
          "Human-governed suspension and kill-switch controls remain available at all times.",
        ],
      },
      {
        id: "explicit-prohibitions",
        title: "Explicit prohibitions",
        bullets: [
          "No unrestricted AI wallet keys.",
          "No AI self-policy modification.",
          "No opaque execution path without provenance and final state records.",
        ],
      },
      {
        id: "control-surfaces",
        title: "Control surfaces",
        bullets: [
          "Independent deterministic risk engine before execution.",
          "Replay, rate, spend, and scope controls at ingress and execution boundaries.",
          "Suspension, revocation, and emergency stop controls for operator intervention.",
          "Versioned policy and mandate artifacts for review and rollback.",
        ],
      },
      {
        id: "related-docs",
        title: "Related docs",
        links: [
          getDocLink("/docs/developer-guide/architecture-overview"),
          getDocLink("/docs/developer-guide/authentication"),
          getDocLink("/docs/audit-and-provenance"),
          getDocLink("/docs/tokenomics/litepaper-faq"),
          getDocLink("/docs/rfc-index"),
        ],
      },
      {
        id: "deep-spec-link",
        title: "Deep spec link",
        links: [getDocLink("/docs/rfc-index"), getDocLink("/docs/security-and-risk")],
      },
    ],
  },
  "/docs/audit-and-provenance": {
    description:
      "Use Ryvra’s provenance model to trace proposals, authorizations, deterministic execution, settlement, and emergency intervention paths.",
    metadataTitle: "Audit and Provenance",
    metadataDescription:
      "Ryvra audit and provenance concepts for proposal lineage, policy evidence, settlement truth, replay safety, and emergency controls.",
    calloutVariant: "note",
    calloutTitle: "Keep the evidence chain intact",
    calloutBody:
      "Every workflow should preserve the link from who proposed an action to how it was authorized, executed, settled, and, if needed, suspended.",
    headings: [
      {
        id: "who-is-this-for",
        title: "Who is this for?",
        body: "Operators, developers, merchants, and reviewers who need to trace a workflow from proposal to final settlement and any later intervention.",
      },
      {
        id: "prerequisites",
        title: "Prerequisites",
        bullets: [
          "Know which workflow or incident you are trying to trace.",
          "Have access to the request, event, or settlement references used by your systems.",
        ],
      },
      {
        id: "in-plain-english",
        title: "In plain English",
        body: "When money moves, teams need a clear record of what was requested, who approved it, what executed, what the final result was, and whether anyone stepped in later.",
      },
      {
        id: "provenance-lifecycle",
        title: "Provenance lifecycle",
        steps: [
          "Bind the originating principal and runtime to a verified identity context.",
          "Record mandate and policy versions used during authorization.",
          "Capture deterministic execution identifiers and downstream effects.",
          "Publish terminal balance and settlement state to the shared truth layer.",
          "Retain suspension, override, or kill-switch events alongside the original flow.",
        ],
      },
      {
        id: "minimum-evidence-set",
        title: "Minimum evidence set",
        bullets: [
          "Intent or proposal ID.",
          "Identity and mandate reference.",
          "Policy and risk decision outputs.",
          "Execution, event, and settlement identifiers.",
          "Operator intervention history where applicable.",
        ],
      },
      {
        id: "why-it-matters",
        title: "Why it matters",
        bullets: [
          "Supports internal review, audit, reconciliation, and dispute handling.",
          "Makes bounded autonomy legible to enterprise and regulatory stakeholders.",
          "Prevents opaque execution claims by anchoring state changes to evidence.",
        ],
      },
      {
        id: "related-docs",
        title: "Related docs",
        links: [
          getDocLink("/docs/governance-and-security-model"),
          getDocLink("/docs/developer-guide/observability-and-runbooks"),
          getDocLink("/docs/developer-guide/webhooks-events"),
          getDocLink("/docs/tokenomics/litepaper-faq"),
          getDocLink("/docs/rfc-index"),
        ],
      },
      {
        id: "deep-spec-link",
        title: "Deep spec link",
        links: [getDocLink("/docs/rfc-index"), getDocLink("/docs/security-and-risk")],
      },
    ],
  },
  "/docs/user-guide": {
    description:
      "Use the user track to understand Ryvra in plain language, starting with account safety and the everyday tasks most people care about first.",
    metadataTitle: "For Users",
    metadataDescription:
      "User documentation for account safety, payments and transfers, markets basics, support, and common Ryvra questions.",
    calloutVariant: "success",
    calloutTitle: "Simple first",
    calloutBody:
      "Learn the action, then the term. You should not need to read an RFC before understanding a common user workflow.",
    headings: [
      {
        id: "who-this-guide-is-for",
        title: "Who this guide is for",
        body: "This guide is for people using Ryvra directly for payments, transfers, market actions, and account-level safety decisions.",
      },
      {
        id: "quick-start-paths",
        title: "Quick-start paths",
        body: "Use the path that matches what you need to do right now.",
        links: [
          getDocLink("/docs/user-guide/accounts-and-wallets"),
          getDocLink("/docs/user-guide/send-transaction"),
          getDocLink("/docs/user-guide/buy-sell-trade"),
          getDocLink("/docs/user-guide/fees-limits-and-risks"),
          getDocLink("/docs/user-guide/faq"),
        ],
      },
      {
        id: "before-you-begin",
        title: "Before you begin",
        body: "Protect your account before moving money.",
        bullets: [
          "Verify you are on the official Ryvra domain before connecting your wallet.",
          "Store recovery phrases offline and never share them with anyone.",
          "Review network fees, possible slippage, and finality before you confirm any action.",
          "Start with a small test amount when using a new asset, recipient, or network.",
        ],
        links: [
          getDocLink("/docs/user-guide/fees-limits-and-risks"),
          getDocLink("/docs/user-guide/security-best-practices"),
        ],
      },
      {
        id: "all-user-guide-pages",
        title: "All user guide pages",
        body: "Use this section as your table of contents for the complete user workflow.",
        links: userGuideItems,
      },
    ],
  },
  "/docs/user-guide/accounts-and-wallets": {
    description:
      "Set up account wallet access, verify funding readiness, and apply baseline security hygiene before transacting.",
    metadataTitle: "User Guide: Accounts and Wallets",
    metadataDescription:
      "Prepare your Ryvra account wallet: setup assumptions, funding checklist, security baseline, and recovery actions.",
    calloutVariant: "info",
    calloutTitle: "Purpose",
    calloutBody:
      "Use this page to get your account wallet ready and safe before trading, sending transactions, staking, or making payments.",
    headings: [
      {
        id: "prerequisites",
        title: "Prerequisites",
        bullets: [
          "An active Ryvra account with access to the official web interface.",
          "A supported wallet connection method available in your region.",
          "A funded source account or asset balance for your first operation.",
        ],
      },
      {
        id: "setup-flow",
        title: "Step-by-step setup flow",
        steps: [
          "Open the official Ryvra app and sign in to your account.",
          "Connect or create the wallet profile shown in your account onboarding flow.",
          "Confirm your selected network and base asset before funding.",
          "Deposit or transfer a small test amount to verify wallet readiness.",
          "Set available account protections such as passkeys, MFA, and device verification.",
        ],
      },
      {
        id: "expected-outcome",
        title: "Expected confirmation and outcome",
        bullets: [
          "Wallet status shows connected and ready.",
          "Your balance appears in the account wallet view.",
          "You can open trade, transaction, liquidity, staking, and payment forms without setup errors.",
        ],
      },
      {
        id: "common-failures",
        title: "Common failure states",
        bullets: [
          "Wallet connection approval is rejected or times out.",
          "Funds are sent on a different network than the one selected in Ryvra.",
          "Balance does not appear because confirmations are still pending.",
          "Security checks block access from a new device.",
        ],
      },
      {
        id: "recovery-steps",
        title: "Recovery steps",
        steps: [
          "Reconnect the wallet session and re-approve the connection request.",
          "Verify the deposit transaction on the same network and wait for required confirmations.",
          "Use a small retry transfer if the first test transfer was sent with too little fee.",
          "If access controls lock your session, use official account recovery channels only.",
        ],
      },
      {
        id: "risk-safety-notes",
        title: "Risk and safety notes",
        bullets: [
          "Never import seed phrases into unknown websites or browser prompts.",
          "Use dedicated wallets for high-value balances.",
          "Treat confirmation finality as network-dependent; do not re-spend funds before confirmation.",
        ],
      },
      {
        id: "related-docs",
        title: "Related docs",
        links: [
          getDocLink("/docs/user-guide/send-transaction"),
          getDocLink("/docs/user-guide/fees-limits-and-risks"),
          getDocLink("/docs/user-guide/security-best-practices"),
        ],
      },
    ],
  },
  "/docs/user-guide/buy-sell-trade": {
    description:
      "Execute buy, sell, and trade orders with clear lifecycle checks, confirmation expectations, and slippage cautions.",
    metadataTitle: "User Guide: Buy, Sell, and Trade",
    metadataDescription:
      "Complete buy/sell/trade flow with order lifecycle states, confirmations, failure handling, and slippage guidance.",
    calloutVariant: "info",
    calloutTitle: "Purpose",
    calloutBody:
      "Use this page for the full order flow from quote review to final trade confirmation.",
    headings: [
      {
        id: "prerequisites",
        title: "Prerequisites",
        bullets: [
          "A funded account wallet with the asset required for the trade.",
          "Market pair availability for the assets you want to exchange.",
          "Awareness of current market volatility and expected fees.",
        ],
      },
      {
        id: "trade-flow",
        title: "Step-by-step buy, sell, and trade flow",
        steps: [
          "Open the trade screen and choose the market pair.",
          "Select buy, sell, or swap mode and enter amount.",
          "Review the estimated rate, fees, and minimum received value.",
          "Set any available protection settings such as slippage tolerance.",
          "Submit and approve the order from your wallet or account confirmation prompt.",
          "Monitor status until the order reaches a terminal state.",
        ],
      },
      {
        id: "order-lifecycle",
        title: "Order lifecycle states and confirmations",
        body: "Order labels may vary by interface, but the lifecycle usually follows submission, execution, and terminal completion.",
        bullets: [
          "Pending or Submitted: order accepted by the interface and awaiting execution.",
          "Open or Partially Filled: order is live and may fill in multiple parts.",
          "Filled: full execution completed and balances updated.",
          "Canceled or Expired: order closed without full execution.",
          "Failed: order could not execute because of validation, liquidity, or network conditions.",
        ],
      },
      {
        id: "expected-outcome",
        title: "Expected confirmation and outcome",
        bullets: [
          "Execution confirmation appears in the activity feed.",
          "Source and destination balances update after settlement.",
          "Final status is visible in trade history for reconciliation.",
        ],
      },
      {
        id: "common-failures",
        title: "Common failure states",
        bullets: [
          "Price moved outside your allowed tolerance before execution.",
          "Not enough balance for amount plus fees.",
          "Insufficient liquidity at the requested size.",
          "Transaction confirmation expired before wallet approval.",
        ],
      },
      {
        id: "recovery-steps",
        title: "Recovery steps",
        steps: [
          "Refresh market data and submit with an adjusted amount.",
          "Top up fee balance and retry with a small test size first.",
          "Use limit-style controls if available when volatility is high.",
          "If an order is stuck in pending state, confirm whether your wallet request is still open and approve or reject it explicitly.",
        ],
      },
      {
        id: "risk-safety-notes",
        title: "Risk and safety notes",
        bullets: [
          "Slippage can increase losses during fast market moves.",
          "Partial fills can leave residual balances in the source asset.",
          "Final execution price can differ from the initial quote until settlement is complete.",
        ],
      },
      {
        id: "related-docs",
        title: "Related docs",
        links: [
          getDocLink("/docs/user-guide/accounts-and-wallets"),
          getDocLink("/docs/user-guide/send-transaction"),
          getDocLink("/docs/user-guide/fees-limits-and-risks"),
        ],
      },
    ],
  },
  "/docs/user-guide/send-transaction": {
    description:
      "Create, submit, and monitor transactions with clear status handling for pending, confirmed, and failed states.",
    metadataTitle: "User Guide: Send Transaction",
    metadataDescription:
      "Transaction sending workflow with status lifecycle, failure handling, and retry or replacement guidance where supported.",
    calloutVariant: "info",
    calloutTitle: "Purpose",
    calloutBody: "Use this page to send on-chain transactions safely and track confirmation end to end.",
    headings: [
      {
        id: "prerequisites",
        title: "Prerequisites",
        bullets: [
          "Connected account wallet with spendable balance.",
          "Recipient address and target network confirmed from a trusted source.",
          "Enough balance for transfer amount and network fees.",
        ],
      },
      {
        id: "send-flow",
        title: "Step-by-step transaction flow",
        steps: [
          "Open Send Transaction and choose asset plus network.",
          "Paste or scan the recipient address, then verify the first and last characters.",
          "Enter amount and review estimated fee before submitting.",
          "Approve the request in your wallet or account confirmation prompt.",
          "Save the transaction ID for support and reconciliation.",
        ],
      },
      {
        id: "status-lifecycle",
        title: "Status lifecycle",
        bullets: [
          "Pending: accepted for broadcast and waiting for network inclusion.",
          "Confirmed: included in a finalized block and reflected in balances.",
          "Failed: rejected, dropped, or reverted before final confirmation.",
        ],
      },
      {
        id: "expected-outcome",
        title: "Expected confirmation and outcome",
        bullets: [
          "Transaction appears in history with a final status.",
          "Recipient and sender balances reconcile after confirmation.",
          "Network explorer entry matches the same transaction ID.",
        ],
      },
      {
        id: "common-failures",
        title: "Common failure states",
        bullets: [
          "Invalid recipient format or wrong network selection.",
          "Fee amount too low for current network conditions.",
          "Nonce or sequencing conflict from multiple pending transactions.",
          "User rejected wallet confirmation before broadcast.",
        ],
      },
      {
        id: "retry-cancel-replacement",
        title: "Retry, cancel, and replacement guidance",
        body: "Controls differ by wallet and network, so follow only options shown in your account interface.",
        bullets: [
          "Retry by submitting a new transfer after verifying balance and network.",
          "If replacement is available, submit a higher-fee replacement transaction for the same pending intent.",
          "If cancellation is available, send a zero-value cancellation transaction with the same sequence slot.",
        ],
      },
      {
        id: "recovery-steps",
        title: "Recovery steps",
        steps: [
          "Wait for a few blocks and refresh status before re-sending to avoid duplicates.",
          "Use the transaction ID in a block explorer to verify true network state.",
          "If funds are deducted but status is unclear, contact support with the transaction ID and timestamp.",
        ],
      },
      {
        id: "risk-safety-notes",
        title: "Risk and safety notes",
        bullets: [
          "Transfers are generally irreversible after final confirmation.",
          "Wrong-network transfers may require manual recovery and can be unrecoverable.",
          "Always perform a test transfer for new recipients or new assets.",
        ],
      },
      {
        id: "related-docs",
        title: "Related docs",
        links: [
          getDocLink("/docs/user-guide/accounts-and-wallets"),
          getDocLink("/docs/user-guide/send-payments"),
          getDocLink("/docs/user-guide/security-best-practices"),
        ],
      },
    ],
  },
  "/docs/user-guide/liquidity-and-staking": {
    description:
      "Add or remove liquidity and manage staking positions with clear expectations for rewards, lockups, and withdrawal timing.",
    metadataTitle: "User Guide: Liquidity and Staking",
    metadataDescription:
      "Liquidity provision and staking workflows with confirmation checks, failure handling, and reward or lockup caveats.",
    calloutVariant: "info",
    calloutTitle: "Purpose",
    calloutBody:
      "Use this page to supply or remove liquidity and to stake or unstake where those features are enabled in your account.",
    headings: [
      {
        id: "prerequisites",
        title: "Prerequisites",
        bullets: [
          "A funded wallet with the required asset pair or staking asset.",
          "Understanding of pool exposure, impermanent loss, and lock conditions.",
          "Review of fee and reward displays before submitting.",
        ],
      },
      {
        id: "provide-remove-liquidity",
        title: "Step-by-step provide and remove liquidity flow",
        steps: [
          "Choose a pool and review current depth, fees, and reward indicators.",
          "Enter the amount to supply and confirm asset ratio requirements.",
          "Approve token permissions if prompted, then confirm supply.",
          "Track position status until the contribution is confirmed.",
          "To remove liquidity, select the position, choose removal amount, and confirm withdrawal.",
        ],
      },
      {
        id: "stake-unstake-flow",
        title: "Step-by-step stake and unstake flow",
        body: "If staking is available in your account, use the same confirmation discipline as trading and transfers.",
        steps: [
          "Open staking and choose eligible asset or position.",
          "Enter stake amount and review lockup, cooldown, and reward rules.",
          "Confirm stake action and wait for confirmed status.",
          "For unstake, start the unstake request and complete any cooldown period shown in the interface.",
          "Withdraw once the unstake state changes to withdrawable.",
        ],
      },
      {
        id: "expected-outcome",
        title: "Expected confirmation and outcome",
        bullets: [
          "Liquidity or stake position appears in your portfolio view.",
          "Rewards section updates according to protocol cadence.",
          "Removal, unstake, and withdrawal actions record a final status in activity history.",
        ],
      },
      {
        id: "common-failures",
        title: "Common failure states",
        bullets: [
          "Price movement causes the final quote to fail checks before execution.",
          "Pool ratio constraints prevent one-sided supply amounts.",
          "Unstake blocked because lockup or cooldown is still active.",
          "Withdrawal fails due to pending prerequisite confirmations.",
        ],
      },
      {
        id: "recovery-steps",
        title: "Recovery steps",
        steps: [
          "Refresh pool or staking data and retry with adjusted amount.",
          "Wait until lockup or cooldown conditions are fully satisfied.",
          "Use smaller partial removal or unstake actions when available.",
          "If reward balances do not refresh, compare with the position status and latest settlement timestamp before contacting support.",
        ],
      },
      {
        id: "risk-safety-notes",
        title: "Risk and safety notes",
        bullets: [
          "Liquidity positions can face impermanent loss when asset prices diverge.",
          "Rewards can vary and are not guaranteed at a fixed rate.",
          "Lockups and cooldowns can delay access to funds after unstake requests.",
        ],
      },
      {
        id: "related-docs",
        title: "Related docs",
        links: [
          getDocLink("/docs/user-guide/buy-sell-trade"),
          getDocLink("/docs/user-guide/fees-limits-and-risks"),
          getDocLink("/docs/user-guide/security-best-practices"),
        ],
      },
    ],
  },
  "/docs/user-guide/send-payments": {
    description:
      "Send payments with recipient, amount, and network validation steps plus failure handling and reconciliation guidance.",
    metadataTitle: "User Guide: Send Payments",
    metadataDescription:
      "Payment setup and send flow with recipient validation, operational checks, and post-send reconciliation steps.",
    calloutVariant: "info",
    calloutTitle: "Purpose",
    calloutBody: "Use this page for payment flows that require accurate recipient details and auditable confirmation records.",
    headings: [
      {
        id: "prerequisites",
        title: "Prerequisites",
        bullets: [
          "Connected account wallet with sufficient spendable balance.",
          "Verified recipient identity or destination details.",
          "Confirmed network, asset, and payment amount.",
        ],
      },
      {
        id: "payment-send-flow",
        title: "Step-by-step payment setup and send flow",
        steps: [
          "Open Send Payments and select recipient type if prompted.",
          "Enter or choose the recipient details from your trusted address book.",
          "Select asset, network, and amount.",
          "Review payment summary, fee estimate, and final debit amount.",
          "Approve and submit the payment.",
          "Record the payment reference or transaction ID.",
        ],
      },
      {
        id: "validation-checks",
        title: "Recipient, amount, and network validation checks",
        bullets: [
          "Confirm recipient address or account details character by character.",
          "Check decimal precision to avoid sending unintended amounts.",
          "Match destination network with recipient requirements.",
          "Verify that final debit amount includes visible fees.",
        ],
      },
      {
        id: "expected-outcome",
        title: "Expected confirmation and outcome",
        bullets: [
          "Payment status progresses from pending to confirmed or failed.",
          "Payment appears in activity history with timestamp and reference.",
          "Sender balance reflects the settled debit amount.",
        ],
      },
      {
        id: "common-failures",
        title: "Common failure states",
        bullets: [
          "Recipient details are invalid for the selected network.",
          "Insufficient funds for amount plus fees.",
          "Compliance or risk checks pause the payment for review.",
          "Payment expires because wallet approval was not completed in time.",
        ],
      },
      {
        id: "recovery-and-reconciliation",
        title: "Recovery and reconciliation guidance",
        steps: [
          "Correct recipient or network details and retry with a small test payment.",
          "If status is pending, wait for network finality before creating a duplicate payment.",
          "Match activity history against recipient confirmation and transaction ID.",
          "Escalate with payment reference, timestamp, and transaction ID if records do not reconcile.",
        ],
      },
      {
        id: "risk-safety-notes",
        title: "Risk and safety notes",
        bullets: [
          "Payments may be irreversible after confirmation.",
          "Wrong-recipient or wrong-network sends can be unrecoverable.",
          "Fraud attempts often pressure urgency; pause and re-verify before approval.",
        ],
      },
      {
        id: "related-docs",
        title: "Related docs",
        links: [
          getDocLink("/docs/user-guide/send-transaction"),
          getDocLink("/docs/user-guide/fees-limits-and-risks"),
          getDocLink("/docs/user-guide/security-best-practices"),
        ],
      },
    ],
  },
  "/docs/user-guide/fees-limits-and-risks": {
    description:
      "Understand fee categories, operational limits, and market or network risks before executing user actions.",
    metadataTitle: "User Guide: Fees, Limits, and Risks",
    metadataDescription:
      "Reference for fee surfaces, limits and thresholds, and practical risk disclosures for trading, transfers, liquidity, staking, and payments.",
    calloutVariant: "warn",
    calloutTitle: "Purpose",
    calloutBody:
      "Use this page before high-value actions so fees, thresholds, and risk trade-offs are clear before confirmation.",
    headings: [
      {
        id: "prerequisites",
        title: "Prerequisites",
        bullets: [
          "Access to the exact action screen you plan to use (trade, transfer, liquidity, staking, or payment).",
          "A funded account wallet so quoted fees can be tested with a small amount.",
          "Awareness of your account-level limits and region-specific restrictions.",
        ],
      },
      {
        id: "review-flow",
        title: "Step-by-step review procedure",
        steps: [
          "Open the intended action and enter your draft amount.",
          "Review all fee lines before confirming, including network and product-specific fees.",
          "Check visible per-transaction and rolling limits for the selected asset and network.",
          "Confirm final debit, expected receive amount, and status warnings.",
          "Proceed only if fee and risk exposure are acceptable for your objective.",
        ],
      },
      {
        id: "fee-categories",
        title: "Fee categories and where they appear",
        bullets: [
          "Network fees: shown at transaction confirmation and vary by chain conditions.",
          "Trading execution fees: shown in trade previews and reflected in final fills.",
          "Liquidity or staking fees: shown during supply, removal, stake, unstake, or withdrawal actions where applicable.",
          "Payment processing fees: shown in payment review before submission.",
        ],
      },
      {
        id: "limits-thresholds",
        title: "Limits and threshold concepts",
        bullets: [
          "Per-transaction limits cap maximum value for one action.",
          "Daily or rolling limits cap cumulative activity.",
          "Risk thresholds may require additional checks or delay execution for unusual activity.",
          "Some limits vary by asset, network, account level, and region.",
        ],
      },
      {
        id: "expected-outcome",
        title: "Expected confirmation and outcome",
        bullets: [
          "All applicable fees are visible before final confirmation.",
          "Limit warnings appear before submission when thresholds are reached.",
          "Post-execution records include fee impact for reconciliation.",
        ],
      },
      {
        id: "common-failures",
        title: "Common failure states",
        bullets: [
          "Action rejected because amount exceeds a configured limit.",
          "Transaction fails when fee balance is too low.",
          "Order fails because volatility drives execution outside allowed bounds.",
          "Operational pauses delay processing during abnormal network conditions.",
        ],
      },
      {
        id: "recovery-steps",
        title: "Recovery steps",
        steps: [
          "Reduce transaction size and split large actions into smaller confirmed steps.",
          "Top up fee balance and retry when network conditions stabilize.",
          "Re-check all review screens so the final fee and amount are still acceptable.",
          "Delay non-urgent operations during congestion or high volatility windows.",
        ],
      },
      {
        id: "risk-disclosures",
        title: "Market, network, and operational risk disclosures",
        bullets: [
          "Market risk: price movement can materially change outcomes between quote and fill.",
          "Network risk: congestion can delay settlement and raise final fees.",
          "Operational risk: account controls, policy checks, or service interruptions can pause execution.",
          "Finality risk: treat transactions as complete only after confirmed final status.",
        ],
      },
      {
        id: "related-docs",
        title: "Related docs",
        links: [
          getDocLink("/docs/user-guide/buy-sell-trade"),
          getDocLink("/docs/user-guide/send-transaction"),
          getDocLink("/docs/user-guide/liquidity-and-staking"),
        ],
      },
    ],
  },
  "/docs/user-guide/security-best-practices": {
    description:
      "Follow wallet and account security practices, prevent phishing and scams, and use verified recovery escalation paths.",
    metadataTitle: "User Guide: Security Best Practices",
    metadataDescription:
      "Security checklist for account wallets, phishing prevention, scam detection, and recovery or escalation workflow for user accounts.",
    calloutVariant: "warn",
    calloutTitle: "Purpose",
    calloutBody:
      "Use this checklist before every high-risk action and after any suspicious event involving your account wallet.",
    headings: [
      {
        id: "prerequisites",
        title: "Prerequisites",
        bullets: [
          "Access to your account settings, wallet security controls, and trusted contact channels.",
          "A dedicated secure location for recovery information.",
          "Time to complete all checks before approving high-value transactions.",
        ],
      },
      {
        id: "security-routine",
        title: "Step-by-step security routine",
        steps: [
          "Verify you are on the official Ryvra domain before signing in.",
          "Confirm MFA or passkey prompts are active and functioning.",
          "Review pending session permissions and revoke anything unfamiliar.",
          "Validate transaction prompts for destination, amount, and permission scope before approval.",
          "Log out from shared devices and verify your active-device list after each session.",
        ],
      },
      {
        id: "wallet-account-checklist",
        title: "Wallet and account security checklist",
        bullets: [
          "Use strong unique credentials and enable MFA or passkeys where available.",
          "Store seed phrases or recovery secrets offline in secure physical storage.",
          "Keep wallet software, browser, and device OS updated.",
          "Lock sessions on shared devices and remove old trusted devices regularly.",
        ],
      },
      {
        id: "phishing-scam-prevention",
        title: "Phishing and scam prevention",
        bullets: [
          "Use bookmarked official domains instead of links from unsolicited messages.",
          "Reject urgent requests that ask for seed phrases, private keys, or remote access.",
          "Verify support identities through official channels before sharing account details.",
          "Review every wallet signature prompt for destination, amount, and permissions.",
        ],
      },
      {
        id: "expected-outcome",
        title: "Expected confirmation and outcome",
        bullets: [
          "Your account exposure to credential theft and impersonation is reduced.",
          "Suspicious prompts are detected earlier before approval.",
          "Recovery information is available before incidents happen.",
        ],
      },
      {
        id: "common-failures",
        title: "Common failure states",
        bullets: [
          "User approves a malicious signature request.",
          "Recovery phrase is stored in an online note or screenshot.",
          "Account access is lost after device change without recovery preparation.",
          "Fake support contacts request sensitive credentials.",
        ],
      },
      {
        id: "recovery-escalation",
        title: "Recovery and escalation steps",
        steps: [
          "Immediately revoke exposed approvals or session permissions if tools are available.",
          "Move remaining funds to a safe wallet if compromise is suspected.",
          "Rotate passwords and re-enable MFA from a trusted device.",
          "Contact official support with account identifier, timestamps, and transaction references.",
        ],
      },
      {
        id: "risk-safety-notes",
        title: "Risk and safety notes",
        bullets: [
          "Security incidents can cascade quickly; act immediately after suspicious activity.",
          "No legitimate support flow requires your private key or seed phrase.",
          "Treat all unsolicited offers, airdrops, and recovery links as untrusted until verified.",
        ],
      },
      {
        id: "related-docs",
        title: "Related docs",
        links: [
          getDocLink("/docs/user-guide/accounts-and-wallets"),
          getDocLink("/docs/user-guide/send-transaction"),
          getDocLink("/docs/user-guide/faq"),
        ],
      },
    ],
  },
  "/docs/user-guide/faq": {
    description:
      "Find concise answers to common user questions with links to the right procedural guide for each task.",
    metadataTitle: "User Guide: FAQ",
    metadataDescription:
      "Top user questions answered directly with links to full workflow pages for accounts, trades, transactions, staking, payments, fees, and security.",
    calloutVariant: "note",
    calloutTitle: "Purpose",
    calloutBody:
      "Use this page for quick answers, then open the linked guide for complete step-by-step instructions.",
    headings: [
      {
        id: "faq-1",
        title: "How do I start using Ryvra safely?",
        body: "Set up your account wallet first, secure it, and run a small test transaction before high-value activity.",
        links: [
          getDocLink("/docs/user-guide/accounts-and-wallets"),
          getDocLink("/docs/user-guide/security-best-practices"),
        ],
      },
      {
        id: "faq-2",
        title: "Why did my trade quote change before execution?",
        body: "Quotes can change with live market movement. If execution exceeds your tolerance, the trade can fail or partially fill.",
        links: [
          getDocLink("/docs/user-guide/buy-sell-trade"),
          getDocLink("/docs/user-guide/fees-limits-and-risks"),
        ],
      },
      {
        id: "faq-3",
        title: "My transaction is pending. Should I send again?",
        body: "Do not duplicate immediately. Check network status and transaction ID first, then use retry or replacement options only if supported.",
        links: [getDocLink("/docs/user-guide/send-transaction")],
      },
      {
        id: "faq-4",
        title: "Can I unstake or remove liquidity at any time?",
        body: "Not always. Some positions have lockups, cooldowns, or withdrawal windows that must complete first.",
        links: [getDocLink("/docs/user-guide/liquidity-and-staking")],
      },
      {
        id: "faq-5",
        title: "What checks matter most before I send a payment?",
        body: "Validate recipient details, selected network, amount precision, and total fees before approval.",
        links: [getDocLink("/docs/user-guide/send-payments")],
      },
      {
        id: "faq-6",
        title: "Where can I see all fee and limit impacts?",
        body: "Review each confirmation screen and activity record; they show fee and threshold effects for each action.",
        links: [getDocLink("/docs/user-guide/fees-limits-and-risks")],
      },
      {
        id: "faq-7",
        title: "What should I do if I suspect phishing or wallet compromise?",
        body: "Revoke permissions if possible, move funds to safety, rotate credentials, and contact official support immediately.",
        links: [getDocLink("/docs/user-guide/security-best-practices")],
      },
    ],
  },
  "/docs/merchant-guide": {
    description: "Use the merchant track to understand business outcomes, onboarding, collections, payouts, treasury, reconciliation, and operational controls.",
    metadataTitle: "For Merchants",
    metadataDescription: "Production merchant playbook for onboarding, business value, collections, payouts, treasury, reconciliation, operational controls, and FAQ guidance.",
    calloutVariant: "success",
    calloutTitle: "Operate with clear owners",
    calloutBody: "Merchant success depends as much on role clarity and reconciliation discipline as it does on the underlying integration.",
    headings: [
      {
        id: "who-this-guide-is-for",
        title: "Who this guide is for",
        body: "This guide is for merchant operators, finance teams, and support leads responsible for payment acceptance and post-payment operations.",
        bullets: [
          "Merchant operations owners who run onboarding and go-live checklists.",
          "Finance and reconciliation teams responsible for close accuracy.",
          "Support and risk teams handling refund and dispute events.",
        ],
      },
      {
        id: "merchant-operating-lifecycle",
        title: "Merchant operating lifecycle",
        steps: [
          "Complete account onboarding, access control, and settlement profile setup.",
          "Launch acceptance channels such as checkout links, invoices, and subscriptions.",
          "Monitor payment confirmations and exception queues throughout the day.",
          "Run payout and settlement reviews, then complete reconciliation and close.",
          "Handle refunds, disputes, and compliance escalations with evidence trails.",
        ],
      },
      {
        id: "start-paths",
        title: "Start paths by role",
        links: [
          getDocLink("/docs/merchant-guide/overview"),
          getDocLink("/docs/merchant-guide/onboarding"),
          getDocLink("/docs/merchant-guide/payouts-and-collections-workflows"),
          getDocLink("/docs/merchant-guide/treasury-and-reconciliation-basics"),
          getDocLink("/docs/merchant-guide/operational-checklists"),
          getDocLink("/docs/merchant-guide/checkout-payment-links"),
        ],
      },
      {
        id: "go-live-readiness-signals",
        title: "Go-live readiness signals",
        bullets: [
          "Merchant profile and settlement destination are approved.",
          "Operational teams can confirm, refund, and reconcile a test transaction end to end.",
          "Escalation contacts and incident response paths are documented and tested.",
        ],
      },
      {
        id: "related-docs",
        title: "Related docs",
        links: [
          getDocLink("/docs/merchant-guide/overview"),
          getDocLink("/docs/merchant-guide/merchant-faq"),
          getDocLink("/docs/developer-guide"),
        ],
      },
    ],
  },
  "/docs/merchant-guide/overview": {
    description: "Understand the merchant value proposition in practical terms: controlled collections, programmable payouts, clearer reconciliation, and safer automation boundaries.",
    metadataTitle: "Merchant Guide: Why Ryvra for Merchants",
    metadataDescription: "Business-focused merchant overview covering Ryvra's operational value, control model, and where it fits in payment and treasury workflows.",
    calloutVariant: "info",
    calloutTitle: "Business-first framing",
    calloutBody: "Start with outcomes and controls, then move to implementation detail once the operating model makes sense.",
    headings: [
      {
        id: "who-is-this-for",
        title: "Who is this for?",
        body: "Merchant decision-makers and operators evaluating Ryvra.",
      },
      {
        id: "prerequisites",
        title: "Prerequisites",
        bullets: [
          "Know whether you are evaluating Ryvra or preparing for launch.",
          "Identify the owners for operations, finance close, and incident response.",
        ],
      },
      {
        id: "in-plain-english",
        title: "In plain English",
        body: "Ryvra helps merchants automate money movement without losing operational control. It is designed to make approvals, limits, and final records explicit rather than hidden in ad hoc workflows.",
      },
      {
        id: "business-outcomes",
        title: "Business outcomes",
        bullets: [
          "Faster collections and payout workflows with clearer status tracking.",
          "Shared control logic across checkout, payouts, treasury, and settlement-sensitive actions.",
          "Better reconciliation because workflows keep references, statuses, and final-state evidence together.",
          "Safer automation because policy and risk controls can stop actions before execution.",
        ],
      },
      {
        id: "implementation-prerequisites-and-risks",
        title: "Implementation prerequisites and risk notes",
        bullets: [
          "You still need named internal owners for operations, finance, and incident response.",
          "No merchant should assume optimistic local status is the final source of truth.",
          "Live credentials, payout destinations, and refund authority need restricted ownership.",
        ],
      },
      {
        id: "deep-spec-link",
        title: "Deep spec link",
        links: [getDocLink("/docs/rfc-index"), getDocLink("/docs/governance-and-security-model")],
      },
      {
        id: "related-docs",
        title: "Related docs",
        links: [
          getDocLink("/docs/merchant-guide/onboarding"),
          getDocLink("/docs/merchant-guide/payouts-and-collections-workflows"),
          getDocLink("/docs/merchant-guide/treasury-and-reconciliation-basics"),
          getDocLink("/docs/merchant-guide/operational-checklists"),
        ],
      },
    ],
  },
  "/docs/merchant-guide/onboarding": {
    description: "Complete merchant account onboarding, settlement setup, and launch readiness before taking production payments.",
    metadataTitle: "Merchant Guide: Onboarding",
    metadataDescription: "Production onboarding checklist covering account readiness, settlement assumptions, and go-live controls for merchants.",
    calloutVariant: "success",
    calloutTitle: "Launch gate",
    calloutBody: "Do not process live traffic until every readiness checkpoint on this page is complete.",
    headings: [
      {
        id: "purpose-and-scope",
        title: "Purpose and scope",
        body: "Covers merchant account readiness, operational ownership setup, settlement assumptions, and go-live decision gates.",
      },
      {
        id: "prerequisites",
        title: "Prerequisites",
        bullets: [
          "Legal business profile and required verification artifacts are prepared.",
          "Named operational owners exist for payments, finance close, and incident response.",
          "Settlement destination accounts and payout currencies are confirmed internally.",
        ],
      },
      {
        id: "step-by-step-procedure",
        title: "Step-by-step onboarding procedure",
        steps: [
          "Create merchant account and assign least-privilege roles for operations, finance, and support.",
          "Complete verification workflow and resolve any pending data requests.",
          "Configure settlement profile, payout schedule assumptions, and reconciliation contacts.",
          "Register webhook endpoint and alert channels for payment and settlement events.",
          "Run sandbox and low-risk production smoke tests across payment, refund, and payout flows.",
          "Execute go-live checklist sign-off across merchant operations and engineering owners.",
        ],
      },
      {
        id: "expected-outcomes",
        title: "Expected outcomes and confirmations",
        bullets: [
          "Account status is active for intended merchant capabilities.",
          "Settlement profile validates and payout destination is accepted.",
          "First controlled transaction flow is confirmed end to end.",
        ],
      },
      {
        id: "failure-states",
        title: "Common failure states",
        bullets: [
          "Verification remains pending due to incomplete or mismatched business details.",
          "Settlement destination fails validation or does not match approved entity data.",
          "Webhook endpoint setup succeeds but event handling is not acknowledged in operations.",
        ],
      },
      {
        id: "recovery-escalation",
        title: "Recovery and escalation paths",
        steps: [
          "Correct account or settlement data and re-run validation immediately.",
          "Replay test transactions and verify event acknowledgements before reattempting go-live.",
          "Escalate with merchant ID, request IDs, and failed checkpoint evidence if activation remains blocked.",
        ],
      },
      {
        id: "risk-compliance-notes",
        title: "Risk and compliance notes",
        bullets: [
          "Do not share production credentials outside approved key-management controls.",
          "Restrict who can modify payout destinations and refund permissions.",
          "Maintain an auditable go-live checklist with date, owner, and approval trace.",
        ],
      },
      {
        id: "related-docs",
        title: "Related docs",
        links: [
          getDocLink("/docs/merchant-guide/overview"),
          getDocLink("/docs/merchant-guide/payouts-settlement"),
          getDocLink("/docs/merchant-guide/risk-compliance"),
          getDocLink("/docs/developer-guide/authentication"),
          getDocLink("/docs/developer-guide/environments-and-deployment"),
        ],
      },
    ],
  },
  "/docs/merchant-guide/payouts-and-collections-workflows": {
    description:
      "Use this page to understand how merchant collections and payouts fit together before you dive into individual checkout, invoice, subscription, or settlement procedures.",
    metadataTitle: "Merchant Guide: Payouts and Collections Workflows",
    metadataDescription:
      "Merchant overview for collections, payouts, exceptions, and the deeper workflow guides that support daily operations.",
    calloutVariant: "info",
    calloutTitle: "Track both directions of money movement",
    calloutBody:
      "Collections and payouts have different operational owners, but both depend on clear lifecycle states, approvals, and final settlement records.",
    headings: [
      {
        id: "who-is-this-for",
        title: "Who is this for?",
        body: "Merchant operators and finance teams that need a simple map of how inbound and outbound money movement work on Ryvra.",
      },
      {
        id: "in-plain-english",
        title: "In plain English",
        body: "Use this page to understand the full operating loop first: collect money, confirm the final state, pay out safely, then reconcile what happened.",
      },
      {
        id: "step-by-step",
        title: "Step-by-step",
        steps: [
          "Start with the checkout, invoice, or subscription guide that matches how you collect money.",
          "Use the payouts and settlement guide to understand when outbound movement should happen.",
          "Route refunds, disputes, and unresolved exceptions into the risk and support workflows instead of treating them as normal retries.",
        ],
      },
      {
        id: "deep-spec-link",
        title: "Deep spec link",
        links: [getDocLink("/docs/rfc-index"), getDocLink("/docs/developer-guide/payments-integration")],
      },
      {
        id: "related-pages",
        title: "Related pages",
        links: [
          getDocLink("/docs/merchant-guide/checkout-payment-links"),
          getDocLink("/docs/merchant-guide/invoicing"),
          getDocLink("/docs/merchant-guide/subscriptions"),
          getDocLink("/docs/merchant-guide/payouts-settlement"),
        ],
      },
    ],
  },
  "/docs/merchant-guide/treasury-and-reconciliation-basics": {
    description:
      "Understand how settlement, treasury movement, and reconciliation fit together so finance and operations teams close on final state rather than guesswork.",
    metadataTitle: "Merchant Guide: Treasury and Reconciliation Basics",
    metadataDescription:
      "Merchant guide to treasury, settlement, reconciliation, and daily close expectations across Ryvra workflows.",
    calloutVariant: "info",
    calloutTitle: "Close on what is final",
    calloutBody:
      "Treasury decisions should follow terminal settlement state and preserved references, not optimistic local views.",
    headings: [
      {
        id: "who-is-this-for",
        title: "Who is this for?",
        body: "Merchant finance, treasury, and operations teams that need a shared mental model before reading the detailed settlement or reconciliation procedures.",
      },
      {
        id: "prerequisites",
        title: "Prerequisites",
        bullets: [
          "Know which payout destinations and currencies matter to your workflow.",
          "Have access to the references generated by payment, payout, and settlement events.",
        ],
      },
      {
        id: "in-plain-english",
        title: "In plain English",
        body: "Treasury tells you where value should land. Reconciliation proves whether it did. Both depend on treating final settlement state as the source of truth.",
      },
      {
        id: "deep-spec-link",
        title: "Deep spec link",
        links: [getDocLink("/docs/audit-and-provenance"), getDocLink("/docs/developer-guide/payments-integration")],
      },
      {
        id: "related-pages",
        title: "Related pages",
        links: [
          getDocLink("/docs/merchant-guide/payouts-settlement"),
          getDocLink("/docs/merchant-guide/reconciliation-reporting"),
          getDocLink("/docs/merchant-guide/risk-compliance"),
        ],
      },
    ],
  },
  "/docs/merchant-guide/operational-checklists": {
    description:
      "Use these checklists to keep launch, daily operations, and escalation handling consistent across merchant teams.",
    metadataTitle: "Merchant Guide: Operational Checklists",
    metadataDescription:
      "Merchant checklists for onboarding, daily close, exception handling, and support escalation in the Ryvra docs portal.",
    calloutVariant: "note",
    calloutTitle: "Operational discipline matters",
    calloutBody:
      "Clear checklists reduce avoidable mistakes during launch, close, and exception handling.",
    headings: [
      {
        id: "go-live-checklist",
        title: "Go-live checklist",
        bullets: [
          "Verification completed and owners assigned.",
          "Payout destinations, alerts, and escalation contacts reviewed.",
          "Test transactions completed across core workflows.",
        ],
      },
      {
        id: "daily-operations-checklist",
        title: "Daily operations checklist",
        bullets: [
          "Review pending versus terminal states.",
          "Investigate exceptions before close.",
          "Confirm reconciliation references for closed items.",
        ],
      },
      {
        id: "related-pages",
        title: "Related pages",
        links: [
          getDocLink("/docs/merchant-guide/onboarding"),
          getDocLink("/docs/merchant-guide/treasury-and-reconciliation-basics"),
          getDocLink("/docs/support-and-escalation"),
        ],
      },
    ],
  },
  "/docs/merchant-guide/checkout-payment-links": {
    description: "Run checkout and payment-link workflows with clear confirmation handling, expiry behavior, and retry controls.",
    metadataTitle: "Merchant Guide: Checkout and Payment Links",
    metadataDescription: "Operational guide for creating payment links, managing expiry and retries, and confirming payments safely.",
    calloutVariant: "info",
    calloutTitle: "Payment collection",
    calloutBody: "Treat each payment link as a controlled lifecycle with explicit expiry, retry, and confirmation rules.",
    headings: [
      {
        id: "purpose-and-scope",
        title: "Purpose and scope",
        body: "Explains how to create and operate checkout or payment-link collection flows from creation through final confirmation.",
      },
      {
        id: "prerequisites",
        title: "Prerequisites",
        bullets: [
          "Onboarding and settlement setup are complete for production use.",
          "Order references and amount calculation rules are finalized before link creation.",
          "Operators can access payment status queues and webhook monitoring dashboards.",
        ],
      },
      {
        id: "step-by-step-procedure",
        title: "Step-by-step procedure",
        steps: [
          "Create checkout session or payment link with amount, currency, customer reference, and expiration.",
          "Present link to customer through approved channel and store the generated payment identifier.",
          "Monitor status transitions from created to pending, confirmed, failed, or expired.",
          "On expiry, generate a replacement link tied to the same merchant order context when appropriate.",
          "On payment confirmation, lock fulfillment to the confirmed payment identifier and timestamp.",
        ],
      },
      {
        id: "expected-outcomes",
        title: "Expected outcomes and confirmations",
        bullets: [
          "Each checkout attempt has a unique payment reference and clear status history.",
          "Expired links are not fulfilled and are replaced through controlled retry flow.",
          "Confirmed payments are matched to order records before fulfillment release.",
        ],
      },
      {
        id: "failure-states",
        title: "Common failure states",
        bullets: [
          "Customer attempts payment after link expiry window closes.",
          "Duplicate customer submissions create multiple pending attempts for one order.",
          "Webhook delivery delay causes temporary mismatch between UI and backend status.",
        ],
      },
      {
        id: "recovery-escalation",
        title: "Recovery and escalation paths",
        steps: [
          "Use payment status endpoint and event history to resolve the current canonical state.",
          "Reissue link with explicit expiry and customer communication when prior attempt expires or fails.",
          "Escalate unresolved confirmation conflicts with payment IDs, event IDs, and order references.",
        ],
      },
      {
        id: "risk-compliance-notes",
        title: "Risk and compliance notes",
        bullets: [
          "Set practical expiry windows to reduce stale-link misuse risk.",
          "Do not accept fulfillment triggers from unverified external notifications.",
          "Retain customer communication logs for dispute response and audit review.",
        ],
      },
      {
        id: "related-docs",
        title: "Related docs",
        links: [
          getDocLink("/docs/merchant-guide/invoicing"),
          getDocLink("/docs/merchant-guide/reconciliation-reporting"),
          getDocLink("/docs/developer-guide/payments-integration"),
          getDocLink("/docs/developer-guide/webhooks-events"),
          getDocLink("/docs/developer-guide/rate-limits-idempotency"),
        ],
      },
    ],
  },
  "/docs/merchant-guide/invoicing": {
    description: "Manage invoice issuance, reminders, expiration, cancellation, and payment confirmation with clear lifecycle controls.",
    metadataTitle: "Merchant Guide: Invoicing",
    metadataDescription: "Invoice lifecycle operations including draft, issued, paid, expired, and canceled states with reminder and escalation guidance.",
    calloutVariant: "info",
    calloutTitle: "Invoice lifecycle control",
    calloutBody: "Treat invoices as stateful records with explicit owner actions at each transition.",
    headings: [
      {
        id: "purpose-and-scope",
        title: "Purpose and scope",
        body: "Covers merchant invoicing operations from draft creation through payment, expiration, cancellation, and closeout.",
      },
      {
        id: "prerequisites",
        title: "Prerequisites",
        bullets: [
          "Invoice templates, tax display rules, and customer communication channels are approved.",
          "Payment terms and reminder schedule policy are defined by operations.",
          "Teams can monitor invoice status and related payment confirmations.",
        ],
      },
      {
        id: "step-by-step-procedure",
        title: "Step-by-step procedure",
        steps: [
          "Create invoice with customer details, line items, due date, and reference identifier.",
          "Issue invoice and deliver through approved communication channel.",
          "Schedule reminders before due date and at grace-period checkpoints.",
          "Track lifecycle transitions: draft, issued, viewed, partially paid, paid, expired, canceled.",
          "Cancel or expire unpaid invoices based on policy, then reconcile final state in finance records.",
        ],
      },
      {
        id: "expected-outcomes",
        title: "Expected outcomes and confirmations",
        bullets: [
          "Every invoice has an immutable identifier and full state history.",
          "Reminder and expiration actions occur on policy-defined schedule.",
          "Paid invoices map to settlement and accounting entries without ambiguity.",
        ],
      },
      {
        id: "failure-states",
        title: "Common failure states",
        bullets: [
          "Invoice sent with incorrect amount or customer identifier.",
          "Reminder automation is skipped, leading to missed collections.",
          "Invoice appears paid in one system but open in another due to delayed confirmation ingestion.",
        ],
      },
      {
        id: "recovery-escalation",
        title: "Recovery and escalation paths",
        steps: [
          "Void or cancel incorrect invoice and issue corrected replacement with cross-reference.",
          "Backfill missed reminders and log manual outreach in customer record.",
          "Escalate cross-system mismatches with invoice ID, payment ID, and settlement references.",
        ],
      },
      {
        id: "risk-compliance-notes",
        title: "Risk and compliance notes",
        bullets: [
          "Do not edit paid invoice core fields without approved adjustment process.",
          "Preserve invoice artifacts required for tax and audit retention windows.",
          "Restrict cancellation rights to approved financial operators.",
        ],
      },
      {
        id: "related-docs",
        title: "Related docs",
        links: [
          getDocLink("/docs/merchant-guide/checkout-payment-links"),
          getDocLink("/docs/merchant-guide/reconciliation-reporting"),
          getDocLink("/docs/developer-guide/payments-integration"),
          getDocLink("/docs/developer-guide/webhooks-events"),
        ],
      },
    ],
  },
  "/docs/merchant-guide/subscriptions": {
    description: "Operate recurring billing with clear renewal behavior, dunning assumptions, and exception handling.",
    metadataTitle: "Merchant Guide: Subscriptions",
    metadataDescription: "Merchant subscription operations for setup, renewal, retry and dunning policy, and cancellation handling.",
    calloutVariant: "info",
    calloutTitle: "Recurring billing discipline",
    calloutBody: "Define renewal and dunning behavior before launch so operators can respond consistently to failed renewals.",
    headings: [
      {
        id: "purpose-and-scope",
        title: "Purpose and scope",
        body: "Describes operational control of subscription plans, customer enrollment, renewal cycles, and delinquency handling.",
      },
      {
        id: "prerequisites",
        title: "Prerequisites",
        bullets: [
          "Plan catalog, billing intervals, and customer consent language are approved.",
          "Retry cadence and dunning communication policy are documented.",
          "Support team has access to subscription state and payment-attempt history.",
        ],
      },
      {
        id: "step-by-step-procedure",
        title: "Step-by-step procedure",
        steps: [
          "Create subscription plan configuration with interval, amount, and renewal rules.",
          "Enroll customer with explicit authorization and stored reference identifiers.",
          "Monitor lifecycle transitions: pending, active, past_due, paused, canceled.",
          "Apply dunning and retry policy for failed renewals within configured attempt window.",
          "Suspend or cancel subscription when retries exhaust or customer requests termination.",
        ],
      },
      {
        id: "expected-outcomes",
        title: "Expected outcomes and confirmations",
        bullets: [
          "Renewals post with traceable attempt numbers and timestamps.",
          "Failed renewals enter policy-defined dunning flow automatically.",
          "State transitions are reflected in customer access and finance reports.",
        ],
      },
      {
        id: "failure-states",
        title: "Common failure states",
        bullets: [
          "Renewal attempt fails repeatedly due to insufficient balance or authorization issues.",
          "Subscription remains active after cancellation request due to delayed state update.",
          "Dunning notifications are sent out of sequence or not sent at all.",
        ],
      },
      {
        id: "recovery-escalation",
        title: "Recovery and escalation paths",
        steps: [
          "Review attempt history and customer communication timeline before manual intervention.",
          "Run controlled retry only within policy and preserve idempotent operation references.",
          "Escalate unresolved renewal anomalies with subscription ID, attempt IDs, and webhook evidence.",
        ],
      },
      {
        id: "risk-compliance-notes",
        title: "Risk and compliance notes",
        bullets: [
          "Capture customer consent and cancellation records for audit defensibility.",
          "Avoid hidden retry behavior that differs from published billing terms.",
          "Ensure pause/cancel actions are permissioned and fully logged.",
        ],
      },
      {
        id: "related-docs",
        title: "Related docs",
        links: [
          getDocLink("/docs/merchant-guide/checkout-payment-links"),
          getDocLink("/docs/merchant-guide/refunds-disputes"),
          getDocLink("/docs/developer-guide/payments-integration"),
          getDocLink("/docs/developer-guide/webhooks-events"),
        ],
      },
    ],
  },
  "/docs/merchant-guide/payouts-settlement": {
    description: "Run payout and settlement operations with timing windows, reconciliation checkpoints, and exception controls.",
    metadataTitle: "Merchant Guide: Payouts and Settlement",
    metadataDescription: "Merchant payout and settlement operations covering timing windows, checkpoints, and exception management.",
    calloutVariant: "success",
    calloutTitle: "Cash movement controls",
    calloutBody: "Use timing windows and checkpoint reviews to keep settlement and ledger records aligned.",
    headings: [
      {
        id: "purpose-and-scope",
        title: "Purpose and scope",
        body: "Defines how merchants monitor settlement creation, payout execution windows, and exception resolution.",
      },
      {
        id: "prerequisites",
        title: "Prerequisites",
        bullets: [
          "Verified payout destination and payout schedule are active.",
          "Finance owners have access to settlement and payout reporting views.",
          "Escalation process exists for bank or network-side payout exceptions.",
        ],
      },
      {
        id: "step-by-step-procedure",
        title: "Step-by-step procedure",
        steps: [
          "Review settlement batches at each configured cut-off window.",
          "Confirm included transactions, fees, and net amount before payout release.",
          "Track payout states through queued, processing, paid, or exception.",
          "Run checkpoint reconciliation between settlement batch totals and internal ledger totals.",
          "Document and resolve any payout exceptions before closing period books.",
        ],
      },
      {
        id: "expected-outcomes",
        title: "Expected outcomes and confirmations",
        bullets: [
          "Settlement batches are complete, balanced, and approved per schedule.",
          "Payout records include expected timestamps and destination confirmations.",
          "Any delayed or exception payouts are visible in an explicit queue.",
        ],
      },
      {
        id: "failure-states",
        title: "Common failure states",
        bullets: [
          "Settlement totals do not match internal ledger due to missing events.",
          "Payout enters exception state because destination or network acceptance fails.",
          "Cut-off window is missed, delaying payout to next cycle.",
        ],
      },
      {
        id: "recovery-escalation",
        title: "Recovery and escalation paths",
        steps: [
          "Reconcile affected batch at transaction level and isolate mismatched items.",
          "Correct destination configuration or hold impacted funds per policy before retry.",
          "Escalate unresolved payout exceptions with settlement ID, payout ID, and destination evidence.",
        ],
      },
      {
        id: "risk-compliance-notes",
        title: "Risk and compliance notes",
        bullets: [
          "Limit who can edit payout destination and schedule settings.",
          "Maintain dual review for manual payout exception overrides.",
          "Retain settlement and payout evidence for financial and compliance audits.",
        ],
      },
      {
        id: "related-docs",
        title: "Related docs",
        links: [
          getDocLink("/docs/merchant-guide/onboarding"),
          getDocLink("/docs/merchant-guide/reconciliation-reporting"),
          getDocLink("/docs/merchant-guide/risk-compliance"),
          getDocLink("/docs/developer-guide/payments-integration"),
        ],
      },
    ],
  },
  "/docs/merchant-guide/refunds-disputes": {
    description: "Execute refund and dispute workflows with clear operator actions, evidence handling, and resolution states.",
    metadataTitle: "Merchant Guide: Refunds and Disputes",
    metadataDescription: "Operational workflow for refunds and disputes, including evidence collection and final state resolution.",
    calloutVariant: "warn",
    calloutTitle: "High-impact operations",
    calloutBody: "Refund and dispute actions directly affect funds movement and require strict evidence and approval controls.",
    headings: [
      {
        id: "purpose-and-scope",
        title: "Purpose and scope",
        body: "Covers refund initiation, approval, execution, and dispute response from intake through final resolution state.",
      },
      {
        id: "prerequisites",
        title: "Prerequisites",
        bullets: [
          "Refund authority matrix and approval thresholds are defined.",
          "Dispute response owners and evidence retention locations are documented.",
          "Operators can retrieve payment, invoice, fulfillment, and communication records.",
        ],
      },
      {
        id: "step-by-step-procedure",
        title: "Step-by-step procedure",
        steps: [
          "Receive refund or dispute request and validate requestor identity and payment reference.",
          "Review eligibility against merchant policy and transaction state.",
          "For refunds, submit action and monitor states: requested, reviewing, approved, declined, completed.",
          "For disputes, collect evidence pack and respond within required response window.",
          "Track dispute states: opened, responded, under_review, won, lost, closed.",
        ],
      },
      {
        id: "expected-outcomes",
        title: "Expected outcomes and confirmations",
        bullets: [
          "Each case has a complete timeline, owner, and final disposition state.",
          "Evidence packages are complete and linked to case identifier.",
          "Finance records reflect refunded amount, fees, and dispute adjustments.",
        ],
      },
      {
        id: "failure-states",
        title: "Common failure states",
        bullets: [
          "Refund requested for ineligible or already-reversed transaction.",
          "Dispute evidence submitted late or with missing fulfillment proof.",
          "Case state remains unresolved due to missing ownership handoff.",
        ],
      },
      {
        id: "recovery-escalation",
        title: "Recovery and escalation paths",
        steps: [
          "Re-open internal case review and reconcile requested action against payment truth source.",
          "Supplement evidence package and resubmit when response window remains open.",
          "Escalate high-value or repeat-pattern disputes immediately with full case audit trail.",
        ],
      },
      {
        id: "risk-compliance-notes",
        title: "Risk and compliance notes",
        bullets: [
          "Enforce dual approval for refunds above defined threshold.",
          "Preserve immutable case logs for audit and legal defensibility.",
          "Escalate unusual dispute velocity or pattern shifts as fraud/compliance signals.",
        ],
      },
      {
        id: "related-docs",
        title: "Related docs",
        links: [
          getDocLink("/docs/merchant-guide/invoicing"),
          getDocLink("/docs/merchant-guide/risk-compliance"),
          getDocLink("/docs/merchant-guide/reconciliation-reporting"),
          getDocLink("/docs/developer-guide/webhooks-events"),
          getDocLink("/docs/developer-guide/error-model-and-retries"),
        ],
      },
    ],
  },
  "/docs/merchant-guide/reconciliation-reporting": {
    description: "Close merchant books with daily and period reconciliation workflows and clear mismatch diagnosis paths.",
    metadataTitle: "Merchant Guide: Reconciliation and Reporting",
    metadataDescription: "Daily and period-close reconciliation process with mismatch diagnosis, escalation, and reporting checkpoints.",
    calloutVariant: "success",
    calloutTitle: "Close confidence",
    calloutBody: "Run reconciliation as a repeatable operational ritual with explicit stop/go checkpoints before close.",
    headings: [
      {
        id: "purpose-and-scope",
        title: "Purpose and scope",
        body: "Defines how merchants reconcile transaction, settlement, payout, refund, and dispute data into period-close outputs.",
      },
      {
        id: "prerequisites",
        title: "Prerequisites",
        bullets: [
          "Access to transaction exports, settlement reports, payout reports, and internal ledger extracts.",
          "Documented tolerance policy for acceptable variances and escalation thresholds.",
          "Named close owner and backup approver for each reporting period.",
        ],
      },
      {
        id: "step-by-step-procedure",
        title: "Step-by-step procedure",
        steps: [
          "Run daily close by exporting net transaction and settlement datasets for the same cutoff window.",
          "Match records by canonical IDs and verify gross, fee, net, and currency totals.",
          "Investigate mismatches by category: missing event, delayed settlement, duplicate record, or state drift.",
          "Document variance resolution and rerun checks until unresolved variance is within policy.",
          "Complete period-close package with sign-off, exception notes, and retained evidence links.",
        ],
      },
      {
        id: "expected-outcomes",
        title: "Expected outcomes and confirmations",
        bullets: [
          "Daily and period totals reconcile across merchant and platform records.",
          "Unresolved variances are tracked with owner and target resolution timestamp.",
          "Close package is reproducible for internal review and audit.",
        ],
      },
      {
        id: "failure-states",
        title: "Common failure states",
        bullets: [
          "Dataset cutoff windows are inconsistent, causing false variance.",
          "Missing webhook ingestion creates incomplete internal ledger states.",
          "Manual adjustments are made without documented justification.",
        ],
      },
      {
        id: "recovery-escalation",
        title: "Recovery and escalation paths",
        steps: [
          "Re-run exports with aligned cutoff windows and compare record counts first.",
          "Trace mismatched IDs through event history to identify source-of-truth divergence.",
          "Escalate material unresolved variance with reconciliation workbook and affected IDs.",
        ],
      },
      {
        id: "risk-compliance-notes",
        title: "Risk and compliance notes",
        bullets: [
          "Never close period books while material unexplained variance remains.",
          "Store reconciliation artifacts with tamper-evident retention controls.",
          "Apply segregation of duties between preparer and approver where possible.",
        ],
      },
      {
        id: "related-docs",
        title: "Related docs",
        links: [
          getDocLink("/docs/merchant-guide/payouts-settlement"),
          getDocLink("/docs/merchant-guide/refunds-disputes"),
          getDocLink("/docs/developer-guide/webhooks-events"),
          getDocLink("/docs/developer-guide/observability-and-runbooks"),
          getDocLink("/docs/developer-guide/troubleshooting"),
        ],
      },
    ],
  },
  "/docs/merchant-guide/risk-compliance": {
    description: "Apply merchant risk and compliance controls, ownership boundaries, and escalation triggers across operations.",
    metadataTitle: "Merchant Guide: Risk and Compliance",
    metadataDescription: "Merchant responsibilities, operational controls, and escalation triggers for risk and compliance operations.",
    calloutVariant: "warn",
    calloutTitle: "Control discipline",
    calloutBody: "Risk and compliance controls are part of every workflow, not an afterthought during incidents.",
    headings: [
      {
        id: "purpose-and-scope",
        title: "Purpose and scope",
        body: "Defines merchant-side responsibilities for preventing misuse, containing incidents, and maintaining audit-ready evidence.",
      },
      {
        id: "prerequisites",
        title: "Prerequisites",
        bullets: [
          "Documented policy for access control, transaction monitoring, and incident response.",
          "Assigned owners for compliance operations and executive escalation.",
          "Operational tooling for alerting, case management, and evidence retention.",
        ],
      },
      {
        id: "step-by-step-procedure",
        title: "Step-by-step control procedure",
        steps: [
          "Review privileged access and high-risk permissions on a defined cadence.",
          "Monitor payment, refund, and dispute patterns for unusual velocity or behavior.",
          "Investigate alerts, classify severity, and open tracked cases for confirmed issues.",
          "Escalate severe incidents immediately and execute containment actions.",
          "Close cases only after root cause, remediation, and prevention actions are documented.",
        ],
      },
      {
        id: "expected-outcomes",
        title: "Expected outcomes and confirmations",
        bullets: [
          "High-risk actions require proper approvals and audit logs.",
          "Escalation thresholds are triggered consistently and on time.",
          "Incident records include root cause and corrective action evidence.",
        ],
      },
      {
        id: "failure-states",
        title: "Common failure states",
        bullets: [
          "Excessive operator privileges remain active without review.",
          "Alert fatigue causes critical anomalies to be ignored or delayed.",
          "Incident closure lacks documented remediation proof.",
        ],
      },
      {
        id: "recovery-escalation",
        title: "Recovery and escalation paths",
        steps: [
          "Immediately revoke or reduce risky privileges tied to confirmed exposure.",
          "Contain impacted workflows and preserve immutable evidence snapshots.",
          "Escalate according to severity tier with executive and compliance stakeholders.",
        ],
      },
      {
        id: "risk-compliance-notes",
        title: "Risk and compliance notes",
        bullets: [
          "Follow least-privilege and separation-of-duties principles for funds movement controls.",
          "Maintain retention policies for records used in disputes, audits, and investigations.",
          "Do not override controls without approved emergency change process and retrospective review.",
        ],
      },
      {
        id: "related-docs",
        title: "Related docs",
        links: [
          getDocLink("/docs/merchant-guide/onboarding"),
          getDocLink("/docs/merchant-guide/refunds-disputes"),
          getDocLink("/docs/merchant-guide/reconciliation-reporting"),
          getDocLink("/docs/developer-guide/authentication"),
          getDocLink("/docs/developer-guide/observability-and-runbooks"),
        ],
      },
    ],
  },
  "/docs/merchant-guide/merchant-faq": {
    description: "Get concise answers to common merchant operations questions with links to the right detailed workflow pages.",
    metadataTitle: "Merchant Guide: FAQ",
    metadataDescription: "Merchant FAQ with quick operational answers and deep links to onboarding, payment, settlement, reconciliation, and integration guides.",
    calloutVariant: "note",
    calloutTitle: "Quick answers",
    calloutBody: "Use this page for fast orientation, then follow linked pages for full operational procedures.",
    headings: [
      {
        id: "faq-1",
        title: "When is my merchant account ready for production traffic?",
        body: "Production readiness requires approved account verification, settlement setup, event monitoring, and successful controlled test flows.",
        links: [
          getDocLink("/docs/merchant-guide/onboarding"),
          getDocLink("/docs/merchant-guide/payouts-settlement"),
        ],
      },
      {
        id: "faq-2",
        title: "What should I do when a payment link expires before customer completion?",
        body: "Issue a new link tied to the same merchant order reference and keep fulfillment blocked until confirmed payment state is received.",
        links: [
          getDocLink("/docs/merchant-guide/checkout-payment-links"),
          getDocLink("/docs/developer-guide/rate-limits-idempotency"),
        ],
      },
      {
        id: "faq-3",
        title: "How should we handle invoice reminders and cancellations?",
        body: "Use a defined reminder cadence, then expire or cancel by policy so finance and customer support records remain consistent.",
        links: [
          getDocLink("/docs/merchant-guide/invoicing"),
          getDocLink("/docs/merchant-guide/reconciliation-reporting"),
        ],
      },
      {
        id: "faq-4",
        title: "What happens when a subscription renewal fails?",
        body: "The renewal should follow your configured retry and dunning policy, then pause or cancel after retry exhaustion.",
        links: [
          getDocLink("/docs/merchant-guide/subscriptions"),
          getDocLink("/docs/developer-guide/payments-integration"),
        ],
      },
      {
        id: "faq-5",
        title: "How do we investigate payout exceptions?",
        body: "Compare settlement batch totals against internal ledger records, isolate affected payouts, and escalate unresolved destination or network exceptions.",
        links: [
          getDocLink("/docs/merchant-guide/payouts-settlement"),
          getDocLink("/docs/merchant-guide/reconciliation-reporting"),
        ],
      },
      {
        id: "faq-6",
        title: "What evidence is required for dispute response?",
        body: "Provide payment references, fulfillment proof, customer communication history, and policy context before response deadlines.",
        links: [
          getDocLink("/docs/merchant-guide/refunds-disputes"),
          getDocLink("/docs/merchant-guide/risk-compliance"),
        ],
      },
      {
        id: "faq-7",
        title: "Which metrics should we watch daily?",
        body: "Track authorization success, confirmation delay, refund/dispute velocity, payout exception rate, and unresolved reconciliation variance.",
        links: [
          getDocLink("/docs/merchant-guide/reconciliation-reporting"),
          getDocLink("/docs/developer-guide/observability-and-runbooks"),
        ],
      },
      {
        id: "faq-8",
        title: "When should merchant operations escalate to engineering?",
        body: "Escalate immediately for persistent state mismatches, repeated event delivery failures, or controls that prevent safe customer-impacting actions.",
        links: [
          getDocLink("/docs/developer-guide/troubleshooting"),
          getDocLink("/docs/developer-guide/webhooks-events"),
        ],
      },
    ],
  },
  "/docs/developer-guide": {
    description: "Build and operate Ryvra integrations with clear authority boundaries, lifecycle controls, deployment discipline, and observability.",
    metadataTitle: "For Developers",
    metadataDescription: "Production integration reference for Ryvra architecture, API and SDK onboarding, auth, events, retries, deployment, testing, and operations.",
    calloutVariant: "success",
    calloutTitle: "Concise but technical",
    calloutBody: "Use this guide to implement bounded autonomous-finance integrations with explicit ownership, policy, and finality semantics.",
    headings: [
      {
        id: "purpose-and-scope",
        title: "Purpose and scope",
        body: "This guide is for engineers integrating trading, payments, treasury, confidentiality, and operational event workflows.",
      },
      {
        id: "integration-prerequisites",
        title: "Integration prerequisites",
        bullets: [
          "Merchant account readiness and environment access are in place.",
          "Secure credential storage and rotation processes are defined.",
          "Engineering and operations teams agree on incident and escalation ownership.",
          "The authority model for agents, operators, and deterministic services is documented before implementation begins.",
        ],
      },
      {
        id: "request-response-patterns",
        title: "Request and response patterns",
        body: "Ryvra integrations combine synchronous API requests for commands and asynchronous events for final state confirmation.",
      },
      {
        id: "lifecycle-and-state-model",
        title: "Lifecycle and state model",
        bullets: [
          "Client or agent submits an idempotent request to create or modify state.",
          "Platform returns immediate acceptance or validation failure after mandate, policy, and risk checks.",
          "Final or transitional state is observed through polling and/or webhook events and reconciled against ledger and settlement truth.",
        ],
      },
      {
        id: "error-failure-taxonomy",
        title: "Error and failure taxonomy",
        bullets: [
          "Validation errors require request correction before retry.",
          "Transient dependency or network failures can be retried with backoff.",
          "Policy or compliance errors need operator intervention before reattempt.",
        ],
      },
      {
        id: "retry-idempotency-guidance",
        title: "Retry and idempotency guidance",
        body: "Use stable idempotency keys per logical operation and bounded retry policies keyed by normalized error class.",
      },
      {
        id: "observability-debugging",
        title: "Observability and debugging entry points",
        bullets: [
          "Track request IDs, operation IDs, and event IDs across systems.",
          "Alert on prolonged pending states and delivery retry exhaustion.",
          "Keep runbooks for replay, reconciliation, and incident escalation.",
        ],
      },
      {
        id: "related-docs",
        title: "Related docs",
        links: [
          getDocLink("/docs/developer-guide/architecture-overview"),
          getDocLink("/docs/developer-guide/api-sdk-onboarding"),
          getDocLink("/docs/developer-guide/financial-intent-model"),
          getDocLink("/docs/developer-guide/policy-risk-integration"),
          getDocLink("/docs/developer-guide/ledger-settlement-integration"),
          getDocLink("/docs/developer-guide/api-overview"),
          getDocLink("/docs/rfc-technical-specs"),
        ],
      },
    ],
  },
  "/docs/developer-guide/architecture-overview": {
    description: "Understand Ryvra control-plane, execution-plane, and settlement boundaries before building agentic finance workflows.",
    metadataTitle: "Developer Guide: Architecture Overview",
    metadataDescription: "Ryvra architecture boundaries for agent gateway, control plane, execution plane, confidential execution, and settlement truth.",
    calloutVariant: "info",
    calloutTitle: "System boundaries first",
    calloutBody: "Document who can propose, who can authorize, and which deterministic systems execute before implementing endpoint-level integrations.",
    headings: [
      {
        id: "purpose-and-scope",
        title: "Purpose and scope",
        body: "Describes functional boundaries and operational ownership across the agent gateway, control plane, execution plane, and settlement truth layer.",
      },
      {
        id: "control-plane",
        title: "Control plane",
        bullets: [
          "Identity binds requests to a verified principal or governed runtime.",
          "Mandates scope what can be proposed and what conditions must be met.",
          "Policy versions define approval logic and reviewable constraints.",
          "Independent deterministic risk decides whether execution may proceed.",
        ],
      },
      {
        id: "execution-plane",
        title: "Execution plane",
        bullets: [
          "Accounts, Pay, and Markets receive deterministic commands only after authorization.",
          "Agent Gateway acts as the boundary between proposal context and executable financial actions.",
          "Confidential execution protects sensitive state while preserving common control semantics.",
          "Private perps extend the execution plane without changing the core trust model.",
        ],
      },
      {
        id: "truth-layer",
        title: "Ledger and settlement truth layer",
        steps: [
          "Proposal arrives through the Agent Gateway with idempotency and correlation metadata.",
          "Control-plane systems validate identity, mandates, policy, and independent risk.",
          "Execution-plane services issue deterministic account, payment, market, or treasury actions.",
          "Ledger and settlement publish terminal state, balances, and provenance records.",
        ],
      },
      {
        id: "boundary-failures",
        title: "Boundary failures",
        bullets: [
          "Authorization failure: mandate, policy, or risk blocks execution.",
          "Boundary mismatch: proposal context attempts to bypass governed control surfaces.",
          "State divergence: client projection differs from canonical ledger or settlement state.",
        ],
      },
      {
        id: "control-notes",
        title: "Control notes",
        body: "Retriable operations must preserve operation identity, respect replay and rate controls, and never escalate agent authority during recovery.",
      },
      {
        id: "observability-debugging",
        title: "Observability and debugging entry points",
        bullets: [
          "Per-boundary dashboards for gateway intake, authorization latency, execution latency, and settlement finality.",
          "Cross-system trace views keyed by proposal, policy, request, event, and settlement identifiers.",
          "Ownership-aware incident templates for suspension, replay review, and emergency kill-switch activation.",
        ],
      },
      {
        id: "related-docs",
        title: "Related docs",
        links: [
          getDocLink("/docs/developer-guide/api-sdk-onboarding"),
          getDocLink("/docs/developer-guide/api-overview"),
          getDocLink("/docs/governance-and-security-model"),
          getDocLink("/docs/audit-and-provenance"),
          getDocLink("/docs/tokenomics/litepaper-faq"),
        ],
      },
      {
        id: "deep-spec-link",
        title: "Deep spec link",
        links: [getDocLink("/docs/rfc-index"), getDocLink("/docs/rfc-technical-specs")],
      },
    ],
  },
  "/docs/developer-guide/api-sdk-onboarding": {
    description: "Onboard to Ryvra APIs and SDKs with the authority model, environment setup, and first bounded workflow in place.",
    metadataTitle: "Developer Guide: API and SDK Onboarding",
    metadataDescription: "Ryvra onboarding guide for APIs and SDKs covering authority boundaries, credentials, first workflows, and production readiness.",
    calloutVariant: "success",
    calloutTitle: "Start safe",
    calloutBody: "Complete onboarding around authority, credentials, and observability before enabling any agent-assisted workflow.",
    headings: [
      {
        id: "what-you-need",
        title: "What you need",
        bullets: [
          "Sandbox or production environment access.",
          "Credential storage and rotation process.",
          "Defined owner for mandates, policy, and incident escalation.",
          "A first low-risk workflow to validate end-to-end behavior.",
        ],
      },
      {
        id: "recommended-onboarding-sequence",
        title: "Recommended onboarding sequence",
        steps: [
          "Read the architecture overview and governance model first.",
          "Provision credentials and bind identity to the correct operator or runtime.",
          "Implement SDK or API calls with idempotency, correlation, and policy metadata.",
          "Test one low-risk workflow and confirm terminal settlement state plus evidence capture.",
          "Promote only after replay, rate, spend, and suspension controls are verified.",
        ],
      },
      {
        id: "first-workflow-checklist",
        title: "First workflow checklist",
        bullets: [
          "The workflow stays within a published mandate.",
          "The risk engine and policy checks can block it deterministically.",
          "The integration records request, event, and settlement IDs.",
          "Operators know how to suspend or revoke the workflow if needed.",
        ],
      },
      {
        id: "related-docs",
        title: "Related docs",
        links: [
          getDocLink("/docs/developer-guide/architecture-overview"),
          getDocLink("/docs/developer-guide/api-overview"),
          getDocLink("/docs/developer-guide/authentication"),
          getDocLink("/docs/governance-and-security-model"),
        ],
      },
    ],
  },
  "/docs/developer-guide/financial-intent-model": {
    description:
      "FinancialIntent is the product-level model for describing what you want to happen, under which controls, and which identifiers downstream systems will need later.",
    metadataTitle: "Developer Guide: FinancialIntent Model",
    metadataDescription:
      "Developer guide to the FinancialIntent model, including why it exists, what context it needs, and how it links to settlement and policy checks.",
    calloutVariant: "info",
    calloutTitle: "Intent is not final state",
    calloutBody:
      "A FinancialIntent describes the requested outcome and authority context; settlement later determines the final recorded result.",
    headings: [
      {
        id: "who-is-this-for",
        title: "Who is this for?",
        body: "Developers modeling Ryvra workflows before they connect them to payments, market actions, or treasury logic.",
      },
      {
        id: "prerequisites",
        title: "Prerequisites",
        bullets: [
          "Understand the architecture overview and first onboarding flow.",
          "Know the business reference and downstream systems that need to observe the result.",
        ],
      },
      {
        id: "in-plain-english",
        title: "In plain English",
        body: "A FinancialIntent is the governed description of what should happen if the request passes identity, mandate, policy, and risk checks.",
      },
      {
        id: "deep-spec-link",
        title: "Deep spec link",
        links: [getDocLink("/docs/developer-guide/architecture-overview"), getDocLink("/docs/rfc-index")],
      },
      {
        id: "related-pages",
        title: "Related pages",
        links: [
          getDocLink("/docs/developer-guide/authentication"),
          getDocLink("/docs/developer-guide/policy-risk-integration"),
          getDocLink("/docs/developer-guide/ledger-settlement-integration"),
        ],
      },
    ],
  },
  "/docs/developer-guide/policy-risk-integration": {
    description:
      "Use this page to understand how policy and independent risk decisions fit into the Ryvra request lifecycle and how clients should react to those decisions.",
    metadataTitle: "Developer Guide: Policy and Risk Integration",
    metadataDescription:
      "Developer guide to Ryvra policy and risk integration, including reason-code thinking, retry boundaries, and related deep references.",
    calloutVariant: "warn",
    calloutTitle: "Do not treat denials as noise",
    calloutBody:
      "A blocked request is usually telling you something important about scope, policy, or risk that needs review.",
    headings: [
      {
        id: "who-is-this-for",
        title: "Who is this for?",
        body: "Developers and technical operators implementing approval logic around Ryvra workflows.",
      },
      {
        id: "prerequisites",
        title: "Prerequisites",
        bullets: [
          "Authentication and mandate context is already available to the request.",
          "Your client can preserve decision identifiers and classify retryable versus non-retryable outcomes.",
        ],
      },
      {
        id: "in-plain-english",
        title: "In plain English",
        body: "A request can be valid and still be the wrong thing to do. Policy and risk make that decision explicit before money moves.",
      },
      {
        id: "deep-spec-link",
        title: "Deep spec link",
        links: [getDocLink("/docs/governance-and-security-model"), getDocLink("/docs/rfc-index")],
      },
      {
        id: "related-pages",
        title: "Related pages",
        links: [
          getDocLink("/docs/developer-guide/error-model-and-retries"),
          getDocLink("/docs/developer-guide/authentication"),
          getDocLink("/docs/audit-and-provenance"),
        ],
      },
    ],
  },
  "/docs/developer-guide/ledger-settlement-integration": {
    description:
      "Integrate ledger and settlement outputs so downstream systems know when a workflow is still in progress, when it is final, and what to reconcile later.",
    metadataTitle: "Developer Guide: Ledger and Settlement Integration",
    metadataDescription:
      "Developer guide to Ryvra settlement-aware integrations, terminal states, and the references needed for reconciliation and support.",
    calloutVariant: "info",
    calloutTitle: "Final state is a contract",
    calloutBody:
      "Downstream systems should act on canonical terminal outcomes, not on optimistic local assumptions.",
    headings: [
      {
        id: "who-is-this-for",
        title: "Who is this for?",
        body: "Developers building fulfillment, accounting, or reconciliation-sensitive integrations.",
      },
      {
        id: "prerequisites",
        title: "Prerequisites",
        bullets: [
          "Your client stores request, event, and business references.",
          "Downstream systems know which state transitions are safe to act on.",
        ],
      },
      {
        id: "in-plain-english",
        title: "In plain English",
        body: "Settlement is where a requested workflow becomes a final recorded financial outcome that other systems can trust.",
      },
      {
        id: "deep-spec-link",
        title: "Deep spec link",
        links: [getDocLink("/docs/audit-and-provenance"), getDocLink("/docs/rfc-index")],
      },
      {
        id: "related-pages",
        title: "Related pages",
        links: [
          getDocLink("/docs/developer-guide/payments-integration"),
          getDocLink("/docs/developer-guide/testing-sandbox"),
          getDocLink("/docs/merchant-guide/treasury-and-reconciliation-basics"),
        ],
      },
    ],
  },
  "/docs/developer-guide/private-execution-perps-integration-points": {
    description:
      "Understand how confidential execution and private perps extension points fit into the same authority, policy, and settlement model as the rest of Ryvra.",
    metadataTitle: "Developer Guide: Private Execution and Perps Integration Points",
    metadataDescription:
      "Developer guide to confidentiality-sensitive Ryvra integrations and the advanced references that support them.",
    calloutVariant: "info",
    calloutTitle: "Private does not mean opaque",
    calloutBody:
      "Sensitive processing can stay protected while the overall workflow still remains governable and auditable.",
    headings: [
      {
        id: "who-is-this-for",
        title: "Who is this for?",
        body: "Developers evaluating confidential execution or private perps integrations.",
      },
      {
        id: "prerequisites",
        title: "Prerequisites",
        bullets: [
          "You already understand the normal control, execution, and settlement flow.",
          "You know which data must stay protected and which outputs still need to remain observable.",
        ],
      },
      {
        id: "in-plain-english",
        title: "In plain English",
        body: "Private execution changes where sensitive state is processed, not who has authority to approve or investigate the workflow.",
      },
      {
        id: "deep-spec-link",
        title: "Deep spec link",
        links: [getDocLink("/docs/rfc-index"), getDocLink("/docs/audit-and-provenance")],
      },
      {
        id: "related-pages",
        title: "Related pages",
        links: [
          getDocLink("/docs/developer-guide/account-abstraction-erc4337"),
          getDocLink("/docs/developer-guide/architecture-overview"),
          getDocLink("/docs/governance-and-security-model"),
        ],
      },
    ],
  },
  "/docs/developer-guide/api-overview": {
    description: "Review API surface families, authority expectations, and response conventions before endpoint-level integration.",
    metadataTitle: "Developer Guide: API Overview",
    metadataDescription: "Ryvra API surface map, endpoint families, payload conventions, and authority expectations for production integrations.",
    calloutVariant: "info",
    calloutTitle: "Map the surface",
    calloutBody: "Start by mapping endpoint families, ownership, and authority boundaries before implementing specific workflows.",
    headings: [
      {
        id: "purpose-and-scope",
        title: "Purpose and scope",
        body: "Provides an API surface map and compatibility model for production integration planning.",
      },
      {
        id: "integration-prerequisites",
        title: "Integration prerequisites",
        bullets: [
          "Environment credentials are available for sandbox and production targets.",
          "Service clients support retries, timeouts, and idempotency key headers.",
          "Request/response schemas are validated before deployment.",
          "Authority metadata is mapped to identity, mandate, and policy references.",
        ],
      },
      {
        id: "request-response-patterns",
        title: "Request and response patterns",
        bullets: [
          "Resource creation endpoints return identifiers and initial lifecycle state.",
          "Read endpoints return latest observable state and timestamp metadata.",
          "Action endpoints return accepted, rejected, or terminal outcome signals after governed authorization.",
        ],
      },
      {
        id: "lifecycle-and-state-model",
        title: "Lifecycle and state model",
        bullets: [
          "Intent creation captures desired operation context and authority references.",
          "Processing stages update state until terminal success, failure, suspension, or cancellation.",
          "Terminal states are consumed by merchant systems for fulfillment, accounting, and audit defensibility.",
        ],
      },
      {
        id: "error-failure-taxonomy",
        title: "Error and failure taxonomy",
        bullets: [
          "4xx validation/authorization errors: fix request or credentials.",
          "429 throttling responses: reduce request rate and back off.",
          "5xx dependency/internal errors: retry with bounded strategy and alerting.",
        ],
      },
      {
        id: "retry-idempotency-guidance",
        title: "Retry and idempotency guidance",
        body: "Attach idempotency keys to create and mutate operations, and retry only when failure class is explicitly transient.",
      },
      {
        id: "observability-debugging",
        title: "Observability and debugging entry points",
        bullets: [
          "Capture status code, error class, request ID, and latency for every call.",
          "Track endpoint-level success and throttle rates by environment.",
          "Correlate API operations with downstream webhook delivery outcomes.",
        ],
      },
      {
        id: "related-docs",
        title: "Related docs",
        links: [
          getDocLink("/docs/developer-guide/api-sdk-onboarding"),
          getDocLink("/docs/developer-guide/authentication"),
          getDocLink("/docs/developer-guide/error-model-and-retries"),
          getDocLink("/docs/developer-guide/rate-limits-idempotency"),
          getDocLink("/docs/governance-and-security-model"),
        ],
      },
    ],
  },
  "/docs/developer-guide/authentication": {
    description: "Implement production-safe authentication with secure credential handling and key rotation practices.",
    metadataTitle: "Developer Guide: Authentication",
    metadataDescription: "Auth model, API credential handling, signing practices, and key rotation guidance for Ryvra integrations.",
    calloutVariant: "warn",
    calloutTitle: "Protect credentials",
    calloutBody: "Authentication failures are often security failures; treat credential lifecycle as a first-class operational control.",
    headings: [
      {
        id: "purpose-and-scope",
        title: "Purpose and scope",
        body: "Covers credential provisioning, request authentication, secret storage, and rotation operations.",
      },
      {
        id: "integration-prerequisites",
        title: "Integration prerequisites",
        bullets: [
          "Centralized secrets manager with access logs and rotation workflow.",
          "Environment-specific credentials separated by least privilege.",
          "Runbook for compromised key response and emergency revocation.",
        ],
      },
      {
        id: "request-response-patterns",
        title: "Request and response patterns",
        bullets: [
          "Authenticated requests include required credentials and signature metadata.",
          "Unauthorized responses indicate missing, invalid, or expired credentials.",
          "Forbidden responses indicate valid credentials lacking required permission scope.",
        ],
      },
      {
        id: "lifecycle-and-state-model",
        title: "Lifecycle and state model",
        steps: [
          "Provision credentials with environment scope and owner assignment.",
          "Deploy credentials through secure secret distribution path.",
          "Rotate keys on schedule with overlapping validity window and cutover verification.",
          "Revoke old credentials and confirm no residual usage remains.",
        ],
      },
      {
        id: "error-failure-taxonomy",
        title: "Error and failure taxonomy",
        bullets: [
          "Invalid signature due to timestamp skew or signing mismatch.",
          "Expired or revoked key still in use by one or more services.",
          "Permission scope mismatch between endpoint and credential role.",
        ],
      },
      {
        id: "retry-idempotency-guidance",
        title: "Retry and idempotency guidance",
        body: "Do not blindly retry unauthorized responses; first verify key validity, clock sync, and credential scope.",
      },
      {
        id: "observability-debugging",
        title: "Observability and debugging entry points",
        bullets: [
          "Alert on spikes in 401 and 403 responses by service and environment.",
          "Track key-version usage to verify rotation cutovers.",
          "Log authentication failures with sanitized context only.",
        ],
      },
      {
        id: "related-docs",
        title: "Related docs",
        links: [
          getDocLink("/docs/developer-guide/api-overview"),
          getDocLink("/docs/developer-guide/environments-and-deployment"),
          getDocLink("/docs/developer-guide/troubleshooting"),
          getDocLink("/docs/merchant-guide/risk-compliance"),
        ],
      },
    ],
  },
  "/docs/developer-guide/unified-assets": {
    description: "Use canonical asset semantics and validation rules consistently across trading and payments workflows.",
    metadataTitle: "Developer Guide: Unified Assets",
    metadataDescription: "Canonical asset identity, denomination handling, and validation expectations for multi-workflow Ryvra integrations.",
    calloutVariant: "info",
    calloutTitle: "Canonical asset semantics",
    calloutBody: "Normalize asset identifiers and precision rules before integrating any business flow.",
    headings: [
      {
        id: "purpose-and-scope",
        title: "Purpose and scope",
        body: "Defines canonical asset identity, network context, and amount normalization requirements.",
      },
      {
        id: "integration-prerequisites",
        title: "Integration prerequisites",
        bullets: [
          "Internal asset catalog supports canonical IDs and display metadata.",
          "Amount handling uses fixed-precision arithmetic and explicit rounding rules.",
          "Validation layer rejects unsupported asset/network combinations.",
        ],
      },
      {
        id: "request-response-patterns",
        title: "Request and response patterns",
        bullets: [
          "Requests provide canonical asset codes and normalized amount fields.",
          "Responses include accepted asset identifiers and precision context.",
          "Validation failures return explicit field-level error pointers.",
        ],
      },
      {
        id: "lifecycle-and-state-model",
        title: "Lifecycle and state model",
        steps: [
          "Resolve merchant-facing symbol to canonical asset identity.",
          "Validate amount precision and network support before request submission.",
          "Persist canonical identifiers for downstream reconciliation and reporting.",
        ],
      },
      {
        id: "error-failure-taxonomy",
        title: "Error and failure taxonomy",
        bullets: [
          "Unknown asset identifier or unsupported network mapping.",
          "Amount precision exceeds allowed scale for target asset.",
          "Asset temporarily unavailable for selected operation type.",
        ],
      },
      {
        id: "retry-idempotency-guidance",
        title: "Retry and idempotency guidance",
        body: "Retry only after correcting validation issues or after asset availability recovers; preserve the same operation identity.",
      },
      {
        id: "observability-debugging",
        title: "Observability and debugging entry points",
        bullets: [
          "Track validation rejection rates by asset and network.",
          "Monitor canonical mapping drift between internal and platform catalogs.",
          "Audit amount-normalization behavior in reconciliation jobs.",
        ],
      },
      {
        id: "related-docs",
        title: "Related docs",
        links: [
          getDocLink("/docs/developer-guide/trading-integration"),
          getDocLink("/docs/developer-guide/payments-integration"),
          getDocLink("/docs/developer-guide/error-model-and-retries"),
        ],
      },
    ],
  },
  "/docs/developer-guide/account-abstraction-erc4337": {
    description: "Integrate ERC-4337 account abstraction flows with clear user operation lifecycle and fallback handling.",
    metadataTitle: "Developer Guide: Account Abstraction ERC-4337",
    metadataDescription: "ERC-4337 integration guidance for userOperation lifecycle, failure classes, and fallback controls.",
    calloutVariant: "warn",
    calloutTitle: "UserOperation lifecycle awareness",
    calloutBody: "Track each userOperation end to end and plan fallback behavior for non-executable or delayed operations.",
    headings: [
      {
        id: "purpose-and-scope",
        title: "Purpose and scope",
        body: "Covers userOperation submission, bundling lifecycle, confirmation, and fallback handling patterns.",
      },
      {
        id: "integration-prerequisites",
        title: "Integration prerequisites",
        bullets: [
          "Smart-account support and signer policies are implemented.",
          "Gas and sponsorship assumptions are defined for target environment.",
          "Monitoring exists for mempool acceptance and execution confirmations.",
        ],
      },
      {
        id: "request-response-patterns",
        title: "Request and response patterns",
        bullets: [
          "Submission requests return userOperation hash and acceptance context.",
          "Status polling returns queued, bundled, executed, reverted, or dropped progression.",
          "Terminal failures include executable context for corrective action.",
        ],
      },
      {
        id: "lifecycle-and-state-model",
        title: "Lifecycle and state model",
        steps: [
          "Construct userOperation with validated nonce, gas, and call data.",
          "Submit operation and persist operation hash for tracking.",
          "Monitor inclusion lifecycle through bundler acceptance and on-chain execution.",
          "Apply fallback handling when operation is dropped or non-executable.",
        ],
      },
      {
        id: "error-failure-taxonomy",
        title: "Error and failure taxonomy",
        bullets: [
          "Validation failure before bundling due to nonce, signature, or policy checks.",
          "Bundling delay or drop due to market conditions or capacity limits.",
          "Execution revert due to contract-level logic or state conditions.",
        ],
      },
      {
        id: "retry-idempotency-guidance",
        title: "Retry and idempotency guidance",
        body: "Retain one logical operation identity and apply nonce-safe retry logic to avoid duplicate execution intent.",
      },
      {
        id: "observability-debugging",
        title: "Observability and debugging entry points",
        bullets: [
          "Track time from submission to inclusion and final execution status.",
          "Alert on stuck queued operations beyond defined SLA windows.",
          "Log userOperation hash, account identifier, and failure class for every terminal failure.",
        ],
      },
      {
        id: "related-docs",
        title: "Related docs",
        links: [
          getDocLink("/docs/developer-guide/authentication"),
          getDocLink("/docs/developer-guide/error-model-and-retries"),
          getDocLink("/docs/developer-guide/troubleshooting"),
        ],
      },
    ],
  },
  "/docs/developer-guide/trading-integration": {
    description: "Integrate trading workflows with explicit order lifecycle states and reconciliation hooks.",
    metadataTitle: "Developer Guide: Trading Integration",
    metadataDescription: "Order placement and lifecycle integration guide with failure taxonomy and reconciliation hooks for trading flows.",
    calloutVariant: "info",
    calloutTitle: "Order-state fidelity",
    calloutBody: "Treat order state transitions as canonical signals for downstream fulfillment and reporting.",
    headings: [
      {
        id: "purpose-and-scope",
        title: "Purpose and scope",
        body: "Explains trading request flow, order status progression, and close-loop reconciliation expectations.",
      },
      {
        id: "integration-prerequisites",
        title: "Integration prerequisites",
        bullets: [
          "Asset normalization and account entitlement checks are implemented.",
          "Quote validity and slippage policy are defined in client logic.",
          "Order status polling and event ingestion are both available.",
        ],
      },
      {
        id: "request-response-patterns",
        title: "Request and response patterns",
        bullets: [
          "Order create request returns order ID and initial accepted/rejected state.",
          "Status requests expose current fill, cancellation, and terminal state context.",
          "Execution and settlement-related events provide asynchronous updates.",
        ],
      },
      {
        id: "lifecycle-and-state-model",
        title: "Lifecycle and state model",
        steps: [
          "Submit validated order intent with idempotency key and client reference.",
          "Observe transition through pending, open, partially_filled, filled, canceled, or failed.",
          "Reconcile final fill quantities, fees, and timestamps against internal ledger.",
        ],
      },
      {
        id: "error-failure-taxonomy",
        title: "Error and failure taxonomy",
        bullets: [
          "Validation failure for unsupported pair or order parameter.",
          "Execution failure due to liquidity or market movement constraints.",
          "Post-trade reconciliation mismatch due to delayed event consumption.",
        ],
      },
      {
        id: "retry-idempotency-guidance",
        title: "Retry and idempotency guidance",
        body: "Retry submission only when no accepted order ID exists for the same logical trade intent.",
      },
      {
        id: "observability-debugging",
        title: "Observability and debugging entry points",
        bullets: [
          "Order acceptance rate, rejection reason distribution, and time-to-final-state.",
          "Delta between API polled state and event-consumed state.",
          "Reconciliation hooks that compare fill and fee totals by order ID.",
        ],
      },
      {
        id: "related-docs",
        title: "Related docs",
        links: [
          getDocLink("/docs/developer-guide/unified-assets"),
          getDocLink("/docs/developer-guide/webhooks-events"),
          getDocLink("/docs/developer-guide/error-model-and-retries"),
          getDocLink("/docs/merchant-guide/reconciliation-reporting"),
        ],
      },
    ],
  },
  "/docs/developer-guide/payments-integration": {
    description: "Implement payment intent, initiation, and confirmation flows with webhook-driven state convergence.",
    metadataTitle: "Developer Guide: Payments Integration",
    metadataDescription: "Payment lifecycle integration guide for intent/initiate/confirm workflows and webhook interplay in production.",
    calloutVariant: "success",
    calloutTitle: "Lifecycle-first integration",
    calloutBody: "Model payment flows as intent, initiation, and confirmation stages with asynchronous confirmation handling.",
    headings: [
      {
        id: "purpose-and-scope",
        title: "Purpose and scope",
        body: "Covers payment request initiation, status confirmation, and post-confirmation operational handoff.",
      },
      {
        id: "integration-prerequisites",
        title: "Integration prerequisites",
        bullets: [
          "Merchant onboarding and settlement readiness are complete.",
          "Client system stores canonical payment IDs and idempotency keys.",
          "Webhook endpoint verification and replay handling are implemented.",
        ],
      },
      {
        id: "request-response-patterns",
        title: "Request and response patterns",
        bullets: [
          "Intent creation returns payment intent identifier and initial state.",
          "Initiation returns checkout/authorization context for payer action.",
          "Confirmation is consumed via status checks and webhook event convergence.",
        ],
      },
      {
        id: "lifecycle-and-state-model",
        title: "Lifecycle and state model",
        steps: [
          "Create intent with amount, currency, merchant order reference, and idempotency key.",
          "Initiate payment action and present customer flow context.",
          "Track state transitions through pending, confirmed, failed, expired, or canceled.",
          "Release fulfillment only after confirmed terminal state is verified.",
        ],
      },
      {
        id: "error-failure-taxonomy",
        title: "Error and failure taxonomy",
        bullets: [
          "Intent validation failure due to malformed amount or unsupported asset context.",
          "Initiation failure due to payer authorization or session expiry.",
          "Confirmation lag from delayed event delivery or unacknowledged webhook processing.",
        ],
      },
      {
        id: "retry-idempotency-guidance",
        title: "Retry and idempotency guidance",
        body: "Use one idempotency key per logical merchant order action and avoid creating duplicate intents during uncertain network outcomes.",
      },
      {
        id: "observability-debugging",
        title: "Observability and debugging entry points",
        bullets: [
          "Track conversion by payment lifecycle stage and failure reason.",
          "Monitor confirmation latency and webhook redelivery rates.",
          "Correlate payment ID across merchant order, event stream, and settlement records.",
        ],
      },
      {
        id: "related-docs",
        title: "Related docs",
        links: [
          getDocLink("/docs/developer-guide/webhooks-events"),
          getDocLink("/docs/developer-guide/rate-limits-idempotency"),
          getDocLink("/docs/merchant-guide/checkout-payment-links"),
          getDocLink("/docs/merchant-guide/invoicing"),
          getDocLink("/docs/merchant-guide/subscriptions"),
        ],
      },
    ],
  },
  "/docs/developer-guide/liquidity-staking-integration": {
    description: "Integrate liquidity and staking workflows with clear state transitions and operational caveats.",
    metadataTitle: "Developer Guide: Liquidity and Staking Integration",
    metadataDescription: "Integration guidance for liquidity and staking lifecycle states, constraints, and recovery behavior.",
    calloutVariant: "info",
    calloutTitle: "State transition rigor",
    calloutBody: "Model every supply, stake, unstake, and withdrawal operation as a tracked state transition.",
    headings: [
      {
        id: "purpose-and-scope",
        title: "Purpose and scope",
        body: "Covers liquidity and staking action flows, lifecycle transitions, and practical constraints for production integrations.",
      },
      {
        id: "integration-prerequisites",
        title: "Integration prerequisites",
        bullets: [
          "Supported assets, pools, and staking products are mapped to canonical IDs.",
          "Client UX communicates lockups, cooldowns, and withdrawal windows.",
          "Reconciliation logic can track accrued rewards and principal transitions.",
        ],
      },
      {
        id: "request-response-patterns",
        title: "Request and response patterns",
        bullets: [
          "Action requests return operation ID and initial state context.",
          "Status endpoints expose pending, active, cooling_down, withdrawable, completed outcomes.",
          "Event notifications communicate milestone transitions and failures.",
        ],
      },
      {
        id: "lifecycle-and-state-model",
        title: "Lifecycle and state model",
        steps: [
          "Submit liquidity or staking operation with validated asset/amount context.",
          "Track operation through pending execution into active position state.",
          "For exits, follow cooldown or unlock states before withdrawal completion.",
          "Confirm terminal completion and reconcile balances and rewards.",
        ],
      },
      {
        id: "error-failure-taxonomy",
        title: "Error and failure taxonomy",
        bullets: [
          "Constraint violations such as minimum amounts or pool ratio limits.",
          "State-dependent failures when attempting early withdrawal during lockup.",
          "Reward accounting mismatch due to delayed state ingestion.",
        ],
      },
      {
        id: "retry-idempotency-guidance",
        title: "Retry and idempotency guidance",
        body: "Retry only after verifying the current position state to avoid duplicate supply/stake operations.",
      },
      {
        id: "observability-debugging",
        title: "Observability and debugging entry points",
        bullets: [
          "Time to active and time to withdrawable by product type.",
          "Failure rate by operation and constraint class.",
          "Position-level reconciliation checks for principal and rewards.",
        ],
      },
      {
        id: "related-docs",
        title: "Related docs",
        links: [
          getDocLink("/docs/developer-guide/unified-assets"),
          getDocLink("/docs/developer-guide/error-model-and-retries"),
          getDocLink("/docs/merchant-guide/reconciliation-reporting"),
        ],
      },
    ],
  },
  "/docs/developer-guide/webhooks-events": {
    description: "Consume Ryvra events reliably with verification, ordering assumptions, retry handling, and replay safety.",
    metadataTitle: "Developer Guide: Webhooks and Events",
    metadataDescription: "Webhook event types, signature verification, delivery ordering assumptions, and retry handling patterns.",
    calloutVariant: "warn",
    calloutTitle: "Events are operational truth signals",
    calloutBody: "Webhook consumers must be idempotent, verifiable, and resilient to delayed or retried delivery.",
    headings: [
      {
        id: "purpose-and-scope",
        title: "Purpose and scope",
        body: "Describes event consumption architecture, verification requirements, and delivery semantics for production use.",
      },
      {
        id: "integration-prerequisites",
        title: "Integration prerequisites",
        bullets: [
          "Public endpoint with secure transport and signature verification.",
          "Event store that persists payload, signature metadata, and processing outcome.",
          "Dead-letter or replay workflow for failed processing attempts.",
        ],
      },
      {
        id: "request-response-patterns",
        title: "Request and response patterns",
        bullets: [
          "Inbound event includes event ID, type, timestamp, and data payload.",
          "Consumer must acknowledge accepted processing attempts promptly.",
          "Non-acknowledged events are retried according to delivery policy.",
        ],
      },
      {
        id: "lifecycle-and-state-model",
        title: "Lifecycle and state model",
        steps: [
          "Receive event and validate signature and basic schema.",
          "Deduplicate using event ID and operation identity keys.",
          "Apply business-state transition and persist processing result.",
          "Acknowledge success or move failed event into controlled replay queue.",
        ],
      },
      {
        id: "error-failure-taxonomy",
        title: "Error and failure taxonomy",
        bullets: [
          "Signature verification failure due to secret mismatch or tampering.",
          "Transient consumer outage causing repeated redelivery attempts.",
          "Out-of-order delivery where later state arrives before earlier transition.",
        ],
      },
      {
        id: "retry-idempotency-guidance",
        title: "Retry and idempotency guidance",
        body: "Consumers must be idempotent by event ID and operation key so replay and redelivery cannot create duplicate side effects.",
      },
      {
        id: "observability-debugging",
        title: "Observability and debugging entry points",
        bullets: [
          "Event delivery success, retry count, and acknowledgment latency by event type.",
          "Dead-letter queue size and replay success ratio.",
          "Correlation between webhook lag and merchant-facing state delays.",
        ],
      },
      {
        id: "related-docs",
        title: "Related docs",
        links: [
          getDocLink("/docs/developer-guide/payments-integration"),
          getDocLink("/docs/developer-guide/error-model-and-retries"),
          getDocLink("/docs/developer-guide/rate-limits-idempotency"),
          getDocLink("/docs/merchant-guide/refunds-disputes"),
          getDocLink("/docs/merchant-guide/reconciliation-reporting"),
        ],
      },
    ],
  },
  "/docs/developer-guide/error-model-and-retries": {
    description: "Apply a normalized error model and retry matrix to prevent unsafe retries and improve reliability.",
    metadataTitle: "Developer Guide: Error Model and Retries",
    metadataDescription: "Normalized integration error classes with retry and escalation matrix for Ryvra production workflows.",
    calloutVariant: "warn",
    calloutTitle: "Retry with intent",
    calloutBody: "Classify errors before retrying; unsafe retries can duplicate side effects or hide systemic faults.",
    headings: [
      {
        id: "purpose-and-scope",
        title: "Purpose and scope",
        body: "Defines error classes and retry decisions shared across all integration flows.",
      },
      {
        id: "integration-prerequisites",
        title: "Integration prerequisites",
        bullets: [
          "Central error normalization layer maps endpoint-specific responses to shared classes.",
          "Retry policy library supports jittered backoff and max-attempt caps.",
          "Operations team receives alerts for repeated terminal classes.",
        ],
      },
      {
        id: "request-response-patterns",
        title: "Request and response patterns",
        bullets: [
          "Responses include status code, machine-readable error class, and request identifier.",
          "Client records normalized class and retry decision for each failure.",
          "Terminal classes trigger operator workflow instead of automatic retries.",
        ],
      },
      {
        id: "lifecycle-and-state-model",
        title: "Lifecycle and state model",
        bullets: [
          "Validation class: correct input before resubmission.",
          "Auth class: rotate/fix credentials and retry after resolution.",
          "Rate limit class: back off and retry with pacing control.",
          "Transient platform class: bounded retries with alerting.",
          "Compliance/policy class: manual review and escalation required.",
        ],
      },
      {
        id: "error-failure-taxonomy",
        title: "Error and failure taxonomy",
        bullets: [
          "Input/validation errors.",
          "Authentication/authorization errors.",
          "Rate limit and quota errors.",
          "Transient dependency or infrastructure errors.",
          "Terminal policy/compliance errors.",
        ],
      },
      {
        id: "retry-idempotency-guidance",
        title: "Retry and idempotency guidance",
        steps: [
          "Classify failure into normalized class before any retry action.",
          "Retry only retryable classes with exponential backoff and jitter.",
          "Preserve idempotency key and operation identity for all retries.",
          "Escalate after max attempts or repeated terminal failures.",
        ],
      },
      {
        id: "observability-debugging",
        title: "Observability and debugging entry points",
        bullets: [
          "Failure distribution by normalized class and endpoint family.",
          "Retry success ratio and average attempts to recovery.",
          "Top terminal classes requiring product or policy intervention.",
        ],
      },
      {
        id: "related-docs",
        title: "Related docs",
        links: [
          getDocLink("/docs/developer-guide/rate-limits-idempotency"),
          getDocLink("/docs/developer-guide/troubleshooting"),
          getDocLink("/docs/developer-guide/webhooks-events"),
        ],
      },
    ],
  },
  "/docs/developer-guide/rate-limits-idempotency": {
    description: "Use idempotency keys and throttling-aware request pacing to keep integrations safe under load.",
    metadataTitle: "Developer Guide: Rate Limits and Idempotency",
    metadataDescription: "Idempotency-key usage model and rate-limit backoff guidance for reliable Ryvra API integrations.",
    calloutVariant: "warn",
    calloutTitle: "Throughput with safety",
    calloutBody: "Protect both your systems and customer outcomes by combining pacing controls with deterministic idempotency.",
    headings: [
      {
        id: "purpose-and-scope",
        title: "Purpose and scope",
        body: "Defines how to prevent duplicate side effects and avoid throttling instability under production load.",
      },
      {
        id: "integration-prerequisites",
        title: "Integration prerequisites",
        bullets: [
          "Stable client-generated operation identifiers per business action.",
          "Request queue or worker model supporting adaptive concurrency.",
          "Clock and retry policy alignment across distributed services.",
        ],
      },
      {
        id: "request-response-patterns",
        title: "Request and response patterns",
        bullets: [
          "Mutating requests include idempotency key scoped to one logical operation.",
          "Throttle responses signal temporary request-rate exhaustion.",
          "Client retries maintain same idempotency key and adjusted pacing.",
        ],
      },
      {
        id: "lifecycle-and-state-model",
        title: "Lifecycle and state model",
        steps: [
          "Generate idempotency key before first attempt and persist with operation context.",
          "Submit request through concurrency-controlled execution lane.",
          "If throttled, delay next attempt using exponential backoff and jitter.",
          "Reuse key until operation reaches terminal known outcome.",
        ],
      },
      {
        id: "error-failure-taxonomy",
        title: "Error and failure taxonomy",
        bullets: [
          "Duplicate request with changed payload under same key.",
          "Burst traffic leading to sustained throttling and queue growth.",
          "Uncertain request outcome due to timeout without response receipt.",
        ],
      },
      {
        id: "retry-idempotency-guidance",
        title: "Retry and idempotency guidance",
        bullets: [
          "Never rotate idempotency key while operation outcome remains unknown.",
          "Cap retries and move unresolved operations to manual review queue.",
          "Throttle retries globally when system-level 429 responses spike.",
        ],
      },
      {
        id: "observability-debugging",
        title: "Observability and debugging entry points",
        bullets: [
          "429 response rate, queue depth, and retry backlog by endpoint family.",
          "Idempotency replay hit rate and duplicate-prevention effectiveness.",
          "Percent of operations requiring manual resolution after retry exhaustion.",
        ],
      },
      {
        id: "related-docs",
        title: "Related docs",
        links: [
          getDocLink("/docs/developer-guide/error-model-and-retries"),
          getDocLink("/docs/developer-guide/payments-integration"),
          getDocLink("/docs/developer-guide/trading-integration"),
          getDocLink("/docs/merchant-guide/checkout-payment-links"),
        ],
      },
    ],
  },
  "/docs/developer-guide/environments-and-deployment": {
    description: "Plan environment usage and production rollout with clear promotion gates and rollback readiness.",
    metadataTitle: "Developer Guide: Environments and Deployment",
    metadataDescription: "Environment matrix and deployment checklist for sandbox, staging, and production Ryvra integrations.",
    calloutVariant: "success",
    calloutTitle: "Promote with gates",
    calloutBody: "Advance integrations through environments only when functional, operational, and monitoring gates are met.",
    headings: [
      {
        id: "purpose-and-scope",
        title: "Purpose and scope",
        body: "Covers environment separation, promotion criteria, and deployment risk controls for integrations.",
      },
      {
        id: "integration-prerequisites",
        title: "Integration prerequisites",
        bullets: [
          "Separate credentials and endpoints for sandbox, staging, and production.",
          "Automated config validation to prevent cross-environment secret misuse.",
          "Rollback and incident ownership defined before production deployment.",
        ],
      },
      {
        id: "request-response-patterns",
        title: "Request and response patterns",
        body: "Endpoint and credential selection must be environment-specific and immutable for each deployment artifact.",
      },
      {
        id: "lifecycle-and-state-model",
        title: "Lifecycle and state model",
        steps: [
          "Validate changes in sandbox with scenario checklist coverage.",
          "Promote to staging and run end-to-end integration plus observability checks.",
          "Run production readiness checklist with rollback rehearsal.",
          "Deploy gradually and monitor key health indicators through stabilization window.",
        ],
      },
      {
        id: "error-failure-taxonomy",
        title: "Error and failure taxonomy",
        bullets: [
          "Environment misconfiguration causing auth or endpoint mismatch.",
          "Missing feature flag or runtime dependency in higher environment.",
          "Unexpected production-only latency or event volume behavior.",
        ],
      },
      {
        id: "retry-idempotency-guidance",
        title: "Retry and idempotency guidance",
        body: "During rollout, maintain idempotent operation handling so retried requests after rollback do not duplicate effects.",
      },
      {
        id: "observability-debugging",
        title: "Observability and debugging entry points",
        bullets: [
          "Environment-specific dashboards for success rate, latency, and event lag.",
          "Canary cohort monitoring with automated rollback triggers.",
          "Deployment timeline correlated with error-class and throughput changes.",
        ],
      },
      {
        id: "related-docs",
        title: "Related docs",
        links: [
          getDocLink("/docs/developer-guide/testing-sandbox"),
          getDocLink("/docs/developer-guide/observability-and-runbooks"),
          getDocLink("/docs/developer-guide/troubleshooting"),
          getDocLink("/docs/merchant-guide/onboarding"),
        ],
      },
    ],
  },
  "/docs/developer-guide/testing-sandbox": {
    description: "Run scenario-based testing in sandbox to validate lifecycle, failures, retries, and operational readiness before production.",
    metadataTitle: "Developer Guide: Testing Sandbox",
    metadataDescription: "Sandbox testing strategy and scenario checklist for validating Ryvra integrations before production rollout.",
    calloutVariant: "success",
    calloutTitle: "Test by scenario",
    calloutBody: "Validate success and failure paths in sandbox using repeatable scenarios and explicit pass criteria.",
    headings: [
      {
        id: "purpose-and-scope",
        title: "Purpose and scope",
        body: "Describes sandbox testing strategy for functional correctness and operational resilience.",
      },
      {
        id: "integration-prerequisites",
        title: "Integration prerequisites",
        bullets: [
          "Sandbox credentials and isolated test data generation are available.",
          "Test harness can assert API responses and webhook side effects.",
          "Scenario matrix includes happy path, edge case, and failure case coverage.",
        ],
      },
      {
        id: "request-response-patterns",
        title: "Request and response patterns",
        body: "Each scenario should validate immediate API response semantics and eventual event-driven final-state convergence.",
      },
      {
        id: "lifecycle-and-state-model",
        title: "Lifecycle and state model",
        steps: [
          "Execute happy-path scenario for each core workflow and verify terminal state.",
          "Inject expected failures (validation, auth, transient, throttling) and verify handling.",
          "Run replay/idempotency scenarios to prove duplicate-suppression behavior.",
          "Confirm reconciliation and observability hooks record complete test traces.",
        ],
      },
      {
        id: "error-failure-taxonomy",
        title: "Error and failure taxonomy",
        bullets: [
          "Uncaught validation and schema mismatch paths.",
          "Incorrect retry behavior for terminal error classes.",
          "Webhook replay handling gaps causing duplicate side effects.",
        ],
      },
      {
        id: "retry-idempotency-guidance",
        title: "Retry and idempotency guidance",
        body: "Include explicit tests for uncertain outcomes (timeouts) to verify safe retries with stable idempotency keys.",
      },
      {
        id: "observability-debugging",
        title: "Observability and debugging entry points",
        bullets: [
          "Per-scenario traces including request IDs and event IDs.",
          "Test pass/fail metrics grouped by error class and workflow type.",
          "Runbook validation evidence attached to scenario outcomes.",
        ],
      },
      {
        id: "related-docs",
        title: "Related docs",
        links: [
          getDocLink("/docs/developer-guide/error-model-and-retries"),
          getDocLink("/docs/developer-guide/rate-limits-idempotency"),
          getDocLink("/docs/developer-guide/environments-and-deployment"),
        ],
      },
    ],
  },
  "/docs/developer-guide/observability-and-runbooks": {
    description: "Operate integrations with actionable metrics, logs, alerts, and runbooks that support rapid incident response.",
    metadataTitle: "Developer Guide: Observability and Runbooks",
    metadataDescription: "Operational observability baseline for Ryvra integrations including metrics, logs, alerts, and incident runbooks.",
    calloutVariant: "warn",
    calloutTitle: "Operate by signal",
    calloutBody: "Good integrations fail safely only when detection and response playbooks are already in place.",
    headings: [
      {
        id: "purpose-and-scope",
        title: "Purpose and scope",
        body: "Defines monitoring and incident-response expectations for production integration ownership.",
      },
      {
        id: "integration-prerequisites",
        title: "Integration prerequisites",
        bullets: [
          "Centralized logging with correlation IDs preserved end to end.",
          "Metrics pipeline tracking API, queue, and webhook health indicators.",
          "On-call ownership and escalation matrix documented and tested.",
        ],
      },
      {
        id: "request-response-patterns",
        title: "Request and response patterns",
        body: "Capture request status, latency, and normalized error class for all API interactions and event-processing attempts.",
      },
      {
        id: "lifecycle-and-state-model",
        title: "Lifecycle and state model",
        bullets: [
          "Ingest signals from request path, async processing, and reconciliation jobs.",
          "Evaluate against thresholds and trigger alerts by severity tier.",
          "Run incident playbook and close only after mitigation and verification.",
        ],
      },
      {
        id: "error-failure-taxonomy",
        title: "Error and failure taxonomy",
        bullets: [
          "Silent failures due to missing instrumentation fields.",
          "Noisy alerts without action context causing fatigue.",
          "Runbook gaps where remediation steps are unclear or outdated.",
        ],
      },
      {
        id: "retry-idempotency-guidance",
        title: "Retry and idempotency guidance",
        body: "Runbooks should specify when retries are safe, when to pause automation, and when manual intervention is mandatory.",
      },
      {
        id: "observability-debugging",
        title: "Observability and debugging entry points",
        bullets: [
          "Core metrics: success rate, latency, retry volume, event lag, dead-letter depth.",
          "Core logs: request ID, idempotency key, operation ID, normalized error class.",
          "Core alerts: prolonged pending states, sustained 429/5xx spikes, replay queue growth.",
        ],
      },
      {
        id: "related-docs",
        title: "Related docs",
        links: [
          getDocLink("/docs/developer-guide/troubleshooting"),
          getDocLink("/docs/developer-guide/error-model-and-retries"),
          getDocLink("/docs/developer-guide/webhooks-events"),
          getDocLink("/docs/merchant-guide/risk-compliance"),
        ],
      },
    ],
  },
  "/docs/developer-guide/troubleshooting": {
    description: "Diagnose common integration symptoms using a symptom-to-cause-to-action workflow.",
    metadataTitle: "Developer Guide: Troubleshooting",
    metadataDescription: "Troubleshooting matrix for common Ryvra integration symptoms, likely causes, and corrective actions.",
    calloutVariant: "warn",
    calloutTitle: "Diagnose systematically",
    calloutBody: "Start with symptom classification, then validate probable causes before applying corrective action.",
    headings: [
      {
        id: "purpose-and-scope",
        title: "Purpose and scope",
        body: "Provides an operational troubleshooting matrix for high-impact production integration issues.",
      },
      {
        id: "integration-prerequisites",
        title: "Integration prerequisites",
        bullets: [
          "Access to logs, metrics, event history, and reconciliation data.",
          "Known-good baseline metrics and normal operating ranges.",
          "Escalation contacts for engineering, merchant ops, and compliance.",
        ],
      },
      {
        id: "request-response-patterns",
        title: "Request and response patterns",
        body: "Collect failing request samples with status codes, request IDs, latency, and normalized error classes before intervention.",
      },
      {
        id: "lifecycle-and-state-model",
        title: "Lifecycle and state model",
        bullets: [
          "Symptom: payments remain pending longer than expected | Probable cause: event ingestion lag | Corrective action: inspect webhook retries, replay failed events, and verify consumer acknowledgements.",
          "Symptom: duplicate records in merchant system | Probable cause: non-idempotent replay handling | Corrective action: enforce event and request deduplication by stable keys.",
          "Symptom: repeated unauthorized responses | Probable cause: expired or rotated credentials not deployed | Corrective action: verify key version rollout and revoke stale credentials.",
          "Symptom: reconciliation variance grows daily | Probable cause: cutoff mismatch or missing terminal events | Corrective action: align windows and backfill missing state transitions.",
        ],
      },
      {
        id: "error-failure-taxonomy",
        title: "Error and failure taxonomy",
        bullets: [
          "Configuration faults (endpoints, credentials, feature flags).",
          "Data integrity faults (schema mismatch, duplicate processing).",
          "Dependency faults (throttling, latency spikes, transient outages).",
        ],
      },
      {
        id: "retry-idempotency-guidance",
        title: "Retry and idempotency guidance",
        body: "During incidents, pause automatic retries for uncertain terminal classes until safe replay boundaries are confirmed.",
      },
      {
        id: "observability-debugging",
        title: "Observability and debugging entry points",
        bullets: [
          "Incident timeline with request and event correlation IDs.",
          "Before/after metrics proving corrective action effectiveness.",
          "Post-incident runbook updates to prevent recurrence.",
        ],
      },
      {
        id: "related-docs",
        title: "Related docs",
        links: [
          getDocLink("/docs/developer-guide/observability-and-runbooks"),
          getDocLink("/docs/developer-guide/error-model-and-retries"),
          getDocLink("/docs/developer-guide/authentication"),
          getDocLink("/docs/merchant-guide/reconciliation-reporting"),
        ],
      },
    ],
  },
  "/docs/developer-guide/changelog-and-versioning": {
    description: "Track release changes, compatibility expectations, and upgrade paths for production integrations.",
    metadataTitle: "Developer Guide: Changelog and Versioning",
    metadataDescription: "Versioning policy, compatibility windows, and upgrade guidance for Ryvra developer integrations.",
    calloutVariant: "note",
    calloutTitle: "Upgrade with intent",
    calloutBody: "Use changelog signals and compatibility windows to schedule low-risk upgrades.",
    headings: [
      {
        id: "purpose-and-scope",
        title: "Purpose and scope",
        body: "Defines how teams consume change information and maintain compatibility over time.",
      },
      {
        id: "integration-prerequisites",
        title: "Integration prerequisites",
        bullets: [
          "Dependency inventory and version ownership are documented.",
          "Release evaluation process exists for functional and operational impact.",
          "Staging validation plan is ready before production upgrades.",
        ],
      },
      {
        id: "request-response-patterns",
        title: "Request and response patterns",
        body: "Version-aware clients should validate changed fields, defaults, and enum expansions before rollout.",
      },
      {
        id: "lifecycle-and-state-model",
        title: "Lifecycle and state model",
        steps: [
          "Review changelog entries and classify changes by compatibility impact.",
          "Validate affected workflows in sandbox and staging against target version.",
          "Deploy with phased rollout and monitor key health indicators.",
          "Complete upgrade sign-off only after stable post-deploy reconciliation.",
        ],
      },
      {
        id: "error-failure-taxonomy",
        title: "Error and failure taxonomy",
        bullets: [
          "Breaking contract usage from outdated client assumptions.",
          "Behavior drift from default value or processing-rule changes.",
          "Operational regressions from insufficient observability during rollout.",
        ],
      },
      {
        id: "retry-idempotency-guidance",
        title: "Retry and idempotency guidance",
        body: "During upgrade windows, preserve idempotency key semantics so retried operations remain safe across version boundaries.",
      },
      {
        id: "observability-debugging",
        title: "Observability and debugging entry points",
        bullets: [
          "Version-tagged metrics to compare pre and post-upgrade behavior.",
          "Release-specific dashboards for error class and latency shifts.",
          "Rollback triggers tied to objective service-level thresholds.",
        ],
      },
      {
        id: "related-docs",
        title: "Related docs",
        links: [
          getDocLink("/docs/developer-guide/api-overview"),
          getDocLink("/docs/developer-guide/environments-and-deployment"),
          getDocLink("/docs/developer-guide/testing-sandbox"),
          getDocLink("/docs/developer-guide/troubleshooting"),
        ],
      },
    ],
  },
  "/docs/tokenomics": {
    description:
      "Tokenomics docs start with plain-language explanations, then point to FAQs and the deeper specification for readers who need more detail.",
    metadataTitle: "Tokenomics",
    metadataDescription:
      "Audience-first Ryvra tokenomics documentation covering plain-language framing, deeper specification detail, and disclosure boundaries.",
    calloutVariant: "note",
    calloutTitle: "Confirmed versus future parameters",
    calloutBody:
      "This section separates what Ryvra has published publicly today from what remains illustrative, governance-controlled, or not yet public.",
    headings: [
      {
        id: "who-is-this-for",
        title: "Who is this for?",
        body: "Readers who need tokenomics context without starting from formulas or research-style language.",
      },
      {
        id: "what-to-read-first",
        title: "What to read first",
        links: [
          getDocLink("/docs/tokenomics/litepaper-faq"),
          getDocLink("/docs/tokenomics/tokenomics-faq"),
          getDocLink("/docs/tokenomics/detailed-tokenomics-specification"),
          getDocLink("/docs/glossary"),
        ],
      },
      {
        id: "in-plain-english",
        title: "In plain English",
        body: "The clearest public tokenomics material today is the pre-TGE Proof of Transaction program. It awards contribution points, not tokens, while final issuance terms remain subject to governance and legal review.",
      },
      {
        id: "source-of-truth",
        title: "Source of truth",
        body: "Current public tokenomics wording is anchored in `/litepaper`, `lib/tokenomics.ts`, and the mirrored markdown files under `content/`.",
      },
      {
        id: "faq-navigation",
        title: "FAQ navigation",
        body: "Use the Litepaper FAQ for trust-model questions and the Tokenomics FAQ for token-specific questions and disclosures.",
        links: [
          getDocLink("/docs/tokenomics/litepaper-faq"),
          getDocLink("/docs/tokenomics/tokenomics-faq"),
          getDocLink("/docs/tokenomics/detailed-tokenomics-specification"),
        ],
      },
    ],
  },
  "/docs/tokenomics/litepaper-faq": {
    description:
      "Audience-friendly answers to the most common Litepaper questions, with direct links back to the deeper architecture, governance, and provenance pages.",
    metadataTitle: "Litepaper FAQ",
    metadataDescription:
      "Plain-language Ryvra Litepaper FAQ covering the problem Ryvra solves, authority versus AI reasoning, gateway execution, safety boundaries, and provenance.",
    calloutVariant: "note",
    calloutTitle: "Start here for the shortest answers",
    calloutBody:
      "These answers are written for mixed audiences first, then linked back to the deeper docs when you need exact architecture language.",
    lastUpdated: "2026-09-12",
    headings: [
      {
        id: "who-is-this-for",
        title: "Who is this for?",
        body: "Users, merchants, developers, and reviewers who want a plain-language explanation of Ryvra before reading deeper specification pages.",
      },
      {
        id: "faq-1",
        kind: "faq",
        title: "What problem does Ryvra solve?",
        audience: ["User", "Merchant", "Developer"],
        body: "Ryvra solves the gap between software that can suggest financial actions and systems that must still decide, in a governed way, whether those actions should be allowed to happen.",
        links: [
          getDocLink("/docs/introduction"),
          getDocLink("/docs/developer-guide/architecture-overview"),
          getDocLink("/docs/governance-and-security-model"),
        ],
      },
      {
        id: "faq-2",
        kind: "faq",
        title: "What is the difference between AI reasoning and financial authority?",
        audience: ["User", "Merchant", "Developer"],
        body: "AI reasoning can generate an idea or recommendation. Financial authority is the governed power to approve and execute that idea. Ryvra keeps those two roles separate.",
        links: [
          getDocLink("/docs/governance-and-security-model"),
          getDocLink("/docs/developer-guide/financial-intent-model"),
          getDocLink("/docs/rfc-technical-specs"),
        ],
      },
      {
        id: "faq-3",
        kind: "faq",
        title: "How do mandates, policies, and risk approvals work together?",
        audience: ["Merchant", "Developer"],
        body: "Mandates define scope, policies define the rules, and independent risk decides whether a valid-looking request is still safe enough to proceed. A request needs all three to align before execution.",
        links: [
          getDocLink("/docs/developer-guide/policy-risk-integration"),
          getDocLink("/docs/governance-and-security-model"),
          getDocLink("/docs/developer-guide/authentication"),
        ],
      },
      {
        id: "faq-4",
        kind: "faq",
        title: "Why does gateway-only execution matter?",
        audience: ["Merchant", "Developer"],
        body: "Gateway-only execution means agents do not talk directly to money-moving systems. Requests must pass through the governed intake boundary where identity, authority, and control checks are enforced first.",
        links: [
          getDocLink("/docs/developer-guide/architecture-overview"),
          getDocLink("/docs/developer-guide/api-sdk-onboarding"),
          getDocLink("/docs/rfc-index"),
        ],
      },
      {
        id: "faq-5",
        kind: "faq",
        title: "What does provenance mean for trust?",
        audience: ["User", "Merchant", "Developer"],
        body: "Provenance is the evidence chain that shows what was proposed, who approved it, what executed, what settled, and whether anyone intervened. It makes automation reviewable instead of opaque.",
        links: [
          getDocLink("/docs/audit-and-provenance"),
          getDocLink("/docs/security-and-risk"),
          getDocLink("/docs/rfc-technical-specs"),
        ],
      },
      {
        id: "last-updated",
        title: "Last updated",
        body: "2026-09-12",
      },
    ],
  },
  "/docs/tokenomics/tokenomics-faq": {
    description:
      "Audience-friendly answers to public tokenomics questions, with clear disclosures about what is illustrative, governance-controlled, or not yet public.",
    metadataTitle: "Tokenomics FAQ",
    metadataDescription:
      "Plain-language Ryvra Tokenomics FAQ covering token utility, incentives, supply and allocation disclosures, vesting and unlock status, governance limits, and key risks.",
    calloutVariant: "note",
    calloutTitle: "Public facts first",
    calloutBody:
      "This FAQ explains what Ryvra has said publicly today and avoids inventing token details that have not been published.",
    lastUpdated: "2026-09-12",
    headings: [
      {
        id: "who-is-this-for",
        title: "Who is this for?",
        body: "Users, merchants, developers, and researchers who need a plain-language tokenomics overview before reading the structured specification.",
      },
      {
        id: "faq-1",
        kind: "faq",
        title: "What is the token used for?",
        audience: ["User", "Merchant", "Developer"],
        body: "Public materials position the token around future network participation, ecosystem alignment, and governance. Final utility terms remain subject to later published documentation and approvals.",
        links: [
          getDocLink("/docs/tokenomics"),
          getDocLink("/docs/tokenomics/detailed-tokenomics-specification"),
        ],
      },
      {
        id: "faq-2",
        kind: "faq",
        title: "How do incentives align with network usage?",
        audience: ["User", "Merchant"],
        body: "The clearest public example today is Proof of Transaction, where eligible activity can earn contribution points before any token generation event. The intent is to align participation with real network usage rather than passive assumptions.",
        links: [
          getDocLink("/docs/tokenomics"),
          getDocLink("/docs/tokenomics/detailed-tokenomics-specification"),
        ],
      },
      {
        id: "faq-3",
        kind: "faq",
        title: "What is public today about supply or allocation?",
        audience: ["User", "Developer"],
        body: "Ryvra has shared illustrative allocation envelope ranges, but it has not published a final supply model or final allocation commitments in binding form.",
        links: [
          getDocLink("/docs/tokenomics/detailed-tokenomics-specification"),
          getDocLink("/docs/tokenomics/litepaper-faq"),
        ],
      },
      {
        id: "faq-4",
        kind: "faq",
        title: "Are emissions, vesting, or unlock schedules final?",
        audience: ["User", "Merchant", "Developer"],
        body: "No. Final emissions, vesting, and unlock mechanics are not public final terms today and will require governance and legal or compliance review before publication.",
        links: [
          getDocLink("/docs/tokenomics/detailed-tokenomics-specification"),
          getDocLink("/docs/governance-and-security-model"),
        ],
      },
      {
        id: "faq-5",
        kind: "faq",
        title: "What role does governance play, and what are its limits?",
        audience: ["Merchant", "Developer"],
        body: "Governance may set or approve parameters such as cadence, thresholds, allocation inputs, and future token mechanics, but it does not erase legal, compliance, or publication constraints.",
        links: [
          getDocLink("/docs/governance-and-security-model"),
          getDocLink("/docs/tokenomics/detailed-tokenomics-specification"),
        ],
      },
      {
        id: "faq-6",
        kind: "faq",
        title: "What key risks should readers keep in mind?",
        audience: ["User", "Merchant", "Developer"],
        body: "Token timing can change, participation may vary by jurisdiction, and points are not tokens today. Public tokenomics material is informational and should not be read as investment advice or a guarantee of issuance, value, or return.",
        bullets: [
          {
            summary: "Disclosure checklist",
            children: [
              "Participation, accrual, and claims can be limited by jurisdiction.",
              "Points remain a program metric before any final issuance terms are published.",
              "Illustrative allocation, conversion, and timing assumptions can change after governance and legal review.",
            ],
          },
        ],
        links: [
          getDocLink("/docs/tokenomics"),
          getDocLink("/docs/tokenomics/detailed-tokenomics-specification"),
          getDocLink("/docs/security-and-risk"),
        ],
      },
      {
        id: "last-updated",
        title: "Last updated",
        body: "2026-09-12",
      },
    ],
  },
  "/docs/tokenomics/detailed-tokenomics-specification": {
    description:
      "Detailed tokenomics specification for the currently public Ryvra assumptions, formulas, adjustable parameters, and disclosure boundaries.",
    metadataTitle: "Tokenomics: Detailed Specification",
    metadataDescription:
      "Detailed Ryvra tokenomics specification covering public assumptions, public formulas, governance-controlled parameters, and disclosure boundaries.",
    calloutVariant: "warn",
    calloutTitle: "Do not infer unpublished values",
    calloutBody:
      "Where Ryvra has not published a parameter, this page says so directly instead of filling the gap with speculation.",
    headings: [
      {
        id: "who-is-this-for",
        title: "Who is this for?",
        body: "Researchers, developers, investors, and advanced readers who need structured tokenomics detail.",
      },
      {
        id: "confirmed-public-parameters",
        title: "Confirmed public parameters",
        bullets: [
          "Proof of Transaction awards points for eligible, finalized, policy-compliant activity before any token generation event.",
          "The current public assumptions include an illustrative epoch-0 daily cap, a halving-style cap schedule, anti-abuse controls, and a proportional future conversion framework.",
          "Points are not tokens today and do not represent token ownership before final issuance terms are published.",
        ],
      },
      {
        id: "future-or-governance-controlled-parameters",
        title: "Future or governance-controlled parameters",
        bullets: [
          "Epoch timing, thresholds, and anti-abuse tuning.",
          "Any final supply model, emissions schedule, unlock design, or vesting schedule not yet published as final public information.",
          "Allocation details beyond the existing illustrative envelope ranges.",
        ],
      },
      {
        id: "token-utility-and-disclosures",
        title: "Token utility, governance role, and disclosures",
        bullets: [
          "Public materials frame the token around future network participation, ecosystem alignment, and governance, but final utility terms are not yet published in a binding form.",
          "Participation and claiming may depend on jurisdiction and compliance requirements.",
          "Nothing on this page is investment advice or a promise of token issuance, value, or returns.",
        ],
      },
      {
        id: "faq-entry-points",
        title: "FAQ entry points",
        links: [
          getDocLink("/docs/tokenomics/litepaper-faq"),
          getDocLink("/docs/tokenomics/tokenomics-faq"),
        ],
      },
      {
        id: "glossary-and-source-materials",
        title: "Glossary and source materials",
        links: [
          getDocLink("/docs/glossary"),
          getDocLink("/docs/rfc-technical-specs"),
        ],
      },
    ],
  },
  "/docs/security-and-risk": {
    description:
      "Security and risk docs explain the trust model, audit expectations, and support paths that apply across users, merchants, and developers.",
    metadataTitle: "Security and Risk",
    metadataDescription:
      "Cross-audience Ryvra security and risk documentation covering governance, audit and provenance, and support escalation flows.",
    calloutVariant: "warn",
    calloutTitle: "Cross-cutting controls",
    calloutBody:
      "These pages explain why Ryvra may approve, reject, pause, or require review for a workflow and how humans stay in the loop.",
    headings: [
      {
        id: "who-is-this-for",
        title: "Who is this for?",
        body: "Any reader who needs cross-cutting trust, risk, or escalation context.",
      },
      {
        id: "what-you-will-find",
        title: "What you will find",
        links: [
          getDocLink("/docs/governance-and-security-model"),
          getDocLink("/docs/audit-and-provenance"),
          getDocLink("/docs/support-and-escalation"),
        ],
      },
      {
        id: "in-plain-english",
        title: "In plain English",
        body: "Security and risk topics show why Ryvra may slow down, block, or require human review for sensitive workflows. These controls are part of how the system stays governable.",
      },
    ],
  },
  "/docs/support-and-escalation": {
    description:
      "Use this page to understand when to escalate, what evidence to collect, and how support, operators, and engineers should cooperate during a Ryvra incident or exception.",
    metadataTitle: "Support and Escalation",
    metadataDescription:
      "Cross-audience support and escalation guide for Ryvra incidents, blocked workflows, and evidence-based investigation.",
    calloutVariant: "warn",
    calloutTitle: "Bring evidence, not guesses",
    calloutBody:
      "Fast escalations are useful only when the receiving team can trace the workflow from the details you provide.",
    headings: [
      {
        id: "what-to-collect",
        title: "What to collect",
        bullets: [
          "Request, event, and settlement references when available.",
          "Time of the issue, current visible status, and intended outcome.",
          "Screenshots, logs, or notes that explain what changed.",
        ],
      },
      {
        id: "when-to-escalate",
        title: "When to escalate",
        bullets: [
          "A high-value workflow is blocked or stuck without a clear reason.",
          "There is a mismatch between local state and canonical final state.",
          "A security issue, suspected abuse, or unauthorized action may be involved.",
        ],
      },
      {
        id: "related-pages",
        title: "Related pages",
        links: [
          getDocLink("/docs/governance-and-security-model"),
          getDocLink("/docs/audit-and-provenance"),
          getDocLink("/docs/developer-guide/troubleshooting"),
        ],
      },
    ],
  },
  "/docs/rfc-technical-specs": {
    description:
      "This section keeps the deeper, source-of-truth architecture and specification material available without forcing first-time readers to start here.",
    metadataTitle: "RFC / Technical Specs",
    metadataDescription:
      "Advanced Ryvra technical specifications covering architecture, settlement, confidentiality, and the existing RFC-heavy source material.",
    calloutVariant: "note",
    calloutTitle: "Advanced layer",
    calloutBody:
      "Use these pages when you need the exact architecture or trust-boundary framing rather than the introductory explanation.",
    headings: [
      {
        id: "who-is-this-for",
        title: "Who is this for?",
        body: "Developers, reviewers, researchers, and advanced readers who need canonical wording.",
      },
      {
        id: "spec-index",
        title: "Specification index",
        links: [
          getDocLink("/docs/rfc-index"),
          getDocLink("/docs/developer-guide/architecture-overview"),
          getDocLink("/docs/governance-and-security-model"),
          getDocLink("/docs/audit-and-provenance"),
        ],
      },
      {
        id: "in-plain-english",
        title: "In plain English",
        body: "These pages keep technical depth available, but they are intentionally one layer deeper in the navigation so new readers do not start with jargon-heavy material.",
      },
    ],
  },
  "/docs/writing-style-and-templates": {
    description:
      "Writing guide for Ryvra documentation pages, including the standard page template and the natural-language-first rules used in IA v2.",
    metadataTitle: "Writing Style and Templates",
    metadataDescription:
      "Ryvra docs writing guide covering standard page sections, terminology rules, and audience-first content patterns.",
    calloutVariant: "note",
    calloutTitle: "Write for the reader's task",
    calloutBody:
      "Every page should help the right audience complete a job before it asks them to learn internal terminology.",
    headings: [
      {
        id: "standard-template",
        title: "Standard template",
        bullets: [
          "Purpose",
          "Audience",
          "Prerequisites",
          "In plain English",
          "Step-by-step",
          "Troubleshooting",
          "Related pages",
          "Metadata footer (Last updated + Compatibility window)",
          "Source of truth",
        ],
      },
      {
        id: "writing-rules",
        title: "Writing rules",
        bullets: [
          "Use short paragraphs and action-oriented headings.",
          "Use concise purpose-first section intros and remove repetitive helper subtext.",
          "Reduce acronyms or define them the first time they appear.",
          "Explain concepts before introducing protocol terms.",
          "Link to deep specs instead of front-loading jargon into overview pages.",
          "Use consistent terminology across users, merchants, developers, tokenomics, and security pages.",
        ],
      },
      {
        id: "faq-authoring",
        title: "FAQ authoring",
        bullets: [
          "Add audience tags to each FAQ entry so readers can see who the answer is primarily for.",
          "Answer in natural language first, then link back to architecture, governance, provenance, or tokenomics deep dives.",
          "Keep source-of-truth FAQ content in `lib/docs.ts` and update editorial mirrors under `content/` when applicable.",
        ],
      },
      {
        id: "collapsible-list-conventions",
        title: "Collapsible list conventions",
        bullets: [
          "All docs list items render as collapsible `<details>/<summary>` UI in the portal.",
          "Write summary lines that remain clear when collapsed.",
          {
            summary: "Use nested children for supporting detail",
            children: [
              "Move examples, exceptions, or secondary notes under nested children instead of making the top line too long.",
              "Preserve code examples inside structured `code` blocks when a list item needs inline reference material.",
            ],
          },
          "Do not depend on collapsible behavior to hide critical disclosures that should also appear in surrounding prose.",
        ],
      },
      {
        id: "related-pages",
        title: "Related pages",
        links: [
          getDocLink("/docs/docs-ia-v2"),
          getDocLink("/docs/glossary"),
          getDocLink("/docs/release-notes"),
        ],
      },
    ],
  },
  "/docs/release-notes": {
    description:
      "Track the Docs IA v2 rollout, including audience-first navigation, tokenomics additions, glossary expansion, and the migration rationale.",
    metadataTitle: "Release Notes",
    metadataDescription:
      "Release notes for the Ryvra docs portal rollout, including shipped scope, compatibility window, publish gates, and non-scope boundaries.",
    calloutVariant: "note",
    calloutTitle: "Docs IA v2",
    calloutBody:
      "This release moves the docs portal to audience-first navigation with natural-language overviews, advanced spec layering, tokenomics coverage, and retained deep links.",
    headings: [
      {
        id: "last-updated",
        title: "Last updated",
        body: "2026-08-04",
      },
      {
        id: "release-summary",
        title: "Release summary",
        body: "Docs IA v2 reorganizes the public portal around reader intent instead of legacy guide silos while preserving technical depth and detailed workflow pages.",
      },
      {
        id: "shipped-in-this-rollout",
        title: "Shipped in this rollout",
        bullets: [
          "Audience-first navigation for Users, Merchants, Developers, Tokenomics, Security and Risk, and RFC / Technical Specs.",
          "New natural-language overview pages for tokenomics, security and risk, merchant operating context, and developer onboarding context.",
          "Expanded glossary entries for core Ryvra terms used across tracks.",
          "Docs IA v2 audit and writing-template guidance added to the portal.",
        ],
      },
      {
        id: "compatibility-window",
        title: "Compatibility window",
        body: "These docs target the currently shipped Ryvra interfaces published through August 2026. Confirm newer behavior against subsequent release notes before operational rollout changes.",
      },
      {
        id: "not-in-scope",
        title: "Not in scope",
        bullets: [
          "No unpublished token supply, emissions, or vesting terms were invented to fill disclosure gaps.",
          "No private merchant, legal, or contractual runbooks were added to public docs.",
          "Existing detailed workflow pages remain available and were not removed from the portal.",
        ],
      },
      {
        id: "publish-gates",
        title: "Publish gates",
        bullets: [
          "Lint",
          "Typecheck",
          "Production build",
          "Repo-native docs link validation",
          "Repo-native docs anchor validation",
        ],
      },
      {
        id: "failure-and-recovery",
        title: "Failure and recovery guidance",
        steps: [
          "If link or anchor validation fails, correct route references or heading IDs before publish.",
          "If metadata checks fail, resolve missing or conflicting page metadata and regenerate build outputs.",
          "If build or type checks fail, stop release promotion and re-run full validation gates after fixes.",
        ],
      },
      {
        id: "related-docs",
        title: "Related docs",
        links: [getDocLink("/docs/introduction"), getDocLink("/docs/getting-started"), getDocLink("/docs/developer-guide/changelog-and-versioning"), getDocLink("/docs/glossary")],
      },
    ],
  },
  "/docs/glossary": {
    description:
      "Canonical term definitions used across user, merchant, developer, tokenomics, and security documentation to keep operational meaning consistent.",
    metadataTitle: "Glossary",
    metadataDescription:
      "Ryvra documentation glossary with standardized terminology for mandates, capabilities, policy versions, financial intent, provenance, settlement, and confidentiality-sensitive workflows.",
    calloutVariant: "note",
    calloutTitle: "Use these canonical definitions",
    calloutBody:
      "These definitions are the normalization baseline for all guides in this docs portal release.",
    headings: [
      {
        id: "summary",
        title: "Summary",
        body: "Use these definitions whenever a term appears in more than one audience track so readers do not have to guess whether the meaning changed.",
      },
      {
        id: "mandate",
        title: "Mandate",
        body: "The scoped authority record that defines what a principal, operator, or governed runtime is allowed to request or approve.",
      },
      {
        id: "capability",
        title: "Capability",
        body: "The product or workflow surface that a caller may access when the rest of the authority checks are also satisfied.",
      },
      {
        id: "policy-version",
        title: "Policy version",
        body: "The named ruleset or revision that explains how a workflow was evaluated at a specific moment in time.",
      },
      {
        id: "risk-assessment",
        title: "Risk assessment",
        body: "The independent evaluation that decides whether a valid request should proceed, be blocked, or be routed for review.",
      },
      {
        id: "authorization",
        title: "Authorization",
        body: "The governed decision that a specific request may advance toward execution under the documented identity, mandate, policy, and risk context.",
      },
      {
        id: "financial-intent",
        title: "Financial intent",
        body: "The structured request describing the financial outcome being asked for, together with the references and constraints needed to judge it safely.",
      },
      {
        id: "provenance",
        title: "Provenance",
        body: "The evidence chain that links an original request to its approvals, execution steps, final state, and any later intervention.",
      },
      {
        id: "reservation",
        title: "Reservation",
        body: "A temporary hold or protected allocation of capacity, balance, or workflow state before a terminal outcome is recorded.",
      },
      {
        id: "settlement",
        title: "Settlement",
        body: "The stage where the workflow reaches a final recorded financial outcome that downstream systems can reconcile against.",
      },
      {
        id: "confidentiality-private-execution",
        title: "Confidentiality and private execution",
        body: "Protected processing for sensitive financial state that preserves the same governance, risk, and finality expectations used in the rest of Ryvra.",
      },
      {
        id: "related-pages",
        title: "Related pages",
        links: [
          getDocLink("/docs/tokenomics"),
          getDocLink("/docs/developer-guide/financial-intent-model"),
          getDocLink("/docs/governance-and-security-model"),
        ],
      },
      {
        id: "last-updated",
        title: "Last updated",
        body: "2026-09-11",
      },
    ],
  },
};

export function normalizeHeadingToken(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

export function shouldHideMetadataHeading(heading: DocsHeading) {
  const normalizedTitle = normalizeHeadingToken(heading.title);
  const normalizedId = normalizeHeadingToken(heading.id);
  return (
    normalizedTitle === "last updated" ||
    normalizedId === "last updated" ||
    normalizedTitle === "compatibility window" ||
    normalizedId === "compatibility window"
  );
}

export function getCanonicalHeadingTitle(heading: DocsHeading) {
  if (heading.kind === "faq") {
    return heading.title;
  }

  const normalizedTitle = normalizeHeadingToken(heading.title);

  if (normalizedTitle === "purpose and scope") {
    return "Purpose";
  }

  if (normalizedTitle.includes("step by step")) {
    return "Step-by-step";
  }

  if (
    normalizedTitle === "troubleshooting and recovery" ||
    normalizedTitle === "troubleshooting and escalation" ||
    normalizedTitle === "troubleshooting and recovery steps"
  ) {
    return "Troubleshooting";
  }

  if (normalizedTitle === "related docs") {
    return "Related pages";
  }

  return heading.title;
}

export const docsPages: DocsPage[] = docsSidebarItems.map((item) => {
  const authored = authoredDocsByHref[item.href];
  if (!authored) {
    throw new Error(`Missing authored documentation content for route: ${item.href}`);
  }

  return {
    ...item,
    description: authored.description,
    metadataTitle: authored.metadataTitle,
    metadataDescription: authored.metadataDescription,
    lastUpdated: authored.lastUpdated ?? docsPortalLastUpdated,
    compatibilityWindow: authored.compatibilityWindow ?? docsPortalCompatibilityWindow,
    parentHref: getParentHref(item.href),
    calloutVariant: authored.calloutVariant ?? getCalloutVariant(item.href),
    calloutTitle: authored.calloutTitle ?? "Purpose",
    calloutBody: authored.calloutBody ?? authored.description,
    headings: authored.headings
      .filter((heading) => !shouldHideMetadataHeading(heading))
      .map((heading) => ({
        ...heading,
        title: getCanonicalHeadingTitle(heading),
      })),
  };
});

const docsPageByHref = new Map(docsPages.map((page) => [page.href, page]));

export function resolveDocHrefFromSlug(slug?: string[]): string {
  if (!slug || slug.length === 0) {
    return "/docs";
  }

  return `/docs/${slug.join("/")}`;
}

export function getDocPage(href: string): DocsPage | undefined {
  return docsPageByHref.get(href);
}

export function getDocBreadcrumbs(href: string): DocsBreadcrumb[] {
  const breadcrumbs: DocsBreadcrumb[] = [];
  let currentHref: string | undefined = href;

  while (currentHref) {
    const title = docsSidebarTitleByHref.get(currentHref);
    if (!title) {
      break;
    }

    breadcrumbs.unshift({ href: currentHref, title });
    currentHref = getDocPage(currentHref)?.parentHref;
  }

  return breadcrumbs;
}

export function getDocNeighbors(href: string): {
  previous?: DocsSidebarItem;
  next?: DocsSidebarItem;
} {
  const index = docsPageOrder.indexOf(href);
  if (index === -1) {
    return {};
  }

  const previousHref = docsPageOrder[index - 1];
  const nextHref = docsPageOrder[index + 1];

  return {
    previous: previousHref
      ? { href: previousHref, title: docsSidebarTitleByHref.get(previousHref) ?? "Previous" }
      : undefined,
    next: nextHref ? { href: nextHref, title: docsSidebarTitleByHref.get(nextHref) ?? "Next" } : undefined,
  };
}
