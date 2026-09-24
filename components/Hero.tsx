import Image from "next/image";
import { site } from "@/content/site";
import { ButtonLink } from "./ui/Button";
import { ClayShape } from "./ui/ClayShape";
import { StatusBadge } from "./ui/StatusBadge";

function StatChip({
  icon,
  tone,
  value,
  label,
  style,
  delay,
}: {
  icon: string;
  tone: "accent" | "primary";
  value: string;
  label: string;
  style: React.CSSProperties;
  delay: number;
}) {
  const skin = tone === "accent" ? "bg-accent text-on-accent" : "bg-primary text-on-primary";
  return (
    <div
      className="bg-surface shadow-pop absolute flex items-center gap-3 rounded-md p-[14px_18px]"
      style={{
        ...style,
        animation: "bob 6s ease-in-out infinite",
        animationDelay: `${delay}s`,
      }}
    >
      <div
        aria-hidden="true"
        className={`${skin} shadow-clay grid size-10 shrink-0 place-items-center rounded-md font-serif text-[16px] font-bold`}
      >
        {icon}
      </div>
      <div>
        <div className="text-ink font-serif text-[20px] leading-6 font-bold">{value}</div>
        <div className="text-ink-muted font-sans text-[13px] leading-4">{label}</div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <header
      id="home"
      className="wrap flex items-center gap-6 pt-10 pb-4 max-[980px]:flex-col max-[980px]:items-stretch max-[980px]:gap-10"
    >
      <div className="min-w-0 flex-[1.1]">
        <StatusBadge label={site.hero.status} dot />

        <h1 className="t-hero text-ink my-[26px_18px]">
          Hi, I&apos;m Usama.
          <br />I build <em className="text-accent italic">software</em> people love.
        </h1>

        <p className="t-lede text-ink-muted max-w-[540px] max-[640px]:hidden">
          {site.hero.lede}
        </p>
        <p className="t-lede text-ink-muted hidden max-w-[540px] max-[640px]:block">
          {site.hero.ledeMobile}
        </p>

        <div className="mt-[34px] flex gap-4 max-[640px]:flex-col">
          <ButtonLink href="#work" block className="max-[640px]:w-full sm:w-auto">
            See my work ↓
          </ButtonLink>
          <ButtonLink href="#contact" variant="ghost" className="max-[640px]:w-full">
            Get in touch
          </ButtonLink>
        </div>
      </div>

      <div className="min-w-0 flex-1">
        <div className="hero-stage">
          <div className="hero-canvas">
            <ClayShape kind="ball" color="sun" size={120} x={400} y={40} float delay={-2} />
            <ClayShape kind="ball" color="accent" size={70} x={10} y={80} float delay={0} />
            <ClayShape kind="ball" color="primary" size={400} x={50} y={100} />

            <Image
              src="/images/usama.webp"
              alt="Usama Bin Tariq, smiling, in a black button-down shirt"
              width={900}
              height={924}
              priority
              sizes="(max-width: 640px) 80vw, 440px"
              className="absolute bottom-0 left-[30px] block h-auto w-[440px] max-w-none"
              style={{
                filter: "drop-shadow(0 0 16px var(--photo-glow))",
                WebkitMaskImage: "linear-gradient(to bottom, #000 80%, transparent 100%)",
                maskImage: "linear-gradient(to bottom, #000 80%, transparent 100%)",
              }}
            />

            <ClayShape
              kind="pill"
              color="accent"
              size={150}
              height={54}
              x={400}
              y={470}
              rotate={-24}
              float
              delay={-2}
            />

            <StatChip
              icon="★"
              tone="accent"
              value="300+"
              label="projects shipped"
              style={{ left: 390, top: 250 }}
              delay={0}
            />
            <StatChip
              icon="7"
              tone="primary"
              value="7 years"
              label="of experience"
              style={{ left: -30, top: 380 }}
              delay={-4}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
