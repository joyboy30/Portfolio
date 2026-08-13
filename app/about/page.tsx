import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { GraduationCap, Languages, MapPin, ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { CTASection } from "@/components/cta-section";
import { aboutHighlights, industries } from "@/lib/data";

export const metadata: Metadata = {
  title: {
    absolute: "About Igel Cudiera | SEO Expert in the Philippines",
  },
  description:
    "Learn about Igel Cudiera, an SEO expert in the Philippines specializing in technical SEO, local SEO, and AI Search Optimization for online businesses.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    type: "profile",
    url: "/about",
    title: "About Igel Cudiera | SEO Expert in the Philippines",
    description:
      "Learn about Igel Cudiera, an SEO expert in the Philippines specializing in technical SEO, local SEO, and AI Search Optimization for online businesses.",
  },
};

const facts = [
  {
    icon: GraduationCap,
    label: "Cebu Normal University",
    detail: "Computer Programming & Hardware Servicing · 2011–2012",
  },
  {
    icon: Languages,
    label: "Languages",
    detail: "English · Tagalog · Cebuano",
  },
  {
    icon: MapPin,
    label: "Based in",
    detail: "Medellin, Cebu, Philippines",
  },
];

export default function AboutPage() {
  return (
    <>
      <main id="main-content">
        <section className="relative overflow-hidden">
          <div className="container-shell">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
              {/* Text content: eyebrow, H1, description, breadcrumbs */}
              <div>
                <PageHero
                  eyebrow="About Me"
                  title="An SEO Expert in the Philippines who thinks like an engineer and writes like a marketer."
                  description="My background is in computer programming and hardware servicing, which is why I don't just run SEO checklists, I understand the systems underneath them: crawlability, indexability, site architecture, and how search engines actually discover a page before it can ever rank."
                  breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "About", href: "/about" },
                  ]}
                />
              </div>

              {/* Profile image, positioned beside hero content on desktop, clear of the nav */}
              <div className="relative mx-auto mt-8 w-full max-w-sm pt-6 sm:pt-8 lg:mx-0 lg:mt-0 lg:pt-28">
                <div className="relative">
                  <div className="absolute -inset-3 rounded-3xl bg-accent/10 blur-2xl" />

                  <div className="relative overflow-hidden rounded-3xl border border-border-strong bg-surface shadow-glass">
                    <Image
                      src="/images/igel-cudiera.png"
                      alt="Igel Cudiera, SEO Expert in the Philippines"
                      width={800}
                      height={1000}
                      priority
                      className="h-auto w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-pad">
          <div className="container-shell">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-light">
                SEO Specialist
              </p>

              <h2 className="mt-3 text-2xl font-semibold text-foreground sm:text-3xl">
                Building search strategies that connect technical SEO with
                real business goals.
              </h2>

              <p className="mt-5 text-sm leading-relaxed text-muted">
                I help businesses improve their organic visibility through
                practical SEO strategies covering technical SEO, on-page
                SEO, off-page SEO, local SEO, content optimization, and AI
                Search Optimization.
              </p>

              <p className="mt-4 text-sm leading-relaxed text-muted">
                My approach combines technical understanding with marketing
                thinking. I focus on making websites easier for search
                engines to crawl, understand, index, and ultimately surface
                to the right audience.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-5 lg:grid-cols-3">
              {aboutHighlights.map((item) => (
                <article key={item.title} className="glass-card p-7">
                  <h2 className="text-base font-semibold text-foreground">
                    {item.title}
                  </h2>

                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {item.body}
                  </p>
                </article>
              ))}
            </div>

            <div className="glass-card mt-5 flex flex-col justify-between gap-6 p-7 sm:flex-row">
              {facts.map((fact) => (
                <div key={fact.label} className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent-light">
                    <fact.icon aria-hidden="true" className="h-5 w-5" />
                  </span>

                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {fact.label}
                    </p>

                    <p className="text-xs text-muted">{fact.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                Industries I&apos;ve worked in
              </h2>

              <ul className="mt-6 flex flex-wrap gap-2.5">
                {industries.map((industry) => (
                  <li
                    key={industry}
                    className="rounded-full border border-border-strong bg-white/[0.03] px-4 py-2 text-sm text-muted"
                  >
                    {industry}
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-sm leading-relaxed text-muted">
                You can see how that work played out in my{" "}
                <Link
                  href="/case-studies"
                  className="link-underline text-accent-light"
                >
                  documented client case studies
                </Link>{" "}
                or read the full role-by-role breakdown on my{" "}
                <Link
                  href="/experience"
                  className="link-underline text-accent-light"
                >
                  professional experience page
                </Link>
                .
              </p>
            </div>

            <div className="glass-card mt-16 border-white/10 bg-gradient-to-r from-accent/10 to-transparent p-7 sm:p-8">
              <h2 className="text-xl font-semibold text-foreground">
                Learn More About My SEO Approach
              </h2>

              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted">
                I regularly publish practical articles about{" "}
                <strong>Technical SEO</strong>,{" "}
                <strong>Local SEO</strong>,{" "}
                <strong>Content Optimization</strong>,{" "}
                <strong>AI Search Optimization (AIO, AEO, GEO)</strong>, Google
                AI Overviews, ChatGPT Search, and modern SEO best practices.
                My blog shares real-world strategies, technical audits, case
                studies, and actionable insights to help businesses improve
                their visibility in both traditional search engines and
                AI-powered search experiences.
              </p>

              <Link
                href="/blog"
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-accent/90"
              >
                Read My Blog
                <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        <CTASection />
      </main>

      <Footer />
    </>
  );
}