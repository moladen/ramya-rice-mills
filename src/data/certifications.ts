// IMPORTANT: Do not assume Ramya Rice Mills LLP holds any certification.
// Every entry here is an unverified placeholder slot for common industry
// certifications — swap in the confirmed name, logo, and document once the
// client provides it, and remove any slot that doesn't apply.

export type CertificationSlot = {
  key: string;
  suggestedName: string;
  description: string;
  status: "pending";
};

export const CERTIFICATION_SLOTS: CertificationSlot[] = [
  {
    key: "cert-1",
    suggestedName: "Certification Name — Pending",
    description:
      "e.g. FSSAI license. Awaiting confirmation and documentation from Ramya Rice.",
    status: "pending",
  },
  {
    key: "cert-2",
    suggestedName: "Certification Name — Pending",
    description:
      "e.g. ISO certification. Awaiting confirmation and documentation from Ramya Rice.",
    status: "pending",
  },
  {
    key: "cert-3",
    suggestedName: "Certification Name — Pending",
    description:
      "e.g. APEDA registration. Awaiting confirmation and documentation from Ramya Rice.",
    status: "pending",
  },
];
