"use client";

import Link from "next/link";
import { ChevronRightIcon, WhatsAppIcon } from "@/components/icons";
import { Button } from "@/components/ui/Button";
import { ProductImage } from "@/components/ui/ProductImage";
import type { Product } from "@/data/products";
import { whatsappLink, productEnquiryMessage } from "@/lib/whatsapp";

export function ProductCard({
  product,
  compact = false,
  onQuickView,
}: {
  product: Product;
  compact?: boolean;
  onQuickView?: (product: Product) => void;
}) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-cream-line bg-surface transition-all duration-500 hover:-translate-y-1 hover:border-gold/60 hover:shadow-[0_24px_48px_-20px_rgba(7,38,19,0.28)]">
      <div className={`relative w-full overflow-hidden bg-cream-deep ${compact ? "aspect-[16/10]" : "aspect-[4/3]"}`}>
        <Link href={`/products/${product.slug}`} className="block h-full w-full" aria-label={product.name}>
          <ProductImage
            product={product}
            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 440px"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </Link>

        {product.badge ? (
          <span className="absolute left-4 top-4 z-10 rounded-full border border-gold/40 bg-primary-dark/85 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-wider text-gold-light backdrop-blur-md">
            {product.badge}
          </span>
        ) : null}

        {onQuickView ? (
          <button
            type="button"
            onClick={() => onQuickView(product)}
            className="absolute bottom-4 right-4 z-10 rounded-full border border-white/40 bg-surface/90 px-3.5 py-1.5 text-xs font-semibold text-ink opacity-0 shadow-md backdrop-blur-md transition-all duration-300 group-hover:opacity-100 hover:bg-gold hover:text-primary-dark focus-visible:opacity-100"
          >
            Quick View
          </button>
        ) : null}
      </div>

      <div className={`flex flex-1 flex-col p-6 ${compact ? "gap-2.5 p-5" : "gap-3"}`}>
        <span className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-gold">
          {product.categories[0]}
        </span>

        <Link href={`/products/${product.slug}`}>
          <h3 className="font-display text-xl text-ink transition-colors group-hover:text-primary">
            {product.name}
          </h3>
        </Link>

        {compact ? null : (
          <>
            <p className="line-clamp-2 text-sm leading-relaxed text-ink-soft">{product.shortDescription}</p>

            <p className="mt-auto border-t border-cream-line pt-4 text-xs text-ink-soft">
              Specifications &amp; packaging: <span className="font-semibold text-ink-faint">Coming Soon</span>
            </p>
          </>
        )}

        <div className={`flex gap-2.5 ${compact ? "mt-auto pt-1" : ""}`}>
          <Button
            href={`/products/${product.slug}`}
            variant="outline"
            size="md"
            className="flex-1 justify-center"
            icon={<ChevronRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />}
          >
            View Details
          </Button>
          <Button
            href={whatsappLink(productEnquiryMessage(product.name))}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            size="md"
            className="flex-1 justify-center"
            icon={<WhatsAppIcon className="h-4 w-4" />}
          >
            Enquire
          </Button>
        </div>
      </div>
    </article>
  );
}
