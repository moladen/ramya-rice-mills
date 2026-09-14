"use client";

import { useMemo, useRef, useState, type KeyboardEvent, type TouchEvent } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ChevronRightIcon } from "@/components/icons";
import { whatsappLink, productEnquiryMessage } from "@/lib/whatsapp";
import type { Product, ProductCategory } from "@/data/products";

/**
 * Homepage-only featured-product showcase: a large centered product flanked by
 * smaller, recessed prev/next previews, a category filter, and a dynamic
 * "01 / 06" progress readout. Deliberately a separate component from
 * ProductCarousel/ProductsExperience (used on /products) rather than a shared
 * one — this section's exact copy, spec-chip display, and simplified (no 3D
 * tilt) transition are homepage-specific, and keeping them separate means
 * nothing here can ever change how the /products page looks or behaves.
 */
export function ProductShowcase({
  products,
  categories,
}: {
  products: Product[];
  categories: ProductCategory[];
}) {
  const [active, setActive] = useState<ProductCategory | "All">("All");
  const [index, setIndex] = useState(0);
  // Which way the carousel last moved, so the entrance transition can slide
  // in from the matching side instead of always sliding the same direction.
  const [direction, setDirection] = useState<1 | -1>(1);
  const touchStartX = useRef<number | null>(null);

  const filtered = useMemo(
    () => (active === "All" ? products : products.filter((p) => p.category === active)),
    [active, products]
  );

  // Derived rather than reset via an effect: `index` can point past the end of
  // a newly-filtered (shorter) list for one render, so it's wrapped into range
  // here instead of needing a follow-up render to correct itself.
  const total = filtered.length;
  const safeIndex = total > 0 ? ((index % total) + total) % total : 0;
  const current = filtered[safeIndex];
  const prevProduct = total > 1 ? filtered[(safeIndex - 1 + total) % total] : null;
  const nextProduct = total > 1 ? filtered[(safeIndex + 1) % total] : null;

  const goNext = () => {
    setDirection(1);
    setIndex((i) => (i + 1) % total);
  };
  const goPrev = () => {
    setDirection(-1);
    setIndex((i) => (i - 1 + total) % total);
  };
  const goTo = (i: number) => {
    setDirection(i >= safeIndex ? 1 : -1);
    setIndex(i);
  };
  const slideStyle = { "--slide-x": direction === 1 ? "24px" : "-24px" } as React.CSSProperties;

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

  const tabs: (ProductCategory | "All")[] = ["All", ...categories];

  return (
    <div className="flex flex-col gap-10">
      {/* Category filter */}
      <div className="flex flex-wrap justify-center gap-2.5">
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActive(tab)}
            aria-pressed={active === tab}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold ${
              active === tab
                ? "border-primary bg-primary text-cream shadow-md"
                : "border-cream-line bg-surface text-ink-soft hover:border-gold hover:bg-gold-tint hover:text-primary"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {!current ? (
        <div className="rounded-3xl border border-dashed border-cream-line p-12 text-center text-sm text-ink-soft">
          No products in this category yet.
        </div>
      ) : (
        <>
          {/* Carousel */}
          <div
            className="relative"
            role="region"
            aria-roledescription="carousel"
            aria-label="Featured rice products"
            tabIndex={0}
            onKeyDown={onKeyDown}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <div className="flex items-center justify-center gap-4 sm:gap-6 lg:gap-10">
              {/* Previous preview — recessed, hidden below lg so mobile stays a
                  clean single-card swipe carousel rather than a cropped 3-up row */}
              {prevProduct ? (
                <button
                  type="button"
                  onClick={goPrev}
                  aria-label={`Previous product: ${prevProduct.name}`}
                  className="group relative hidden h-40 w-32 shrink-0 overflow-hidden rounded-2xl opacity-70 shadow-md ring-1 ring-cream-line transition-all duration-500 hover:opacity-95 focus-visible:opacity-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold lg:block lg:h-48 lg:w-36"
                >
                  <Image
                    src={prevProduct.image}
                    alt=""
                    fill
                    sizes="150px"
                    className="object-cover blur-[1px] transition-[filter] duration-500 group-hover:blur-0"
                  />
                </button>
              ) : (
                <div className="hidden lg:block lg:w-36" aria-hidden />
              )}

              {/* Center — the visual focus: large, elevated, slides+fades in from
                  the direction the carousel is moving */}
              <div
                key={current.slug}
                style={slideStyle}
                className="animate-slide-fade-in relative h-80 w-full max-w-[21rem] shrink-0 overflow-hidden rounded-3xl shadow-[0_32px_64px_-20px_rgba(7,38,19,0.3)] sm:h-96 sm:max-w-md lg:h-[30rem] lg:max-w-lg"
              >
                <Image
                  src={current.image}
                  alt={current.name}
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 30vw"
                  className="object-cover transition-transform duration-700 ease-out hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                {current.badge ? (
                  <span className="absolute left-4 top-4 inline-flex items-center rounded-full border border-gold/40 bg-primary-dark/85 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-wider text-gold-light backdrop-blur-md">
                    {current.badge}
                  </span>
                ) : null}
              </div>

              {/* Next preview */}
              {nextProduct ? (
                <button
                  type="button"
                  onClick={goNext}
                  aria-label={`Next product: ${nextProduct.name}`}
                  className="group relative hidden h-40 w-32 shrink-0 overflow-hidden rounded-2xl opacity-70 shadow-md ring-1 ring-cream-line transition-all duration-500 hover:opacity-95 focus-visible:opacity-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold lg:block lg:h-48 lg:w-36"
                >
                  <Image
                    src={nextProduct.image}
                    alt=""
                    fill
                    sizes="150px"
                    className="object-cover blur-[1px] transition-[filter] duration-500 group-hover:blur-0"
                  />
                </button>
              ) : (
                <div className="hidden lg:block lg:w-36" aria-hidden />
              )}
            </div>

            {/* Prev / Next arrow controls */}
            {total > 1 ? (
              <>
                <button
                  type="button"
                  onClick={goPrev}
                  aria-label="Previous product"
                  className="absolute left-0 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-cream-line bg-surface/90 text-primary shadow-md backdrop-blur-sm transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-1/2 hover:border-gold hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold sm:left-2"
                >
                  <ChevronRightIcon className="h-4 w-4 rotate-180" />
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  aria-label="Next product"
                  className="absolute right-0 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-cream-line bg-surface/90 text-primary shadow-md backdrop-blur-sm transition-all duration-200 hover:translate-x-0.5 hover:-translate-y-1/2 hover:border-gold hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold sm:right-2"
                >
                  <ChevronRightIcon className="h-4 w-4" />
                </button>
              </>
            ) : null}
          </div>

          {/* Product information — slides+fades with the center image */}
          <div
            key={current.slug}
            style={slideStyle}
            className="animate-slide-fade-in mx-auto flex max-w-xl flex-col items-center gap-3 text-center"
          >
            <span className="inline-flex items-center rounded-full bg-primary-tint px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-wide text-primary">
              {current.category}
            </span>
            <h3 className="font-display text-2xl font-semibold text-ink sm:text-3xl">{current.name}</h3>
            <p className="text-sm leading-relaxed text-ink-soft sm:text-base">{current.shortDescription}</p>

            {current.specs.length ? (
              <div className="flex flex-wrap justify-center gap-2 pt-1">
                {current.specs.slice(0, 3).map((spec) => (
                  <span
                    key={spec.label}
                    className="rounded-lg border border-cream-line bg-cream/70 px-2.5 py-1 text-xs font-medium text-ink-soft"
                  >
                    <strong className="text-ink">{spec.label}:</strong> {spec.value}
                  </span>
                ))}
              </div>
            ) : null}

            <div className="mt-2 flex w-full flex-col gap-2.5 sm:w-auto sm:flex-row">
              <Button
                href={`/products/${current.slug}`}
                variant="primary"
                size="md"
                className="justify-center"
                icon={<ChevronRightIcon className="h-3.5 w-3.5" />}
              >
                View Details
              </Button>
              <Button
                href={whatsappLink(productEnquiryMessage(current.name))}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                size="md"
                className="justify-center"
              >
                Enquire
              </Button>
            </div>
          </div>

          {/* Progress readout + dot navigation */}
          <div className="flex flex-col items-center gap-3">
            <span className="text-xs font-medium tabular-nums tracking-wide text-ink-faint">
              {String(safeIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
            {total > 1 ? (
              <div className="flex items-center gap-2">
                {filtered.map((p, i) => (
                  <button
                    key={p.slug}
                    type="button"
                    onClick={() => goTo(i)}
                    aria-label={`Show ${p.name}`}
                    aria-current={i === safeIndex}
                    className={`h-2 rounded-full transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold ${
                      i === safeIndex ? "w-7 bg-primary" : "w-2 bg-cream-line hover:bg-gold/60"
                    }`}
                  />
                ))}
              </div>
            ) : null}
          </div>
        </>
      )}
    </div>
  );
}
