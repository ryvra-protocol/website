import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DocsPageFrame } from "@/components/docs/DocsPageFrame";
import {
  getDocBreadcrumbs,
  getDocNeighbors,
  getDocPage,
  resolveDocHrefFromSlug,
} from "@/lib/docs";

type DocsRoutePageProps = {
  params: Promise<{ slug?: string[] }>;
};

export async function generateMetadata({ params }: DocsRoutePageProps): Promise<Metadata> {
  const { slug } = await params;
  const href = resolveDocHrefFromSlug(slug);
  const page = getDocPage(href);

  if (!page) {
    return {
      title: "Not Found",
      robots: { index: false, follow: false },
    };
  }

  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: page.href },
    openGraph: {
      title: page.title,
      description: page.description,
      url: `https://ryvra.org${page.href}`,
      type: "article",
    },
  };
}

export default async function DocsRoutePage({ params }: DocsRoutePageProps) {
  const { slug } = await params;
  const href = resolveDocHrefFromSlug(slug);
  const page = getDocPage(href);

  if (!page) {
    notFound();
  }

  const breadcrumbs = getDocBreadcrumbs(href);
  const { previous, next } = getDocNeighbors(href);

  return <DocsPageFrame page={page} breadcrumbs={breadcrumbs} previous={previous} next={next} />;
}
