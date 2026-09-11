import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CapabilityPage } from "@/components/CapabilityPage";
import { capabilityPageBySlug, capabilityPages } from "@/lib/capabilities";

type CapabilityRouteProps = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return capabilityPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: CapabilityRouteProps): Promise<Metadata> {
  const { slug } = params;
  const page = capabilityPageBySlug.get(slug);

  if (!page) {
    return { title: "Not Found" };
  }

  return {
    title: page.title,
    description: page.metadataDescription,
    alternates: { canonical: `/capabilities/${page.slug}` },
  };
}

export default async function CapabilityRoutePage({ params }: CapabilityRouteProps) {
  const { slug } = params;
  const page = capabilityPageBySlug.get(slug);

  if (!page) {
    notFound();
  }

  return <CapabilityPage page={page} />;
}
