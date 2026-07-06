import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <div className="pointer-events-none fixed inset-0 bg-grid-pattern [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,#000_40%,transparent_100%)]" />
      <span className="eyebrow relative">404</span>
      <h1 className="relative mt-6 text-4xl font-bold text-foreground sm:text-5xl">
        This page isn&apos;t ranking.
      </h1>
      <p className="relative mt-4 max-w-md text-muted">
        The page you&apos;re looking for doesn&apos;t exist — but the rest of the site does.
      </p>
      <Link href="/" className="btn-primary relative mt-8">
        <ArrowLeft className="h-4 w-4" /> Back to home
      </Link>
    </main>
  );
}
