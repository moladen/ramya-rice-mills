// Leadership profiles — every field here is sourced directly from customer-
// supplied information. Do not add photographs, achievements, companies, or
// biography details beyond what the client has confirmed.

export type LeadershipProfile = {
  key: string;
  name: string;
  title: string;
  qualifications: string[];
  experience: string[];
  bio: string[];
};

export const LEADERSHIP: LeadershipProfile[] = [
  {
    key: "rajpal-singh",
    name: "Mr. Rajpal Singh",
    title: "Founder & Managing Director",
    qualifications: ["B.E. Civil"],
    experience: [
      "Background in agriculture and the Bundelkhand region",
      "12+ years of entrepreneurial experience in civil infrastructure",
    ],
    bio: [
      "Mr. Rajpal Singh is a Founder and Managing Director of Ramya Rice Mills LLP. He holds a B.E. in Civil.",
      "His roots are in agriculture and the Bundelkhand region, the same region from which Ramya Rice sources its paddy.",
      "He brings more than 12 years of entrepreneurial experience in civil infrastructure to the business.",
    ],
  },
  {
    key: "vivek-rusia",
    name: "Mr. Vivek Rusia",
    title: "Founder & Managing Director",
    qualifications: ["B.E. CSE", "MBA"],
    experience: [
      "20+ years of experience across India, the UK and Germany",
      "International business and professional experience",
      "Professional career in Germany",
      "Multiple ventures",
    ],
    bio: [
      "Mr. Vivek Rusia is a Founder and Managing Director of Ramya Rice Mills LLP, with more than 20 years of experience across India, the United Kingdom and Germany.",
      "He holds a B.E. in CSE and an MBA. His professional career includes time in Germany, alongside international business experience.",
      "He has also been involved in multiple ventures. Ramya Rice's global ambition builds on this international experience.",
    ],
  },
];
