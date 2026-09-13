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
    email: "enquiries@ramyaricemills.example", // PLACEHOLDER — replace with official business email once client confirms
    addressLines: [
      "Ramya Rice Mills LLP",
      "Kh. No. 905/2, Bhitri",
      "Tikamgarh, Madhya Pradesh, Niwari",
      "472442, India",
    ],
    mapEmbedSrc: "", // PLACEHOLDER — add Google Maps embed URL once factory location is confirmed
  },
  social: {
    linkedin: "", // PLACEHOLDER
    instagram: "", // PLACEHOLDER
    facebook: "", // PLACEHOLDER
  },
} as const;

// IMPORTANT: statistics must never be invented. These are structural
// placeholders only — replace `value` with confirmed figures before launch.
export const STATS = [
  { value: "XX+", label: "Years of Experience", placeholder: true },
  { value: "XX,XXX MT", label: "Annual Production Capacity", placeholder: true },
  { value: "XX+", label: "Rice Varieties", placeholder: true },
  { value: "XX+", label: "Countries / Markets Served", placeholder: true },
] as const;
