import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { ServicePage } from "@/components/service-page";
import { jsonLdScript, serviceSchema } from "@/lib/schema";
import { noindexRobots } from "@/lib/navigation";

const description =
  "Business profile management and content cadence — Google Business Profile posting, AI-assisted creative, and graphic design support applied within ongoing SEO engagements.";

export const metadata: Metadata = {
  title: "Social Media Management — Profile Upkeep & Content Cadence",
  description,
  alternates: { canonical: "/services/social-media-management" },
  // noindex, follow: this page is intentionally reachable through the
  // Services navigation, but is held back from search indexes until it
  // carries first-hand portfolio content. Switch to index, follow by
  // removing this route from `noindexPaths` in lib/navigation.ts.
  robots: noindexRobots,
  openGraph: {
    type: "website",
    url: "/services/social-media-management",
    title: "Social Media Management — Profile Upkeep & Content Cadence",
    description,
  },
};

export default function SocialMediaManagementPage() {
  return (
    <>
      <main id="main-content">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLdScript(
            serviceSchema({
              name: "Social Media Management",
              description,
              path: "/services/social-media-management",
            })
          )}
        />

        <ServicePage
          eyebrow="Social Media Management"
          title="Profile upkeep and content cadence, run the way I run local SEO."
          intro="The profile management work I do today sits inside my SEO engagements: keeping Google Business Profiles active and posting consistently, and producing the creative that goes with them. That's the honest shape of this service right now."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            {
              label: "Social Media Management",
              href: "/services/social-media-management",
            },
          ]}
          blocks={[
            {
              heading: "What this is based on",
              body: "This portfolio doesn't document a standalone social media management client engagement. What it does document is ongoing profile management and creative production carried out as part of SEO work.",
              bullets: [
                "Google Business Profile posting on a regular cadence",
                "AI-assisted creative production for campaigns and blogs",
                "Graphic design support",
              ],
              note: "Skills applied within SEO engagements, not a separate social media client account. My documented client results come from SEO work — see the case studies.",
            },
            {
              heading: "Google Business Profile as a channel",
              body: "GBP is the profile I actively manage today, and it behaves much like a social channel: regular posts, current information, and consistent presentation all feed local visibility.",
              bullets: [
                "Regular GBP posting to maintain local engagement",
                "Categories, subcategories, products and services kept current",
                "Profile information consistency",
              ],
            },
            {
              heading: "Creative production",
              body: "The visual side is already part of my workflow — generative AI tools cut creative turnaround time without sacrificing brand consistency.",
              bullets: [
                "AI ad creative with Gemini, ChatGPT and Canva",
                "Image creative for blogs and ad campaigns",
                "Prompt-crafted visuals matched to brand and offer",
              ],
            },
            {
              heading: "How it connects to search",
              body: "Consistent profile activity and locally relevant content feed the same signals that local SEO depends on — including the Google Business Profile data that AI Overviews draw from when answering local queries.",
              bullets: [
                "Profile activity supporting local search visibility",
                "Content consistency across profiles and site",
              ],
            },
          ]}
          related={[
            {
              label: "Local SEO",
              href: "/services/seo/local-seo",
              description: "Where Google Business Profile management sits today.",
            },
            {
              label: "Meta Ads",
              href: "/services/meta-ads",
              description: "Paid social campaign work.",
            },
            {
              label: "Contact",
              href: "/contact",
              description: "Tell me what you need and I'll say if it's a fit.",
            },
          ]}
          ctaTitle="Need social media management specifically?"
          ctaDescription="Tell me the scope you have in mind. I'd rather say upfront whether it's inside what I currently do than overstate it."
        />
      </main>
      <Footer />
    </>
  );
}
