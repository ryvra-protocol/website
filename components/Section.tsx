import { ReactNode } from "react";

type SectionProps = {
  id?: string;
  title: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, title, children, className }: SectionProps) {
  return (
    <section id={id} className={`section ${className ?? ""}`.trim()}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
