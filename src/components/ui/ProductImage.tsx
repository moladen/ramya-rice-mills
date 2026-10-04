import Image from "next/image";
import { GrainIcon, LeafIcon, WheatIcon } from "@/components/icons";

const ICONS = { grain: GrainIcon, leaf: LeafIcon, wheat: WheatIcon };

/**
 * Drop-in replacement for a fill-style product `<Image>`. Falls back to a
 * premium gradient + icon "Coming Soon" treatment (matching the Visual
 * component's established look) when `product.image` is empty, instead of
 * requesting a broken/missing file or showing a stock photo of someone
 * else's packaging as if it were a real Ramya Rice product.
 */
export function ProductImage({
  product,
  priority,
  sizes,
  className = "",
}: {
  product: { image: string; name: string; icon: "grain" | "leaf" | "wheat" };
  priority?: boolean;
  sizes: string;
  className?: string;
}) {
  if (!product.image) {
    const Icon = ICONS[product.icon];
    return (
      <div className="bg-grain absolute inset-0 flex flex-col items-center justify-center gap-2.5 bg-gradient-to-br from-cream-deep via-cream to-cream-line text-primary">
        <span className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/20 bg-white/50 backdrop-blur-sm">
          <Icon className="h-6 w-6" strokeWidth={1.3} />
        </span>
        <span className="px-4 text-center text-[0.62rem] font-semibold uppercase tracking-[0.18em] opacity-70">
          Product Image Coming Soon
        </span>
      </div>
    );
  }

  return (
    <Image
      src={product.image}
      alt={product.name}
      fill
      priority={priority}
      sizes={sizes}
      className={className}
    />
  );
}
