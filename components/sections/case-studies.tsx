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

  {/* Patient News */}

  <div className="mt-10 border-t border-border pt-8">

    <h3 className="text-2xl font-semibold">
      Patient News
    </h3>

    <p className="text-accent mt-1">
      Dental Marketing & Dental SEO
    </p>

    <div className="mt-6 grid md:grid-cols-2 gap-8">

      <div>

        <h4 className="font-semibold mb-3">
          Google AI Overview
        </h4>

        <ul className="space-y-2 text-muted list-disc pl-5">
          <li>What is the dental marketing agency in Haliburton Canada?</li>
          <li>What is the dental SEO agency in Haliburton Canada?</li>
        </ul>

      </div>

      <div>

        <h4 className="font-semibold mb-3">
          ChatGPT
        </h4>

        <ul className="space-y-2 text-muted list-disc pl-5">
          <li>What is the dental marketing agency in Haliburton Canada?</li>
          <li>What is the dental SEO agency in Haliburton Canada?</li>
        </ul>

      </div>

    </div>

    <div className="mt-6 flex flex-wrap gap-2">

      <Badge>Dental Marketing</Badge>
      <Badge>Dental SEO</Badge>
      <Badge>Local SEO</Badge>
      <Badge>Healthcare SEO</Badge>
      <Badge>AI Search</Badge>

    </div>

  </div>

  {/* Repeat the same layout below for */}

  {/* The Jamil Brothers Realty Group */}

  {/* ExploreVAHomes */}

  {/* First Choice Business Brokers */}

  {/* Brush Dental Studio */}

  {/* Pecan Jacks */}

  {/* Fontana Di Vino */}

       </div>
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
