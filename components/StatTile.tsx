type Tone = "primary" | "accent" | "sun" | "surface";

const tones: Record<Tone, string> = {
  primary: "bg-primary text-on-primary",
  accent: "bg-accent text-on-accent",
  sun: "bg-accent-2 text-[#23160f]",
  surface: "bg-surface text-ink",
};

export function StatTile({ value, label, tone }: { value: string; label: string; tone: Tone }) {
  return (
    <div
      className={`${tones[tone]} relative box-border min-h-[150px] overflow-hidden rounded-lg p-[26px] shadow-card`}
    >
      <div className="t-stat">{value}</div>
      <div className="font-sans text-[15px] leading-5 font-medium">{label}</div>
      <div
        aria-hidden="true"
        className="absolute -right-6 -bottom-6 size-[90px] rounded-full"
        style={{
          background: "rgba(255,255,255,0.3)",
          boxShadow: "inset -10px -12px 20px rgba(35,22,15,0.15)",
        }}
      />
    </div>
  );
}
