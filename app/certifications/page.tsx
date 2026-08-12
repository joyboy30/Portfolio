import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { CTASection } from "@/components/cta-section";
import { Certifications } from "@/components/sections/certifications";

export const metadata: Metadata = {
  title: "SEO, Google Ads & Meta Ads Certifications",
  description:
    "Formal training and certifications behind my work — SEO bootcamp and sprints, technical SEO, Google Ads training, and Facebook Ads management.",
  alternates: { canonical: "/certifications" },
  openGraph: {
    type: "website",
    url: "/certifications",
    title: "SEO, Google Ads & Meta Ads Certifications",
    description:
      "Formal training and certifications behind my work — SEO bootcamp and sprints, technical SEO, Google Ads, and Facebook Ads.",
  },
};

export default function CertificationsPage() {
  return (
    <>
      <main id="main-content">
        <PageHero
          eyebrow="Certifications"
          title="Continuously Learning. Continuously Growing as a Digital Marketing Professional"
          description="Formal training across SEO, technical SEO, Google Ads, and Meta Ads — click any certificate to view it in full."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Certifications", href: "/certifications" },
          ]}
        />

        <Certifications showHeading={false} />

        <section className="pb-8">
          <div className="container-shell">
            <p className="max-w-3xl text-sm leading-relaxed text-muted">
              Training is only half the picture — see how it&apos;s been applied in my{" "}
              <Link href="/experience" className="link-underline text-accent-light">
                professional experience
              </Link>{" "}
              and{" "}
              <Link href="/case-studies" className="link-underline text-accent-light">
                client case studies
              </Link>
              .
            </p>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
