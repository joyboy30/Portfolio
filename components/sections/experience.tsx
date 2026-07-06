"use client";

import { motion } from "framer-motion";
import { Briefcase, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="section-pad relative">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Professional Experience"
          title="A career built on real client outcomes."
          description="Every role below reflects hands-on ownership of SEO strategy and execution — not just tasks completed, but businesses made easier to find."
          className="mb-16"
        />

        <div className="relative">
          <div className="absolute left-[27px] top-2 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-accent/50 via-border-strong to-transparent sm:block" />

          <div className="space-y-8">
            {experience.map((job, i) => (
              <motion.div
                key={job.company}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="relative flex flex-col gap-6 sm:flex-row"
              >
                <div className="hidden shrink-0 sm:block">
                  <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-border-strong bg-surface shadow-glass">
                    <Briefcase className="h-6 w-6 text-accent-light" />
                  </span>
                </div>

                <div className="glass-card flex-1 p-6 sm:p-8">
                  <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground sm:text-xl">{job.company}</h3>
                      <p className="mt-1 text-sm font-medium text-accent-light">{job.role}</p>
                    </div>
                    <div className="text-left sm:text-right">
                      <p className="font-mono text-xs text-muted">{job.period}</p>
                      <p className="mt-1 text-xs text-muted-2">{job.industry}</p>
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-muted">{job.summary}</p>

                  <ul className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                    {job.responsibilities.map((r) => (
                      <li key={r} className="flex items-start gap-2 text-sm text-muted">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-light" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
