import { ReactNode } from "react";

type SectionProps = {
  id?: string;
  title: string;
  children: ReactNode;
  className?: string;
  /**
   * Page-opening sections render an h1. Everything else is a numbered clause
   * under it, so every route has exactly one top-level heading.
   */
  level?: 1 | 2;
  /** Opt a clause out of the numbering sequence. */
  unnumbered?: boolean;
};

export function Section({ id, title, children, className, level = 2, unnumbered }: SectionProps) {
  const Heading = level === 1 ? "h1" : "h2";
  const skipNumber = unnumbered || level === 1;

  const classes = ["section", skipNumber ? "section-unnumbered" : null, className]
    .filter(Boolean)
    .join(" ");

  return (
    <section id={id} className={classes}>
      <Heading>{title}</Heading>
      {children}
    </section>
  );
}
