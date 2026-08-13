"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DesktopNav } from "@/components/nav/desktop-nav";
import { MobileNav } from "@/components/nav/mobile-nav";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site-config";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll only while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close the mobile menu after any navigation.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "py-3" : "py-5"
      )}
    >
      <div className="container-shell">
        <div
          className={cn(
            "flex items-center justify-between rounded-2xl border px-4 py-3 transition-all duration-300 sm:px-5",
            scrolled
              ? "border-border-strong bg-background/70 backdrop-blur-xl shadow-glass"
              : "border-transparent bg-transparent"
          )}
        >
          <Link
            href="/"
            aria-label="Igel Cudiera — home"
            className="flex items-center gap-2 font-display text-lg font-bold text-foreground"
          >
            <span
              aria-hidden="true"
              className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent-gradient font-mono text-sm font-bold text-white shadow-glow-sm"
            >
              IC
            </span>
            <span className="hidden sm:inline">Igel Cudiera</span>
          </Link>

          <nav aria-label="Main">
            <DesktopNav />
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Button variant="primary" size="sm" asChild>
              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
              >
                Let&apos;s Work Together{" "}
                <ArrowUpRight
                  aria-hidden="true"
                  className="h-3.5 w-3.5"
                />
              </a>
            </Button>
          </div>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-border-strong bg-white/[0.03] text-foreground lg:hidden"
          >
            {open ? (
              <X aria-hidden="true" className="h-5 w-5" />
            ) : (
              <Menu aria-hidden="true" className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      <div id="mobile-navigation">
        <MobileNav open={open} onClose={close} />
      </div>
    </header>
  );
}