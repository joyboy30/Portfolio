// Shared blog types.
//
// These were previously declared privately inside
// app/blog/category/[slug]/page.tsx. Moving them here lets the category page
// and the new article route agree on one definition instead of drifting apart.

/** Card-level metadata for a blog article. */
export interface Article {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  slug: string;
}

/** Per-category colour tokens used by cards, chips, and hover rings. */
export interface Accent {
  text: string;
  chipBg: string;
  chipText: string;
  chipBorder: string;
  iconBg: string;
  iconText: string;
  ring: string;
  glow: string;
  dot: string;
}
