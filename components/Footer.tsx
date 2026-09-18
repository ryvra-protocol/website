import Link from "next/link";

type FooterLinkItem = {
  href: string;
  label: string;
};

type FooterSection = {
  id: string;
  title: string;
  links: FooterLinkItem[];
};

const footerSections: FooterSection[] = [
  {
    id: "capabilities",
    title: "Capabilities",
    links: [
      { href: "/capabilities/agent-gateway", label: "Agent Gateway" },
      { href: "/capabilities/agent-runtime", label: "Agent Runtime" },
      { href: "/capabilities/agent-sdk", label: "Agent SDK" },
      { href: "/capabilities/private-execution", label: "Private Execution" },
      { href: "/capabilities/private-perps", label: "Private Perps" },
      { href: "/capabilities/agentic-payments", label: "Agentic Payments" },
      { href: "/capabilities/agentic-markets", label: "Agentic Markets" },
      { href: "/capabilities/autonomous-treasury", label: "Autonomous Treasury" },
    ],
  },
  {
    id: "documentation",
    title: "Documentation",
    links: [
      { href: "/docs", label: "Docs home" },
      { href: "/docs/user-guide", label: "For users" },
      { href: "/docs/merchant-guide", label: "For merchants" },
      { href: "/docs/developer-guide", label: "For developers" },
      { href: "/docs/security-and-risk", label: "Security and risk" },
      { href: "/docs/tokenomics", label: "Tokenomics" },
      { href: "/docs/rfc-technical-specs", label: "RFC and technical specs" },
    ],
  },
  {
    id: "company",
    title: "Company",
    links: [
      { href: "/brand", label: "Brand narrative" },
      { href: "/brand#mission", label: "Messaging framework" },
      { href: "/litepaper", label: "Litepaper" },
      { href: "/founder", label: "Founder" },
      { href: "/build", label: "Build with Ryvra" },
    ],
  },
  {
    id: "community",
    title: "Community",
    links: [
      { href: "https://github.com/ryvra-protocol", label: "GitHub" },
      { href: "mailto:ecosystem@ryvra.org", label: "Ecosystem email" },
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
      <div className="footer-inner">
        <h2 id="footer-navigation" className="sr-only">
          Footer navigation
        </h2>

        <div className="footer-top">
          <div className="footer-brand">
            <Link href="/" className="wordmark" aria-label="Ryvra home">
              <span className="wordmark-mark" aria-hidden="true">
                R
              </span>
              <span>yvra</span>
            </Link>
            <p>
              AI proposes. Ryvra authorizes. Deterministic systems execute. Ledger and settlement
              provide truth and finality.
            </p>
          </div>

          <div className="footer-grid">
            {footerSections.map((section) => (
              <section
                key={section.id}
                className="footer-section"
                aria-labelledby={`${section.id}-heading`}
              >
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
      </div>
    </footer>
  );
}
