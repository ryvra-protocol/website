import Link from "next/link";

const links = [
  { href: "/brand", label: "Brand" },
  { href: "/docs", label: "Docs" },
  { href: "/docs/getting-started", label: "Getting Started" },
  { href: "/docs/user-guide", label: "User Guide" },
  { href: "/docs/developer-guide", label: "Developer Guide" },
  { href: "/docs/release-notes", label: "Release Notes" },
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
