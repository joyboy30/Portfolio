"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView, animate } from "framer-motion";
import { ArrowUpRight, Download, Search, TrendingUp, MapPin } from "lucide-react";
import { heroStats, industries } from "@/lib/data";
import { siteConfig } from "@/lib/site-config";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref} className="font-display text-3xl font-bold text-foreground sm:text-4xl">
      {display}
      {suffix}
    </span>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-40 pb-24 sm:pt-48 sm:pb-32">
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_60%,transparent_100%)]" />
      <div className="pointer-events-none absolute -left-40 top-0 h-[38rem] w-[38rem] rounded-full bg-accent/20 blur-[140px]" />
      <div className="pointer-events-none absolute -right-40 top-40 h-[30rem] w-[30rem] rounded-full bg-indigo-500/10 blur-[140px]" />

      <div className="container-shell relative grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
        {/* Copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="eyebrow"
          >
            <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-accent" />
            Available for freelance &amp; full-time SEO roles
          </motion.div>

          <motion.h1
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
  className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
>
  Driving{" "}
  <span className="bg-accent-gradient bg-clip-text text-transparent">
    Higher Rankings
  </span>
  , Organic Traffic, Leads &amp; Conversions.
          </motion.h1>

          <motion.p
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
  className="mt-6 max-w-xl text-lg leading-relaxed text-muted"
>
  I&apos;m <strong className="font-semibold text-foreground">Igel G. Cudiera</strong>, a{" "}
  <strong className="font-semibold text-foreground">results-driven SEO Specialist</strong>{" "}
  based in Cebu, Philippines with <strong>3+ years of hands-on experience</strong> in
  Technical SEO, On-Page SEO, Off-Page SEO, Local SEO, AI Search Optimization (AIO),
  Answer Engine Optimization (AEO), and Generative Engine Optimization (GEO). I help
  e-commerce, dental, real estate, business brokerage, restaurant, and iGaming brands
  improve search visibility, increase organic traffic, and drive measurable business
  growth through data-driven SEO strategies.
</motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a href="#contact" className="btn-primary">
              Start a Project <ArrowUpRight className="h-4 w-4" />
            </a>
            <a href={siteConfig.resumeUrl} download className="btn-secondary">
              <Download className="h-4 w-4" /> Download Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-14 grid grid-cols-2 gap-6 border-t border-border pt-8 sm:grid-cols-4"
          >
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <Counter value={stat.value} suffix={stat.suffix} />
                <p className="mt-1 text-xs uppercase tracking-wide text-muted-2">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto w-full max-w-sm lg:max-w-none"
        >
          <div className="glass-card group relative overflow-hidden p-3 shadow-glass">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.4rem]">
              <Image
                src="/images/profile-photo.jpg"
                alt="Igel G. Cudiera — SEO Specialist"
                fill
                priority
                sizes="(max-width: 1024px) 384px, 480px"
                className="object-cover object-top grayscale-[15%] transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>

            {/* Floating badge: rank signal */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-6 top-6 flex items-center gap-2 rounded-2xl border border-border-strong bg-background/80 px-3 py-2 backdrop-blur-md"
            >
              <TrendingUp className="h-4 w-4 text-accent-light" />
              <span className="font-mono text-xs text-foreground">Rankings ↑</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-24 right-6 flex items-center gap-2 rounded-2xl border border-border-strong bg-background/80 px-3 py-2 backdrop-blur-md"
            >
              <Search className="h-4 w-4 text-accent-light" />
              <span className="font-mono text-xs text-foreground">#1 SERP</span>
            </motion.div>

            <div className="mt-3 flex items-center justify-between rounded-2xl border border-border-strong bg-white/[0.03] px-4 py-3">
              <div className="flex items-center gap-2 text-sm text-muted">
                <MapPin className="h-4 w-4 text-accent-light" />
                {siteConfig.location}
              </div>
              <span className="h-2 w-2 rounded-full bg-success" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Industry marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="container-shell relative mt-20"
      >
        <p className="mb-5 text-center font-mono text-xs uppercase tracking-[0.25em] text-muted-2">
          Trusted across industries
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {industries.map((industry) => (
            <span
              key={industry}
              className="rounded-full border border-border-strong bg-white/[0.02] px-5 py-2 text-sm text-muted"
            >
              {industry}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
