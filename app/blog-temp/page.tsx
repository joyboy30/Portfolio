import type { Metadata } from "next";
import type { ComponentType } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  RefreshCw,
  MapPin,
  Settings2,
  Sparkles,
  PenTool,
  BarChart3,
  ArrowRight,
  ArrowUpRight,
  Clock,
  CalendarDays,
  Search,
  Bot,
  FileSearch,
} from "lucide-react";

export const metadata: Metadata = {
  title: "SEO Blog | Algorithm Updates, Technical SEO & AI Search Insights",
  description:
    "Actionable SEO strategies, Google algorithm analysis, AI Search Optimization, Local SEO, Technical SEO, content marketing guidance, and real case studies from Igel G. Cudiera, SEO Specialist.",
  alternates: {
    canonical: "https://igel-cudiera-portfolio.vercel.app/blog",
  },
  openGraph: {
    title: "SEO Blog | Algorithm Updates, Technical SEO & AI Search Insights",
    description:
      "Actionable SEO strategies, Google algorithm analysis, AI Search Optimization, Local SEO, Technical SEO, and real case studies.",
    url: "https://igel-cudiera-portfolio.vercel.app/blog",
    siteName: "Igel G. Cudiera",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Blog | Algorithm Updates, Technical SEO & AI Search Insights",
    description:
      "Actionable SEO strategies, Google algorithm analysis, AI Search Optimization, Local SEO, and Technical SEO.",
  },
};

interface Category {
  title: string;
  description: string;
  href: string;
  icon: ComponentType<{ className?: string }>;
}

const categories: Category[] = [
  {
    title: "Google Algorithm Updates",
    description:
      "Breakdowns of core updates, spam updates, and ranking volatility — what actually changed and how to respond.",
    href: "/blog/category/google-algorithm-updates",
    icon: RefreshCw,
  },
  {
    title: "Local SEO",
    description:
      "Google Business Profile optimization, NAP consistency, and map pack strategies for local and multi-location businesses.",
    href: "/blog/category/local-seo",
    icon: MapPin,
  },
  {
    title: "Technical SEO",
    description:
      "Crawlability, indexing, site architecture, and Core Web Vitals — the infrastructure rankings are built on.",
    href: "/blog/category/technical-seo",
    icon: Settings2,
  },
  {
    title: "AI Search Optimization",
    description:
      "Structuring content to be cited in Google AI Overviews, ChatGPT Search, and other generative answer engines.",
    href: "/blog/category/ai-search-optimization",
    icon: Sparkles,
  },
  {
    title: "Content Marketing",
    description:
      "Search-intent-driven content strategy, topical authority, and AI-assisted content workflows that hold up to editing.",
    href: "/blog/category/content-marketing",
    icon: PenTool,
  },
  {
    title: "SEO Case Studies",
    description:
      "Real client projects, real constraints, and the measurable outcomes — traffic, rankings, and visibility gains.",
    href: "/blog/category/seo-case-studies",
    icon: BarChart3,
  },
];

interface Article {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  slug: string;
  image: string;
}

const articles: Article[] = [
  {
    title: "Google June Core Update Explained",
    excerpt:
      "What actually shifted in this update, which content types were hit hardest, and the recovery checklist I use with clients before touching a single page.",
    category: "Google Algorithm Updates",
    date: "June 18, 2026",
    readTime: "7 min read",
    slug: "google-june-core-update-explained",
    image: "/blog/google-core-update.jpg",
  },
  {
    title: "Local SEO Checklist for Small Businesses",
    excerpt:
      "The exact Google Business Profile, citation, and on-page checklist I run for every local client — from dental clinics to restaurants.",
    category: "Local SEO",
    date: "June 5, 2026",
    readTime: "6 min read",
    slug: "local-seo-checklist-small-businesses",
    image: "/blog/local-seo-checklist.jpg",
  },
  {
    title: "Technical SEO Audit Guide",
    excerpt:
      "A step-by-step crawl-and-diagnose process covering indexing, site architecture, and Core Web Vitals, with a prioritized fix list at the end.",
    category: "Technical SEO",
    date: "May 22, 2026",
    readTime: "9 min read",
    slug: "technical-seo-audit-guide",
    image: "/blog/technical-seo-audit.jpg",
  },
  {
    title: "AI Search Optimization in 2026",
    excerpt:
      "How AIO, AEO, and GEO differ from traditional SEO, and the content structure changes that help pages get cited by AI answer engines.",
    category: "AI Search Optimization",
    date: "May 10, 2026",
    readTime: "8 min read",
    slug: "ai-search-optimization-2026",
    image: "/blog/ai-search-optimization.jpg",
  },
  {
    title: "Google Search Console Tips",
    excerpt:
      "The reports I check first on every new client account, and how I use indexing and performance data to prioritize the first 30 days of work.",
    category: "Technical SEO",
    date: "April 27, 2026",
    readTime: "5 min read",
    slug: "google-search-console-tips",
    image: "/blog/search-console-tips.jpg",
  },
  {
    title: "How Internal Linking Improves Rankings",
    excerpt:
      "A practical framework for structuring internal links around topical authority, crawl depth, and passing relevance to priority pages.",
    category: "Content Marketing",
    date: "April 14, 2026",
    readTime: "6 min read",
    slug: "internal-linking-improves-rankings",
    image: "/blog/internal-linking.jpg",
  },
];

interface Reason {
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
}

const reasons: Reason[] = [
  {
    title: "Real SEO testing, not theory",
    description:
      "Every tactic published here has been run on a live client site first — no recycled advice from other blogs.",
    icon: FileSearch,
  },
  {
    title: "Google algorithm updates explained",
    description:
      "Plain-language breakdowns of what changed and what it means for your traffic, without the panic or the fluff.",
    icon: RefreshCw,
  },
  {
    title: "Technical SEO tutorials",
    description:
      "Step-by-step guides for indexing, Core Web Vitals, and site architecture fixes you can actually implement.",
    icon: Settings2,
  },
  {
    title: "Local SEO strategies",
    description:
      "Google Business Profile and citation tactics tested across dental, real estate, e-commerce, and hospitality clients.",
    icon: MapPin,
  },
  {
    title: "AI Search Optimization",
    description:
      "Early, practical coverage of AIO, AEO, and GEO as AI answer engines reshape how people find businesses.",
    icon: Bot,
  },
  {
    title: "Actionable advice, backed by experience",
    description:
      "Every post ends with something you can do this week — not just concepts to file away.",
    icon: Search,
  },
];

const largeCtaLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Portfolio", href: "/#case-studies" },
  { label: "Contact Us", href: "/#contact" },
];

export default function BlogPage() {
  return (
    <main id="main-content" className="relative min-h-screen overflow-hidden bg-[#020304] text-white">
      {/* Ambient background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[40rem] right-0 h-[28rem] w-[28rem] rounded-full bg-sky-500/10 blur-[140px]"
      />

      {/* ---------------- Hero ---------------- */}
      <section className="relative mx-auto max-w-6xl px-6 pb-20 pt-28 sm:pt-36 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-emerald-300/90 backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            SEO Blog &amp; Search Insights
          </span>

          <h1 className="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            SEO Insights &amp;{" "}
            <span className="bg-gradient-to-r from-emerald-300 via-teal-300 to-sky-400 bg-clip-text text-transparent">
              Google Algorithm Updates
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-balance text-base leading-relaxed text-white/60 sm:text-lg">
            I publish actionable SEO strategies, Google algorithm analysis, AI Search
            Optimization (AIO/AEO/GEO), Local SEO, Technical SEO, content marketing
            guidance, and real SEO case studies — the same tactics I use with paying
            clients, written so you can apply them this week.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-400 to-sky-400 px-7 py-3.5 text-sm font-semibold text-[#020304] shadow-lg shadow-emerald-500/20 transition-all duration-300 hover:shadow-emerald-400/40 hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"
            >
              Get Free Website Audit
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>

            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-medium text-white/90 backdrop-blur-sm transition-colors duration-300 hover:border-white/30 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/40"
            >
              Explore My Portfolio
            </Link>

            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium text-white/60 transition-colors duration-300 hover:text-white"
            >
              Contact Us
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------- Featured Categories ---------------- */}
      <section aria-labelledby="categories-heading" className="relative mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 id="categories-heading" className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Browse by category
          </h2>
          <p className="mt-3 text-sm text-white/50 sm:text-base">
            Every article is filed under the search discipline it actually belongs to.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Link
                key={category.title}
                href={category.href}
                className="group relative flex flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300/30 hover:bg-white/[0.06] hover:shadow-xl hover:shadow-emerald-500/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400/20 to-sky-400/20 text-emerald-300 transition-colors duration-300 group-hover:text-emerald-200">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-lg font-medium text-white">{category.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/50">{category.description}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-emerald-300/90">
                  View articles
                  <ArrowRight
                    className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ---------------- Featured Articles ---------------- */}
      <section aria-labelledby="articles-heading" className="relative mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 id="articles-heading" className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Latest articles
          </h2>
          <p className="mt-3 text-sm text-white/50 sm:text-base">
            Fresh breakdowns, guides, and case studies from active client work.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <article
              key={article.slug}
              className="group flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-xl hover:shadow-black/30"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-white/5">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/50 px-3 py-1 text-xs font-medium text-emerald-200 backdrop-blur-md">
                  {article.category}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-medium leading-snug text-white">
                  <Link
                    href={`/blog/${article.slug}`}
                    className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"
                  >
                    {article.title}
                  </Link>
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-white/50">{article.excerpt}</p>

                <div className="mt-5 flex items-center gap-4 text-xs text-white/40">
                  <span className="inline-flex items-center gap-1.5">
                    <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
                    {article.date}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                    {article.readTime}
                  </span>
                </div>

                <Link
                  href={`/blog/${article.slug}`}
                  className="group/link mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-white transition-colors duration-300 hover:text-emerald-300"
                >
                  Read Article
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ---------------- Why Follow This Blog ---------------- */}
      <section aria-labelledby="why-follow-heading" className="relative mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-8 sm:p-12">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 id="why-follow-heading" className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Why follow this blog
            </h2>
            <p className="mt-3 text-sm text-white/50 sm:text-base">
              Written from active client engagements, not repackaged SEO listicles.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((reason) => {
              const Icon = reason.icon;
              return (
                <div key={reason.title} className="flex gap-4">
                  <div className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-white/5 text-emerald-300">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">{reason.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-white/50">{reason.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------- Newsletter ---------------- */}
      <section aria-labelledby="newsletter-heading" className="relative mx-auto max-w-4xl px-6 py-16 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.03] px-8 py-14 text-center backdrop-blur-sm sm:px-14">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-sky-500/10"
          />
          <div className="relative">
            <h2 id="newsletter-heading" className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Stay Ahead of Google&rsquo;s Search Updates
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-white/50 sm:text-base">
              One email whenever there&rsquo;s an algorithm shift, a new AI search tactic,
              or a technical SEO fix worth your time. No spam, unsubscribe anytime.
            </p>

            <form
              action="/api/newsletter"
              method="POST"
              className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                name="email"
                type="email"
                required
                placeholder="you@company.com"
                autoComplete="email"
                className="w-full rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-colors duration-300 focus:border-emerald-300/50 focus:bg-white/10"
              />
              <button
                type="submit"
                className="inline-flex flex-none items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-400 to-sky-400 px-6 py-3 text-sm font-semibold text-[#020304] shadow-lg shadow-emerald-500/20 transition-all duration-300 hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ---------------- Large CTA ---------------- */}
      <section aria-labelledby="cta-heading" className="relative mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="rounded-[2.5rem] border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent px-8 py-16 text-center sm:px-14">
          <h2 id="cta-heading" className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Let&rsquo;s Grow Your{" "}
            <span className="bg-gradient-to-r from-emerald-300 via-teal-300 to-sky-400 bg-clip-text text-transparent">
              Organic Traffic
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/60">
            If you need SEO consulting, Local SEO, Technical SEO, content marketing, AI
            Search Optimization, or a full website SEO audit, I work with businesses
            ready to take search visibility seriously — let&rsquo;s talk about what that
            looks like for you.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-400 to-sky-400 px-7 py-3.5 text-sm font-semibold text-[#020304] shadow-lg shadow-emerald-500/20 transition-all duration-300 hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"
            >
              Get Free Website Audit
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>

            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-400/10 px-7 py-3.5 text-sm font-semibold text-emerald-200 transition-colors duration-300 hover:bg-emerald-400/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"
            >
              Hire Me
            </Link>

            {largeCtaLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-medium text-white/80 transition-colors duration-300 hover:border-white/30 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/40"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Footer ---------------- */}
      <footer className="relative border-t border-white/10 px-6 py-12 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <Link href="/" className="flex items-center gap-2 text-sm font-semibold text-white">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-sky-400 text-xs font-bold text-[#020304]">
              IC
            </span>
            Igel Cudiera
          </Link>

          <nav aria-label="Footer navigation" className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/50">
            <Link href="/" className="transition-colors duration-300 hover:text-white">
              Home
            </Link>
            <Link href="/#about" className="transition-colors duration-300 hover:text-white">
              About
            </Link>
            <Link href="/#case-studies" className="transition-colors duration-300 hover:text-white">
              Portfolio
            </Link>
            <Link href="/blog" className="transition-colors duration-300 hover:text-white">
              Blog
            </Link>
            <Link href="/#contact" className="transition-colors duration-300 hover:text-white">
              Contact Us
            </Link>
          </nav>
        </div>

        <div className="mx-auto mt-8 flex max-w-6xl flex-col items-center gap-1 border-t border-white/5 pt-8 text-center text-xs text-white/30 sm:flex-row sm:justify-between sm:text-left">
          <p>&copy; 2026 Igel G. Cudiera. All rights reserved.</p>
          <p>Built with Next.js, TypeScript &amp; Tailwind CSS.</p>
        </div>
      </footer>
    </main>
  );
}