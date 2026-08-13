import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CalendarDays, Clock, ExternalLink, Sparkles } from "lucide-react";

import { Breadcrumb } from "@/components/blog/breadcrumb";
import { BlogCta } from "@/components/blog/blog-cta";
import { categoryAccents } from "@/lib/blog-accents";
import {
  getAllPostSlugs,
  getPost,
  type ContentBlock,
  type DirectoryEntry,
  type FaqItem,
} from "@/lib/blog-content";

const SITE_URL = "https://igel-cudiera-portfolio.vercel.app";
const SITE_NAME = "Igel G. Cudiera";

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    return {
      title: "Article Not Found",
      description: "This article doesn't exist. Browse the SEO blog instead.",
      robots: { index: false, follow: true },
      alternates: { canonical: `${SITE_URL}/blog` },
    };
  }

  const url = `${SITE_URL}/blog/${post.slug}`;

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url,
      siteName: SITE_NAME,
      type: "article",
      locale: "en_US",
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified,
      images: [{ url: `${SITE_URL}${post.image}`, alt: post.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle,
      description: post.metaDescription,
      images: [`${SITE_URL}${post.image}`],
    },
  };
}

/**
 * Renders [anchor](/path) inside body text. Internal paths use next/link;
 * anything starting with http opens in a new tab.
 */
function renderInline(text: string): ReactNode[] {
  const pattern = /\[([^\]]+)\]\(([^)]+)\)/g;
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }

    const [, label, href] = match;
    const isExternal = href.startsWith("http");
    const className =
      "font-medium text-emerald-300 underline decoration-emerald-400/30 underline-offset-4 transition-colors hover:decoration-emerald-300";

    nodes.push(
      isExternal ? (
        <a
          key={`link-${key++}`}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
        >
          {label}
        </a>
      ) : (
        <Link key={`link-${key++}`} href={href} className={className}>
          {label}
        </Link>
      ),
    );

    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes;
}

function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

function DirectoryTable({
  note,
  entries,
}: {
  note: string;
  entries: DirectoryEntry[];
}) {
  return (
    <div className="my-10">
      <p className="mb-5 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm leading-relaxed text-zinc-400">
        {note}
      </p>

      <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[52rem] border-collapse text-left text-sm">
            <caption className="sr-only">
              Verified free and free-to-list business directories for Philippine
              businesses
            </caption>
            <thead>
              <tr className="border-b border-white/10 bg-white/[0.02]">
                <th scope="col" className="px-4 py-3.5 font-semibold text-zinc-300">
                  #
                </th>
                <th scope="col" className="px-4 py-3.5 font-semibold text-zinc-300">
                  Website / Directory
                </th>
                <th scope="col" className="px-4 py-3.5 font-semibold text-zinc-300">
                  URL
                </th>
                <th scope="col" className="px-4 py-3.5 font-semibold text-zinc-300">
                  Free Listing
                </th>
                <th scope="col" className="px-4 py-3.5 font-semibold text-zinc-300">
                  Best For
                </th>
                <th scope="col" className="px-4 py-3.5 font-semibold text-zinc-300">
                  PH Relevance
                </th>
                <th scope="col" className="px-4 py-3.5 font-semibold text-zinc-300">
                  Notes
                </th>
              </tr>
            </thead>
            <tbody>
              {entries.map((entry, index) => (
                <tr
                  key={entry.url}
                  className="border-b border-white/5 transition-colors last:border-b-0 hover:bg-white/[0.03]"
                >
                  <td className="px-4 py-4 align-top text-zinc-500">{index + 1}</td>
                  <td className="px-4 py-4 align-top">
                    <a
                      href={entry.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-medium text-emerald-300 transition-colors hover:text-emerald-200"
                    >
                      {entry.name}
                      <ExternalLink className="h-3 w-3 shrink-0" aria-hidden="true" />
                    </a>
                  </td>
                  <td className="px-4 py-4 align-top">
                    <span className="break-all text-xs text-zinc-500">{entry.url}</span>
                  </td>
                  <td className="px-4 py-4 align-top">
                    <span className="inline-block whitespace-nowrap rounded-full border border-emerald-500/25 bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-300">
                      {entry.listing}
                    </span>
                  </td>
                  <td className="px-4 py-4 align-top text-zinc-400">{entry.bestFor}</td>
                  <td className="px-4 py-4 align-top text-zinc-400">{entry.relevance}</td>
                  <td className="px-4 py-4 align-top text-zinc-400">{entry.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <p className="mt-3 text-xs text-zinc-600 sm:hidden">
        Scroll the table sideways to see every column.
      </p>
    </div>
  );
}

function FaqBlock({ items }: { items: FaqItem[] }) {
  return (
    <div className="my-8 space-y-4">
      {items.map((item) => (
        <div
          key={item.question}
          className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-colors hover:bg-white/[0.05]"
        >
          <h3 className="text-base font-semibold text-zinc-100">{item.question}</h3>
          <p className="mt-2.5 text-sm leading-relaxed text-zinc-400">{item.answer}</p>
        </div>
      ))}
    </div>
  );
}

function Block({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "heading":
      return (
        <h2
          id={slugifyHeading(block.text)}
          className="mt-14 scroll-mt-24 text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl"
        >
          {block.text}
        </h2>
      );

    case "subheading":
      return (
        <h3 className="mt-8 text-lg font-semibold text-zinc-100">{block.text}</h3>
      );

    case "paragraph":
      return (
        <p className="mt-5 leading-relaxed text-zinc-400">
          {renderInline(block.text)}
        </p>
      );

    case "list":
      return block.ordered ? (
        <ol className="mt-5 list-decimal space-y-2.5 pl-5 leading-relaxed text-zinc-400 marker:text-emerald-400/70">
          {block.items.map((item) => (
            <li key={item} className="pl-1.5">
              {renderInline(item)}
            </li>
          ))}
        </ol>
      ) : (
        <ul className="mt-5 list-disc space-y-2.5 pl-5 leading-relaxed text-zinc-400 marker:text-emerald-400/70">
          {block.items.map((item) => (
            <li key={item} className="pl-1.5">
              {renderInline(item)}
            </li>
          ))}
        </ul>
      );

    case "callout":
      return (
        <div className="my-8 rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.06] p-6">
          <p className="leading-relaxed text-zinc-300">{renderInline(block.text)}</p>
        </div>
      );

    case "directoryTable":
      return <DirectoryTable note={block.note} entries={block.entries} />;

    case "faq":
      return <FaqBlock items={block.items} />;

    default:
      return null;
  }
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    notFound();
  }

  const accent = categoryAccents[post.categorySlug] ?? categoryAccents["local-seo"];
  const url = `${SITE_URL}/blog/${post.slug}`;

  const faqBlock = post.blocks.find((block) => block.type === "faq");
  const faqItems = faqBlock && faqBlock.type === "faq" ? faqBlock.items : [];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${url}/#blogposting`,
        headline: post.title,
        description: post.metaDescription,
        image: `${SITE_URL}${post.image}`,
        datePublished: post.datePublished,
        dateModified: post.dateModified,
        inLanguage: "en-PH",
        author: { "@id": `${SITE_URL}/#person` },
        publisher: { "@id": `${SITE_URL}/#organization` },
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
        articleSection: post.categoryLabel,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
          {
            "@type": "ListItem",
            position: 3,
            name: post.categoryLabel,
            item: `${SITE_URL}/blog/category/${post.categorySlug}`,
          },
          { "@type": "ListItem", position: 4, name: post.title },
        ],
      },
      ...(faqItems.length
        ? [
            {
              "@type": "FAQPage",
              "@id": `${url}/#faq`,
              mainEntity: faqItems.map((item) => ({
                "@type": "Question",
                name: item.question,
                acceptedAnswer: { "@type": "Answer", text: item.answer },
              })),
            },
          ]
        : []),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main id="main-content" className="relative overflow-hidden bg-[#020304] text-zinc-100">
        {/* Hero */}
        <section className="relative border-b border-white/5 px-6 pb-16 pt-28 sm:pt-36">
          <div
            className="pointer-events-none absolute inset-0 -z-10"
            style={{
              background: `radial-gradient(680px circle at 20% 0%, ${accent.glow}, transparent 70%), radial-gradient(520px circle at 90% 10%, rgba(255,255,255,0.05), transparent 70%)`,
            }}
            aria-hidden="true"
          />

          <div className="mx-auto max-w-3xl">
            <Breadcrumb
              label={post.title}
              category={{
                label: post.categoryLabel,
                href: `/blog/category/${post.categorySlug}`,
              }}
            />

            <Link
              href={`/blog/category/${post.categorySlug}`}
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-medium transition-opacity hover:opacity-80 ${accent.chipBorder} ${accent.chipBg} ${accent.chipText}`}
            >
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              {post.categoryLabel}
            </Link>

            <h1 className="mt-6 text-balance text-3xl font-semibold leading-[1.15] tracking-tight sm:text-5xl">
              {post.title}
            </h1>

            <p className="mt-6 text-balance text-lg leading-relaxed text-zinc-400">
              {post.excerpt}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-5 text-sm text-zinc-500">
              <span className="flex items-center gap-1.5">
                <CalendarDays className="h-4 w-4" aria-hidden="true" />
                {post.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" aria-hidden="true" />
                {post.readTime}
              </span>
              <span>By {SITE_NAME}</span>
            </div>
          </div>
        </section>

        {/* Featured image */}
        <section className="border-b border-white/5 px-6 py-12">
          <div className="mx-auto max-w-4xl">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/10">
              <Image
                src={post.image}
                alt={post.imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 56rem"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Body */}
        <article className="border-b border-white/5 px-6 py-16">
          <div className="mx-auto max-w-3xl">
            {post.blocks.map((block, index) => (
              <Block key={`${block.type}-${index}`} block={block} />
            ))}

            <div className="mt-16 border-t border-white/10 pt-8">
              <Link
                href={`/blog/category/${post.categorySlug}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-zinc-100 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/[0.08]"
              >
                More {post.categoryLabel} articles
              </Link>
            </div>
          </div>
        </article>

        <BlogCta />
      </main>
    </>
  );
}
