import Link from "next/link";
import { DocsList } from "@/components/docs/DocsList";
import { DocsListControls } from "@/components/docs/DocsListControls";
import type { DocsBreadcrumb, DocsPage, DocsSidebarItem } from "@/lib/docs";
import { DocsCallout } from "@/components/docs/DocsCallout";
import { DocsHeading } from "@/components/docs/DocsHeading";
import { DocsToc } from "@/components/docs/DocsToc";

type DocsPageFrameProps = {
  page: DocsPage;
  breadcrumbs: DocsBreadcrumb[];
  previous?: DocsSidebarItem;
  next?: DocsSidebarItem;
};

export function DocsPageFrame({ page, breadcrumbs, previous, next }: DocsPageFrameProps) {
  const articleId = `docs-page-${page.href.replace(/[^a-z0-9]+/gi, "-").replace(/^-|-$/g, "").toLowerCase()}`;
  const hasCollapsibleLists = page.headings.some(
    (heading) =>
      Boolean(heading.steps?.length) ||
      Boolean(heading.bullets?.length) ||
      Boolean(heading.links?.length),
  );

  return (
    <div className="docs-page-shell">
      <article id={articleId} className="docs-article" data-docs-collapsible-root="true">
        <nav className="docs-breadcrumbs" aria-label="Breadcrumb">
          <ol>
            {breadcrumbs.map((crumb, index) => {
              const isLast = index === breadcrumbs.length - 1;

              return (
                <li key={crumb.href}>
                  {isLast ? <span aria-current="page">{crumb.title}</span> : <Link href={crumb.href}>{crumb.title}</Link>}
                </li>
              );
            })}
          </ol>
        </nav>

        <h1 className="docs-page-title">{page.title}</h1>
        <p className="lead">{page.description}</p>
        <div className="docs-page-meta" aria-label="Page update and compatibility metadata">
          <p>
            <strong>Last updated:</strong> {page.lastUpdated}
          </p>
          <p>
            <strong>Compatibility window:</strong> {page.compatibilityWindow}
          </p>
        </div>

        <DocsCallout variant={page.calloutVariant} title={page.calloutTitle}>
          {page.calloutBody}
        </DocsCallout>

        {hasCollapsibleLists ? <DocsListControls rootId={articleId} /> : null}

        {page.headings.map((heading) => (
          <section key={heading.id} className="docs-section-block">
            <DocsHeading id={heading.id}>{heading.title}</DocsHeading>
            {heading.audience && heading.audience.length > 0 ? (
              <ul
                className="docs-audience-tags"
                aria-label={`Audience tags: ${heading.audience.join(", ")}`}
              >
                {heading.audience.map((audience) => (
                  <li key={`${heading.id}-${audience}`}>{audience}</li>
                ))}
              </ul>
            ) : null}
            {heading.body ? <p>{heading.body}</p> : null}
            {heading.steps && heading.steps.length > 0 ? (
              <DocsList items={heading.steps} ordered />
            ) : null}
            {heading.bullets && heading.bullets.length > 0 ? (
              <DocsList items={heading.bullets} />
            ) : null}
            {heading.links && heading.links.length > 0 ? (
              <DocsList items={heading.links} mode="links" />
            ) : null}
          </section>
        ))}

        <nav className="docs-pager" aria-label="Previous and next documentation pages">
          {previous ? (
            <Link href={previous.href} className="docs-pager-link">
              <span>Previous</span>
              <strong>{previous.title}</strong>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link href={next.href} className="docs-pager-link docs-pager-link-next">
              <span>Next</span>
              <strong>{next.title}</strong>
            </Link>
          ) : (
            <span />
          )}
        </nav>
      </article>

      <aside className="docs-right-rail">
        <DocsToc items={page.headings.map((heading) => ({ id: heading.id, title: heading.title }))} />
      </aside>
    </div>
  );
}
