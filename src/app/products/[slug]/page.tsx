import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Visual } from "@/components/ui/Visual";
import { Badge } from "@/components/ui/Badge";
import { CTASection } from "@/components/ui/CTASection";
import { ProductCard } from "@/components/ui/ProductCard";
import { GrainIcon, LeafIcon, WheatIcon, ChevronRightIcon, CheckIcon, WhatsAppIcon } from "@/components/icons";
import { PRODUCTS, getProductBySlug } from "@/data/products";
import { whatsappLink, productEnquiryMessage } from "@/lib/whatsapp";
import { buildMetadata } from "@/lib/seo";

const ICONS = { grain: GrainIcon, leaf: LeafIcon, wheat: WheatIcon };

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product Not Found" };
  return buildMetadata({
    title: product.name,
    description: product.shortDescription,
    path: `/products/${product.slug}`,
    image: product.image,
  });
}

export default async function ProductDetailPage({ params }: { params: Params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const Icon = ICONS[product.icon];
  const related = PRODUCTS.filter((p) => p.slug !== product.slug && p.category === product.category).slice(0, 3);

  return (
    <>
      <section className="border-b border-cream-line bg-cream-deep py-6">
        <Container>
          <nav className="flex items-center gap-2 text-xs text-ink-soft">
            <Link href="/products" className="hover:text-primary">Products</Link>
            <ChevronRightIcon className="h-3.5 w-3.5" />
            <span className="text-ink">{product.name}</span>
          </nav>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <Visual
              icon={Icon}
              ratio="aspect-square"
              photo={product.image}
              alt={`${product.name} grains`}
              priority
            />
          </Reveal>
          <Reveal delay={100} className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
                  {product.category}
                </span>
                {product.badge ? (
                  <span className="rounded-full border border-gold/40 bg-primary-tint px-3 py-0.5 text-xs font-semibold text-primary">
                    {product.badge}
                  </span>
                ) : null}
              </div>
              <h1 className="font-display text-3xl text-ink sm:text-4xl">{product.name}</h1>
              {product.placeholder ? <Badge tone="pending">Sample product — confirm details before launch</Badge> : null}
              <p className="text-base leading-relaxed text-ink-soft">{product.description}</p>
            </div>

            <div className="grid grid-cols-2 gap-4 rounded-2xl border border-cream-line bg-surface p-6">
              {product.specs.map((spec) => (
                <div key={spec.label} className="flex flex-col gap-1">
                  <span className="text-xs uppercase tracking-wide text-ink-faint">{spec.label}</span>
                  <span className="text-sm font-medium text-ink">{spec.value}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-ink">Packaging Options</h2>
              <div className="flex flex-wrap gap-2">
                {product.packaging.map((p) => (
                  <span key={p} className="rounded-full bg-primary-tint px-3 py-1 text-xs font-medium text-primary">
                    {p}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-ink">Applications</h2>
              <ul className="flex flex-col gap-2">
                {product.applications.map((a) => (
                  <li key={a} className="flex items-center gap-2 text-sm text-ink-soft">
                    <CheckIcon className="h-4 w-4 text-primary" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-4 pt-2 sm:flex-row">
              <Button href="/contact" variant="primary" size="lg" className="justify-center">
                Request a Quote
              </Button>
              <Button
                href={whatsappLink(productEnquiryMessage(product.name))}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                size="lg"
                className="justify-center"
                icon={<WhatsAppIcon className="h-5 w-5" />}
              >
                Enquire on WhatsApp
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      {related.length ? (
        <section className="bg-cream-deep py-20 sm:py-24">
          <Container className="flex flex-col gap-10">
            <h2 className="font-display text-2xl text-ink">More from {product.category}</h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p, i) => (
                <Reveal key={p.slug} delay={(i % 3) * 130} className="h-full product-pop">
                  <ProductCard product={p} index={i} />
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      <CTASection />
    </>
  );
}
