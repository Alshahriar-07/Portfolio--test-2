import Link from "next/link";
import type { CSSProperties } from "react";
import { Download, Github, Linkedin, Mail } from "@/components/ui/icons";
import { profile } from "@/lib/content/site";

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="relative border-t border-line/60"
    >
      <div className="shell py-20 md:py-28">
        <div className="grid gap-10 md:grid-cols-12 md:gap-8" data-reveal="mask">
          <div className="md:col-span-3">
            <p className="meta">07 / Contact</p>
          </div>

          <div className="md:col-span-9">
            <h2
              id="contact-title"
              className="font-display text-[clamp(2.4rem,7vw,5.5rem)] font-medium uppercase leading-[0.9] tracking-[-0.045em] text-paper"
            >
              <span className="reveal-inner block">Let&apos;s build</span>
              <span className="reveal-inner outline-type block">something</span>
            </h2>

            <a
              href="/contact"
              data-reveal
              style={{ "--rd": "160ms" } as CSSProperties}
              className="group mt-12 flex flex-col gap-6 border-y border-line/60 py-8 transition-colors duration-300 hover:bg-paper/[0.02] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-paper md:flex-row md:items-center md:justify-between md:gap-8"
              aria-label={`Open contact page to message ${profile.name}`}
            >
              <span className="font-display text-[clamp(1.2rem,3.2vw,1.9rem)] leading-tight tracking-[-0.02em] text-paper">
                Get in touch
              </span>
              <span className="inline-flex h-11 shrink-0 items-center gap-3 border border-paper px-5 font-mono text-[10px] uppercase tracking-[0.18em] text-paper transition-colors duration-300 group-hover:bg-paper group-hover:text-ink">
                <Mail aria-hidden="true" className="size-4" />
                Email me
              </span>
            </a>

            <div className="mt-6">
              <Link href="/contact" className="inline-flex min-h-11 items-center gap-3 border border-line px-5 font-mono text-[10px] uppercase tracking-[0.18em] text-paper transition-colors hover:border-paper/60 hover:bg-paper/[0.04] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-paper">
                <Mail aria-hidden="true" className="size-4" />
                Use the contact form
              </Link>
            </div>

            <div className="grid gap-8 py-8 sm:grid-cols-3 sm:gap-6">
              <div>
                <p className="meta">Elsewhere</p>
                <ul className="mt-3 flex flex-col gap-2">
                  <li>
                    <a
                      href={profile.links.github}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="group inline-flex items-center gap-2 text-sm text-paper transition-colors duration-300 hover:text-muted"
                    >
                      <Github aria-hidden="true" className="size-4" />
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a
                      href={profile.links.linkedin}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="group inline-flex items-center gap-2 text-sm text-paper transition-colors duration-300 hover:text-muted"
                    >
                      <Linkedin aria-hidden="true" className="size-4" />
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a
                      href={profile.resume.publicPath}
                      download={profile.resume.downloadName}
                      className="inline-flex items-center gap-2 text-sm text-paper transition-colors duration-300 hover:text-muted"
                    >
                      <Download aria-hidden="true" className="size-4" />
                      Resume — PDF
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className="meta">Focus</p>
                <p className="mt-3 text-sm leading-relaxed text-paper">AI tools, websites &amp; software</p>
              </div>

              <div>
                <p className="meta">Status</p>
                <p className="mt-3 text-sm leading-relaxed text-paper">{profile.availability}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
