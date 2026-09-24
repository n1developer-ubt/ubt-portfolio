"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { sendContact, type ContactState } from "@/app/actions/contact";
import { Field, TextArea } from "./ui/Field";

const initial: ContactState = { status: "idle" };

function Submit() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="min-h-[52px] cursor-pointer rounded-pill border-0 bg-primary font-sans text-[16px] leading-5 font-bold text-on-primary shadow-[0_6px_0_var(--primary-press)] disabled:cursor-not-allowed disabled:opacity-70"
    >
      {pending ? "Sending…" : "Send message"}
    </button>
  );
}

export function ContactForm() {
  const [state, action] = useActionState(sendContact, initial);
  const v = state.values;

  return (
    <form
      action={action}
      className="relative flex flex-col gap-[14px] rounded-lg bg-bg p-7 text-ink max-[640px]:p-5"
    >
      <Field
        label="Name"
        name="name"
        required
        minLength={2}
        autoComplete="name"
        placeholder="Jane Doe"
        defaultValue={v?.name}
        error={state.errors?.name}
      />
      <Field
        label="Email"
        name="email"
        type="email"
        required
        autoComplete="email"
        placeholder="jane@company.com"
        defaultValue={v?.email}
        error={state.errors?.email}
      />
      <TextArea
        label="Project"
        name="message"
        required
        minLength={10}
        placeholder="Tell me about your project…"
        defaultValue={v?.message}
        error={state.errors?.message}
      />

      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="company">Company (leave empty)</label>
        <input id="company" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      <Submit />

      <p aria-live="polite" className="m-0 font-sans text-[14px] leading-5">
        {state.status === "success" ? (
          <span className="font-bold text-success">
            {state.message ?? "Thanks! I'll reply within a day."}
          </span>
        ) : state.message ? (
          <span className="text-primary-press dark:text-primary">{state.message}</span>
        ) : null}
      </p>
    </form>
  );
}
