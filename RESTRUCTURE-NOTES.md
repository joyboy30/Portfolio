# Portfolio Restructure — Change Notes

Branch: `portfolio-restructure`. `main`, `backup-before-restructure`, and the
`v1.0-before-restructure` tag were not touched.

## 1. Contact — phone number removed everywhere

| File | Change |
|---|---|
| `lib/site-config.ts` | Deleted `phone` and `phoneDisplay`. Added `whatsapp` and `whatsappLabel`. |
| `components/sections/contact.tsx` | "Phone / WhatsApp" card is now a **WhatsApp** card (`MessageCircle` icon) linking to the wa.me URL. Email card unchanged. |
| `components/footer.tsx` | Phone line removed from "Get in touch". Email and WhatsApp are now links; WhatsApp icon added to the social row. |
| `lib/schema.ts` | `telephone` removed from `personSchema()` **and** `organizationSchema()` — it was publishing the number in JSON-LD on every page. Replaced with a `ContactPoint` carrying email + WhatsApp URL. |
| `components/cta-section.tsx` | New CTA offers `/contact` and WhatsApp only. |
| `README.md` | Stale references to a configured phone number updated. |

Contact methods now published: `mailto:igel.cudiera31@gmail.com` and
`https://wa.me/qr/MHR7GGFUNYJ3B1`. Nothing else was added.

## 2. Indexing policy for service pages

Set in page `metadata.robots`, driven by `noindexPaths` in `lib/navigation.ts`.

**noindex, follow** — reachable via Services nav, excluded from search + sitemap:

- `/services/social-media-management`
- `/services/email-marketing`

Both stay in the navigation and stay internally linked. `follow` is on, so link
equity still flows through them. Neither is listed in `sitemap.xml`, because a
sitemap should only advertise URLs intended for indexing.

**index, follow** (inherited from `app/layout.tsx`) — everything else:

| Route | Basis |
|---|---|
| `/services` | Hub; links to all services. |
| `/services/seo` | Primary specialization, documented client work. |
| `/services/seo/technical-seo` | Client work: robots.txt, 404s, reindexing, Core Web Vitals, GSC. |
| `/services/seo/on-page-seo` | Client work: keyword research/mapping, metas, headings, internal linking. |
| `/services/seo/off-page-seo` | Client work: guest posts, citations, Web 2.0, outreach. |
| `/services/seo/local-seo` | Client work: GBP management, NAP, citations, location pages. |
| `/services/seo/ai-search-optimization` | Client work: AI Overviews / ChatGPT visibility, FAQ schema. |
| `/services/paid-ads` | Named, dated certification (Google Ads Training, Inspired Filipino Freelancers, Sept 2023) + documented paid-media skills. Page states training vs. client experience explicitly. |
| `/services/meta-ads` | Named, dated certification (Facebook Ads Management, ProVA, Nov 2023) + documented paid-media skills. Same explicit framing. |

The dividing line: Paid Ads and Meta Ads rest on certifications with named
issuers and dates plus skills already listed in the portfolio. Social Media
Management and Email Marketing have neither. If you'd rather hold Paid Ads and
Meta Ads back too until there's client work behind them, add their paths to
`noindexPaths` — no other edit needed.

## 3. To flip a page back to index, follow

1. Add real portfolio content to the page.
2. Remove its path from `noindexPaths` in `lib/navigation.ts`.
3. Remove the `robots: noindexRobots,` line and its comment from that page's
   `metadata`, plus the now-unused import.

The page then inherits `index, follow` from the root layout and re-enters the
sitemap automatically.

## 4. Verification status

Run locally before pushing — neither could run in the build sandbox:

- `npm run build` — the shipped `node_modules` contains `@next/swc-win32-x64-msvc`;
  the sandbox is Linux and had no network to fetch the matching binary.
- `npm run lint` — standalone ESLint 9 can't resolve the `.eslintrc.json`
  config without `next lint`'s wiring. Works normally via `npm run lint`.

Passed in the sandbox:

- `tsc --noEmit` — clean, no TypeScript errors.
- Route audit — 19 routes on disk, 0 broken internal links, 0 orphan pages,
  0 nav links pointing at a missing page.
- Metadata audit — 0 duplicate titles, 0 duplicate descriptions, canonical
  present on every page.
- Phone audit — 0 matches for `tel:`, `telephone`, `siteConfig.phone`,
  `phoneDisplay`, or the number in any format across `.ts`/`.tsx`/`.json`/`.md`.
- The only remaining `index: false` is pre-existing and correct: the blog
  category route noindexes unknown slugs.

## 5. Pre-existing bug fixed

`<Header />` rendered in both `app/layout.tsx` and `app/page.tsx`, so the live
homepage mounts two headers. Removed from `app/page.tsx`.

## 6. Files deleted

None.
