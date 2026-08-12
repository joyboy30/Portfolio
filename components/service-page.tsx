import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import type { BreadcrumbItem } from "@/lib/schema";
import { PageHero } from "@/components/page-hero";
import { CTASection } from "@/components/cta-section";

export type ServiceBlock = {
  /** Optional anchor id — used for the AIO / AEO / GEO jump links. */
  id?: string;
  heading: string;
  body?: string;
  bullets?: string[];
  /** Rendered as a distinct, quieter note — used to mark training vs. client work. */
  note?: string;
};

export type RelatedLink = {
  label: string;
  href: string;
  description?: string;
};

/**
 * Shared layout for every service page. Server component: the service pages
 * are static content, so none of this ships client JS.
 */
export function ServicePage({
  eyebrow,
  title,
  intro,
  breadcrumbs,
  blocks,
  related,
  ctaTitle,
  ctaDescription,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  breadcrumbs: BreadcrumbItem[];
  blocks: ServiceBlock[];
  related?: RelatedLink[];
  ctaTitle?: string;
  ctaDescription?: string;
}) {
  return (
    <>
      <PageHero
        eyebrow={eyebrow}
        title={title}
        description={intro}
        breadcrumbs={breadcrumbs}
      />

      <section className="section-pad">
        <div className="container-shell">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            {blocks.map((block) => (
              <article
                key={block.heading}
                id={block.id}
                className="glass-card p-7 scroll-mt-28 sm:p-8"
              >
                <h2 className="text-lg font-semibold text-foreground sm:text-xl">
                  {block.heading}
                </h2>

                {block.body && (
                  <p className="mt-3 text-sm leading-relaxed text-muted">{block.body}</p>
                )}

                {block.bullets && (
                  <ul className="mt-5 space-y-2.5 border-t border-border pt-5">
                    {block.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2.5 text-sm text-muted">
                        <Check
                          aria-hidden="true"
                          className="mt-0.5 h-4 w-4 shrink-0 text-accent-light"
                        />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {block.note && (
                  <p className="mt-5 rounded-xl border border-border bg-white/[0.02] px-4 py-3 text-xs leading-relaxed text-muted-2">
                    {block.note}
                  </p>
                )}
              </article>
            ))}
          </div>

          {related && related.length > 0 && (
            <div className="mt-16">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                Where to go next
              </h2>
              <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="glass-card group flex h-full flex-col p-6 transition-shadow duration-300 hover:shadow-glow-sm"
                    >
                      <span className="flex items-center justify-between gap-3 text-sm font-semibold text-foreground">
                        {link.label}
                        <ArrowUpRight
                          aria-hidden="true"
                          className="h-4 w-4 shrink-0 text-muted-2 transition-colors duration-300 group-hover:text-accent-light"
                        />
                      </span>
                      {link.description && (
                        <span className="mt-2 text-xs leading-relaxed text-muted">
                          {link.description}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      <CTASection title={ctaTitle} description={ctaDescription} />
    </>
  );
}
