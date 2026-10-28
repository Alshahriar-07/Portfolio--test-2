import type { CSSProperties, ReactNode } from "react";

type SectionIntroProps = {
  index: string;
  title: ReactNode;
  note?: ReactNode;
  titleId?: string;
};

export function SectionIntro({ index, title, note, titleId }: SectionIntroProps) {
  return (
    <div className="grid gap-6 md:grid-cols-12 md:gap-8">
      <div className="md:col-span-3">
        <p className="meta" data-reveal="fade">
          {index}
        </p>
      </div>

      <div className="md:col-span-9">
        <h2
          id={titleId}
          data-reveal="mask"
          className="max-w-4xl font-display text-[clamp(2.1rem,5.2vw,4.25rem)] font-medium uppercase leading-[0.92] tracking-[-0.045em] text-paper"
        >
          <span className="reveal-inner">{title}</span>
        </h2>
        {note ? (
          <p
            className="mt-5 max-w-xl text-sm leading-relaxed text-muted"
            data-reveal
            style={{ "--rd": "120ms" } as CSSProperties}
          >
            {note}
          </p>
        ) : null}
      </div>
    </div>
  );
}
