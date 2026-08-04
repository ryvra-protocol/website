import type { ReactNode } from "react";
import type { DocsCalloutVariant } from "@/lib/docs";

type DocsCalloutProps = {
  variant: DocsCalloutVariant;
  title: string;
  children: ReactNode;
};

export function DocsCallout({ variant, title, children }: DocsCalloutProps) {
  return (
    <aside className={`docs-callout docs-callout-${variant}`} role="note" aria-label={`${variant} callout`}>
      <p className="docs-callout-title">{title}</p>
      <p>{children}</p>
    </aside>
  );
}
