import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { PRODUCTS } from "@/data/products";

const STATIC_ROUTES = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/products", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/infrastructure", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/quality-process", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/exports", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/business-solutions", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/certifications", priority: 0.5, changeFrequency: "monthly" as const },
  { path: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries = STATIC_ROUTES.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const productEntries = PRODUCTS.map((product) => ({
    url: `${SITE_URL}/products/${product.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticEntries, ...productEntries];
}
