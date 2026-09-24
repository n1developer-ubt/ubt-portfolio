import type { ReactNode } from "react";

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="t-tag inline-flex items-center rounded-pill border-[1.5px] border-line px-[11px] py-[5px] text-ink">
      {children}
    </span>
  );
}
