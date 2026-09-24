"use client";

import Image from "next/image";
import type { Project } from "@/content/site";
import { markPlaceholders } from "@/lib/placeholder";
import { Tag } from "./ui/Tag";

export function ProjectCard({
  project,
  coverHeight,
  featured,
  onOpen,
}: {
  project: Project;
  coverHeight: number;
  featured?: boolean;
  onOpen: (trigger: HTMLElement) => void;
}) {
  const cover = project.screens[0];

  return (
    <article
      className={`flex flex-col overflow-hidden rounded-lg bg-surface shadow-card transition-shadow duration-200 hover:shadow-pop ${
        featured ? "min-[981px]:col-span-2" : ""
      }`}
    >
      <button
        type="button"
        onClick={(e) => onOpen(e.currentTarget)}
        aria-label={`Open ${project.title} gallery`}
        className="relative block cursor-zoom-in border-0 bg-surface-2 p-0"
      >
        <Image
          src={cover.src}
          alt={`${project.title} — concept preview`}
          width={1200}
          height={760}
          sizes={featured ? "(max-width: 980px) 100vw, 744px" : "(max-width: 980px) 100vw, 368px"}
          style={{ height: coverHeight }}
          className="block w-full object-cover object-top"
        />
        <span className="absolute top-4 left-4">
          <span className="inline-flex items-center gap-[6px] rounded-pill bg-surface px-3 py-[5px] font-sans text-[13px] leading-4 font-bold text-ink">
            {project.statusDot ? (
              <span aria-hidden="true" className="size-2 rounded-full bg-success" />
            ) : null}
            {project.status}
          </span>
        </span>
        <span
          className="absolute right-4 bottom-4 inline-flex items-center gap-[6px] rounded-pill px-3 py-[6px] font-sans text-[13px] leading-4 font-bold"
          style={{ background: "rgba(35,22,15,0.72)", color: "#fff4ea" }}
        >
          {project.screens.length} screens
        </span>
      </button>

      <div className="flex grow flex-col gap-[10px] p-[24px_28px_28px] max-[640px]:p-6">
        <div className="font-sans text-[12px] leading-4 font-bold tracking-[0.12em] uppercase text-accent">
          {project.kind}
        </div>
        <h3
          className={`m-0 font-serif font-semibold text-ink ${
            featured ? "text-[30px] leading-9" : "text-[24px] leading-[30px]"
          }`}
        >
          {project.title}
        </h3>
        <p className="m-0 font-sans text-[16px] leading-[26px] text-ink-muted">{project.summary}</p>
        <div className="flex flex-wrap gap-[6px]">
          {project.tags.slice(0, 4).map((t, i) => (
            <Tag key={`${t}-${i}`}>{markPlaceholders(t)}</Tag>
          ))}
        </div>
        <button
          type="button"
          onClick={(e) => onOpen(e.currentTarget)}
          className="mt-auto cursor-pointer self-start border-0 bg-none pt-2 font-sans text-[15px] leading-5 font-bold text-accent"
        >
          View project →
        </button>
      </div>
    </article>
  );
}
