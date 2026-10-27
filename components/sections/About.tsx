import Image from "next/image";
import { ActionLink } from "@/components/ui/ActionLink";
import { ArrowDown, ArrowUpRight } from "@/components/ui/icons";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { profile } from "@/lib/content/site";

const facts = [
  { label: "Based in", value: profile.location.short },
  { label: "Studying", value: "Diploma in Computer Science & Technology — 3rd semester" },
  { label: "Institution", value: "Dhaka Polytechnic Institute, Tejgaon" },
  { label: "Status", value: profile.availability },
];

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="relative border-t border-line/60">
      <div className="shell py-20 md:py-28">
        <SectionIntro
          index="03 / About"
          titleId="about-title"
          title={
            <>
              The person
              <br />
              <span className="outline-type">behind the tools</span>
            </>
          }
        />

        <div className="mt-14 grid gap-10 md:grid-cols-12 md:gap-8">
          <div className="scroll-reveal md:col-span-5">
            <figure>
              <div className="border border-line bg-white p-2.5 sm:p-3">
                <Image
                  src="/assets/me.png"
                  alt="Black-and-white portrait of Al Shahriar Sowan wearing headphones"
                  width={1024}
                  height={1024}
                  sizes="(min-width: 768px) 38vw, 92vw"
                  quality={85}
                  className="h-auto w-full"
                />
                <figcaption className="flex items-center justify-between gap-4 px-1 pt-2.5 font-mono text-[9px] uppercase tracking-[0.16em] text-black/65">
                  <span>Fig. 02 — Portrait</span>
                  <span>Gazipur, BD</span>
                </figcaption>
              </div>
            </figure>
          </div>

          <div className="md:col-span-6 md:col-start-7 md:pt-4 lg:pt-8">
            <p className="meta text-paper">{profile.name} — {profile.role}</p>

            <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-muted">
              {profile.bio.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-line/60 pt-6">
              {facts.map((fact) => (
                <div key={fact.label}>
                  <dt className="meta">{fact.label}</dt>
                  <dd className="mt-2 text-sm leading-snug text-paper">{fact.value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <ActionLink href="#contact" variant="solid" icon={<ArrowUpRight />}>
                Start a conversation
              </ActionLink>
              <ActionLink
                href={profile.resume.publicPath}
                download={profile.resume.downloadName}
                icon={<ArrowDown />}
              >
                Download resume
              </ActionLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
