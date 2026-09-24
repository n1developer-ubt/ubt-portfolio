"use client";

import { useEffect, useState } from "react";
import { ButtonLink } from "./ui/Button";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#work", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const targets = links
      .map((l) => document.getElementById(l.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <nav
      aria-label="Main"
      className="wrap relative flex items-center justify-between gap-5 py-[22px]"
    >
      <a
        href="#home"
        className="flex shrink-0 items-center gap-[10px] font-serif text-[26px] leading-[26px] font-bold text-ink"
      >
        <span aria-hidden="true" className="size-[34px] rounded-full bg-primary shadow-clay" />
        Usama.
      </a>

      <div className="hidden gap-1 rounded-pill bg-surface p-[6px] font-sans text-[15px] leading-5 font-medium shadow-card min-[981px]:flex">
        {links.map((l) => {
          const isActive = active === l.href.slice(1);
          return (
            <a
              key={l.href}
              href={l.href}
              aria-current={isActive ? "true" : undefined}
              className={`rounded-pill px-4 py-[9px] transition-colors ${
                isActive ? "bg-ink text-ink-inverse" : "text-ink hover:bg-surface-2"
              }`}
            >
              {l.label}
            </a>
          );
        })}
      </div>

      <div className="flex items-center gap-[10px]">
        <ThemeToggle />
        <ButtonLink href="#contact" variant="dark" size="sm" className="hidden min-[981px]:inline-flex">
          Let&apos;s talk →
        </ButtonLink>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="grid size-11 cursor-pointer place-items-center rounded-full border-0 bg-surface text-ink shadow-card min-[981px]:hidden"
        >
          <span aria-hidden="true" className="text-[18px] leading-none">
            {open ? "✕" : "☰"}
          </span>
        </button>
      </div>

      {open ? (
        <div
          id="mobile-menu"
          className="absolute top-[78px] right-[var(--space-4)] left-[var(--space-4)] z-50 flex flex-col gap-1 rounded-lg bg-surface p-3 shadow-pop min-[981px]:hidden"
        >
          {links.map((l) => {
            const isActive = active === l.href.slice(1);
            return (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                aria-current={isActive ? "true" : undefined}
                className={`rounded-pill px-4 py-3 font-sans text-[15px] leading-5 font-medium ${
                  isActive ? "bg-ink text-ink-inverse" : "text-ink"
                }`}
              >
                {l.label}
              </a>
            );
          })}
        </div>
      ) : null}
    </nav>
  );
}
