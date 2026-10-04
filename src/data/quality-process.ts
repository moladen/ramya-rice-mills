export type ProcessStep = {
  step: number;
  name: string;
  description: string;
};

export const QUALITY_PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    name: "Source",
    description:
      "Paddy is identified and sourced from selected growing regions, including Bundelkhand, with attention to variety and grain condition.",
  },
  {
    step: 2,
    name: "Receive",
    description:
      "Incoming paddy is received and logged before moving into processing.",
  },
  {
    step: 3,
    name: "Clean",
    description:
      "Pre-cleaning and de-stoning remove dust, stones, and foreign matter before milling.",
  },
  {
    step: 4,
    name: "Process",
    description:
      "Paddy is milled on Satake technology to separate husk and bran from the rice grain.",
  },
  {
    step: 5,
    name: "Grade & Sort",
    description:
      "Grains are graded and optically sorted by size and quality to keep each batch consistent.",
  },
  {
    step: 6,
    name: "Test",
    description:
      "Batches are checked against internal quality parameters before approval.",
  },
  {
    step: 7,
    name: "Pack",
    description:
      "Approved rice is packed in formats suited to retail, wholesale, HORECA, or export orders.",
  },
  {
    step: 8,
    name: "Dispatch",
    description:
      "Orders are inspected a final time and dispatched, coordinated with logistics partners for on-time delivery.",
  },
];
