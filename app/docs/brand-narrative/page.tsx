import type { Metadata } from "next";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Brand Narrative",
  description:
    "Production communication principles for Ryvra protocol messaging and terminology consistency.",
  alternates: { canonical: "/docs/brand-narrative" },
  openGraph: {
    title: "Ryvra Brand Narrative",
    description:
      "Public messaging standards for production protocol communications.",
    url: "https://ryvra.org/docs/brand-narrative",
    type: "article",
  },
};

export default function BrandNarrativePage() {
  return (
    <Section title="Brand Narrative">
      <p className="lead">
        Ryvra communication is production-focused, implementation-aligned, and
        explicit about shipped capability boundaries.
      </p>
      <ul>
        <li>Describe protocol capabilities in user and integrator terms.</li>
        <li>Avoid speculative roadmap claims represented as shipped features.</li>
        <li>Align terminology with compatibility contracts and published docs.</li>
      </ul>
    </Section>
  );
}
