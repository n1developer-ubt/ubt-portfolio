import type { ReactNode } from "react";

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="t-tag rounded-pill border-line text-ink inline-flex items-center border-[1.5px] px-[11px] py-[5px]">
      {children}
    </span>
  );
}
