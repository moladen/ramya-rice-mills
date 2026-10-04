// Leadership profiles — every field here is sourced directly from customer-
// supplied information. Do not add photographs, achievements, or biography
// details beyond what the client has confirmed.

export type LeadershipProfile = {
  key: string;
  name: string;
  title: string;
  qualification: string;
  highlights: string[];
};

export const LEADERSHIP: LeadershipProfile[] = [
  {
    key: "rajpal-singh",
    name: "Mr. Rajpal Singh",
    title: "Founder & Managing Director",
    qualification: "B.E. Civil",
    highlights: [
      "Background in agriculture and the Bundelkhand region",
      "12+ years of entrepreneurial experience in civil infrastructure",
    ],
  },
  {
    key: "vivek-rusia",
    name: "Mr. Vivek Rusia",
    title: "Founder & Managing Director",
    qualification: "B.E. CSE, MBA",
    highlights: [
      "20+ years of professional experience",
      "Business experience across India, the UK, and Germany",
    ],
  },
];
