import { ArrowUpRight } from "@/components/ui/icons";
import { profile } from "@/lib/content/site";

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="relative border-t border-line/60"
    >
      <div className="shell py-20 md:py-28">
        <div className="scroll-reveal grid gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-3">
            <p className="meta">07 / Contact</p>
          </div>

          <div className="md:col-span-9">
            <h2
              id="contact-title"
              className="font-display text-[clamp(2.4rem,7vw,5.5rem)] font-medium uppercase leading-[0.9] tracking-[-0.045em] text-paper"
            >
              Let&apos;s build
              <br />
              <span className="outline-type">something</span>
            </h2>

            <a
              href={`mailto:${profile.email}`}
              className="group mt-12 flex flex-col gap-6 border-y border-line/60 py-8 transition-colors duration-300 hover:bg-paper/[0.02] md:flex-row md:items-center md:justify-between md:gap-8"
              aria-label={`Email ${profile.name} at ${profile.email}`}
            >
              <span className="break-all font-display text-[clamp(1rem,3.2vw,1.9rem)] leading-tight tracking-[-0.02em] text-paper">
                {profile.email}
              </span>
              <span className="inline-flex h-11 shrink-0 items-center gap-3 border border-paper px-5 font-mono text-[10px] uppercase tracking-[0.18em] text-paper transition-colors duration-300 group-hover:bg-paper group-hover:text-ink">
                Email me
                <ArrowUpRight />
              </span>
            </a>

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
                      GitHub
                      <ArrowUpRight className="size-3 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                  </li>
                  <li>
                    <a
                      href={profile.links.linkedin}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="group inline-flex items-center gap-2 text-sm text-paper transition-colors duration-300 hover:text-muted"
                    >
                      LinkedIn
                      <ArrowUpRight className="size-3 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                  </li>
                  <li>
                    <a
                      href={profile.resume.publicPath}
                      download={profile.resume.downloadName}
                      className="text-sm text-paper transition-colors duration-300 hover:text-muted"
                    >
                      Resume — PDF
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className="meta">Based in</p>
                <p className="mt-3 text-sm leading-relaxed text-paper">{profile.location.short}</p>
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
