"use client";

import { motion } from "framer-motion";
import {
  SearchCheck, FileSearch, MapPinned, Megaphone, Sparkles, LayoutDashboard,
  ArrowUpRight, type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { services } from "@/lib/data";

const iconMap: Record<string, LucideIcon> = {
  SearchCheck, FileSearch, MapPinned, Megaphone, Sparkles, LayoutDashboard,
};

export function Services() {
  return (
    <section id="services" className="section-pad relative bg-surface/40">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Services"
          title="How I can help your business grow through search."
          description="Whether you need a one-time technical audit or an ongoing SEO partner, here's what working together looks like."
          className="mb-16"
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] ?? Sparkles;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="glass-card group flex flex-col p-7 transition-shadow duration-300 hover:shadow-glow-sm"
              >
                <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent-light transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {service.description}
                </p>
                <ul className="mt-5 space-y-2 border-t border-border pt-5">
                  {service.outcomes.map((outcome) => (
                    <li key={outcome} className="flex items-start gap-2 text-xs text-muted">
                      <ArrowUpRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent-light" />
                      {outcome}
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
