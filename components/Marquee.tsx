import { site } from "@/content/site";

export function Marquee() {
  const items = [...site.marquee, ...site.marquee];

  return (
    <div aria-hidden="true" className="mt-10 overflow-hidden">
      <div
        className="-mx-5 overflow-hidden bg-ink py-[22px] text-ink-inverse"
        style={{ rotate: "-1.5deg" }}
      >
        <div
          className="flex w-max gap-[44px] font-serif text-[30px] leading-9 font-semibold whitespace-nowrap max-[640px]:gap-7 max-[640px]:text-[22px]"
          style={{ animation: "marquee 30s linear infinite" }}
        >
          {items.map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="inline-flex items-center gap-[44px] max-[640px]:gap-7"
            >
              {item}
              <span aria-hidden="true" className="text-primary">
                ✺
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
