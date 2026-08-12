import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { Briefcase, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { CTASection } from "@/components/cta-section";
import { experience, timeline } from "@/lib/data";

export const metadata: Metadata = {
  title: "Professional SEO Experience — Roles, Clients & Responsibilities",
  description:
    "The full role-by-role record of my SEO work: real estate, multi-industry agency accounts, iGaming, and e-commerce — with the responsibilities owned in each.",
  alternates: { canonical: "/experience" },
  openGraph: {
    type: "profile",
    url: "/experience",
    title: "Professional SEO Experience — Roles, Clients & Responsibilities",
    description:
      "The full role-by-role record of my SEO work across real estate, agency accounts, iGaming, and e-commerce.",
  },
};

export default function ExperiencePage() {
  return (
    <>
      <main id="main-content">
        <PageHero
          eyebrow="Professional Experience"
          title="A career built on real client outcomes."
          description="Every role below reflects hands-on ownership of SEO strategy and execution — not just tasks completed, but businesses made easier to find."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Experience", href: "/experience" },
          ]}
        />

        <section className="section-pad">
          <div className="container-shell">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute left-[27px] top-2 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-accent/50 via-border-strong to-transparent sm:block"
              />

              <ol className="space-y-8">
                {experience.map((job) => (
                  <li key={job.company} className="relative flex flex-col gap-6 sm:flex-row">
                    <div aria-hidden="true" className="hidden shrink-0 sm:block">
                      <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-border-strong bg-surface shadow-glass">
                        <Briefcase className="h-6 w-6 text-accent-light" />
                      </span>
                    </div>

                    <article className="glass-card flex-1 p-6 sm:p-8">
                      <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                        <div>
                          <h2 className="text-lg font-semibold text-foreground sm:text-xl">
                            {job.company}
                          </h2>
                          <p className="mt-1 text-sm font-medium text-accent-light">{job.role}</p>
                        </div>
                        <div className="text-left sm:text-right">
                          <p className="font-mono text-xs text-muted">{job.period}</p>
                          <p className="mt-1 text-xs text-muted-2">{job.industry}</p>
                        </div>
                      </div>

                      <p className="mt-4 text-sm leading-relaxed text-muted">{job.summary}</p>

                      <ul className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                        {job.responsibilities.map((r) => (
                          <li key={r} className="flex items-start gap-2 text-sm text-muted">
                            <CheckCircle2
                              aria-hidden="true"
                              className="mt-0.5 h-4 w-4 shrink-0 text-accent-light"
                            />
                            <span>{r}</span>
                          </li>
                        ))}
                      </ul>
                    </article>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-20">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                How I got here
              </h2>
              <ol className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {timeline.map((entry) => (
                  <li key={`${entry.year}-${entry.label}`} className="glass-card p-6">
                    <span className="font-mono text-xs uppercase tracking-wide text-accent-light">
                      {entry.year}
                    </span>
                    <h3 className="mt-2 text-sm font-semibold text-foreground">{entry.label}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-muted">{entry.detail}</p>
                  </li>
                ))}
              </ol>
            </div>

            <p className="mt-12 text-sm leading-relaxed text-muted">
              For the results behind these roles, see the{" "}
              <Link href="/case-studies" className="link-underline text-accent-light">
                case studies and client traffic data
              </Link>
              , or review the{" "}
              <Link href="/certifications" className="link-underline text-accent-light">
                training and certifications
              </Link>{" "}
              behind the work.
            </p>
          </div>
        </section>

        <CTASection
          title="Looking for an SEO specialist who owns the whole process?"
          description="I work as a dedicated specialist rather than a rotating agency team — one accountable point of contact from audit through reporting."
        />
      </main>
      <Footer />
    </>
  );
}
