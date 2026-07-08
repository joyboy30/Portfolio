export const siteConfig = {
  name: "Igel G. Cudiera",
  title: "SEO Specialist PH | On-Page, Technical, Local, AEO & GEO",
  shortTitle: "Igel Cudiera | SEO & Digital Marketing Specialist",
  description:
    "Results-driven SEO Specialist in the Philippines with 3+ years' experience in Technical, On-Page, Off-Page, Local SEO, AIO, AEO & GEO strategies for business.",
  // Replace with your real Vercel URL after first deploy, then with a custom
  // domain once you own one. This single constant drives metadata, the
  // sitemap, robots.txt, canonical URLs, Open Graph, and JSON-LD.
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://igel-cudiera-portfolio.vercel.app",
  location: "Medellin, Cebu, Philippines",
  email: "igel.cudiera31@gmail.com",
  phone: "+639196098689",
  phoneDisplay: "+63 919 609 8689",
  social: {
    github: "https://github.com/joyboy30",
    onlineJobs: "https://www.onlinejobs.ph/jobseekers/info/2687450",
    // No LinkedIn yet — the Contact/Footer components conditionally hide
    // this button. Add a URL here once the profile exists and it will
    // appear automatically across the site.
    linkedin: "",
  },
  resumeUrl: "/resume/Igel-Cudiera-Resume.pdf",
  keywords: [
    "SEO Specialist Philippines",
    "Technical SEO Consultant",
    "Local SEO Expert",
    "Google Ads Specialist",
    "Meta Ads Specialist",
    "Digital Marketing Specialist",
    "Website Optimization",
    "Core Web Vitals Specialist",
    "AI Search Optimization",
    "Answer Engine Optimization",
    "Generative Engine Optimization",
    "AI Content Creation",
    "Freelance SEO Specialist Cebu",
    "E-commerce SEO",
    "Dental SEO",
    "Real Estate SEO",
  ],
};

export type SiteConfig = typeof siteConfig;
