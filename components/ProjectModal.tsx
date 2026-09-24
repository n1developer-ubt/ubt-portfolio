"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Project } from "@/content/site";
import { isPlaceholder, markPlaceholders } from "@/lib/placeholder";
import { Tag } from "./ui/Tag";

const arrow = "grid size-11 place-items-center rounded-full border-0 bg-surface text-ink shadow-pop cursor-pointer absolute top-1/2 -translate-y-1/2";

function Chevron({ dir }: { dir: "left" | "right" }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={dir === "left" ? "M15 18l-6-6 6-6" : "M9 18l6-6-6-6"} />
    </svg>
  );
}

export function ProjectModal({
  project,
  onClose,
  onNextProject,
}: {
  project: Project;
  onClose: () => void;
  onNextProject: () => void;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  const [index, setIndex] = useState(0);
  const touchX = useRef<number | null>(null);
  const total = project.screens.length;

  useEffect(() => setIndex(0), [project.slug]);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (!dialog.open) dialog.showModal();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, []);

  const go = useCallback(
    (delta: number) => setIndex((i) => (i + delta + total) % total),
    [total],
  );

  useEffect(() => {
    const next = project.screens[(index + 1) % total];
    const img = new window.Image();
    img.src = next.src;
  }, [index, project.screens, total]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        go(-1);
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        go(1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  const screen = project.screens[index];
  const hasLink = "link" in project && project.link && !isPlaceholder(project.link.href);

  return (
    <dialog
      ref={ref}
      aria-labelledby="pm-title"
      onClose={onClose}
      onCancel={onClose}
      onClick={(e) => {
        if (e.target === ref.current) onClose();
      }}
      className="m-auto w-[1120px] max-w-[calc(100vw-32px)] rounded-[32px] bg-surface p-7 text-ink shadow-pop backdrop:bg-[rgba(26,18,13,0.62)] backdrop:backdrop-blur-[6px] max-[980px]:w-full max-[980px]:max-w-none max-[980px]:rounded-[24px] max-[640px]:p-4"
    >
      <div className="grid grid-cols-[1.45fr_1fr] gap-8 max-[980px]:grid-cols-1 max-[980px]:gap-5">
        <div className="flex min-w-0 flex-col gap-3">
          <div
            className="relative overflow-hidden rounded-md bg-surface-2"
            onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
            onTouchEnd={(e) => {
              if (touchX.current === null) return;
              const dx = e.changedTouches[0].clientX - touchX.current;
              if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
              touchX.current = null;
            }}
          >
            <Image
              key={screen.src}
              src={screen.src}
              alt={`${project.title}, screen ${index + 1} of ${total}: ${screen.caption}`}
              width={1200}
              height={760}
              sizes="(max-width: 980px) 100vw, 660px"
              className="block aspect-[1200/760] w-full object-cover"
            />
            {total > 1 ? (
              <>
                <button
                  type="button"
                  aria-label="Previous screen"
                  onClick={() => go(-1)}
                  className={`${arrow} left-[14px]`}
                >
                  <Chevron dir="left" />
                </button>
                <button
                  type="button"
                  aria-label="Next screen"
                  onClick={() => go(1)}
                  className={`${arrow} right-[14px]`}
                >
                  <Chevron dir="right" />
                </button>
              </>
            ) : null}
            <span
              className="absolute top-[14px] left-[14px] rounded-pill px-3 py-[5px] font-sans text-[13px] leading-4 font-bold"
              style={{ background: "rgba(35,22,15,0.72)", color: "#fff4ea" }}
            >
              {index + 1} / {total}
            </span>
          </div>

          <p className="m-0 font-sans text-[15px] leading-6 text-ink-muted">{screen.caption}</p>

          <div className="flex gap-[10px]">
            {project.screens.map((s, i) => (
              <button
                key={s.src}
                type="button"
                aria-label={`Show screen ${i + 1} of ${total}`}
                aria-pressed={i === index}
                onClick={() => setIndex(i)}
                className={`flex-1 cursor-pointer overflow-hidden rounded-sm border-0 bg-surface-2 p-0 ${
                  i === index
                    ? "outline outline-[3px] -outline-offset-[3px] outline-primary"
                    : "opacity-70 hover:opacity-100"
                }`}
              >
                <Image
                  src={s.src}
                  alt=""
                  width={1200}
                  height={760}
                  sizes="200px"
                  className="block aspect-[1200/760] w-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        <div className="flex min-w-0 flex-col gap-[14px]">
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="font-sans text-[12px] leading-4 font-bold tracking-[0.12em] uppercase text-accent">
                {project.kind}
              </div>
              <h2
                id="pm-title"
                className="mt-[6px] font-serif text-[36px] leading-[42px] font-semibold text-ink max-[640px]:text-[28px] max-[640px]:leading-9"
              >
                {project.title}
              </h2>
            </div>
            <button
              type="button"
              aria-label="Close"
              onClick={onClose}
              className="grid size-11 shrink-0 cursor-pointer place-items-center rounded-full border-0 bg-surface-2 text-ink"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>

          <p className="m-0 font-sans text-[16px] leading-[26px] text-ink">{project.description}</p>

          <div>
            <div className="mb-2 font-sans text-[12px] leading-4 font-bold tracking-[0.12em] uppercase text-ink-muted">
              What I built
            </div>
            <ul className="m-0 flex list-none flex-col gap-[6px] p-0">
              {project.built.map((b) => (
                <li
                  key={b}
                  className="flex items-baseline gap-[10px] font-sans text-[15px] leading-6 text-ink"
                >
                  <span aria-hidden="true" className="size-2 shrink-0 rounded-full bg-primary" />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-[6px]">
            {project.tags.map((t, i) => (
              <Tag key={`${t}-${i}`}>{markPlaceholders(t)}</Tag>
            ))}
          </div>

          <div className="mt-auto flex flex-wrap gap-3 pt-[6px]">
            {hasLink ? (
              <a
                href={project.link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-pill bg-primary px-[22px] font-sans text-[15px] leading-5 font-bold text-on-primary shadow-[0_5px_0_var(--primary-press)]"
              >
                {project.link.label}
              </a>
            ) : null}
            <button
              type="button"
              onClick={onNextProject}
              className="inline-flex min-h-12 cursor-pointer items-center rounded-pill border-0 bg-surface-2 px-[22px] font-sans text-[15px] leading-5 font-bold text-ink"
            >
              Next project →
            </button>
          </div>

          {project.conceptScreens ? (
            <p className="m-0 font-sans text-[12px] leading-4 text-ink-muted">
              Screens are concept previews until real screenshots are added.
            </p>
          ) : null}
        </div>
      </div>
    </dialog>
  );
}
