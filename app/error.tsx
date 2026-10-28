"use client";

import Link from "next/link";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { ArrowLeft, ArrowRight, LoaderCircle } from "@/components/ui/icons";

export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <>
      <main id="main" className="pt-[var(--header-h)]">
        <section
          aria-labelledby="error-title"
          className="shell flex min-h-[calc(100svh-var(--header-h))] flex-col justify-center py-16 md:py-24"
        >
          <p className="meta">Unexpected error</p>
          <div className="mt-8 grid gap-8 md:grid-cols-12 md:items-end">
            <h1
              id="error-title"
              className="font-display text-[clamp(3.2rem,10vw,7.5rem)] font-medium uppercase leading-[0.82] tracking-[-0.07em] text-paper md:col-span-9"
            >
              Something
              <br />
              <span className="outline-type pl-[8%]">went wrong.</span>
            </h1>
            <p className="max-w-sm text-sm leading-relaxed text-muted md:col-span-3 md:pb-2">
              This page couldn&apos;t be displayed. You can try again, return home, or continue to the product index.
            </p>
          </div>
          <div className="mt-12 flex flex-col gap-3 border-t border-line/60 pt-6 sm:flex-row">
            <button
              type="button"
              onClick={reset}
              className="inline-flex min-h-12 items-center justify-center gap-3 border border-paper bg-paper px-5 font-mono text-[10px] uppercase tracking-[0.18em] text-ink transition-colors hover:bg-transparent hover:text-paper focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-paper"
            >
              <LoaderCircle aria-hidden="true" className="size-4" />
              Try again
            </button>
            <Link
              href="/"
              className="inline-flex min-h-12 items-center justify-center gap-3 border border-line px-5 font-mono text-[10px] uppercase tracking-[0.18em] text-paper transition-colors hover:border-paper/60 hover:bg-paper/[0.04] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-paper"
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
