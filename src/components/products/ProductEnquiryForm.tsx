"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/icons";
import { whatsappLink } from "@/lib/whatsapp";

const FIELD_CLASS =
  "w-full rounded-xl border border-cream-line bg-surface px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:border-primary focus:outline-none";

export function ProductEnquiryForm({ productName }: { productName: string }) {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [quantity, setQuantity] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const lines = [
      `Hello Ramya Rice, I would like to enquire about ${productName}.`,
      "",
      `Name: ${name}`,
      company ? `Company: ${company}` : null,
      quantity ? `Required quantity: ${quantity}` : null,
      message ? `Message: ${message}` : null,
    ].filter((line): line is string => line !== null);

    window.open(whatsappLink(lines.join("\n")), "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 rounded-3xl border border-cream-line bg-surface p-6 sm:p-8">
      <div className="flex flex-col gap-1.5">
        <h2 className="font-display text-xl text-ink">Enquire About {productName}</h2>
        <p className="text-sm leading-relaxed text-ink-soft">
          Send your details and requirement. Your enquiry opens in WhatsApp, ready to send.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5 text-xs font-semibold uppercase tracking-wide text-ink-soft">
          Your name
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={FIELD_CLASS}
            autoComplete="name"
          />
        </label>
        <label className="flex flex-col gap-1.5 text-xs font-semibold uppercase tracking-wide text-ink-soft">
          Company (optional)
          <input value={company} onChange={(e) => setCompany(e.target.value)} className={FIELD_CLASS} />
        </label>
      </div>

      <label className="flex flex-col gap-1.5 text-xs font-semibold uppercase tracking-wide text-ink-soft">
        Required quantity (optional)
        <input
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          placeholder="For example: 500 kg"
          className={FIELD_CLASS}
        />
      </label>

      <label className="flex flex-col gap-1.5 text-xs font-semibold uppercase tracking-wide text-ink-soft">
        Message (optional)
        <textarea
          rows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={`${FIELD_CLASS} resize-y`}
        />
      </label>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Button
          type="submit"
          variant="secondary"
          size="lg"
          className="justify-center"
          icon={<WhatsAppIcon className="h-5 w-5" />}
        >
          Send on WhatsApp
        </Button>
        <a href="/contact" className="text-sm font-medium text-primary underline-offset-4 hover:underline">
          Need a formal quotation? Request a quote
        </a>
      </div>
    </form>
  );
}
