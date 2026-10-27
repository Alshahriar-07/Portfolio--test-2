import type { ReactNode } from "react";

type ActionLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline";
  size?: "default" | "compact";
  icon?: ReactNode;
  download?: string | boolean;
  external?: boolean;
  className?: string;
};

const base =
  "group inline-flex w-full items-center justify-between gap-6 border font-mono uppercase tracking-[0.18em] transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-paper sm:w-auto";

const variants = {
  solid: "border-paper bg-paper text-ink hover:bg-transparent hover:text-paper",
  outline: "border-line text-paper hover:border-paper/60 hover:bg-paper/[0.04]",
} as const;

const sizes = {
  default: "h-12 px-5 text-[10px]",
  compact: "h-10 px-4 text-[9px]",
} as const;

export function ActionLink({
  href,
  children,
  variant = "outline",
  size = "default",
  icon,
  download,
  external,
  className = "",
}: ActionLinkProps) {
  const externalProps = external ? { target: "_blank", rel: "noreferrer noopener" } : {};

  return (
    <a
      href={href}
      download={download}
      {...externalProps}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      <span className="whitespace-nowrap">{children}</span>
      {icon ? (
        <span className="shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5">
          {icon}
        </span>
      ) : null}
    </a>
  );
}
