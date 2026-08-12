import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { ServicePage } from "@/components/service-page";
import { jsonLdScript, serviceSchema } from "@/lib/schema";
import { noindexRobots } from "@/lib/navigation";

const description =
  "Email marketing as the retention layer around SEO and paid campaigns. Discussed on request as part of a wider digital marketing engagement.";

export const metadata: Metadata = {
  title: "Email Marketing — Retention Around Search & Paid Campaigns",
  description,
  alternates: { canonical: "/services/email-marketing" },
  // noindex, follow: this page is intentionally reachable through the
  // Services navigation, but is held back from search indexes until it
  // carries first-hand portfolio content. Switch to index, follow by
  // removing this route from `noindexPaths` in lib/navigation.ts.
  robots: noindexRobots,
  openGraph: {
    type: "website",
    url: "/services/email-marketing",
    title: "Email Marketing — Retention Around Search & Paid Campaigns",
    description,
  },
};

export default function EmailMarketingPage() {
  return (
    <>
      <main id="main-content">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLdScript(
            serviceSchema({
              name: "Email Marketing",
              description,
              path: "/services/email-marketing",
            })
          )}
        />

        <ServicePage
          eyebrow="Email Marketing"
          title="The retention layer around search and paid."
          intro="SEO and paid campaigns bring people in; email is what keeps them engaged after the first visit. This is an area I'm available to discuss as part of a wider engagement rather than one I'm presenting a track record in."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: "Email Marketing", href: "/services/email-marketing" },
          ]}
          blocks={[
            {
              heading: "Being straight about this one",
              body: "I'd rather tell you where the edge of my documented experience is than pad this page. My portfolio records SEO client work, plus formal training in Google Ads and Meta Ads. It doesn't record email marketing client engagements or certifications.",
              bullets: [
                "No documented email marketing client work in this portfolio",
                "No email marketing certification listed",
                "Available to discuss as part of a broader engagement",
              ],
              note: "If email is your primary need, a specialist who does it daily will serve you better. If it's one part of a wider search and paid engagement, let's talk about scope.",
            },
            {
              heading: "Where it fits with the rest",
              body: "Email works best when it's fed by the same audience and intent research that drives search and paid work — which is the part I do bring.",
              bullets: [
                "Audience and search intent research",
                "Sales funnel structure",
                "AI-assisted content and creative production",
              ],
            },
          ]}
          related={[
            {
              label: "SEO services",
              href: "/services/seo",
              description: "My primary specialization and documented experience.",
            },
            {
              label: "Paid Ads",
              href: "/services/paid-ads",
              description: "Google Ads campaign work.",
            },
            {
              label: "Contact",
              href: "/contact",
              description: "Tell me your scope and I'll give you an honest answer.",
            },
          ]}
          ctaTitle="Have an email project in mind?"
          ctaDescription="Tell me what you're trying to do. If it's outside what I can deliver well, I'll say so."
        />
      </main>
      <Footer />
    </>
  );
}
