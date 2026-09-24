import { site } from "@/content/site";
import { ExperienceItem } from "./ExperienceItem";

export function Experience() {
  return (
    <section
      id="experience"
      className="wrap sec grid grid-cols-[260px_1fr] gap-10 max-[980px]:grid-cols-1 max-[980px]:gap-6"
    >
      <div className="max-[980px]:static min-[981px]:sticky min-[981px]:top-6 min-[981px]:self-start">
        <div className="t-eyebrow">Experience</div>
        <div className="font-serif text-[130px] leading-[110px] font-bold tracking-[-0.05em] text-primary max-[640px]:text-[86px] max-[640px]:leading-[76px]">
          7<span className="text-[60px] max-[640px]:text-[40px]">yrs</span>
        </div>
        <p className="t-body mt-[10px] text-ink-muted">{site.experienceIntro}</p>
      </div>

      <div className="flex flex-col gap-[18px]">
        {site.experience.map((role, i) => (
          <ExperienceItem key={role.org} role={role} index={i} />
        ))}
      </div>
    </section>
  );
}
