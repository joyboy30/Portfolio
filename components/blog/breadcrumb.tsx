import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbProps {
  /** Text for the final (current page) crumb. */
  label: string;
  /**
   * Optional extra crumb inserted between "Blog" and the current page.
   * The category route omits this and renders exactly as before.
   */
  category?: { label: string; href: string };
}

export function Breadcrumb({ label, category }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="mb-8 flex flex-wrap items-center gap-1.5 text-sm text-zinc-500"
    >
      <Link href="/" className="transition-colors hover:text-zinc-300">
        Home
      </Link>
      <ChevronRight className="h-3.5 w-3.5 text-zinc-600" aria-hidden="true" />
      <Link href="/blog" className="transition-colors hover:text-zinc-300">
        Blog
      </Link>

      {category ? (
        <>
          <ChevronRight className="h-3.5 w-3.5 text-zinc-600" aria-hidden="true" />
          <Link href={category.href} className="transition-colors hover:text-zinc-300">
            {category.label}
          </Link>
        </>
      ) : null}

      <ChevronRight className="h-3.5 w-3.5 text-zinc-600" aria-hidden="true" />
      <span className="text-zinc-300">{label}</span>
    </nav>
  );
}
