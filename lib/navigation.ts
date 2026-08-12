// Single source of truth for site navigation. Used by the desktop nav, the
// mobile accordion nav, the footer, and the sitemap — so a route added here
// is automatically linked from every surface (no orphan pages).

export type NavItem = {
  label: string;
  href: string;
  /** Short line used in the desktop dropdown panels. */
  description?: string;
  children?: NavItem[];
};

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Case Studies", href: "/case-studies" },
  {
    label: "Services",
    href: "/services",
    children: [
      {
        label: "SEO",
        href: "/services/seo",
        description: "My primary specialization",
        children: [
          {
            label: "Technical SEO",
            href: "/services/seo/technical-seo",
            description: "Crawlability, indexing, site health",
          },
          {
            label: "On-Page SEO",
            href: "/services/seo/on-page-seo",
            description: "Keywords, content, internal linking",
          },
          {
            label: "Off-Page SEO",
            href: "/services/seo/off-page-seo",
            description: "Link building, citations, authority",
          },
          {
            label: "Local SEO",
            href: "/services/seo/local-seo",
            description: "Google Business Profile & map pack",
          },
          {
            label: "AI Search Optimization",
            href: "/services/seo/ai-search-optimization",
            description: "AIO, AEO & GEO",
            children: [
              { label: "AIO", href: "/services/seo/ai-search-optimization#aio" },
              { label: "AEO", href: "/services/seo/ai-search-optimization#aeo" },
              { label: "GEO", href: "/services/seo/ai-search-optimization#geo" },
            ],
          },
        ],
      },
      {
        label: "Paid Ads",
        href: "/services/paid-ads",
        description: "Google Ads training & campaign skills",
      },
      {
        label: "Meta Ads",
        href: "/services/meta-ads",
        description: "Facebook & Instagram ads management",
      },
      {
        label: "Social Media Management",
        href: "/services/social-media-management",
        description: "Profile management & content cadence",
      },
      {
        label: "Email Marketing",
        href: "/services/email-marketing",
        description: "Retention and nurture campaigns",
      },
    ],
  },
  { label: "Certifications", href: "/certifications" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

/**
 * Routes that stay in the navigation and stay reachable, but are excluded from
 * search indexes for now: the portfolio does not yet contain first-hand
 * experience or case-study content strong enough to justify them as landing
 * pages. `follow` is kept on, so link equity still flows through to the pages
 * they point at. Remove a path from this list to switch it back to
 * index, follow once real portfolio content has been added.
 */
export const noindexPaths: string[] = [
  "/services/social-media-management",
  "/services/email-marketing",
];

/** Metadata `robots` value for the routes listed in `noindexPaths`. */
export const noindexRobots = {
  index: false,
  follow: true,
  googleBot: {
    index: false,
    follow: true,
  },
} as const;

/** Flattened list of every real route in the nav (anchors excluded). */
export function flattenNav(items: NavItem[] = mainNav): string[] {
  return items.flatMap((item) => [
    ...(item.href.includes("#") ? [] : [item.href]),
    ...(item.children ? flattenNav(item.children) : []),
  ]);
}

/** Top-level links used in the footer "Navigate" column. */
export const footerNav = mainNav.map(({ label, href }) => ({ label, href }));

/** The service links used in the footer "Services" column. */
export const footerServiceNav =
  mainNav
    .find((item) => item.href === "/services")
    ?.children?.map(({ label, href }) => ({ label, href })) ?? [];
