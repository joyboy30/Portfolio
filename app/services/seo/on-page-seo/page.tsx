import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { ServicePage } from "@/components/service-page";
import { jsonLdScript, serviceSchema } from "@/lib/schema";

const description =
  "On-page SEO services: keyword research and mapping, title tags, meta descriptions, heading structure, content optimization, internal linking, image optimization and search intent alignment.";

export const metadata: Metadata = {
  title: "On-Page SEO Services — Keywords, Content & Internal Linking",
  description,
  alternates: { canonical: "/services/seo/on-page-seo" },
  openGraph: {
    type: "website",
    url: "/services/seo/on-page-seo",
    title: "On-Page SEO Services — Keywords, Content & Internal Linking",
    description,
  },
};

export default function OnPageSeoPage() {
  return (
    <>
      <main id="main-content">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLdScript(
            serviceSchema({
              name: "On-Page SEO",
              description,
              path: "/services/seo/on-page-seo",
            })
          )}
        />

        <ServicePage
          eyebrow="On-Page SEO"
          title="Pages that match how people actually search."
          intro="Keyword research and on-page SEO techniques that align your pages with real search intent — titles, meta descriptions, headings, internal linking, and schema markup, backed by an on-page SEO checklist refined across dozens of client accounts."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: "SEO", href: "/services/seo" },
            { label: "On-Page SEO", href: "/services/seo/on-page-seo" },
          ]}
          blocks={[
            {
              heading: "Keyword research and mapping",
              body: "Mapping real search demand to the pages that should rank for it, so two pages never compete for the same query and no valuable term is left without a home.",
              bullets: [
                "Keyword research and competitor analysis",
                "Keyword mapping across the site",
                "Topic clusters and content hubs",
                "Semantic keyword coverage",
              ],
            },
            {
              heading: "Titles and meta descriptions",
              body: "The part of your page most people see before they ever click. Written for the query behind the search, not just the keyword in it.",
              bullets: [
                "Meta title optimization across every page",
                "Meta description optimization for click-through",
                "SERP-facing consistency across templates",
              ],
            },
            {
              heading: "Heading structure and content",
              body: "Reoptimizing existing content for heading hierarchy, semantic keywords, and search intent — usually the highest-return work on an established site.",
              bullets: [
                "Heading hierarchy review and correction",
                "Content optimization against search intent",
                "Content structure for scannability",
                "Blog creation and content strategy",
              ],
            },
            {
              heading: "Internal linking",
              body: "Internal links are how authority moves through a site and how search engines discover depth. They're planned deliberately, not left to templates.",
              bullets: [
                "Internal linking aligned to keyword mapping",
                "Broken internal link repair",
                "Content consolidation with 301 redirects",
              ],
            },
            {
              heading: "URLs and images",
              body: "The smaller on-page signals that compound: clean URL structure and images that don't quietly slow the page down or go undescribed.",
              bullets: [
                "Clean, lowercase, hyphenated SEO-friendly URLs",
                "Image optimization for speed",
                "Descriptive alt text",
              ],
            },
            {
              heading: "Structured data",
              body: "Schema markup that helps search engines interpret the page and makes rich results and featured snippets possible.",
              bullets: [
                "Schema markup implementation",
                "FAQ schema for question-led content",
                "Structured data validation",
              ],
            },
          ]}
          related={[
            {
              label: "Technical SEO",
              href: "/services/seo/technical-seo",
              description: "The structural work that on-page optimization sits on.",
            },
            {
              label: "AI Search Optimization",
              href: "/services/seo/ai-search-optimization",
              description: "Structuring the same content for AI answer engines.",
            },
            {
              label: "Case studies",
              href: "/case-studies",
              description: "On-page work applied across client accounts.",
            },
          ]}
        />
      </main>
      <Footer />
    </>
  );
}
