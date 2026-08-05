import type { Metadata } from "next";
import { Section } from "@/components/Section";

const siteUrl = "https://ryvra.org";
const metadataTitle = "Team";
const metadataDescription =
  "Ryvra leadership and program participation references for production footer navigation.";
const canonicalUrl = `${siteUrl}/team`;

const teamReferences = [
  {
    id: "founder-and-ceo",
    title: "Founder & CEO (Omar Ryvra)",
    summary: "Leads Ryvra protocol strategy and product direction.",
  },
  {
    id: "lead-engineer-experiences",
    title: "Lead Engineer with Experiences",
    summary:
      "Leads implementation delivery, reliability hardening, and integration readiness.",
  },
  {
    id: "co-founder-abdulrazak-hassan",
    title: "Co-Founder (Abdulrazak Hassan)",
    summary: "Supports ecosystem partnerships and operational strategy.",
  },
  {
    id: "microsoft-for-startups-participants",
    title: "Microsoft for Startups Participants",
    summary: "Ryvra participates in Microsoft for Startups.",
  },
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

export default function TeamPage() {
  return (
    <Section title="Team">
      <p className="lead">
        Public team references aligned to footer navigation and production discoverability.
      </p>
      <div className="grid grid-2">
        {teamReferences.map((item) => (
          <article key={item.id} id={item.id} className="card">
            <strong>{item.title}</strong>
            <p>{item.summary}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
