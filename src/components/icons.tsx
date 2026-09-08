import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function GrainIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 2c3 3 4.5 6.5 4.5 10a4.5 4.5 0 0 1-9 0C7.5 8.5 9 5 12 2Z" />
      <path d="M12 12v10" />
    </svg>
  );
}

export function LeafIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M20 4c.6 7-2 13-8 16-6-3-8.6-9-8-16 7-1 12-1 16 0Z" />
      <path d="M8 20c2-4 4-8 10-13" />
    </svg>
  );
}

export function WheatIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3v18" />
      <path d="M12 6 9 4M12 6l3-2" />
      <path d="M12 10 9 8m3 2 3-2" />
      <path d="M12 14 9 12m3 2 3-2" />
      <path d="M12 18 9 16m3 2 3-2" />
    </svg>
  );
}

export function FactoryIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 21V11l5 3v-3l5 3V8l6 4v9H3Z" />
      <path d="M8 21v-4M13 21v-4M18 21v-4" />
    </svg>
  );
}

export function GearIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="3.2" />
      <path d="M12 3v2.2M12 18.8V21M21 12h-2.2M5.2 12H3M18.4 5.6l-1.6 1.6M7.2 16.8l-1.6 1.6M18.4 18.4l-1.6-1.6M7.2 7.2 5.6 5.6" />
    </svg>
  );
}

export function WarehouseIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 10 12 4l9 6v10H3V10Z" />
      <path d="M9 20v-6h6v6" />
    </svg>
  );
}

export function PackageIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M21 8 12 3 3 8v8l9 5 9-5V8Z" />
      <path d="M3 8l9 5 9-5M12 13v8" />
    </svg>
  );
}

export function FlaskIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M9 3h6M10 3v6l-5.5 9.5A1.5 1.5 0 0 0 5.8 21h12.4a1.5 1.5 0 0 0 1.3-2.5L14 9V3" />
      <path d="M7.5 15h9" />
    </svg>
  );
}

export function TruckIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 7h11v10H3z" />
      <path d="M14 10h4l3 3v4h-7z" />
      <circle cx="7.5" cy="18" r="1.6" />
      <circle cx="17.5" cy="18" r="1.6" />
    </svg>
  );
}

export function GlobeIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3Z" />
    </svg>
  );
}

export function ShieldCheckIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3l7 3v6c0 4.5-3 7.7-7 9-4-1.3-7-4.5-7-9V6l7-3Z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

export function StoreIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 9 5 4h14l1 5M4 9h16M4 9v11h16V9M9 20v-6h6v6" />
    </svg>
  );
}

export function CartIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 4h2l2.4 12.2a2 2 0 0 0 2 1.8h7.2a2 2 0 0 0 2-1.6L20 8H6" />
      <circle cx="9" cy="21" r="1.3" />
      <circle cx="17" cy="21" r="1.3" />
    </svg>
  );
}

export function ChefIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 12a3 3 0 0 1 1-5.6 3.5 3.5 0 0 1 6.6-1.6A3 3 0 0 1 18 9a3 3 0 0 1-1 5.8" />
      <path d="M6 12h12v3a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3v-3Z" />
      <path d="M9 21h6" />
    </svg>
  );
}

export function BoxesIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 14l4.5-2.5L12 14l-4.5 2.5L3 14Z" />
      <path d="M3 14v4.5l4.5 2.5M12 14v4.5l-4.5 2.5" />
      <path d="M12 14l4.5-2.5L21 14l-4.5 2.5L12 14Z" />
      <path d="M12 14v4.5l4.5 2.5M21 14v4.5l-4.5 2.5" />
      <path d="M7.5 8 12 5.5 16.5 8 12 10.5 7.5 8Z" />
    </svg>
  );
}

export function TagIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12.6 3H5a2 2 0 0 0-2 2v7.6a2 2 0 0 0 .6 1.4l9 9a2 2 0 0 0 2.8 0l6.2-6.2a2 2 0 0 0 0-2.8l-9-9a2 2 0 0 0-1-.6Z" />
      <circle cx="8.5" cy="8.5" r="1.4" />
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 4h3.2l1.4 4.2-2 1.6a12 12 0 0 0 5.6 5.6l1.6-2 4.2 1.4V18a2 2 0 0 1-2.2 2A16 16 0 0 1 3 5.2 2 2 0 0 1 5 4Z" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 6.5 8 6 8-6" />
    </svg>
  );
}

export function MapPinIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s7-6.1 7-11.5A7 7 0 0 0 5 9.5C5 14.9 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.4" />
    </svg>
  );
}

export function WhatsAppIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M17.5 14.4c-.3-.1-1.7-.9-2-1-.3-.1-.5-.1-.7.1s-.8 1-1 1.2c-.2.2-.4.2-.7.1-.3-.1-1.4-.5-2.6-1.6-1-.9-1.6-2-1.8-2.3-.2-.3 0-.5.1-.6.1-.1.3-.4.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5C9.4 8.6 9 7.6 8.8 7.2c-.2-.4-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.2-.9.9-.9 2.2s1 2.6 1.1 2.8c.1.2 2 3 4.8 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.3.2-.6.2-1.1.2-1.2-.1-.2-.3-.2-.6-.4Z" />
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2Zm0 1.8a8.2 8.2 0 0 1 6.9 12.6l-.3.5.7 2.6-2.7-.7-.5.3A8.2 8.2 0 1 1 12 3.8Z" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function ChevronRightIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m9 6 6 6-6 6" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m5 12 5 5L20 7" />
    </svg>
  );
}

export function ArrowUpRightIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

export function ICONS_BY_KEY_FACTORY_LOOKUP() {
  // helper map used by data-driven cards
  return {
    grain: GrainIcon,
    leaf: LeafIcon,
    wheat: WheatIcon,
    factory: FactoryIcon,
    gear: GearIcon,
    warehouse: WarehouseIcon,
    package: PackageIcon,
    flask: FlaskIcon,
    truck: TruckIcon,
    globe: GlobeIcon,
    shield: ShieldCheckIcon,
    store: StoreIcon,
    cart: CartIcon,
    chef: ChefIcon,
    boxes: BoxesIcon,
    tag: TagIcon,
  } as const;
}
