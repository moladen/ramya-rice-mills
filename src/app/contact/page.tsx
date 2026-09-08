import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Visual } from "@/components/ui/Visual";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { PhoneIcon, MailIcon, MapPinIcon, WhatsAppIcon } from "@/components/icons";
import { SITE } from "@/data/site";
import { whatsappLink, GENERAL_ENQUIRY_MESSAGE } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Ramya Rice for wholesale, retail, HORECA, bulk, or export rice enquiries.",
};

const CONTACT_ITEMS = [
  { icon: PhoneIcon, label: "Call Us", value: SITE.contact.phoneDisplay, href: SITE.contact.phoneHref },
  { icon: WhatsAppIcon, label: "WhatsApp", value: SITE.contact.phoneDisplay, href: whatsappLink(GENERAL_ENQUIRY_MESSAGE) },
  { icon: MailIcon, label: "Email", value: SITE.contact.email, href: `mailto:${SITE.contact.email}` },
  { icon: MapPinIcon, label: "Address", value: SITE.contact.addressLines.join(", "), href: undefined },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's Start a Conversation"
        description="Send us your requirement and our team will respond with product options, pricing, and next steps."
      />

      <section className="py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <Reveal className="flex flex-col gap-8">
            <div className="grid gap-5 sm:grid-cols-2">
              {CONTACT_ITEMS.map((item) => (
                <div key={item.label} className="flex flex-col gap-3 rounded-2xl border border-cream-line bg-surface p-6">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-tint text-primary">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wide text-ink-faint">{item.label}</span>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-sm font-medium text-ink hover:text-primary"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-sm font-medium text-ink">{item.value}</span>
                  )}
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-3">
              <Visual icon={MapPinIcon} tone="cream" ratio="aspect-[4/3]" label="Factory Location Map — Placeholder" />
            </div>
          </Reveal>

          <Reveal delay={100} className="rounded-3xl border border-cream-line bg-surface p-6 sm:p-10">
            <h2 className="mb-6 font-display text-2xl text-ink">Business Enquiry Form</h2>
            <EnquiryForm />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
