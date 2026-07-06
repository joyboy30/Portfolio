"use client";

import { motion } from "framer-motion";
import { GraduationCap, Languages, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { aboutHighlights } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="section-pad relative">
      <div className="container-shell">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <SectionHeading
            eyebrow="About Me"
            title="An SEO specialist who thinks like an engineer and writes like a marketer."
            description="I got here through hands-on client work, not just courses — building sites from scratch, fixing what was broken under the hood, and learning what actually moves rankings for real businesses."
          />

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {aboutHighlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="glass-card p-6 sm:col-span-1"
              >
                <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card flex flex-col justify-between gap-5 p-6 sm:col-span-2 sm:flex-row"
            >
              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent-light">
                  <GraduationCap className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground">Cebu Normal University</p>
                  <p className="text-xs text-muted">Computer Programming &amp; Hardware Servicing · 2011–2012</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent-light">
                  <Languages className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground">Languages</p>
                  <p className="text-xs text-muted">English · Tagalog · Visayan</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent-light">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground">Based in</p>
                  <p className="text-xs text-muted">Medellin, Cebu, Philippines</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
