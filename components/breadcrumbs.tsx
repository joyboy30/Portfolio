import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { breadcrumbSchema, jsonLdScript, type BreadcrumbItem } from "@/lib/schema";

/**
 * Accessible breadcrumb trail + matching BreadcrumbList JSON-LD.
 * Pass the full trail including Home and the current page.
 */
export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  if (items.length < 2) return null;

  return (
    <>
      <nav aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-xs text-muted-2 sm:text-sm">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={item.href} className="flex items-center gap-1.5">
                {index > 0 && (
                  <ChevronRight aria-hidden="true" className="h-3.5 w-3.5 text-muted-2" />
                )}
                {isLast ? (
                  <span aria-current="page" className="text-muted">
                    {item.label}
                  </span>
                ) : (
                  <Link href={item.href} className="link-underline hover:text-foreground">
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(breadcrumbSchema(items))}
      />
    </>
  );
}
