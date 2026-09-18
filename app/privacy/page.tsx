import type { Metadata } from "next";
import { Section } from "@/components/Section";

const siteUrl = "https://ryvra.org";
const metadataTitle = "Privacy";
const metadataDescription =
  "Ryvra privacy statement for website usage and support contact handling.";
const canonicalUrl = `${siteUrl}/privacy`;

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

export default function PrivacyPage() {
  return (
    <Section level={1} className="hero" title="Privacy">
      <p className="lead">
        Ryvra limits collected website data to what is required for support,
        documentation delivery, and operational security.
      </p>
      <p>
        For privacy requests or questions, contact{" "}
        <a href="mailto:ecosystem@ryvra.org">ecosystem@ryvra.org</a>.
      </p>
    </Section>
  );
}
