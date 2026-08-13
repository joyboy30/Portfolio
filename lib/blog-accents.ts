import type { Accent } from "./blog-types";

/**
 * Per-category accent tokens, copied verbatim from the values already used in
 * app/blog/category/[slug]/page.tsx so the article route renders identical
 * colours.
 *
 * The category page still declares these inline. That is intentional for now:
 * this task keeps edits to that file minimal. When convenient, delete the
 * inline `accent` blocks there and read from this record instead.
 */
export const categoryAccents: Record<string, Accent> = {
  "google-algorithm-updates": {
    text: "from-blue-400 via-indigo-400 to-violet-400",
    chipBg: "bg-blue-500/10",
    chipText: "text-blue-300",
    chipBorder: "border-blue-500/25",
    iconBg: "bg-blue-500/10",
    iconText: "text-blue-300",
    ring: "hover:border-blue-400/40 hover:shadow-[0_0_40px_-12px_rgba(96,165,250,0.35)]",
    glow: "rgba(96,165,250,0.22)",
    dot: "bg-blue-400",
  },
  "local-seo": {
    text: "from-emerald-400 via-teal-400 to-emerald-300",
    chipBg: "bg-emerald-500/10",
    chipText: "text-emerald-300",
    chipBorder: "border-emerald-500/25",
    iconBg: "bg-emerald-500/10",
    iconText: "text-emerald-300",
    ring: "hover:border-emerald-400/40 hover:shadow-[0_0_40px_-12px_rgba(52,211,153,0.35)]",
    glow: "rgba(52,211,153,0.22)",
    dot: "bg-emerald-400",
  },
  "technical-seo": {
    text: "from-violet-400 via-fuchsia-400 to-purple-300",
    chipBg: "bg-violet-500/10",
    chipText: "text-violet-300",
    chipBorder: "border-violet-500/25",
    iconBg: "bg-violet-500/10",
    iconText: "text-violet-300",
    ring: "hover:border-violet-400/40 hover:shadow-[0_0_40px_-12px_rgba(167,139,250,0.35)]",
    glow: "rgba(167,139,250,0.22)",
    dot: "bg-violet-400",
  },
  "ai-search-optimization": {
    text: "from-cyan-400 via-sky-400 to-blue-300",
    chipBg: "bg-cyan-500/10",
    chipText: "text-cyan-300",
    chipBorder: "border-cyan-500/25",
    iconBg: "bg-cyan-500/10",
    iconText: "text-cyan-300",
    ring: "hover:border-cyan-400/40 hover:shadow-[0_0_40px_-12px_rgba(34,211,238,0.35)]",
    glow: "rgba(34,211,238,0.22)",
    dot: "bg-cyan-400",
  },
  "content-marketing": {
    text: "from-amber-400 via-orange-400 to-amber-300",
    chipBg: "bg-amber-500/10",
    chipText: "text-amber-300",
    chipBorder: "border-amber-500/25",
    iconBg: "bg-amber-500/10",
    iconText: "text-amber-300",
    ring: "hover:border-amber-400/40 hover:shadow-[0_0_40px_-12px_rgba(251,191,36,0.35)]",
    glow: "rgba(251,191,36,0.22)",
    dot: "bg-amber-400",
  },
};
