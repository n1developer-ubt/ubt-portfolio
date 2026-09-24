type Kind = "ball" | "ring" | "pill";
type Color = "primary" | "accent" | "sun" | "soft" | "surface";

const fills: Record<Color, string> = {
  primary: "var(--primary)",
  accent: "var(--accent)",
  sun: "var(--accent-2)",
  soft: "var(--surface-2)",
  surface: "var(--surface)",
};

type Props = {
  kind?: Kind;
  color?: Color;
  size: number;
  height?: number;
  x?: number;
  y?: number;
  right?: number;
  bottom?: number;
  rotate?: number;
  float?: boolean;
  delay?: number;
  ringWidth?: number;
  opacity?: number;
  className?: string;
};

export function ClayShape({
  kind = "ball",
  color = "primary",
  size,
  height,
  x,
  y,
  right,
  bottom,
  rotate,
  float,
  delay = 0,
  ringWidth = 22,
  opacity,
  className,
}: Props) {
  const isRing = kind === "ring";
  const isPill = kind === "pill";

  return (
    <div
      aria-hidden="true"
      className={className}
      style={{
        position: "absolute",
        left: x,
        top: y,
        right,
        bottom,
        width: size,
        height: height ?? size,
        borderRadius: isPill ? 999 : "50%",
        background: isRing ? "transparent" : fills[color],
        border: isRing ? `${ringWidth}px solid var(--accent-2)` : undefined,
        boxShadow: "var(--shadow-clay)",
        rotate: rotate ? `${rotate}deg` : undefined,
        opacity,
        pointerEvents: "none",
        animation: float ? "bob 6s ease-in-out infinite" : undefined,
        animationDelay: float ? `${delay}s` : undefined,
      }}
    />
  );
}
