"use client";

import Link from "next/link";
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
            title="An SEO expert who thinks like an engineer and writes like a marketer."
            description="My background is in computer programming and hardware servicing, which is why I don't just run SEO checklists, I understand the systems underneath them: crawlability, indexability, site architecture, and how search engines actually discover a page before it can ever rank."
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
                  <p className="text-xs text-muted">English · Tagalog · Cebuano</p>
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

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card sm:col-span-2 rounded-2xl border border-white/10 bg-gradient-to-r from-accent/10 to-transparent p-6"
            >
              <h3 className="text-xl font-semibold text-foreground">
                Learn More About My SEO Approach
              </h3>

              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted">
                I regularly publish practical articles about <strong>Technical SEO</strong>,{" "}
                <strong>Local SEO</strong>, <strong>Content Optimization</strong>,{" "}
                <strong>AI Search Optimization (AIO, AEO, GEO)</strong>, Google AI
                Overviews, ChatGPT Search, and modern SEO best practices. My blog shares
                real-world strategies, technical audits, case studies, and actionable
                insights to help businesses improve their visibility in both traditional
                search engines and AI-powered search experiences.
              </p>

              <Link
                href="/blog"
                className="mt-6 inline-flex items-center rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-accent/90"
              >
                Read My Blog →
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}