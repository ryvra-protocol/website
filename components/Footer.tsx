import Link from "next/link";

const links = [
  { href: "/docs", label: "Docs" },
  { href: "/docs/user-guide", label: "User Guide" },
  { href: "/docs/merchant-guide", label: "Merchant Guide" },
  { href: "/docs/developer-guide", label: "Developer Guide" },
  { href: "/docs/glossary", label: "Glossary" },
  { href: "https://github.com/ryvra-protocol", label: "GitHub" },
];

export function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Ryvra. Every transaction contributes.</p>
      <div className="footer-links">
        {links.map((link) => (
          <Link key={link.label} href={link.href} className="footer-link">
            {link.label}
          </Link>
        ))}
      </div>
    </footer>
  );
}
