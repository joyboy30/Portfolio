import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { PageHero } from "@/components/page-hero";
import { Contact } from "@/components/sections/contact";

export const metadata: Metadata = {
  title: "Contact — Work With an SEO Specialist",
  description:
    "Get in touch about an SEO audit, ongoing SEO management, or a Google/Meta Ads campaign. Reach me by email or WhatsApp — I reply within 24 hours.",
  alternates: { canonical: "/contact" },
  openGraph: {
    type: "website",
    url: "/contact",
    title: "Contact — Work With an SEO Specialist",
    description:
      "Get in touch about an SEO audit, ongoing SEO management, or a Google/Meta Ads campaign. Email or WhatsApp.",
  },
};

export default function ContactPage() {
  return (
    <>
      <main id="main-content">
        <PageHero
          eyebrow="Contact"
          title="Let's improve your search visibility."
          description="Whether it's a full SEO audit, ongoing SEO management, or a Google/Meta Ads campaign — tell me about your business and I'll get back to you within 24 hours."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Contact", href: "/contact" },
          ]}
        />

        <Contact showHeading={false} />
      </main>
      <Footer />
    </>
  );
}
