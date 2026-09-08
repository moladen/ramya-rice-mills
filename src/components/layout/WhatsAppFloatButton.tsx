import { WhatsAppIcon } from "@/components/icons";
import { whatsappLink, GENERAL_ENQUIRY_MESSAGE } from "@/lib/whatsapp";

export function WhatsAppFloatButton() {
  return (
    <a
      href={whatsappLink(GENERAL_ENQUIRY_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_28px_-8px_rgba(37,211,102,0.55)] transition-transform duration-300 hover:scale-105"
    >
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366]/40 group-hover:animate-none" />
      <WhatsAppIcon className="relative h-6 w-6" />
    </a>
  );
}
