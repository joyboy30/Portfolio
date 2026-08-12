import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { ServicePage } from "@/components/service-page";
import { jsonLdScript, serviceSchema } from "@/lib/schema";

const description =
  "Technical SEO, on-page SEO, off-page SEO, local SEO and AI Search Optimization delivered by a dedicated specialist — audits, fixes, content and reporting owned end to end.";

export const metadata: Metadata = {
  title: "SEO Services — Technical, On-Page, Off-Page, Local & AI Search",
  description,
  alternates: { canonical: "/services/seo" },
  openGraph: {
    type: "website",
    url: "/services/seo",
    title: "SEO Services — Technical, On-Page, Off-Page, Local & AI Search",
    description,
  },
};

export default function SeoServicePage() {
  return (
    <>
      <main id="main-content">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLdScript(
            serviceSchema({
              name: "Search Engine Optimization",
              description,
              path: "/services/seo",
            })
          )}
        />

        <ServicePage
          eyebrow="SEO"
          title="SEO is my main specialization — and where my documented results come from."
          intro="Ongoing, hands-on SEO management and technical SEO consultancy for businesses that want a dedicated freelance SEO specialist rather than a rotating agency team. Every engagement covers the five areas below, weighted to whatever the site actually needs."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: "SEO", href: "/services/seo" },
          ]}
          blocks={[
            {
              heading: "Technical SEO",
              body: "A full technical SEO audit and diagnosis of your site's indexing, crawlability, speed, structure, and Core Web Vitals — with a prioritized action plan, not just a list of problems.",
              bullets: [
                "Crawlability and indexation diagnosis",
                "Broken links, 404 errors and redirect handling",
                "robots.txt, canonical tags and XML sitemaps",
                "Core Web Vitals and mobile-first page speed",
              ],
            },
            {
              heading: "On-Page SEO",
              body: "Keyword research and on-page SEO techniques that align your pages with real search intent — titles, meta descriptions, headings, internal linking, and schema markup.",
              bullets: [
                "Keyword research, mapping and topic clusters",
                "Title tags, meta descriptions and heading structure",
                "Content optimization against search intent",
                "Internal linking and SEO-friendly URLs",
              ],
            },
            {
              heading: "Off-Page SEO",
              body: "Link building and citation building to grow authority, trustworthiness, and brand authority — the off-site signals that decide how far on-page work can carry a domain.",
              bullets: [
                "Guest post and directory link building",
                "Local citation building and NAP consistency",
                "Web 2.0 backlinks and outreach",
                "Topical and brand authority development",
              ],
            },
            {
              heading: "Local SEO",
              body: "Full local SEO services — NAP consistency, categories, products/services, GBP posting, and local citation building to win the map pack for local businesses, dental clinics, and real estate teams alike.",
              bullets: [
                "Google Business Profile optimization and posting",
                "Categories, subcategories, products and services",
                "Local keyword research and location-specific pages",
                "Local citations across directories",
              ],
            },
            {
              heading: "AI Search Optimization",
              body: "Positioning your content to be found and cited by AI Overviews, generative AI, and AI answer engines — the layer traditional search engine optimization alone doesn't cover, including entity optimization and AI citation optimization.",
              bullets: [
                "AIO — structuring content for AI-driven discovery",
                "AEO — formatting content to answer queries directly",
                "GEO — entity relationships for AI-generated citations",
                "Structured data and FAQ schema implementation",
              ],
            },
            {
              heading: "Ongoing SEO management",
              body: "Professional SEO services built around transparent, accountable execution: consistent monthly work, clear reporting, and one point of contact who actually knows the account.",
              bullets: [
                "Consistent monthly SEO execution",
                "Transparent reporting on rankings and organic traffic",
                "Performance monitoring and strategy iteration",
                "One accountable point of contact",
              ],
            },
          ]}
          related={[
            {
              label: "Technical SEO",
              href: "/services/seo/technical-seo",
              description: "Audits, crawlability, indexation and Core Web Vitals.",
            },
            {
              label: "On-Page SEO",
              href: "/services/seo/on-page-seo",
              description: "Keywords, content optimization and internal linking.",
            },
            {
              label: "Off-Page SEO",
              href: "/services/seo/off-page-seo",
              description: "Link building, citations and website authority.",
            },
            {
              label: "Local SEO",
              href: "/services/seo/local-seo",
              description: "Google Business Profile and map pack visibility.",
            },
            {
              label: "AI Search Optimization",
              href: "/services/seo/ai-search-optimization",
              description: "AIO, AEO and GEO for AI-powered search.",
            },
            {
              label: "Case studies",
              href: "/case-studies",
              description: "The strategies above, applied to real client accounts.",
            },
          ]}
        />
      </main>
      <Footer />
    </>
  );
}
