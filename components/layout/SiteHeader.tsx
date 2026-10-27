import { navLinks, profile } from "@/lib/content/site";

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/60 bg-ink/70 backdrop-blur-md">
      <div className="shell flex h-[var(--header-h)] items-center justify-between gap-6">
        <a
          href="#top"
          className="group flex items-center gap-3"
          aria-label={`${profile.name} — back to top`}
        >
          <span className="grid size-8 shrink-0 place-items-center border border-line font-mono text-[10px] tracking-[0.06em] text-paper transition-colors duration-300 group-hover:border-paper/60">
            AS
          </span>
          <span className="hidden flex-col gap-1 sm:flex">
            <span className="font-mono text-[10px] uppercase leading-none tracking-[0.18em] text-paper">
              {profile.name}
            </span>
            <span className="font-mono text-[9px] uppercase leading-none tracking-[0.14em] text-dim">
              AI tools / software
            </span>
          </span>
        </a>

        <nav aria-label="Primary">
          <ul className="flex items-center gap-6 sm:gap-9">
            {navLinks.map((link, index) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="nav-link font-mono text-[10px] uppercase tracking-[0.18em] text-muted transition-colors duration-300 hover:text-paper focus-visible:text-paper"
                >
                  <span className="mr-1.5 hidden text-[8px] text-dim md:inline-block">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
