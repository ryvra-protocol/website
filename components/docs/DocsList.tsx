import type { DocsListItem } from "@/lib/docs";

type DocsListProps = {
  items: DocsListItem[];
  ordered?: boolean;
  depth?: number;
};

type NormalizedDocsListItem = {
  summary: string;
  body?: string;
  children?: DocsListItem[];
  childrenOrdered?: boolean;
  code?: string;
};

function normalizeDocsListItem(item: DocsListItem): NormalizedDocsListItem {
  if (typeof item === "string") {
    return { summary: item };
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
        const normalized = normalizeDocsListItem(item);
        const hasPanel = Boolean(normalized.body) || Boolean(normalized.code) || Boolean(normalized.children?.length);

        return (
          <li key={`${depth}-${index}-${normalized.summary}`} className="docs-collapsible-list-item">
            {hasPanel ? (
              <details className="docs-collapsible-details" data-docs-collapsible-item="true">
                <summary className="docs-collapsible-summary">
                  <span className="docs-collapsible-summary-text">{normalized.summary}</span>
                </summary>
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
              </details>
            ) : (
              <div className="docs-collapsible-leaf">
                <span className="docs-collapsible-summary-text">{normalized.summary}</span>
              </div>
            )}
          </li>
        );
      })}
    </ListTag>
  );
}
