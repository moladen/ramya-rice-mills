export type ProductCategory =
  | "Basmati Rice"
  | "Non-Basmati Rice"
  | "Long-Grain Rice"
  | "Medium-Grain Rice"
  | "Regional Indian Rice"
  | "Parboiled Rice"
  | "Steam Rice"
  | "Raw Rice"
  | "Custom Specifications";

export type Product = {
  slug: string;
  name: string;
  // A product can honestly belong to more than one category (e.g. a
  // long-grain variety is both "Non-Basmati Rice" and "Long-Grain Rice") —
  // categories[0] is the primary one shown as the single badge/label.
  // Every entry here reflects what the product's own description already
  // says; never add a category a product's description doesn't support.
  categories: ProductCategory[];
  icon: "grain" | "leaf" | "wheat";
  // "" = no real, Ramya-owned product photo exists yet. Rendering components
  // show a "Product Image Coming Soon" treatment instead — never a stock/
  // competitor-branded photo (see CLAUDE audit note below).
  image: string;
  badge?: string;
  shortDescription: string;
  description: string;
  // Fixed specification types the client said may apply (grain length,
  // broken %, moisture, purity, sortex, ageing, private label) — every value
  // is "Coming Soon" because none are customer-confirmed yet. Do not fill
  // these with invented numbers; add a real value only once the client
  // confirms it for this product.
  specs: { label: string; value: string }[];
  // Empty = packaging sizes not yet confirmed — rendering components show
  // "Packaging Details Coming Soon" instead of invented pack sizes.
  packaging: string[];
  applications: string[];
  placeholder: boolean;
};

const SPEC_TYPES_PENDING = [
  { label: "Average Grain Length", value: "Coming Soon" },
  { label: "Broken %", value: "Coming Soon" },
  { label: "Moisture", value: "Coming Soon" },
  { label: "Purity", value: "Coming Soon" },
  { label: "Sortex", value: "Coming Soon" },
  { label: "Ageing", value: "Coming Soon" },
  { label: "Private Label", value: "Coming Soon" },
];

// Sample catalogue structure — names and category placement only, pending
// the client's actual product line (the mill is still under construction,
// per the client's own confirmation). No specs, packaging sizes, or photos
// are invented. Earlier product photos here were temporary stock images that
// turned out to carry real/fictional third-party packaging branding
// (including the real "Kohinoor" brand) — removed, since showing another
// company's branding as a Ramya Rice product is not acceptable regardless of
// placeholder status.
export const PRODUCTS: Product[] = [
  {
    slug: "premium-basmati-rice",
    name: "Premium Basmati Rice",
    categories: ["Basmati Rice"],
    icon: "grain",
    image: "",
    badge: "Extra Long Grain",
    shortDescription: "Long-grain aromatic basmati, positioned for premium retail and export shelves.",
    description:
      "An extra-long grain basmati positioned for premium retail and export shelves.",
    specs: SPEC_TYPES_PENDING,
    packaging: [],
    applications: ["Retail Packs", "HORECA", "Export Shipments"],
    placeholder: true,
  },
  {
    slug: "steam-basmati-rice",
    name: "Steam Basmati Rice",
    categories: ["Steam Rice"],
    icon: "grain",
    image: "",
    badge: "Steam Processed",
    shortDescription: "Steam-processed basmati offering firm texture and non-sticky grains.",
    description:
      "Steam processing locks in nutrients and delivers separate, non-sticky grains after cooking, well suited to bulk catering and HORECA kitchens.",
    specs: SPEC_TYPES_PENDING,
    packaging: [],
    applications: ["Wholesale", "HORECA", "Bulk Supply"],
    placeholder: true,
  },
  {
    slug: "sona-masoori-rice",
    name: "Sona Masoori Rice",
    // Also tagged "Medium-Grain Rice" — its own description below already
    // calls it a medium-grain variety, so this isn't a new claim.
    categories: ["Regional Indian Rice", "Medium-Grain Rice"],
    icon: "leaf",
    image: "",
    badge: "Everyday Classic",
    shortDescription: "Lightweight, medium-grain rice popular for everyday household cooking.",
    description:
      "A lightweight, aromatic medium-grain rice widely used in South Indian households and restaurants.",
    specs: SPEC_TYPES_PENDING,
    packaging: [],
    applications: ["Retail Packs", "Wholesale", "HORECA"],
    placeholder: true,
  },
  {
    slug: "ir64-non-basmati-rice",
    name: "IR64 Non-Basmati Rice",
    // Also tagged "Long-Grain Rice" — its own description below already
    // calls it a long-grain variety, so this isn't a new claim.
    categories: ["Non-Basmati Rice", "Long-Grain Rice"],
    icon: "leaf",
    image: "",
    badge: "Bulk & Export",
    shortDescription: "Cost-efficient long-grain rice for bulk and export orders.",
    description:
      "A dependable long-grain variety favoured for large-volume institutional and export orders where consistent supply and cost-efficiency matter most.",
    specs: SPEC_TYPES_PENDING,
    packaging: [],
    applications: ["Export Supply", "Bulk Supply", "Wholesale"],
    placeholder: true,
  },
  {
    slug: "ponni-rice",
    name: "Ponni Rice",
    categories: ["Regional Indian Rice"],
    icon: "wheat",
    image: "",
    badge: "South Indian Staple",
    shortDescription: "Short, sturdy grains with a soft texture, a South Indian staple.",
    description:
      "A short-grain variety valued for its soft texture once cooked, widely used across South Indian kitchens and eateries.",
    specs: SPEC_TYPES_PENDING,
    packaging: [],
    applications: ["Retail Packs", "HORECA"],
    placeholder: true,
  },
  {
    slug: "brown-rice",
    name: "Brown Rice",
    categories: ["Non-Basmati Rice"],
    icon: "wheat",
    image: "",
    badge: "Whole Grain",
    shortDescription: "Minimally milled whole-grain rice for health-focused product lines.",
    description:
      "Whole-grain rice with the bran layer retained, positioned for health-conscious retail and private-label ranges.",
    specs: SPEC_TYPES_PENDING,
    packaging: [],
    applications: ["Retail Packs", "Private Label"],
    placeholder: true,
  },
];

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  "Basmati Rice",
  "Non-Basmati Rice",
  "Long-Grain Rice",
  "Medium-Grain Rice",
  "Regional Indian Rice",
  "Parboiled Rice",
  "Steam Rice",
  "Raw Rice",
  "Custom Specifications",
];

export function getProductBySlug(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug);
}
