import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { ServicePage } from "@/components/service-page";
import { jsonLdScript, serviceSchema } from "@/lib/schema";

const description =
  "Local SEO services: Google Business Profile optimization and posting, NAP consistency, local citations, local keyword research, location pages and map pack visibility.";

export const metadata: Metadata = {
  title: "Local SEO Services — Google Business Profile & Map Pack",
  description,
  alternates: { canonical: "/services/seo/local-seo" },
  openGraph: {
    type: "website",
    url: "/services/seo/local-seo",
    title: "Local SEO Services — Google Business Profile & Map Pack",
    description,
  },
};

export default function LocalSeoPage() {
  return (
    <>
      <main id="main-content">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLdScript(
            serviceSchema({
              name: "Local SEO",
              description,
              path: "/services/seo/local-seo",
            })
          )}
        />

        <ServicePage
          eyebrow="Local SEO"
          title="Being found by the people already searching nearby."
          intro="Most local searches — 'dentist near me', 'best Italian restaurant in [city]' — carry strong buying intent and happen on mobile, which means a business absent from local results is effectively invisible to customers actively looking to buy."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: "SEO", href: "/services/seo" },
            { label: "Local SEO", href: "/services/seo/local-seo" },
          ]}
          blocks={[
            {
              heading: "Google Business Profile management",
              body: "Full GBP management rather than a one-time setup — the profile is treated as an active channel, because Google rewards ongoing activity.",
              bullets: [
                "Categories and subcategories",
                "Products and services listings",
                "Regular Google Business Profile posting",
                "Profile optimization and upkeep",
              ],
            },
            {
              heading: "NAP consistency and local citations",
              body: "Consistent business details across directories, corrected where they've drifted. Inconsistent listings are one of the most common and most fixable local ranking problems.",
              bullets: [
                "NAP consistency auditing across directories",
                "Local citation building",
                "Correcting conflicting or outdated listings",
              ],
            },
            {
              heading: "Local keyword research",
              body: "Finding how people in a specific area actually phrase what they're looking for, which is often not how the business describes itself.",
              bullets: [
                "Location-specific keyword research",
                "Search intent analysis for local queries",
                "Competitor analysis within the service area",
              ],
            },
            {
              heading: "Local landing pages",
              body: "Location-specific service pages that match real local search phrasing — the practical bridge between local keyword research and rankings.",
              bullets: [
                "Location-specific service pages",
                "Content matched to local search phrasing",
                "Internal linking from core service pages",
              ],
            },
            {
              heading: "Map pack visibility",
              body: "The map pack is where most local buying decisions start. GBP optimization, citations, and locally relevant content all feed it.",
              bullets: [
                "Map pack optimization through GBP and citations",
                "Local relevance signals",
                "Structured data and schema markup for local pages",
              ],
            },
            {
              heading: "Local SEO and AI search",
              body: "Local SEO increasingly overlaps with AI Search Optimization, since AI Overviews and generative answer engines pull heavily from Google Business Profile data and locally relevant content when answering 'best X near me' or 'who provides Y in [city]' style queries.",
              bullets: [
                "GBP data as an input to AI-generated answers",
                "Locally relevant content structured for answer engines",
              ],
              note: "For a dental client in Saint Bonifacius, MN, this kind of local optimization contributed to the practice appearing in both Google AI Overviews and ChatGPT-generated answers for queries like 'dentist in Saint Bonifacius, MN' and pricing-related local searches.",
            },
          ]}
          related={[
            {
              label: "AI Search Optimization",
              href: "/services/seo/ai-search-optimization",
              description: "Where local content meets AI-generated answers.",
            },
            {
              label: "Off-Page SEO",
              href: "/services/seo/off-page-seo",
              description: "Citations and authority building alongside local work.",
            },
            {
              label: "Case studies",
              href: "/case-studies",
              description: "Local SEO across dental and multi-location accounts.",
            },
          ]}
          ctaTitle="Want to show up in the map pack?"
          ctaDescription="Tell me your business name and service area and I'll take a look at how your profile and citations currently stand."
        />
      </main>
      <Footer />
    </>
  );
}
