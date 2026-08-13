import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  RefreshCw,
  ShieldAlert,
  FileText,
  TrendingUp,
  BarChart3,
  MapPin,
  ListChecks,
  Map as MapIcon,
  Search,
  Star,
  Link2,
  Gauge,
  Network,
  Bot,
  FileCode,
  Braces,
  Bug,
  MessageSquare,
  Cpu,
  Brain,
  Tags,
  Quote,
  Layers,
  Award,
  ShieldCheck,
  Clock,
  CalendarDays,
  ChevronRight,
  CompassIcon,
  Mail,
  type LucideIcon,
} from "lucide-react";

const SITE_URL = "https://igel-cudiera-portfolio.vercel.app";
const SITE_NAME = "Igel G. Cudiera";

interface Article {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  slug: string;
}

interface Topic {
  title: string;
  description: string;
  icon: LucideIcon;
}

interface Accent {
  text: string;
  chipBg: string;
  chipText: string;
  chipBorder: string;
  iconBg: string;
  iconText: string;
  ring: string;
  glow: string;
  dot: string;
}

interface CategoryContent {
  slug: string;
  label: string;
  shortLabel: string;
  seoTitle: string;
  metaDescription: string;
  heroHeading: string;
  heroDescription: string;
  accent: Accent;
  topics: Topic[];
  articles: Article[];
  whyMatters: {
    heading: string;
    body: string[];
  };
}

const categoryOrder = [
  "google-algorithm-updates",
  "local-seo",
  "technical-seo",
  "ai-search-optimization",
  "content-marketing",
] as const;

const categoryData: Record<string, CategoryContent> = {
  "google-algorithm-updates": {
    slug: "google-algorithm-updates",
    label: "Google Algorithm Updates",
    shortLabel: "Algorithm Updates",
    seoTitle: "Google Algorithm Updates | SEO Insights by Igel G. Cudiera",
    metaDescription:
      "Analysis of Google Core Updates, Spam Updates, and Helpful Content changes, with ranking volatility insights and recovery strategies from SEO specialist Igel G. Cudiera.",
    heroHeading: "Google Algorithm Updates",
    heroDescription:
      "Latest Google Core Updates, Spam Updates, Helpful Content changes, ranking volatility analysis, recovery strategies, AI search changes, and actionable insights for SEO professionals.",
    accent: {
      text: "from-blue-400 via-indigo-400 to-violet-400",
      chipBg: "bg-blue-500/10",
      chipText: "text-blue-300",
      chipBorder: "border-blue-500/25",
      iconBg: "bg-blue-500/10",
      iconText: "text-blue-300",
      ring: "hover:border-blue-400/40 hover:shadow-[0_0_40px_-12px_rgba(96,165,250,0.35)]",
      glow: "rgba(96,165,250,0.22)",
      dot: "bg-blue-400",
    },
    topics: [
      { title: "Google Core Updates", description: "How broad core updates reshape rankings and what actually separates winners from losers.", icon: RefreshCw },
      { title: "Spam Updates", description: "Recognizing manipulative tactics Google now demotes automatically at scale.", icon: ShieldAlert },
      { title: "Helpful Content", description: "Building content that satisfies the people-first standard Google now rewards.", icon: FileText },
      { title: "Ranking Recovery", description: "A structured approach to diagnosing drops and rebuilding lost visibility.", icon: TrendingUp },
      { title: "Search Console Analysis", description: "Reading performance and indexing data to confirm what an update actually changed.", icon: BarChart3 },
      { title: "AI Overviews", description: "How generative results are reshaping click-through behavior and what to do about it.", icon: Sparkles },
    ],
    articles: [],
    whyMatters: {
      heading: "Why Google Algorithm Updates matter",
      body: [
        "Every core, spam, or helpful content update can move organic revenue overnight. Businesses that track and interpret these changes correctly protect their visibility instead of reacting weeks too late.",
        "Understanding what each update actually rewards, rather than chasing rumors, is what separates a fast recovery from a prolonged traffic decline.",
      ],
    },
  },
  "local-seo": {
    slug: "local-seo",
    label: "Local SEO Strategies",
    shortLabel: "Local SEO",
    seoTitle: "Local SEO Strategies | SEO Insights by Igel G. Cudiera",
    metaDescription:
      "Practical Local SEO strategies for Google Business Profile optimization, Maps rankings, local citations, and review growth from SEO specialist Igel G. Cudiera.",
    heroHeading: "Local SEO Strategies",
    heroDescription:
      "Learn how to rank higher in Google Maps, improve your Google Business Profile, generate more local leads, and dominate local search results.",
    accent: {
      text: "from-emerald-400 via-teal-400 to-emerald-300",
      chipBg: "bg-emerald-500/10",
      chipText: "text-emerald-300",
      chipBorder: "border-emerald-500/25",
      iconBg: "bg-emerald-500/10",
      iconText: "text-emerald-300",
      ring: "hover:border-emerald-400/40 hover:shadow-[0_0_40px_-12px_rgba(52,211,153,0.35)]",
      glow: "rgba(52,211,153,0.22)",
      dot: "bg-emerald-400",
    },
    topics: [
      { title: "Google Business Profile", description: "Optimizing categories, services, and posts to strengthen local relevance signals.", icon: MapPin },
      { title: "Local Citations", description: "Building consistent NAP data across directories that Google trusts.", icon: ListChecks },
      { title: "Maps Rankings", description: "The proximity, relevance, and prominence factors that decide the map pack.", icon: MapIcon },
      { title: "Local Keyword Research", description: "Finding the exact phrases nearby customers use when they're ready to buy.", icon: Search },
      { title: "Reviews", description: "Turning review volume and response quality into a genuine ranking advantage.", icon: Star },
      { title: "Local Link Building", description: "Earning community and industry links that reinforce geographic authority.", icon: Link2 },
    ],
    articles: [
      { title: "Free Business Directory Listing Sites in the Philippines: Complete 2026 List", excerpt: "A complete list of free business directories and local citation sites in the Philippines to improve local visibility, NAP consistency, and search presence.", date: "Aug 13, 2026", readTime: "10 min read", image: "/images/blog/local-seo/philippines-business-directories.png", slug: "free-directory-listing-sites-philippines" },
    ],
    whyMatters: {
      heading: "Why Local SEO matters",
      body: [
        "For most small and local businesses, the map pack is the highest-intent real estate in search. Ranking there consistently turns nearby searches into calls, visits, and bookings.",
        "A disciplined local SEO strategy compounds over time, making it harder for competitors to displace you once trust signals like reviews and citations are in place.",
      ],
    },
  },
  "technical-seo": {
    slug: "technical-seo",
    label: "Technical SEO",
    shortLabel: "Technical SEO",
    seoTitle: "Technical SEO | SEO Insights by Igel G. Cudiera",
    metaDescription:
      "Technical SEO strategies covering Core Web Vitals, crawlability, indexing, structured data, and site architecture from SEO specialist Igel G. Cudiera.",
    heroHeading: "Technical SEO",
    heroDescription:
      "Improve crawlability, indexing, Core Web Vitals, structured data, and overall website performance using modern technical SEO strategies.",
    accent: {
      text: "from-violet-400 via-fuchsia-400 to-purple-300",
      chipBg: "bg-violet-500/10",
      chipText: "text-violet-300",
      chipBorder: "border-violet-500/25",
      iconBg: "bg-violet-500/10",
      iconText: "text-violet-300",
      ring: "hover:border-violet-400/40 hover:shadow-[0_0_40px_-12px_rgba(167,139,250,0.35)]",
      glow: "rgba(167,139,250,0.22)",
      dot: "bg-violet-400",
    },
    topics: [
      { title: "Core Web Vitals", description: "Diagnosing and fixing the loading, interactivity, and stability metrics Google measures.", icon: Gauge },
      { title: "Site Architecture", description: "Structuring URLs and internal links so crawlers and users find what matters fastest.", icon: Network },
      { title: "Robots.txt", description: "Controlling crawl access without accidentally blocking the pages you want indexed.", icon: Bot },
      { title: "XML Sitemap", description: "Keeping sitemaps accurate so search engines discover new and updated pages quickly.", icon: FileCode },
      { title: "Schema Markup", description: "Structured data that helps search engines understand and richly display your content.", icon: Braces },
      { title: "Crawl Budget", description: "Making sure search engines spend their crawl time on pages that actually matter.", icon: Bug },
    ],
    articles: [],
    whyMatters: {
      heading: "Why Technical SEO matters",
      body: [
        "Great content underperforms when a site is slow, poorly structured, or difficult to crawl. Technical SEO is the foundation every other strategy depends on.",
        "Fixing indexing and performance issues consistently produces some of the fastest, most measurable traffic gains of any SEO work.",
      ],
    },
  },
  "ai-search-optimization": {
    slug: "ai-search-optimization",
    label: "AI Search Optimization",
    shortLabel: "AI Search",
    seoTitle: "AI Search Optimization | SEO Insights by Igel G. Cudiera",
    metaDescription:
      "AI Search Optimization strategies for ChatGPT, Google AI Overviews, Gemini, and Perplexity from SEO specialist Igel G. Cudiera, covering AIO, AEO, and GEO.",
    heroHeading: "AI Search Optimization",
    heroDescription:
      "Learn how to optimize websites for ChatGPT, AI Overviews, Gemini, Perplexity AI, Bing Copilot, and the future of AI-powered search.",
    accent: {
      text: "from-cyan-400 via-sky-400 to-blue-300",
      chipBg: "bg-cyan-500/10",
      chipText: "text-cyan-300",
      chipBorder: "border-cyan-500/25",
      iconBg: "bg-cyan-500/10",
      iconText: "text-cyan-300",
      ring: "hover:border-cyan-400/40 hover:shadow-[0_0_40px_-12px_rgba(34,211,238,0.35)]",
      glow: "rgba(34,211,238,0.22)",
      dot: "bg-cyan-400",
    },
    topics: [
      { title: "AI Overviews", description: "Structuring content so Google's generative answers cite your site as a source.", icon: Sparkles },
      { title: "ChatGPT SEO", description: "Formatting content the way conversational AI models prefer to retrieve and cite it.", icon: MessageSquare },
      { title: "Generative Engine Optimization", description: "Optimizing for visibility across the growing set of AI-powered answer engines.", icon: Cpu },
      { title: "Semantic Search", description: "Writing content around meaning and intent, not just exact-match keywords.", icon: Brain },
      { title: "Entity SEO", description: "Establishing your brand as a recognized entity search engines trust and reference.", icon: Tags },
      { title: "AI Citations", description: "The content patterns that consistently earn mentions inside AI-generated answers.", icon: Quote },
    ],
    articles: [],
    whyMatters: {
      heading: "Why AI Search Optimization matters",
      body: [
        "A growing share of searches now end inside an AI-generated answer instead of a traditional results page. Brands invisible to these systems lose visibility even when their organic rankings look healthy.",
        "Structuring content for AI answer engines now protects future traffic as generative search continues to expand across Google, ChatGPT, and beyond.",
      ],
    },
  },
  "content-marketing": {
    slug: "content-marketing",
    label: "SEO Content Marketing",
    shortLabel: "Content Marketing",
    seoTitle: "SEO Content Marketing | SEO Insights by Igel G. Cudiera",
    metaDescription:
      "SEO content marketing strategies covering topical authority, content clusters, EEAT, and semantic keyword mapping from SEO specialist Igel G. Cudiera.",
    heroHeading: "SEO Content Marketing",
    heroDescription:
      "Build topical authority using content clusters, semantic SEO, EEAT, keyword strategy, and high-quality content that ranks.",
    accent: {
      text: "from-amber-400 via-orange-400 to-amber-300",
      chipBg: "bg-amber-500/10",
      chipText: "text-amber-300",
      chipBorder: "border-amber-500/25",
      iconBg: "bg-amber-500/10",
      iconText: "text-amber-300",
      ring: "hover:border-amber-400/40 hover:shadow-[0_0_40px_-12px_rgba(251,191,36,0.35)]",
      glow: "rgba(251,191,36,0.22)",
      dot: "bg-amber-400",
    },
    topics: [
      { title: "Content Clusters", description: "Grouping related content around a pillar page to build depth on a topic.", icon: Layers },
      { title: "Topical Authority", description: "Earning Google's trust on a subject through consistent, comprehensive coverage.", icon: Award },
      { title: "Semantic SEO", description: "Covering the full scope of a topic instead of optimizing for a single keyword.", icon: Brain },
      { title: "EEAT", description: "Demonstrating experience, expertise, authoritativeness, and trust in every piece.", icon: ShieldCheck },
      { title: "Keyword Mapping", description: "Assigning the right keyword intent to the right page, without cannibalization.", icon: MapIcon },
      { title: "Internal Linking", description: "Connecting content clusters so authority flows to the pages that need it most.", icon: Link2 },
    ],
    articles: [],
    whyMatters: {
      heading: "Why Content Marketing matters",
      body: [
        "Rankings increasingly go to sites that demonstrate real depth on a subject, not just a single optimized page. Topical authority is what earns lasting visibility.",
        "A deliberate content and internal linking strategy compounds over time, making every new page easier to rank than the last.",
      ],
    },
  },
};

function getRelatedCategories(currentSlug: string): CategoryContent[] {
  return categoryOrder
    .filter((slug) => slug !== currentSlug)
    .map((slug) => categoryData[slug]);
}

export async function generateStaticParams() {
  return categoryOrder.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = categoryData[slug];

  if (!category) {
    return {
      title: "Category Not Found | Igel G. Cudiera",
      description:
        "This blog category doesn't exist. Explore Google Algorithm Updates, Local SEO, Technical SEO, AI Search Optimization, and Content Marketing insights instead.",
      robots: { index: false, follow: true },
      alternates: { canonical: `${SITE_URL}/blog` },
    };
  }

  const url = `${SITE_URL}/blog/category/${slug}`;

  return {
    title: category.seoTitle,
    description: category.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: category.seoTitle,
      description: category.metaDescription,
      url,
      siteName: SITE_NAME,
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: category.seoTitle,
      description: category.metaDescription,
    },
  };
}

function buildJsonLd(category: CategoryContent | undefined, slug: string) {
  const url = `${SITE_URL}/blog/category/${slug}`;

  const person = {
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: "Igel G. Cudiera",
    jobTitle: "SEO Specialist",
    url: SITE_URL,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Medellin, Cebu",
      addressCountry: "PH",
    },
    knowsAbout: [
      "Technical SEO",
      "Local SEO",
      "Google Ads",
      "Meta Ads",
      "AI Search Optimization",
    ],
  };

  const organization = {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    founder: { "@id": `${SITE_URL}/#person` },
  };

  if (!category) {
    return {
      "@context": "https://schema.org",
      "@graph": [
        person,
        organization,
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
            { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
          ],
        },
      ],
    };
  }

  return {
    "@context": "https://schema.org",
    "@graph": [
      person,
      organization,
      {
        "@type": "CollectionPage",
        "@id": `${url}/#collectionpage`,
        url,
        name: category.seoTitle,
        description: category.metaDescription,
        isPartOf: { "@id": `${SITE_URL}/#organization` },
        about: category.label,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
          { "@type": "ListItem", position: 3, name: category.label, item: url },
        ],
      },
    ],
  };
}

function Breadcrumb({ label }: { label: string }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-1.5 text-sm text-zinc-500">
      <Link href="/" className="transition-colors hover:text-zinc-300">
        Home
      </Link>
      <ChevronRight className="h-3.5 w-3.5 text-zinc-600" aria-hidden="true" />
      <Link href="/blog" className="transition-colors hover:text-zinc-300">
        Blog
      </Link>
      <ChevronRight className="h-3.5 w-3.5 text-zinc-600" aria-hidden="true" />
      <span className="text-zinc-300">{label}</span>
    </nav>
  );
}

function ArticleCard({ article, accent }: { article: Article; accent: Accent }) {
  return (
    <Link
      href={`/blog/${article.slug}`}
      className={`group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.05] ${accent.ring}`}
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <Image
          src={article.image}
          alt={article.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020304] via-transparent to-transparent" />
        <span
          className={`absolute left-4 top-4 rounded-full border px-3 py-1 text-xs font-medium backdrop-blur-md ${accent.chipBorder} ${accent.chipBg} ${accent.chipText}`}
        >
          SEO Insight
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="text-lg font-semibold leading-snug text-zinc-50 transition-colors group-hover:text-white">
          {article.title}
        </h3>
        <p className="text-sm leading-relaxed text-zinc-400">{article.excerpt}</p>

        <div className="mt-auto flex items-center gap-4 pt-2 text-xs text-zinc-500">
          <span className="flex items-center gap-1.5">
            <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
            {article.date}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" aria-hidden="true" />
            {article.readTime}
          </span>
        </div>

        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-zinc-200 transition-all group-hover:gap-2.5 group-hover:text-white">
          Read Article
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}

function TopicCard({ topic, accent }: { topic: Topic; accent: Accent }) {
  const Icon = topic.icon;
  return (
    <div
      className={`group rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.05] ${accent.ring}`}
    >
      <div
        className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110 ${accent.iconBg} ${accent.iconText}`}
      >
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>
      <h3 className="mb-2 text-base font-semibold text-zinc-50">{topic.title}</h3>
      <p className="text-sm leading-relaxed text-zinc-400">{topic.description}</p>
    </div>
  );
}

function RelatedCategoryCard({ category }: { category: CategoryContent }) {
  return (
    <Link
      href={`/blog/category/${category.slug}`}
      className={`group flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/[0.05] ${category.accent.ring}`}
    >
      <div className="flex items-center gap-3">
        <span className={`h-2 w-2 shrink-0 rounded-full ${category.accent.dot}`} aria-hidden="true" />
        <div>
          <p className="text-sm font-semibold text-zinc-100">{category.label}</p>
          <p className="text-xs text-zinc-500">Explore insights</p>
        </div>
      </div>
      <ArrowUpRight
        className="h-4 w-4 shrink-0 text-zinc-500 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-zinc-200"
        aria-hidden="true"
      />
    </Link>
  );
}

function NotFoundSection({ slug }: { slug: string }) {
  return (
    <section className="relative flex min-h-[70vh] flex-col items-center justify-center px-6 py-32 text-center">
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-60"
        style={{
          background:
            "radial-gradient(600px circle at 50% 20%, rgba(244,63,94,0.12), transparent 70%)",
        }}
        aria-hidden="true"
      />
      <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-rose-500/25 bg-rose-500/10 px-4 py-1.5 text-xs font-medium text-rose-300">
        <Search className="h-3.5 w-3.5" aria-hidden="true" />
        Category Not Found
      </span>
      <h1 className="mb-4 text-4xl font-semibold tracking-tight text-zinc-50 sm:text-5xl">
        We couldn&apos;t find &ldquo;{slug}&rdquo;
      </h1>
      <p className="mb-10 max-w-xl text-balance text-zinc-400">
        This blog category doesn&apos;t exist yet. Explore Google Algorithm Updates, Local SEO,
        Technical SEO, AI Search Optimization, or Content Marketing instead.
      </p>
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-zinc-100 to-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-900 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_40px_-8px_rgba(255,255,255,0.3)]"
      >
        Back to Blog
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </section>
  );
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = categoryData[slug];
  const jsonLd = buildJsonLd(category, slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main id="main-content" className="relative overflow-hidden bg-[#020304] text-zinc-100">
        <style>{`
          @keyframes categoryGradientShift {
            0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
            50% { transform: translate3d(2%, -3%, 0) scale(1.05); }
          }
          @keyframes categoryFadeUp {
            from { opacity: 0; transform: translateY(14px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .category-ambient { animation: categoryGradientShift 16s ease-in-out infinite; }
          .category-fade-up { animation: categoryFadeUp 0.6s ease-out both; }
        `}</style>

        {/* Hero */}
        <section className="relative border-b border-white/5 px-6 pb-20 pt-28 sm:pt-36">
          <div
            className="category-ambient pointer-events-none absolute inset-0 -z-10"
            style={{
              background: `radial-gradient(680px circle at 20% 0%, ${
                category?.accent.glow ?? "rgba(244,63,94,0.15)"
              }, transparent 70%), radial-gradient(520px circle at 90% 10%, rgba(255,255,255,0.05), transparent 70%)`,
            }}
            aria-hidden="true"
          />

          <div className="mx-auto max-w-5xl category-fade-up">
            <Breadcrumb label={category ? category.label : "Not Found"} />

            {category ? (
              <>
                <span
                  className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-medium ${category.accent.chipBorder} ${category.accent.chipBg} ${category.accent.chipText}`}
                >
                  <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                  {category.shortLabel}
                </span>

                <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.1] tracking-tight sm:text-6xl">
                  <span
                    className={`bg-gradient-to-r bg-clip-text text-transparent ${category.accent.text}`}
                  >
                    {category.heroHeading}
                  </span>
                </h1>

                <p className="mt-6 max-w-2xl text-balance text-lg leading-relaxed text-zinc-400">
                  {category.heroDescription}
                </p>

                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <a
                    href="#articles"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-zinc-100 to-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-900 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_40px_-8px_rgba(255,255,255,0.3)]"
                  >
                    Explore Articles
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-zinc-100 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/[0.08]"
                  >
                    Contact Us
                  </Link>
                </div>
              </>
            ) : (
              <span className="inline-flex items-center gap-2 rounded-full border border-rose-500/25 bg-rose-500/10 px-4 py-1.5 text-xs font-medium text-rose-300">
                Unknown Category
              </span>
            )}
          </div>
        </section>

        {!category ? (
          <NotFoundSection slug={slug} />
        ) : (
          <>
            {/* Topics Grid */}
            <section className="border-b border-white/5 px-6 py-24">
              <div className="mx-auto max-w-6xl">
                <div className="mb-12 max-w-2xl">
                  <p className="mb-3 text-sm font-medium uppercase tracking-wider text-zinc-500">
                    Featured Topics
                  </p>
                  <h2 className="text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
                    What this category covers
                  </h2>
                </div>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {category.topics.map((topic) => (
                    <TopicCard key={topic.title} topic={topic} accent={category.accent} />
                  ))}
                </div>
              </div>
            </section>

            {/* Why This Category Matters */}
            <section className="border-b border-white/5 px-6 py-24">
              <div className="mx-auto max-w-3xl text-center">
                <p className="mb-3 text-sm font-medium uppercase tracking-wider text-zinc-500">
                  Why It Matters
                </p>
                <h2 className="mb-6 text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
                  {category.whyMatters.heading}
                </h2>
                <div className="space-y-4">
                  {category.whyMatters.body.map((paragraph) => (
                    <p key={paragraph} className="text-balance leading-relaxed text-zinc-400">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </section>

                        {/* Articles */}
            <section id="articles" className="border-b border-white/5 px-6 py-24">
              <div className="mx-auto max-w-6xl">
                <div className="mb-12 max-w-2xl">
                  <p className="mb-3 text-sm font-medium uppercase tracking-wider text-zinc-500">
                    Articles
                  </p>
                  <h2 className="text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
                    Latest {category.shortLabel} Insights
                  </h2>
                  <p className="mt-4 leading-relaxed text-zinc-400">
                    Practical SEO strategies, insights, and actionable guidance to help
                    businesses improve their search visibility and generate more organic
                    traffic.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {category.articles.map((article) => (
                    <ArticleCard
                      key={article.slug}
                      article={article}
                      accent={category.accent}
                    />
                  ))}
                </div>
              </div>
            </section>

            {/* Related Categories */}
            <section className="border-b border-white/5 px-6 py-24">
              <div className="mx-auto max-w-6xl">
                <div className="mb-12 max-w-2xl">
                  <p className="mb-3 text-sm font-medium uppercase tracking-wider text-zinc-500">
                    Related Categories
                  </p>
                  <h2 className="text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
                    Explore more SEO topics
                  </h2>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {getRelatedCategories(slug).map((related) => (
                    <RelatedCategoryCard key={related.slug} category={related} />
                  ))}
                </div>
              </div>
            </section>
          </>
        )}

        {/* Large CTA */}
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

        {/* Footer Navigation */}
        <footer className="px-6 py-12">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 border-t border-white/5 pt-8 text-sm text-zinc-500 sm:flex-row">
            <p className="flex items-center gap-2">
              <CompassIcon className="h-4 w-4" aria-hidden="true" />
              &copy; {new Date().getFullYear()} Igel G. Cudiera. All rights reserved.
            </p>
            <nav aria-label="Footer" className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
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
              <Link
                href="/contact"
                className="rounded-full border border-white/15 bg-white/[0.03] px-4 py-1.5 font-medium text-zinc-100 transition-colors hover:bg-white/[0.08]"
              >
                Hire Me
              </Link>
            </nav>
          </div>
        </footer>
      </main>
    </>
  );
}