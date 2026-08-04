import Link from "next/link";
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
  return (
    <div className="docs-page-shell">
      <article className="docs-article">
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

        <DocsCallout variant={page.calloutVariant} title="Part A scaffold notice">
          This page currently contains IA and layout scaffolding only. Full authored content is intentionally deferred to a later phase.
        </DocsCallout>

        {page.headings.map((heading) => (
          <section key={heading.id} className="docs-section-block">
            <DocsHeading id={heading.id}>{heading.title}</DocsHeading>
            <p>{heading.body}</p>
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
