import type { Metadata } from "next";
import { Section } from "@/components/Section";

const siteUrl = "https://ryvra.org";
const metadataTitle = "Founder";
const metadataDescription =
  "Founder profile for Umar Rabiu, including leadership role, experience, and social links.";
const canonicalUrl = `${siteUrl}/founder`;

const experienceItems = [
  "Founder & CEO at Ryvra, leading autonomous-finance product strategy and protocol direction.",
  "Built and shipped TypeScript and JavaScript products across trading, exchange, and fintech workflows.",
  "Hands-on builder of DeFi and arbitrage systems, including Aave-focused automation projects.",
];

const profileLinks = [
  { label: "GitHub", href: "https://github.com/UmarfarouqRb" },
  { label: "X (Twitter)", href: "https://x.com/UmarfarouqRb" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/umar-rabiu" },
];

export const metadata: Metadata = {
  title: metadataTitle,
  description: metadataDescription,
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: `Ryvra | ${metadataTitle}`,
    description: metadataDescription,
    url: canonicalUrl,
    type: "website",
  },
};

export default function FounderPage() {
  return (
    <Section title="Founder">
      <article className="card">
        <p className="lead">Umar Rabiu</p>
        <p>
          <strong>Role:</strong> Founder &amp; CEO
        </p>
      </article>
      <article className="card">
        <strong>Experience</strong>
        <ul>
          {experienceItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </article>
      <article className="card">
        <strong>Profiles</strong>
        <ul>
          {profileLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                {link.label} (opens in new tab)
              </a>
            </li>
          ))}
        </ul>
      </article>
    </Section>
  );
}
