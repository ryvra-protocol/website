import type { ReactNode } from "react";

type DocsHeadingProps = {
  id: string;
  children: ReactNode;
  level?: 2 | 3;
};

export function DocsHeading({ id, children, level = 2 }: DocsHeadingProps) {
  const Tag = level === 3 ? "h3" : "h2";

  return (
    <Tag id={id} className={`docs-heading docs-heading-${level}`}>
      <a className="docs-heading-anchor" href={`#${id}`} aria-label="Copy section link" title="Copy link to this section">
        #
      </a>
      <span>{children}</span>
    </Tag>
  );
}
