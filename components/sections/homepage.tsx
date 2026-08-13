import Link from "next/link";

/**
 * Homepage service cards.
 *
 * A card title renders as an internal link when `href` is set, and as plain
 * text when it is `undefined`. E-commerce SEO has no dedicated route yet, so
 * it stays plain text. Add a path there later and it becomes a link with no
 * other changes needed.
 */
const services: { title: string; href?: string; body: string }[] = [
  {
    title: "Technical SEO",
    href: "/services/seo/technical-seo",
    body: "Crawlability, indexability, site architecture, Core Web Vitals, and structured data: the layer everything else depends on.",
  },
  {
    title: "On-Page SEO",
    href: "/services/seo/on-page-seo",
    body: "Search intent mapping, heading hierarchy, internal linking, and content built to answer the question a searcher actually asked.",
  },
  {
    title: "Off-Page SEO",
    href: "/services/seo/off-page-seo",
    body: "Link building, citation building, and the third-party corroboration that tells search engines a brand is established and real.",
  },
  {
    title: "Local SEO",
    href: "/services/seo/local-seo",
    body: "Google Business Profile management, NAP consistency, citations, and location pages that match how nearby customers search.",
  },
  {
    title: "E-commerce SEO",
    href: undefined, // no dedicated route yet
    body: "Category and product page optimization, faceted navigation issues, duplicate content, and transactional keyword coverage.",
  },
  {
    title: "AI Search Optimization",
    href: "/services/seo/ai-search-optimization",
    body: "Structuring content and entity signals for AI Overviews and ChatGPT Search, layered on top of a technically sound site.",
  },
];

const ctaLinks = [
  { label: "About Me", href: "/about" },
  { label: "My Experience", href: "/experience" },
  { label: "View Case Studies", href: "/case-studies" },
  { label: "Explore SEO Services", href: "/services" },
  { label: "Read My SEO Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

const linkClass =
  "text-accent-light underline decoration-accent/40 underline-offset-4 transition-colors hover:decoration-accent";

export default function Homepage() {
  return (
    <>
      {/* SEO services positioning */}
      <section className="relative py-20 sm:py-24">
        <div className="container-shell">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            What I Do
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Professional SEO services, handled by one specialist.
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted">
            I work as a freelance SEO specialist in the Philippines, which means
            you talk to the person doing the work. No account manager relaying
            questions to a team you never meet. Every audit, every technical fix,
            and every piece of keyword research comes from the same hands, and if
            something is not working, I will tell you that instead of padding a
            monthly report.
          </p>

          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted">
            My background is in computer programming and hardware servicing, so I
            start where most engagements should: the technical layer. Once a site
            can actually be crawled, indexed, and understood, content and
            authority work has something solid to build on. You can see the full
            range of my{" "}
            <Link href="/services/seo" className={linkClass}>
              SEO services
            </Link>{" "}
            if you want the detailed version.
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
        </div>
      </section>

      {/* Who I help */}
      <section className="relative py-16 sm:py-20">
        <div className="container-shell">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Who I work with.
          </h2>

          <div className="mt-8 grid gap-10 lg:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold text-accent-light">
                Local and service-area businesses
              </h3>
              <p className="mt-3 leading-relaxed text-muted">
                Dental practices, clinics, contractors, restaurants, and other
                businesses that live or die by proximity searches. The work here
                is practical: Google Business Profile optimization, consistent
                citations, and service pages written the way people in that area
                actually phrase a search. Service-area businesses without a
                walk-in storefront need a slightly different setup, and that is
                worth getting right early.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-accent-light">
                E-commerce brands
              </h3>
              <p className="mt-3 leading-relaxed text-muted">
                Product and category pages carry most of the commercial intent on
                an online store, and they are also where technical problems tend
                to hide: thin variants, duplicate URLs from filtering, and
                templates that never got proper title or schema treatment.
                E-commerce SEO is as much cleanup as it is content.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-accent-light">
                Businesses targeting a national audience
              </h3>
              <p className="mt-3 leading-relaxed text-muted">
                Competing beyond one city usually means building topical depth
                rather than chasing single keywords. That looks like content
                clusters, clean internal linking, and resolving pages that quietly
                compete with each other for the same query.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-accent-light">
                Businesses selling internationally
              </h3>
              <p className="mt-3 leading-relaxed text-muted">
                International and global SEO adds its own layer: hreflang,
                regional targeting, language and currency variants, and search
                behaviour that shifts by market. I already work remotely across
                time zones, which makes this a natural fit rather than an
                exception.
              </p>
            </div>
          </div>

          <p className="mt-10 max-w-3xl leading-relaxed text-muted-2">
            Across all of them the goal is the same: organic visibility that turns
            into qualified traffic and real enquiries, tracked in Google Search
            Console, GA4, and Looker Studio so you can see what changed and why.
            Organic search is the core of what I do, though when a business needs
            visibility before that compounds, I also run{" "}
            <Link href="/services/paid-ads" className={linkClass}>
              Google Ads
            </Link>{" "}
            and{" "}
            <Link href="/services/meta-ads" className={linkClass}>
              Meta Ads
            </Link>{" "}
            campaigns end to end.
          </p>
        </div>
      </section>

      {/* AI Search Optimization */}
      <section className="relative py-16 sm:py-20">
        <div className="container-shell">
          <div className="glass-card rounded-2xl border border-border-strong p-8 sm:p-10">
            <p className="text-sm font-medium uppercase tracking-widest text-accent">
              AI Search Optimization
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Ranking is no longer the whole job.
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted">
              A growing share of searches now end inside an answer rather than on
              a results page. Google AI Overviews summarise and cite. ChatGPT
              Search synthesises from a handful of sources. Voice assistants read
              one response aloud. If your page is not readable and extractable by
              those systems, you can rank well and still be invisible at the
              moment someone is deciding.
            </p>

            <div className="mt-8 grid gap-8 md:grid-cols-3">
              <div>
                <h3 className="text-base font-semibold text-foreground">
                  AIO: the foundation
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-2">
                  Making a whole site discoverable to AI crawlers and retrieval
                  systems, through clean technical health, clear structure, and
                  content that is unambiguous about what it covers.
                </p>
              </div>

              <div>
                <h3 className="text-base font-semibold text-foreground">
                  AEO: the format
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-2">
                  Self-contained answers near the top of a page, question-shaped
                  headings, and valid FAQ schema, so a system can lift a complete
                  response without guesswork.
                </p>
              </div>

              <div>
                <h3 className="text-base font-semibold text-foreground">
                  GEO: the entity
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-2">
                  Entity clarity and outside corroboration. Generative engines
                  cross-reference several sources before citing one, so consistent
                  naming, structured data, and third-party mentions matter as much
                  as on-page work.
                </p>
              </div>
            </div>

            <p className="mt-8 max-w-3xl leading-relaxed text-muted">
              I use AI in the workflow too, drafting outlines, stress-testing
              angles, and checking coverage, but every piece gets edited for
              accuracy, voice, and intent before it goes live. Raw generated
              content reads like raw generated content, and search systems are
              getting better at noticing.
            </p>

            <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted-2">
              One honest caveat: nobody controls what an AI system decides to
              cite, and anyone promising a guaranteed spot in AI Overviews or a
              guaranteed mention in ChatGPT is selling something they cannot
              deliver. What can be improved is the quality, structure, technical
              accessibility, and entity clarity of your content, which is what
              makes citation more likely when the opportunity comes up.
            </p>
          </div>
        </div>
      </section>

      {/* Internal CTA */}
      <section className="relative py-16 sm:py-20">
        <div className="container-shell">
          <div className="rounded-2xl border border-border bg-white/[0.03] p-8 sm:p-10">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Have a look around before you decide.
            </h2>

            <p className="mt-4 max-w-2xl leading-relaxed text-muted">
              You should not have to take a stranger&rsquo;s word for it. The work
              is documented: where I have worked, what I actually did, and what
              came of it. Scope and pricing get built around what your site needs
              rather than a fixed package, and a one-time technical audit is
              usually the lowest-risk way to find out whether working together
              makes sense.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {ctaLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-full border border-border-strong px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent-light"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}