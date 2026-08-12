import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { CTASection } from "@/components/cta-section";
import { CaseStudies } from "@/components/sections/case-studies";

export const metadata: Metadata = {
  title: "SEO Case Studies — Strategy, Implementation & Client Results",
  description:
    "Documented SEO case studies across e-commerce, iGaming, dental, and multi-industry agency accounts — the challenge, the strategy, the work done, and the recorded results.",
  alternates: { canonical: "/case-studies" },
  openGraph: {
    type: "website",
    url: "/case-studies",
    title: "SEO Case Studies — Strategy, Implementation & Client Results",
    description:
      "Documented SEO case studies across e-commerce, iGaming, dental, and multi-industry agency accounts.",
  },
};

export default function CaseStudiesPage() {
  return (
    <>
      <main id="main-content">
        <PageHero
          eyebrow="Case Studies"
          title="Real SEO problems, solved with a clear strategy."
          description="These case studies showcase real SEO projects, highlighting the strategies, implementation, and measurable results achieved through keyword research, on-page SEO, technical SEO, off-page SEO, content strategy, local SEO, and AI search optimization."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Case Studies", href: "/case-studies" },
          ]}
        />

        <CaseStudies showHeading={false} />

        <section className="pb-8">
          <div className="container-shell">
            <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
              The services behind this work
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted">
              The projects above draw on the same core disciplines:{" "}
              <Link href="/services/seo/technical-seo" className="link-underline text-accent-light">
                technical SEO audits and site health
              </Link>
              ,{" "}
              <Link href="/services/seo/on-page-seo" className="link-underline text-accent-light">
                on-page and content optimization
              </Link>
              ,{" "}
              <Link href="/services/seo/off-page-seo" className="link-underline text-accent-light">
                link building and citations
              </Link>
              ,{" "}
              <Link href="/services/seo/local-seo" className="link-underline text-accent-light">
                Google Business Profile and local search
              </Link>
              , and{" "}
              <Link
                href="/services/seo/ai-search-optimization"
                className="link-underline text-accent-light"
              >
                optimizing for AI Overviews and answer engines
              </Link>
              .
            </p>
          </div>
        </section>

        <CTASection
          title="Want results like these for your own site?"
          description="Send me your domain and the searches you want to win. I'll tell you honestly what's achievable and what it would take."
        />
      </main>
      <Footer />
    </>
  );
}
