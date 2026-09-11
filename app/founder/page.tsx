import Image from "next/image";
import type { Metadata } from "next";
import { Section } from "@/components/Section";

const siteUrl = "https://ryvra.org";
const metadataTitle = "Founder";
const metadataDescription =
  "Meet Umar Rabiu, Founder & CEO of Ryvra, a technical founder building full-stack and Web3 financial infrastructure.";
const canonicalUrl = `${siteUrl}/founder`;
const founderImageSrc: string | null = null;

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
    <>
      <Section className="hero founder-hero" title="Founder & CEO">
        <p className="lead">Technical Founder at Ryvra</p>
        <div className="founder-profile-layout">
          <div className="founder-photo-shell" aria-label="Founder profile photo">
            {founderImageSrc ? (
              <Image
                src={founderImageSrc}
                alt="Umar Rabiu"
                width={480}
                height={560}
                className="founder-photo"
                priority
              />
            ) : (
              <div className="founder-photo founder-photo-placeholder">
                <span>Profile photo (replace with founder image)</span>
              </div>
            )}
          </div>
          <div className="founder-profile-copy">
            <p className="founder-name">Umar Rabiu</p>
            <p className="lead founder-bio">
              Technical Founder @ Ryvra | Full-stack &amp; Web3 engineer | Building financial
              infrastructure.
            </p>
            <p>
              Umar Rabiu is a full-stack Web3 engineer and technical founder focused on building
              practical financial systems from the protocol layer through product delivery.
            </p>
            <p>
              His work spans TypeScript and JavaScript, React, Node.js, PostgreSQL, Solidity, and
              blockchain infrastructure, with experience shipping systems that connect application
              logic, execution, and data reliability in production.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Experience">
        <div className="grid grid-2">
          <article className="card">
            <strong>Builder across the stack</strong>
            <p>
              He has built decentralized trading systems, smart contracts, relayer infrastructure,
              APIs, databases, authentication flows, and production web applications with a
              hands-on engineering approach.
            </p>
          </article>
          <article className="card">
            <strong>Infrastructure focus</strong>
            <p>
              At Ryvra, he is building EIP-4337 account abstraction services, asset
              infrastructure, ledger and settlement systems, policy and risk infrastructure, market
              execution, payment rails, and the product applications that make those systems usable.
            </p>
          </article>
        </div>
      </Section>

      <Section title="Approach">
        <article className="card">
          <p>
            I learned primarily by building: taking ideas from architecture and prototypes through
            implementation, debugging, deployment, and iteration.
          </p>
        </article>
      </Section>

      <Section title="Profiles">
        <article className="card">
          <ul className="founder-profile-links">
            {profileLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${link.label} (opens in new tab)`}
                >
                  {link.label}
                  <span aria-hidden="true"> ↗</span>
                </a>
              </li>
            ))}
          </ul>
        </article>
      </Section>
    </>
  );
}
