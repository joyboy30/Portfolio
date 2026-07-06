import { Mail, Github, Briefcase, Linkedin } from "lucide-react";
import { navLinks } from "@/lib/data";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border">
      <div className="container-shell py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <a href="#top" className="flex items-center gap-2 font-display text-lg font-bold text-foreground">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent-gradient font-mono text-sm font-bold text-white">
                IC
              </span>
              Igel Cudiera
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              SEO, Google Ads, Meta Ads &amp; Digital Marketing Specialist based in{" "}
              {siteConfig.location}, helping businesses worldwide rank higher, get found, and
              convert more search traffic.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={`mailto:${siteConfig.email}`}
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border-strong text-muted transition-colors hover:border-accent/40 hover:text-accent-light"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border-strong text-muted transition-colors hover:border-accent/40 hover:text-accent-light"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.social.onlineJobs}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="OnlineJobs.ph profile"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border-strong text-muted transition-colors hover:border-accent/40 hover:text-accent-light"
              >
                <Briefcase className="h-4 w-4" />
              </a>
              {siteConfig.social.linkedin && (
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border-strong text-muted transition-colors hover:border-accent/40 hover:text-accent-light"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground">Navigate</h4>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="link-underline text-sm text-muted hover:text-foreground">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground">Get in touch</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-muted">
              <li>{siteConfig.email}</li>
              <li>{siteConfig.phoneDisplay}</li>
              <li>{siteConfig.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-xs text-muted-2 sm:flex-row">
          <p>© {year} Igel G. Cudiera. All rights reserved.</p>
          <p>Built with Next.js, TypeScript &amp; Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}
