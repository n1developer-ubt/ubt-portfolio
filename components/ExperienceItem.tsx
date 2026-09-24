import { markPlaceholders } from "@/lib/placeholder";
import type { Experience } from "@/content/site";
import { Tag } from "./ui/Tag";

const tileTones = [
  "bg-primary text-on-primary",
  "bg-accent text-on-accent",
  "bg-accent-2 text-[#23160f]",
  "bg-surface-2 text-ink",
];

export function ExperienceItem({ role, index }: { role: Experience; index: number }) {
  const tone = tileTones[Math.min(index, tileTones.length - 1)];
  const highlights = "highlights" in role ? role.highlights : undefined;
  const tags = "tags" in role ? role.tags : undefined;
  const summary = "summary" in role ? role.summary : undefined;

  return (
    <article
      className={`flex items-start gap-5 rounded-lg bg-surface p-[26px_28px] shadow-card max-[640px]:flex-wrap max-[640px]:p-6 ${
        "current" in role && role.current ? "outline-2 -outline-offset-2 outline-primary" : ""
      }`}
    >
      <div
        aria-hidden="true"
        className={`${tone} grid size-16 shrink-0 place-items-center rounded-md font-serif text-[22px] font-bold shadow-clay`}
      >
        {role.initials}
      </div>

      <div className="min-w-0 grow">
        <h3 className="t-h3 m-0 text-ink">{markPlaceholders(role.title)}</h3>
        <div className="t-label mt-[2px] text-accent">{role.org}</div>

        {summary ? (
          <p className="mt-2 mb-3 font-sans text-[16px] leading-[26px] text-ink-muted">
            {markPlaceholders(summary)}
          </p>
        ) : null}

        {highlights ? (
          <ul className="mt-2 mb-3 flex list-none flex-col gap-1 p-0">
            {highlights.map((h) => (
              <li
                key={h}
                className="flex items-baseline gap-[10px] font-sans text-[15px] leading-6 text-ink"
              >
                <span aria-hidden="true" className="size-2 shrink-0 rounded-full bg-primary" />
                {h}
              </li>
            ))}
          </ul>
        ) : null}

        {tags ? (
          <div className="flex flex-wrap gap-[6px]">
            {tags.map((t, i) => (
              <Tag key={`${t}-${i}`}>{markPlaceholders(t)}</Tag>
            ))}
          </div>
        ) : null}
      </div>

      <span className="self-start rounded-pill bg-surface-2 px-3 py-[7px] font-sans text-[14px] leading-[18px] font-bold whitespace-nowrap text-ink">
        {markPlaceholders(role.dates)}
      </span>
    </article>
  );
}
