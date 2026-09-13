"use client";

import { useEffect, useRef, useState, type KeyboardEvent, type TouchEvent } from "react";
import Image from "next/image";
import type { Product } from "@/data/products";
import { Button } from "@/components/ui/Button";
import { ChevronRightIcon, ShieldCheckIcon, WhatsAppIcon } from "@/components/icons";
import { whatsappLink, productEnquiryMessage } from "@/lib/whatsapp";

type SlotStyle = {
  x: number;
  scale: number;
  rotateY: number;
  opacity: number;
  zIndex: number;
};

// Coverflow-style position table, keyed by distance from the centered slot.
// Every card shares the same box size (see the w-56/sm:w-64/lg:w-72 classes
// below), so percentage-based translateX stays consistent across breakpoints
// without any JS width math.
function getSlotStyle(offset: number): SlotStyle {
  switch (offset) {
    case 0:
      return { x: 0, scale: 1, rotateY: 0, opacity: 1, zIndex: 30 };
    case 1:
      return { x: 72, scale: 0.76, rotateY: -14, opacity: 0.8, zIndex: 20 };
    case -1:
      return { x: -72, scale: 0.76, rotateY: 14, opacity: 0.8, zIndex: 20 };
    case 2:
      return { x: 130, scale: 0.56, rotateY: -24, opacity: 0.35, zIndex: 10 };
    case -2:
      return { x: -130, scale: 0.56, rotateY: 24, opacity: 0.35, zIndex: 10 };
    default:
      return { x: offset > 0 ? 175 : -175, scale: 0.4, rotateY: offset > 0 ? -30 : 30, opacity: 0, zIndex: 0 };
  }
}

function shortestOffset(index: number, center: number, total: number) {
  let diff = index - center;
  if (diff > total / 2) diff -= total;
  if (diff < -total / 2) diff += total;
  return diff;
}

export function ProductCarousel({
  products,
  onQuickView,
}: {
  products: Product[];
  onQuickView: (product: Product) => void;
}) {
  const [centerIndex, setCenterIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const total = products.length;

  useEffect(() => {
    setCenterIndex(0);
  }, [products]);

  const goTo = (i: number) => setCenterIndex(((i % total) + total) % total);
  const goNext = () => setCenterIndex((c) => (c + 1) % total);
  const goPrev = () => setCenterIndex((c) => (c - 1 + total) % total);

  function onKeyDown(e: KeyboardEvent<HTMLDivElement>) {
    if (e.key === "ArrowRight") goNext();
    if (e.key === "ArrowLeft") goPrev();
  }

  function onTouchStart(e: TouchEvent<HTMLDivElement>) {
    touchStartX.current = e.touches[0].clientX;
  }
  function onTouchEnd(e: TouchEvent<HTMLDivElement>) {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (dx > 40) goPrev();
    else if (dx < -40) goNext();
    touchStartX.current = null;
  }

  const center = products[centerIndex];
  if (!center || total === 0) return null;

  return (
    <div className="flex flex-col items-center gap-10">
      {/* Coverflow image stack */}
      <div
        className="relative w-full overflow-hidden px-2 py-6"
        style={{ perspective: "1400px" }}
        role="region"
        aria-roledescription="carousel"
        aria-label="Featured products"
        tabIndex={0}
        onKeyDown={onKeyDown}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div className="relative mx-auto h-64 w-56 sm:h-72 sm:w-64 lg:h-80 lg:w-72">
          {products.map((product, i) => {
            const offset = shortestOffset(i, centerIndex, total);
            const style = getSlotStyle(offset);
            const isCenter = offset === 0;
            const isVisible = Math.abs(offset) <= 2;

            return (
              <div
                key={product.slug}
                className={`absolute inset-0 ${offset !== 0 ? "hidden lg:block" : ""}`}
                style={{
                  transform: `translateX(${style.x}%) scale(${style.scale}) rotateY(${style.rotateY}deg)`,
                  opacity: style.opacity,
                  zIndex: style.zIndex,
                  transition:
                    "transform 0.65s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.5s ease",
                  pointerEvents: isVisible ? "auto" : "none",
                }}
              >
                <button
                  type="button"
                  onClick={() => (isCenter ? onQuickView(product) : goTo(i))}
                  aria-label={isCenter ? `View details for ${product.name}` : `Show ${product.name}`}
                  tabIndex={isVisible ? 0 : -1}
                  className={`relative h-full w-full overflow-hidden rounded-3xl bg-cream-deep transition-shadow duration-300 ${
                    isCenter
                      ? "cursor-pointer ring-2 ring-gold shadow-[0_32px_64px_-20px_rgba(184,138,46,0.45)]"
                      : "cursor-pointer border border-cream-line shadow-lg hover:shadow-xl"
                  }`}
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 1024px) 60vw, 22vw"
                    priority={isCenter}
                    className={`object-cover transition-transform duration-700 ${isCenter ? "hover:scale-105" : ""}`}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-black/0" />

                  {isCenter && product.badge ? (
                    <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-primary-dark/85 px-2.5 py-1 text-[0.62rem] font-semibold uppercase tracking-wider text-gold-light backdrop-blur-sm">
                      <ShieldCheckIcon className="h-3 w-3" />
                      {product.badge}
                    </span>
                  ) : null}

                  <span className="absolute bottom-3 left-3 right-3 truncate text-left text-sm font-semibold text-white drop-shadow-sm">
                    {product.name}
                  </span>
                </button>
              </div>
            );
          })}
        </div>

        {/* Prev / Next */}
        {total > 1 ? (
          <>
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous product"
              className="absolute left-0 top-1/2 z-40 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-cream-line bg-surface/90 text-primary shadow-md backdrop-blur-sm transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-1/2 hover:border-gold hover:text-gold sm:left-2"
            >
              <ChevronRightIcon className="h-4 w-4 rotate-180" />
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Next product"
              className="absolute right-0 top-1/2 z-40 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-cream-line bg-surface/90 text-primary shadow-md backdrop-blur-sm transition-all duration-200 hover:translate-x-0.5 hover:-translate-y-1/2 hover:border-gold hover:text-gold sm:right-2"
            >
              <ChevronRightIcon className="h-4 w-4" />
            </button>
          </>
        ) : null}
      </div>

      {/* Center product details — crossfades whenever the centered card changes */}
      <div key={center.slug} className="animate-fade-up flex max-w-xl flex-col items-center gap-3 text-center">
        <span className="inline-flex items-center rounded-full bg-primary-tint px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-wide text-primary">
          {center.category}
        </span>
        <h3 className="font-display text-2xl font-semibold text-ink sm:text-3xl">{center.name}</h3>
        <p className="text-sm leading-relaxed text-ink-soft sm:text-base">{center.shortDescription}</p>

        <div className="mt-2 flex w-full flex-col gap-2.5 sm:w-auto sm:flex-row">
          <Button
            type="button"
            onClick={() => onQuickView(center)}
            variant="outline"
            size="md"
            className="justify-center"
            icon={<ChevronRightIcon className="h-3.5 w-3.5" />}
          >
            View Details
          </Button>
          <Button
            href={whatsappLink(productEnquiryMessage(center.name))}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            size="md"
            className="justify-center"
            icon={<WhatsAppIcon className="h-4 w-4" />}
          >
            Enquire Now
          </Button>
        </div>
      </div>

      {/* Pagination dots */}
      {total > 1 ? (
        <div className="flex items-center gap-2">
          {products.map((p, i) => (
            <button
              key={p.slug}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Show ${p.name}`}
              aria-current={i === centerIndex}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === centerIndex ? "w-7 bg-primary" : "w-2 bg-cream-line hover:bg-gold/60"
              }`}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
