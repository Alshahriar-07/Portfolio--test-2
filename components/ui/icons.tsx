import type { SVGProps } from "react";

export function ArrowUpRight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 12 12" width="12" height="12" fill="none" aria-hidden="true" {...props}>
      <path
        d="M2.75 9.25 9.25 2.75M9.25 2.75H4.5M9.25 2.75v4.75"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="square"
      />
    </svg>
  );
}

export function ArrowDownRight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 12 12" width="12" height="12" fill="none" aria-hidden="true" {...props}>
      <path
        d="M2.75 2.75 9.25 9.25M9.25 9.25V4.5M9.25 9.25H4.5"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="square"
      />
    </svg>
  );
}

export function ArrowDown(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 12 12" width="12" height="12" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6 1.5v9M6 10.5 2.5 7M6 10.5 9.5 7"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="square"
      />
    </svg>
  );
}

export function ArrowUp(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 12 12" width="12" height="12" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6 10.5v-9M6 1.5 2.5 5M6 1.5 9.5 5"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="square"
      />
    </svg>
  );
}
