import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";

const siteUrl = "https://ryvra.org";
const metadataTitle = "Team";
const metadataDescription = "Team page content has moved to the founder profile.";
const canonicalUrl = `${siteUrl}/team`;

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
      <p className="lead">Team content has moved to the founder profile.</p>
      <p>
        Visit <Link href="/founder">/founder</Link> for current leadership details.
      </p>
    </Section>
  );
}
