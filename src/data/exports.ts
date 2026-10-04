import type { ProcessStep } from "@/data/quality-process";

// Regions only, per customer feedback — no specific countries are named or
// implied as confirmed export destinations.
export const EXPORT_REGIONS = [
  "Asia",
  "Middle East",
  "Africa",
  "Europe",
  "North America",
  "Other International Markets",
] as const;

export const EXPORT_PROCESS_STEPS: ProcessStep[] = [
  { step: 1, name: "Requirement", description: "Buyer shares the rice variety, specification, and quantity required." },
  { step: 2, name: "Product Matching", description: "We match the requirement to the right product and grade." },
  { step: 3, name: "Sample & Approval", description: "A sample is shared for buyer review and approval." },
  { step: 4, name: "Commercial Agreement", description: "Terms, pricing, and quantities are agreed between both parties." },
  { step: 5, name: "Production & Packing", description: "Rice is processed and packed to the agreed specification." },
  { step: 6, name: "Documentation", description: "Export documentation is prepared for the shipment." },
  { step: 7, name: "Logistics", description: "Shipment is coordinated with freight and logistics partners." },
  { step: 8, name: "Shipment", description: "The order is dispatched and tracked through to delivery." },
];
