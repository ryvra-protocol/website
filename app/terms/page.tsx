import type { Metadata } from "next";
import { Section } from "@/components/Section";

const siteUrl = "https://ryvra.org";
const metadataTitle = "Terms";
const metadataDescription =
  "Ryvra website terms for informational and documentation use.";
const canonicalUrl = `${siteUrl}/terms`;

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

export default function TermsPage() {
  return (
    <Section level={1} className="hero" title="Terms">
      <p className="lead">
        Ryvra website content is provided for informational purposes and
        integration planning.
      </p>
      <p>
        By using this site, you agree to use published materials responsibly
        and verify production decisions against current documentation.
      </p>
    </Section>
  );
}
