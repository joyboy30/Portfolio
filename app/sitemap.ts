import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { flattenNav, noindexPaths } from "@/lib/navigation";

const blogPages = [
  "/blog/category/google-algorithm-updates",
  "/blog/category/local-seo",
  "/blog/category/technical-seo",
  "/blog/category/ai-search-optimization",
  "/blog/category/content-marketing",
];

/** Priority by depth: home first, then top-level pages, then nested services. */
function priorityFor(path: string) {
  if (path === "/") return 1;
  if (path === "/services/seo" || path === "/services" || path === "/contact") return 0.9;
  const depth = path.split("/").filter(Boolean).length;
  return depth >= 3 ? 0.7 : 0.8;
}

export default function sitemap(): MetadataRoute.Sitemap {
  // Every real route in the navigation, deduplicated, plus the blog categories.
  // Noindexed routes are omitted — a sitemap should only list URLs we actually
  // want indexed, even though those pages stay linked from the navigation.
  const navPaths = Array.from(new Set(flattenNav())).filter(
    (path) => !noindexPaths.includes(path)
  );
  const paths = Array.from(new Set([...navPaths, ...blogPages]));

  return paths.map((path) => ({
    url: `${siteConfig.url}${path === "/" ? "" : path}`,
    lastModified: new Date(),
    changeFrequency: path.startsWith("/blog") ? "weekly" : "monthly",
    priority: priorityFor(path),
  }));
}
