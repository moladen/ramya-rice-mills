import { SITE } from "@/data/site";

export function whatsappLink(message: string) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${SITE.contact.whatsappNumber}?text=${encoded}`;
}

export function productEnquiryMessage(productName: string) {
  return `Hello Ramya Rice, I would like to enquire about ${productName}. Could you share pricing, packaging, and MOQ details?`;
}

export const GENERAL_ENQUIRY_MESSAGE =
  "Hello Ramya Rice, I would like to enquire about your rice products and export capabilities.";
