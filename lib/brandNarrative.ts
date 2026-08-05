import { readFileSync } from "node:fs";
import path from "node:path";

export type BrandNarrativeSubsection = {
  title: string;
  paragraphs: string[];
  bullets: string[];
};

export type BrandNarrativeSection = {
  title: string;
  paragraphs: string[];
  bullets: string[];
  subsections: BrandNarrativeSubsection[];
};

type ParsedBrandNarrative = {
  title: string;
  intro: string[];
  sections: BrandNarrativeSection[];
};

const sectionHeadingMap = {
  Mission: "mission",
  "Problem Framing": "problemFraming",
  "Differentiation Pillars": "differentiationPillars",
  "Proof Points": "proofPoints",
  "Audience Outcomes": "audienceOutcomes",
} as const;

type BrandNarrativeSectionTitle = keyof typeof sectionHeadingMap;
type BrandNarrativeSectionKey = (typeof sectionHeadingMap)[BrandNarrativeSectionTitle];

export type BrandNarrativeDocument = {
  title: string;
  intro: string[];
  sections: Record<BrandNarrativeSectionKey, BrandNarrativeSection>;
};

function createSection(title: string): BrandNarrativeSection {
  return {
    title,
    paragraphs: [],
    bullets: [],
    subsections: [],
  };
}

function createSubsection(title: string): BrandNarrativeSubsection {
  return {
    title,
    paragraphs: [],
    bullets: [],
  };
}

function parseBrandNarrative(markdown: string): ParsedBrandNarrative {
  const lines = markdown.split(/\r?\n/);
  const sections: BrandNarrativeSection[] = [];
  const intro: string[] = [];

  let title = "Ryvra Brand Narrative";
  let currentSection: BrandNarrativeSection | undefined;
  let currentSubsection: BrandNarrativeSubsection | undefined;

  for (const rawLine of lines) {
    const line = rawLine.trim();

    if (!line) {
      continue;
    }

    if (line.startsWith("# ")) {
      title = line.slice(2).trim();
      continue;
    }

    if (line.startsWith("## ")) {
      currentSection = createSection(line.slice(3).trim());
      sections.push(currentSection);
      currentSubsection = undefined;
      continue;
    }

    if (line.startsWith("### ")) {
      if (!currentSection) {
        continue;
      }

      currentSubsection = createSubsection(line.slice(4).trim());
      currentSection.subsections.push(currentSubsection);
      continue;
    }

    if (line.startsWith("- ")) {
      const bullet = line.slice(2).trim();

      if (currentSubsection) {
        currentSubsection.bullets.push(bullet);
      } else if (currentSection) {
        currentSection.bullets.push(bullet);
      } else {
        intro.push(bullet);
      }

      continue;
    }

    if (currentSubsection) {
      currentSubsection.paragraphs.push(line);
    } else if (currentSection) {
      currentSection.paragraphs.push(line);
    } else {
      intro.push(line);
    }
  }

  return {
    title,
    intro,
    sections,
  };
}

function getRequiredSection(
  sectionByTitle: Map<string, BrandNarrativeSection>,
  title: BrandNarrativeSectionTitle,
): BrandNarrativeSection {
  const section = sectionByTitle.get(title);
  if (!section) {
    throw new Error(`Missing required brand narrative section: ${title}`);
  }

  return section;
}

export function getBrandNarrativeDocument(): BrandNarrativeDocument {
  const contentPath = path.join(process.cwd(), "content", "brand-narrative.md");
  const markdown = readFileSync(contentPath, "utf8");
  const parsed = parseBrandNarrative(markdown);
  const sectionByTitle = new Map(parsed.sections.map((section) => [section.title, section]));
  const sections = Object.entries(sectionHeadingMap).reduce(
    (acc, [title, key]) => {
      acc[key] = getRequiredSection(sectionByTitle, title as BrandNarrativeSectionTitle);
      return acc;
    },
    {} as Record<BrandNarrativeSectionKey, BrandNarrativeSection>,
  );

  return {
    title: parsed.title,
    intro: parsed.intro,
    sections,
  };
}
