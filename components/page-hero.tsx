import type { ReactNode } from "react";
import type { BreadcrumbItem } from "@/lib/schema";
import { Breadcrumbs } from "@/components/breadcrumbs";

/**
 * Shared hero for every non-home page. Server component — no animation JS
 * shipped for what is essentially static text.
 */
export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
  children,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  breadcrumbs?: BreadcrumbItem[];
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pt-32 sm:pt-40">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-accent/15 blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-grid-pattern bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_30%,transparent_100%)]"
      />

      <div className="container-shell relative">
        {breadcrumbs && (
          <div className="mb-8">
            <Breadcrumbs items={breadcrumbs} />
          </div>
        )}

        <span className="eyebrow">{eyebrow}</span>
        <h1 className="mt-5 max-w-4xl text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl lg:leading-[1.12]">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
            {description}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
