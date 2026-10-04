import type { ProcessStep } from "@/data/quality-process";

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
      "Milling and sorting equipment built on Satake technology, aimed at consistent output and reduced grain breakage.",
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

// The detailed step-by-step manufacturing process, as provided by the
// client — shown as a numbered timeline on the Infrastructure page.
export const MANUFACTURING_PROCESS_STEPS: ProcessStep[] = [
  { step: 1, name: "Paddy Intake", description: "Incoming paddy is received at the facility and logged ahead of processing." },
  { step: 2, name: "Pre-Cleaning", description: "Dust, chaff, and lighter foreign matter are removed before further processing." },
  { step: 3, name: "De-Stoning", description: "Stones and dense foreign particles are separated from the paddy." },
  { step: 4, name: "Husking", description: "The outer husk is removed from the paddy grain." },
  { step: 5, name: "Paddy Separation", description: "Husked rice is separated from any remaining unhusked paddy." },
  { step: 6, name: "Milling", description: "Rice is milled on Satake technology to remove bran and polish the grain." },
  { step: 7, name: "Grading", description: "Milled rice is graded by size and grain quality." },
  { step: 8, name: "Optical Sorting", description: "Optical sorting removes discoloured, broken, or foreign grains." },
  { step: 9, name: "Quality Inspection", description: "Batches are inspected against internal quality parameters before packaging." },
  { step: 10, name: "Packaging", description: "Approved rice is packed in formats suited to retail, wholesale, HORECA, or export orders." },
  { step: 11, name: "Final Inspection", description: "A final check confirms packaging integrity and order accuracy before dispatch." },
  { step: 12, name: "Dispatch", description: "Orders are dispatched and coordinated with logistics partners for on-time delivery." },
];
