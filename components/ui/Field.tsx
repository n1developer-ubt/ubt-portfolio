import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

type Base = { label: string; name: string; error?: string; hint?: string };

const control =
  "w-full rounded-sm border-2 border-field-border bg-surface px-4 py-[13px] font-sans text-[16px] leading-[26px] text-ink placeholder:text-ink-muted/70 focus-visible:border-focus";

function Wrap({
  label,
  name,
  error,
  hint,
  children,
}: Base & { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="t-label text-ink">
        {label}
      </label>
      {children}
      {error ? (
        <p id={`${name}-error`} className="t-body-sm text-primary-press dark:text-primary">
          {error}
        </p>
      ) : hint ? (
        <p id={`${name}-hint`} className="t-body-sm text-ink-muted">
          {hint}
        </p>
      ) : null}
    </div>
  );
}

export function Field({
  label,
  name,
  error,
  hint,
  ...rest
}: Base & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <Wrap label={label} name={name} error={error} hint={hint}>
      <input
        id={name}
        name={name}
        className={`${control} ${error ? "border-primary-press dark:border-primary" : ""}`}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${name}-error` : hint ? `${name}-hint` : undefined}
        {...rest}
      />
    </Wrap>
  );
}

export function TextArea({
  label,
  name,
  error,
  hint,
  ...rest
}: Base & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <Wrap label={label} name={name} error={error} hint={hint}>
      <textarea
        id={name}
        name={name}
        className={`${control} resize-y ${error ? "border-primary-press dark:border-primary" : ""}`}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${name}-error` : hint ? `${name}-hint` : undefined}
        {...rest}
      />
    </Wrap>
  );
}
