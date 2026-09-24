import type { ReactNode } from "react";

export function SectionHead({
  eyebrow,
  title,
  side,
  action,
}: {
  eyebrow: string;
  title: ReactNode;
  side?: string;
  action?: ReactNode;
}) {
  return (
    <div className="mb-11 flex items-end justify-between gap-10 max-[980px]:flex-col max-[980px]:items-start max-[980px]:gap-5">
      <div>
        <div className="t-eyebrow">{eyebrow}</div>
        <h2 className="t-h2 mt-[10px] text-ink">{title}</h2>
      </div>
      {side ? <p className="t-body m-0 max-w-[420px] text-ink-muted">{side}</p> : null}
      {action}
    </div>
  );
}
