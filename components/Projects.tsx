"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { site } from "@/content/site";
import { MoreProjects } from "./MoreProjects";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import { SectionHead } from "./SectionHead";

export function Projects() {
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const trigger = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const slug = new URLSearchParams(window.location.search).get("project");
    if (slug && site.projects.some((p) => p.slug === slug)) setOpenSlug(slug);
  }, []);

  const setParam = useCallback((slug: string | null) => {
    const url = new URL(window.location.href);
    if (slug) url.searchParams.set("project", slug);
    else url.searchParams.delete("project");
    window.history.replaceState(null, "", url);
  }, []);

  function open(slug: string, el: HTMLElement) {
    trigger.current = el;
    setOpenSlug(slug);
    setParam(slug);
  }

  function close() {
    setOpenSlug(null);
    setParam(null);
    const el = trigger.current;
    setTimeout(() => el?.focus(), 0);
  }

  function nextProject() {
    const i = site.projects.findIndex((p) => p.slug === openSlug);
    const next = site.projects[(i + 1) % site.projects.length];
    setOpenSlug(next.slug);
    setParam(next.slug);
  }

  const current = site.projects.find((p) => p.slug === openSlug);

  return (
    <section id="work" className="wrap sec relative">
      <SectionHead
        eyebrow="Selected work"
        title="Projects I've built"
        side="From my own SaaS to enterprise ERPs. Click any project to browse its screens."
      />

      <div className="grid grid-cols-3 gap-6 max-[980px]:grid-cols-1">
        {site.projects.map((project, i) => (
          <ProjectCard
            key={project.slug}
            project={project}
            featured={i === 0}
            coverHeight={i < 2 ? 360 : 220}
            onOpen={(el) => open(project.slug, el)}
          />
        ))}
        <MoreProjects />
      </div>

      {current ? (
        <ProjectModal
          project={current}
          onClose={close}
          onNextProject={nextProject}
        />
      ) : null}
    </section>
  );
}
