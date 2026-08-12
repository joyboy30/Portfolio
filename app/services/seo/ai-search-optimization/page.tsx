import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { ServicePage } from "@/components/service-page";
import { jsonLdScript, serviceSchema } from "@/lib/schema";

const description =
  "AI Search Optimization covering AIO, AEO and GEO — structuring content, entity signals and structured data so it stays visible across Google AI Overviews and generative answer engines.";

export const metadata: Metadata = {
  title: "AI Search Optimization — AIO, AEO & GEO Services",
  description,
  alternates: { canonical: "/services/seo/ai-search-optimization" },
  openGraph: {
    type: "website",
    url: "/services/seo/ai-search-optimization",
    title: "AI Search Optimization — AIO, AEO & GEO Services",
    description,
  },
};

export default function AiSearchOptimizationPage() {
  return (
    <>
      <main id="main-content">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLdScript(
            serviceSchema({
              name: "AI Search Optimization",
              description,
              path: "/services/seo/ai-search-optimization",
            })
          )}
        />

        <ServicePage
          eyebrow="AI Search Optimization"
          title="Staying visible as search moves beyond the results page."
          intro="AI Search Optimization is the practice of structuring content — especially blogs — so it gets pulled into AI Overviews, AI-generated answers, and citations, not just traditional search rankings. AIO, AEO and GEO aren't three separate products; they're three angles on the same problem, and they overlap heavily with the technical and on-page work already underway on a site."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: "SEO", href: "/services/seo" },
            {
              label: "AI Search Optimization",
              href: "/services/seo/ai-search-optimization",
            },
          ]}
          blocks={[
            {
              id: "aio",
              heading: "AIO — AI Optimization",
              body: "Structuring content so AI systems can discover, parse and reuse it. This is the foundation layer: if a page isn't machine-legible, nothing downstream works.",
              bullets: [
                "Structuring blog content for AI-driven discovery",
                "LLM optimization of content structure",
                "Clear, extractable content hierarchy",
              ],
            },
            {
              id: "aeo",
              heading: "AEO — Answer Engine Optimization",
              body: "Formatting content to directly answer the question a user actually asked, which is what answer engines and featured snippets select for.",
              bullets: [
                "Formatting content to answer queries directly",
                "Winning featured snippets",
                "FAQ schema for question-led content",
                "Search intent matching at the section level",
              ],
            },
            {
              id: "geo",
              heading: "GEO — Generative Engine Optimization",
              body: "Optimizing content and entity relationships so a brand gets cited inside AI-generated responses rather than merely being crawled.",
              bullets: [
                "Entity optimization and relationship mapping",
                "AI citation optimization",
                "Structured data supporting entity signals",
              ],
            },
            {
              heading: "How the three fit together",
              body: "AIO makes content legible to AI systems, AEO makes it answer the question, and GEO makes the brand the entity that gets credited. In practice they're delivered as one workstream layered onto existing technical and on-page SEO — not as three separate engagements.",
              bullets: [
                "One workstream, not three separate services",
                "Built on existing technical and on-page foundations",
                "Applies to traditional search and AI search together",
              ],
            },
            {
              heading: "What this has produced",
              body: "This work is grounded in Google's Search Quality Evaluator Guidelines and applied across live client accounts, including content strategy and structured data work for a Northern Virginia real estate team.",
              bullets: [
                "Content optimized for AI Overviews and ChatGPT visibility",
                "FAQ schema validation and structured data repair",
                "Entity optimization across content clusters",
              ],
              note: "Client sites have appeared in Google AI Overviews and ChatGPT-generated answers for specific high-intent queries. That's a recorded outcome on particular searches, not a repeatable guarantee.",
            },
            {
              heading: "What can't be promised",
              body: "No one controls whether an AI system cites a given page. AI Overviews and generative answers change constantly, have no ranking report, and select sources by mechanisms the platforms don't publish.",
              bullets: [
                "No guaranteed AI Overview inclusion",
                "No guaranteed citation in generative answers",
                "No fixed timeline for AI search visibility",
              ],
              note: "Anyone selling guaranteed AI rankings is selling something they cannot deliver. What can be done is structuring content so it's eligible and well-positioned when these systems do select sources.",
            },
          ]}
          related={[
            {
              label: "On-Page SEO",
              href: "/services/seo/on-page-seo",
              description: "The content structure AI optimization builds on.",
            },
            {
              label: "Local SEO",
              href: "/services/seo/local-seo",
              description: "Local queries are heavily represented in AI answers.",
            },
            {
              label: "Blog",
              href: "/blog",
              description: "Articles on AI Overviews, ChatGPT Search and answer engines.",
            },
          ]}
          ctaTitle="Want to know if your content is AI-ready?"
          ctaDescription="Send me a few of your key pages and I'll tell you how they're currently structured for answer engines — and what I'd change first."
        />
      </main>
      <Footer />
    </>
  );
}
