export function StatusBadge({
  label,
  dot,
  tone = "surface",
}: {
  label: string;
  dot?: boolean;
  tone?: "surface" | "ink";
}) {
  const skin = tone === "ink" ? "bg-ink text-ink-inverse" : "bg-surface text-ink shadow-card";
  return (
    <span
      className={`${skin} rounded-pill inline-flex items-center gap-[6px] px-3 py-[5px] font-sans text-[13px] leading-4 font-bold`}
    >
      {dot ? <span aria-hidden="true" className="bg-success size-2 rounded-full" /> : null}
      {label}
    </span>
  );
}
