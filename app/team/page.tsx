import type { Metadata } from "next";
import { redirect } from "next/navigation";

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
  redirect("/founder");
}
