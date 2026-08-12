import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { ServicePage } from "@/components/service-page";
import { jsonLdScript, serviceSchema } from "@/lib/schema";

const description =
  "Meta Ads campaign work across Facebook and Instagram — Ads Manager setup, campaign types, budgeting, split testing, scaling and retargeting, backed by formal Facebook Ads training.";

export const metadata: Metadata = {
  title: "Meta Ads Services — Facebook & Instagram Campaign Management",
  description,
  alternates: { canonical: "/services/meta-ads" },
  openGraph: {
    type: "website",
    url: "/services/meta-ads",
    title: "Meta Ads Services — Facebook & Instagram Campaign Management",
    description,
  },
};

export default function MetaAdsPage() {
  return (
    <>
      <main id="main-content">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLdScript(
            serviceSchema({
              name: "Meta Ads Management",
              description,
              path: "/services/meta-ads",
            })
          )}
        />

        <ServicePage
          eyebrow="Meta Ads"
          title="Facebook and Instagram campaigns built around lead generation."
          intro="Meta Ads work covering Ads Manager setup, campaign structure, budgeting, split testing, scaling, and retargeting — the same full-funnel thinking I bring to search, applied to paid social."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: "Meta Ads", href: "/services/meta-ads" },
          ]}
          blocks={[
            {
              heading: "Where this sits in my background",
              body: "As with paid search, this is worth stating plainly: Meta Ads rests on formal training and campaign skills. The client results documented in this portfolio come from SEO engagements.",
              bullets: [
                "Facebook Ads Management — ProVA Virtual Assistant, November 2023",
                "Covered ads structure, Ads Manager, campaign types, budgeting, split testing/scaling and retargeting",
                "Paid media skills applied alongside SEO work",
              ],
              note: "Training and skills, not a documented standalone Meta Ads client engagement.",
            },
            {
              heading: "Ads Manager and campaign structure",
              body: "Account and campaign architecture set up so results stay readable as the account grows.",
              bullets: [
                "Meta Ads Manager setup",
                "Campaign types matched to the objective",
                "Ads structure and naming discipline",
              ],
            },
            {
              heading: "Audiences and retargeting",
              body: "Audience construction and retargeting sequences aimed at lead generation rather than reach for its own sake.",
              bullets: [
                "Audience research and targeting",
                "Retargeting for lead generation",
                "Sales funnel design",
              ],
            },
            {
              heading: "Budgeting, split testing and scaling",
              body: "Structured testing before scaling, so budget increases follow evidence.",
              bullets: [
                "Campaign budgeting",
                "Split testing creative and audiences",
                "Scaling proven campaigns",
              ],
            },
            {
              heading: "Creative production",
              body: "Scroll-stopping ad visuals produced with generative AI tools, cutting creative turnaround without sacrificing brand consistency.",
              bullets: [
                "AI ad creative with Gemini, ChatGPT and Canva",
                "Rapid concept testing before a full shoot",
                "Graphic design support",
              ],
            },
            {
              heading: "Reporting",
              body: "Transparent reporting on what ran, what it cost, and what it returned — the same standard applied to my SEO accounts.",
              bullets: [
                "Clear campaign reporting",
                "Cost per lead tracked over time",
                "Honest read on what isn't working",
              ],
            },
          ]}
          related={[
            {
              label: "Paid Ads",
              href: "/services/paid-ads",
              description: "Google Ads and paid search campaign work.",
            },
            {
              label: "Certifications",
              href: "/certifications",
              description: "The Facebook Ads training behind this service.",
            },
            {
              label: "SEO services",
              href: "/services/seo",
              description: "My primary specialization.",
            },
          ]}
        />
      </main>
      <Footer />
    </>
  );
}
