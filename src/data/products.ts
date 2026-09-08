export type ProductCategory = "Basmati Rice" | "Non-Basmati Rice" | "Other Rice Varieties";

export type Product = {
  slug: string;
  name: string;
  category: ProductCategory;
  icon: "grain" | "leaf" | "wheat";
  image: string;
  badge?: string;
  shortDescription: string;
  description: string;
  specs: { label: string; value: string }[];
  packaging: string[];
  applications: string[];
  placeholder: boolean;
};

// Sample catalogue structure — replace names, specs, and copy with the
// client's actual product line once confirmed. Left in place so the grid,
// filters, and detail template can be reviewed with realistic content.
export const PRODUCTS: Product[] = [
  {
    slug: "premium-basmati-rice",
    name: "Premium Basmati Rice",
    category: "Basmati Rice",
    icon: "grain",
    image: "/images/products/premium-basmati.jpg",
    badge: "Aged 24 Months • Extra Long",
    shortDescription: "Long-grain aromatic basmati, aged for extra length and fragrance.",
    description:
      "An extra-long grain basmati positioned for premium retail and export shelves. Aged to improve aroma, cooked-grain elongation, and texture. Placeholder copy — replace with the client's actual grade and sourcing details.",
    specs: [
      { label: "Grain Type", value: "Extra-Long Grain" },
      { label: "Average Length", value: "8.35 mm (Aged)" },
      { label: "Aging", value: "24 months" },
      { label: "Moisture", value: "12.5% max" },
    ],
    packaging: ["5 kg", "10 kg", "25 kg", "Bulk / Jumbo Bags"],
    applications: ["Retail Packs", "HORECA", "Export Shipments"],
    placeholder: true,
  },
  {
    slug: "steam-basmati-rice",
    name: "Steam Basmati Rice",
    category: "Basmati Rice",
    icon: "grain",
    image: "/images/products/steam-basmati.jpg",
    badge: "Golden Steam • Firm Texture",
    shortDescription: "Steam-processed basmati offering firm texture and non-sticky grains.",
    description:
      "Steam processing locks in nutrients and delivers separate, non-sticky grains after cooking — well suited to bulk catering and HORECA kitchens. Placeholder copy — confirm processing details with the client.",
    specs: [
      { label: "Grain Type", value: "Long Grain, Steamed" },
      { label: "Average Length", value: "8.20 mm" },
      { label: "Broken %", value: "1% max" },
      { label: "Moisture", value: "12% max" },
    ],
    packaging: ["25 kg", "50 kg", "Bulk / Jumbo Bags"],
    applications: ["Wholesale", "HORECA", "Bulk Supply"],
    placeholder: true,
  },
  {
    slug: "sona-masoori-rice",
    name: "Sona Masoori Rice",
    category: "Non-Basmati Rice",
    icon: "leaf",
    image: "/images/products/sona-masoori.jpg",
    badge: "Aromatic • Everyday Classic",
    shortDescription: "Lightweight, medium-grain rice popular for everyday household cooking.",
    description:
      "A lightweight, aromatic medium-grain rice widely used in South Indian households and restaurants. Placeholder copy — replace with verified sourcing region and grade information.",
    specs: [
      { label: "Grain Type", value: "Medium Grain" },
      { label: "Polish", value: "Silky Polish / Raw" },
      { label: "Broken %", value: "3% max" },
      { label: "Moisture", value: "13% max" },
    ],
    packaging: ["5 kg", "10 kg", "25 kg", "Bulk / Jumbo Bags"],
    applications: ["Retail Packs", "Wholesale", "HORECA"],
    placeholder: true,
  },
  {
    slug: "ir64-non-basmati-rice",
    name: "IR64 Non-Basmati Rice",
    category: "Non-Basmati Rice",
    icon: "leaf",
    image: "/images/products/ir64-rice.jpg",
    badge: "High Yield • Bulk Export",
    shortDescription: "High-yield, cost-efficient long-grain rice for bulk and export orders.",
    description:
      "A dependable long-grain variety favoured for large-volume institutional and export orders where consistent supply and cost-efficiency matter most. Placeholder copy — confirm grade specifications with the client.",
    specs: [
      { label: "Grain Type", value: "Long Grain Raw / Parboiled" },
      { label: "Broken %", value: "5% / 25% Sortex" },
      { label: "Moisture", value: "14% max" },
      { label: "Admixture", value: "1% max" },
    ],
    packaging: ["25 kg", "50 kg", "Bulk / Jumbo Bags", "Container Loads"],
    applications: ["Export Supply", "Bulk Supply", "Wholesale"],
    placeholder: true,
  },
  {
    slug: "ponni-rice",
    name: "Ponni Rice",
    category: "Other Rice Varieties",
    icon: "wheat",
    image: "/images/products/sona-masoori.jpg",
    badge: "Traditional South Indian Soft Grain",
    shortDescription: "Short, sturdy grains with a soft texture — a South Indian staple.",
    description:
      "A short-grain variety valued for its soft texture once cooked, widely used across South Indian kitchens and eateries. Placeholder copy — replace with the client's actual product notes.",
    specs: [
      { label: "Grain Type", value: "Short Grain Boiled" },
      { label: "Polish", value: "Double Polished" },
      { label: "Broken %", value: "2% max" },
      { label: "Moisture", value: "13% max" },
    ],
    packaging: ["5 kg", "10 kg", "25 kg"],
    applications: ["Retail Packs", "HORECA"],
    placeholder: true,
  },
  {
    slug: "brown-rice",
    name: "Brown Rice",
    category: "Other Rice Varieties",
    icon: "wheat",
    image: "/images/products/brown-rice.jpg",
    badge: "100% Whole Grain • Nutrient Rich",
    shortDescription: "Minimally milled whole-grain rice for health-focused product lines.",
    description:
      "Whole-grain rice with the bran layer retained, positioned for health-conscious retail and private-label ranges. Placeholder copy — confirm variety and nutritional claims with the client before publishing.",
    specs: [
      { label: "Grain Type", value: "Whole Grain Unpolished" },
      { label: "Fiber", value: "High Fiber Natural" },
      { label: "Broken %", value: "2% max" },
      { label: "Moisture", value: "12% max" },
    ],
    packaging: ["1 kg", "5 kg", "25 kg"],
    applications: ["Retail Packs", "Private Label"],
    placeholder: true,
  },
];

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  "Basmati Rice",
  "Non-Basmati Rice",
  "Other Rice Varieties",
];

export function getProductBySlug(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug);
}
