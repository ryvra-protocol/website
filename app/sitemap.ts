import type { MetadataRoute } from "next";
import { docsPageOrder } from "@/lib/docs";

const baseUrl = "https://ryvra.org";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/brand",
    "/build",
    "/litepaper",
    "/team",
    "/privacy",
    "/terms",
    ...docsPageOrder,
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
