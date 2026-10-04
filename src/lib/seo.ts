import type { Metadata } from "next";
import { SITE } from "@/data/site";

// Canonical production URL for this site — used for canonical links, sitemap
// entries, and absolute Open Graph/Twitter image URLs.
export const SITE_URL = "https://ramya-rice-mills.vercel.app";

/**
 * Builds a page's Metadata with a consistent canonical URL, Open Graph, and
 * Twitter card, on top of whatever plain title/description the page already
 * sets. The root layout's title template ("%s | Ramya Rice") still applies to
 * the returned `title` for the actual <title> tag — but crawlers reading
 * openGraph/twitter fields need the fully-qualified title spelled out, since
 * Next does not apply the template to those nested fields.
 */
export function buildMetadata({
  title,
  description,
  path = "/",
  image = "/images/logo.png",
  imageWidth = 1024,
  imageHeight = 1024,
}: {
  title?: string;
  description: string;
  path?: string;
  image?: string;
  imageWidth?: number;
  imageHeight?: number;
}): Metadata {
  const url = `${SITE_URL}${path}`;
  const fullTitle = title ? `${title} | ${SITE.name}` : "Ramya Rice Mills | Premium Indian Rice Manufacturer & Exporter";

  return {
    // Omit the key entirely (rather than `title: undefined`) when no title is
    // given — Next.js treats an explicit `undefined` value as "suppress the
    // title", not "inherit the parent layout's default".
    ...(title ? { title } : {}),
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE.name,
      images: [{ url: image, width: imageWidth, height: imageHeight, alt: fullTitle }],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
  };
}
