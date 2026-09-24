import type { InputHTMLAttributes, ReactNode, TextareaHTMLAttributes } from "react";

type Base = { label: string; name: string; error?: string };

const control =
  "w-full box-border rounded-sm bg-surface border-[1.5px] border-field-border px-4 py-3 font-sans text-[16px] leading-6 text-ink";

function Wrap({ label, name, error, children }: Base & { children: ReactNode }) {
  return (
    <div className="flex flex-col gap-[6px]">
      <label htmlFor={name} className="text-ink font-sans text-[14px] leading-[18px] font-bold">
        {label}
      </label>
      {children}
      {error ? (
        <p
          id={`${name}-error`}
          className="text-primary-press dark:text-primary font-sans text-[14px] leading-5"
        >
          {error}
        </p>
      ) : null}
    </div>
  );
}

function skin(error?: string) {
  return `${control} ${error ? "border-primary-press dark:border-primary" : ""}`;
}

function aria(name: string, error?: string) {
  return {
    "aria-invalid": error ? (true as const) : undefined,
    "aria-describedby": error ? `${name}-error` : undefined,
  };
}

export function Field({
  label,
  name,
  error,
  ...rest
}: Base & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <Wrap label={label} name={name} error={error}>
      <input id={name} name={name} className={skin(error)} {...aria(name, error)} {...rest} />
    </Wrap>
  );
}

export function TextArea({
  label,
  name,
  error,
  ...rest
}: Base & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <Wrap label={label} name={name} error={error}>
      <textarea
        id={name}
        name={name}
        className={`${skin(error)} min-h-[110px] resize-y`}
        {...aria(name, error)}
        {...rest}
      />
    </Wrap>
  );
}
