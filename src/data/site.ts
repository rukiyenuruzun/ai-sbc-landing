// Tüm sayfa içeriği tek yerden yönetilir; arayüzü tasarlarken sadece burayı doldurmanız yeterli.

export const siteConfig = {
  name: "Velora",
  legalName: "Velora Tech Limited (HK)",
  tagline: "AI hardware, AI software & SBC solutions",
  description:
    "Velora Tech Limited (HK) — a Hong Kong based technology company supplying AI hardware, AI software, single board computers (SBC) and accessories.",
  logo: {
    full: "/velora-logo-full.png", // yatay logo (amblem + yazı)
    mark: "/velora-mark.png", // sadece amblem
    svg: "/velora-logo.svg",
  },
  contact: {
    email: "hello@velora.com.hk",
    address:
      "Unit 2904-05, 29/F, Universal Trade Centre, 3 Arbuthnot Road, Central, Hong Kong",
  },
  // Resmî faaliyet kodları (footer'da gösteriliyor)
  activities: {
    primary: "[460699] Wholesale of machinery and equipment n.e.c. (except furniture)",
    secondary: "[451601] Export trading of computers and computer peripheral equipment",
  },
  socials: [
    { label: "GitHub", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "X", href: "#" },
  ],
};

// Navbar'daki linkler sayfa içi anchor'lara gider (single page).
export const navLinks = [
  { label: "AI Hardware", href: "#ai-hardware" },
  { label: "AI Software", href: "#ai-software" },
  { label: "SBC & Accessories", href: "#sbc" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export type Product = {
  id: string;
  name: string;
  description: string;
  image?: string; // /public altına koyacağınız görselin yolu
  tag?: string; // "New", "Popular" vb.
};

export const aiHardware: Product[] = [
  {
    id: "hw-1",
    name: "AI Accelerator Placeholder",
    description: "Edge AI accelerator card description.",
    tag: "Popular",
  },
  {
    id: "hw-2",
    name: "GPU Module Placeholder",
    description: "High-performance GPU module description.",
  },
  {
    id: "hw-3",
    name: "AI Camera Placeholder",
    description: "Smart camera for computer vision description.",
  },
];

export const aiSoftware: Product[] = [
  {
    id: "sw-1",
    name: "Model Deployment Platform",
    description: "Software for deploying models to edge devices.",
  },
  {
    id: "sw-2",
    name: "Vision SDK",
    description: "Computer vision SDK description.",
  },
  {
    id: "sw-3",
    name: "Custom AI Solutions",
    description: "Tailor-made AI software development services.",
  },
];

export const sbcProducts: Product[] = [
  {
    id: "sbc-1",
    name: "SBC Model Placeholder",
    description: "Single board computer description.",
    tag: "New",
  },
  {
    id: "sbc-2",
    name: "Cooling / Case Accessory",
    description: "SBC accessory description.",
  },
  {
    id: "sbc-3",
    name: "Expansion Board",
    description: "HAT / expansion board description.",
  },
];

export const stats = [
  { value: "100+", label: "Products" },
  { value: "50+", label: "Enterprise Clients" },
  { value: "10+", label: "Years of Experience" },
];
