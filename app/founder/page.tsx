import Image from "next/image";
import type { Metadata } from "next";
import { Section } from "@/components/Section";

const siteUrl = "https://ryvra.org";
const metadataTitle = "Founder";
const metadataDescription =
  "Meet Umar Rabiu, Founder & CEO of Ryvra, a technical founder building full-stack and Web3 financial infrastructure.";
const canonicalUrl = `${siteUrl}/founder`;

type FounderProfile = {
  name: string;
  role: string;
  subtitle: string;
  bio: string;
  image: {
    src: string | null;
    alt: string;
    placeholderLabel: string;
  };
};

const founderProfile: FounderProfile = {
  name: "Umar Rabiu",
  role: "Founder & CEO",
  subtitle: "Technical Founder at Ryvra",
  bio: "Technical Founder @ Ryvra | Full-stack & Web3 engineer | Building financial infrastructure.",
  image: {
    src: null,
    alt: "Umar Rabiu",
    placeholderLabel: "Profile photo (replace with founder image)",
  },
};

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
        <p className="lead">{founderProfile.subtitle}</p>
        <div className="founder-profile-layout">
          <div className="founder-photo-shell">
            {founderProfile.image.src ? (
              <Image
                src={founderProfile.image.src}
                alt={founderProfile.image.alt}
                width={480}
                height={560}
                className="founder-photo"
                priority
              />
            ) : (
              <div
                className="founder-photo founder-photo-placeholder"
                role="img"
                aria-label="Profile photo placeholder. Replace with founder image."
              >
                <span>{founderProfile.image.placeholderLabel}</span>
              </div>
            )}
          </div>
          <div className="founder-profile-copy">
            <p className="founder-name">{founderProfile.name}</p>
            <p className="founder-role">{founderProfile.role}</p>
            <p className="lead founder-bio">
              {founderProfile.bio}
            </p>
            <p>
              Umar Rabiu is a full-stack Web3 engineer and technical founder focused on building
              practical financial systems from the protocol layer through product delivery.
            </p>
            <p>
              Umar Rabiu&apos;s work spans TypeScript and JavaScript, React, Node.js,
              PostgreSQL, Solidity, and blockchain infrastructure, with experience shipping
              systems that connect application logic, execution, and data reliability in
              production.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Experience">
        <div className="grid grid-2">
          <article className="card">
            <strong>Builder across the stack</strong>
            <p>
              Umar Rabiu has built decentralized trading systems, smart contracts, relayer
              infrastructure, APIs, databases, authentication flows, and production web
              applications with a hands-on engineering approach.
            </p>
          </article>
          <article className="card">
            <strong>Infrastructure focus</strong>
            <p>
              At Ryvra, Umar Rabiu is building EIP-4337 account abstraction services, asset
              infrastructure, ledger and settlement systems, policy and risk infrastructure,
              market execution, payment rails, and the product applications that make those
              systems usable.
            </p>
          </article>
        </div>
      </Section>

      <Section title="Learning approach">
        <article className="card">
          <p>Umar Rabiu&apos;s learning approach is grounded in execution:</p>
          <blockquote className="founder-quote">
            I learned primarily by building: taking ideas from architecture and prototypes through
            implementation, debugging, deployment, and iteration.
          </blockquote>
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
