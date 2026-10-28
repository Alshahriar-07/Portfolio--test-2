import type { CSSProperties } from "react";

import { SectionIntro } from "@/components/ui/SectionIntro";
import { currentlyLearning, expertise } from "@/lib/content/site";

export function Expertise() {
  return (
    <section
      id="expertise"
      aria-labelledby="expertise-title"
      className="relative border-t border-line/60"
    >
      <div className="shell py-20 md:py-28">
        <SectionIntro
          index="04 / Expertise"
          titleId="expertise-title"
          title="Technical index"
          note="The tools and systems behind the projects, grouped by how I use them."
        />

        <ol className="mt-14 border-t border-line/60">
          {expertise.map((item, index) => (
            <li
              key={item.name}
              data-reveal
              style={{ "--rd": `${index * 70}ms` } as CSSProperties}
              className="grid gap-5 border-b border-line/60 py-8 md:grid-cols-12 md:gap-8 md:py-10"
            >
              <div className="flex items-baseline justify-between gap-4 md:col-span-2">
                <span className="font-mono text-[11px] tracking-[0.16em] text-dim">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="h-px w-8 bg-line md:hidden" aria-hidden="true" />
              </div>

              <div className="md:col-span-4">
                <h3 className="font-display text-2xl font-medium uppercase leading-[0.95] tracking-[-0.03em] text-paper md:text-[1.75rem]">
                  {item.name}
                </h3>
                <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>

              <div className="md:col-span-6 md:pl-6">
                <p className="meta">Tools &amp; methods</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <li
                      key={tag}
                      className="border border-line px-2.5 py-1.5 font-mono text-[9px] uppercase tracking-[0.12em] text-muted"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-8 flex flex-col gap-4 border-t border-line/60 pt-6 sm:flex-row sm:items-baseline sm:justify-between" data-reveal="fade">
          <p className="meta text-paper">Currently learning</p>
          <p className="meta max-w-2xl sm:text-right">{currentlyLearning.join("  ·  ")}</p>
        </div>
      </div>
    </section>
  );
}
