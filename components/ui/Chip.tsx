import type { ReactNode } from "react";

export function Chip({
  children,
  tone = "soft",
}: {
  children: ReactNode;
  tone?: "soft" | "surface";
}) {
  const bg = tone === "soft" ? "bg-surface-2" : "bg-surface shadow-card";
  return (
    <span
      className={`${bg} rounded-pill text-ink inline-flex items-center gap-2 px-[14px] py-[9px] font-sans text-[14px] leading-[18px] font-medium`}
    >
      {children}
    </span>
  );
}
