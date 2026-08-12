"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowUpRight } from "lucide-react";
import { mainNav, type NavItem } from "@/lib/navigation";
import { cn } from "@/lib/utils";

function isActive(pathname: string, href: string) {
  const clean = href.split("#")[0];
  if (clean === "/") return pathname === "/";
  return pathname === clean || pathname.startsWith(`${clean}/`);
}

/** Every ancestor href of the current route, so the accordion opens itself to
 *  wherever the visitor already is. */
function activeTrail(pathname: string, items: NavItem[] = mainNav): string[] {
  for (const item of items) {
    if (item.children) {
      const trail = activeTrail(pathname, item.children);
      if (trail.length) return [item.href, ...trail];
    }
    if (isActive(pathname, item.href)) return [item.href];
  }
  return [];
}

export function MobileNav({ open, onClose }: { open: boolean; onClose: () => void }) {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState<string[]>(() => activeTrail(pathname));

  useEffect(() => {
    setExpanded(activeTrail(pathname));
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  const toggle = (href: string) =>
    setExpanded((current) =>
      current.includes(href) ? current.filter((h) => h !== href) : [...current, href]
    );

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="container-shell mt-2 lg:hidden"
        >
          <nav
            aria-label="Mobile"
            className="glass-card max-h-[calc(100vh-7rem)] overflow-y-auto overscroll-contain p-3 shadow-glass"
          >
            <ul className="flex flex-col gap-0.5">
              {mainNav.map((item) => (
                <AccordionItem
                  key={item.href}
                  item={item}
                  depth={0}
                  pathname={pathname}
                  expanded={expanded}
                  onToggle={toggle}
                  onNavigate={onClose}
                />
              ))}
            </ul>

            <Link
              href="/contact"
              onClick={onClose}
              className="btn-primary mt-3 w-full justify-center"
            >
              Hire Me <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
            </Link>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function AccordionItem({
  item,
  depth,
  pathname,
  expanded,
  onToggle,
  onNavigate,
}: {
  item: NavItem;
  depth: number;
  pathname: string;
  expanded: string[];
  onToggle: (href: string) => void;
  onNavigate: () => void;
}) {
  const panelId = useId();
  const isOpen = expanded.includes(item.href);
  const active = isActive(pathname, item.href);

  if (!item.children) {
    return (
      <li>
        <Link
          href={item.href}
          onClick={onNavigate}
          aria-current={active && !item.href.includes("#") ? "page" : undefined}
          className={cn(
            // min-h-[44px] keeps every row at a comfortable touch target.
            "flex min-h-[44px] items-center rounded-xl px-4 py-3 text-sm font-medium transition-colors hover:bg-white/[0.06]",
            active ? "text-foreground" : "text-muted",
            depth > 0 && "text-[13px]"
          )}
        >
          {item.label}
        </Link>
      </li>
    );
  }

  return (
    <li>
      <div className="flex items-stretch gap-1">
        <Link
          href={item.href}
          onClick={onNavigate}
          aria-current={active ? "page" : undefined}
          className={cn(
            "flex min-h-[44px] flex-1 items-center rounded-xl px-4 py-3 text-sm font-medium transition-colors hover:bg-white/[0.06]",
            active ? "text-foreground" : "text-muted",
            depth > 0 && "text-[13px]"
          )}
        >
          {item.label}
        </Link>
        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          aria-label={`${isOpen ? "Collapse" : "Expand"} ${item.label} menu`}
          onClick={() => onToggle(item.href)}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border-strong bg-white/[0.03] text-muted transition-colors hover:bg-white/[0.08] hover:text-foreground"
        >
          <ChevronDown
            aria-hidden="true"
            className={cn("h-4 w-4 transition-transform duration-200", isOpen && "rotate-180")}
          />
        </button>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <ul className="ml-4 mt-0.5 flex flex-col gap-0.5 border-l border-border pl-2">
              {item.children.map((child) => (
                <AccordionItem
                  key={child.href}
                  item={child}
                  depth={depth + 1}
                  pathname={pathname}
                  expanded={expanded}
                  onToggle={onToggle}
                  onNavigate={onNavigate}
                />
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}
