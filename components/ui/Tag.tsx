import type { ReactNode } from "react";

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="t-tag inline-flex items-center rounded-pill border border-line px-[10px] py-[6px] text-ink-muted">
      {children}
    </span>
  );
}
