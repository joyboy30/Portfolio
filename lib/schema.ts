import { siteConfig } from "./site-config";

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: "SEO Specialist",
    description: siteConfig.description,
    url: siteConfig.url,
    email: `mailto:${siteConfig.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Medellin",
      addressRegion: "Cebu",
      addressCountry: "PH",
    },
    sameAs: [siteConfig.social.github, siteConfig.social.onlineJobs].filter(Boolean),
    knowsAbout: [
      "Search Engine Optimization",
      "Technical SEO",
      "Local SEO",
      "Website Optimization",
      "Core Web Vitals",
      "Google Ads",
      "Meta Ads",
      "Digital Marketing",
      "AI Content Creation",
      "Video Editing",
      "AI Search Optimization",
      "Answer Engine Optimization",
      "Generative Engine Optimization",
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.title,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: "en-PH",
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `${siteConfig.name} — SEO Services`,
    url: siteConfig.url,
    email: siteConfig.email,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: siteConfig.email,
        url: siteConfig.whatsapp,
        availableLanguage: ["English", "Tagalog", "Cebuano"],
      },
    ],
    areaServed: "Worldwide",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Medellin",
      addressRegion: "Cebu",
      addressCountry: "PH",
    },
    priceRange: "$$",
    serviceType: [
      "Technical SEO",
      "Local SEO",
      "On-Page SEO",
      "Off-Page SEO",
      "Google Ads Management",
      "Meta Ads Management",
    ],
  };
}

export type BreadcrumbItem = {
  label: string;
  href: string;
};

/**
 * BreadcrumbList following Google's current structured data requirements:
 * every ListItem carries position + name, and `item` is omitted on the final
 * (current page) entry.
 */
export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => {
      const isLast = index === items.length - 1;
      return {
        "@type": "ListItem",
        position: index + 1,
        name: item.label,
        ...(isLast ? {} : { item: `${siteConfig.url}${item.href === "/" ? "" : item.href}` }),
      };
    }),
  };
}

/**
 * Service schema for the individual service pages. `name` and `description`
 * are passed in per page so nothing is duplicated across routes.
 */
export function serviceSchema({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${siteConfig.url}${path}`,
    serviceType: name,
    areaServed: "Worldwide",
    provider: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
}

export function jsonLdScript(schema: unknown) {
  return { __html: JSON.stringify(schema) };
}
