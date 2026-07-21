import Link from "next/link";

const links = [
  { href: "/docs", label: "Docs" },
  { href: "https://github.com/ryvra-protocol", label: "GitHub" },
  { href: "/build", label: "Contact" },
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
