// IMPORTANT: Do not assume or imply Ramya Rice Mills LLP holds any specific
// certification or registration. These are generic, industry-relevant
// documentation categories for a rice manufacturing and export business —
// not a claim that any one of them is currently held. Replace with the
// client's actual verified certificate details (name, number, validity) once
// confirmed, and remove any category that doesn't apply.

export type CertificationCategory = {
  key: string;
  name: string;
  description: string;
};

export const CERTIFICATION_CATEGORIES: CertificationCategory[] = [
  { key: "fssai", name: "FSSAI", description: "Food safety licensing for food business operators in India." },
  { key: "apeda", name: "APEDA", description: "Registration relevant to the export of agricultural and processed food products from India." },
  { key: "iec", name: "IEC", description: "Import Export Code, required to conduct cross-border trade from India." },
  { key: "iso", name: "ISO", description: "International standards relevant to quality and food safety management." },
];
