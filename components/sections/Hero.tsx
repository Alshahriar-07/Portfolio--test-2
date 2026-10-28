import Link from "next/link";
import type { CSSProperties } from "react";
import { ActionLink } from "@/components/ui/ActionLink";
import { ArrowDown, ArrowRight, Download } from "@/components/ui/icons";
import { HeroSculpture } from "@/components/visuals/HeroSculpture";
import { profile } from "@/lib/content/site";

const resumeHref = profile.resume.publicPath;

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="hero-stage">
      <div className="hero-background" aria-hidden="true" />
      <HeroSculpture />

      <p className="hero-side-label hero-reveal-fade" style={{ "--d": "180ms" } as CSSProperties}>Al Shahriar Sowan / Bangladesh</p>

      <div className="hero-heading-wrap">
        <h1 id="hero-title" className="hero-editorial-title hero-reveal">
          <span>Websites &amp;</span>
          <span className="hero-outline">Software</span>
        </h1>
        <p className="hero-intro hero-reveal" style={{ "--d": "140ms" } as CSSProperties}>
          Al Shahriar Sowan is an independent software developer in Bangladesh building AI tools, web applications, and useful software.
        </p>
        <div className="hero-actions hero-reveal" style={{ "--d": "260ms" } as CSSProperties}>
          <ActionLink href="/#work" variant="outline" className="!w-auto min-w-[11.5rem] max-w-full" icon={<ArrowRight aria-hidden="true" />}>
            Explore work
          </ActionLink>
          <ActionLink
            href={resumeHref}
            download={profile.resume.downloadName}
            variant="outline"
            className="!w-auto min-w-[11.5rem] max-w-full"
            icon={<Download aria-hidden="true" />}
          >
            Download resume
          </ActionLink>
        </div>
      </div>

      <aside className="hero-right-note hero-reveal-fade" style={{ "--d": "360ms" } as CSSProperties} aria-label="What I build">
        <span aria-hidden="true" />
        <p>Building<br />Useful tools<br />For a better<br />Tomorrow.</p>
      </aside>

      <div className="hero-footer hero-reveal-fade" style={{ "--d": "440ms" } as CSSProperties}>
        <div className="hero-category">
          <span className="hero-status-dot" aria-hidden="true" />
          <span>Independent developer</span>
          <i aria-hidden="true" />
          <span>Websites / software</span>
        </div>
        <Link href="/#work" className="hero-scroll" aria-label="Scroll to selected work">
          <span className="hero-scroll-track" aria-hidden="true"><i /></span>
          <span>Scroll</span>
          <ArrowDown aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
