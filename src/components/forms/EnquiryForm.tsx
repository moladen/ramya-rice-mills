"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { CheckIcon, WhatsAppIcon } from "@/components/icons";
import { PRODUCTS } from "@/data/products";
import { whatsappLink, GENERAL_ENQUIRY_MESSAGE } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";

type BuyerType = "export" | "domestic";

type FormState = {
  name: string;
  company: string;
  phone: string;
  email: string;
  variety: string;
  specification: string;
  quantity: string;
  requirementVolume: string;
  packaging: string;
  buyerType: BuyerType;
  // Export-specific
  destinationCountry: string;
  port: string;
  incoterm: string;
  // Indian buyer-specific
  deliveryLocation: string;
  intendedMarket: string;
  additionalRequirements: string;
};

const INITIAL_STATE: FormState = {
  name: "",
  company: "",
  phone: "",
  email: "",
  variety: "",
  specification: "",
  quantity: "",
  requirementVolume: "",
  packaging: "",
  buyerType: "domestic",
  destinationCountry: "",
  port: "",
  incoterm: "",
  deliveryLocation: "",
  intendedMarket: "",
  additionalRequirements: "",
};

type Status = "idle" | "success" | "error";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Builds the WhatsApp message from whatever fields the buyer filled in —
// no backend is wired yet (see handleSubmit), so WhatsApp is the actual
// delivery channel for the enquiry, not just an optional follow-up link.
function buildEnquiryMessage(v: FormState): string {
  const lines: [string, string][] = [
    ["Name", v.name],
    ["Company", v.company],
    ["Phone", v.phone],
    ["Email", v.email],
    ["Rice Variety", v.variety],
    ["Required Specification", v.specification],
    ["Quantity", v.quantity],
    ["Monthly / Annual Requirement", v.requirementVolume],
    ["Packaging", v.packaging],
    ["Enquiring As", v.buyerType === "export" ? "Export Buyer" : "Indian Buyer"],
    ...(v.buyerType === "export"
      ? ([
          ["Destination Country", v.destinationCountry],
          ["Port", v.port],
          ["Incoterm", v.incoterm],
        ] as [string, string][])
      : ([
          ["Delivery Location", v.deliveryLocation],
          ["Intended Market / Channel", v.intendedMarket],
        ] as [string, string][])),
    ["Additional Requirements", v.additionalRequirements],
  ];

  const details = lines
    .filter(([, value]) => value.trim())
    .map(([label, value]) => `${label}: ${value}`)
    .join("\n");

  return `Hello Ramya Rice, I would like to submit a B2B enquiry.\n\n${details}`;
}

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
    if (!values.company.trim()) next.company = "Please enter your company name.";
    if (!values.phone.trim()) next.phone = "Please enter a phone / WhatsApp number.";
    if (!values.email.trim()) next.email = "Please enter your email.";
    else if (!EMAIL_RE.test(values.email)) next.email = "Please enter a valid email address.";
    if (!values.additionalRequirements.trim()) next.additionalRequirements = "Let us know your requirement.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!validate()) {
      setStatus("error");
      return;
    }

    // NOTE: no backend is wired yet — this redirects the enquiry straight to
    // WhatsApp instead. Once a real enquiry API / email service exists, send
    // the form there too (e.g. POST /api/enquiry) and keep this as a bonus
    // fast-path, rather than the only delivery channel.
    trackEvent("generate_lead", {
      form: "enquiry_form",
      buyer_type: values.buyerType,
      variety: values.variety || undefined,
    });

    // Opened synchronously, in the same tick as the submit click, so browser
    // popup blockers treat it as user-initiated rather than a blocked popup.
    window.open(whatsappLink(buildEnquiryMessage(values)), "_blank", "noopener,noreferrer");

    setStatus("success");
    setValues(INITIAL_STATE);
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 rounded-3xl border border-primary/20 bg-primary-tint p-10 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-cream">
          <CheckIcon className="h-7 w-7" />
        </span>
        <h3 className="font-display text-2xl text-ink">Enquiry Sent to WhatsApp</h3>
        <p className="max-w-sm text-sm leading-relaxed text-ink-soft">
          We&apos;ve opened WhatsApp in a new tab with your enquiry details pre-filled — just hit send
          there to reach our team. If it didn&apos;t open, use the button below.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button
            href={whatsappLink(GENERAL_ENQUIRY_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            icon={<WhatsAppIcon className="h-4 w-4" />}
          >
            Open WhatsApp
          </Button>
          <Button variant="outline" onClick={() => setStatus("idle")}>
            Submit Another Enquiry
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
      {/* Your details */}
      <div className="flex flex-col gap-5">
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
          <Field label="Company" error={errors.company}>
            <input
              type="text"
              value={values.company}
              onChange={(e) => update("company", e.target.value)}
              className={inputClass(!!errors.company)}
              placeholder="Your company name"
            />
          </Field>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Phone / WhatsApp" error={errors.phone}>
            <input
              type="tel"
              value={values.phone}
              onChange={(e) => update("phone", e.target.value)}
              className={inputClass(!!errors.phone)}
              placeholder="+91 00000 00000"
            />
          </Field>
          <Field label="Email" error={errors.email}>
            <input
              type="email"
              value={values.email}
              onChange={(e) => update("email", e.target.value)}
              className={inputClass(!!errors.email)}
              placeholder="you@company.com"
            />
          </Field>
        </div>
      </div>

      {/* Requirement */}
      <div className="flex flex-col gap-5 border-t border-cream-line pt-6">
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Rice Variety">
            <select
              value={values.variety}
              onChange={(e) => update("variety", e.target.value)}
              className={inputClass(false)}
            >
              <option value="">Select a variety</option>
              {PRODUCTS.map((p) => (
                <option key={p.slug} value={p.name}>
                  {p.name}
                </option>
              ))}
              <option value="Other">Other / General Enquiry</option>
            </select>
          </Field>
          <Field label="Required Specification">
            <input
              type="text"
              value={values.specification}
              onChange={(e) => update("specification", e.target.value)}
              className={inputClass(false)}
              placeholder="e.g. grain length, broken %"
            />
          </Field>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Quantity">
            <input
              type="text"
              value={values.quantity}
              onChange={(e) => update("quantity", e.target.value)}
              className={inputClass(false)}
              placeholder="e.g. 20 MT"
            />
          </Field>
          <Field label="Monthly / Annual Requirement">
            <input
              type="text"
              value={values.requirementVolume}
              onChange={(e) => update("requirementVolume", e.target.value)}
              className={inputClass(false)}
              placeholder="e.g. 200 MT / month"
            />
          </Field>
        </div>
        <Field label="Packaging">
          <input
            type="text"
            value={values.packaging}
            onChange={(e) => update("packaging", e.target.value)}
            className={inputClass(false)}
            placeholder="e.g. 25 kg bags, jumbo bags, container loads"
          />
        </Field>
      </div>

      {/* Buyer type */}
      <div className="flex flex-col gap-5 border-t border-cream-line pt-6">
        <div className="flex flex-col gap-2">
          <span className="text-sm font-medium text-ink">I am enquiring as</span>
          <div className="flex gap-2.5">
            <button
              type="button"
              onClick={() => update("buyerType", "domestic")}
              aria-pressed={values.buyerType === "domestic"}
              className={`flex-1 rounded-xl border px-4 py-2.5 text-sm font-medium transition-colors ${
                values.buyerType === "domestic"
                  ? "border-primary bg-primary text-cream"
                  : "border-cream-line bg-surface text-ink-soft hover:border-gold hover:text-primary"
              }`}
            >
              Indian Buyer
            </button>
            <button
              type="button"
              onClick={() => update("buyerType", "export")}
              aria-pressed={values.buyerType === "export"}
              className={`flex-1 rounded-xl border px-4 py-2.5 text-sm font-medium transition-colors ${
                values.buyerType === "export"
                  ? "border-primary bg-primary text-cream"
                  : "border-cream-line bg-surface text-ink-soft hover:border-gold hover:text-primary"
              }`}
            >
              Export Enquiry
            </button>
          </div>
        </div>

        {values.buyerType === "export" ? (
          <div className="grid gap-5 sm:grid-cols-3">
            <Field label="Destination Country">
              <input
                type="text"
                value={values.destinationCountry}
                onChange={(e) => update("destinationCountry", e.target.value)}
                className={inputClass(false)}
                placeholder="Country"
              />
            </Field>
            <Field label="Port">
              <input
                type="text"
                value={values.port}
                onChange={(e) => update("port", e.target.value)}
                className={inputClass(false)}
                placeholder="Destination / loading port"
              />
            </Field>
            <Field label="Incoterm">
              <input
                type="text"
                value={values.incoterm}
                onChange={(e) => update("incoterm", e.target.value)}
                className={inputClass(false)}
                placeholder="e.g. FOB, CIF"
              />
            </Field>
          </div>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Delivery Location">
              <input
                type="text"
                value={values.deliveryLocation}
                onChange={(e) => update("deliveryLocation", e.target.value)}
                className={inputClass(false)}
                placeholder="City, State"
              />
            </Field>
            <Field label="Intended Market / Channel">
              <input
                type="text"
                value={values.intendedMarket}
                onChange={(e) => update("intendedMarket", e.target.value)}
                className={inputClass(false)}
                placeholder="e.g. wholesale, retail, HORECA"
              />
            </Field>
          </div>
        )}
      </div>

      <Field label="Additional Requirements" error={errors.additionalRequirements}>
        <textarea
          value={values.additionalRequirements}
          onChange={(e) => update("additionalRequirements", e.target.value)}
          rows={4}
          className={inputClass(!!errors.additionalRequirements)}
          placeholder="Tell us anything else about your requirement..."
        />
      </Field>

      <Button type="submit" variant="primary" size="lg" className="w-full justify-center sm:w-fit">
        Send Enquiry
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
