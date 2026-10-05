"use client";

import { useMemo, useState } from "react";
import { ProductCard } from "@/components/ui/ProductCard";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { ProductQuickView } from "@/components/products/ProductQuickView";
import { ProductsComingSoon } from "@/components/products/ProductsComingSoon";
import { WhatsAppIcon } from "@/components/icons";
import type { Product, ProductCategory } from "@/data/products";
import { whatsappLink, productEnquiryMessage } from "@/lib/whatsapp";

type Tab = ProductCategory | "All";

export function ProductCatalogue({
  products,
  categories,
  compact = false,
}: {
  products: Product[];
  categories: ProductCategory[];
  compact?: boolean;
}) {
  const [active, setActive] = useState<Tab>("All");
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [enquiryName, setEnquiryName] = useState(products[0].name);

  const filtered = useMemo(
    () => (active === "All" ? products : products.filter((p) => p.categories.includes(active))),
    [active, products]
  );

  const countFor = (tab: Tab) =>
    tab === "All" ? products.length : products.filter((p) => p.categories.includes(tab)).length;

  const tabs: Tab[] = ["All", ...categories];

  const tabButtons = tabs.map((tab) => {
    const isActive = active === tab;
    return (
      <button
        key={tab}
        type="button"
        aria-pressed={isActive}
        onClick={() => setActive(tab)}
        className={`flex shrink-0 items-center justify-between gap-3 rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-300 ${
          compact ? "" : "lg:rounded-2xl lg:px-5 lg:py-3.5"
        } ${
          isActive
            ? "border-primary bg-primary text-cream"
            : "border-cream-line bg-surface text-ink-soft hover:border-gold hover:text-primary"
        }`}
      >
        <span>{tab}</span>
        <span
          className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
            isActive ? "bg-white/20 text-cream" : "bg-cream-deep text-ink-soft"
          }`}
        >
          {countFor(tab)}
        </span>
      </button>
    );
  });

  const productGrid = filtered.length ? (
    <div
      key={active}
      className={compact ? "grid gap-5 sm:grid-cols-2 lg:grid-cols-3" : "grid gap-6 sm:grid-cols-2"}
    >
      {filtered.map((product, i) => (
        <Reveal key={product.slug} delay={(i % 3) * 90} className="h-full">
          <ProductCard
            product={product}
            compact={compact}
            onQuickView={(p) => setQuickViewProduct(p)}
          />
        </Reveal>
      ))}
    </div>
  ) : (
    <ProductsComingSoon isCustom={active === "Custom Specifications"} />
  );

  if (compact) {
    return (
      <div className="flex flex-col gap-10">
        <nav aria-label="Product categories" className="flex flex-wrap justify-center gap-2.5">
          {tabButtons}
        </nav>
        {productGrid}
        <ProductQuickView product={quickViewProduct} onClose={() => setQuickViewProduct(null)} />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-[minmax(0,1fr)] gap-10 lg:grid-cols-[16rem_minmax(0,1fr)] lg:gap-14">
      <aside className="flex flex-col gap-8 lg:sticky lg:top-28 lg:self-start">
        <nav
          aria-label="Product categories"
          className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0"
        >
          {tabButtons}
        </nav>

        <div className="hidden flex-col gap-4 rounded-3xl border border-gold/30 bg-primary-tint/50 p-6 lg:flex">
          <div className="flex flex-col gap-1.5">
            <h3 className="font-display text-lg text-ink">Quick Enquiry</h3>
            <p className="text-sm leading-relaxed text-ink-soft">
              Pick a variety and we will open a WhatsApp conversation with your enquiry.
            </p>
          </div>
          <label className="flex flex-col gap-1.5 text-xs font-semibold uppercase tracking-wide text-ink-soft">
            Variety
            <select
              value={enquiryName}
              onChange={(e) => setEnquiryName(e.target.value)}
              className="rounded-xl border border-cream-line bg-surface px-3 py-2.5 text-sm font-normal normal-case tracking-normal text-ink focus:border-primary focus:outline-none"
            >
              {products.map((p) => (
                <option key={p.slug} value={p.name}>
                  {p.name}
                </option>
              ))}
            </select>
          </label>
          <Button
            href={whatsappLink(productEnquiryMessage(enquiryName))}
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            size="md"
            className="justify-center"
            icon={<WhatsAppIcon className="h-4 w-4" />}
          >
            Enquire on WhatsApp
          </Button>
        </div>
      </aside>

      <div className="flex min-w-0 flex-col gap-8">
        <div className="flex flex-col gap-2 border-b border-cream-line pb-6">
          <h2 className="font-display text-3xl text-ink sm:text-4xl">
            {active === "All" ? "All Varieties" : active}
          </h2>
          {filtered.length ? (
            <p className="text-sm text-ink-soft">
              {filtered.length} {filtered.length === 1 ? "variety" : "varieties"} listed
            </p>
          ) : null}
        </div>

        {productGrid}
      </div>

      <ProductQuickView product={quickViewProduct} onClose={() => setQuickViewProduct(null)} />
    </div>
  );
}
