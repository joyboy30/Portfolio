"use client";

import { motion } from "framer-motion";
import { Quote, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

export function Testimonials() {
  return (
    <section id="testimonials" className="section-pad relative bg-surface/40">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Testimonials"
          title="Client feedback, coming soon."
          description="I'd rather show you real, verified feedback than filler quotes. Client testimonials will appear here as engagements are completed and reviewed — in the meantime, the case studies above speak to the actual work."
          align="center"
          className="mb-12"
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="glass-card mx-auto flex max-w-2xl flex-col items-center gap-4 p-10 text-center"
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent-light">
            <Quote className="h-5 w-5" />
          </span>
          <p className="max-w-md text-sm leading-relaxed text-muted">
            Worked with me on an SEO or paid media project? I&apos;d genuinely appreciate a short
            testimonial for this section.
          </p>
          <a href="#contact" className="btn-secondary">
            Leave feedback <ArrowUpRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
