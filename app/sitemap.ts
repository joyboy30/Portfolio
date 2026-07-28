import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

const pages = [
  "",
  "/blog",
  "/blog/category/google-algorithm-updates",
  "/blog/category/local-seo",
  "/blog/category/technical-seo",
  "/blog/category/ai-search-optimization",
  "/blog/category/content-marketing",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((page) => ({
    url: `${siteConfig.url}${page}`,
    lastModified: new Date(),
    changeFrequency: page === "" ? "monthly" : "weekly",
    priority: page === "" ? 1 : 0.8,
  }));
}