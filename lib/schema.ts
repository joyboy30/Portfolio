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
    telephone: siteConfig.phone,
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
    telephone: siteConfig.phone,
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

export function breadcrumbSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url,
      },
    ],
  };
}
