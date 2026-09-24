"use client";

import { useRef, useSyncExternalStore } from "react";
import { site } from "@/content/site";
import { getProjectParam, setProjectParam, subscribeProjectParam } from "@/lib/projectParam";
import { MoreProjects } from "./MoreProjects";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import { SectionHead } from "./SectionHead";

export function Projects() {
  const param = useSyncExternalStore(subscribeProjectParam, getProjectParam, () => null);
  const trigger = useRef<HTMLElement | null>(null);
  const current = site.projects.find((p) => p.slug === param);
  const rest = Math.max(site.projects.length - 2, 1);
  const restSpan = 6 / rest === Math.floor(6 / rest) ? 6 / rest : 2;

  function open(slug: string, el: HTMLElement) {
    trigger.current = el;
    setProjectParam(slug);
  }

  function close() {
    setProjectParam(null);
    const el = trigger.current;
    setTimeout(() => el?.focus(), 0);
  }

  function nextProject() {
    const i = site.projects.findIndex((p) => p.slug === param);
    setProjectParam(site.projects[(i + 1) % site.projects.length].slug);
  }

  return (
    <section id="work" className="wrap sec relative">
      <SectionHead
        eyebrow="Selected work"
        title="Projects I've built"
        side="From my own SaaS to enterprise ERPs. Click any project to browse its screens."
      />

      <div className="grid grid-cols-6 gap-6 max-[980px]:grid-cols-1">
        {site.projects.map((project, i) => (
          <ProjectCard
            key={project.slug}
            project={project}
            featured={i === 0}
            span={i === 0 ? 4 : i === 1 ? 2 : restSpan}
            coverHeight={i < 2 ? 360 : 220}
            onOpen={(el) => open(project.slug, el)}
          />
        ))}
        <MoreProjects />
      </div>

      {current ? (
        <ProjectModal project={current} onClose={close} onNextProject={nextProject} />
      ) : null}
    </section>
  );
}
