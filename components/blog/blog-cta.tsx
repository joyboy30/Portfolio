import Link from "next/link";
import { ArrowRight } from "lucide-react";

/**
 * The large closing CTA used at the bottom of blog category pages and article
 * pages. Markup and classes are copied verbatim from the previous inline
 * version in app/blog/category/[slug]/page.tsx, so it renders identically.
 */
export function BlogCta() {
  return (
    <section className="relative overflow-hidden border-b border-white/5 px-6 py-28">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(700px circle at 50% 0%, rgba(99,102,241,0.15), transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="mb-5 text-balance text-4xl font-semibold tracking-tight text-zinc-50 sm:text-5xl">
          Let&apos;s Grow Your Organic Traffic
        </h2>
        <p className="mx-auto mb-10 max-w-xl text-balance leading-relaxed text-zinc-400">
          Work with me for SEO consulting, Local SEO, Technical SEO, AI Search Optimization,
          and Content Marketing built around measurable business outcomes.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-400 via-violet-400 to-fuchsia-400 px-7 py-3.5 text-sm font-semibold text-zinc-950 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_50px_-10px_rgba(167,139,250,0.5)]"
          >
            Hire Me
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-7 py-3.5 text-sm font-semibold text-zinc-100 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/[0.08]"
          >
            Get Free Website Audit
          </Link>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-zinc-500">
          <Link href="/" className="transition-colors hover:text-zinc-300">
            Home
          </Link>
          <Link href="/about" className="transition-colors hover:text-zinc-300">
            About
          </Link>
          <Link href="/case-studies" className="transition-colors hover:text-zinc-300">
            Portfolio
          </Link>
          <Link href="/blog" className="transition-colors hover:text-zinc-300">
            Blog
          </Link>
          <Link href="/contact" className="transition-colors hover:text-zinc-300">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
