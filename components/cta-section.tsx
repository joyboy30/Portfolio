import Link from "next/link";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

/**
 * Closing conversion block reused across the inner pages. Contact routes go
 * through /contact and WhatsApp only — no phone number is exposed.
 */
export function CTASection({
  title = "Let's improve your search visibility.",
  description = "Tell me about your business and what you're trying to rank for, and I'll come back with an honest read on what's realistic.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="section-pad">
      <div className="container-shell">
        <div className="glass-card flex flex-col items-start justify-between gap-6 border-border-strong bg-accent-gradient/[0.08] p-8 sm:p-10 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">{title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">{description}</p>
          </div>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Link href="/contact" className="btn-primary shrink-0 justify-center">
              Get in touch <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
            </Link>
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary shrink-0 justify-center"
            >
              <MessageCircle aria-hidden="true" className="h-4 w-4" /> {siteConfig.whatsappLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
