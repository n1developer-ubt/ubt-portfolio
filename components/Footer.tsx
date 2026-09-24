import { site } from "@/content/site";

const socials = [
  { label: "GitHub", href: site.social.github },
  { label: "LinkedIn", href: site.social.linkedin },
  { label: "Fiverr", href: site.social.fiverr },
];

export function Footer() {
  return (
    <footer className="wrap flex justify-between gap-4 pt-10 pb-12 font-sans text-[14px] leading-5 text-ink-muted max-[640px]:flex-col max-[640px]:gap-3">
      <span>
        © {new Date().getFullYear()} {site.name} · {site.location} ·{" "}
        <a href="#home" className="font-bold text-ink">
          Back to top ↑
        </a>
      </span>
      <span className="flex gap-[18px]">
        {socials.map((s) => (
          <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer">
            {s.label}
          </a>
        ))}
      </span>
    </footer>
  );
}
