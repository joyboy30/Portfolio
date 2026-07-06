# Igel G. Cudiera — SEO & Digital Marketing Portfolio

A premium, production-ready portfolio website for **Igel G. Cudiera** — SEO Specialist, Google Ads Specialist, Meta Ads Specialist & Digital Marketing Specialist. Built to impress recruiters, win freelance clients, and demonstrate real technical and SEO expertise through the site itself.

**Design inspiration:** Linear, Vercel, Framer, Apple, Stripe, Notion — dark mode, glassmorphism, large typography, blue accent (`#3B82F6`), smooth Framer Motion animation.

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 15 (App Router) |
| UI Library | React 19 |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| Icons | lucide-react |
| Components | shadcn/ui pattern (Button, Badge — CVA + Radix Slot) |
| Fonts | next/font (Sora + Manrope + JetBrains Mono, self-hosted, zero layout shift) |
| Deployment | Vercel (zero-config) |

---

## Project Structure

```
igel-cudiera-portfolio/
├── app/
│   ├── layout.tsx          # Root layout, metadata, fonts, JSON-LD injection
│   ├── page.tsx            # Assembles all sections
│   ├── globals.css         # Tailwind layers, design tokens, utility classes
│   ├── sitemap.ts          # Dynamic sitemap.xml
│   ├── robots.ts           # Dynamic robots.txt
│   ├── icon.tsx            # Dynamically generated favicon
│   ├── opengraph-image.tsx # Dynamically generated OG/Twitter card image
│   └── not-found.tsx       # Custom branded 404 page
├── components/
│   ├── header.tsx          # Sticky glass navbar + mobile menu
│   ├── footer.tsx
│   ├── section-heading.tsx # Shared animated section heading
│   ├── ui/
│   │   ├── button.tsx      # shadcn-style Button (CVA variants)
│   │   └── badge.tsx
│   └── sections/
│       ├── hero.tsx
│       ├── about.tsx
│       ├── experience.tsx
│       ├── case-studies.tsx   # "Projects" — detailed SEO case studies
│       ├── skills.tsx
│       ├── tools.tsx
│       ├── services.tsx
│       ├── certifications.tsx
│       ├── ai-portfolio.tsx
│       ├── timeline.tsx
│       ├── seo-process.tsx
│       ├── testimonials.tsx
│       └── contact.tsx
├── lib/
│   ├── site-config.ts   # Single source of truth: URL, email, phone, socials
│   ├── data.ts          # All copy/content (skills, experience, case studies…)
│   ├── schema.ts         # JSON-LD: Person, WebSite, Organization, Breadcrumb
│   └── utils.ts          # `cn()` classname helper
├── public/
│   ├── images/profile-photo.jpg
│   ├── certificates/*.jpg
│   └── resume/Igel-Cudiera-Resume.pdf
├── tailwind.config.ts     # Design tokens (colors, shadows, animation)
├── next.config.mjs
├── tsconfig.json
├── package.json
└── .env.example
```

**Why this structure:** content lives in `lib/data.ts` and `lib/site-config.ts`, completely separate from layout/animation code in `components/`. To update your bio, add a certification, or change your phone number, you only ever touch `lib/`, never the JSX.

---

## Getting Started (Local Development)

**Requirements:** Node.js ≥ 18.18, npm (or pnpm/yarn).

```bash
# 1. Install dependencies
npm install

# 2. Copy the environment example and set your site URL
cp .env.example .env.local

# 3. Run the dev server
npm run dev
```

Visit `http://localhost:3000`.

---

## Configuring Your Real URLs

Everything site-wide (metadata, canonical URLs, sitemap, robots.txt, Open Graph, JSON-LD) reads from **one constant**:

```ts
// lib/site-config.ts
export const siteConfig = {
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://igelcudiera-portfolio.vercel.app",
  ...
}
```

**After your first Vercel deploy:**
1. Copy the real `*.vercel.app` URL Vercel gives you.
2. In Vercel → Project → Settings → Environment Variables, set `NEXT_PUBLIC_SITE_URL` to that URL.
3. Redeploy (or it will auto-apply on the next deploy).

**When you buy a custom domain** (e.g. `igelcudiera.com`), just update the same environment variable — no code changes needed.

### Adding LinkedIn later
`lib/site-config.ts` has `social.linkedin: ""`. The Contact and Footer components already check this value and automatically show the LinkedIn button the moment you fill it in — no other changes required.

---

## Editing Content

All content is centralized in **`lib/data.ts`**:

| To change... | Edit this export |
|---|---|
| Hero stats (years, industries, tools) | `heroStats` |
| About Me highlights | `aboutHighlights` |
| Skills cards | `skillGroups` |
| Tools marquee | `tools` |
| Work history | `experience` |
| Case studies (challenge/strategy/implementation/outcome) | `caseStudies` |
| Certifications gallery | `certifications` |
| Career timeline | `timeline` |
| SEO process steps | `seoProcess` |
| Services offered | `services` |
| AI Portfolio cards | `aiPortfolio` |

Contact details, email, phone, and social links live in **`lib/site-config.ts`**.

---

## SEO Implementation Checklist

- ✅ Dynamic per-page metadata via Next.js Metadata API (`app/layout.tsx`)
- ✅ Open Graph + Twitter Card images generated at build time (`app/opengraph-image.tsx`)
- ✅ JSON-LD structured data: **Person**, **WebSite**, **Organization** (`lib/schema.ts`), injected in `layout.tsx`
- ✅ Dynamic `sitemap.xml` (`app/sitemap.ts`) and `robots.txt` (`app/robots.ts`)
- ✅ Canonical URL via `alternates.canonical`
- ✅ Semantic HTML (`<header>`, `<main>`, `<section>`, `<footer>`, proper heading hierarchy — one `h1` in Hero, `h2` per section, `h3` for cards)
- ✅ `next/image` for automatic image optimization, lazy loading, and responsive `sizes`
- ✅ Self-hosted Google Fonts via `next/font` (no external font requests, no layout shift)
- ✅ Descriptive `alt` text on every image (profile photo, certificates)
- ✅ Security headers (`X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`) in `next.config.mjs`

### Why these matter
- **Structured data** helps Google understand *who* the site is about and *what* the business offers, increasing eligibility for rich results.
- **Dynamic OG images** improve click-through rates when the site is shared on LinkedIn, Twitter/X, or Slack.
- **Self-hosted fonts + `next/image`** are the two biggest levers for Core Web Vitals (LCP, CLS) — which is doubly important on an *SEO specialist's own site*, since a slow portfolio undermines the pitch.

---

## Accessibility

- Skip-to-content link for keyboard users
- Visible focus states (`:focus-visible`) throughout, not just default browser outlines
- `prefers-reduced-motion` respected — all animations are disabled for users who request it
- Certificate modal uses `role="dialog"`, `aria-modal`, and a labeled close button
- Icon-only buttons (menu toggle, modal close) include `aria-label`
- Color contrast: white/near-white text on near-black backgrounds exceeds WCAG AA for body text

---

## Performance Notes

- Fonts are self-hosted and subset via `next/font` — no render-blocking external requests
- All images pre-optimized (resized + compressed) before being placed in `/public`, and served responsively via `next/image`
- Framer Motion animations use `whileInView` with `once: true` so they don't re-trigger and cost CPU on every scroll
- No client-side data fetching on the homepage — it's fully static content, so it can be served from Vercel's Edge Network with no origin round-trip

---

## Deploying to Vercel

**Option A — GitHub (recommended):**
1. Push this project to a new GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel auto-detects Next.js — no configuration needed. Click **Deploy**.
4. Once deployed, set `NEXT_PUBLIC_SITE_URL` in Project Settings → Environment Variables to your live URL, then redeploy.

**Option B — Vercel CLI:**
```bash
npm i -g vercel
vercel
```

No `vercel.json` is required — the defaults are correct for this project.

---

## Suggested Next Steps / Future Improvements

- **Testimonials:** The section is intentionally left as an honest "coming soon" state rather than fabricated quotes. Replace it in `lib/data.ts` + `components/sections/testimonials.tsx` once you have real client feedback — this will meaningfully increase trust/conversion once populated.
- **Blog / Case Study detail pages:** If you want to publish individual long-form case studies for SEO (each one targeting its own keyword), a `app/case-studies/[slug]/page.tsx` dynamic route can be added — this would also let you generate more indexable pages.
- **Analytics:** Add Vercel Analytics or Google Analytics 4 (`@next/third-parties` has a drop-in GA4 component) once the site is live, so you can show *your own site's* traffic growth as a live proof point.
- **Custom domain:** Once purchased, add it in Vercel → Domains, and update `NEXT_PUBLIC_SITE_URL`.
- **LinkedIn:** Add your profile URL to `lib/site-config.ts` the moment it exists — the UI is already wired to display it automatically.

---

## License

This project and its content belong to Igel G. Cudiera. Not licensed for reuse as a template.
