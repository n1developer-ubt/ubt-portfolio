import { site } from "@/content/site";
import { ButtonLink } from "./ui/Button";
import { ClayShape } from "./ui/ClayShape";
import { SectionHead } from "./SectionHead";

function Stars() {
  return (
    <div
      role="img"
      aria-label="5 out of 5"
      className="text-[15px] tracking-[2px] text-[#b7791f] dark:text-accent-2"
    >
      ★★★★★
    </div>
  );
}

export function Reviews() {
  return (
    <section id="reviews" className="wrap sec">
      <SectionHead
        eyebrow="Kind words"
        title="300+ happy projects on Fiverr"
        action={
          <ButtonLink href={site.social.fiverr} external variant="ghost">
            View Fiverr profile ↗
          </ButtonLink>
        }
      />

      <div className="grid grid-cols-[1.3fr_1fr] gap-6 max-[980px]:grid-cols-1">
        <figure className="relative m-0 overflow-hidden rounded-lg bg-accent p-11 text-on-accent max-[640px]:p-6">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <ClayShape kind="ball" color="sun" size={180} x={470} y={250} />
          </div>
          <blockquote className="t-quote relative m-0">
            &ldquo;{site.reviews.featured.quote}&rdquo;
          </blockquote>
          <figcaption className="relative mt-6 font-sans text-[14px] leading-[18px] font-bold">
            {site.reviews.featured.by}
          </figcaption>
        </figure>

        <div className="flex flex-col gap-6">
          {site.reviews.more.map((r) => (
            <figure key={r.by} className="m-0 rounded-lg bg-surface p-7 shadow-card">
              <Stars />
              <blockquote className="mt-2 mb-3 font-sans text-[17px] leading-7 text-ink">
                &ldquo;{r.quote}&rdquo;
              </blockquote>
              <figcaption className="font-sans text-[14px] leading-[18px] font-bold text-ink-muted">
                {r.by}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
