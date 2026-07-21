import Link from "next/link";

const links = [
  { href: "/docs", label: "Docs" },
  { href: "/litepaper", label: "Litepaper" },
  { href: "/build", label: "Build" },
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
