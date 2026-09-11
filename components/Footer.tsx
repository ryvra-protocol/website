import Link from "next/link";

type FooterLinkItem = {
  href: string;
  label: string;
};

type FooterSection = {
  id: string;
  title: "About" | "Products" | "Platform" | "Learn" | "Team" | "Community";
  links: FooterLinkItem[];
};

const footerSections: FooterSection[] = [
  {
    id: "about",
    title: "About",
    links: [
      { href: "/brand", label: "Brand" },
      { href: "/brand#mission", label: "Messaging framework" },
      { href: "/docs/rfc-index", label: "RFC Index" },
      { href: "/build", label: "Build with Ryvra" },
    ],
  },
  {
    id: "products",
    title: "Products",
    links: [
      { href: "/capabilities/agent-gateway", label: "Agent Gateway" },
      { href: "/capabilities/agent-runtime", label: "Agent Runtime" },
      { href: "/capabilities/agent-sdk", label: "Agent SDK" },
      { href: "/capabilities/private-execution", label: "Private Execution" },
    ],
  },
  {
    id: "platform",
    title: "Platform",
    links: [
      { href: "/capabilities/agentic-payments", label: "Agentic Payments" },
      { href: "/capabilities/agentic-markets", label: "Agentic Markets" },
      { href: "/capabilities/autonomous-treasury", label: "Autonomous Treasury" },
      { href: "/capabilities/private-perps", label: "Private Perps" },
      { href: "/docs/developer-guide", label: "Developer Docs" },
      { href: "/docs/merchant-guide/merchant-faq", label: "Support" },
    ],
  },
  {
    id: "learn",
    title: "Learn",
    links: [
      { href: "/docs", label: "Docs Home" },
      { href: "/docs/developer-guide/api-sdk-onboarding", label: "API + SDK Onboarding" },
      { href: "/docs/governance-and-security-model", label: "Governance + Security" },
      { href: "/docs/audit-and-provenance", label: "Audit + Provenance" },
    ],
  },
  {
    id: "team",
    title: "Team",
    links: [{ href: "/founder", label: "Founder" }],
  },
  {
    id: "community",
    title: "Community",
    links: [
      { href: "https://github.com/ryvra-protocol", label: "GitHub" },
      { href: "mailto:ecosystem@ryvra.org", label: "Ecosystem Email" },
    ],
  },
];

const legalLinks: FooterLinkItem[] = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

function FooterLink({ href, label, className }: FooterLinkItem & { className: string }) {
  if (href.startsWith("mailto:")) {
    return (
      <a href={href} className={className}>
        {label}
      </a>
    );
  }

  if (href.startsWith("https://") || href.startsWith("http://")) {
    return (
      <a href={href} className={className} target="_blank" rel="noopener noreferrer">
        {label}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="footer" aria-labelledby="footer-navigation">
      <h2 id="footer-navigation" className="sr-only">
        Footer navigation
      </h2>
      <div className="footer-grid">
        {footerSections.map((section) => (
          <section key={section.id} className="footer-section" aria-labelledby={`${section.id}-heading`}>
            <h3 id={`${section.id}-heading`} className="footer-heading">
              {section.title}
            </h3>
            <ul className="footer-list">
              {section.links.map((link) => (
                <li key={link.label}>
                  <FooterLink href={link.href} label={link.label} className="footer-link" />
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
      <div className="footer-legal">
        <p className="footer-copyright">© {new Date().getFullYear()} Ryvra</p>
        <ul className="footer-legal-links">
          {legalLinks.map((link) => (
            <li key={link.label}>
              <FooterLink href={link.href} label={link.label} className="footer-legal-link" />
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
