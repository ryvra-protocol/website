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

const siteUrl = "https://ryvra.org";

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

  const metadataTitle = page.metadataTitle ?? page.title;
  const metadataDescription = page.metadataDescription ?? page.description;
  const canonicalUrl = `${siteUrl}${page.href}`;

  return {
    title: metadataTitle,
    description: metadataDescription,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: metadataTitle,
      description: metadataDescription,
      url: canonicalUrl,
      type: "article",
    },
    twitter: {
      card: "summary",
      title: metadataTitle,
      description: metadataDescription,
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
