import { site } from "@/content/site";
import { ButtonLink } from "./ui/Button";
import { ClayShape } from "./ui/ClayShape";
import { SectionHead } from "./SectionHead";

function Stars() {
  return (
    <div
      role="img"
      aria-label="5 out of 5"
      className="dark:text-accent-2 text-[15px] tracking-[2px] text-[#b7791f]"
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
        <figure className="bg-accent text-on-accent relative m-0 overflow-hidden rounded-lg p-11 max-[640px]:p-6">
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
            <figure key={r.by} className="bg-surface shadow-card m-0 rounded-lg p-7">
              <Stars />
              <blockquote className="text-ink mt-2 mb-3 font-sans text-[17px] leading-7">
                &ldquo;{r.quote}&rdquo;
              </blockquote>
              <figcaption className="text-ink-muted font-sans text-[14px] leading-[18px] font-bold">
                {r.by}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
