import { DocCard } from "@/components/DocCard";
import { Section } from "@/components/Section";

const docs = [
  {
    title: "RFC-0001 AA + Unified Assets",
    description:
      "Protocol architecture foundations for account abstraction and unified asset handling.",
    href: "/docs/rfc-0001-aa-unified-assets",
  },
  {
    title: "Tokenomics (PoT)",
    description:
      "Participation design for pre-TGE points, daily caps, and epoch halving mechanics.",
    href: "/litepaper",
  },
  {
    title: "Tokenomics FAQ",
    description:
      "Operational clarifications and frequently asked questions for ecosystem participants.",
    href: "/docs/tokenomics-faq",
  },
  {
    title: "Brand Narrative",
    description:
      "Institutional positioning and language standards for public Ryvra communications.",
    href: "/docs/brand-narrative",
  },
];

export default function DocsIndexPage() {
  return (
    <Section title="Ryvra Documentation Portal">
      <p className="lead">
        The docs portal centralizes architectural references, tokenomics
        communication, and ecosystem-facing narratives.
      </p>
      <div className="grid grid-2">
        {docs.map((doc) => (
          <DocCard key={doc.title} {...doc} />
        ))}
      </div>
      <p className="lead">Last updated: TBA</p>
    </Section>
  );
}
