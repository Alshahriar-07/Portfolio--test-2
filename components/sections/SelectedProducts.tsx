import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { ArrowRight, ExternalLink } from "@/components/ui/icons";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { products } from "@/lib/content/site";

export function SelectedProducts() {
  return (
    <section id="work" aria-labelledby="products-home-title" className="relative border-t border-line/60">
      <div className="shell py-20 md:py-28">
        <SectionIntro
          index="02 / Selected products"
          titleId="products-home-title"
          title="Ideas, made tangible"
          note="A small selection from an independent practice exploring AI tools, interfaces, and useful software."
        />

        <div className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {products.filter((project) => ["seedcode-cli", "seedcode-chat", "intllm"].includes(project.slug)).map((project, index) => (
            <a
              key={project.slug}
              href={project.website}
              target="_blank"
              rel="noreferrer noopener"
              data-reveal
              style={{ "--rd": `${index * 100}ms` } as CSSProperties}
              className="group bg-ink p-4 transition-colors duration-300 hover:bg-ink-raised focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-paper sm:p-5"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-surface">
                {project.preview ? (
                  <Image
                    src={project.preview.src}
                    alt={project.preview.alt}
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                    className="object-cover grayscale transition-all duration-700 group-hover:scale-[1.025] group-hover:grayscale-0 group-focus-visible:grayscale-0"
                  />
                ) : (
                  <span className="absolute inset-0 grid place-items-center bg-[radial-gradient(ellipse_at_52%_43%,#262626_0%,#111_45%,#080808_76%)] font-display text-4xl font-semibold uppercase tracking-[-0.08em] text-paper/90">
                    {project.name}
                  </span>
                )}
              </div>
              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <p className="meta">{String(index + 1).padStart(2, "0")} / {project.category}</p>
                  <h3 className="mt-2 font-display text-xl font-medium uppercase tracking-[-0.035em] text-paper">
                    {project.name}
                  </h3>
                </div>
                <ExternalLink aria-hidden="true" className="mt-1 size-4 shrink-0 text-muted transition-transform duration-300 group-hover:scale-110" />
              </div>
            </a>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-5 border-t border-line/60 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-lg text-sm leading-relaxed text-muted">
            Seven projects, with direct links to the supplied websites and source repositories where available.
          </p>
          <Link
            href="/products"
            className="group inline-flex min-h-11 items-center justify-between gap-8 border border-paper px-5 font-mono text-[10px] uppercase tracking-[0.18em] text-paper transition-colors duration-300 hover:bg-paper hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-paper"
          >
            Explore all products
            <ArrowRight aria-hidden="true" className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
