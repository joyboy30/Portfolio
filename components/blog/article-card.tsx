import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CalendarDays, Clock } from "lucide-react";
import type { Article, Accent } from "@/lib/blog-types";

export function ArticleCard({ article, accent }: { article: Article; accent: Accent }) {
  return (
    <Link
      href={`/blog/${article.slug}`}
      className={`group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.05] ${accent.ring}`}
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <Image
          src={article.image}
          alt={article.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020304] via-transparent to-transparent" />
        <span
          className={`absolute left-4 top-4 rounded-full border px-3 py-1 text-xs font-medium backdrop-blur-md ${accent.chipBorder} ${accent.chipBg} ${accent.chipText}`}
        >
          SEO Insight
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="text-lg font-semibold leading-snug text-zinc-50 transition-colors group-hover:text-white">
          {article.title}
        </h3>
        <p className="text-sm leading-relaxed text-zinc-400">{article.excerpt}</p>

        <div className="mt-auto flex items-center gap-4 pt-2 text-xs text-zinc-500">
          <span className="flex items-center gap-1.5">
            <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
            {article.date}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" aria-hidden="true" />
            {article.readTime}
          </span>
        </div>

        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-zinc-200 transition-all group-hover:gap-2.5 group-hover:text-white">
          Read Article
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}
