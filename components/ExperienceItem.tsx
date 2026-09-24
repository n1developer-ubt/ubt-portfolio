import Image from "next/image";
import { markPlaceholders } from "@/lib/placeholder";
import type { Experience } from "@/content/site";
import { Tag } from "./ui/Tag";

export function ExperienceItem({ role }: { role: Experience }) {
  const highlights = "highlights" in role ? role.highlights : undefined;
  const tags = "tags" in role ? role.tags : undefined;
  const summary = "summary" in role ? role.summary : undefined;
  const logo = "logo" in role ? role.logo : undefined;

  return (
    <article
      className={`bg-surface shadow-card flex items-start gap-5 rounded-lg p-[26px_28px] max-[640px]:flex-wrap max-[640px]:p-6 ${
        "current" in role && role.current ? "outline-primary outline-2 -outline-offset-2" : ""
      }`}
    >
      {logo ? (
        <div
          className={`shadow-clay grid size-16 shrink-0 place-items-center overflow-hidden rounded-md bg-white ${
            "fill" in logo && logo.fill ? "" : "p-[9px]"
          }`}
        >
          <Image
            src={logo.src}
            alt={logo.alt}
            width={64}
            height={64}
            className="size-full object-contain"
          />
        </div>
      ) : (
        <div
          aria-hidden="true"
          className="shadow-clay grid size-16 shrink-0 place-items-center rounded-md bg-white font-serif text-[22px] font-bold text-[#23160f]"
        >
          {role.initials}
        </div>
      )}

      <div className="min-w-0 grow">
        <h3 className="t-h3 text-ink m-0">{markPlaceholders(role.title)}</h3>
        <div className="t-label text-accent mt-[2px]">{role.org}</div>

        {summary ? (
          <p className="text-ink-muted mt-2 mb-3 font-sans text-[16px] leading-[26px]">
            {markPlaceholders(summary)}
          </p>
        ) : null}

        {highlights ? (
          <ul className="mt-2 mb-3 flex list-none flex-col gap-1 p-0">
            {highlights.map((h) => (
              <li
                key={h}
                className="text-ink flex items-baseline gap-[10px] font-sans text-[15px] leading-6"
              >
                <span aria-hidden="true" className="bg-primary size-2 shrink-0 rounded-full" />
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

      <span className="rounded-pill bg-surface-2 text-ink self-start px-3 py-[7px] font-sans text-[14px] leading-[18px] font-bold whitespace-nowrap">
        {markPlaceholders(role.dates)}
      </span>
    </article>
  );
}
