"use server";

import { Resend } from "resend";
import { z } from "zod";
import { site } from "@/content/site";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name (at least 2 characters)."),
  email: z.email("Please enter a valid email address, like jane@company.com."),
  message: z.string().trim().min(10, "Please describe your project in at least 10 characters."),
  company: z.string().max(0).optional(),
});

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Partial<Record<"name" | "email" | "message", string>>;
  values?: { name: string; email: string; message: string };
};

export async function sendContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const raw = {
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
    message: String(formData.get("message") ?? ""),
    company: String(formData.get("company") ?? ""),
  };
  const values = { name: raw.name, email: raw.email, message: raw.message };

  const parsed = schema.safeParse(raw);
  if (!parsed.success) {
    const errors: ContactState["errors"] = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0];
      if (key === "name" || key === "email" || key === "message") errors[key] = issue.message;
    }
    if (raw.company) return { status: "success" };
    return { status: "error", errors, values };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!apiKey || !to) {
    return {
      status: "error",
      message: `The form isn't connected yet. Please email ${site.email} directly.`,
      values,
    };
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>",
      to,
      replyTo: parsed.data.email,
      subject: `Portfolio enquiry from ${parsed.data.name}`,
      text: `${parsed.data.name} <${parsed.data.email}>\n\n${parsed.data.message}`,
    });
    if (error) throw new Error(error.message);
  } catch {
    return {
      status: "error",
      message: `Something went wrong sending that. Please email ${site.email} directly.`,
      values,
    };
  }

  return { status: "success", message: "Thanks! I'll reply within a day." };
}
