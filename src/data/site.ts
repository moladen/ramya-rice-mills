// Central place for client-specific facts. Everything marked PLACEHOLDER must
// be confirmed by Ramya Rice Mills LLP before this site goes live — do not
// invent real figures, certifications, or contact details.
//
// Phone, WhatsApp, and address were confirmed by the client on 2026-09-07 —
// do not alter these without new client confirmation.

export const SITE = {
  // Primary brand name used across marketing copy, headings, and metadata —
  // per client feedback, "LLP"/"Mills" should not be emphasized outside
  // genuinely legal/formal contexts (footer copyright, postal address).
  name: "Ramya Rice",
  legalName: "Ramya Rice Mills LLP",
  tagline: "Rooted in India, Reaching the World",
  shortDescription:
    "Ramya Rice is a rice manufacturing and export business focused on consistent quality, modern processing, and dependable supply for domestic and international B2B markets.",
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

// IMPORTANT: these values are illustrative placeholders only, picked to fill
// the layout (and let AnimatedCounter's count-up actually run) while real
// figures are pending. `placeholder: true` keeps the "pending confirmation"
// badge visible on each card — do not remove that flag, and do not let these
// numbers ship at launch without the client confirming real figures.
export const STATS = [
  { value: "15+", label: "Years of Experience", placeholder: true },
  { value: "25,000 MT", label: "Annual Production Capacity", placeholder: true },
  { value: "12+", label: "Rice Varieties", placeholder: true },
  { value: "18+", label: "Countries / Markets Served", placeholder: true },
] as const;
