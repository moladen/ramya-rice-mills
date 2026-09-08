export type ProcessStep = {
  step: number;
  name: string;
  description: string;
};

export const QUALITY_PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    name: "Sourcing",
    description:
      "Paddy is sourced from selected growing regions with attention to variety and grain condition.",
  },
  {
    step: 2,
    name: "Processing",
    description:
      "Paddy moves through milling to separate husk and bran from the rice grain.",
  },
  {
    step: 3,
    name: "Cleaning",
    description:
      "Cleaning stages remove dust, stones, and foreign matter before further processing.",
  },
  {
    step: 4,
    name: "Grading",
    description:
      "Grains are sorted by size and quality to keep each batch consistent.",
  },
  {
    step: 5,
    name: "Quality Testing",
    description:
      "Batches are checked against internal quality parameters before approval.",
  },
  {
    step: 6,
    name: "Packaging",
    description:
      "Approved rice is packed in formats suited to retail, wholesale, HORECA, or export orders.",
  },
  {
    step: 7,
    name: "Final Inspection",
    description:
      "A final check confirms packaging integrity and order accuracy before dispatch.",
  },
  {
    step: 8,
    name: "Dispatch",
    description:
      "Orders are dispatched and coordinated with logistics partners for on-time delivery.",
  },
];
