export const siteConfig = {
  name: "Igel G. Cudiera",
  title: "Igel Cudiera — SEO, Google Ads, Meta Ads & Digital Marketing Specialist",
  shortTitle: "Igel Cudiera | SEO & Digital Marketing Specialist",
  description:
    "Igel G. Cudiera is a results-driven SEO, Google Ads, Meta Ads, and Digital Marketing Specialist based in Cebu, Philippines, with 3+ years of experience improving organic rankings, traffic, and conversions for e-commerce, dental, real estate, business brokerage, and iGaming brands. Specializing in Technical SEO, Local SEO, Website Optimization, Core Web Vitals, Google Ads, Meta Ads, AI Content Creation, and next-generation AI Search Optimization (AIO/AEO/GEO).",
  // Replace with your real Vercel URL after first deploy, then with a custom
  // domain once you own one. This single constant drives metadata, the
  // sitemap, robots.txt, canonical URLs, Open Graph, and JSON-LD.
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://igelcudiera-portfolio.vercel.app",
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
