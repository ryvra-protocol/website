import Link from "next/link";
import type { DocsListItem, DocsSidebarItem } from "@/lib/docs";

type DocsListProps = {
  items: DocsListItem[] | DocsSidebarItem[];
  ordered?: boolean;
  mode?: "content" | "links";
  depth?: number;
};

type NormalizedDocsListItem = {
  summary: string;
  body?: string;
  children?: DocsListItem[];
  childrenOrdered?: boolean;
  code?: string;
  href?: string;
};

function normalizeDocsListItem(
  item: DocsListItem | DocsSidebarItem,
  mode: "content" | "links",
): NormalizedDocsListItem {
  if (mode === "links") {
    const link = item as DocsSidebarItem;

    return {
      summary: link.title,
      body: "Open the related page for the deeper explanation and source-of-truth detail.",
      href: link.href,
    };
  }

  if (typeof item === "string") {
    return { summary: item, body: item };
  }

  const contentItem = item as Exclude<DocsListItem, string>;
  const hasSupportingContent =
    Boolean(contentItem.body) ||
    Boolean(contentItem.children?.length) ||
    Boolean(contentItem.code);

  return {
    summary: contentItem.summary,
    body: contentItem.body ?? (hasSupportingContent ? undefined : contentItem.summary),
    children: contentItem.children,
    childrenOrdered: contentItem.childrenOrdered,
    code: contentItem.code,
  };
}

export function DocsList({
  items,
  ordered = false,
  mode = "content",
  depth = 0,
}: DocsListProps) {
  const ListTag = ordered ? "ol" : "ul";

  return (
    <ListTag
      className={`docs-collapsible-list ${ordered ? "docs-collapsible-list-ordered" : "docs-collapsible-list-unordered"}`}
      data-docs-collapsible-list="true"
      data-docs-collapsible-depth={depth}
    >
      {items.map((item, index) => {
        const normalized = normalizeDocsListItem(item, mode);
        const hasPanel =
          Boolean(normalized.body) ||
          Boolean(normalized.href) ||
          Boolean(normalized.code) ||
          Boolean(normalized.children?.length);

        return (
          <li key={`${depth}-${index}-${normalized.summary}`} className="docs-collapsible-list-item">
            <details className="docs-collapsible-details" data-docs-collapsible-item="true">
              <summary className="docs-collapsible-summary" aria-expanded="false">
                <span className="docs-collapsible-summary-text">{normalized.summary}</span>
                {normalized.href ? (
                  <Link href={normalized.href} className="docs-collapsible-summary-link">
                    Open page
                  </Link>
                ) : null}
              </summary>
              {hasPanel ? (
                <div className="docs-collapsible-panel">
                  {normalized.body ? <p>{normalized.body}</p> : null}
                  {normalized.code ? (
                    <pre className="docs-collapsible-code">
                      <code>{normalized.code}</code>
                    </pre>
                  ) : null}
                  {normalized.children?.length ? (
                    <DocsList
                      items={normalized.children}
                      ordered={normalized.childrenOrdered}
                      depth={depth + 1}
                    />
                  ) : null}
                </div>
              ) : null}
            </details>
          </li>
        );
      })}
    </ListTag>
  );
}
