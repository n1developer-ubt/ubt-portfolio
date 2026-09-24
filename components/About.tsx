import { site } from "@/content/site";
import { Chip } from "./ui/Chip";
import { SectionHead } from "./SectionHead";
import { StatTile } from "./StatTile";

const tones = ["primary", "accent", "sun", "surface"] as const;

function withBold(text: string) {
  return text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
    i % 2 === 1 ? (
      <b key={i} className="font-bold text-ink">
        {part}
      </b>
    ) : (
      part
    ),
  );
}

export function About() {
  return (
    <section id="about" className="wrap sec">
      <SectionHead
        eyebrow="About me"
        title={
          <>
            Clean code, happy users,
            <br />
            fast apps.
          </>
        }
        side={site.about.side}
      />

      <div className="grid grid-cols-[1.1fr_1fr] items-start gap-10 max-[980px]:grid-cols-1">
        <div className="rounded-lg bg-surface p-8 shadow-card max-[640px]:p-6">
          {site.about.paragraphs.map((p, i) => (
            <p
              key={i}
              className={`t-body m-0 text-ink-muted ${i < site.about.paragraphs.length - 1 ? "mb-4" : ""}`}
            >
              {withBold(p)}
            </p>
          ))}
          <div className="mt-[22px] flex flex-wrap gap-[10px]">
            {site.about.chips.map((c) => (
              <Chip key={c}>{c}</Chip>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-[18px] max-[480px]:grid-cols-1">
          {site.about.stats.map((s, i) => (
            <StatTile key={s.label} value={s.value} label={s.label} tone={tones[i]} />
          ))}
        </div>
      </div>
    </section>
  );
}
