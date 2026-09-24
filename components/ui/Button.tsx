import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "ghost" | "dark";
type Size = "md" | "sm";

const base =
  "inline-flex items-center justify-center gap-[10px] box-border rounded-pill font-sans font-bold whitespace-nowrap cursor-pointer border-0 transition-[transform,box-shadow] duration-150 disabled:cursor-not-allowed disabled:opacity-60";

const sizes: Record<Size, string> = {
  md: "min-h-[52px] px-[26px] text-[16px] leading-5",
  sm: "min-h-[42px] px-[18px] text-[15px] leading-5",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-primary text-on-primary shadow-[0_6px_0_var(--primary-press),0_18px_30px_rgba(255,90,54,.28)] hover:translate-y-[2px] hover:shadow-[0_4px_0_var(--primary-press),0_14px_24px_rgba(255,90,54,.26)] active:translate-y-[6px] active:shadow-[0_0_0_var(--primary-press),0_8px_16px_rgba(255,90,54,.22)] disabled:translate-y-0",
  ghost: "bg-surface text-ink shadow-card hover:-translate-y-[3px] hover:shadow-pop",
  dark: "bg-ink text-ink-inverse hover:-translate-y-[3px] hover:shadow-pop",
};

function classes(variant: Variant, size: Size, block?: boolean, className?: string) {
  return [base, sizes[size], variants[variant], block && "w-full", className]
    .filter(Boolean)
    .join(" ");
}

type Common = { variant?: Variant; size?: Size; block?: boolean; children: ReactNode };

type LinkProps = Common &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & { href: string; external?: boolean };

export function ButtonLink({
  href,
  external,
  variant = "primary",
  size = "md",
  block,
  className,
  children,
  ...rest
}: LinkProps) {
  const cls = classes(variant, size, block, className);
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} {...rest}>
      {children}
    </Link>
  );
}

type BtnProps = Common & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  variant = "primary",
  size = "md",
  block,
  className,
  children,
  type = "button",
  ...rest
}: BtnProps) {
  return (
    <button type={type} className={classes(variant, size, block, className)} {...rest}>
      {children}
    </button>
  );
}
