import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { ArrowLeft, ArrowRight } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Page not found — Al Shahriar Sowan",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="pt-[var(--header-h)]">
        <section
          aria-labelledby="not-found-title"
          className="shell flex min-h-[calc(100svh-var(--header-h))] flex-col justify-center py-16 md:py-24"
        >
          <p className="meta">404 / Not found</p>
          <div className="mt-8 grid gap-8 md:grid-cols-12 md:items-end">
            <h1
              id="not-found-title"
              className="font-display text-[clamp(3.2rem,11vw,8.5rem)] font-medium uppercase leading-[0.8] tracking-[-0.07em] text-paper md:col-span-9"
            >
              This page
              <br />
              <span className="outline-type pl-[8%]">doesn&apos;t exist.</span>
            </h1>
            <p className="max-w-sm text-sm leading-relaxed text-muted md:col-span-3 md:pb-2">
              The page you&apos;re looking for may have moved or may no longer be available.
            </p>
          </div>
          <div className="mt-12 flex flex-col gap-3 border-t border-line/60 pt-6 sm:flex-row">
            <Link
              href="/"
              className="inline-flex min-h-12 items-center justify-center gap-3 border border-paper bg-paper px-5 font-mono text-[10px] uppercase tracking-[0.18em] text-ink transition-colors hover:bg-transparent hover:text-paper focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-paper"
            >
              <ArrowLeft aria-hidden="true" className="size-4" />
              Back to home
            </Link>
            <Link
              href="/products"
              className="inline-flex min-h-12 items-center justify-center gap-3 border border-line px-5 font-mono text-[10px] uppercase tracking-[0.18em] text-paper transition-colors hover:border-paper/60 hover:bg-paper/[0.04] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-paper"
            >
              Explore products
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
