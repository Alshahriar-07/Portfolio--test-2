import Image from "next/image";
import type { CSSProperties } from "react";
import { ActionLink } from "@/components/ui/ActionLink";
import { ExternalLink, Github } from "@/components/ui/icons";
import { SectionIntro } from "@/components/ui/SectionIntro";
import {
  secondaryProjects,
  showcaseProjects,
  type ShowcaseProject,
} from "@/lib/content/site";

function PreviewFrame({ project, index }: { project: ShowcaseProject; index: number }) {
  const href = project.liveUrl ?? project.repoUrl;
  const destination = project.liveUrl ? "live site" : "repository";
  const imageSizes =
    project.layout === "wide" ? "(min-width: 1024px) 94vw, 92vw" : "(min-width: 1024px) 46vw, 92vw";

  return (
    <figure>
      <a
        href={href}
        target="_blank"
        rel="noreferrer noopener"
        aria-label={`Open ${project.name} ${destination} in a new tab`}
        className="group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-paper"
      >
        <div className="flex items-center justify-between gap-4 border border-line bg-ink-raised px-3 py-2">
          <span className="meta text-[9px]">{project.preview.domain}</span>
          <span className="meta flex items-center gap-2 text-[9px]">
            <span className="size-1 bg-paper" aria-hidden="true" />
            {project.liveUrl ? "Live" : "Repo"}
          </span>
        </div>

        <div className="relative -mt-px aspect-[16/10] overflow-hidden border border-line bg-surface">
          <Image
            src={project.preview.src}
            alt={project.preview.alt}
            width={1440}
            height={900}
            sizes={imageSizes}
            quality={82}
            className="h-full w-full object-cover grayscale transition-[filter] duration-700 ease-out group-hover:grayscale-0 group-focus-visible:grayscale-0"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute right-3 top-3 grid size-8 place-items-center border border-paper/30 bg-ink/50 text-paper opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
          >
            <ExternalLink aria-hidden="true" />
          </span>
        </div>
      </a>

      <figcaption className="mt-3 flex items-center justify-between gap-4">
        <span className="meta text-dim">{project.preview.caption}</span>
        <span className="meta text-dim">Fig. {String(index).padStart(2, "0")}</span>
      </figcaption>
    </figure>
  );
}

function ProjectActions({ project }: { project: ShowcaseProject }) {
  return (
    <div className="flex flex-col gap-2.5 sm:flex-row">
      {project.liveUrl ? (
        <ActionLink
          href={project.liveUrl}
          external
          size="compact"
          variant="solid"
          icon={<ExternalLink aria-hidden="true" />}
        >
          Visit site
        </ActionLink>
      ) : null}
      <ActionLink
        href={project.repoUrl}
        external
        size="compact"
        icon={<Github aria-hidden="true" />}
      >
        Source code
      </ActionLink>
    </div>
  );
}

function ProjectFacts({ project }: { project: ShowcaseProject }) {
  return (
    <dl className="grid grid-cols-2 gap-4 sm:grid-cols-3">
      {project.facts.map((fact) => (
        <div key={fact.label}>
          <dt className="meta">{fact.label}</dt>
          <dd className="mt-1.5 text-xs leading-snug text-paper">{fact.value}</dd>
        </div>
      ))}
    </dl>
  );
}

function WideProject({ project, index }: { project: ShowcaseProject; index: number }) {
  return (
    <div className="mt-6 md:mt-8">
      <h3 className="font-display text-[clamp(2.6rem,7vw,6rem)] font-medium uppercase leading-[0.86] tracking-[-0.055em] text-paper">
        {project.name}
      </h3>

      <div className="mt-8">
        <PreviewFrame project={project} index={index} />
      </div>

      <div className="mt-8 grid gap-8 md:grid-cols-12 md:gap-8">
        <p className="max-w-lg text-[15px] leading-relaxed text-muted md:col-span-5">
          {project.summary}
        </p>

        <div className="md:col-span-7">
          <div className="border-t border-line/60 pt-5">
            <ProjectFacts project={project} />
          </div>
          <div className="mt-6">
            <ProjectActions project={project} />
          </div>
        </div>
      </div>
    </div>
  );
}

function SplitProject({ project, index }: { project: ShowcaseProject; index: number }) {
  const previewLeft = project.layout === "preview-left";

  return (
    <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-10">
      <div className={`lg:col-span-6 ${previewLeft ? "lg:order-2" : ""}`}>
        <h3 className="font-display text-[clamp(2.2rem,4.6vw,4rem)] font-medium uppercase leading-[0.88] tracking-[-0.05em] text-paper">
          {project.name}
        </h3>
        <p className="mt-5 max-w-md text-[15px] leading-relaxed text-muted">{project.summary}</p>

        <div className="mt-7 border-t border-line/60 pt-5">
          <ProjectFacts project={project} />
        </div>

        <div className="mt-7">
          <ProjectActions project={project} />
        </div>
      </div>

      <div className={`lg:col-span-6 ${previewLeft ? "lg:order-1" : ""}`}>
        <PreviewFrame project={project} index={index} />
      </div>
    </div>
  );
}

export function SelectedWork() {
  return (
    <section id="work" aria-labelledby="work-title" className="relative border-t border-line/60">
      <div className="shell py-20 md:py-28">
        <SectionIntro
          index="02 / Selected work"
          titleId="work-title"
          title="Built to be used"
          note="Live tools, shown with interfaces captured from the running products. Repositories and demos are linked where they exist."
        />

        <div className="mt-14 space-y-16 md:space-y-24">
          {showcaseProjects.map((project, projectIndex) => (
            <article
              key={project.slug}
              data-reveal
              style={{ "--rd": `${projectIndex * 80}ms` } as CSSProperties}
              className="border-t border-line/70 pt-7 md:pt-9"
            >
              <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3">
                <div className="flex items-center gap-3">
                  <span className="meta text-paper">
                    {`02.${projectIndex + 1}`}
                  </span>
                  <span className="h-px w-8 bg-line" aria-hidden="true" />
                  <span className="meta">{project.category}</span>
                </div>

                <span className="meta inline-flex items-center gap-2">
                  <span className="size-1 bg-paper" aria-hidden="true" />
                  {project.status}
                  <span className="text-dim">/ {project.statusDetail}</span>
                </span>
              </div>

              {project.layout === "wide" ? (
                <WideProject project={project} index={projectIndex + 1} />
              ) : (
                <SplitProject project={project} index={projectIndex + 1} />
              )}
            </article>
          ))}
        </div>

        <div className="mt-20 grid gap-6 border-t border-line/70 pt-8 md:grid-cols-12 md:gap-8" data-reveal="fade">
          <p className="meta md:col-span-3">Also building</p>

          <ul className="md:col-span-9">
            {secondaryProjects.map((project) => (
              <li key={project.name}>
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group grid gap-2 border-b border-line/60 py-5 transition-colors duration-300 hover:bg-paper/[0.025] sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-6"
                >
                  <div>
                    <h3 className="font-display text-lg font-medium uppercase tracking-[-0.02em] text-paper">
                      {project.name}
                    </h3>
                    <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-muted">
                      {project.description}
                    </p>
                  </div>
                  <span className="meta flex items-center gap-3 sm:justify-end">
                    {project.status}
                    <Github className="size-4 transition-transform duration-300 group-hover:scale-110" />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
