// Central content source for the portfolio. Keeping copy here (rather than
// scattered inside components) makes it trivial to update wording later
// without touching layout/animation code.

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Certifications", href: "#certifications" },
  { label: "AI Portfolio", href: "#ai-portfolio" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
  { label: "Blog", href: "/blog" },
];

export const heroStats = [
  { value: 3, suffix: "", label: "Years of SEO Experience" },
  { value: 8, suffix: "", label: "Industries Served" },
  { value: 9, suffix: "+", label: "SEO Platforms & Tools" },
  { value: 100, suffix: "%", label: "Remote-Ready SEO Specialist" },
];

export const aboutHighlights = [
  {
    title: "Technical foundation",
    body: "A background in computer programming and hardware servicing means I don't just run SEO checklists — I understand the systems underneath them: site architecture, crawlability, indexability, page speed, and how search engines actually discover and rank a website. That technical SEO foundation is what separates a technical SEO consultant who can run a proper technical SEO audit from someone who only edits meta tags.",
  },
  {
    title: "Full-funnel marketing",
    body: "Beyond organic search, I run Google Ads and Meta Ads campaigns end-to-end — audience research, ad creative, budgeting, retargeting, and scaling — so I can speak to both organic search visibility and paid lead generation in the same conversation, with conversion optimization built into every strategy from day one.",
  },
  {
    title: "Built for what's next",
    body: "Search is changing fast. Alongside traditional search engine optimization, I actively study and apply AI Search Optimization (AIO), Answer Engine Optimization (AEO), and Generative Engine Optimization (GEO) — including entity optimization, structured data, and AI citation optimization — to keep client visibility strong across Google AI Overviews and generative AI platforms as more searches move beyond the traditional results page.",
  },
];

export const industries = [
  "E-commerce",
  "Dental Clinics",
  "Real Estate",
  "Business Brokerage",
  "iGaming",
];

export const skillGroups = [
  {
    category: "Core SEO",
    icon: "Search",
    skills: [
      "Technical SEO",
      "On-Page SEO",
      "Off-Page SEO",
      "Local SEO",
      "SEO Audits",
      "Keyword Research",
      "Competitor Analysis",
      "Schema Markup",
      "Core Web Vitals",
    ],
  },
  {
    category: "Paid Media",
    icon: "Megaphone",
    skills: [
      "Google Ads (PPC)",
      "Meta Ads",
      "Ads Manager Setup",
      "Audience & Retargeting",
      "Campaign Budgeting",
      "Split Testing / Scaling",
      "Sales Funnels",
    ],
  },
  {
    category: "Local & GBP",
    icon: "MapPin",
    skills: [
      "Google Business Profile Optimization",
      "NAP Consistency",
      "Categories & Subcategories",
      "GBP Posting",
      "Local Citations",
      "Link Building",
    ],
  },
  {
    category: "The Future of Search",
    icon: "Sparkles",
    skills: [
      "AI Search Optimization (AIO)",
      "Answer Engine Optimization (AEO)",
      "Generative Engine Optimization (GEO)",
      "AI-Assisted Content Creation",
    ],
  },
  {
    category: "Creative & AI Production",
    icon: "Wand2",
    skills: [
      "AI Ad Creative (Canva+Gemini)",
      "AI Content Writing (Claude AI)",
      "Graphic Design",
    ],
  },
];

export type AIPortfolioItem = {
  title: string;
  icon: string;
  description: string;
  details: string[];
};

export const aiPortfolio: AIPortfolioItem[] = [
  {
    title: "AI Ad Creative",
    icon: "ImageIcon",
    description:
      "Using Gemini, ChatGPT, and Canva to generate scroll-stopping ad visuals for website blogs, Google Ads, and Meta Ads campaigns — generative AI tools that cut creative turnaround time without sacrificing quality or brand consistency.",
    details: [
      "Image ad generation for website blogs, Google Ads and Meta Ads campaigns",
      "Rapid concept testing before committing to a full shoot",
      "Prompt-crafted visuals matched to brand and offer",
    ],
  },
  {
    title: "AI Content Writing",
    icon: "PenLine",
    description:
      "Using Claude AI for AI content creation — drafting and iterating blog content, keyword research, and topic angles quickly, then editing every piece for brand voice, search intent, and on-page SEO best practices.",
    details: [
      "Blog outline and draft generation for faster content turnaround",
      "Keyword and topic research to guide content strategy and content hubs",
      "First-draft acceleration for blog creation and website copy",
    ],
  },
  {
    title: "AI Search Optimization",
    icon: "Sparkles",
    description:
      "What is AI Search Optimization? It's the practice of structuring website content — especially blogs — so it gets pulled into AI Overviews, AI-generated answers, and citations, not just traditional search rankings, including off-page opportunities in AI search optimization such as entity signals and structured data, helping brands stay visible as more searches happen through AI.",
    details: [
      "AI Search Optimization (AIO) - structuring blog content for AI-driven discovery and LLM optimization",
      "Answer Engine Optimization (AEO) - formatting content to directly answer user queries and win featured snippets",
      "Generative Engine Optimization (GEO) - optimizing content and entity relationships to be cited in AI-generated responses",
    ],
  },
];

export const tools = [
  { name: "Google Search Console", icon: "Search" },
  { name: "Google Analytics 4", icon: "BarChart3" },
  { name: "Ahrefs", icon: "LineChart" },
  { name: "SEMrush", icon: "TrendingUp" },
  { name: "WordPress", icon: "Layout" },
  { name: "Shopify", icon: "ShoppingBag" },
  { name: "Duda", icon: "PenTool" },
  { name: "Lofty CRM", icon: "Building2" },
  { name: "Google Business Profile", icon: "MapPin" },
  { name: "Meta Ads Manager", icon: "Megaphone" },
  { name: "Google Ads", icon: "Target" },
  { name: "ChatGPT / AI Tools", icon: "Sparkles" },
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  industry: string;
  summary: string;
  responsibilities: string[];
};

export const experience: Experience[] = [
  {
    company: "The Jamil Brothers Realty Group",
    role: "SEO Specialist",
    period: "April 2026 – July 2026",
    industry: "Real Estate",
    summary:
      "Worked as an SEO specialist for a Northern Virginia real estate company, focused on content strategy, AI Search Optimization (AIO), Answer Engine Optimization (AEO), and technical SEO. Helped improve search visibility and organic traffic across Google Search, Google AI Overviews, and AI-powered search platforms through structured content, entity optimization, and technical improvements grounded in Google's Search Quality Evaluator Guidelines.",
    responsibilities: [
      "Created SEO blogs targeting home sellers, downsizing, and home equity topics",
      "Reoptimized existing blogs for heading hierarchy, semantic keywords, and search intent",
      "Optimized content for AI Overviews, ChatGPT, and AEO/GEO visibility",
      "Resolved keyword cannibalization with content consolidation and 301 redirects",
      "Fixed FAQ Schema validation and structured data / schema markup implementation",
      "Built topical and brand authority via directories, Web 2.0 backlinks, and outreach",
      "Audited and repaired broken internal links to improve crawlability and indexability",
      "Supported rankings and topical relevance across search intent queries and topic clusters",
    ],
  },
  {
    company: "MyPortal Marketing Inc.",
    role: "SEO Specialist",
    period: "January 2024 — March 2026",
    industry: "Dental · Business Brokerage · Real Estate · E-commerce",
    summary:
      "Full-cycle SEO specialist for a multi-industry marketing agency, owning on-page SEO, technical SEO, off-page SEO, and local SEO services across a portfolio of client accounts spanning dental, ecommerce, and real estate SEO work.",
    responsibilities: [
      "Keyword research, competitor analysis, blog creation, and internal linking for keyword mapping",
      "Fixed broken links and 404 errors; managed robots.txt disallow rules for crawlability",
      "Indexing, reindexing, and Core Web Vitals / mobile-first page-speed optimization",
      "Google Business Profile posting, link building, and local citations for local search engine optimization",
      "GBP local SEO: NAP consistency, categories, subcategories, products & services",
    ],
  },
  {
    company: "Zltoto Sports",
    role: "SEO Specialist (iGaming Client)",
    period: "August 2023 — November 2023",
    industry: "iGaming · South Korea",
    summary:
      "Built and optimized a WordPress website for an international iGaming client on a limited budget, prioritizing the highest-leverage technical SEO and on-page SEO techniques as an early international SEO consultant engagement.",
    responsibilities: [
      "Website build on WordPress with SEO-friendly site architecture",
      "On-page SEO analysis focused for maximum impact under budget constraints",
      "Local SEO and local citations for regional search visibility",
      "Google Search Console setup and Core Web Vitals optimization",
      "Mobile-first optimization for page speed and usability",
    ],
  },
  {
    company: "Ivy Flowers and Bouquet Shop",
    role: "SEO Specialist (Hands-On Training Client)",
    period: "March 2023 — May 2023",
    industry: "E-commerce",
    summary:
      "Built a website from the ground up and implemented foundational on-page and technical SEO as part of hands-on training — the ecommerce SEO project that started my SEO career and search engine optimization specialist journey.",
    responsibilities: [
      "Website designed and built from scratch on WordPress",
      "Google Search Console and Google Analytics 4 setup",
      "XML sitemap submission, indexing, and reindexing",
      "Keyword research and meta title / description optimization",
      "On-page SEO techniques and local citation building",
    ],
  },
];

export type CaseStudy = {
  slug: string;
  title: string;
  industry: string;
  industryTag: string;
  timeframe: string;
  confidential: boolean;
  challenge: string;
  strategy: string;
  implementation: string[];
  tools: string[];
  outcome: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "ecommerce-launch",
    title: "From Zero to Search-Ready: E-commerce SEO Foundation",
    industry: "E-commerce · Flowers & Gifting",
    industryTag: "E-commerce",
    timeframe: "3-month engagement",
    confidential: true,
    challenge:
      "A local flower and bouquet shop had no website and no presence in Google search at all — every order came from word of mouth or social media, with no organic traffic and no way to capture people actively searching to buy.",
    strategy:
      "Build a WordPress site designed around how customers actually search for gifting and flower delivery, then lay every core technical SEO and on-page SEO foundation correctly from day one instead of retrofitting it later — an ecommerce SEO strategy built for search visibility and conversion optimization from launch.",
    implementation: [
      "Designed and built the full website from scratch on WordPress with clean site architecture",
      "Connected Google Search Console and Google Analytics 4 for visibility from launch day",
      "Ran keyword research around gifting, occasions, and local delivery search intent",
      "Optimized meta titles and descriptions across every page and product for SERP visibility",
      "Submitted and monitored the XML sitemap; managed indexing and reindexing for indexability",
      "Built local citations to strengthen local relevance signals and local search engine optimization",
    ],
    tools: ["WordPress", "Google Search Console", "Google Analytics 4"],
    outcome: [
      "Established the shop's first indexed, search-visible web presence",
      "Created a repeatable on-page SEO structure the client could scale with new products",
      "Set up the analytics foundation needed to measure every future marketing and conversion decision",
    ],
  },
  {
    slug: "igaming-lean-budget",
    title: "High-Impact SEO on a Limited Budget: International iGaming Launch",
    industry: "iGaming · International (South Korea)",
    industryTag: "iGaming",
    timeframe: "4-month engagement",
    confidential: true,
    challenge:
      "An international iGaming client needed a competitive web presence in a notoriously difficult, high-competition niche — with a limited budget that ruled out the usual heavy-spend, multi-tool international SEO services approach.",
    strategy:
      "Prioritize ruthlessly as an iGaming SEO consultant: instead of spreading effort thin across every SEO lever, concentrate on the highest-leverage areas — on-page SEO, local relevance, and technical SEO health — that would move rankings and organic traffic fastest without additional tool spend.",
    implementation: [
      "Built the website on WordPress with SEO-friendly, crawlable site architecture from the start",
      "Focused on-page SEO techniques across core landing pages",
      "Built local citations to establish relevance and trustworthiness signals",
      "Connected Google Search Console to monitor indexing, crawlability, and search performance",
      "Optimized Core Web Vitals and mobile-first experience for speed-sensitive ranking factors",
    ],
    tools: ["WordPress", "Google Search Console", "Core Web Vitals tooling"],
    outcome: [
      "Delivered a technically sound, search-ready site within budget constraints",
      "Proved that disciplined prioritization can substitute for a large SEO budget",
      "Became the first of several international clients in a competitive, regulation-sensitive vertical",
    ],
  },
  {
    slug: "multi-industry-agency",
    title: "Scaling SEO Across Four Industries Inside a Marketing Agency",
    industry: "Dental · Business Brokerage · Real Estate · E-commerce",
    industryTag: "Multi-Industry",
    timeframe: "Jan 2024 — Mar 2026 (ongoing)",
    confidential: true,
    challenge:
      "A marketing agency needed one SEO specialist who could manage on-page SEO, technical SEO, off-page SEO, and local SEO services consistently across client accounts in four very different industries — including dental SEO and real estate SEO — each with different search intent, compliance considerations, and local-search needs.",
    strategy:
      "Standardize a repeatable SEO strategy and website optimization system — audits, technical fixes, content strategy, and local optimization — that flexes to each industry's search behavior while keeping quality, topical authority, and reporting consistent across every account.",
    implementation: [
      "Keyword research, competitor analysis, blog creation, and internal linking per account for stronger topic clusters",
      "Diagnosed and fixed broken links, 404 errors, and unwanted crawl paths via robots.txt and canonical tags",
      "Managed indexing / reindexing cycles and monitored Core Web Vitals and mobile-first page speed",
      "Ran offpage SEO link building and local citation campaigns for off-page authority",
      "Optimized Google Business Profiles: NAP consistency, categories, subcategories, products, and services across accounts",
      "Scheduled ongoing Google Business Profile posts to maintain local engagement and brand authority",
    ],
    tools: [
      "Google Search Console",
      "Google Analytics 4",
      "Ahrefs",
      "SEMrush",
      "WordPress",
      "Google Business Profile",
    ],
    outcome: [
      "Sustained a two-year-plus engagement across four distinct industries",
      "Built a technical SEO process (broken-link fixes, robots.txt hygiene, reindexing) that reduced recurring crawl errors and improved crawlability",
      "Improved local search consistency and search visibility for every client through standardized NAP and GBP management",
    ],
  },
];

export type Certification = {
  title: string;
  issuer: string;
  date: string;
  image: string;
  description: string;
};

export const certifications: Certification[] = [
  {
    title: "Online SEO Bootcamp",
    issuer: "Pinoy SEO",
    date: "May 2023",
    image: "/certificates/pinoy-seo-certificate.jpg",
    description: "Foundational SEO training covering core on-page SEO and off-page SEO principles.",
  },
  {
    title: "SEO Sprint",
    issuer: "SEO Workout",
    date: "2025 · 15+ hours",
    image: "/certificates/seo-sprint-certificate.jpg",
    description: "Intensive, applied SEO sprint covering SEO audits, SEO strategy, and hands-on execution.",
  },
  {
    title: "Technical SEO",
    issuer: "SEO Workout",
    date: "2025 · 15+ hours",
    image: "/certificates/technical-seo-certificate.jpg",
    description: "Deep technical SEO training: crawlability, indexability, site health, and Core Web Vitals.",
  },
  {
    title: "Google Ads Training",
    issuer: "Inspired Filipino Freelancers",
    date: "September 2023",
    image: "/certificates/google-ads-certificate.jpg",
    description: "Two-day Google Ads training as part of a Virtual Assistant Skills Enhancement Program.",
  },
  {
    title: "Facebook Ads Management",
    issuer: "ProVA Virtual Assistant",
    date: "November 2023",
    image: "/certificates/meta-ads-certificate.jpg",
    description:
      "Ads structure, Ads Manager, campaign types, budgeting, split testing/scaling, and retargeting for lead generation.",
  },
];

export const timeline = [
  { year: "2023", label: "Pinoy SEO", detail: "Completed foundational SEO training" },
  { year: "2023", label: "Ivy Flowers and Bouquet Shop", detail: "First hands-on ecommerce SEO client" },
  { year: "2023", label: "ZltotoSports", detail: "First international iGaming SEO client (South Korea)" },
  { year: "2023", label: "Meta & Google Ads Certifications", detail: "Facebook Ads Internship + Google Ads training" },
  { year: "2024", label: "MyPortal Marketing Agency", detail: "Multi-industry SEO specialist role begins" },
  { year: "2025", label: "SEO Workout", detail: "Advanced SEO Sprint + Technical SEO certifications" },
  { year: "2026", label: "AI Search Optimization", detail: "Actively applying AIO, AEO & GEO for clients" },
];

export const seoProcess = [
  { step: "Discovery", detail: "Understand the business, audience, competitors, search intent, and current search visibility." },
  { step: "Technical Audit", detail: "Run a full technical SEO audit — crawlability, indexability, and structural issues — before anything else." },
  { step: "Keyword Research", detail: "Map real search demand and search intent to the pages that should rank, building topic clusters and keyword mapping." },
  { step: "On-Page Optimization", detail: "Titles, meta descriptions, headings, internal linking, structured data, and content structure." },
  { step: "Technical Fixes", detail: "Resolve broken links, 404s, robots.txt and canonical tag issues, and indexing problems." },
  { step: "Content Optimization", detail: "Improve and expand content to match search intent, build content hubs, and answer real questions." },
  { step: "Local SEO", detail: "Google Business Profile, NAP consistency, local citations, and local search engine optimization." },
  { step: "Off-Page SEO", detail: "Link building and citation building to grow authority, trustworthiness, and brand authority." },
  { step: "Performance Monitoring", detail: "Track rankings, organic traffic, and Core Web Vitals — then iterate the SEO strategy." },
];

export type Service = {
  title: string;
  icon: string;
  description: string;
  outcomes: string[];
};

export const services: Service[] = [
  {
    title: "Technical SEO Services & Technical SEO Consultant",
    icon: "SearchCheck",
    description:
      "A full technical SEO audit and diagnosis of your site's indexing, crawlability, speed, structure, and Core Web Vitals — with a prioritized action plan, not just a list of problems. Ideal for businesses that need a hands-on technical SEO consultant rather than a generic checklist.",
    outcomes: ["Faster, healthier crawling & indexing", "Improved Core Web Vitals", "Clear, prioritized fix list"],
  },
  {
    title: "On-Page SEO Services & Content Optimization",
    icon: "FileSearch",
    description:
      "Keyword research and onpage SEO techniques that align your pages with real search intent — titles, meta descriptions, headings, internal linking, and schema markup, backed by an onpage SEO checklist refined across dozens of client accounts.",
    outcomes: ["Higher relevance for target keywords", "Improved click-through from search results", "Structured data for rich results and featured snippets"],
  },
  {
    title: "Local SEO Services & Google Business Profile Management",
    icon: "MapPinned",
    description:
      "Full local SEO services — NAP consistency, categories, products/services, GBP posting, and local citation building to win the map pack for local businesses, dental clinics, and real estate teams alike.",
    outcomes: ["Stronger local map pack visibility", "Consistent NAP across the web", "More calls, visits, and bookings"],
  },
  {
    title: "Google Ads & Meta Ads Management",
    icon: "Megaphone",
    description:
      "End-to-end paid media management — Ads Manager setup, audience and creative testing, budgeting, retargeting, and scaling — built to complement organic SEO strategy with reliable lead generation.",
    outcomes: ["Structured, testable campaigns", "Lower cost per lead over time", "Retargeting funnels that convert"],
  },
  {
    title: "AI Search Optimization (AIO / AEO / GEO)",
    icon: "Sparkles",
    description:
      "Positioning your content to be found and cited by AI Overviews, generative AI, and AI answer engines — the AI search optimization layer traditional search engine optimization alone doesn't cover, including entity optimization and AI citation optimization.",
    outcomes: ["Visibility inside AI-generated answers", "Content structured for answer engines", "Future-proofed, AI-ready search strategy"],
  },
  {
    title: "Full-Site SEO Management & Ongoing SEO Consultancy",
    icon: "LayoutDashboard",
    description:
      "Ongoing, hands-on SEO management and technical SEO consultancy for businesses that want a dedicated freelance SEO specialist rather than a rotating agency team — professional SEO services built around transparent, accountable execution.",
    outcomes: ["Consistent monthly SEO execution", "Transparent reporting", "One accountable point of contact"],
  },
];