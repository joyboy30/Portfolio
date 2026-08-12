import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { ServicePage } from "@/components/service-page";
import { jsonLdScript, serviceSchema } from "@/lib/schema";

const description =
  "Technical SEO audits covering crawlability, indexation, XML sitemaps, robots.txt, canonical tags, redirects, broken links, structured data, site architecture and Core Web Vitals.";

export const metadata: Metadata = {
  title: "Technical SEO Services — Audits, Crawlability & Core Web Vitals",
  description,
  alternates: { canonical: "/services/seo/technical-seo" },
  openGraph: {
    type: "website",
    url: "/services/seo/technical-seo",
    title: "Technical SEO Services — Audits, Crawlability & Core Web Vitals",
    description,
  },
};

export default function TechnicalSeoPage() {
  return (
    <>
      <main id="main-content">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLdScript(
            serviceSchema({
              name: "Technical SEO",
              description,
              path: "/services/seo/technical-seo",
            })
          )}
        />

        <ServicePage
          eyebrow="Technical SEO"
          title="The infrastructure your rankings are built on."
          intro="My background is in computer programming and hardware servicing, which is why I don't just run SEO checklists — I understand the systems underneath them: site architecture, crawlability, indexability, page speed, and how search engines actually discover and rank a website."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: "SEO", href: "/services/seo" },
            { label: "Technical SEO", href: "/services/seo/technical-seo" },
          ]}
          blocks={[
            {
              heading: "Technical SEO audits",
              body: "A full diagnosis of your site's indexing, crawlability, speed, structure, and Core Web Vitals — delivered as a prioritized action plan rather than an undifferentiated list of problems.",
              bullets: [
                "Full site crawl and technical health review",
                "Prioritized fix list ordered by impact",
                "Ongoing technical SEO troubleshooting",
              ],
            },
            {
              heading: "Crawling and indexation",
              body: "Making sure search engines can reach, understand, and index the pages that matter — and aren't wasting crawl budget on the ones that don't.",
              bullets: [
                "Indexing and reindexing management",
                "robots.txt disallow rules for crawl control",
                "Canonical tags to resolve duplicate paths",
                "XML sitemap submission and monitoring",
              ],
            },
            {
              heading: "Broken links, 404s and redirects",
              body: "Recurring crawl errors quietly bleed authority and frustrate visitors. Auditing and repairing them is standard practice on every account I run.",
              bullets: [
                "Broken internal link audits and repair",
                "404 error diagnosis and resolution",
                "301 redirects, including for content consolidation",
                "Keyword cannibalization cleanup",
              ],
            },
            {
              heading: "Structured data and site architecture",
              body: "Clean, crawlable site architecture plus schema markup that helps search engines and AI answer engines understand what each page actually is.",
              bullets: [
                "Structured data and schema markup implementation",
                "FAQ schema validation and repair",
                "SEO-friendly site architecture",
                "Internal linking for crawl paths",
              ],
            },
            {
              heading: "Core Web Vitals and page speed",
              body: "Mobile-first performance work targeting the speed and stability signals that affect both ranking and conversion.",
              bullets: [
                "Core Web Vitals measurement and improvement",
                "Mobile-first page speed optimization",
                "Performance monitoring over time",
              ],
            },
            {
              heading: "Measurement setup",
              body: "Technical work is only worth doing if you can see what it changed, so Search Console and analytics are wired up from the start.",
              bullets: [
                "Google Search Console setup and monitoring",
                "Google Analytics 4 configuration",
                "Crawl error and index coverage tracking",
              ],
            },
          ]}
          related={[
            {
              label: "On-Page SEO",
              href: "/services/seo/on-page-seo",
              description: "Once the foundation is sound, content does the ranking.",
            },
            {
              label: "Case studies",
              href: "/case-studies",
              description: "Technical fixes applied across multi-industry accounts.",
            },
            {
              label: "All SEO services",
              href: "/services/seo",
              description: "How technical work fits the wider SEO engagement.",
            },
          ]}
          ctaTitle="Not sure what's holding your site back?"
          ctaDescription="A technical audit is usually the fastest way to find out. Send me your domain and I'll tell you what I'd look at first."
        />
      </main>
      <Footer />
    </>
  );
}
