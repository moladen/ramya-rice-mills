"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";
import { Button } from "@/components/ui/Button";
import { CloseIcon, WhatsAppIcon, CheckIcon } from "@/components/icons";
import { whatsappLink, productEnquiryMessage } from "@/lib/whatsapp";

interface ProductQuickViewProps {
  product: Product | null;
  onClose: () => void;
}

export function ProductQuickView({ product, onClose }: ProductQuickViewProps) {
  useEffect(() => {
    if (!product) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [product, onClose]);

  if (!product) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop with blur */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/70 backdrop-blur-md transition-opacity duration-300"
      />

      {/* Modal Dialog */}
      <div className="relative z-10 max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-gold/30 bg-surface shadow-[0_32px_64px_-16px_rgba(7,38,19,0.5)] animate-scale-in">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-cream-line bg-surface/90 text-ink transition-transform hover:scale-110 hover:bg-cream"
        >
          <CloseIcon className="h-5 w-5" />
        </button>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Product Image */}
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-cream-deep md:aspect-auto md:h-full">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            {product.badge ? (
              <span className="absolute left-4 top-4 rounded-full border border-gold/40 bg-primary-dark/90 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-gold-light backdrop-blur-sm">
                {product.badge}
              </span>
            ) : null}
          </div>

          {/* Details */}
          <div className="flex flex-col gap-5 p-6 sm:p-8">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                {product.category}
              </span>
              <h3 className="mt-1 font-display text-2xl font-bold text-ink sm:text-3xl">
                {product.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {product.description}
              </p>
            </div>

            {/* Quick Specs */}
            <div className="rounded-2xl border border-cream-line bg-cream/60 p-4">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-primary">
                Key Specifications
              </h4>
              <div className="mt-3 grid grid-cols-2 gap-3 text-xs">
                {product.specs.map((spec) => (
                  <div key={spec.label} className="flex flex-col">
                    <span className="text-ink-faint">{spec.label}</span>
                    <span className="font-semibold text-ink">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Packaging */}
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-ink-faint">
                Available Packaging:
              </span>
              <div className="mt-2 flex flex-wrap gap-2">
                {product.packaging.map((pack) => (
                  <span
                    key={pack}
                    className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary-tint px-3 py-1 text-xs font-medium text-primary"
                  >
                    <CheckIcon className="h-3 w-3 text-primary" />
                    {pack}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-auto flex flex-col gap-3 pt-2 sm:flex-row">
              <Button
                href={whatsappLink(productEnquiryMessage(product.name))}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="md"
                icon={<WhatsAppIcon className="h-4 w-4" />}
                className="flex-1 justify-center"
              >
                WhatsApp Enquiry
              </Button>
              <Button
                href={`/products/${product.slug}`}
                variant="outline"
                size="md"
                className="flex-1 justify-center"
                onClick={onClose}
              >
                Full Page Details
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

