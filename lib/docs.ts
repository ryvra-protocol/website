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
  body?: string;
  bullets?: string[];
  steps?: string[];
  links?: DocsSidebarItem[];
};

export type DocsPage = DocsSidebarItem & {
  description: string;
  metadataTitle?: string;
  metadataDescription?: string;
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

const docsSidebarTitleByHref = new Map(docsSidebarItems.map((item) => [item.href, item.title]));

const userGuideItems = docsSidebarGroups.find((group) => group.title === "User Guide")?.items ?? [];

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

function getDocDescription(title: string): string {
  return `Part A scaffold for ${title.toLowerCase()} documentation.`;
}

function getDocLink(href: string): DocsSidebarItem {
  const title = docsSidebarTitleByHref.get(href);
  if (!title) {
    throw new Error(`Unknown documentation href: ${href}`);
  }

  return { href, title };
}

function getScaffoldHeadings(title: string): DocsHeading[] {
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

function getScaffoldContent(title: string): AuthoredDocContent {
  return {
    description: getDocDescription(title),
    calloutTitle: "Part A scaffold notice",
    calloutBody:
      "This page currently contains IA and layout scaffolding only. Full authored content is intentionally deferred to a later phase.",
    headings: getScaffoldHeadings(title),
  };
}

const authoredDocsByHref: Record<string, AuthoredDocContent> = {
  "/docs": {
    description:
      "Choose the right documentation path for using, operating, and integrating Ryvra Protocol.",
    metadataTitle: "Documentation",
    metadataDescription:
      "Start from the right Ryvra docs path. User Guide covers trading, transactions, liquidity, staking, payments, and safety basics.",
    calloutVariant: "info",
    calloutTitle: "Choose your track",
    calloutBody:
      "If you are here to use Ryvra products directly, start with the User Guide. Merchant and Developer sections remain available for specialized workflows.",
    headings: [
      {
        id: "choose-your-path",
        title: "Choose your path",
        body: "Pick the path that matches your role and current task.",
        links: [getDocLink("/docs/user-guide"), getDocLink("/docs/merchant-guide"), getDocLink("/docs/developer-guide")],
      },
      {
        id: "im-a-user-start-here",
        title: "I’m a user: start here",
        body: "The User Guide is designed for people moving assets, trading, staking, and making payments from an account wallet.",
        bullets: [
          "Set up and secure your account first.",
          "Use step-by-step guides for trading, transactions, liquidity, and payments.",
          "Review fees, limits, and risks before high-value actions.",
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
    ],
  },
  "/docs/user-guide": {
    description:
      "Learn how to set up wallets, trade, send transactions, manage liquidity or staking, and make payments safely on Ryvra.",
    metadataTitle: "User Guide: Overview",
    metadataDescription:
      "User documentation for account setup, trading, transactions, liquidity and staking, payments, fees, security, and troubleshooting paths.",
    calloutVariant: "success",
    calloutTitle: "Start with account setup",
    calloutBody:
      "Complete the accounts and wallets checklist before your first trade, transfer, liquidity action, or payment.",
    headings: [
      {
        id: "who-this-guide-is-for",
        title: "Who this guide is for",
        body: "This guide is for end users who operate a Ryvra account wallet to move funds, trade assets, provide liquidity, stake, and send payments.",
      },
      {
        id: "quick-start-paths",
        title: "Quick-start paths",
        body: "Use the path that matches what you need to do right now.",
        links: [
          getDocLink("/docs/user-guide/accounts-and-wallets"),
          getDocLink("/docs/user-guide/buy-sell-trade"),
          getDocLink("/docs/user-guide/send-transaction"),
          getDocLink("/docs/user-guide/liquidity-and-staking"),
          getDocLink("/docs/user-guide/send-payments"),
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
};

export const docsPages: DocsPage[] = docsSidebarItems.map((item) => {
  const authored = authoredDocsByHref[item.href] ?? getScaffoldContent(item.title);

  return {
    ...item,
    description: authored.description,
    metadataTitle: authored.metadataTitle,
    metadataDescription: authored.metadataDescription,
    parentHref: getParentHref(item.href),
    calloutVariant: authored.calloutVariant ?? getCalloutVariant(item.href),
    calloutTitle: authored.calloutTitle ?? "Part A scaffold notice",
    calloutBody:
      authored.calloutBody ??
      "This page currently contains IA and layout scaffolding only. Full authored content is intentionally deferred to a later phase.",
    headings: authored.headings,
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
