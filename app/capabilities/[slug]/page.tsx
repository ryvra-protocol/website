import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CapabilityPage } from "@/components/CapabilityPage";
import { capabilityPageBySlug, capabilityPages } from "@/lib/capabilities";

export async function generateStaticParams() {
  return capabilityPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/capabilities/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const page = capabilityPageBySlug.get(slug);

  if (!page) {
    notFound();
  }

  return {
    title: page.title,
    description: page.metadataDescription,
    alternates: { canonical: `/capabilities/${page.slug}` },
  };
}

export default async function CapabilityRoutePage({
  params,
}: PageProps<"/capabilities/[slug]">) {
  const { slug } = await params;
  const page = capabilityPageBySlug.get(slug);

  if (!page) {
    notFound();
  }

  return <CapabilityPage page={page} />;
}
