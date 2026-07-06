"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { seoProcess } from "@/lib/data";

export function SeoProcess() {
  return (
    <section id="process" className="section-pad relative">
      <div className="container-shell">
        <SectionHeading
          eyebrow="How I Work"
          title="A repeatable SEO process, not guesswork."
          description="The same disciplined workflow behind every engagement — from first audit to ongoing performance monitoring."
          align="center"
          className="mb-16"
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-9 lg:gap-3">
          {seoProcess.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex flex-col"
            >
              <div className="glass-card flex h-full flex-col p-5 transition-colors duration-300 group-hover:border-accent/30">
                <span className="font-mono text-xs text-accent-light">0{i + 1}</span>
                <h3 className="mt-2 text-sm font-semibold text-foreground">{item.step}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted">{item.detail}</p>
              </div>
              {i < seoProcess.length - 1 && (
                <div className="my-2 flex justify-center lg:hidden">
                  <ArrowRight className="h-4 w-4 rotate-90 text-muted-2 lg:rotate-0" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
