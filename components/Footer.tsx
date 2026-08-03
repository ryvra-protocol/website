import Link from "next/link";

const links = [
  { href: "/docs", label: "Docs" },
  { href: "/docs/reliability", label: "Reliability" },
  { href: "/docs/release-notes", label: "Release Notes" },
  { href: "/docs/integrators-getting-started", label: "Integrators" },
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
