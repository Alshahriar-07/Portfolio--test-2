import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { JsonLd } from "@/components/seo/JsonLd";
import { ExternalLink, Github } from "@/components/ui/icons";
import { products, profile } from "@/lib/content/site";
import { pageMetadata, productsStructuredData } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: `Products — ${profile.name}`,
  description:
    "Seven independent projects by Al Shahriar Sowan: SeedCode CLI, SeedCode Chat, SeedCode Chat Android, Mr Mesoff, IntLLM, SeedMail, and Dorkey.",
  path: "/products",
});

function ProjectPreview({
  project,
  featured = false,
}: {
  project: (typeof products)[number];
  featured?: boolean;
}) {
  return (
    <a
      href={project.website}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit ${project.name} website in a new tab`}
      className="group relative block aspect-[16/10] overflow-hidden border border-line bg-surface focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-paper"
    >
      {project.preview ? (
        <Image
          src={project.preview.src}
          alt={project.preview.alt}
          fill
          priority={featured}
          sizes={featured ? "(min-width: 768px) 62vw, 94vw" : "(min-width: 1024px) 29vw, (min-width: 640px) 45vw, 94vw"}
          className="object-cover grayscale transition-[filter,transform] duration-500 group-hover:scale-[1.02] group-hover:grayscale-0 group-focus-visible:grayscale-0"
        />
      ) : (
        <span className="absolute inset-0 grid place-items-center bg-[radial-gradient(ellipse_at_52%_43%,#262626_0%,#111_45%,#080808_76%)]">
          <span className="max-w-[90%] text-center font-display text-[clamp(2.2rem,7vw,5rem)] font-semibold uppercase leading-[0.9] tracking-[-0.08em] text-paper/90">
            {project.name}
          </span>
        </span>
      )}
      <span className="absolute bottom-3 left-3 border border-paper/25 bg-ink/75 px-3 py-2 font-mono text-[9px] uppercase tracking-[0.14em] text-paper backdrop-blur-sm">
        {project.preview?.domain ?? new URL(project.website).hostname}
      </span>
      <span className="absolute right-3 top-3 grid size-9 place-items-center border border-paper/30 bg-ink/70 text-paper opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
        <ExternalLink aria-hidden="true" />
      </span>
    </a>
  );
}

function ProjectActions({ project }: { project: (typeof products)[number] }) {
  return (
    <div className="mt-6 flex flex-wrap gap-2.5">
      <a
        href={project.website}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex min-h-11 items-center gap-3 border border-paper bg-paper px-4 font-mono text-[10px] uppercase tracking-[0.15em] text-ink transition-colors hover:bg-transparent hover:text-paper focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-paper"
      >
        Visit Website <ExternalLink aria-hidden="true" className="size-3.5" />
      </a>
      {project.github ? (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center gap-3 border border-line px-4 font-mono text-[10px] uppercase tracking-[0.15em] text-paper transition-colors hover:border-paper/60 hover:bg-paper/[0.04] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-paper"
        >
          View GitHub <Github aria-hidden="true" className="size-3.5" />
        </a>
      ) : null}
    </div>
  );
}

function ProjectTags({ project }: { project: (typeof products)[number] }) {
  return (
    <ul aria-label={`${project.name} tags`} className="mt-5 flex flex-wrap gap-2">
      {project.tags.map((tag) => (
        <li
          key={tag}
          className="border border-line/80 px-2.5 py-1.5 font-mono text-[9px] uppercase tracking-[0.1em] text-muted"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}

export default function ProductsPage() {
  const [featured, ...moreProjects] = products;

  return (
    <>
      <JsonLd data={productsStructuredData()} />
      <main id="main" className="pt-[var(--header-h)]">
        <section aria-labelledby="products-title" className="border-b border-line/60">
          <div className="shell pb-14 pt-10 sm:pb-20 md:pt-16">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-line/60 pb-4">
              <p className="meta">Independent software / selected products</p>
              <Link href="/#about" className="nav-link meta text-paper">About the maker</Link>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-12 md:items-end">
              <h1 id="products-title" data-reveal="mask" className="font-display text-[clamp(3.4rem,11vw,9rem)] font-medium uppercase leading-[0.79] tracking-[-0.07em] text-paper md:col-span-9">
                <span className="reveal-inner">Selected<br /><span className="outline-type pl-[8%]">products.</span></span>
              </h1>
              <p className="max-w-sm text-sm leading-relaxed text-muted md:col-span-3 md:pb-2">
                Seven independent projects across AI tools, mobile and web applications, and focused software experiments.
              </p>
            </div>
            <div className="mt-12 flex items-center justify-between border-t border-line/60 pt-4">
              <p className="meta">{String(products.length).padStart(2, "0")} / Current projects</p>
              <a href="#product-01" className="meta nav-link text-muted">Explore the index ↓</a>
            </div>
          </div>
        </section>

        <section aria-label="Product index" className="shell py-12 md:py-20">
          <article id="product-01" className="grid gap-7 border-t border-line/70 pt-6 md:grid-cols-12 md:items-center md:gap-9 md:pt-8">
            <div className="md:col-span-7">
              <ProjectPreview project={featured} featured />
              <p className="meta mt-3">01 / Featured project</p>
            </div>
            <div className="md:col-span-5">
              <p className="meta">01 / {featured.category}</p>
              <h2 className="mt-5 font-display text-[clamp(2.8rem,6vw,5.4rem)] font-medium uppercase leading-[0.84] tracking-[-0.06em] text-paper">
                {featured.name}
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-muted sm:text-[15px]">{featured.description}</p>
              <ProjectTags project={featured} />
              <ProjectActions project={featured} />
            </div>
          </article>

          <div className="mt-16 grid gap-x-7 gap-y-14 border-t border-line/70 pt-6 sm:grid-cols-2 lg:mt-24 lg:grid-cols-3">
            {moreProjects.map((project, index) => (
              <article
                key={project.slug}
                id={`product-${String(index + 2).padStart(2, "0")}`}
                data-reveal
                style={{ "--rd": `${(index % 3) * 90}ms` } as CSSProperties}
                className="min-w-0"
              >
                <ProjectPreview project={project} />
                <p className="meta mt-5">{String(index + 2).padStart(2, "0")} / {project.category}</p>
                <h2 className="mt-3 font-display text-[clamp(1.8rem,3.5vw,3.25rem)] font-medium uppercase leading-[0.88] tracking-[-0.05em] text-paper">
                  {project.name}
                </h2>
                <p className="mt-4 min-h-16 text-sm leading-relaxed text-muted">{project.description}</p>
                <ProjectTags project={project} />
                <ProjectActions project={project} />
              </article>
            ))}
          </div>
        </section>

        <section className="border-t border-line/60">
          <div className="shell flex flex-wrap items-center justify-between gap-6 py-10 md:py-14">
            <p className="meta">Independent software practice / Eagox Studio</p>
            <Link href="/#work" className="meta link-line text-paper">Back to the portfolio <span aria-hidden="true">↗</span></Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
