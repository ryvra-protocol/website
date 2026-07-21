import type { MetadataRoute } from "next";

const baseUrl = "https://ryvra.org";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/docs", "/litepaper", "/build"];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
