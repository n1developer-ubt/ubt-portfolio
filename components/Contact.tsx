import { site } from "@/content/site";
import { ClayShape } from "./ui/ClayShape";
import { ContactForm } from "./ContactForm";

const socials = [
  { label: "GitHub", href: site.social.github },
  { label: "LinkedIn", href: site.social.linkedin },
  { label: "Fiverr", href: site.social.fiverr },
];

export function Contact() {
  return (
    <section id="contact" className="wrap sec">
      <div className="bg-ink text-ink-inverse relative grid grid-cols-[1.2fr_1fr] gap-10 overflow-hidden rounded-xl p-[72px] max-[980px]:grid-cols-1 max-[640px]:p-6">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <ClayShape kind="ball" color="primary" size={220} x={440} y={-110} />
        </div>

        <div className="relative">
          <div className="text-on-ink-accent font-sans text-[13px] leading-[18px] font-bold tracking-[0.12em] uppercase">
            {site.contact.eyebrow}
          </div>

          <h2 className="my-[14px_20px] font-serif text-[64px] leading-[66px] font-semibold tracking-[-0.03em] max-[980px]:text-[48px] max-[980px]:leading-[52px] max-[640px]:text-[34px] max-[640px]:leading-[40px]">
            Got an idea?
            <br />
            Let&apos;s make it <em className="text-on-ink-accent italic">real.</em>
          </h2>

          <p className="mb-[30px] opacity-85">{site.contact.text}</p>

          <a
            href={`mailto:${site.email}`}
            className="rounded-pill border-on-ink-accent bg-ink-inverse text-ink box-border inline-flex min-h-[60px] items-center justify-center gap-3 border-2 px-7 font-sans text-[19px] leading-6 font-bold shadow-[0_6px_0_var(--on-ink-accent)] max-[640px]:w-full max-[640px]:px-4 max-[640px]:text-[16px]"
          >
            <span className="text-primary flex">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="3" y="5" width="18" height="14" rx="3" />
                <path d="M3 7l9 6 9-6" />
              </svg>
            </span>
            {site.email}
          </a>

          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href={site.docs.cv}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-pill border-ink-inverse/35 text-ink-inverse inline-flex min-h-[46px] items-center gap-2 border-2 px-5 font-sans text-[15px] leading-5 font-bold max-[640px]:w-full max-[640px]:justify-center"
            >
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 3v12" />
                <path d="M7 12l5 5 5-5" />
                <path d="M5 21h14" />
              </svg>
              Download CV ↗
            </a>
            <a
              href={site.docs.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-pill border-ink-inverse/35 text-ink-inverse inline-flex min-h-[46px] items-center gap-2 border-2 px-5 font-sans text-[15px] leading-5 font-bold max-[640px]:w-full max-[640px]:justify-center"
            >
              Full portfolio PDF ↗
            </a>
          </div>

          <div className="mt-6 flex gap-[18px] font-sans text-[15px] leading-5 font-bold">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="border-b-2 border-current"
              >
                {s.label} ↗
              </a>
            ))}
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
