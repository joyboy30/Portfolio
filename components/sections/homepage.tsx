import Link from "next/link";

/* ------------------------------------------------------------------ */
/* Types                                                               */
/* ------------------------------------------------------------------ */

interface ServiceCard {
  title: string;
  href?: string;
  body: string;
}

interface CitationGroup {
  label: string;
  queries: string[];
  note: string;
}

interface Credential {
  kind: "Training" | "Education";
  detail: string;
}

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */

/**
 * Homepage service cards.
 *
 * A card title renders as an internal link when `href` is set, and as plain
 * text when it is `undefined`. E-commerce SEO has no dedicated route yet, so
 * it stays plain text. Add a path there later and it becomes a link with no
 * other changes needed.
 */
const services: ServiceCard[] = [
  {
    title: "Technical SEO",
    href: "/services/seo/technical-seo",
    body: "Crawlability, indexability, site architecture, Core Web Vitals, and structured data. The layer everything else sits on.",
  },
  {
    title: "On-Page SEO",
    href: "/services/seo/on-page-seo",
    body: "Search intent mapping, heading structure, internal linking, and content that answers the question someone actually typed.",
  },
  {
    title: "Local SEO",
    href: "/services/seo/local-seo",
    body: "Google Business Profile management, NAP consistency, citations, and location pages that match how nearby customers phrase things.",
  },
  {
    title: "Off-Page SEO",
    href: "/services/seo/off-page-seo",
    body: "Link building, citation building, and the third-party corroboration that tells search engines a brand is real.",
  },
  {
    title: "AI Search Optimization",
    href: "/services/seo/ai-search-optimization",
    body: "Structuring content and entity signals for AI Overviews and ChatGPT Search, on top of a technically sound site.",
  },
  {
    title: "E-commerce SEO",
    href: undefined,
    body: "Category and product page optimisation, faceted navigation, duplicate content from filtering, and transactional keyword coverage.",
  },
];

const citationGroups: CitationGroup[] = [
  {
    label: "Real estate, Northern Virginia and neighbouring markets",
    queries: [
      "How much does selling a house in Loudoun County really cost",
      "Are sellers more willing to negotiate in Northern Virginia",
      "Is it harder to sell a townhouse or single-family home in Prince William County",
      "When is the best time to sell a house in Baltimore County",
    ],
    note: "Plus four more, listed in full on the case studies page.",
  },
  {
    label: "Dental, Saint Bonifacius, Minnesota",
    queries: [
      "Dentist in Saint Bonifacius MN",
      "How much does a dental cleaning cost in Saint Bonifacius MN",
    ],
    note: "Both cited in Google AI Overviews and in ChatGPT answers.",
  },
  {
    label: "Business brokerage, multiple US cities",
    queries: [
      "How do I sell my business in Los Angeles",
      "What is the best way to sell a small business in Los Angeles",
      "How do I sell my business in Las Vegas",
      "How can I find a buyer for my business in Atlanta GA",
    ],
    note: "Cited in Google AI Overviews.",
  },
  {
    label: "Restaurants, Florida and North Carolina",
    queries: [
      "What is the best Italian restaurant in Davidson NC",
      "What are the best gourmet desserts to try in Grayton Beach",
    ],
    note: "Both cited in Google AI Overviews and ChatGPT.",
  },
];

const credentials: Credential[] = [
  { kind: "Training", detail: "Online SEO Bootcamp, Pinoy SEO, May 2023" },
  { kind: "Training", detail: "SEO Sprint, SEO Workout, 2025" },
  { kind: "Training", detail: "Technical SEO, SEO Workout, 2025" },
  {
    kind: "Training",
    detail: "Google Ads Training, Inspired Filipino Freelancers, September 2023",
  },
  {
    kind: "Training",
    detail: "Facebook Ads Management, ProVA Virtual Assistant, November 2023",
  },
  {
    kind: "Education",
    detail:
      "Cebu Normal University, Computer Programming and Hardware Servicing, 2011 to 2012",
  },
];

const tools: string[] = [
  "Ahrefs",
  "SEMrush",
  "Screaming Frog",
  "Google Search Console",
  "Google Analytics 4",
  "Looker Studio",
  "WordPress",
  "Shopify",
  "Duda",
  "Google Business Profile",
  "Google Ads",
  "Meta Ads Manager",
];

/* ------------------------------------------------------------------ */
/* Shared class tokens                                                 */
/* ------------------------------------------------------------------ */

const linkClass =
  "text-accent-light underline decoration-accent/40 underline-offset-4 transition-colors hover:decoration-accent";

const buttonPrimaryClass =
  "rounded-full border border-accent bg-accent/10 px-5 py-2.5 text-sm font-medium text-accent-light transition-colors hover:bg-accent/20";

const buttonSecondaryClass =
  "rounded-full border border-border-strong px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent-light";

const eyebrowClass = "text-sm font-medium uppercase tracking-widest text-accent";

const h2Class =
  "mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl";

/* ------------------------------------------------------------------ */
/* Component                                                           */
/* ------------------------------------------------------------------ */

export default function Homepage() {
  return (
    <>
      {/* SECTION 3: SELECTED RESULTS */}
      <section className="relative py-20 sm:py-24">
        <div className="container-shell">
          <p className={eyebrowClass}>Selected results</p>

          <h2 className={h2Class}>What the work has actually produced.</h2>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted">
            Two accounts, with the periods they cover and where the figures came
            from. The full set, including six more dental accounts and the AI
            citation records, is on{" "}
            <Link href="/case-studies" className={linkClass}>
              the case studies page
            </Link>
            .
          </p>

          <div className="mt-12 space-y-8">
            <article className="glass-card rounded-2xl border border-border-strong p-8 sm:p-10">
              <h3 className="text-xl font-semibold text-foreground sm:text-2xl">
                Wincrest Orthodontics, dental, United States
              </h3>

              <dl className="mt-6 grid gap-6 lg:grid-cols-2">
                <div>
                  <dt className="text-sm font-semibold text-accent-light">
                    The problem
                  </dt>
                  <dd className="mt-2 leading-relaxed text-muted">
                    An orthodontic practice already running an SEO program, with
                    organic traffic that had grown but plateaued.
                  </dd>
                </div>

                <div>
                  <dt className="text-sm font-semibold text-accent-light">
                    What I did
                  </dt>
                  <dd className="mt-2 leading-relaxed text-muted">
                    Keyword optimisation across service and location pages, guest
                    post link building, and technical cleanup including broken
                    link repair and 404 resolution.
                  </dd>
                </div>

                <div>
                  <dt className="text-sm font-semibold text-accent-light">
                    Period
                  </dt>
                  <dd className="mt-2 leading-relaxed text-muted">
                    January 2024 to May 2024, as part of the MyPortal Marketing
                    agency portfolio.
                  </dd>
                </div>

                <div>
                  <dt className="text-sm font-semibold text-accent-light">
                    Source
                  </dt>
                  <dd className="mt-2 leading-relaxed text-muted">
                    Traffic reports and Ahrefs data, both on the case studies
                    page.
                  </dd>
                </div>
              </dl>

              <p className="mt-8 max-w-3xl leading-relaxed text-muted">
                The account reached 1,705 monthly organic visits in May 2024. It
                was at 224 in June 2022, when the client&rsquo;s SEO program
                began. I took the account over in January 2024 and owned it
                through May 2024, so the portion of that growth I can claim is
                the final stretch rather than the whole arc.
              </p>
            </article>

            <article className="glass-card rounded-2xl border border-border-strong p-8 sm:p-10">
              <h3 className="text-xl font-semibold text-foreground sm:text-2xl">
                The Jamil Brothers Realty Group, real estate, Northern Virginia
              </h3>

              <dl className="mt-6 grid gap-6 lg:grid-cols-2">
                <div>
                  <dt className="text-sm font-semibold text-accent-light">
                    The problem
                  </dt>
                  <dd className="mt-2 leading-relaxed text-muted">
                    A real estate team with existing blog content that was
                    competing against itself for overlapping seller-intent
                    queries, and was not being picked up by AI answer engines for
                    the searches their clients were actually making.
                  </dd>
                </div>

                <div>
                  <dt className="text-sm font-semibold text-accent-light">
                    What I did
                  </dt>
                  <dd className="mt-2 leading-relaxed text-muted">
                    Built new content around specific seller-intent topics
                    including home equity, downsizing, and county-level selling
                    costs. Reoptimised existing posts for heading hierarchy and
                    search intent. Resolved keyword cannibalisation by
                    consolidating overlapping posts and 301-redirecting the
                    weaker ones. Fixed FAQ schema validation errors. Repaired
                    broken internal links. Built directory and outreach authority
                    signals.
                  </dd>
                </div>

                <div>
                  <dt className="text-sm font-semibold text-accent-light">
                    Period
                  </dt>
                  <dd className="mt-2 leading-relaxed text-muted">
                    April 2026 to July 2026.
                  </dd>
                </div>

                <div>
                  <dt className="text-sm font-semibold text-accent-light">
                    Result
                  </dt>
                  <dd className="mt-2 leading-relaxed text-muted">
                    Pages were cited in Google AI Overviews for eight named
                    seller-intent queries across Fairfax County, Loudoun County,
                    Prince William County, Baltimore County, Columbia MD and West
                    Virginia. Seven of the eight also appeared in
                    ChatGPT-generated answers.
                  </dd>
                </div>
              </dl>

              <p className="mt-8 max-w-3xl leading-relaxed text-muted">
                The pattern held across counties, which suggests it was the
                method rather than one lucky page. Specific beat general every
                time: a post answering how to sell a house that needs repairs in
                West Virginia was picked up where a generic guide to selling your
                home would not have been.
              </p>
            </article>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-lg leading-relaxed text-muted">
              Want the same thing looked at on your site?
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/case-studies" className={buttonSecondaryClass}>
                View the full case studies
              </Link>
              <Link href="/contact" className={buttonPrimaryClass}>
                Send me your site
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: AI SEARCH CITATIONS */}
      <section className="relative py-16 sm:py-20">
        <div className="container-shell">
          <div className="glass-card rounded-2xl border border-border-strong p-8 sm:p-10">
            <p className={eyebrowClass}>AI search</p>

            <h2 className={h2Class}>
              Where client pages have been cited in AI answers.
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted">
              When someone asks Google or ChatGPT a question instead of typing a
              keyword, the answer is assembled from a handful of sources and only
              some of them get named. Getting named is a different job from
              ranking, and it is measurable in the sense that you can go and
              check.
            </p>

            <p className="mt-4 max-w-3xl leading-relaxed text-muted">
              Below are searches where pages I worked on were cited. These are
              the queries themselves, not a summary of them.
            </p>

            <div className="mt-10 grid gap-8 md:grid-cols-2">
              {citationGroups.map((group) => (
                <div key={group.label}>
                  <h3 className="text-base font-semibold text-accent-light">
                    {group.label}
                  </h3>
                  <ul className="mt-4 space-y-2">
                    {group.queries.map((query) => (
                      <li
                        key={query}
                        className="rounded-lg border border-border px-4 py-2.5 text-sm leading-relaxed text-muted"
                      >
                        {query}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-3 text-sm text-muted-2">{group.note}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-2xl border border-border bg-white/[0.03] p-6 sm:p-8">
              <h3 className="text-base font-semibold text-foreground">
                The honest part
              </h3>
              <p className="mt-3 max-w-3xl leading-relaxed text-muted">
                Nobody controls what an AI system decides to cite. Anyone
                promising a guaranteed spot in AI Overviews or a guaranteed
                mention in ChatGPT is selling something they cannot deliver. What
                can be improved is the structure, technical accessibility and
                entity clarity of the content, which is what makes citation more
                likely when the opportunity comes up.
              </p>
              <p className="mt-4 max-w-3xl leading-relaxed text-muted">
                The pattern that has worked: pick a specific answerable query
                rather than a broad one, answer it in the first two sentences of
                the page, support it with detail that is actually local or
                actually specific, and make sure the page is not competing with
                three others on the same site.
              </p>
            </div>

            <p className="mt-8 text-sm leading-relaxed text-muted-2">
              Every cited query across all seven client sites is listed in{" "}
              <Link href="/case-studies" className={linkClass}>
                the full citation records
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5: WHAT I DO */}
      <section className="relative py-16 sm:py-20">
        <div className="container-shell">
          <p className={eyebrowClass}>Services</p>

          <h2 className={h2Class}>What I do.</h2>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted">
            You talk to the person doing the work. Every audit, technical fix and
            keyword brief comes from the same hands, and if something is not
            working I will tell you rather than pad a monthly report. Scope gets
            built around what a site actually needs rather than a fixed package.
          </p>

          <div className="glass-card mt-12 rounded-2xl border border-border-strong p-8 sm:p-10">
            <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <div key={service.title} className="group relative">
                  <h3 className="flex items-start justify-between gap-3 text-base font-semibold text-foreground transition-colors group-hover:text-accent-light">
                    {service.href ? (
                      <Link
                        href={service.href}
                        className="after:absolute after:-inset-3 after:content-['']"
                      >
                        {service.title}
                      </Link>
                    ) : (
                      <span>{service.title}</span>
                    )}
                    {service.href ? (
                      <span
                        aria-hidden="true"
                        className="mt-0.5 shrink-0 text-accent opacity-0 transition-opacity group-hover:opacity-100"
                      >
                        &rarr;
                      </span>
                    ) : null}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-2">
                    {service.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-8 max-w-3xl leading-relaxed text-muted-2">
            Organic search is the core of the work. When a business needs
            visibility before that compounds, I also run{" "}
            <Link href="/services/paid-ads" className={linkClass}>
              Google Ads and Meta Ads campaigns
            </Link>{" "}
            end to end.
          </p>
        </div>
      </section>

      {/* SECTION 6: BASED IN CEBU */}
      <section className="relative py-16 sm:py-20">
        <div className="container-shell">
          <p className={eyebrowClass}>Location</p>

          <h2 className={h2Class}>
            Based in Cebu, working with clients across several time zones.
          </h2>

          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <div className="space-y-5">
              <p className="leading-relaxed text-muted">
                I am an SEO specialist in Cebu, based in Medellin in the north of
                the province, and most of my client work has been for businesses
                in the United States. That combination is worth being clear
                about, because it cuts both ways.
              </p>

              <p className="leading-relaxed text-muted">
                Working with US accounts means my day is already built around a
                different time zone, and it means most of the local SEO work I
                have done has been in markets I had to learn from the search data
                rather than from living there. That is a real constraint and it
                makes you rigorous about it: you cannot assume you know how
                people in Saint Bonifacius, Minnesota search for a dentist, so
                you go and find out.
              </p>
            </div>

            <div className="space-y-5">
              <p className="leading-relaxed text-muted">
                For a business in Cebu City, Mandaue, Lapu-Lapu or anywhere else
                in the province, the practical difference is that the work
                happens remotely and the meetings happen on your schedule rather
                than mine. The{" "}
                <Link href="/services/seo/local-seo" className={linkClass}>
                  local SEO work
                </Link>{" "}
                itself is the same discipline it is anywhere: getting the Google
                Business Profile categories, services and posting right, making
                sure the business name, address and phone number match across
                every directory that lists you, building location and service
                pages that use the phrasing people here actually search with, and
                watching what shows up in the map pack rather than guessing at
                it.
              </p>

              <div className="rounded-2xl border border-border bg-white/[0.03] p-6">
                <p className="leading-relaxed text-muted">
                  If you are a Cebu business, one thing worth knowing before you
                  hire anyone: I have not yet documented a Philippine client
                  engagement on this site. The dental, real estate, brokerage and
                  restaurant work is all overseas. I would rather say that than
                  let you assume otherwise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: WHO I WORK WITH */}
      <section className="relative py-16 sm:py-20">
        <div className="container-shell">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Who I work with.
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted">
            Most of my work has been with local and service-area businesses,
            dental practices, real estate teams, and e-commerce stores. The
            pattern across them: commercial intent concentrated in a small number
            of pages, and technical problems quietly capping what those pages can
            do.
          </p>

          <div className="mt-10 grid gap-10 lg:grid-cols-3">
            <div>
              <h3 className="text-lg font-semibold text-accent-light">
                Local and service-area businesses
              </h3>
              <p className="mt-3 leading-relaxed text-muted">
                Dental practices, clinics, restaurants, contractors. Google
                Business Profile, citations, and service pages written the way
                people in that area actually search. Service-area businesses
                without a walk-in address need a different setup, and it is worth
                getting right early.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-accent-light">
                E-commerce
              </h3>
              <p className="mt-3 leading-relaxed text-muted">
                Category and product pages carry most of the commercial intent
                and hide most of the technical problems: thin variants, duplicate
                URLs from filtering, templates that never got proper title or
                schema treatment.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-accent-light">
                Businesses competing beyond one city
              </h3>
              <p className="mt-3 leading-relaxed text-muted">
                Usually a topical depth problem rather than a keyword problem.
                Content clusters, clean internal linking, and untangling pages
                that compete with each other.
              </p>
            </div>
          </div>

          <p className="mt-10 max-w-3xl leading-relaxed text-muted-2">
            Across all of them the measurement is the same: Google Search
            Console, GA4 and Looker Studio, so you can see what changed and when.
          </p>
        </div>
      </section>

      {/* SECTION 8: HOW AN ENGAGEMENT RUNS */}
      <section className="relative py-16 sm:py-20">
        <div className="container-shell">
          <p className={eyebrowClass}>Process</p>

          <h2 className={h2Class}>How an engagement runs.</h2>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted">
            The order matters more than the list. Fixing content on a site that
            cannot be crawled properly is wasted work, so the technical pass
            comes first.
          </p>

          <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <li>
              <p className="text-sm font-medium tabular-nums text-accent">01</p>
              <h3 className="mt-2 text-base font-semibold text-foreground">
                Audit
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-2">
                <Link href="/services/seo/technical-seo" className={linkClass}>
                  A full technical pass
                </Link>{" "}
                first: crawlability, indexability, robots and canonical rules,
                Core Web Vitals, broken links, and pages competing with each
                other. The output is a prioritised list, not every warning a
                crawler produced.
              </p>
            </li>

            <li>
              <p className="text-sm font-medium tabular-nums text-accent">02</p>
              <h3 className="mt-2 text-base font-semibold text-foreground">
                Research
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-2">
                What the business sells, who is already ranking for it, and what
                people actually type. Search demand mapped to the pages that
                should own it.
              </p>
            </li>

            <li>
              <p className="text-sm font-medium tabular-nums text-accent">03</p>
              <h3 className="mt-2 text-base font-semibold text-foreground">
                Fix
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-2">
                The technical items from the audit, in impact order. Redirects,
                indexing problems, schema errors, internal link repair.
              </p>
            </li>

            <li>
              <p className="text-sm font-medium tabular-nums text-accent">04</p>
              <h3 className="mt-2 text-base font-semibold text-foreground">
                Build
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-2">
                On-page work and content: titles, headings, internal linking,
                structured data, and pages written to answer one question
                cleanly. Local SEO and link building where they apply.
              </p>
            </li>

            <li>
              <p className="text-sm font-medium tabular-nums text-accent">05</p>
              <h3 className="mt-2 text-base font-semibold text-foreground">
                Measure
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-2">
                Search Console and GA4, reviewed against what changed and when.
                If something is not working I will say so rather than reframe it.
              </p>
            </li>
          </ol>
        </div>
      </section>

      {/* SECTION 9: ABOUT IGEL */}
      <section className="relative py-16 sm:py-20">
        <div className="container-shell">
          <div className="glass-card rounded-2xl border border-border-strong p-8 sm:p-10">
            <p className={eyebrowClass}>About</p>

            <h2 className={h2Class}>About Igel.</h2>

            <div className="mt-8 grid gap-10 lg:grid-cols-5">
              <div className="space-y-5 lg:col-span-3">
                <p className="leading-relaxed text-muted">
                  I am Igel Cudiera, an SEO specialist based in Medellin, Cebu. I
                  studied computer programming and hardware servicing at Cebu
                  Normal University and came to SEO from that side rather than
                  from marketing, which is why the technical layer is where I
                  start. It is a habit that has been useful: a lot of what has
                  actually moved client numbers has been unglamorous, like
                  finding a robots.txt rule blocking pages that mattered, or
                  consolidating four blog posts that were splitting the same
                  ranking signal four ways.
                </p>

                <p className="leading-relaxed text-muted">
                  My first SEO client was in March 2023, a flower and bouquet
                  shop with no website at all, which I built on WordPress and set
                  up properly from the start. Since then: an iGaming site in
                  South Korea, two years running full-cycle SEO across a
                  multi-industry agency portfolio, and a Northern Virginia real
                  estate team. Most of that work has been dental and real estate.
                </p>

                <p className="leading-relaxed text-muted">
                  I speak English, Tagalog and Cebuano, and I work remotely with
                  clients in the US and elsewhere.
                </p>

                <p className="text-sm leading-relaxed text-muted-2">
                  All five{" "}
                  <Link href="/certifications" className={linkClass}>
                    certificates
                  </Link>{" "}
                  are viewable in full, and the{" "}
                  <Link href="/experience" className={linkClass}>
                    role by role record
                  </Link>{" "}
                  names every account.
                </p>
              </div>

              <div className="lg:col-span-2">
                <h3 className="text-sm font-semibold uppercase tracking-widest text-accent">
                  Training and education
                </h3>
                <ul className="mt-5 space-y-4">
                  {credentials.map((credential) => (
                    <li
                      key={credential.detail}
                      className="border-l border-border-strong pl-4"
                    >
                      <p className="text-xs font-medium uppercase tracking-wider text-muted-2">
                        {credential.kind}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-muted">
                        {credential.detail}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10: TOOLS */}
      <section className="relative py-16 sm:py-20">
        <div className="container-shell">
          <p className={eyebrowClass}>Tools</p>

          <h2 className={h2Class}>What I use.</h2>

          <p className="mt-6 max-w-3xl leading-relaxed text-muted">
            Ahrefs and SEMrush for research and competitor analysis. Screaming
            Frog for crawling at scale. Google Search Console and GA4 for what
            actually happened. Looker Studio for reporting. WordPress, Shopify
            and Duda for implementation. Google Business Profile, Google Ads and
            Meta Ads Manager for the rest.
          </p>

          <ul className="mt-8 flex flex-wrap gap-2.5">
            {tools.map((tool) => (
              <li
                key={tool}
                className="rounded-full border border-border px-4 py-2 text-sm text-muted-2"
              >
                {tool}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SECTION 11: WAYS TO WORK TOGETHER */}
      <section className="relative py-16 sm:py-20">
        <div className="container-shell">
          <p className={eyebrowClass}>Engagement</p>

          <h2 className={h2Class}>Ways to work together.</h2>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted">
            Three ways this usually starts.
          </p>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            <div className="glass-card rounded-2xl border border-border-strong p-8">
              <h3 className="text-lg font-semibold text-foreground">
                A one-time technical audit
              </h3>
              <p className="mt-4 leading-relaxed text-muted">
                The lowest-risk way to find out whether working together makes
                sense. You get a prioritised list of what is actually blocking
                the site, with the reasoning, and you can hand it to anyone. Most
                sites I audit have between three and six issues that matter and a
                long tail that does not.
              </p>
            </div>

            <div className="glass-card rounded-2xl border border-border-strong p-8">
              <h3 className="text-lg font-semibold text-foreground">
                Ongoing SEO
              </h3>
              <p className="mt-4 leading-relaxed text-muted">
                Monthly work across technical, on-page, local and off-page,
                scoped to what the site needs. Pricing is built around scope
                rather than a package, because a single-location dental practice
                needing local SEO and an e-commerce store needing technical plus
                content work are not the same amount of effort.
              </p>
            </div>

            <div className="glass-card rounded-2xl border border-border-strong p-8">
              <h3 className="text-lg font-semibold text-foreground">
                A full-time role
              </h3>
              <p className="mt-4 leading-relaxed text-muted">
                I am open to full-time SEO positions, remote or Cebu-based. The{" "}
                <a href="/resume/Igel-Cudiera-Resume.pdf" className={linkClass}>
                  resume
                </a>{" "}
                covers the role by role detail, and{" "}
                <Link href="/experience" className={linkClass}>
                  the experience page
                </Link>{" "}
                has the same record with the accounts named.
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-2xl leading-relaxed text-muted-2">
              After you send a message I reply within 24 hours. The first reply
              is an honest read on what is realistic for your site, not a
              proposal deck.
            </p>
            <Link href="/contact" className={buttonPrimaryClass}>
              Start with an audit
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 12: FINAL CTA */}
      <section className="relative py-20 sm:py-24">
        <div className="container-shell">
          <div className="rounded-2xl border border-border bg-white/[0.03] p-8 sm:p-12">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Tell me what you are trying to rank for.
            </h2>

            <p className="mt-4 max-w-2xl leading-relaxed text-muted">
              Send me your domain and the searches you want to win. You will get
              an honest read on what is realistic and what it would take, usually
              within 24 hours. No sales sequence, no proposal deck.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className={buttonPrimaryClass}>
                Send me your site
              </Link>
              <Link href="/case-studies" className={buttonSecondaryClass}>
                See the client results
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}