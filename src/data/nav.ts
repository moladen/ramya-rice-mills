export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Infrastructure", href: "/infrastructure" },
  { label: "Quality & Process", href: "/quality-process" },
  { label: "Exports", href: "/exports" },
  { label: "Business Solutions", href: "/business-solutions" },
  { label: "Certifications", href: "/certifications" },
  { label: "Contact Us", href: "/contact" },
] as const;

export type HeaderNavItem = {
  label: string;
  href: string;
  children?: {
    label: string;
    href: string;
    description: string;
  }[];
};

export const HEADER_NAV: HeaderNavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products" },
  {
    label: "Quality & Facility",
    href: "/infrastructure",
    children: [
      {
        label: "Processing Infrastructure",
        href: "/infrastructure",
        description: "Modern milling plant, automated silos & conveyor systems",
      },
      {
        label: "Quality & Standards",
        href: "/quality-process",
        description: "Multi-stage grading, optical Sortexing & lab quality testing",
      },
      {
        label: "Certifications & Compliance",
        href: "/certifications",
        description: "Food safety standards & global export accreditations",
      },
    ],
  },
  {
    label: "B2B & Exports",
    href: "/exports",
    children: [
      {
        label: "Global Export Capabilities",
        href: "/exports",
        description: "Ocean freight, container loads & international documentation",
      },
      {
        label: "Business Solutions",
        href: "/business-solutions",
        description: "Private labeling, wholesale packing & institutional supply",
      },
    ],
  },
  { label: "Contact Us", href: "/contact" },
];

