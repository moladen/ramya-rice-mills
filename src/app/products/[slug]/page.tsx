import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Visual } from "@/components/ui/Visual";
import { Badge } from "@/components/ui/Badge";
import { CTASection } from "@/components/ui/CTASection";
import { ProductEnquiryForm } from "@/components/products/ProductEnquiryForm";
import { GrainIcon, LeafIcon, WheatIcon, ChevronRightIcon, CheckIcon, ArrowUpRightIcon } from "@/components/icons";
import { PRODUCTS, getProductBySlug, type Product } from "@/data/products";
import { buildMetadata, SITE_URL } from "@/lib/seo";
import { SITE } from "@/data/site";

const ICONS = { grain: GrainIcon, leaf: LeafIcon, wheat: WheatIcon };

type Params = Promise<{ slug: string }>;

// Uses only fields already on the product record — no price, availability,
// rating, review, or SKU, since none of that is verified client data yet.
// `image` is omitted entirely (rather than pointing at a blank/wrong URL)
// when no real product photo exists yet.
function buildProductJsonLd(product: Product) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.shortDescription,
    ...(product.image ? { image: `${SITE_URL}${product.image}` } : {}),
    url: `${SITE_URL}/products/${product.slug}`,
    brand: { "@type": "Brand", name: SITE.name },
  };
}

function buildBreadcrumbJsonLd(product: Product) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Products", item: `${SITE_URL}/products` },
      { "@type": "ListItem", position: 3, name: product.name, item: `${SITE_URL}/products/${product.slug}` },
    ],
  };
}

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
    // Falls back to buildMetadata's own default OG image when no real photo
    // exists yet — an empty string would otherwise override that default.
    ...(product.image ? { image: product.image } : {}),
  });
}

export default async function ProductDetailPage({ params }: { params: Params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const Icon = ICONS[product.icon];
  const sharesCategory = (p: Product) => p.categories.some((c) => product.categories.includes(c));
  const others = PRODUCTS.filter((p) => p.slug !== product.slug).sort(
    (a, b) => Number(sharesCategory(b)) - Number(sharesCategory(a))
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildProductJsonLd(product)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildBreadcrumbJsonLd(product)) }}
      />

      <section className="border-b border-cream-line bg-cream-deep py-6">
        <Container>
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-ink-soft">
            <Link href="/" className="hover:text-primary">Home</Link>
            <ChevronRightIcon className="h-3.5 w-3.5" />
            <Link href="/products" className="hover:text-primary">Products</Link>
            <ChevronRightIcon className="h-3.5 w-3.5" />
            <span className="text-ink">{product.name}</span>
          </nav>
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <Reveal>
            <div className="flex flex-col gap-6 lg:sticky lg:top-28">
              <Visual
                icon={Icon}
                ratio="aspect-[4/3]"
                photo={product.image || undefined}
                alt={`${product.name} grains`}
                label="Product Image Coming Soon"
                priority
              />

              <div className="flex flex-col gap-4 rounded-3xl border border-cream-line bg-surface p-6">
                <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Typical Applications</h2>
                <ul className="flex flex-wrap gap-2">
                  {product.applications.map((a) => (
                    <li
                      key={a}
                      className="flex items-center gap-1.5 rounded-full bg-primary-tint px-3 py-1.5 text-xs font-medium text-primary"
                    >
                      <CheckIcon className="h-3.5 w-3.5 shrink-0" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100} className="flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap items-center gap-2">
                {product.categories.map((category) => (
                  <span
                    key={category}
                    className="rounded-full border border-gold/40 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-gold"
                  >
                    {category}
                  </span>
                ))}
              </div>
              <h1 className="font-display text-3xl leading-tight text-ink sm:text-4xl lg:text-[2.75rem]">
                {product.name}
              </h1>
              <div className="flex flex-wrap items-center gap-2">
                {product.badge ? (
                  <span className="rounded-full bg-primary-tint px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-wide text-primary">
                    {product.badge}
                  </span>
                ) : null}
                {product.placeholder ? <Badge tone="pending">Product Details Coming Soon</Badge> : null}
              </div>
              <p className="text-base leading-relaxed text-ink-soft sm:text-lg">{product.description}</p>
            </div>

            <div className="flex flex-col overflow-hidden rounded-3xl border border-cream-line bg-surface">
              <div className="flex flex-col gap-1.5 border-b border-cream-line bg-cream/60 px-6 py-5">
                <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  Specifications
                </h2>
                <p className="text-sm text-ink-soft">
                  Confirmed specifications will be published here once verified by Ramya Rice.
                </p>
              </div>
              <dl className="divide-y divide-cream-line">
                {product.specs.map((spec) => {
                  const pending = spec.value === "Coming Soon";
                  return (
                    <div key={spec.label} className="flex items-center justify-between gap-4 px-6 py-3.5">
                      <dt className="text-sm text-ink-soft">{spec.label}</dt>
                      <dd
                        className={
                          pending
                            ? "rounded-full border border-dashed border-cream-line px-2.5 py-0.5 text-[0.68rem] font-semibold uppercase tracking-wide text-ink-faint"
                            : "text-sm font-medium text-ink"
                        }
                      >
                        {spec.value}
                      </dd>
                    </div>
                  );
                })}
              </dl>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Packaging Options</h2>
              {product.packaging.length ? (
                <div className="flex flex-wrap gap-2">
                  {product.packaging.map((p) => (
                    <span key={p} className="rounded-full bg-primary-tint px-3 py-1 text-xs font-medium text-primary">
                      {p}
                    </span>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-ink-soft">Packaging Details Coming Soon</p>
              )}
            </div>

            <ProductEnquiryForm productName={product.name} />
          </Reveal>
        </Container>
      </section>

      {others.length ? (
        <section className="bg-cream-deep py-20 sm:py-24">
          <Container className="flex flex-col gap-10">
            <div className="flex flex-col gap-2">
              <h2 className="font-display text-2xl text-ink sm:text-3xl">Other Varieties</h2>
              <p className="text-sm text-ink-soft">Explore the rest of the Ramya Rice range.</p>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2">
              {others.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/products/${p.slug}`}
                    className="group flex items-center justify-between gap-4 rounded-2xl border border-cream-line bg-surface px-6 py-5 transition-colors duration-300 hover:border-gold/60"
                  >
                    <span className="flex flex-col gap-1">
                      <span className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-gold">
                        {p.categories[0]}
                      </span>
                      <span className="font-display text-lg text-ink transition-colors group-hover:text-primary">
                        {p.name}
                      </span>
                    </span>
                    <ArrowUpRightIcon className="h-5 w-5 shrink-0 text-primary transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      ) : null}

      <CTASection />
    </>
  );
}
