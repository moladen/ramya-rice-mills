"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { CheckIcon, WhatsAppIcon } from "@/components/icons";
import { PRODUCTS } from "@/data/products";
import { whatsappLink, GENERAL_ENQUIRY_MESSAGE } from "@/lib/whatsapp";

type FormState = {
  name: string;
  phone: string;
  email: string;
  product: string;
  quantity: string;
  destination: string;
  message: string;
};

const INITIAL_STATE: FormState = {
  name: "",
  phone: "",
  email: "",
  product: "",
  quantity: "",
  destination: "",
  message: "",
};

type Status = "idle" | "submitting" | "success" | "error";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function EnquiryForm() {
  const [values, setValues] = useState<FormState>(INITIAL_STATE);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<Status>("idle");

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setValues((v) => ({ ...v, [key]: value }));
  }

  function validate(): boolean {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!values.name.trim()) next.name = "Please enter your name.";
    if (!values.phone.trim()) next.phone = "Please enter a phone / WhatsApp number.";
    if (!values.email.trim()) next.email = "Please enter your email.";
    else if (!EMAIL_RE.test(values.email)) next.email = "Please enter a valid email address.";
    if (!values.message.trim()) next.message = "Let us know your requirement.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!validate()) {
      setStatus("error");
      return;
    }

    setStatus("submitting");
    try {
      // NOTE: no backend is wired yet — replace this block with a call to the
      // client's enquiry API / email service (e.g. POST /api/enquiry) once available.
      await new Promise((resolve) => setTimeout(resolve, 700));
      setStatus("success");
      setValues(INITIAL_STATE);
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 rounded-3xl border border-primary/20 bg-primary-tint p-10 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-cream">
          <CheckIcon className="h-7 w-7" />
        </span>
        <h3 className="font-display text-2xl text-ink">Enquiry Received</h3>
        <p className="max-w-sm text-sm leading-relaxed text-ink-soft">
          Thank you for reaching out. Our team will get back to you shortly. For a faster response,
          you can also message us directly on WhatsApp.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button
            href={whatsappLink(GENERAL_ENQUIRY_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            icon={<WhatsAppIcon className="h-4 w-4" />}
          >
            Chat on WhatsApp
          </Button>
          <Button variant="outline" onClick={() => setStatus("idle")}>
            Submit Another Enquiry
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" error={errors.name}>
          <input
            type="text"
            value={values.name}
            onChange={(e) => update("name", e.target.value)}
            className={inputClass(!!errors.name)}
            placeholder="Your full name"
          />
        </Field>
        <Field label="Phone / WhatsApp" error={errors.phone}>
          <input
            type="tel"
            value={values.phone}
            onChange={(e) => update("phone", e.target.value)}
            className={inputClass(!!errors.phone)}
            placeholder="+91 00000 00000"
          />
        </Field>
      </div>

      <Field label="Email" error={errors.email}>
        <input
          type="email"
          value={values.email}
          onChange={(e) => update("email", e.target.value)}
          className={inputClass(!!errors.email)}
          placeholder="you@company.com"
        />
      </Field>

      <div className="grid gap-5 sm:grid-cols-3">
        <Field label="Product">
          <select
            value={values.product}
            onChange={(e) => update("product", e.target.value)}
            className={inputClass(false)}
          >
            <option value="">Select a product</option>
            {PRODUCTS.map((p) => (
              <option key={p.slug} value={p.name}>
                {p.name}
              </option>
            ))}
            <option value="Other">Other / General Enquiry</option>
          </select>
        </Field>
        <Field label="Quantity">
          <input
            type="text"
            value={values.quantity}
            onChange={(e) => update("quantity", e.target.value)}
            className={inputClass(false)}
            placeholder="e.g. 20 MT / month"
          />
        </Field>
        <Field label="Destination / Country">
          <input
            type="text"
            value={values.destination}
            onChange={(e) => update("destination", e.target.value)}
            className={inputClass(false)}
            placeholder="City, Country"
          />
        </Field>
      </div>

      <Field label="Requirement / Message" error={errors.message}>
        <textarea
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
          rows={5}
          className={inputClass(!!errors.message)}
          placeholder="Tell us about your requirement..."
        />
      </Field>

      {status === "error" && Object.keys(errors).length === 0 ? (
        <p className="text-sm text-red-600">
          Something went wrong. Please try again or reach us on WhatsApp.
        </p>
      ) : null}

      <Button type="submit" variant="primary" size="lg" disabled={status === "submitting"} className="w-full justify-center sm:w-fit">
        {status === "submitting" ? "Sending..." : "Send Enquiry"}
      </Button>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-sm font-medium text-ink">{label}</span>
      {children}
      {error ? <span className="text-xs text-red-600">{error}</span> : null}
    </label>
  );
}

function inputClass(hasError: boolean) {
  return `rounded-xl border bg-surface px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink-faint focus:border-primary ${
    hasError ? "border-red-400" : "border-cream-line"
  }`;
}
