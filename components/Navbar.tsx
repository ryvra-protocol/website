import Link from "next/link";

const links = [
  { href: "/capabilities", label: "Capabilities" },
  { href: "/brand", label: "Brand" },
  { href: "/founder", label: "Founder" },
  { href: "/docs", label: "Docs" },
  { href: "/docs/rfc-index", label: "RFCs" },
  { href: "/docs/developer-guide/api-sdk-onboarding", label: "API + SDK" },
  { href: "/docs/governance-and-security-model", label: "Security Model" },
  { href: "/docs/developer-guide", label: "Developer Guide" },
  { href: "https://github.com/ryvra-protocol", label: "GitHub" },
];

export function Navbar() {
  return (
    <header>
      <nav className="nav" aria-label="Primary">
        <Link href="/" className="wordmark" aria-label="Ryvra Home">
          Ryvra
        </Link>
        <div className="nav-links">
          {links.map((link) => (
            <Link key={link.label} href={link.href} className="nav-link">
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
