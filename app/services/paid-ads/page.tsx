import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { ServicePage } from "@/components/service-page";
import { jsonLdScript, serviceSchema } from "@/lib/schema";

const description =
  "Google Ads and paid search campaign work — Ads Manager setup, audience targeting, budgeting, split testing, retargeting and scaling, backed by formal Google Ads training.";

export const metadata: Metadata = {
  title: "Paid Ads Services — Google Ads Campaign Management",
  description,
  alternates: { canonical: "/services/paid-ads" },
  openGraph: {
    type: "website",
    url: "/services/paid-ads",
    title: "Paid Ads Services — Google Ads Campaign Management",
    description,
  },
};

export default function PaidAdsPage() {
  return (
    <>
      <main id="main-content">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLdScript(
            serviceSchema({
              name: "Paid Ads Management",
              description,
              path: "/services/paid-ads",
            })
          )}
        />

        <ServicePage
          eyebrow="Paid Ads"
          title="Paid search that complements organic instead of competing with it."
          intro="Beyond organic search, I run Google Ads campaigns end-to-end — audience research, ad creative, budgeting, retargeting, and scaling — so I can speak to both organic search visibility and paid lead generation in the same conversation."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: "Paid Ads", href: "/services/paid-ads" },
          ]}
          blocks={[
            {
              heading: "Where this sits in my background",
              body: "Being straight about the basis for this service: my documented client results in this portfolio come from SEO engagements. Paid ads rest on formal training and campaign skills rather than a listed paid-media client account.",
              bullets: [
                "Google Ads Training — Inspired Filipino Freelancers, September 2023",
                "Two-day training within a Virtual Assistant Skills Enhancement Program",
                "Paid media skills applied alongside SEO work",
              ],
              note: "Training and skills, not a documented standalone paid-ads client engagement. See the case studies for where my recorded client results actually come from.",
            },
            {
              heading: "Campaign setup",
              body: "Getting the account structure right first, because a badly structured account makes every later optimization harder than it needs to be.",
              bullets: [
                "Ads Manager setup",
                "Campaign structure and campaign types",
                "Conversion tracking alignment with GA4",
              ],
            },
            {
              heading: "Audiences and retargeting",
              body: "Reaching the people most likely to convert, and staying in front of the ones who came close.",
              bullets: [
                "Audience research and targeting",
                "Retargeting funnels",
                "Sales funnel structure",
              ],
            },
            {
              heading: "Budgeting, testing and scaling",
              body: "Campaign budgeting with deliberate split testing, so scaling decisions are based on evidence rather than instinct.",
              bullets: [
                "Campaign budgeting",
                "Split testing of creative and audiences",
                "Scaling what proves out",
              ],
            },
            {
              heading: "Ad creative",
              body: "Creative produced with AI-assisted design tools, which cuts turnaround time without sacrificing brand consistency.",
              bullets: [
                "AI ad creative using Gemini, ChatGPT and Canva",
                "Rapid concept testing before committing budget",
                "Visuals matched to brand and offer",
              ],
            },
            {
              heading: "Paid and organic together",
              body: "The main advantage of one specialist covering both: paid data informs which keywords are worth pursuing organically, and organic coverage tells you where paid spend is redundant.",
              bullets: [
                "Keyword insight shared across paid and organic",
                "Coordinated landing page optimization",
                "Conversion optimization built into strategy",
              ],
            },
          ]}
          related={[
            {
              label: "Meta Ads",
              href: "/services/meta-ads",
              description: "Facebook and Instagram campaign work.",
            },
            {
              label: "SEO services",
              href: "/services/seo",
              description: "Where my documented client results come from.",
            },
            {
              label: "Certifications",
              href: "/certifications",
              description: "The Google Ads training behind this service.",
            },
          ]}
        />
      </main>
      <Footer />
    </>
  );
}
