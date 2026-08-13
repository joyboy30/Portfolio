// Article bodies, keyed by slug.
//
// Card metadata (title, excerpt, image, date, readTime) lives in
// app/blog/category/[slug]/page.tsx inside `categoryData`. That object is not
// exported, and importing one route's page module from another route is not
// something Next.js supports cleanly, so the few card fields the article page
// needs for its <h1>, hero, and schema are repeated below.
//
// If you later move `categoryData` into lib/, delete those repeated fields and
// read them from the shared source instead. Until then, keep the title,
// excerpt, image, date, and readTime here identical to the category entry.
//
// TO ADD A FUTURE ARTICLE:
//   1. Add the card object to categoryData[<category>].articles as usual.
//   2. Add an entry to `blogContent` below keyed by the same slug.
//   3. Nothing else. app/blog/[slug]/page.tsx picks it up automatically.

export type ListingStatus =
  | "Free"
  | "Free-to-list"
  | "Free/Freemium"
  | "Verify";

export interface DirectoryEntry {
  name: string;
  url: string;
  listing: ListingStatus;
  bestFor: string;
  relevance: "High" | "Medium" | "Local" | "Industry-specific";
  notes: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

/**
 * Content blocks. The renderer in app/blog/[slug]/page.tsx maps each `type` to
 * markup, so article bodies stay free of styling decisions.
 *
 * Paragraph and list text supports inline markdown links: [anchor](/path).
 * Nothing else is parsed.
 */
export type ContentBlock =
  | { type: "heading"; text: string }
  | { type: "subheading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; ordered?: boolean; items: string[] }
  | { type: "callout"; text: string }
  | { type: "directoryTable"; note: string; entries: DirectoryEntry[] }
  | { type: "faq"; items: FaqItem[] };

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  date: string;
  readTime: string;
  categorySlug: string;
  categoryLabel: string;
  datePublished: string;
  dateModified: string;
  metaTitle: string;
  metaDescription: string;
  blocks: ContentBlock[];
  faq?: FaqItem[];
}

/**
 * Directories verified in August 2026: domain resolves, the platform serves
 * Philippine businesses, and a free or free-to-list tier was visible at the
 * time of checking. Entries that could not be confirmed were left out rather
 * than guessed at.
 */
const verifiedDirectories: DirectoryEntry[] = [
  {
    name: "Google Business Profile",
    url: "https://www.google.com/business/",
    listing: "Free",
    bestFor: "Google Search and Google Maps visibility",
    relevance: "High",
    notes: "The single highest-priority listing. Verification usually required.",
  },
  {
    name: "Apple Business Connect",
    url: "https://businessconnect.apple.com/",
    listing: "Free",
    bestFor: "Apple Maps, Siri, and Spotlight",
    relevance: "High",
    notes: "Often overlooked. Matters for iPhone users searching nearby.",
  },
  {
    name: "Bing Places for Business",
    url: "https://www.bingplaces.com/",
    listing: "Free",
    bestFor: "Bing Search and Bing Maps",
    relevance: "High",
    notes: "Can import directly from Google Business Profile.",
  },
  {
    name: "Facebook Business Page",
    url: "https://www.facebook.com/business/pages",
    listing: "Free",
    bestFor: "Social discovery and reviews",
    relevance: "High",
    notes: "For many Filipino customers this is the first place they check.",
  },
  {
    name: "Yelp Philippines",
    url: "https://en.yelp.com.ph/",
    listing: "Free/Freemium",
    bestFor: "Reviews and local discovery",
    relevance: "Medium",
    notes: "Free claim; paid advertising upsells exist.",
  },
  {
    name: "LinkedIn Company Page",
    url: "https://www.linkedin.com/company/setup/new/",
    listing: "Free",
    bestFor: "B2B credibility and brand entity signals",
    relevance: "Medium",
    notes: "Strengthens entity recognition more than local pack rankings.",
  },
  {
    name: "Foursquare",
    url: "https://business.foursquare.com/",
    listing: "Free/Freemium",
    bestFor: "Location data used by other apps",
    relevance: "Medium",
    notes: "Feeds location data into a range of third-party services.",
  },
  {
    name: "OpenStreetMap",
    url: "https://www.openstreetmap.org/",
    listing: "Free",
    bestFor: "Open map data",
    relevance: "Medium",
    notes: "Community-edited. Follow contribution guidelines carefully.",
  },
  {
    name: "Yellow Pages Philippines",
    url: "https://www.yellow-pages.ph/",
    listing: "Free-to-list",
    bestFor: "General Philippine business listings",
    relevance: "High",
    notes: "Long-established PH directory. Approval can take time.",
  },
  {
    name: "BusinessList.ph",
    url: "https://www.businesslist.ph/",
    listing: "Free-to-list",
    bestFor: "General Philippine business listings",
    relevance: "High",
    notes: "Listings are human-reviewed before approval.",
  },
  {
    name: "Hotfrog Philippines",
    url: "https://www.hotfrog.ph/",
    listing: "Free/Freemium",
    bestFor: "General listings with province and city coverage",
    relevance: "High",
    notes: "Free basic listing; paid upgrades offered.",
  },
  {
    name: "EnrollBusiness Philippines",
    url: "https://ph.enrollbusiness.com/",
    listing: "Free-to-list",
    bestFor: "Small and medium Philippine businesses",
    relevance: "High",
    notes: "No DTI or SEC registration needed for a basic listing.",
  },
  {
    name: "Yalwa Philippines",
    url: "https://www.yalwa.ph/",
    listing: "Free-to-list",
    bestFor: "General local business listings",
    relevance: "High",
    notes: "Straightforward submission process.",
  },
  {
    name: "PhilippineCompanies.com",
    url: "https://philippinecompanies.com/",
    listing: "Free-to-list",
    bestFor: "Nationwide province and city coverage",
    relevance: "High",
    notes: "Covers 82 provinces and over 1,600 cities and towns.",
  },
  {
    name: "PhilippinesDirectory.net",
    url: "https://www.philippinesdirectory.net/",
    listing: "Free-to-list",
    bestFor: "Businesses, services, and products",
    relevance: "High",
    notes: "Free submission; member login for editing.",
  },
  {
    name: "PhilippinesBizDir",
    url: "https://www.philippinesbizdir.com/",
    listing: "Free-to-list",
    bestFor: "General Philippine business listings",
    relevance: "High",
    notes: "Part of a regional BizDir network across Asia-Pacific.",
  },
  {
    name: "PBD Business Directory",
    url: "https://businessdirectoryphil.com/",
    listing: "Free-to-list",
    bestFor: "Small and medium Philippine businesses",
    relevance: "High",
    notes: "Submission guidelines and terms apply before approval.",
  },
  {
    name: "BusinessDirectory Philippines",
    url: "https://www.businessdirectory.com.ph/",
    listing: "Free-to-list",
    bestFor: "Local business discovery",
    relevance: "High",
    notes: "Confirm the exact domain before submitting; similar names exist.",
  },
  {
    name: "PinoyListing",
    url: "https://pinoylisting.com/",
    listing: "Verify",
    bestFor: "General Philippine listings",
    relevance: "Medium",
    notes: "Live, but confirm current free tier before submitting.",
  },
  {
    name: "Tuugo Philippines",
    url: "https://www.tuugo.ph/",
    listing: "Free/Freemium",
    bestFor: "General business listings",
    relevance: "Medium",
    notes: "Part of an international directory network.",
  },
  {
    name: "Primer Business Directory",
    url: "https://primer.com.ph/business/",
    listing: "Verify",
    bestFor: "Metro Manila and expat-facing businesses",
    relevance: "Medium",
    notes: "Editorial platform with a business section; check current terms.",
  },
  {
    name: "Promote.com.ph",
    url: "https://promote.com.ph/",
    listing: "Verify",
    bestFor: "General Philippine promotion and listings",
    relevance: "Medium",
    notes: "Confirm submission requirements before listing.",
  },
  {
    name: "ServicePros PH",
    url: "https://www.servicepros.ph/",
    listing: "Free",
    bestFor: "Service providers, contractors, and freelancers",
    relevance: "Industry-specific",
    notes: "Basic membership is free. Profile page doubles as a mini website.",
  },
];

const philippinesDirectoriesPost: BlogPost = {
  slug: "free-directory-listing-sites-philippines",
  title:
    "Free Business Directory Listing Sites in the Philippines: Complete 2026 List",
  excerpt:
    "A complete list of free business directories and local citation sites in the Philippines to improve local visibility, NAP consistency, and search presence.",
  image: "/images/blog/local-seo/philippines-business-directories.png",
  imageAlt:
    "Free business directory listing sites in the Philippines for local SEO",
  date: "Aug 13, 2026",
  readTime: "10 min read",
  categorySlug: "local-seo",
  categoryLabel: "Local SEO Strategies",
  datePublished: "2026-08-13",
  dateModified: "2026-08-13",
  metaTitle: "Free Business Directory Listing Sites in the Philippines (2026)",
  metaDescription:
    "Discover free and free-to-list business directories in the Philippines for local SEO, citations, NAP consistency, and better local search visibility.",
  blocks: [
    {
      type: "paragraph",
      text: "If you run a business in the Philippines and you have ever searched for a list of free business directory listing sites, you have probably found the same thing I did: articles promising 100 or 150 directories, half of which are dead domains, expired links, or platforms that quietly stopped accepting free submissions years ago.",
    },
    {
      type: "paragraph",
      text: "This list is deliberately shorter. Every directory below was checked before publication. If a site could not be confirmed as live and open to Philippine businesses, it was left out rather than padded in to hit a bigger number. Twenty-three directories you can actually use beats a hundred you cannot.",
    },
    {
      type: "paragraph",
      text: "Before the list, some context that matters more than the list itself, because directory submissions are one of the most misunderstood parts of local SEO in the Philippines.",
    },

    { type: "heading", text: "What Are Business Directory Listings?" },
    {
      type: "paragraph",
      text: "A business directory listing is an online profile of your business on a third-party website. At minimum it contains your business name, address, and phone number. Most also allow a website URL, category, hours, description, and photos.",
    },
    {
      type: "paragraph",
      text: "In SEO these listings are called local citations. A citation is any mention of your business details on another website, whether or not it links back to you. Google uses these mentions as corroboration: when the same business name, address, and phone number appear consistently across many independent sources, that consistency helps confirm the business is real and located where it claims to be.",
    },
    {
      type: "callout",
      text: "A citation is corroboration, not a vote. It confirms your business exists and where it operates. That is a different job from a backlink, and it is why volume alone does not move rankings.",
    },

    {
      type: "heading",
      text: "Why Business Directories Matter for Local SEO in the Philippines",
    },
    {
      type: "paragraph",
      text: "Directories do a few specific things for a Philippine business:",
    },
    {
      type: "list",
      items: [
        "They confirm your business details to search engines through independent sources.",
        "They create discoverable profiles that sometimes rank for long-tail searches your own site does not.",
        "They send referral traffic, which is small but real on the better platforms.",
        "They build brand presence in places customers already browse.",
        "They strengthen entity signals, which increasingly matters as AI answer engines cross-reference sources before citing a business.",
      ],
    },
    {
      type: "paragraph",
      text: "What they do not do is guarantee a place in the map pack. Local rankings are driven mainly by relevance, distance, and prominence, and your [Google Business Profile](/services/seo/local-seo) does far more work than any directory listing. Treat citations as supporting evidence, not as the strategy.",
    },

    {
      type: "heading",
      text: "Best Free Business Directory Listings for Philippine Businesses",
    },
    {
      type: "paragraph",
      text: "Here are the 23 directories that verified as live and open to Philippine businesses. The directory name links to the official site, and the URL is shown so you can see exactly where you are going before you click.",
    },
    {
      type: "directoryTable",
      note: "Directory availability, free listing options, verification requirements, and paid features can change. Check each platform's current terms before submitting your business.",
      entries: verifiedDirectories,
    },

    {
      type: "heading",
      text: "Major Platforms Every Philippine Business Should Consider",
    },
    {
      type: "paragraph",
      text: "The first eight entries in that table are not really directories in the same sense as the rest. They are the platforms that feed maps, search results, and AI answers. If you only have time for a handful of listings, do these and stop.",
    },
    {
      type: "paragraph",
      text: "Google Business Profile comes first, and it is not close. For most local businesses in the Philippines it drives more visibility than every other directory combined. Apple Business Connect is the one people forget, and it matters more than its traffic numbers suggest because iPhone users searching for a nearby business are often ready to act. Bing Places can import from your Google profile, so it costs you about five minutes.",
    },
    {
      type: "paragraph",
      text: "Facebook deserves particular attention here. For a large share of Filipino customers, a Facebook page is the first thing they look for and sometimes the only thing they check. A neglected page with wrong hours does more damage than a missing listing on a minor directory.",
    },

    { type: "heading", text: "Philippine Business Directories" },
    {
      type: "paragraph",
      text: "The Philippine-specific directories in the list fall into rough tiers. Yellow Pages Philippines, BusinessList.ph, Hotfrog Philippines, EnrollBusiness Philippines, and Yalwa Philippines are the most established and generally worth doing first. PhilippineCompanies.com, PhilippinesDirectory.net, PhilippinesBizDir, PBD Business Directory, and BusinessDirectory Philippines round out the general listings.",
    },
    {
      type: "paragraph",
      text: "A few entries are marked Verify rather than Free. That is deliberate. Those sites are live and Philippine-focused, but I could not confirm their current free tier with enough confidence to label them free. Check before you submit.",
    },
    {
      type: "callout",
      text: "Directories that were widely recommended a few years ago have quietly gone offline or moved behind payment. If a list you find elsewhere includes dozens of unfamiliar .ph domains with no notes attached, assume it was copied rather than checked.",
    },

    {
      type: "heading",
      text: "How to Choose Which Philippine Directories to Submit To",
    },
    {
      type: "paragraph",
      text: "Work in this order. It is a priority queue, not a checklist to complete in one sitting.",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "Google Business Profile, fully completed and verified.",
        "The other major map and search platforms: Apple, Bing, Facebook.",
        "Established Philippine directories with real editorial standards.",
        "City or regional directories where your customers actually are.",
        "Industry-specific directories relevant to what you do.",
        "Local business associations, chambers of commerce, and community sites.",
      ],
    },
    {
      type: "paragraph",
      text: "The last category is the most underrated. A listing on a legitimate local chamber of commerce site is worth more than a dozen generic submissions, because it is genuinely specific to your area and difficult for a competitor to replicate at scale.",
    },

    { type: "heading", text: "How to Create a Business Directory Listing" },
    {
      type: "paragraph",
      text: "Before you submit anywhere, write your business details down once and use that document for every submission. Retyping details from memory is how inconsistencies get created.",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "Prepare your business information in one document you can copy from.",
        "Use your exact registered business name, with no added keywords.",
        "Use your correct address, or set a service area if you do not serve customers at your location.",
        "Use one consistent phone number across every listing.",
        "Add your website URL, including https and the correct www or non-www form.",
        "Select the most relevant primary category, not the broadest one.",
        "Write a business description that a customer would find useful.",
        "Add accurate business hours, including holiday exceptions where supported.",
        "Upload real photos of your business, not stock images.",
        "Complete verification if the platform requires it.",
        "Record the listing URL and login details in your tracking sheet.",
        "Check the listing after approval to confirm nothing was altered.",
      ],
    },

    { type: "heading", text: "What Information Should You Keep Consistent?" },
    {
      type: "paragraph",
      text: "NAP is the core: Name, Address, Phone. But consistency should extend further than that.",
    },
    {
      type: "list",
      items: [
        "Business name, character for character.",
        "Address format, including abbreviations like St. versus Street and Brgy. versus Barangay.",
        "Phone number, in one format, ideally with the country code.",
        "Website URL, using the same protocol and subdomain everywhere.",
        "Primary business category, as closely matched as each platform allows.",
        "Business hours.",
        "Business description, which can be adapted in length but should not contradict itself.",
        "Service areas, if you operate without a public storefront.",
      ],
    },

    {
      type: "heading",
      text: "NAP Consistency: Why It Matters for Philippine Local SEO",
    },
    {
      type: "paragraph",
      text: "Inconsistent details create ambiguity, and ambiguity is expensive in local search. Consider a dental clinic listed four different ways across the web:",
    },
    {
      type: "list",
      items: [
        "ABC Dental Clinic",
        "ABC Dental",
        "ABC Dental Clinic Cebu",
        "ABC Dental Clinic - Best Dentist Cebu",
      ],
    },
    {
      type: "paragraph",
      text: "A person reads those as one clinic. A search engine has to decide whether they are one business or several, and that fourth variation, with keywords stuffed into the name, violates Google's guidelines outright and can get a profile suspended.",
    },
    {
      type: "paragraph",
      text: "The correct approach is one official business name, used identically everywhere. Philippine addresses make this harder than it sounds, because barangay, subdivision, and building details get abbreviated differently by different platforms. Pick one format and hold to it.",
    },
    {
      type: "paragraph",
      text: "Fixing inconsistencies will not by itself lift you into the map pack. It removes a source of confusion, which is a precondition for other work paying off rather than a ranking lever on its own.",
    },

    { type: "heading", text: "Common Business Directory Listing Mistakes" },
    {
      type: "list",
      items: [
        "Creating duplicate listings on the same platform, often by forgetting an old submission.",
        "Using slightly different business names across sites.",
        "Using a fake or borrowed address to appear in a city you do not operate in.",
        "Stuffing keywords into the business name field.",
        "Choosing a category that is broader or more competitive than what you actually do.",
        "Using different phone numbers, including tracking numbers, without consistency.",
        "Ignoring verification emails, which leaves listings unclaimed and editable by others.",
        "Submitting to directories that exist only to sell links.",
        "Buying bulk citation packages, which typically produce listings on sites nobody visits.",
        "Never updating listings after moving, rebranding, or changing hours.",
        "Creating listings for locations where the business has no genuine presence.",
      ],
    },
    {
      type: "paragraph",
      text: "The fake-address mistake deserves emphasis. Google's guidelines are explicit, and suspensions are difficult to reverse. If you serve customers at their location rather than yours, use the service area setting instead. That option exists precisely for this situation.",
    },

    {
      type: "heading",
      text: "How Many Business Directories Should You Submit To?",
    },
    {
      type: "paragraph",
      text: "There is no target number, and anyone quoting one is guessing. What matters is relevance, authority, local visibility, industry fit, accuracy, and whether a real customer might plausibly use the site.",
    },
    {
      type: "paragraph",
      text: "Twenty accurate listings on directories people actually visit will do more for a Philippine business than two hundred submissions to sites that exist only to host listings. The second approach also creates a maintenance problem: every listing is something you have to update when your address or phone number changes, and stale listings actively work against the consistency you were trying to build.",
    },

    { type: "heading", text: "Free Directory Listings vs Paid Listings" },
    {
      type: "paragraph",
      text: "A free listing is enough for citation purposes. The core value, which is a consistent, verifiable mention of your business, does not improve when you pay.",
    },
    {
      type: "paragraph",
      text: "Paid upgrades typically offer featured placement, more photos, additional categories, lead generation features, advertising, or removal of competitor ads from your profile. Some of that has genuine business value if the directory sends you real enquiries.",
    },
    {
      type: "paragraph",
      text: "But paying does not make a directory more valuable for SEO. If a platform's main pitch is that a paid listing will improve your rankings, that is a reason for scepticism rather than a reason to buy.",
    },

    { type: "heading", text: "How to Track Your Local Citations" },
    {
      type: "paragraph",
      text: "Keep a spreadsheet from your first submission. Retrofitting one after fifty listings is miserable work, and you will not remember which email address you used.",
    },
    {
      type: "list",
      items: [
        "Directory name",
        "Business name as submitted",
        "Directory URL",
        "Username or email used",
        "Submission date",
        "Approval status",
        "Live listing URL",
        "NAP checked (date)",
        "Last reviewed (date)",
        "Notes, including any paid upsell offered",
      ],
    },
    {
      type: "paragraph",
      text: "Review the sheet twice a year, and immediately after any change to your address, phone number, or business name.",
    },

    { type: "heading", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question:
            "What are the best free business directories in the Philippines?",
          answer:
            "Start with Google Business Profile, then Apple Business Connect, Bing Places, and Facebook. For Philippine-specific directories, Yellow Pages Philippines, BusinessList.ph, Hotfrog Philippines, EnrollBusiness Philippines, and Yalwa Philippines are the most established options that currently accept free listings.",
        },
        {
          question: "Are Philippine business directory listings free?",
          answer:
            "Many are free or free-to-list, but terms change and several operate a freemium model where the basic listing is free and additional features are paid. The table above labels each one as it was verified, and you should confirm current terms before submitting.",
        },
        {
          question: "Do business directories help local SEO?",
          answer:
            "They help by corroborating your business details across independent sources, which supports how search engines understand your business. They are a supporting signal rather than a direct ranking lever, and they will not by themselves put you in the map pack.",
        },
        {
          question: "How important is NAP consistency?",
          answer:
            "It is foundational. Inconsistent name, address, and phone details across listings create ambiguity about whether you are one business or several. Consistency does not guarantee rankings, but inconsistency undermines other local SEO work.",
        },
        {
          question: "Should I submit my business to every directory?",
          answer:
            "No. Submitting to low-quality directories adds maintenance work without meaningful benefit, and listings on spammy sites can reflect poorly on your brand. Prioritise directories that real customers might use.",
        },
        {
          question: "How many citations does a local business need?",
          answer:
            "There is no fixed number. Twenty accurate listings on relevant, established directories are more useful than two hundred submissions to sites nobody visits.",
        },
        {
          question: "Are paid directory listings worth it?",
          answer:
            "Sometimes, but for business reasons rather than SEO ones. If a directory genuinely sends enquiries, a paid upgrade may pay for itself. Paying does not improve the citation value of the listing.",
        },
        {
          question: "Can service-area businesses use local directories?",
          answer:
            "Yes. Use the service area setting where available instead of publishing an address you do not operate from. Some directories require a verifiable mailing address even when it is not displayed publicly.",
        },
        {
          question: "How often should business listings be checked?",
          answer:
            "Review every listing at least twice a year, and immediately after any change to your address, phone number, business name, or hours.",
        },
      ],
    },

    { type: "heading", text: "Final Thoughts" },
    {
      type: "paragraph",
      text: "Directory listings are maintenance work, not a growth strategy. They are worth doing properly and they are not worth obsessing over.",
    },
    {
      type: "paragraph",
      text: "Get Google Business Profile right first. Add the major platforms. Work through the established Philippine directories at a pace you can sustain. Add city and industry-specific listings where they genuinely fit. Then keep everything accurate, which is the part most businesses skip and the part that actually compounds.",
    },
    {
      type: "paragraph",
      text: "If you want the rest of the picture, the [Local SEO archive](/blog/category/local-seo) covers Google Business Profile optimisation, map pack strategy, and review workflows, and my [Local SEO services](/services/seo/local-seo) page explains how I approach this work for clients.",
    },
  ],
};

export const blogContent: Record<string, BlogPost> = {
  [philippinesDirectoriesPost.slug]: philippinesDirectoriesPost,
};

export function getPost(slug: string): BlogPost | undefined {
  return blogContent[slug];
}

export function getAllPostSlugs(): string[] {
  return Object.keys(blogContent);
}
