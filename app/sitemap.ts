import type { MetadataRoute } from "next";
import { siteUpdatedAt } from "@/lib/content/site";
import { siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}/`,
      lastModified: siteUpdatedAt,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/products`,
      lastModified: siteUpdatedAt,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/contact`,
      lastModified: siteUpdatedAt,
      changeFrequency: "yearly",
      priority: 0.6,
    },
  ];
}
