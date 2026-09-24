import Image from "next/image";
import { site } from "@/content/site";
import { ButtonLink } from "./ui/Button";
import { StatusBadge } from "./ui/StatusBadge";

function Shape({
  className,
  color,
  rotate,
  delay,
}: {
  className: string;
  color: string;
  rotate?: number;
  delay?: number;
}) {
  return (
    <div
      aria-hidden="true"
      className={`${className} pointer-events-none rounded-full shadow-clay`}
      style={{
        background: color,
        rotate: rotate ? `${rotate}deg` : undefined,
        animation: delay === undefined ? undefined : "bob 6s ease-in-out infinite",
        animationDelay: delay === undefined ? undefined : `${delay}s`,
      }}
    />
  );
}

function StatChip({
  className,
  icon,
  tone,
  value,
  label,
  delay,
}: {
  className: string;
  icon: string;
  tone: "accent" | "primary";
  value: string;
  label: string;
  delay: number;
}) {
  const skin = tone === "accent" ? "bg-accent text-on-accent" : "bg-primary text-on-primary";
  return (
    <div
      className={`${className} flex items-center gap-3 rounded-md bg-surface px-[18px] py-[14px] shadow-pop max-[980px]:gap-[10px] max-[980px]:px-[14px] max-[980px]:py-[10px]`}
      style={{ animation: "bob 6s ease-in-out infinite", animationDelay: `${delay}s` }}
    >
      <div
        aria-hidden="true"
        className={`${skin} grid size-10 shrink-0 place-items-center rounded-md font-serif text-[16px] font-bold shadow-clay max-[980px]:size-[34px] max-[980px]:text-[14px]`}
      >
        {icon}
      </div>
      <div>
        <div className="font-serif text-[20px] leading-6 font-bold text-ink max-[980px]:leading-[22px]">
          {value}
        </div>
        <div className="font-sans text-[13px] leading-4 text-ink-muted">{label}</div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <header
      id="home"
      className="wrap flex items-center gap-6 overflow-hidden pt-10 pb-4 max-[980px]:flex-col max-[980px]:items-stretch max-[980px]:gap-0 max-[980px]:pt-3"
    >
      <div className="min-w-0 flex-[1.1]">
        <StatusBadge label={site.hero.status} dot />

        <h1 className="t-hero my-[26px_18px] text-ink max-[980px]:mt-5 max-[980px]:mb-[14px]">
          Hi, I&apos;m Usama.
          <br />I build <em className="text-accent italic">software</em> people love.
        </h1>

        <p className="t-lede max-w-[540px] text-ink-muted max-[640px]:hidden">{site.hero.lede}</p>
        <p className="t-lede hidden max-w-[540px] text-ink-muted max-[640px]:block">
          {site.hero.ledeMobile}
        </p>

        <div className="mt-[34px] flex gap-4 max-[640px]:mt-7 max-[640px]:flex-col max-[640px]:gap-[14px]">
          <ButtonLink href="#work" className="max-[640px]:w-full">
            See my work ↓
          </ButtonLink>
          <ButtonLink href="#contact" variant="ghost" className="max-[640px]:w-full">
            Get in touch
          </ButtonLink>
        </div>
      </div>

      <div className="min-w-0 flex-1">
        <div className="hero-stage">
          <Shape className="hs-sun" color="var(--accent-2)" delay={-2} />
          <Shape className="hs-blue" color="var(--accent)" delay={0} />
          <Shape className="hs-disc" color="var(--primary)" />

          <Image
            src="/images/usama.webp"
            alt="Usama Bin Tariq, smiling, in a black button-down shirt"
            width={900}
            height={924}
            priority
            sizes="(max-width: 980px) 94vw, 440px"
            className="hs-photo block max-w-none"
            style={{
              filter: "drop-shadow(0 0 16px var(--photo-glow))",
              WebkitMaskImage: "linear-gradient(to bottom, #000 80%, transparent 100%)",
              maskImage: "linear-gradient(to bottom, #000 80%, transparent 100%)",
            }}
          />

          <Shape className="hs-pill !rounded-pill" color="var(--accent)" rotate={-24} delay={-2} />

          <StatChip
            className="hs-chip-a"
            icon="★"
            tone="accent"
            value="300+"
            label="projects shipped"
            delay={0}
          />
          <StatChip
            className="hs-chip-b"
            icon="7"
            tone="primary"
            value="7 years"
            label="of experience"
            delay={-4}
          />
        </div>
      </div>
    </header>
  );
}
