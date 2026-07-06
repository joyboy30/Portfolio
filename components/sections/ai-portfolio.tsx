"use client";

import { motion } from "framer-motion";
import { ImageIcon, PenLine, Sparkles, CheckCircle2, type LucideIcon } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { aiPortfolio } from "@/lib/data";

const iconMap: Record<string, LucideIcon> = {
  ImageIcon, PenLine, Sparkles,
};

export function AIPortfolio() {
  return (
    <section id="ai-portfolio" className="section-pad relative bg-surface/40">
      <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-accent/10 blur-[140px]" />
      <div className="container-shell relative">
        <SectionHeading
          eyebrow="AI Portfolio"
          title="Using AI as a force multiplier, not a shortcut."
          description="From AI-generated ad creative to structuring content for AI answer engines — here's how I actually use AI tools inside real client work."
          align="center"
          className="mb-16"
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {aiPortfolio.map((item, i) => {
            const Icon = iconMap[item.icon] ?? Sparkles;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="glass-card group flex flex-col p-7 transition-shadow duration-300 hover:shadow-glow-sm"
              >
                <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent-light transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{item.description}</p>
                <ul className="mt-5 space-y-2 border-t border-border pt-5">
                  {item.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-2 text-xs text-muted">
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent-light" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
