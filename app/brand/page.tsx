import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import {
  type BrandNarrativeSection,
  type BrandNarrativeSubsection,
  getBrandNarrativeDocument,
} from "@/lib/brandNarrative";

const siteUrl = "https://ryvra.org";
const metadataTitle = "Brand Narrative";
const metadataDescription =
  "Canonical Ryvra brand narrative covering mission, problem framing, differentiation pillars, proof points, and audience outcomes.";
const canonicalUrl = `${siteUrl}/brand`;

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
  twitter: {
    card: "summary",
    title: `Ryvra | ${metadataTitle}`,
    description: metadataDescription,
  },
};

function NarrativeList({ bullets }: { bullets: string[] }) {
  if (!bullets.length) {
    return null;
  }

  return (
    <ul>
      {bullets.map((bullet) => (
        <li key={bullet}>{bullet}</li>
      ))}
    </ul>
  );
}

function NarrativeSubsectionCard({ subsection }: { subsection: BrandNarrativeSubsection }) {
  return (
    <article className="card">
      <strong>{subsection.title}</strong>
      {subsection.paragraphs.map((paragraph) => (
        <p key={`${subsection.title}-${paragraph}`}>{paragraph}</p>
      ))}
      <NarrativeList bullets={subsection.bullets} />
    </article>
  );
}

function NarrativeSectionContent({
  section,
  subsectionGridClass,
}: {
  section: BrandNarrativeSection;
  subsectionGridClass?: string;
}) {
  return (
    <>
      {section.paragraphs.map((paragraph) => (
        <p key={`${section.title}-${paragraph}`}>{paragraph}</p>
      ))}
      <NarrativeList bullets={section.bullets} />
      {section.subsections.length ? (
        <div className={`grid ${subsectionGridClass ?? "grid-2"}`}>
          {section.subsections.map((subsection) => (
            <NarrativeSubsectionCard key={subsection.title} subsection={subsection} />
          ))}
        </div>
      ) : null}
    </>
  );
}

export default function BrandPage() {
  const narrative = getBrandNarrativeDocument();
  const { mission, problemFraming, differentiationPillars, proofPoints, audienceOutcomes } = narrative.sections;

  return (
    <>
      <Section className="hero" level={1} title={narrative.title}>
        {narrative.intro.map((line, index) => (
          <p className={index === 0 ? "lead" : undefined} key={line}>
            {line}
          </p>
        ))}
        <div className="button-row">
          <Link className="button button-primary" href="/build">
            Build on Ryvra
          </Link>
          <Link className="button button-secondary" href="/docs/introduction">
            Read docs
          </Link>
        </div>
      </Section>

      <Section id="mission" title={mission.title}>
        <NarrativeSectionContent section={mission} />
      </Section>

      <Section id="problem-framing" title={problemFraming.title}>
        <NarrativeSectionContent section={problemFraming} />
      </Section>

      <Section id="differentiation-pillars" title={differentiationPillars.title}>
        <NarrativeSectionContent section={differentiationPillars} subsectionGridClass="grid-3" />
      </Section>

      <Section id="proof-points" title={proofPoints.title}>
        <NarrativeSectionContent section={proofPoints} />
      </Section>

      <Section id="audience-outcomes" title={audienceOutcomes.title}>
        <NarrativeSectionContent section={audienceOutcomes} subsectionGridClass="grid-3" />
      </Section>
    </>
  );
}
