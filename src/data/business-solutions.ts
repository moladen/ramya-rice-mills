export type BusinessSolution = {
  key: string;
  name: string;
  icon: "store" | "cart" | "chef" | "boxes" | "globe" | "tag";
  summary: string;
  points: string[];
};

export const BUSINESS_SOLUTIONS: BusinessSolution[] = [
  {
    key: "wholesale",
    name: "Wholesale Supply",
    icon: "store",
    summary:
      "Consistent, grade-wise rice supply for wholesale distributors and regional traders.",
    points: [
      "Grade-consistent stock across ordering cycles",
      "Flexible order volumes for repeat distributors",
      "Dedicated point of contact for trade partners",
    ],
  },
  {
    key: "retail",
    name: "Retail Supply",
    icon: "cart",
    summary:
      "Packaged rice ready for retail shelves, sized for everyday household purchase.",
    points: [
      "Shelf-ready pack sizes",
      "Consistent grain quality across batches",
      "Packaging options suited to modern trade",
    ],
  },
  {
    key: "horeca",
    name: "HORECA",
    icon: "chef",
    summary:
      "Reliable bulk rice for hotels, restaurants, caterers, and institutional kitchens.",
    points: [
      "Bulk pack formats for kitchen use",
      "Stable texture and cooking behaviour",
      "Recurring supply schedules on request",
    ],
  },
  {
    key: "bulk-supply",
    name: "Bulk Supply",
    icon: "boxes",
    summary: "Large-volume rice supply for institutional buyers and processors.",
    points: [
      "Jumbo bag and container-load quantities",
      "Batch-wise quality documentation on request",
      "Planned dispatch aligned to buyer schedules",
    ],
  },
  {
    key: "export",
    name: "Export Supply",
    icon: "globe",
    summary:
      "Export-ready rice supply for international B2B buyers and importers.",
    points: [
      "Export packaging and documentation support",
      "Container-load and part-container options",
      "Coordination with freight and logistics partners",
    ],
  },
  {
    key: "private-label",
    name: "Private Label",
    icon: "tag",
    summary:
      "Private-label packaging for brands that want to sell rice under their own name.",
    points: [
      "Custom packaging on request",
      "Grade and pack-size flexibility",
      "Available on a case-by-case basis — enquire for details",
    ],
  },
];
