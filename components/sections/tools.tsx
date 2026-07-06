"use client";

import {
  Search, BarChart3, LineChart, TrendingUp, Layout, ShoppingBag,
  PenTool, Building2, MapPin, Megaphone, Target, Sparkles, type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { tools } from "@/lib/data";

const iconMap: Record<string, LucideIcon> = {
  Search, BarChart3, LineChart, TrendingUp, Layout, ShoppingBag,
  PenTool, Building2, MapPin, Megaphone, Target, Sparkles,
};

export function Tools() {
  const loop = [...tools, ...tools];

  return (
    <section id="tools" className="relative overflow-hidden py-20 sm:py-24">
      <div className="container-shell mb-12">
        <SectionHeading
          eyebrow="Tools & Platforms"
          title="Platforms I use every day."
          align="center"
          className="mb-0"
        />
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent sm:w-40" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent sm:w-40" />

        <div className="flex w-max animate-marquee gap-4 hover:[animation-play-state:paused]">
          {loop.map((tool, i) => {
            const Icon = iconMap[tool.icon] ?? Sparkles;
            return (
              <div
                key={`${tool.name}-${i}`}
                className="flex shrink-0 items-center gap-3 rounded-2xl border border-border-strong bg-white/[0.03] px-6 py-4"
              >
                <Icon className="h-5 w-5 text-accent-light" />
                <span className="whitespace-nowrap text-sm font-medium text-foreground">
                  {tool.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
