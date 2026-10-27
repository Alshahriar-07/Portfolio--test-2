import { SectionIntro } from "@/components/ui/SectionIntro";
import { independentWork, resumeFacts } from "@/lib/content/site";

const contract = resumeFacts.experience[0];

const entries = [
  {
    title: contract.title,
    period: contract.period,
    type: contract.type,
    org: contract.company,
    affiliation: `Client — ${contract.client}`,
    context: contract.context,
    points: contract.points,
  },
  {
    title: independentWork.title,
    period: independentWork.period,
    type: independentWork.type,
    org: independentWork.org,
    affiliation: "Software practice",
    context: independentWork.context,
    points: independentWork.points,
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="relative border-t border-line/60"
    >
      <div className="shell py-20 md:py-28">
        <SectionIntro
          index="05 / Experience"
          titleId="experience-title"
          title="Work and study"
          note="A contract deployment role, an independent software practice, and the formal study running alongside both."
        />

        <div className="mt-14 border-t border-line/60">
          {entries.map((entry) => (
            <article
              key={entry.title}
              className="scroll-reveal grid gap-6 border-b border-line/60 py-8 md:grid-cols-12 md:gap-8 md:py-10"
            >
              <div className="md:col-span-2">
                <p className="meta text-paper">{entry.period}</p>
                <p className="meta mt-1 text-dim">{entry.type}</p>
              </div>

              <div className="md:col-span-7">
                <h3 className="font-display text-xl font-medium uppercase leading-tight tracking-[-0.02em] text-paper md:text-2xl">
                  {entry.title}
                </h3>
                <p className="mt-1.5 text-sm text-paper">
                  {entry.org}
                  <span className="text-dim"> — {entry.affiliation}</span>
                </p>

                <ul className="mt-5 space-y-2.5">
                  {entry.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted">
                      <span className="mt-[0.55em] size-1 shrink-0 bg-dim" aria-hidden="true" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="md:col-span-3">
                <p className="meta">Scope</p>
                <p className="mt-2 text-sm text-paper">{entry.context}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="scroll-reveal mt-14 grid gap-6 md:grid-cols-12 md:gap-8">
          <p className="meta md:col-span-2">Education</p>

          <div className="grid gap-8 md:col-span-10 sm:grid-cols-2">
            {resumeFacts.education.map((education) => (
              <div key={education.credential} className="border-t border-line/60 pt-5">
                <p className="meta text-dim">{education.period}</p>
                <h3 className="mt-3 text-sm leading-snug text-paper">{education.credential}</h3>
                <p className="mt-1.5 text-sm text-muted">{education.institution}</p>
                <p className="meta mt-2">{education.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
