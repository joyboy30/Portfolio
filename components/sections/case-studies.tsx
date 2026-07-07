"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Target, Compass, Wrench, TrendingUp, ChevronDown, ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { caseStudies } from "@/lib/data";
import { cn } from "@/lib/utils";

export function CaseStudies() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="case-studies" className="section-pad relative bg-surface/40">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Case Studies"
          title="Real SEO problems, solved with a clear strategy."
          description="Client names are kept confidential, but the strategy, execution, and outcomes are exactly what happened presented as detailed case studies rather than a simple job history."
          className="mb-16"
        />
        {/* AI Search Visibility Case Studies */}

        <div className="mb-16 rounded-2xl border border-border bg-card/40 p-8 backdrop-blur-sm">

  <h2 className="text-3xl font-bold text-foreground">
    AI Search Visibility Case Studies
  </h2>

  <p className="mt-4 text-muted leading-7">
    As part of my SEO work, I researched user search intent, developed optimized
    content strategies, and helped improve client visibility across both
    traditional search engines and emerging AI-powered search experiences.
    The following case studies highlight search queries where client websites
    appeared in <strong>Google AI Overviews</strong> and
    <strong> ChatGPT-generated answers</strong>.
  </p>

        {/* ===========================
    Patient News
=========================== */}

<div className="mt-10 border-t border-border pt-8">
  <h3 className="text-3xl font-bold text-foreground">
    Patient News
  </h3>

  <p className="mt-2 text-accent font-medium">
    Dental Marketing & Dental SEO
  </p>

  <div className="mt-8 grid gap-10 lg:grid-cols-2">
    <div>
      <h4 className="text-lg font-semibold mb-4">
        Google AI Overview
      </h4>

      <ul className="space-y-3 list-disc pl-5 text-muted leading-7">
        <li>What is the dental marketing agency in Haliburton Canada?</li>
        <li>What is the dental SEO agency in Haliburton Canada?</li>
      </ul>
    </div>

    <div>
      <h4 className="text-lg font-semibold mb-4">
        ChatGPT
      </h4>

      <ul className="space-y-3 list-disc pl-5 text-muted leading-7">
        <li>What is the dental marketing agency in Haliburton Canada?</li>
        <li>What is the dental SEO agency in Haliburton Canada?</li>
      </ul>
    </div>
  </div>

  <h4 className="mt-8 mb-3 font-semibold">
    SEO Focus
  </h4>

  <div className="flex flex-wrap gap-2">
    <Badge>Dental Marketing</Badge>
    <Badge>Dental SEO</Badge>
    <Badge>Local SEO</Badge>
    <Badge>Informational Search Intent</Badge>
    <Badge>Healthcare Content Optimization</Badge>
  </div>
</div>

{/* ===========================
    The Jamil Brothers Realty Group
=========================== */}

<div className="mt-14 border-t border-border pt-10">

  <h3 className="text-3xl font-bold text-foreground">
    The Jamil Brothers Realty Group
  </h3>

  <p className="mt-2 text-accent font-medium">
    Residential Real Estate
  </p>

  <div className="mt-8 grid gap-10 lg:grid-cols-2">

    <div>

      <h4 className="text-lg font-semibold mb-4">
        Google AI Overview
      </h4>

      <ul className="space-y-3 list-disc pl-5 text-muted leading-7">

        <li>How to sell a home in Fairfax County</li>

        <li>What is the cost in selling a home in West Virginia?</li>

        <li>How Do You Sell a Home in Columbia, MD?</li>

        <li>Are Sellers More Willing to Negotiate in Northern Virginia?</li>

        <li>Is It Harder to Sell a Townhouse or Single-Family Home in Prince William County?</li>

        <li>How Do You Sell a House That Needs Repairs in West Virginia?</li>

        <li>When Is the Best Time to Sell a House in Baltimore County, MD?</li>

        <li>How Much Does Selling a House in Loudoun County Really Cost?</li>

      </ul>

    </div>

    <div>

      <h4 className="text-lg font-semibold mb-4">
        ChatGPT
      </h4>

      <ul className="space-y-3 list-disc pl-5 text-muted leading-7">

        <li>How to sell a home in Fairfax County</li>

        <li>What is the cost in selling a home in West Virginia?</li>

        <li>How Do You Sell a Home in Columbia, MD?</li>

        <li>Are Sellers More Willing to Negotiate in Northern Virginia?</li>

        <li>Is It Harder to Sell a Townhouse or Single-Family Home in Prince William County?</li>

        <li>When Is the Best Time to Sell a House in Baltimore County, MD?</li>

        <li>How Much Does Selling a House in Loudoun County Really Cost?</li>

      </ul>

    </div>

  </div>

  <h4 className="mt-8 mb-3 font-semibold">
    SEO Focus
  </h4>

  <div className="flex flex-wrap gap-2">

    <Badge>Local Real Estate SEO</Badge>

    <Badge>Seller Intent Keywords</Badge>

    <Badge>Long-Tail Keyword Research</Badge>

    <Badge>Informational Content Strategy</Badge>

    <Badge>AI Search Optimization</Badge>

  </div>

</div>
{/* ===========================
    The Jamil Brothers Realty Group & ExploreVAHomes
=========================== */}

<div className="mt-14 border-t border-border pt-10">

  <h3 className="text-3xl font-bold text-foreground">
    The Jamil Brothers Realty Group &amp; ExploreVAHomes
  </h3>

  <p className="mt-2 text-accent font-medium">
    Residential Real Estate
  </p>

  <div className="mt-8 grid gap-10 lg:grid-cols-2">

    <div>

      <h4 className="text-lg font-semibold mb-4">
        Google AI Overview
      </h4>

      <ul className="space-y-3 list-disc pl-5 text-muted leading-7">

        <li>How Do You Sell an Investment Property in Fairfax and Minimize Taxes?</li>

      </ul>

    </div>

    <div>

      <h4 className="text-lg font-semibold mb-4">
        ChatGPT
      </h4>

      <ul className="space-y-3 list-disc pl-5 text-muted leading-7">

        <li>How Do You Sell an Investment Property in Fairfax and Minimize Taxes?</li>

      </ul>

    </div>

  </div>

  <h4 className="mt-8 mb-3 font-semibold">
    SEO Focus
  </h4>

  <div className="flex flex-wrap gap-2">

    <Badge>Investment Property SEO</Badge>

    <Badge>Tax-Related Content</Badge>

    <Badge>Long-Tail Search Optimization</Badge>

    <Badge>Local Real Estate Marketing</Badge>

    <Badge>AI Search Visibility</Badge>

  </div>

</div>

{/* ===========================
    First Choice Business Brokers
=========================== */}

<div className="mt-14 border-t border-border pt-10">

  <h3 className="text-3xl font-bold text-foreground">
    First Choice Business Brokers
  </h3>

  <p className="mt-2 text-accent font-medium">
    Business Brokerage
  </p>

  <div className="mt-8 grid gap-10 lg:grid-cols-2">

    <div>

      <h4 className="text-lg font-semibold mb-4">
        Google AI Overview
      </h4>

      <ul className="space-y-3 list-disc pl-5 text-muted leading-7">

        <li>How do I sell my business in Los Angeles?</li>

        <li>How do I connect with business buyers in Los Angeles?</li>

        <li>What is the best way to sell a small business in Los Angeles?</li>

        <li>How do I sell my business in Las Vegas?</li>

        <li>How can I find a buyer for my business in Atlanta, GA?</li>

      </ul>

    </div>

    <div>

      <h4 className="text-lg font-semibold mb-4">
        ChatGPT
      </h4>

      <div className="rounded-lg border border-dashed border-border p-6 text-muted text-sm leading-7">

        These business brokerage queries were cited in
        <span className="font-semibold text-foreground"> Google AI Overviews</span>.
        While this project focused primarily on Google AI visibility, the SEO
        strategy emphasized buyer-intent content, long-tail keyword targeting,
        and location-specific optimization designed for modern AI-powered search
        experiences.

      </div>

    </div>

  </div>

  <h4 className="mt-8 mb-3 font-semibold">
    SEO Focus
  </h4>

  <div className="flex flex-wrap gap-2">

    <Badge>Business Brokerage SEO</Badge>

    <Badge>Buyer Intent</Badge>

    <Badge>Seller Intent</Badge>

    <Badge>Commercial SEO</Badge>

    <Badge>Location-Based SEO</Badge>

    <Badge>Long-Tail Keywords</Badge>

    <Badge>AI Search Optimization</Badge>

  </div>

</div>
{/* ===========================
    Brush Dental Studio
=========================== */}

<div className="mt-14 border-t border-border pt-10">

  <h3 className="text-3xl font-bold text-foreground">
    Brush Dental Studio
  </h3>

  <p className="mt-2 text-accent font-medium">
    Local Dental Practice
  </p>

  <div className="mt-8 grid gap-10 lg:grid-cols-2">

    <div>

      <h4 className="text-lg font-semibold mb-4">
        Google AI Overview
      </h4>

      <ul className="space-y-3 list-disc pl-5 text-muted leading-7">

        <li>Dentist in Saint Bonifacius, MN</li>

        <li>How much does a dental cleaning cost in Saint Bonifacius, MN?</li>

      </ul>

    </div>

    <div>

      <h4 className="text-lg font-semibold mb-4">
        ChatGPT
      </h4>

      <ul className="space-y-3 list-disc pl-5 text-muted leading-7">

        <li>Dentist in Saint Bonifacius, MN</li>

        <li>How much does a dental cleaning cost in Saint Bonifacius, MN?</li>

      </ul>

    </div>

  </div>

  <h4 className="mt-8 mb-3 font-semibold">
    SEO Focus
  </h4>

  <div className="flex flex-wrap gap-2">

    <Badge>Local SEO</Badge>

    <Badge>Dental Service Pages</Badge>

    <Badge>Service Pricing Content</Badge>

    <Badge>Location-Based SEO</Badge>

    <Badge>AI Search Visibility</Badge>

  </div>

</div>

{/* ===========================
    Pecan Jacks
=========================== */}

<div className="mt-14 border-t border-border pt-10">

  <h3 className="text-3xl font-bold text-foreground">
    Pecan Jacks
  </h3>

  <p className="mt-2 text-accent font-medium">
    Restaurant & Dessert Shop
  </p>

  <div className="mt-8 grid gap-10 lg:grid-cols-2">

    <div>

      <h4 className="text-lg font-semibold mb-4">
        Google AI Overview
      </h4>

      <ul className="space-y-3 list-disc pl-5 text-muted leading-7">

        <li>What are the best gourmet desserts to try in Grayton Beach?</li>

        <li>What is the best ice cream in Grayton Beach?</li>

      </ul>

    </div>

    <div>

      <h4 className="text-lg font-semibold mb-4">
        ChatGPT
      </h4>

      <ul className="space-y-3 list-disc pl-5 text-muted leading-7">

        <li>What are the best gourmet desserts to try in Grayton Beach?</li>

        <li>What is the best ice cream in Grayton Beach?</li>

      </ul>

    </div>

  </div>

  <h4 className="mt-8 mb-3 font-semibold">
    SEO Focus
  </h4>

  <div className="flex flex-wrap gap-2">

    <Badge>Restaurant SEO</Badge>

    <Badge>Local Discovery Searches</Badge>

    <Badge>"Best Of" Search Queries</Badge>

    <Badge>Food & Hospitality SEO</Badge>

    <Badge>AI Search Visibility</Badge>

  </div>

</div>

{/* ===========================
    Fontana Di Vino
=========================== */}

<div className="mt-14 border-t border-border pt-10">

  <h3 className="text-3xl font-bold text-foreground">
    Fontana Di Vino
  </h3>

  <p className="mt-2 text-accent font-medium">
    Italian Restaurant
  </p>

  <div className="mt-8 grid gap-10 lg:grid-cols-2">

    <div>

      <h4 className="text-lg font-semibold mb-4">
        Google AI Overview
      </h4>

      <ul className="space-y-3 list-disc pl-5 text-muted leading-7">

        <li>What is the best Italian restaurant in Davidson, NC?</li>

        <li>Date night restaurants Davidson, NC</li>

        <li>Best Italian restaurant Davidson, NC</li>

      </ul>

    </div>

    <div>

      <h4 className="text-lg font-semibold mb-4">
        ChatGPT
      </h4>

      <ul className="space-y-3 list-disc pl-5 text-muted leading-7">

        <li>Best Italian restaurant Davidson, NC</li>

      </ul>

    </div>

  </div>

  <h4 className="mt-8 mb-3 font-semibold">
    SEO Focus
  </h4>

  <div className="flex flex-wrap gap-2">

    <Badge>Restaurant SEO</Badge>

    <Badge>Local SEO</Badge>

    <Badge>Recommendation-Based Searches</Badge>

    <Badge>Local Dining Discovery</Badge>

    <Badge>AI Search Visibility</Badge>

  </div>

</div>
{/* ===========================
    SEO Skills Demonstrated
=========================== */}

<div className="mt-16 border-t border-border pt-12">

  <h2 className="text-3xl font-bold text-foreground">
    SEO Skills Demonstrated
  </h2>

  <p className="mt-4 max-w-3xl text-muted leading-7">
    These AI search visibility case studies demonstrate my ability to research
    user search intent, develop SEO-driven content strategies, optimize for
    Google's AI Overviews, and improve visibility across emerging AI-powered
    search platforms. My work combines traditional SEO best practices with
    modern AI search optimization (Generative Engine Optimization - GEO).
  </p>

  <div className="mt-8 flex flex-wrap gap-3">

    <Badge>AI Search Optimization (GEO)</Badge>

    <Badge>Google AI Overview Optimization</Badge>

    <Badge>ChatGPT Search Visibility</Badge>

    <Badge>Keyword Research</Badge>

    <Badge>Search Intent Analysis</Badge>

    <Badge>Local SEO</Badge>

    <Badge>Long-Tail Keyword Strategy</Badge>

    <Badge>Content Strategy</Badge>

    <Badge>Content Optimization</Badge>

    <Badge>Technical SEO</Badge>

    <Badge>Competitive Research</Badge>

    <Badge>Entity SEO</Badge>

    <Badge>Topical Authority</Badge>

    <Badge>Semantic SEO</Badge>

    <Badge>On-Page SEO</Badge>

    <Badge>AI-Assisted SEO Workflow</Badge>

  </div>

</div>

{/* ===========================
    Tools & Technologies
=========================== */}

<div className="mt-16 border-t border-border pt-12">

  <h2 className="text-3xl font-bold text-foreground">
    Tools & Technologies
  </h2>

  <p className="mt-4 max-w-3xl text-muted leading-7">
    Throughout these SEO projects, I leveraged industry-leading SEO platforms,
    AI tools, analytics software, and modern web development technologies to
    research, optimize, publish, and monitor high-performing content.
  </p>

  <div className="mt-8 flex flex-wrap gap-3">

    <Badge variant="outline">Next.js</Badge>

    <Badge variant="outline">Claude AI</Badge>

    <Badge variant="outline">ChatGPT</Badge>

    <Badge variant="outline">Visual Studio Code</Badge>

    <Badge variant="outline">Git Bash</Badge>

    <Badge variant="outline">GitHub</Badge>

    <Badge variant="outline">Vercel</Badge>

    <Badge variant="outline">Google Search Console</Badge>

    <Badge variant="outline">Google Analytics</Badge>

    <Badge variant="outline">Ahrefs</Badge>

    <Badge variant="outline">SEMrush</Badge>

    <Badge variant="outline">Screaming Frog SEO Spider</Badge>

  </div>

</div>

{/* ===========================
    Portfolio Summary
=========================== */}

<div className="mt-20 rounded-2xl border border-accent/20 bg-accent/5 p-8">

  <h2 className="text-3xl font-bold text-foreground">
    Portfolio Highlights
  </h2>

  <p className="mt-6 text-muted leading-8">

    These projects demonstrate my experience in creating SEO content that
    performs across both traditional search engines and AI-powered search
    experiences. By combining keyword research, search intent analysis,
    content optimization, local SEO, and AI-assisted workflows, I helped
    clients increase their visibility for competitive informational and
    commercial search queries.

  </p>

  <p className="mt-6 text-muted leading-8">

    My experience spans multiple industries including dental marketing,
    healthcare, residential real estate, business brokerage, hospitality,
    restaurants, and local businesses. I continuously adapt SEO strategies
    to align with evolving search technologies such as Google AI Overviews,
    ChatGPT Search, and other generative search platforms.

  </p>
  </div> {/* Portfolio Highlights */}
</div> {/* End AI Search Visibility Case Studies */}
        <div className="space-y-5">
          {caseStudies.map((cs, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={cs.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="glass-card overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full flex-col items-start justify-between gap-4 p-6 text-left sm:flex-row sm:items-center sm:p-8"
                  aria-expanded={isOpen}
                >
                  <div className="flex-1">
                    <div className="mb-3 flex flex-wrap items-center gap-2">
                      <Badge variant="accent">{cs.industryTag}</Badge>
                      {cs.confidential && (
                        <Badge variant="default">
                          <ShieldCheck className="mr-1.5 h-3 w-3" /> Client confidential
                        </Badge>
                      )}
                      <span className="font-mono text-xs text-muted-2">{cs.timeframe}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground sm:text-xl">{cs.title}</h3>
                    <p className="mt-1 text-sm text-muted">{cs.industry}</p>
                  </div>
                  <span
                    className={cn(
                      "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border-strong transition-transform duration-300",
                      isOpen && "rotate-180 bg-accent/10 border-accent/30"
                    )}
                  >
                    <ChevronDown className="h-4 w-4 text-accent-light" />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="grid grid-cols-1 gap-6 border-t border-border p-6 sm:p-8 lg:grid-cols-2">
                        <div className="space-y-6">
                          <div>
                            <div className="mb-2 flex items-center gap-2">
                              <Target className="h-4 w-4 text-accent-light" />
                              <h4 className="text-sm font-semibold text-foreground">The Challenge</h4>
                            </div>
                            <p className="text-sm leading-relaxed text-muted">{cs.challenge}</p>
                          </div>
                          <div>
                            <div className="mb-2 flex items-center gap-2">
                              <Compass className="h-4 w-4 text-accent-light" />
                              <h4 className="text-sm font-semibold text-foreground">The Strategy</h4>
                            </div>
                            <p className="text-sm leading-relaxed text-muted">{cs.strategy}</p>
                          </div>
                        </div>

                        <div className="space-y-6">
                          <div>
                            <div className="mb-2 flex items-center gap-2">
                              <Wrench className="h-4 w-4 text-accent-light" />
                              <h4 className="text-sm font-semibold text-foreground">SEO Implementation</h4>
                            </div>
                            <ul className="space-y-1.5">
                              {cs.implementation.map((item) => (
                                <li key={item} className="flex gap-2 text-sm text-muted">
                                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <div className="mb-2 flex items-center gap-2">
                              <TrendingUp className="h-4 w-4 text-accent-light" />
                              <h4 className="text-sm font-semibold text-foreground">Outcome</h4>
                            </div>
                            <ul className="space-y-1.5">
                              {cs.outcome.map((item) => (
                                <li key={item} className="flex gap-2 text-sm text-muted">
                                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-success" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2 lg:col-span-2">
                          {cs.tools.map((tool) => (
                            <Badge key={tool} variant="outline">
                              {tool}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
