import Link from "next/link";

const links = [
  { href: "/capabilities", label: "Capabilities" },
  { href: "/brand", label: "Brand" },
  { href: "/docs", label: "Docs" },
  { href: "/docs/user-guide", label: "For Users" },
  { href: "/docs/merchant-guide", label: "For Merchants" },
  { href: "/docs/developer-guide", label: "For Developers" },
  { href: "/docs/tokenomics", label: "Tokenomics" },
  { href: "/docs/security-and-risk", label: "Security & Risk" },
  { href: "https://github.com/ryvra-protocol", label: "GitHub" },
];

export function Navbar() {
  return (
    <header className="site-header">
      <nav className="nav" aria-label="Primary">
        <Link href="/" className="wordmark" aria-label="Ryvra Home">
          <span className="wordmark-mark" aria-hidden="true">
            R
          </span>
          <span>yvra</span>
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
