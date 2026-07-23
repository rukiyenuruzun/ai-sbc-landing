// Tüm sayfa içeriği tek yerden yönetilir; arayüzü tasarlarken sadece burayı doldurmanız yeterli.

export const siteConfig = {
  name: "ŞİRKET ADI",
  tagline: "AI donanımı, AI yazılımı ve SBC çözümleri",
  description:
    "AI hardware satan, AI yazılımları üreten, SBC (single board computer) ve aksesuarlarını sunan teknoloji şirketi.",
  contact: {
    email: "info@example.com",
    phone: "+90 000 000 00 00",
    address: "Adres bilgisi",
  },
  socials: [
    { label: "GitHub", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "X", href: "#" },
  ],
};

// Navbar'daki linkler sayfa içi anchor'lara gider (single page).
export const navLinks = [
  { label: "AI Donanım", href: "#ai-hardware" },
  { label: "AI Yazılım", href: "#ai-software" },
  { label: "SBC & Aksesuar", href: "#sbc" },
  { label: "Hakkımızda", href: "#about" },
  { label: "İletişim", href: "#contact" },
];

export type Product = {
  id: string;
  name: string;
  description: string;
  image?: string; // /public altına koyacağınız görselin yolu
  tag?: string; // "Yeni", "Popüler" vb.
};

export const aiHardware: Product[] = [
  {
    id: "hw-1",
    name: "AI Accelerator Placeholder",
    description: "Edge AI hızlandırıcı kartı açıklaması.",
    tag: "Popüler",
  },
  {
    id: "hw-2",
    name: "GPU Modülü Placeholder",
    description: "Yüksek performanslı GPU modülü açıklaması.",
  },
  {
    id: "hw-3",
    name: "AI Kamera Placeholder",
    description: "Görüntü işleme odaklı akıllı kamera açıklaması.",
  },
];

export const aiSoftware: Product[] = [
  {
    id: "sw-1",
    name: "Model Deployment Platformu",
    description: "Edge cihazlara model dağıtım yazılımı açıklaması.",
  },
  {
    id: "sw-2",
    name: "Vision SDK",
    description: "Görüntü işleme SDK açıklaması.",
  },
  {
    id: "sw-3",
    name: "Özel AI Çözümleri",
    description: "Kuruma özel AI yazılım geliştirme hizmeti açıklaması.",
  },
];

export const sbcProducts: Product[] = [
  {
    id: "sbc-1",
    name: "SBC Model Placeholder",
    description: "Single board computer açıklaması.",
    tag: "Yeni",
  },
  {
    id: "sbc-2",
    name: "Soğutucu / Kasa Aksesuarı",
    description: "SBC aksesuarı açıklaması.",
  },
  {
    id: "sbc-3",
    name: "Genişletme Kartı",
    description: "HAT / genişletme kartı açıklaması.",
  },
];

export const stats = [
  { value: "100+", label: "Ürün" },
  { value: "50+", label: "Kurumsal Müşteri" },
  { value: "10+", label: "Yıllık Deneyim" },
];
