import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { ServicePage } from "@/components/service-page";
import { jsonLdScript, serviceSchema } from "@/lib/schema";

const description =
  "Off-page SEO services: guest post link building, directory and Web 2.0 backlinks, local citation building, and outreach that grows website authority and topical relevance.";

export const metadata: Metadata = {
  title: "Off-Page SEO Services — Link Building, Citations & Authority",
  description,
  alternates: { canonical: "/services/seo/off-page-seo" },
  openGraph: {
    type: "website",
    url: "/services/seo/off-page-seo",
    title: "Off-Page SEO Services — Link Building, Citations & Authority",
    description,
  },
};

export default function OffPageSeoPage() {
  return (
    <>
      <main id="main-content">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLdScript(
            serviceSchema({
              name: "Off-Page SEO",
              description,
              path: "/services/seo/off-page-seo",
            })
          )}
        />

        <ServicePage
          eyebrow="Off-Page SEO"
          title="The signals that decide how far your on-page work can carry you."
          intro="Link building and citation building to grow authority, trustworthiness, and brand authority. Off-page work compounds slowly and unevenly, so it's run as a steady programme rather than a campaign with a promised end date."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: "SEO", href: "/services/seo" },
            { label: "Off-Page SEO", href: "/services/seo/off-page-seo" },
          ]}
          blocks={[
            {
              heading: "Link building",
              body: "Building relevant backlinks through the channels that have worked consistently across my client accounts, with guest posting as the mainstay.",
              bullets: [
                "Guest post link building",
                "Directory submissions",
                "Web 2.0 backlinks",
                "Ongoing link building cadence",
              ],
            },
            {
              heading: "Local citations",
              body: "Consistent business listings across directories — one of the most reliable off-page signals for any business with a physical location or service area.",
              bullets: [
                "Local citation building across directories",
                "NAP consistency auditing and correction",
                "Citation maintenance over time",
              ],
            },
            {
              heading: "Website and brand authority",
              body: "Off-page work isn't only about links. Building topical and brand authority makes every other signal on the site more credible.",
              bullets: [
                "Topical authority development",
                "Brand authority across referring sources",
                "Trustworthiness signals",
              ],
            },
            {
              heading: "Outreach",
              body: "Outreach is used where it fits the client and the vertical — placement conversations, guest post pitches, and relationship building with relevant sites.",
              bullets: [
                "Guest post outreach and placement",
                "Relevance-first target selection",
              ],
            },
            {
              heading: "Off-page for AI search",
              body: "Entity signals and structured data extend off-page work into AI-powered search, where citations and mentions matter alongside traditional links.",
              bullets: [
                "Entity signals and structured data",
                "Off-page opportunities in AI search optimization",
              ],
            },
            {
              heading: "What I won't promise",
              body: "Off-page results depend on the vertical, the domain's history, and competitors doing the same work. I report what actually moved rather than forecasting link counts into rankings.",
              bullets: [
                "No guaranteed placement volumes",
                "No guaranteed ranking positions",
                "Reporting on what was built and what changed",
              ],
              note: "Off-page SEO produces uneven, delayed results by nature. Any specialist promising fixed ranking outcomes from link building is guessing.",
            },
          ]}
          related={[
            {
              label: "Local SEO",
              href: "/services/seo/local-seo",
              description: "Where citations and off-page work overlap most.",
            },
            {
              label: "Case studies",
              href: "/case-studies",
              description: "Link building and citation work on real accounts.",
            },
            {
              label: "All SEO services",
              href: "/services/seo",
              description: "How off-page fits the wider engagement.",
            },
          ]}
        />
      </main>
      <Footer />
    </>
  );
}
