import Image from "next/image";
import Link from "next/link";
import { ActionLink } from "@/components/ui/ActionLink";
import { ArrowDown, ArrowRight, Download } from "@/components/ui/icons";
import { HeroSculpture } from "@/components/visuals/HeroSculpture";
import { profile } from "@/lib/content/site";

const resumeHref = profile.resume.publicPath;

function Monogram() {
  return (
    <Image
      className="hero-monogram"
      src="/icons/icon-512.png"
      alt="Al Shahriar Sowan monogram"
      width={76}
      height={76}
      unoptimized
    />
  );
}

function HeroNavigation() {
  return (
    <nav className="hero-nav" aria-label="Primary">
      <Link href="/#work">Work</Link>
      <Link href="/products">Products</Link>
      <Link href="/#about">About</Link>
      <Link href="/contact">Contact</Link>
      <a href={resumeHref} download={profile.resume.downloadName}>
        Resume <Download aria-hidden="true" />
      </a>
    </nav>
  );
}

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="hero-stage">
      <div className="hero-background" aria-hidden="true" />
      <HeroSculpture />

      <header className="hero-header">
        <Link className="hero-identity" href="/" aria-label={`${profile.name}, home`}>
          <Monogram />
          <span className="hero-identity-copy">
            <strong>Al Shahriar Sowan</strong>
            <span>Software Developer</span>
          </span>
        </Link>
        <HeroNavigation />
      </header>

      <p className="hero-side-label">Portfolio {new Date().getFullYear()}</p>

      <div className="hero-heading-wrap">
        <h1 id="hero-title" className="hero-editorial-title">
          <span>Websites &amp;</span>
          <span className="hero-outline">Software</span>
        </h1>
        <div className="hero-actions">
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

      <aside className="hero-right-note" aria-label="What I build">
        <span aria-hidden="true" />
        <p>Building<br />Useful tools<br />For a better<br />Tomorrow.</p>
      </aside>

      <div className="hero-footer">
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
