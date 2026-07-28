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
  // Geçici görseller — kaynak ve lisanslar: public/images/CREDITS.md
  heroImage: "/images/hero-statue.png",
  contactImage: "/images/contact-hk.jpg",
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

// Hero başlığında dönen kelimeler
export const heroRotatingWords = ["AI Hardware", "AI Software", "Edge Computing", "SBC Systems"];

// Hero altındaki kayan şerit
export const techMarquee = [
  "Edge AI",
  "Computer Vision",
  "LLM Inference",
  "CUDA",
  "RISC-V",
  "ARM",
  "Robotics",
  "IoT",
  "TinyML",
  "NPU",
  "Single Board Computers",
  "Model Deployment",
];

// Navbar'daki linkler sayfa içi anchor'lara gider (single page).
export const navLinks = [
  { label: "Products", href: "#products" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export type Product = {
  id: string;
  name: string;
  description: string;
  image?: string; // /public altına koyacağınız görselin yolu
};

// Ana ürün kategorileri — genişleyen panellerde yan yana gösterilir.
// Alt kategori / ürün detayı şimdilik yok.
export const categories: Product[] = [
  {
    id: "ai-hardware",
    name: "Hardware Built for AI",
    description: "Hardware solutions for AI workloads, from the edge to the data center.",
    image: "/images/hw-gpu.jpg",
  },
  {
    id: "ai-software",
    name: "Software We Build",
    description: "In-house AI software products and custom enterprise solutions.",
    image: "/images/sw-custom.jpg",
  },
  {
    id: "sbc",
    name: "Single Board Computers & Accessories",
    description: "SBCs, expansion boards, cases and all the accessories around them.",
    image: "/images/sbc-board.jpg",
  },
];

export const stats = [
  { value: 100, suffix: "+", label: "Products" },
  { value: 50, suffix: "+", label: "Enterprise Clients" },
  { value: 10, suffix: "+", label: "Years of Experience" },
];
