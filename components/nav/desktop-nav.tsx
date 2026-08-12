"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronRight } from "lucide-react";
import { mainNav, type NavItem } from "@/lib/navigation";
import { cn } from "@/lib/utils";

/** Delay before a hovered-away menu closes, so the pointer can travel from a
 *  trigger to its panel (and from a panel to its nested submenu) without the
 *  menu vanishing mid-move. */
const CLOSE_DELAY = 220;

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function DesktopNav() {
  const pathname = usePathname();
  const [openTop, setOpenTop] = useState<string | null>(null);
  const [openSub, setOpenSub] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const menuId = useId();

  const cancelClose = useCallback(() => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }, []);

  const closeAll = useCallback(() => {
    cancelClose();
    setOpenTop(null);
    setOpenSub(null);
  }, [cancelClose]);

  const scheduleClose = useCallback(() => {
    cancelClose();
    closeTimer.current = setTimeout(() => {
      setOpenTop(null);
      setOpenSub(null);
    }, CLOSE_DELAY);
  }, [cancelClose]);

  // Close whenever the route changes.
  useEffect(() => {
    closeAll();
  }, [pathname, closeAll]);

  useEffect(() => () => cancelClose(), [cancelClose]);

  // Escape closes; focus/click outside closes.
  useEffect(() => {
    if (!openTop) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeAll();
    };
    const onPointerDown = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) closeAll();
    };
    const onFocusIn = (event: FocusEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) closeAll();
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("focusin", onFocusIn);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("focusin", onFocusIn);
    };
  }, [openTop, closeAll]);

  return (
    <div ref={navRef} className="hidden items-center gap-0.5 lg:flex">
      {mainNav.map((item) => {
        const active = isActive(pathname, item.href);

        if (!item.children) {
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={cn(
                "rounded-full px-3.5 py-2 text-sm font-medium transition-colors hover:bg-white/[0.05] hover:text-foreground",
                active ? "text-foreground" : "text-muted"
              )}
            >
              {item.label}
            </Link>
          );
        }

        const panelId = `${menuId}-${item.label.toLowerCase()}`;
        const expanded = openTop === item.href;

        return (
          <div
            key={item.href}
            className="relative"
            onMouseEnter={() => {
              cancelClose();
              setOpenTop(item.href);
            }}
            onMouseLeave={scheduleClose}
          >
            <button
              type="button"
              aria-expanded={expanded}
              aria-controls={panelId}
              aria-haspopup="true"
              onClick={() => {
                cancelClose();
                setOpenTop((current) => (current === item.href ? null : item.href));
                setOpenSub(null);
              }}
              onKeyDown={(event) => {
                if (event.key === "ArrowDown") {
                  event.preventDefault();
                  setOpenTop(item.href);
                }
              }}
              className={cn(
                "flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium transition-colors hover:bg-white/[0.05] hover:text-foreground",
                active || expanded ? "text-foreground" : "text-muted"
              )}
            >
              {item.label}
              <ChevronDown
                aria-hidden="true"
                className={cn(
                  "h-3.5 w-3.5 transition-transform duration-200",
                  expanded && "rotate-180"
                )}
              />
            </button>

            {expanded && (
              // pt-2 keeps the panel visually offset while staying inside the
              // hover area, so the pointer never crosses a dead gap.
              <div id={panelId} className="absolute left-0 top-full z-50 pt-2">
                <ul className="glass-card w-72 overflow-visible p-2 shadow-glass">
                  <li>
                    <Link
                      href={item.href}
                      className="block rounded-xl px-3 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-white/[0.06]"
                    >
                      All {item.label}
                    </Link>
                  </li>
                  <li aria-hidden="true" className="my-1 border-t border-border" />

                  {item.children.map((child) => (
                    <SubMenuItem
                      key={child.href}
                      item={child}
                      pathname={pathname}
                      open={openSub === child.href}
                      onOpen={() => {
                        cancelClose();
                        setOpenSub(child.href);
                      }}
                      onClose={() => setOpenSub(null)}
                    />
                  ))}
                </ul>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

function SubMenuItem({
  item,
  pathname,
  open,
  onOpen,
  onClose,
}: {
  item: NavItem;
  pathname: string;
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
}) {
  const panelId = useId();
  const active = isActive(pathname, item.href);

  if (!item.children) {
    return (
      <li>
        <Link
          href={item.href}
          onMouseEnter={onClose}
          onFocus={onClose}
          aria-current={active ? "page" : undefined}
          className={cn(
            "block rounded-xl px-3 py-2.5 transition-colors hover:bg-white/[0.06]",
            active && "bg-white/[0.04]"
          )}
        >
          <span className="block text-sm font-medium text-foreground">{item.label}</span>
          {item.description && (
            <span className="mt-0.5 block text-xs text-muted-2">{item.description}</span>
          )}
        </Link>
      </li>
    );
  }

  return (
    <li className="relative" onMouseEnter={onOpen}>
      <div className="flex items-stretch">
        <Link
          href={item.href}
          aria-current={active ? "page" : undefined}
          className={cn(
            "flex-1 rounded-l-xl px-3 py-2.5 transition-colors hover:bg-white/[0.06]",
            (active || open) && "bg-white/[0.04]"
          )}
        >
          <span className="block text-sm font-medium text-foreground">{item.label}</span>
          {item.description && (
            <span className="mt-0.5 block text-xs text-muted-2">{item.description}</span>
          )}
        </Link>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          aria-label={`${open ? "Hide" : "Show"} ${item.label} submenu`}
          onClick={() => (open ? onClose() : onOpen())}
          onKeyDown={(event) => {
            if (event.key === "ArrowRight") {
              event.preventDefault();
              onOpen();
            }
            if (event.key === "ArrowLeft") {
              event.preventDefault();
              onClose();
            }
          }}
          className={cn(
            "flex w-9 items-center justify-center rounded-r-xl text-muted transition-colors hover:bg-white/[0.06] hover:text-foreground",
            (active || open) && "bg-white/[0.04]"
          )}
        >
          <ChevronRight
            aria-hidden="true"
            className={cn("h-4 w-4 transition-transform duration-200", open && "translate-x-0.5")}
          />
        </button>
      </div>

      {open && (
        // left-full with no horizontal gap: the submenu shares an edge with the
        // parent item, so moving the pointer sideways never leaves the menu.
        <div id={panelId} className="absolute left-full top-0 z-50 pl-1">
          <ul className="glass-card w-72 p-2 shadow-glass">
            {item.children.map((grandchild) => {
              const grandchildActive = isActive(pathname, grandchild.href.split("#")[0]);
              return (
                <li key={grandchild.href}>
                  <Link
                    href={grandchild.href}
                    className={cn(
                      "block rounded-xl px-3 py-2.5 transition-colors hover:bg-white/[0.06]",
                      grandchildActive && !grandchild.href.includes("#") && "bg-white/[0.04]"
                    )}
                  >
                    <span className="block text-sm font-medium text-foreground">
                      {grandchild.label}
                    </span>
                    {grandchild.description && (
                      <span className="mt-0.5 block text-xs text-muted-2">
                        {grandchild.description}
                      </span>
                    )}
                  </Link>

                  {/* AIO / AEO / GEO are sections of the AI Search
                      Optimization page, so they render as jump links rather
                      than a fourth flyout level. */}
                  {grandchild.children && (
                    <ul className="mb-1 flex flex-wrap gap-1.5 px-3 pb-1">
                      {grandchild.children.map((leaf) => (
                        <li key={leaf.href}>
                          <Link
                            href={leaf.href}
                            className="inline-flex rounded-full border border-border-strong bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] uppercase tracking-wide text-muted transition-colors hover:border-accent/40 hover:text-accent-light"
                          >
                            {leaf.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </li>
  );
}
