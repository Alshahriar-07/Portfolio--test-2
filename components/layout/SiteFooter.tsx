import Link from "next/link";
import { ArrowUp, Github, Linkedin, Mail } from "@/components/ui/icons";
import { profile, siteSections } from "@/lib/content/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line/60">
      <div className="shell py-10 md:py-12">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-display text-lg uppercase tracking-[-0.02em] text-paper">
              {profile.name}
            </p>
            <p className="meta mt-2">AI tools / websites / software</p>
          </div>

          <nav aria-label="Site index" className="md:col-span-4">
            <p className="meta">Index</p>
            <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2">
              {siteSections.map((section) => (
                <li key={section.href}>
                  <Link
                    href={section.href}
                    className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted transition-colors duration-300 hover:text-paper"
                  >
                    {section.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-3 md:text-right">
            <p className="meta">Elsewhere</p>
            <ul className="mt-3 flex flex-col gap-2 md:items-end">
              <li>
                <a
                  href={profile.links.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted transition-colors duration-300 hover:text-paper"
                >
                  <span className="inline-flex items-center gap-2"><Github aria-hidden="true" className="size-3.5" />GitHub</span>
                </a>
              </li>
              <li>
                <a
                  href={profile.links.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted transition-colors duration-300 hover:text-paper"
                >
                  <span className="inline-flex items-center gap-2"><Linkedin aria-hidden="true" className="size-3.5" />LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted transition-colors duration-300 hover:text-paper"
                >
                  <span className="inline-flex items-center gap-2"><Mail aria-hidden="true" className="size-3.5" />Email</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-line/60 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="meta">© {year} {profile.name}</p>
          <Link
            href="/"
            className="group inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted transition-colors duration-300 hover:text-paper"
          >
            Home
            <ArrowUp aria-hidden="true" className="transition-transform duration-300 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
