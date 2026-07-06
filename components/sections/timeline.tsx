"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { timeline } from "@/lib/data";

export function Timeline() {
  return (
    <section id="journey" className="section-pad relative bg-surface/40">
      <div className="container-shell">
        <SectionHeading
          eyebrow="My Journey"
          title="From first certificate to AI search optimization."
          align="center"
          className="mb-16"
        />

        <div className="relative mx-auto max-w-2xl pl-10 sm:pl-0">
          <div className="absolute left-[15px] top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-accent via-border-strong to-transparent sm:left-1/2 sm:-translate-x-1/2" />

          <div className="space-y-8 sm:space-y-10">
            {timeline.map((item, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={`${item.year}-${item.label}`}
                  initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.55, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  className="relative sm:grid sm:grid-cols-2 sm:gap-10"
                >
                  <span className="absolute -left-10 top-1 z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-accent bg-background shadow-glow-sm sm:left-1/2 sm:-translate-x-1/2">
                    <span className="h-2 w-2 rounded-full bg-accent" />
                  </span>

                  {isEven ? (
                    <>
                      <div className="glass-card p-5 sm:text-right">
                        <span className="font-mono text-xs text-accent-light">{item.year}</span>
                        <h3 className="mt-1 text-base font-semibold text-foreground">{item.label}</h3>
                        <p className="mt-1 text-sm text-muted">{item.detail}</p>
                      </div>
                      <div className="hidden sm:block" />
                    </>
                  ) : (
                    <>
                      <div className="hidden sm:block" />
                      <div className="glass-card p-5">
                        <span className="font-mono text-xs text-accent-light">{item.year}</span>
                        <h3 className="mt-1 text-base font-semibold text-foreground">{item.label}</h3>
                        <p className="mt-1 text-sm text-muted">{item.detail}</p>
                      </div>
                    </>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
