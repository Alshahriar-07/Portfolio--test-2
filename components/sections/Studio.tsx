import { ActionLink } from "@/components/ui/ActionLink";
import { ExternalLink } from "@/components/ui/icons";
import { showcaseProjects, studio } from "@/lib/content/site";

export function Studio() {
  return (
    <section
      id="studio"
      aria-labelledby="studio-title"
      className="relative overflow-hidden border-t border-line/60"
    >
      <div className="shell py-24 md:py-36">
        <div className="scroll-reveal grid gap-8 md:grid-cols-12">
          <p className="meta md:col-span-3">06 / Eagox Studio</p>

          <div className="md:col-span-9">
            <h2
              id="studio-title"
              className="font-display text-[clamp(3.6rem,13vw,10.5rem)] font-medium uppercase leading-[0.8] tracking-[-0.06em] text-paper"
            >
              <span className="block">Eagox</span>
              <span className="outline-type block pl-[8%]">Studio</span>
            </h2>

            <div className="mt-14 grid gap-10 border-t border-line/60 pt-8 md:grid-cols-12 md:gap-8">
              <div className="md:col-span-7">
                <p className="max-w-xl text-[15px] leading-relaxed text-muted">
                  {studio.description}
                </p>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-dim">{studio.note}</p>

                <div className="mt-8">
                  <ActionLink
                    href={studio.url}
                    external
                    icon={<ExternalLink aria-hidden="true" />}
                    className="sm:w-auto"
                  >
                    Visit the studio site
                  </ActionLink>
                </div>
                <p className="meta mt-4 text-dim">{studio.urlLabel}</p>
              </div>

              <div className="md:col-span-4 md:col-start-9">
                <p className="meta">Published under the studio</p>
                <ul className="mt-4 border-t border-line/60">
                  {showcaseProjects.map((project, index) => (
                    <li
                      key={project.slug}
                      className="flex items-baseline justify-between gap-4 border-b border-line/60 py-3"
                    >
                      <span className="text-sm text-paper">{project.name}</span>
                      <span className="meta text-dim">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
