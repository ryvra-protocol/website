import Link from "next/link";

type FooterLinkItem = {
  href: string;
  label: string;
};

type FooterSection = {
  id: string;
  title: "About" | "Products" | "Services" | "Learn" | "Team" | "Community";
  links: FooterLinkItem[];
};

const footerSections: FooterSection[] = [
  {
    id: "about",
    title: "About",
    links: [
      { href: "/brand", label: "Brand" },
      { href: "/brand#mission", label: "Mission" },
      { href: "/litepaper", label: "Litepaper" },
      { href: "/build", label: "Contact" },
    ],
  },
  {
    id: "products",
    title: "Products",
    links: [
      { href: "/docs/user-guide/accounts-and-wallets", label: "Accounts" },
      { href: "/docs/user-guide/send-payments", label: "Pay" },
      { href: "/docs/user-guide/buy-sell-trade", label: "Markets" },
      { href: "/build", label: "Build" },
    ],
  },
  {
    id: "services",
    title: "Services",
    links: [
      { href: "/docs/merchant-guide", label: "Merchant Docs" },
      { href: "/docs/developer-guide", label: "Developer Docs" },
      { href: "/build", label: "Integrations" },
      { href: "/docs/merchant-guide/merchant-faq", label: "Support" },
    ],
  },
  {
    id: "learn",
    title: "Learn",
    links: [
      { href: "/docs", label: "Docs Home" },
      { href: "/docs/getting-started", label: "Getting Started" },
      { href: "/docs/glossary", label: "Glossary" },
      { href: "/docs/release-notes", label: "Release Notes" },
    ],
  },
  {
    id: "team",
    title: "Team",
    links: [
      { href: "/team#founder-and-ceo", label: "Founder & CEO (Omar Ryvra)" },
      { href: "/team#lead-engineer-experiences", label: "Lead Engineer with Experiences" },
      { href: "/team#co-founder-abdulrazak-hassan", label: "Co-Founder (Abdulrazak Hassan)" },
      { href: "/team#microsoft-for-startups-participants", label: "Microsoft for Startups Participants" },
    ],
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
