import type { CSSProperties } from "react";
import { ActionLink } from "@/components/ui/ActionLink";
import { ArrowDown, ArrowDownRight } from "@/components/ui/icons";
import { HeroVisual } from "@/components/visuals/HeroVisual";
import { profile } from "@/lib/content/site";

const delay = (ms: number) => ({ "--reveal-delay": `${ms}ms` }) as CSSProperties;

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden pt-[var(--header-h)]"
    >
      <div className="shell flex min-h-[calc(100svh-var(--header-h))] flex-col">
        {/* Edge metadata */}
        <div
          className="reveal flex items-center justify-between gap-4 border-b border-line/60 py-3.5"
          style={delay(0)}
        >
          <span className="meta truncate">{profile.name}</span>
          <span className="meta hidden sm:block">AI tools / software</span>
          <span className="meta whitespace-nowrap">{profile.location.short}</span>
        </div>

        {/* Composition */}
        <div className="relative flex flex-1 items-center py-12 sm:py-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 -right-[18%] z-0 w-[132%] sm:right-[-10%] sm:w-[100%] lg:right-[-6%] lg:w-[74%]"
          >
            <HeroVisual />
          </div>

          {/* Legibility scrim */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(100deg,#050505_0%,rgba(5,5,5,0.94)_24%,rgba(5,5,5,0.55)_54%,rgba(5,5,5,0.05)_84%)] sm:bg-[linear-gradient(100deg,#050505_0%,rgba(5,5,5,0.88)_30%,rgba(5,5,5,0.3)_62%,rgba(5,5,5,0)_92%)]"
          />

          <div className="relative z-10 w-full">
            <div className="flex items-center justify-between gap-4">
              <p className="meta flex items-center gap-2.5">
                <span className="relative flex size-1.5 shrink-0" aria-hidden="true">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-paper/50" />
                  <span className="relative inline-flex size-1.5 rounded-full bg-paper" />
                </span>
                {profile.availability}
              </p>
              <p className="meta hidden shrink-0 md:block">001 / 008</p>
            </div>

            <h1 id="hero-title" className="hero-title mt-5 sm:mt-7">
              <span className="line-mask">
                <span className="line" style={delay(140)}>
                  AI Tools
                </span>
              </span>
              <span className="line-mask">
                <span className="line outline-type pl-[7%] sm:pl-[13%]" style={delay(260)}>
                  &amp; Software
                </span>
              </span>
            </h1>
          </div>

          <div className="pointer-events-none absolute bottom-8 right-0 z-10 hidden items-center gap-3 lg:flex">
            <span className="h-px w-10 bg-line" aria-hidden="true" />
            <span className="meta text-dim">Fig. 01 — Intersection study</span>
          </div>
        </div>

        {/* Supporting copy and actions */}
        <div className="border-t border-line/60">
          <div className="grid items-center gap-6 py-6 md:grid-cols-12 md:gap-4 md:py-7">
            <p
              className="reveal max-w-xs text-[13px] leading-relaxed text-muted md:col-span-5"
              style={delay(420)}
            >
              Junior developer building AI tools and software — from a multi-provider
              coding CLI to a unified AI chat app.
            </p>

            <div className="reveal md:col-span-2" style={delay(480)}>
              <a
                href="#work"
                className="group inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted transition-colors duration-300 hover:text-paper"
              >
                <span className="scroll-track" aria-hidden="true" />
                <span>Scroll</span>
              </a>
            </div>

            <div
              className="reveal flex flex-col gap-3 md:col-span-5 lg:flex-row lg:justify-end"
              style={delay(540)}
            >
              <ActionLink href="#work" variant="solid" icon={<ArrowDownRight />}>
                Explore work
              </ActionLink>
              <ActionLink
                href={profile.resume.publicPath}
                download={profile.resume.downloadName}
                icon={<ArrowDown />}
              >
                Download resume
              </ActionLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
