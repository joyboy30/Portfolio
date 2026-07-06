"use client";

import { motion } from "framer-motion";
import {
  Search, Megaphone, MapPin, Sparkles, Wand2, type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { skillGroups } from "@/lib/data";

const iconMap: Record<string, LucideIcon> = {
  Search, Megaphone, MapPin, Sparkles, Wand2,
};

export function Skills() {
  return (
    <section id="skills" className="section-pad relative">
      <div className="pointer-events-none absolute right-0 top-1/3 h-96 w-96 rounded-full bg-accent/10 blur-[140px]" />
      <div className="container-shell relative">
        <SectionHeading
          eyebrow="Skills"
          title="A full toolkit for organic and paid search growth."
          description="From technical foundations to the AI-driven future of search — grouped by how they actually get used in a real SEO engagement."
          align="center"
          className="mb-16"
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {skillGroups.map((group, i) => {
            const Icon = iconMap[group.icon] ?? Sparkles;
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6 }}
                className="glass-card group relative flex h-full flex-col p-6 transition-shadow duration-300 hover:shadow-glow-sm"
              >
                <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent-light transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="text-base font-semibold text-foreground">{group.category}</h3>
                <ul className="mt-4 space-y-2.5">
                  {group.skills.map((skill) => (
                    <li key={skill} className="flex items-start gap-2 text-sm text-muted">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-light" />
                      {skill}
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
