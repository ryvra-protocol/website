export type DocsCalloutVariant = "info" | "warn" | "success" | "note";

export type DocsSidebarItem = {
  href: string;
  title: string;
};

export type DocsSidebarGroup = {
  title: string;
  items: DocsSidebarItem[];
};

export type DocsHeading = {
  id: string;
  title: string;
  body: string;
};

export type DocsPage = DocsSidebarItem & {
  description: string;
  parentHref?: string;
  calloutVariant: DocsCalloutVariant;
  headings: DocsHeading[];
};

export type DocsBreadcrumb = DocsSidebarItem;

export const docsSidebarGroups: DocsSidebarGroup[] = [
  {
    title: "Overview",
    items: [
      { href: "/docs", title: "Documentation" },
      { href: "/docs/introduction", title: "Introduction" },
      { href: "/docs/getting-started", title: "Getting Started" },
    ],
  },
  {
    title: "User Guide",
    items: [
      { href: "/docs/user-guide", title: "User Guide" },
      { href: "/docs/user-guide/accounts-and-wallets", title: "Accounts and Wallets" },
      { href: "/docs/user-guide/buy-sell-trade", title: "Buy, Sell, and Trade" },
      { href: "/docs/user-guide/send-transaction", title: "Send Transaction" },
      { href: "/docs/user-guide/liquidity-and-staking", title: "Liquidity and Staking" },
      { href: "/docs/user-guide/send-payments", title: "Send Payments" },
      { href: "/docs/user-guide/fees-limits-and-risks", title: "Fees, Limits, and Risks" },
      { href: "/docs/user-guide/security-best-practices", title: "Security Best Practices" },
      { href: "/docs/user-guide/faq", title: "FAQ" },
    ],
  },
  {
    title: "Merchant Guide",
    items: [
      { href: "/docs/merchant-guide", title: "Merchant Guide" },
      { href: "/docs/merchant-guide/overview", title: "Overview" },
      { href: "/docs/merchant-guide/onboarding", title: "Onboarding" },
      {
        href: "/docs/merchant-guide/checkout-payment-links",
        title: "Checkout and Payment Links",
      },
      { href: "/docs/merchant-guide/invoicing", title: "Invoicing" },
      { href: "/docs/merchant-guide/subscriptions", title: "Subscriptions" },
      { href: "/docs/merchant-guide/payouts-settlement", title: "Payouts and Settlement" },
      { href: "/docs/merchant-guide/refunds-disputes", title: "Refunds and Disputes" },
      {
        href: "/docs/merchant-guide/reconciliation-reporting",
        title: "Reconciliation and Reporting",
      },
      { href: "/docs/merchant-guide/risk-compliance", title: "Risk and Compliance" },
      { href: "/docs/merchant-guide/merchant-faq", title: "Merchant FAQ" },
    ],
  },
  {
    title: "Developer Guide",
    items: [
      { href: "/docs/developer-guide", title: "Developer Guide" },
      {
        href: "/docs/developer-guide/architecture-overview",
        title: "Architecture Overview",
      },
      { href: "/docs/developer-guide/api-overview", title: "API Overview" },
      { href: "/docs/developer-guide/authentication", title: "Authentication" },
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
      { href: "/docs/developer-guide/testing-sandbox", title: "Testing Sandbox" },
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
    title: "Reference",
    items: [
      { href: "/docs/release-notes", title: "Release Notes" },
      { href: "/docs/glossary", title: "Glossary" },
    ],
  },
];

const docsSidebarItems = docsSidebarGroups.flatMap((group) => group.items);

const docsSidebarTitleByHref = new Map(
  docsSidebarItems.map((item) => [item.href, item.title]),
);

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

function getDocHeadings(title: string): DocsHeading[] {
  return [
    {
      id: "overview",
      title: "Overview",
      body: `Placeholder overview for ${title}. Detailed authored guidance will be added in a later documentation phase.`,
    },
    {
      id: "planned-content",
      title: "Planned Content",
      body: "This section reserves structure for workflows, references, and examples while keeping Part A scoped to framework and information architecture.",
    },
    {
      id: "status",
      title: "Status",
      body: "Part A scaffolding is active for navigation, metadata, breadcrumbs, and page linking. Final content authoring is intentionally deferred.",
    },
  ];
}

function getDocDescription(title: string): string {
  return `Part A scaffold for ${title.toLowerCase()} documentation.`;
}

export const docsPages: DocsPage[] = docsSidebarItems.map((item) => ({
  ...item,
  description: getDocDescription(item.title),
  parentHref: getParentHref(item.href),
  calloutVariant: getCalloutVariant(item.href),
  headings: getDocHeadings(item.title),
}));

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
