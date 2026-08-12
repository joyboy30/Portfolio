import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import Link from "next/link";
import {
  SearchCheck,
  Target,
  Megaphone,
  LayoutDashboard,
  Mail,
  ArrowUpRight,
  Check,
  type LucideIcon,
} from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { CTASection } from "@/components/cta-section";
import { serviceCatalog, seoAreas } from "@/lib/services-content";
import { seoProcess } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services — SEO, Paid Ads, Meta Ads, Social & Email Marketing",
  description:
    "SEO is my primary specialization — technical, on-page, off-page, local and AI Search Optimization — alongside Google Ads and Meta Ads campaign work.",
  alternates: { canonical: "/services" },
  openGraph: {
    type: "website",
    url: "/services",
    title: "Services — SEO, Paid Ads, Meta Ads, Social & Email Marketing",
    description:
      "SEO is my primary specialization — technical, on-page, off-page, local and AI Search Optimization — alongside Google Ads and Meta Ads campaign work.",
  },
};

const iconMap: Record<string, LucideIcon> = {
  SearchCheck,
  Target,
  Megaphone,
  LayoutDashboard,
  Mail,
};

export default function ServicesPage() {
  const [primary, ...secondary] = [
    ...serviceCatalog.filter((s) => s.primary),
    ...serviceCatalog.filter((s) => !s.primary),
  ];
  const PrimaryIcon = iconMap[primary.icon] ?? SearchCheck;

  return (
    <>
      <main id="main-content">
        <PageHero
          eyebrow="Services"
          title="How I can help your business grow through search."
          description="SEO is my main professional specialization, and it's where the documented client results in this portfolio come from. Paid and social work sits alongside it as supporting capability."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
          ]}
        />

        <section className="section-pad">
          <div className="container-shell">
            {/* Primary service — SEO */}
            <article className="glass-card border-accent/25 p-8 sm:p-10">
              <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
                <div className="flex-1">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent-light">
                    <PrimaryIcon aria-hidden="true" className="h-6 w-6" />
                  </span>
                  <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.2em] text-accent-light">
                    Primary specialization
                  </p>
                  <h2 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">
                    {primary.title}
                  </h2>
                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
                    {primary.summary}
                  </p>
                  <ul className="mt-6 space-y-2.5">
                    {primary.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2.5 text-sm text-muted">
                        <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-accent-light" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  <Link href={primary.href} className="btn-primary mt-8">
                    Explore SEO services <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                  </Link>
                </div>

                <ul className="grid w-full gap-3 lg:max-w-sm">
                  {seoAreas.map((area) => (
                    <li key={area.href}>
                      <Link
                        href={area.href}
                        className="group flex items-start justify-between gap-3 rounded-2xl border border-border bg-white/[0.02] p-4 transition-colors hover:border-accent/30 hover:bg-white/[0.05]"
                      >
                        <span>
                          <span className="block text-sm font-semibold text-foreground">
                            {area.title}
                          </span>
                          <span className="mt-1 block text-xs leading-relaxed text-muted-2">
                            {area.description}
                          </span>
                        </span>
                        <ArrowUpRight
                          aria-hidden="true"
                          className="mt-0.5 h-4 w-4 shrink-0 text-muted-2 transition-colors group-hover:text-accent-light"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </article>

            {/* Supporting services */}
            <div className="mt-16">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                Supporting services
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted">
                Each card below states plainly what it&apos;s based on — professional client
                experience, formal training, or skills applied inside other engagements.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {secondary.map((service) => {
                  const Icon = iconMap[service.icon] ?? SearchCheck;
                  return (
                    <article key={service.slug} className="glass-card flex flex-col p-6">
                      <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent-light">
                        <Icon aria-hidden="true" className="h-5 w-5" />
                      </span>
                      <h3 className="text-base font-semibold text-foreground">{service.title}</h3>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                        {service.summary}
                      </p>
                      <p className="mt-5 rounded-xl border border-border bg-white/[0.02] px-3 py-2.5 text-xs leading-relaxed text-muted-2">
                        {service.basis}
                      </p>
                      <Link
                        href={service.href}
                        className="link-underline mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent-light"
                      >
                        {service.title} details
                        <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
                      </Link>
                    </article>
                  );
                })}
              </div>
            </div>

            {/* Process */}
            <div className="mt-20">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                How an engagement runs
              </h2>
              <ol className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {seoProcess.map((step, i) => (
                  <li key={step.step} className="glass-card p-6">
                    <span className="font-mono text-xs text-accent-light">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-2 text-sm font-semibold text-foreground">{step.step}</h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-muted">{step.detail}</p>
                  </li>
                ))}
              </ol>
            </div>

            <p className="mt-12 text-sm leading-relaxed text-muted">
              To see this work applied to real accounts, read the{" "}
              <Link href="/case-studies" className="link-underline text-accent-light">
                client case studies
              </Link>{" "}
              or the{" "}
              <Link href="/experience" className="link-underline text-accent-light">
                role-by-role experience breakdown
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
