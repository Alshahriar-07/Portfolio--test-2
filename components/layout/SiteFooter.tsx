import { ArrowUp } from "@/components/ui/icons";
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
            <p className="meta mt-2">AI tools / software — Gazipur, Bangladesh</p>
          </div>

          <nav aria-label="Site index" className="md:col-span-4">
            <p className="meta">Index</p>
            <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2">
              {siteSections.map((section) => (
                <li key={section.href}>
                  <a
                    href={section.href}
                    className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted transition-colors duration-300 hover:text-paper"
                  >
                    {section.label}
                  </a>
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
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={profile.links.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted transition-colors duration-300 hover:text-paper"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted transition-colors duration-300 hover:text-paper"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-line/60 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="meta">© {year} {profile.name}</p>
          <p className="meta hidden md:block">Gazipur, BD — independent software</p>
          <a
            href="#top"
            className="group inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted transition-colors duration-300 hover:text-paper"
          >
            Back to top
            <ArrowUp className="transition-transform duration-300 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
