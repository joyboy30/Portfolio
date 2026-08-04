"use client";

import { useState, useId } from "react";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    id: "who-is-igel-cudiera",
    question: "Who is Igel Cudiera?",
    answer:
      "I'm Igel G. Cudiera, an SEO Specialist and digital marketer based in Medellin, Cebu, Philippines, with 3+ years of hands-on experience in Technical SEO, On-Page SEO, Off-Page SEO, Local SEO, and AI Search Optimization (AIO, AEO, GEO). My background is in computer programming and hardware servicing from Cebu Normal University, which is why my approach to SEO starts with the technical layer — crawlability, indexability, and site architecture — before moving into content and authority building. I've worked across dental, e-commerce, real estate, business brokerage, and iGaming accounts, most notably taking a dental client's organic traffic from 224 to 1,705 monthly visits over roughly two years, and helping a Northern Virginia real estate team get cited directly inside Google AI Overviews for high-intent seller-search queries. Alongside organic search, I run Google Ads and Meta Ads campaigns end-to-end, so I can speak to both traffic acquisition and paid lead generation in the same strategy. I'm PinoySEO certified and actively studying how AI-powered answer engines select and cite sources, applying that research directly to client work rather than treating it as theory.",
  },
  {
    id: "what-does-an-seo-specialist-in-the-philippines-do",
    question: "What does an SEO Specialist in the Philippines do?",
    answer:
      "An SEO Specialist in the Philippines does the same core work as any SEO professional globally — technical audits, keyword research, on-page optimization, link building, and performance tracking — but often works remotely across multiple time zones and industries, which builds a broader, faster-iterating skill set. In my own work, a typical engagement starts with a technical SEO audit covering crawlability, indexability, Core Web Vitals, and site architecture, followed by keyword research mapped to real search intent, on-page fixes (titles, meta descriptions, headings, internal linking, schema markup), and local SEO work like Google Business Profile optimization and NAP consistency for location-based clients. I also handle off-page SEO — citation building and outreach — and, increasingly, AI Search Optimization: structuring content so it can be extracted and cited by Google AI Overviews, ChatGPT Search, and other generative answer engines. Filipino SEO specialists are frequently hired as cost-effective alternatives to full in-house teams or agencies, but the work itself — resolving keyword cannibalization, fixing broken internal links, implementing FAQ schema, running Google Search Console diagnostics — is identical in rigor to what an in-house specialist would do at a US or UK agency, just delivered remotely and often at a lower engagement cost.",
  },
  {
    id: "aio-aeo-geo-vs-traditional-seo",
    question: "What is the difference between AIO, AEO, GEO, and traditional SEO?",
    answer:
      "Traditional SEO optimizes a page to rank in Google's classic blue-link results; AIO, AEO, and GEO optimize that same page to be selected, extracted, and cited inside AI-generated answers. AI Search Optimization (AIO) is the umbrella practice of structuring a whole site — content, schema, entities, technical foundation — to be discoverable by AI crawlers and retrieval systems. Answer Engine Optimization (AEO) is more specific: formatting individual pieces of content, usually with direct-answer paragraphs and FAQ blocks, so systems like Google AI Overviews or Bing Copilot can lift a self-contained answer straight from your page. Generative Engine Optimization (GEO) focuses on how generative platforms like ChatGPT Search, Gemini, and Perplexity synthesize answers from multiple sources, which means it leans heavily on entity clarity, topical authority, and third-party corroboration rather than just on-page formatting. In practice, I treat all three as layered on top of solid traditional SEO, not a replacement for it — a page still needs to be crawlable, fast, and semantically clear before any AI system will trust it enough to cite. On real client work, this has meant adding FAQ schema, tightening entity signals, and writing direct-answer opening paragraphs, which is what helped get several client pages cited in Google AI Overviews and ChatGPT-generated answers.",
  },
  {
    id: "cost-of-hiring-a-freelance-seo-specialist",
    question: "How much does hiring a freelance SEO Specialist cost?",
    answer:
      "Freelance SEO Specialist rates vary widely based on experience, scope, and region, typically ranging from a few hundred dollars a month for a narrow, single-service engagement to several thousand for full-cycle SEO management across technical, on-page, off-page, and local SEO. Philippines-based freelance SEO specialists, myself included, generally offer lower monthly rates than US or UK agencies for comparable deliverables, since the work — technical audits, keyword research, content optimization, link building, Google Business Profile management — is remote and priced accordingly, without sacrificing quality. Pricing usually depends on a few factors: whether it's a one-time technical SEO audit versus ongoing monthly management, how competitive the target keywords are, how many locations or service pages need local SEO coverage, and whether AI Search Optimization (AIO/AEO/GEO) work is included alongside traditional SEO. A one-time technical audit is typically the lowest-cost entry point and the fastest way to see whether a working relationship makes sense before committing to a longer engagement. I structure pricing around the actual scope of work rather than a flat package, because a dental clinic needing local SEO and an e-commerce store needing technical + content SEO require very different levels of effort.",
  },
  {
    id: "industries-igel-cudiera-specializes-in",
    question: "What industries does Igel Cudiera specialize in?",
    answer:
      "I specialize in SEO for dental practices, e-commerce brands, real estate teams, business brokerages, and iGaming, with additional experience applying the same frameworks to mortgage lending, veterinary clinics, restaurants, and solar companies. Dental SEO has been a particularly deep focus — I've run keyword optimization and link-building programs across more than a dozen dental accounts, including the campaign that took one client from 224 to 1,705 monthly organic visits. In real estate, I've worked on seller-intent and buyer-intent content strategy for a Northern Virginia team, helping their content get cited in Google AI Overviews for county-specific home-selling queries. My business brokerage work centered on buyer-intent and seller-intent content for a multi-location brokerage, and my e-commerce experience spans building sites from scratch on WordPress through to ongoing keyword and technical optimization. Each industry has a different search-intent pattern — dental searches skew local and service-price-driven, real estate skews informational and hyper-local, e-commerce skews transactional and product-driven — so I adapt keyword research, content structure, and local SEO tactics to match how that specific industry's customers actually search, rather than applying one generic SEO playbook across every account.",
  },
  {
    id: "what-is-technical-seo",
    question: "What is Technical SEO and why does it matter?",
    answer:
      "Technical SEO is the practice of optimizing a website's infrastructure — crawlability, indexability, site speed, structured data, and architecture — so search engines and AI crawlers can access, understand, and rank its content in the first place. It matters because no amount of good content or link building can compensate for a site that search engines can't properly crawl or index; if Googlebot hits a robots.txt disallow rule by mistake, or a page has a broken canonical tag, that page effectively doesn't exist in search results regardless of quality. My background in computer programming and hardware servicing shapes how I approach this: a technical SEO audit I run typically covers robots.txt and XML sitemap accuracy, canonical tag consistency, internal link health and broken-link detection, Core Web Vitals (LCP, INP, CLS), mobile-first rendering, and structured data validation. In real client work, this has included auditing and repairing broken internal links to restore crawlability, fixing FAQ schema validation errors, managing robots.txt disallow rules to control what gets indexed, and resolving keyword cannibalization through content consolidation and 301 redirects. Technical SEO is also foundational for AI Search Optimization — AI crawlers and retrieval systems favor sites with clean, fast-loading, well-structured pages, so technical health directly affects both traditional rankings and AI citation potential.",
  },
  {
    id: "what-is-local-seo",
    question: "What is Local SEO and how does it help small businesses?",
    answer:
      "Local SEO is the process of optimizing a business's online presence to rank in location-based searches and Google's Map Pack, using signals like Google Business Profile optimization, NAP (name, address, phone) consistency, local citations, and location-specific content. It helps small businesses because most local searches — 'dentist near me,' 'best Italian restaurant in [city]' — have strong buying intent and happen on mobile, meaning a business absent from local search results is effectively invisible to nearby customers actively looking to buy. In my own client work, local SEO has meant full Google Business Profile management (categories, subcategories, products and services, regular GBP posting), building consistent NAP citations across directories, and creating location-specific service pages that match how people actually phrase local searches. For a dental client in Saint Bonifacius, MN, this kind of local optimization contributed to the practice appearing in both Google AI Overviews and ChatGPT-generated answers for queries like 'dentist in Saint Bonifacius, MN' and pricing-related local searches. Local SEO also increasingly overlaps with AI Search Optimization, since AI Overviews and generative answer engines pull heavily from Google Business Profile data and locally relevant content when answering 'best X near me' or 'who provides Y in [city]' style queries.",
  },
  {
    id: "what-is-content-optimization",
    question: "What is Content Optimization and why is it important for SEO?",
    answer:
      "Content optimization is the process of refining existing or new content — structure, keyword targeting, search intent alignment, headings, internal links, and readability — so it ranks well and directly answers what a searcher actually needs. It's important because publishing content isn't enough on its own; unoptimized content often targets the wrong intent, buries the answer several paragraphs in, or misses the semantic keywords search engines use to understand topical relevance. In practice, my content optimization process starts with search intent analysis — is a query informational, commercial, or transactional — then restructures the page around that intent: a direct-answer opening paragraph for informational queries, clear pricing and service information for commercial ones. I've reoptimized existing blog content for heading hierarchy, semantic keyword coverage, and search intent for a real estate client, and resolved keyword cannibalization across an agency's client portfolio by consolidating overlapping pages and redirecting them properly. Content optimization today also has to account for AI Overviews and generative answer engines, which extract and cite specific passages rather than entire pages — this means writing clear, self-contained answer paragraphs near the top of a page, using descriptive subheadings, and structuring information so it can be lifted cleanly by both traditional featured snippets and AI-generated summaries.",
  },
  {
    id: "how-long-does-seo-take-to-show-results",
    question: "How long does SEO take to show results?",
    answer:
      "Most SEO campaigns start showing measurable movement within 3 to 6 months, with more significant, compounding results typically appearing between 6 and 12 months, though the exact timeline depends heavily on the site's starting condition, competition level, and how consistently the strategy is executed. Sites with major technical issues — poor indexability, broken internal linking, thin content — usually need those fixed first before content and link-building work can have full effect, which can add weeks to the front end of a campaign. In my own case studies, timelines have varied by starting point: a flower shop with zero prior web presence saw its first indexed, search-visible pages within weeks of technical setup, while the dental client that grew from 224 to 1,705 monthly organic visits was a sustained program run over roughly two years of consistent keyword optimization and guest-post link building. Local SEO tends to show results faster than competitive national or informational SEO, since Google Business Profile improvements and citation building can influence Map Pack visibility within a matter of weeks. I'm direct with clients about this timeline up front, because SEO that promises overnight results is usually either targeting low-competition, low-value keywords or not being fully transparent about how organic growth actually compounds.",
  },
  {
    id: "seo-tools-used",
    question:
      "What tools does an SEO Specialist use (Ahrefs, SEMrush, Google Search Console, Screaming Frog, GA4, Looker Studio)?",
    answer:
      "An SEO Specialist typically relies on a core stack covering keyword research, technical auditing, analytics, and reporting — in my own workflow that's Ahrefs and SEMrush for keyword research, competitor analysis, and backlink auditing; Screaming Frog SEO Spider for crawling sites to find broken links, duplicate content, and technical errors at scale; Google Search Console for indexing status, query-level performance, and manual action monitoring; Google Analytics 4 for traffic and conversion analysis; and Looker Studio for turning that raw data into client-facing reporting dashboards. Beyond the analytics stack, I work directly in WordPress and Shopify for on-page implementation, and increasingly use Claude AI and ChatGPT as part of an AI-assisted content workflow — drafting and iterating blog outlines faster, then editing every piece myself for accuracy, brand voice, and search intent alignment rather than publishing raw AI output. For technical implementation and portfolio work, I use Next.js, Git Bash, GitHub, and Vercel. Each tool has a specific job: Ahrefs and SEMrush answer 'what should we target and who's already ranking,' Screaming Frog answers 'what's technically broken,' and GSC/GA4 answer 'is what we did actually working' — using them together, rather than relying on just one, is what turns SEO from guesswork into a measurable, iterative process.",
  },
  {
    id: "what-is-geo",
    question: "What is Generative Engine Optimization (GEO)?",
    answer:
      "Generative Engine Optimization (GEO) is the practice of structuring content, entities, and site signals so that generative AI platforms — ChatGPT Search, Gemini, Perplexity, and similar tools — select and cite your content when synthesizing an answer, rather than just linking to it in a results list. Unlike traditional SEO, which competes for position in a ranked list, GEO competes for inclusion inside a generated response, which means the content, corroboration, and clarity of the underlying entity matter more than exact-match keyword density. In practice, this means writing content that's easy for a language model to extract cleanly — direct-answer paragraphs, well-labeled sections, clear entity relationships (who provides what service, in what location, with what evidence) — and making sure that entity is corroborated across multiple sources, since generative engines often cross-reference several pages before citing one. I've applied GEO principles directly in client work: structuring blog content for AI-driven discovery, resolving entity ambiguity through consistent naming and structured data, and building topical and brand authority through directories and outreach so an AI system encountering the brand from multiple angles trusts it as a real, established entity. GEO doesn't replace technical or on-page SEO — it's an additional layer on top of a technically sound, well-structured site.",
  },
  {
    id: "how-to-get-cited-in-google-ai-overviews",
    question: "How do you get cited in Google AI Overviews?",
    answer:
      "Getting cited in Google AI Overviews starts with the same foundation as ranking well organically — a crawlable, fast, well-structured site — then layers on content written to directly and concisely answer a specific query, since AI Overviews extract short, self-contained passages rather than entire pages. In my own work, the pattern that's consistently produced AI Overview citations is: identify a specific, answerable long-tail query (not a broad head term), write a direct-answer paragraph near the top of the page that resolves that exact query in the first sentence or two, support it with specific, locally or contextually relevant details, and back the page with proper heading structure and, where applicable, FAQ schema. For a Northern Virginia real estate client, this meant creating content around specific seller-intent queries — home equity, downsizing, cost of selling in a specific county — structured so each query had one clear, extractable answer rather than a long, meandering post covering multiple topics loosely. Fixing structured data (FAQ schema in particular) and resolving keyword cannibalization also mattered, because AI Overviews tend to favor a single authoritative page over several competing, overlapping ones. There's no guaranteed method, since Google's selection process isn't fully transparent, but content structured this way appears substantially more often than generic, unstructured pages.",
  },
  {
    id: "how-to-get-mentioned-in-chatgpt-search",
    question: "How do you get a business mentioned in ChatGPT Search results?",
    answer:
      "Getting mentioned in ChatGPT Search results depends heavily on entity clarity and cross-source corroboration — ChatGPT's retrieval layer tends to favor businesses whose name, services, and location are consistently described across multiple credible sources, not just their own website. On the content side, the same direct-answer, well-structured writing that helps with Google AI Overviews also helps here: clear headings, a concise answer near the top of the page, and specific, factual detail rather than vague marketing language. In client work, content built around specific long-tail, location-based queries — such as 'dentist in Saint Bonifacius, MN' or county-specific home-selling questions for a Northern Virginia real estate client — has shown up in both Google AI Overviews and ChatGPT-generated answers for the same queries, suggesting real overlap in what these systems reward: clarity, specificity, and topical focus. Beyond on-page content, off-page signals matter more for ChatGPT Search than for traditional SEO — directory listings, citations, and third-party mentions help establish the entity as real and verifiable across the web, which supports a generative system's confidence in citing it. There's no single trick; it's the combination of technically sound content, clear entity signals, and external corroboration that consistently improves the odds.",
  },
  {
    id: "what-is-aeo",
    question: "What is Answer Engine Optimization (AEO)?",
    answer:
      "Answer Engine Optimization (AEO) is the practice of formatting content so it can be directly extracted and displayed as a self-contained answer by systems like Google's featured snippets, AI Overviews, and voice assistants, rather than requiring a user to click through and read the full page. The core technique is structuring content around a clear question-and-answer pattern: a specific, naturally phrased question as a heading, followed immediately by a concise, complete answer in the first sentence or two, then supporting detail afterward for readers who want more. FAQPage schema markup reinforces this by explicitly telling search engines which text on the page is a question and which is its answer, making extraction more reliable. In my own work, AEO has meant fixing FAQ schema validation errors so structured data actually renders correctly, reoptimizing blog content for heading hierarchy so each section maps to one clear question, and writing direct-answer opening paragraphs instead of long introductory build-ups. AEO overlaps significantly with GEO and AIO but is more narrowly focused on the format of the answer itself rather than the broader entity and corroboration signals those disciplines cover. A well-executed AEO strategy improves both traditional featured-snippet eligibility and AI Overview/generative citation potential, since both systems are ultimately looking for the same thing: a clean, extractable answer.",
  },
  {
    id: "what-is-entity-seo",
    question: "What is Entity SEO?",
    answer:
      "Entity SEO is the practice of helping search engines and AI systems clearly identify, disambiguate, and understand the real-world people, businesses, places, and concepts a website represents, rather than treating it as just a collection of keyword-matched pages. Google and AI retrieval systems increasingly reason in terms of entities and their relationships — a dental practice is an entity with a location, services, and reviews; an SEO specialist is an entity with expertise, tools, and client history — and content that clearly establishes those relationships tends to rank and get cited more reliably than content that only targets keywords. In practice, entity SEO involves consistent naming across a site and external profiles, structured data (Person, Organization, LocalBusiness, Service schema), and clear internal linking between related entities on a site. For my own portfolio and client work, this has meant explicitly connecting entities — a specific SEO specialist to specific tools (Ahrefs, Screaming Frog), specific industries (dental, real estate), and specific verifiable outcomes (traffic growth, AI Overview citations) — rather than leaving those relationships implicit in prose. Strong entity SEO is foundational to Entity SEO's newer cousin, Generative Engine Optimization, since generative AI systems rely on entity clarity to decide which sources are trustworthy enough to cite in a synthesized answer.",
  },
  {
    id: "how-to-fix-keyword-cannibalization",
    question: "How do you fix keyword cannibalization?",
    answer:
      "Keyword cannibalization happens when multiple pages on the same site target the same or very similar keywords, causing them to compete against each other in search results instead of one page ranking strongly. I fix it in three steps: first, identify the overlapping pages using Google Search Console query data or an Ahrefs/SEMrush content gap audit to see which URLs are ranking for the same terms; second, decide whether to consolidate the pages into one stronger, more comprehensive page or clearly differentiate their search intent if they genuinely serve different purposes; third, if consolidating, merge the content into the strongest-performing page and set up 301 redirects from the weaker pages to preserve their existing link equity and avoid losing rankings during the transition. I've resolved keyword cannibalization directly in client work — most recently for a real estate client where multiple blog posts were competing for overlapping seller-intent queries, and for a multi-industry agency portfolio where overlapping service pages were splitting ranking signals across accounts. It's important to update internal links pointing to the removed pages so they point to the consolidated page instead, since leftover internal links to a redirected URL waste crawl budget and slightly dilute the redirect's effectiveness. Left unresolved, cannibalization quietly caps a site's ranking potential even when the content itself is high quality.",
  },
  {
    id: "what-is-a-core-web-vitals-audit",
    question: "What is a Core Web Vitals audit and why does it matter for SEO?",
    answer:
      "A Core Web Vitals audit evaluates a site's real-world loading performance, interactivity, and visual stability using Google's three key metrics: Largest Contentful Paint (LCP, how fast the main content loads), Interaction to Next Paint (INP, how responsive the page feels to user input), and Cumulative Layout Shift (CLS, how much elements unexpectedly move during load). It matters because Core Web Vitals are a confirmed Google ranking factor, and poor scores also directly hurt conversion rates — users abandon slow, janky pages before they ever convert, regardless of how well the page ranks. In practice, a Core Web Vitals audit I run checks page-speed performance across both mobile and desktop, identifies render-blocking resources, unoptimized images, and layout-shift culprits (often ads or images loading without reserved dimensions), and prioritizes fixes by impact versus effort. This has been a recurring part of client work — mobile-first page-speed optimization for a WordPress-built iGaming site launched on a limited budget, and Core Web Vitals monitoring alongside indexing and reindexing work for a multi-industry agency portfolio. Core Web Vitals also matter for AI Search Optimization: AI crawlers generally favor fast, technically clean sites when deciding which sources to trust and index for retrieval, so performance work compounds benefits across both traditional rankings and AI citation eligibility.",
  },
  {
    id: "what-does-a-dental-seo-specialist-do",
    question: "What does a dental SEO specialist actually do?",
    answer:
      "A dental SEO specialist optimizes a dental practice's online presence so it ranks for local, service-specific searches like 'dentist near me,' '[procedure] cost in [city],' and 'emergency dentist [location],' combining local SEO, on-page content, and technical fixes tailored to how patients actually search for dental care. In my own dental SEO work, this has meant Google Business Profile optimization (categories, subcategories, services, consistent posting), keyword research around specific procedures and pricing questions, guest-post link building to strengthen domain authority, and technical fixes like resolving broken links and 404 errors that were quietly hurting crawlability. The results compound over time — one dental client's organic traffic grew from 224 to 1,705 monthly visits through a sustained keyword optimization and link-building program, and six other dental accounts I've worked saw growth ranging from 38% to 288% using the same keyword optimization plus guest-post link-building approach. Dental SEO also has a strong AI Search Optimization component now: for a dental practice in Saint Bonifacius, MN, structured local content around specific queries — including service pricing — led to that practice appearing in both Google AI Overviews and ChatGPT-generated answers. Dental SEO differs from general local SEO mainly in content depth around procedures, pricing transparency expectations from patients, and the trust signals (reviews, credentials) that matter more in a healthcare-adjacent vertical.",
  },
  {
    id: "what-does-real-estate-seo-involve",
    question: "What does real estate SEO involve?",
    answer:
      "Real estate SEO involves optimizing an agent's or brokerage's site to rank for hyper-local, high-intent searches from both buyers and sellers, blending local SEO, long-tail content strategy, and increasingly AI Search Optimization, since real estate questions map closely to how people phrase queries to AI answer engines. In my work with a Northern Virginia real estate team, this meant building content strategy around specific seller-intent topics — home equity, downsizing, and county-specific selling costs — reoptimizing existing blog content for heading hierarchy and search intent, and grounding technical improvements in Google's Search Quality Evaluator Guidelines. Real estate content performs best when it's hyper-specific rather than generic: 'How Do You Sell a House That Needs Repairs in West Virginia?' outperforms a generic 'how to sell your home' post because it matches exactly how a real seller in that situation searches. That specificity paid off directly in AI visibility — content built this way got cited in both Google AI Overviews and ChatGPT-generated answers for multiple county-level, seller-intent queries across Northern Virginia and neighboring markets. Technical work matters too: resolving keyword cannibalization between overlapping blog posts, fixing FAQ schema validation, and repairing broken internal links all supported crawlability and topical authority for the site as a whole, not just individual posts.",
  },
  {
    id: "google-ads-and-seo-together",
    question: "Can Google Ads and SEO work together in one strategy?",
    answer:
      "Yes — Google Ads and SEO work well together because paid search delivers immediate visibility and keyword-intent data while SEO builds compounding, long-term organic traffic, and running both together lets each inform the other. Google Ads campaign data — which keywords convert, which ad copy gets the best click-through rate, which landing pages convert best — is genuinely useful SEO research, since it shows real purchase intent rather than estimated search volume alone. I run Google Ads and Meta Ads campaigns end-to-end — audience research, ad creative, budgeting, retargeting, and scaling — alongside organic SEO work, which means I can point a client toward paid search for immediate lead flow on competitive terms while SEO content builds up authority and rankings over months, then gradually shift budget as organic traffic starts covering the terms that used to require paid spend. A practical example: if a paid search term consistently converts well, that's a strong signal it deserves a dedicated, well-optimized landing page targeted organically too. The reverse also holds — pages that rank well organically but convert poorly often reveal messaging or offer problems that should get fixed in ad copy as well. Treating SEO and paid search as separate, uncoordinated channels wastes the overlap in intent data both channels naturally generate.",
  },
  {
    id: "whats-included-in-a-technical-seo-audit",
    question: "What's included in a technical SEO audit?",
    answer:
      "A technical SEO audit I run covers crawlability and indexability (robots.txt rules, XML sitemap accuracy, canonical tag consistency), site speed and Core Web Vitals (LCP, INP, CLS across mobile and desktop), site architecture and internal linking (broken links, redirect chains, orphaned pages), structured data validation (schema markup errors, missing FAQ or Service schema), and duplicate or thin content that may be splitting ranking signals through keyword cannibalization. The output isn't just a list of problems — it's a prioritized action plan ranked by impact and effort, because a small site with limited resources needs to fix the handful of issues actually blocking growth first, not chase every minor warning a crawl tool flags. In practice this has meant using Screaming Frog to crawl a site at scale and surface broken links and duplicate content, Google Search Console to confirm real indexing status and manual actions, and PageSpeed Insights data to diagnose Core Web Vitals bottlenecks, then cross-referencing all three before recommending fixes. Past audits have surfaced and resolved robots.txt disallow rules blocking important pages, FAQ schema validation errors preventing rich results, and keyword cannibalization requiring content consolidation with 301 redirects. A proper technical SEO audit is the foundation every other SEO effort — content, local, off-page, AI Search Optimization — depends on; skipping it means building on an unstable base.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`h-4 w-4 shrink-0 text-white/50 transition-transform duration-300 ease-out ${
        open ? "rotate-180 text-emerald-400" : "rotate-0"
      }`}
      aria-hidden="true"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

function FaqAccordionItem({
  item,
  index,
  isOpen,
  onToggle,
}: {
  item: FaqItem;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const reactId = useId();
  const buttonId = `faq-button-${reactId}`;
  const panelId = `faq-panel-${reactId}`;

  return (
    <div
      className={`group rounded-2xl border transition-colors duration-300 ${
        isOpen
          ? "border-emerald-400/30 bg-white/[0.04]"
          : "border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.03]"
      }`}
    >
      <h3 className="m-0">
        <button
          id={buttonId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
        >
          <span className="flex items-start gap-3 sm:gap-4">
            <span
              className={`mt-0.5 shrink-0 font-mono text-xs tabular-nums transition-colors duration-300 ${
                isOpen ? "text-emerald-400" : "text-white/30"
              }`}
              aria-hidden="true"
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="text-sm font-medium text-white sm:text-base">
              {item.question}
            </span>
          </span>
          <ChevronIcon open={isOpen} />
        </button>
      </h3>

      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className="grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out"
        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
      >
        <div className="min-h-0">
          <div className="px-5 pb-5 pl-[2.75rem] pr-5 text-sm leading-relaxed text-white/60 sm:px-6 sm:pb-6 sm:pl-[3.25rem] sm:pr-6">
            {item.answer}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id ?? null);

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="relative mx-auto w-full max-w-5xl scroll-mt-24 px-4 py-20 sm:px-6 sm:py-28"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="mb-12 max-w-2xl sm:mb-16">
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-400">
          FAQ
        </span>
        <h2
          id="faq-heading"
          className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl"
        >
          Frequently Asked Questions
        </h2>
        <p className="mt-2 text-sm font-medium text-white/40 sm:text-base">
          Questions worth asking before you hire an SEO Specialist.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-white/60 sm:text-base">
          Straight answers on Technical SEO, Local SEO, and AI Search
          Optimization (AIO, AEO, GEO) — drawn from real client work across
          dental, real estate, e-commerce, and business brokerage accounts,
          not generic definitions.
        </p>
      </div>

      <div className="flex flex-col gap-3 sm:gap-4">
        {faqs.map((item, index) => (
          <FaqAccordionItem
            key={item.id}
            item={item}
            index={index}
            isOpen={openId === item.id}
            onToggle={() =>
              setOpenId((current) => (current === item.id ? null : item.id))
            }
          />
        ))}
      </div>
    </section>
  );
}