"use client";

import Image from "next/image";
import type { Project } from "@/content/site";
import { markPlaceholders } from "@/lib/placeholder";
import { Tag } from "./ui/Tag";

const spans: Record<number, string> = {
  1: "min-[981px]:col-span-1",
  2: "min-[981px]:col-span-2",
  3: "min-[981px]:col-span-3",
  4: "min-[981px]:col-span-4",
  6: "min-[981px]:col-span-6",
};

export function ProjectCard({
  project,
  coverHeight,
  featured,
  span,
  onOpen,
}: {
  project: Project;
  coverHeight: number;
  featured?: boolean;
  span: number;
  onOpen: (trigger: HTMLElement) => void;
}) {
  const cover = project.screens[0];

  return (
    <article
      className={`bg-surface shadow-card hover:shadow-pop flex flex-col overflow-hidden rounded-lg transition-shadow duration-200 ${spans[span] ?? spans[2]}`}
    >
      <button
        type="button"
        onClick={(e) => onOpen(e.currentTarget)}
        aria-label={`Open ${project.title} gallery`}
        className="bg-surface-2 relative block cursor-zoom-in border-0 p-0"
      >
        <Image
          src={cover.src}
          alt={`${project.title} — concept preview`}
          width={1200}
          height={760}
          sizes={`(max-width: 980px) 100vw, ${Math.round((1152 - 24) * (span / 6))}px`}
          style={{ height: coverHeight }}
          className="block w-full object-cover object-top"
        />
        <span className="absolute top-4 left-4">
          <span className="rounded-pill bg-surface text-ink inline-flex items-center gap-[6px] px-3 py-[5px] font-sans text-[13px] leading-4 font-bold">
            {project.statusDot ? (
              <span aria-hidden="true" className="bg-success size-2 rounded-full" />
            ) : null}
            {project.status}
          </span>
        </span>
        <span
          className="rounded-pill absolute right-4 bottom-4 inline-flex items-center gap-[6px] px-3 py-[6px] font-sans text-[13px] leading-4 font-bold"
          style={{ background: "rgba(35,22,15,0.72)", color: "#fff4ea" }}
        >
          {project.screens.length} screens
        </span>
      </button>

      <div className="flex grow flex-col gap-[10px] p-[24px_28px_28px] max-[640px]:p-6">
        <div className="text-accent font-sans text-[12px] leading-4 font-bold tracking-[0.12em] uppercase">
          {project.kind}
        </div>
        <h3
          className={`text-ink m-0 font-serif font-semibold ${
            featured ? "text-[30px] leading-9" : "text-[24px] leading-[30px]"
          }`}
        >
          {project.title}
        </h3>
        <p className="text-ink-muted m-0 font-sans text-[16px] leading-[26px]">
          {project.summary}
        </p>
        <div className="flex flex-wrap gap-[6px]">
          {project.tags.slice(0, 4).map((t, i) => (
            <Tag key={`${t}-${i}`}>{markPlaceholders(t)}</Tag>
          ))}
        </div>
        <button
          type="button"
          onClick={(e) => onOpen(e.currentTarget)}
          className="text-accent mt-auto cursor-pointer self-start border-0 bg-none pt-2 font-sans text-[15px] leading-5 font-bold"
        >
          View project →
        </button>
      </div>
    </article>
  );
}
