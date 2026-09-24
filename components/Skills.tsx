"use client";

import { useState } from "react";
import { site } from "@/content/site";
import { ClayShape } from "./ui/ClayShape";

export function Skills() {
  const [filter, setFilter] = useState("all");
  const visible = site.skills.items.filter((s) => filter === "all" || s.cat === filter);

  return (
    <section id="skills" className="wrap sec">
      <div className="bg-surface-2 relative overflow-hidden rounded-xl p-12 max-[640px]:p-6">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <ClayShape kind="ball" color="primary" size={220} x={950} y={-50} />
          <ClayShape kind="ball" color="accent" size={120} x={840} y={300} />
          <ClayShape kind="ring" size={150} x={920} y={190} ringWidth={26} />
        </div>

        <div className="relative">
          <div className="t-eyebrow">Skills &amp; tools</div>
          <h2 className="t-h2 text-ink mt-[10px]">My toolbox</h2>

          <div
            role="group"
            aria-label="Filter skills"
            className="mt-6 mb-[26px] flex flex-wrap gap-2"
          >
            {site.skills.filters.map((f) => {
              const on = filter === f.id;
              return (
                <button
                  key={f.id}
                  type="button"
                  aria-pressed={on}
                  onClick={() => setFilter(f.id)}
                  className={`rounded-pill inline-flex min-h-9 cursor-pointer items-center border-0 px-4 font-sans text-[14px] leading-[18px] font-bold transition-colors ${
                    on ? "bg-ink text-ink-inverse" : "bg-surface text-ink shadow-card"
                  }`}
                >
                  {f.label}
                </button>
              );
            })}
          </div>

          <ul className="flex max-w-[760px] list-none flex-wrap gap-[14px] p-0">
            {visible.map((s) => {
              const pct = "pct" in s ? s.pct : undefined;
              const big = "big" in s && s.big;
              return (
                <li
                  key={s.name}
                  className={`rounded-pill bg-surface text-ink shadow-card inline-flex items-center gap-3 font-sans leading-[22px] font-bold ${
                    big ? "px-[22px] py-[14px] text-[18px]" : "px-[18px] py-[11px] text-[15px]"
                  }`}
                >
                  {s.name}
                  {pct ? (
                    <em className="rounded-pill bg-accent text-on-accent px-[9px] py-[3px] font-sans text-[13px] leading-4 font-bold not-italic">
                      {pct}%
                    </em>
                  ) : null}
                </li>
              );
            })}
          </ul>

          <p className="text-ink-muted mt-[26px] font-sans text-[16px] leading-[26px]">
            {site.skills.exploring}
          </p>
        </div>
      </div>
    </section>
  );
}
