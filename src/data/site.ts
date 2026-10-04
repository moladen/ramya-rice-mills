// Central place for client-specific facts. Everything marked PLACEHOLDER must
// be confirmed by Ramya Rice Mills LLP before this site goes live — do not
// invent real figures, certifications, or contact details.
//
// Phone, WhatsApp, and address were confirmed by the client on 2026-09-07 —
// do not alter these without new client confirmation.

export const SITE = {
  // Primary brand name used across marketing copy, headings, and metadata —
  // per client feedback, "LLP"/"Mills" should not be emphasized outside
  // genuinely legal/formal contexts (footer copyright, postal address, SEO title).
  name: "Ramya Rice",
  legalName: "Ramya Rice Mills LLP",
  tagline: "Rooted in India, Reaching the World",
  // Brand philosophy line, per customer-approved positioning — used verbatim
  // across Home, About, and Quality & Process.
  philosophy: "Respect the grain. Control the process. Deliver consistently.",
  // Primary brand story line, per customer-approved positioning — paired with
  // the Field → Farmers/Procurement → Processing → Satake Technology →
  // People & Process → International Experience → World Markets journey.
  brandStory: "Our Grain. Our Roots. Our World.",
  shortDescription:
    "Ramya Rice is a modern Indian rice business sourcing from Bundelkhand and processing on Satake technology, for disciplined quality and reliable B2B supply.",
  contact: {
    phoneDisplay: "+91 99118 95555",
    phoneHref: "tel:+919911895555",
    whatsappNumber: "919911895555", // digits only, country code first
    addressLines: [
      "Ramya Rice Mills LLP",
      "Kh. No. 905/2, Bhitri",
      "Tikamgarh, Madhya Pradesh, Niwari",
      "472442, India",
    ],
    // Centroid of PIN 472442 (Niwari Tahsil, Niwari, MP) — a plot-level
    // address like "Kh. No. 905/2" can't be geocoded from text alone, so this
    // pins the map to the right locality rather than the exact factory gate.
    // Replace with the client's exact coordinates (e.g. from their Google
    // Business Profile or a GPS reading on-site) once available.
    mapCoords: { lat: 25.3846402, lng: 78.7785124 },
  },
  social: {
    linkedin: "", // PLACEHOLDER
    instagram: "", // PLACEHOLDER
    facebook: "", // PLACEHOLDER
  },
} as const;

// Qualitative positioning statements, per customer feedback — deliberately
// not numeric. Do not replace these with invented figures (years in
// business, production tonnage, variety count, country count, etc.) unless
// the client provides verified numbers.
export const STATS = [
  { value: "Bundelkhand Sourced", label: "Paddy sourced from Bundelkhand" },
  { value: "Satake Technology", label: "Modern milling & processing" },
  { value: "Domestic & Export Markets", label: "Supply reach" },
  { value: "B2B + Online", label: "Channels served" },
] as const;
