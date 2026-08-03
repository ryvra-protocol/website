import type { MetadataRoute } from "next";

const baseUrl = "https://ryvra.org";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/build",
    "/litepaper",
    "/docs",
    "/docs/unified-assets",
    "/docs/erc-4337",
    "/docs/integrators-getting-started",
    "/docs/architecture",
    "/docs/apis",
    "/docs/operations",
    "/docs/reliability",
    "/docs/release-notes",
    "/docs/rfc-0001-aa-unified-assets",
    "/docs/tokenomics-faq",
    "/docs/brand-narrative",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
