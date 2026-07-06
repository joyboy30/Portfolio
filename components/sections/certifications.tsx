"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Award, X, Expand } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { certifications, type Certification } from "@/lib/data";

export function Certifications() {
  const [active, setActive] = useState<Certification | null>(null);

  return (
    <section id="certifications" className="section-pad relative">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Certifications"
          title="Continuously trained, continuously certified."
          description="Formal training across SEO, technical SEO, Google Ads, and Meta Ads — click any certificate to view it in full."
          align="center"
          className="mb-16"
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => (
            <motion.button
              key={cert.title}
              onClick={() => setActive(cert)}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card group relative overflow-hidden text-left"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-border">
                <Image
                  src={cert.image}
                  alt={`${cert.title} certificate — ${cert.issuer}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-background/0 opacity-0 transition-all duration-300 group-hover:bg-background/40 group-hover:opacity-100">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 backdrop-blur-md">
                    <Expand className="h-5 w-5 text-white" />
                  </span>
                </div>
              </div>
              <div className="p-5">
                <div className="mb-2 flex items-center gap-2 text-accent-light">
                  <Award className="h-4 w-4" />
                  <span className="font-mono text-[11px] uppercase tracking-wide">{cert.date}</span>
                </div>
                <h3 className="text-base font-semibold text-foreground">{cert.title}</h3>
                <p className="mt-1 text-sm text-muted">{cert.issuer}</p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm sm:p-8"
            onClick={() => setActive(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`${active.title} certificate preview`}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 12 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="glass-card relative max-h-[85vh] w-full max-w-3xl overflow-hidden"
            >
              <button
                onClick={() => setActive(null)}
                aria-label="Close preview"
                className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-background/70 text-foreground backdrop-blur-md hover:bg-background"
              >
                <X className="h-4 w-4" />
              </button>
              <div className="relative aspect-[4/3] w-full">
                <Image src={active.image} alt={active.title} fill sizes="768px" className="object-contain bg-white" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground">{active.title}</h3>
                <p className="mt-1 text-sm text-muted">
                  {active.issuer} · {active.date}
                </p>
                <p className="mt-3 text-sm text-muted">{active.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
