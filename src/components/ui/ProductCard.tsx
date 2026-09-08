"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon } from "@/components/icons";
import { Button } from "@/components/ui/Button";
import type { Product } from "@/data/products";
import { whatsappLink, productEnquiryMessage } from "@/lib/whatsapp";

export function ProductCard({
  product,
  index = 0,
  onQuickView,
}: {
  product: Product;
  index?: number;
  onQuickView?: (product: Product) => void;
}) {
  return (
    <div
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-cream-line bg-surface transition-all duration-500 hover:-translate-y-2 hover:border-gold/60 hover:shadow-[0_28px_56px_-16px_rgba(7,38,19,0.3)]"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {/* Product Image Showcase with Shimmer and Zoom */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-cream-deep">
        <Link href={`/products/${product.slug}`} className="block h-full w-full">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
        </Link>

        {/* Diagonal Light Sweep / Shimmer Effect */}
        <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-1000 ease-in-out group-hover:translate-x-full" />

        {/* Gradient shadow for text contrast */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />

        {/* Top Badge */}
        {product.badge ? (
          <div className="absolute left-4 top-4 z-10">
            <span className="inline-flex items-center rounded-full border border-gold/40 bg-primary-dark/85 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-wider text-gold-light backdrop-blur-md transition-transform duration-300 group-hover:scale-105">
              {product.badge}
            </span>
          </div>
        ) : null}

        {/* Quick View Button overlay on hover */}
        {onQuickView ? (
          <button
            type="button"
            onClick={() => onQuickView(product)}
            className="absolute bottom-4 right-4 z-10 flex translate-y-2 items-center gap-1.5 rounded-full border border-white/40 bg-surface/90 px-3.5 py-1.5 text-xs font-semibold text-ink opacity-0 backdrop-blur-md shadow-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 hover:bg-gold hover:text-primary-dark"
          >
            Quick View
          </button>
        ) : null}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-3.5 p-6">
        <div className="flex items-center justify-between">
          <span className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-gold">
            {product.category}
          </span>
          <span className="flex h-2 w-2 rounded-full bg-gold/60 transition-transform duration-300 group-hover:scale-150 group-hover:bg-gold" />
        </div>

        <Link href={`/products/${product.slug}`}>
          <h3 className="font-display text-xl text-ink transition-colors group-hover:text-primary">
            {product.name}
          </h3>
        </Link>

        <p className="line-clamp-2 flex-1 text-sm leading-relaxed text-ink-soft">
          {product.shortDescription}
        </p>

        {/* Key Specs Pills */}
        <div className="flex flex-wrap gap-1.5 py-1">
          {product.specs.slice(0, 2).map((s) => (
            <span
              key={s.label}
              className="rounded-lg border border-cream-line bg-cream/70 px-2.5 py-1 text-[0.7rem] font-medium text-ink-soft"
            >
              <strong className="text-ink">{s.label}:</strong> {s.value}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="mt-2 flex flex-wrap items-center gap-2.5 pt-1">
          <Button
            href={`/products/${product.slug}`}
            variant="outline"
            size="md"
            className="flex-1 justify-center group-hover:border-primary group-hover:bg-primary group-hover:text-cream"
            icon={<ChevronRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />}
          >
            Details
          </Button>
          <Button
            href={whatsappLink(productEnquiryMessage(product.name))}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            size="md"
            className="flex-1 justify-center"
          >
            Enquire
          </Button>
        </div>
      </div>
    </div>
  );
}

