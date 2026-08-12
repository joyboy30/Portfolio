// Service catalogue for /services and the Services dropdown cards.
//
// Every description here is drawn from content that already existed in the
// portfolio (lib/data.ts skills, services, experience and certifications).
// `evidence` records what the portfolio actually supports for each service so
// training is never presented as client experience.

export type ServiceCatalogItem = {
  slug: string;
  title: string;
  href: string;
  icon: string;
  summary: string;
  bullets: string[];
  /** SEO is the primary specialization and renders as the lead card. */
  primary?: boolean;
  /** Short, honest note on the basis for the service. */
  basis: string;
};

export const serviceCatalog: ServiceCatalogItem[] = [
  {
    slug: "seo",
    title: "SEO",
    href: "/services/seo",
    icon: "SearchCheck",
    primary: true,
    summary:
      "My main professional specialization: technical SEO, on-page SEO, off-page SEO, local SEO, and AI Search Optimization — the full discipline, owned end to end rather than split across a rotating team.",
    bullets: [
      "Technical SEO audits, crawlability, indexability and Core Web Vitals",
      "Keyword research, content optimization and internal linking",
      "Link building, local citations and Google Business Profile management",
      "AI Search Optimization for AI Overviews and answer engines",
    ],
    basis: "Professional client experience across e-commerce, dental, real estate, business brokerage and iGaming accounts.",
  },
  {
    slug: "paid-ads",
    title: "Paid Ads",
    href: "/services/paid-ads",
    icon: "Target",
    summary:
      "Google Ads campaign work — Ads Manager setup, audience and creative testing, budgeting, retargeting, and scaling — built to complement organic search rather than compete with it.",
    bullets: [
      "Campaign structure, budgeting and split testing",
      "Audience targeting and retargeting funnels",
      "Ad creative produced with AI-assisted design tools",
    ],
    basis: "Formal training (Google Ads Training, Inspired Filipino Freelancers, September 2023) plus paid media skills.",
  },
  {
    slug: "meta-ads",
    title: "Meta Ads",
    href: "/services/meta-ads",
    icon: "Megaphone",
    summary:
      "Facebook and Instagram advertising through Meta Ads Manager — campaign types, budgeting, split testing, scaling, and retargeting for lead generation.",
    bullets: [
      "Ads Manager setup and campaign structure",
      "Split testing and scaling of winning campaigns",
      "Retargeting funnels aimed at lead generation",
    ],
    basis: "Formal training (Facebook Ads Management, ProVA Virtual Assistant, November 2023) plus paid media skills.",
  },
  {
    slug: "social-media-management",
    title: "Social Media Management",
    href: "/services/social-media-management",
    icon: "LayoutDashboard",
    summary:
      "Ongoing business profile management and content cadence — closest to the Google Business Profile posting and AI-assisted creative work already running inside my SEO engagements.",
    bullets: [
      "Google Business Profile posting and profile upkeep",
      "AI-assisted ad and post creative (Canva, Gemini, ChatGPT)",
      "Graphic design support for campaigns and blogs",
    ],
    basis: "Skills applied inside SEO engagements. No standalone social media management client engagement is documented in this portfolio.",
  },
  {
    slug: "email-marketing",
    title: "Email Marketing",
    href: "/services/email-marketing",
    icon: "Mail",
    summary:
      "Email as the retention layer around search and paid campaigns — keeping the leads that SEO and ads bring in engaged after the first visit.",
    bullets: [
      "Discussed on request as part of a wider marketing engagement",
    ],
    basis: "No email marketing client work or training is documented in this portfolio yet.",
  },
];

export const seoAreas = [
  {
    title: "Technical SEO",
    href: "/services/seo/technical-seo",
    description:
      "Crawlability, indexation, site architecture, Core Web Vitals, and the structural issues that cap a site's ceiling before content ever matters.",
  },
  {
    title: "On-Page SEO",
    href: "/services/seo/on-page-seo",
    description:
      "Keyword research and mapping, titles and meta descriptions, heading structure, content optimization, and internal linking aligned to search intent.",
  },
  {
    title: "Off-Page SEO",
    href: "/services/seo/off-page-seo",
    description:
      "Link building, local citations, directories, and outreach that build website authority and topical relevance over time.",
  },
  {
    title: "Local SEO",
    href: "/services/seo/local-seo",
    description:
      "Google Business Profile management, NAP consistency, local citations, and location-specific pages built to win the map pack.",
  },
  {
    title: "AI Search Optimization",
    href: "/services/seo/ai-search-optimization",
    description:
      "AIO, AEO and GEO — structuring content and entity signals so it stays visible inside AI Overviews and generative answer engines.",
  },
];
