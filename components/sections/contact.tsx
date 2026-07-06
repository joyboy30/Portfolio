"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Github, Briefcase, Download, ArrowUpRight, Linkedin } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/lib/site-config";

const contactMethods = [
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
  },
  {
    label: "Phone / WhatsApp",
    value: siteConfig.phoneDisplay,
    href: `tel:${siteConfig.phone}`,
    icon: Phone,
  },
  {
    label: "OnlineJobs.ph",
    value: "View verified freelancer profile",
    href: siteConfig.social.onlineJobs,
    icon: Briefcase,
  },
  {
    label: "GitHub",
    value: "@joyboy30",
    href: siteConfig.social.github,
    icon: Github,
  },
];

export function Contact() {
  return (
    <section id="contact" className="section-pad relative overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-accent/15 blur-[140px]" />

      <div className="container-shell relative">
        <SectionHeading
          eyebrow="Contact"
          title="Let's improve your search visibility."
          description="Whether it's a full SEO audit, ongoing SEO management, or a Google/Meta Ads campaign — tell me about your business and I'll get back to you within 24 hours."
          align="center"
          className="mb-16"
        />

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-5 sm:grid-cols-2">
          {contactMethods.map((method, i) => (
            <motion.a
              key={method.label}
              href={method.href}
              target={method.href.startsWith("http") ? "_blank" : undefined}
              rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card group flex items-center justify-between gap-4 p-6 transition-colors duration-300 hover:border-accent/30"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent-light transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
                  <method.icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wide text-muted-2">{method.label}</p>
                  <p className="text-sm font-medium text-foreground">{method.value}</p>
                </div>
              </div>
              <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-2 transition-colors duration-300 group-hover:text-accent-light" />
            </motion.a>
          ))}

          {siteConfig.social.linkedin && (
            <motion.a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              className="glass-card group flex items-center justify-between gap-4 p-6 transition-colors duration-300 hover:border-accent/30 sm:col-span-2"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent-light transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
                  <Linkedin className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wide text-muted-2">LinkedIn</p>
                  <p className="text-sm font-medium text-foreground">Connect with me</p>
                </div>
              </div>
              <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-2 transition-colors duration-300 group-hover:text-accent-light" />
            </motion.a>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-10 flex max-w-4xl flex-col items-center justify-between gap-6 rounded-3xl border border-border-strong bg-accent-gradient/[0.08] p-8 sm:flex-row"
        >
          <div>
            <h3 className="text-lg font-semibold text-foreground">Prefer to review my full resume first?</h3>
            <p className="mt-1 text-sm text-muted">
              Download a complete PDF with experience, training, and expertise.
            </p>
          </div>
          <a href={siteConfig.resumeUrl} download className="btn-primary shrink-0">
            <Download className="h-4 w-4" /> Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
