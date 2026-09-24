import { site } from "@/content/site";
import { ButtonLink } from "./ui/Button";
import { ClayShape } from "./ui/ClayShape";

export function MoreProjects() {
  return (
    <div className="relative col-span-full flex items-center gap-10 overflow-hidden rounded-lg bg-surface-2 p-10 max-[980px]:flex-col max-[980px]:items-start max-[980px]:gap-6 max-[640px]:p-6">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <ClayShape kind="ball" color="primary" size={180} x={1010} y={-60} />
      </div>

      <div className="relative grow">
        <div className="t-eyebrow">And many more</div>
        <h3 className="mt-2 mb-[14px] font-serif text-[36px] leading-[42px] font-semibold text-ink max-[640px]:text-[26px] max-[640px]:leading-8">
          {site.moreProjects.title}
        </h3>
        <div className="flex flex-wrap gap-2">
          {site.moreProjects.categories.map((c) => (
            <span
              key={c}
              className="inline-flex min-h-[34px] items-center rounded-pill bg-surface px-[14px] font-sans text-[14px] leading-[18px] font-bold text-ink shadow-card"
            >
              {c}
            </span>
          ))}
        </div>
      </div>

      <div className="relative shrink-0 max-[640px]:w-full">
        <ButtonLink
          href={site.social.fiverr}
          external
          variant="dark"
          className="max-[640px]:w-full"
        >
          Browse on Fiverr ↗
        </ButtonLink>
      </div>
    </div>
  );
}
