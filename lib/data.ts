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
];

export const heroStats = [
  { value: 3, suffix: "+", label: "Years in SEO" },
  { value: 5, suffix: "", label: "Industries served" },
  { value: 9, suffix: "+", label: "Platforms & tools" },
  { value: 100, suffix: "%", label: "Remote-ready" },
];

export const aboutHighlights = [
  {
    title: "Technical foundation",
    body: "A background in computer programming and hardware servicing means I don't just run SEO checklists — I understand the systems underneath them: site architecture, indexing, page speed, and how search engines actually crawl a website.",
  },
  {
    title: "Full-funnel marketing",
    body: "Beyond organic search, I run Google Ads and Meta Ads campaigns end-to-end — audience research, ad creative, budgeting, retargeting, and scaling — so I can speak to both organic and paid growth in the same conversation.",
  },
  {
    title: "Built for what's next",
    body: "Search is changing fast. Alongside traditional SEO, I actively study and apply AI Search Optimization (AIO), Answer Engine Optimization (AEO), and Generative Engine Optimization (GEO) to keep client visibility strong as AI answer engines grow.",
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
      "AI Copywriting (Claude AI)",
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
      "Using Gemini, ChatGPT, and Canva to generate scroll-stopping ad visuals for Website blogs, Google ads and Meta Ads campaigns cutting creative turnaround time without sacrificing quality.",
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
      "Using Claude AI to draft and iterate blog content, keyword research, and topic angles quickly then editing for brand voice and SEO intent.",
    details: [
      "Blog outline and draft generation for faster content turnaround",
      "Keyword and topic research to guide content planning",
      "First-draft acceleration for blog posts and website copy",
    ],
  },
  {
    title: "AI Search Optimization",
    icon: "Sparkles",
    description:
      "What is AI Search Optimization? It's the practice of structuring website content especially blogs so it gets pulled into AI-generated answers, overviews, and citations, not just traditional search rankings, helping brands stay visible as more searches happen through AI.",
    details: [
      "AI Search Optimization (AIO) - structuring blog content for AI-driven discovery",
      "Answer Engine Optimization (AEO) - formatting content to directly answer user queries",
      "Generative Engine Optimization (GEO) - optimizing content to be cited in AI-generated responses",
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
    company: "MyPortal Marketing Agency",
    role: "SEO Specialist",
    period: "January 2024 — March 2026",
    industry: "Dental · Business Brokerage · Real Estate · E-commerce",
    summary:
      "Full-cycle SEO specialist for a multi-industry marketing agency, owning on-page, technical, off-page, and local SEO across a portfolio of client accounts.",
    responsibilities: [
      "Keyword research, competitor analysis, blog creation, and internal linking",
      "Fixed broken links and 404 errors; managed robots.txt disallow rules",
      "Indexing, reindexing, and Core Web Vitals / mobile page-speed optimization",
      "Google Business Profile posting, link building, and local citations",
      "GBP local SEO: NAP consistency, categories, subcategories, products & services",
    ],
  },
  {
    company: "ZltotoSports",
    role: "SEO Specialist (First iGaming Client)",
    period: "August 2023 — November 2023",
    industry: "iGaming · South Korea",
    summary:
      "Built and optimized a WordPress website for an international iGaming client on a limited budget, prioritizing the highest-leverage SEO work.",
    responsibilities: [
      "Website build on WordPress",
      "On-page SEO focused for maximum impact under budget constraints",
      "Local SEO and local citations",
      "Google Search Console setup and Core Web Vitals optimization",
      "Mobile optimization",
    ],
  },
  {
    company: "Ivy Flowers and Bouquet Shop",
    role: "SEO Specialist (Hands-On Training Client)",
    period: "March 2023 — May 2023",
    industry: "E-commerce",
    summary:
      "Built a website from the ground up and implemented foundational SEO as part of hands-on training — the project that started my SEO career.",
    responsibilities: [
      "Website designed and built from scratch on WordPress",
      "Google Search Console and Google Analytics 4 setup",
      "XML sitemap submission, indexing, and reindexing",
      "Keyword research and meta title / description optimization",
      "On-page SEO and local citation building",
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
      "A local flower and bouquet shop had no website and no presence in Google search at all — every order came from word of mouth or social media, with no way to capture people actively searching to buy.",
    strategy:
      "Build a WordPress site designed around how customers actually search for gifting and flower delivery, then lay every core technical and on-page SEO foundation correctly from day one instead of retrofitting it later.",
    implementation: [
      "Designed and built the full website from scratch on WordPress",
      "Connected Google Search Console and Google Analytics 4 for visibility from launch day",
      "Ran keyword research around gifting, occasions, and local delivery intent",
      "Optimized meta titles and descriptions across every page and product",
      "Submitted and monitored the XML sitemap; managed indexing and reindexing",
      "Built local citations to strengthen local relevance signals",
    ],
    tools: ["WordPress", "Google Search Console", "Google Analytics 4"],
    outcome: [
      "Established the shop's first indexed, search-visible web presence",
      "Created a repeatable on-page SEO structure the client could scale with new products",
      "Set up the analytics foundation needed to measure every future marketing decision",
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
      "An international iGaming client needed a competitive web presence in a notoriously difficult, high-competition niche — with a limited budget that ruled out the usual heavy-spend, multi-tool SEO approach.",
    strategy:
      "Prioritize ruthlessly: instead of spreading effort thin across every SEO lever, concentrate on the highest-leverage areas — on-page SEO, local relevance, and technical health — that would move the needle fastest without additional tool spend.",
    implementation: [
      "Built the website on WordPress with SEO-friendly structure from the start",
      "Focused on-page SEO across core landing pages",
      "Built local citations to establish relevance and trust signals",
      "Connected Google Search Console to monitor indexing and search performance",
      "Optimized Core Web Vitals and mobile experience for speed-sensitive rankings factors",
    ],
    tools: ["WordPress", "Google Search Console", "Core Web Vitals tooling"],
    outcome: [
      "Delivered a technically sound, search-ready site within budget constraints",
      "Proved that disciplined prioritization can substitute for a large SEO budget",
      "Became the first of several international clients in a competitive vertical",
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
      "A marketing agency needed one SEO specialist who could manage on-page, technical, off-page, and local SEO consistently across client accounts in four very different industries — each with different search intent, compliance considerations, and local-search needs.",
    strategy:
      "Standardize a repeatable SEO operating system — audits, technical fixes, content, and local optimization — that flexes to each industry's search behavior while keeping quality and reporting consistent across every account.",
    implementation: [
      "Keyword research, competitor analysis, blog creation, and internal linking per account",
      "Diagnosed and fixed broken links, 404 errors, and unwanted crawl paths via robots.txt",
      "Managed indexing / reindexing cycles and monitored Core Web Vitals and mobile speed",
      "Ran link building and local citation campaigns for off-page authority",
      "Optimized Google Business Profiles: NAP consistency, categories, subcategories, products, and services across accounts",
      "Scheduled ongoing Google Business Profile posts to maintain local engagement",
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
      "Built a technical SEO process (broken-link fixes, robots.txt hygiene, reindexing) that reduced recurring crawl errors",
      "Improved local search consistency for every client through standardized NAP and GBP management",
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
    description: "Foundational SEO training covering core on-page and off-page principles.",
  },
  {
    title: "SEO Sprint",
    issuer: "SEO Workout",
    date: "2025 · 15+ hours",
    image: "/certificates/seo-sprint-certificate.jpg",
    description: "Intensive, applied SEO sprint covering audits, strategy, and execution.",
  },
  {
    title: "Technical SEO",
    issuer: "SEO Workout",
    date: "2025 · 15+ hours",
    image: "/certificates/technical-seo-certificate.jpg",
    description: "Deep technical SEO training: crawling, indexing, site health, and Core Web Vitals.",
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
      "Ads structure, Ads Manager, campaign types, budgeting, split testing/scaling, and retargeting.",
  },
];

export const timeline = [
  { year: "2023", label: "Pinoy SEO", detail: "Completed foundational SEO training" },
  { year: "2023", label: "Ivy Flowers and Bouquet Shop", detail: "First hands-on SEO client — E-commerce" },
  { year: "2023", label: "ZltotoSports", detail: "First international iGaming client (South Korea)" },
  { year: "2023", label: "Meta & Google Ads Certifications", detail: "Facebook Ads Internship + Google Ads training" },
  { year: "2024", label: "MyPortal Marketing Agency", detail: "Multi-industry SEO Specialist role begins" },
  { year: "2025", label: "SEO Workout", detail: "Advanced SEO Sprint + Technical SEO certifications" },
  { year: "2026", label: "AI Search Optimization", detail: "Actively applying AIO, AEO & GEO for clients" },
];

export const seoProcess = [
  { step: "Discovery", detail: "Understand the business, audience, competitors, and current search visibility." },
  { step: "Technical Audit", detail: "Crawl the site to surface indexing, speed, and structural issues before anything else." },
  { step: "Keyword Research", detail: "Map real search demand and intent to the pages that should rank." },
  { step: "On-Page Optimization", detail: "Titles, meta descriptions, headings, internal linking, and content structure." },
  { step: "Technical Fixes", detail: "Resolve broken links, 404s, robots.txt issues, and indexing problems." },
  { step: "Content Optimization", detail: "Improve and expand content to match search intent and answer real questions." },
  { step: "Local SEO", detail: "Google Business Profile, NAP consistency, categories, and local citations." },
  { step: "Off-Page SEO", detail: "Link building and citation building to grow authority and trust." },
  { step: "Performance Monitoring", detail: "Track rankings, traffic, and Core Web Vitals — then iterate." },
];

export type Service = {
  title: string;
  icon: string;
  description: string;
  outcomes: string[];
};

export const services: Service[] = [
  {
    title: "Technical SEO Audits",
    icon: "SearchCheck",
    description:
      "A full crawl and diagnosis of your site's indexing, speed, structure, and Core Web Vitals — with a prioritized action plan, not just a list of problems.",
    outcomes: ["Faster, healthier crawling & indexing", "Improved Core Web Vitals", "Clear, prioritized fix list"],
  },
  {
    title: "On-Page & Content SEO",
    icon: "FileSearch",
    description:
      "Keyword research and on-page optimization that aligns your pages with real search intent — titles, meta descriptions, headings, internal linking, and schema.",
    outcomes: ["Higher relevance for target keywords", "Improved click-through from search results", "Structured data for rich results"],
  },
  {
    title: "Local SEO & Google Business Profile",
    icon: "MapPinned",
    description:
      "Full local SEO management — NAP consistency, categories, products/services, GBP posting, and local citation building to win the map pack.",
    outcomes: ["Stronger local map pack visibility", "Consistent NAP across the web", "More calls, visits, and bookings"],
  },
  {
    title: "Google Ads & Meta Ads Management",
    icon: "Megaphone",
    description:
      "End-to-end paid media management — Ads Manager setup, audience and creative testing, budgeting, retargeting, and scaling.",
    outcomes: ["Structured, testable campaigns", "Lower cost per lead over time", "Retargeting funnels that convert"],
  },
  {
    title: "AI Search Optimization (AIO / AEO / GEO)",
    icon: "Sparkles",
    description:
      "Positioning your content to be found and cited by AI answer engines and generative search — the layer traditional SEO alone doesn't cover.",
    outcomes: ["Visibility inside AI-generated answers", "Content structured for answer engines", "Future-proofed search strategy"],
  },
  {
    title: "Full-Site SEO Management",
    icon: "LayoutDashboard",
    description:
      "Ongoing, hands-on SEO management for businesses that want a dedicated specialist rather than a rotating agency team.",
    outcomes: ["Consistent monthly SEO execution", "Transparent reporting", "One accountable point of contact"],
  },
];
