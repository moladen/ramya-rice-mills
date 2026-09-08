export type InfrastructureArea = {
  key: string;
  name: string;
  icon: "factory" | "gear" | "warehouse" | "package" | "flask" | "truck";
  description: string;
};

export const INFRASTRUCTURE_AREAS: InfrastructureArea[] = [
  {
    key: "factory",
    name: "Manufacturing Facility",
    icon: "factory",
    description:
      "A dedicated rice milling facility set up to handle sorting, milling, and packaging under one roof.",
  },
  {
    key: "machinery",
    name: "Modern Machinery",
    icon: "gear",
    description:
      "Milling and sorting equipment aimed at consistent output and reduced grain breakage.",
  },
  {
    key: "processing",
    name: "Rice Processing",
    icon: "gear",
    description:
      "A structured processing line covering cleaning, de-stoning, milling, and polishing stages.",
  },
  {
    key: "storage",
    name: "Storage & Warehousing",
    icon: "warehouse",
    description:
      "Storage areas designed to protect paddy and finished rice stock ahead of dispatch.",
  },
  {
    key: "packaging",
    name: "Packaging Unit",
    icon: "package",
    description:
      "Packaging lines covering retail, wholesale, and export-ready formats.",
  },
  {
    key: "quality-control",
    name: "Quality Control Area",
    icon: "flask",
    description:
      "A dedicated area for batch checks before rice is approved for packaging and dispatch.",
  },
];
