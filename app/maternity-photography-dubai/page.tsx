import ServicePageTemplate from "../components/ServicePageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Maternity Photography Dubai | MG Photography UAE",
  description: "Radiant maternity photography in Dubai. Cinematic luxury pregnancy portraits, home or outdoor. Trusted by 150+ mothers.",
  alternates: { canonical: "https://mgphotographyglobal.com/maternity-photography-dubai/" },
};

const serviceData = {
  title: "Maternity Photography",
  location: "Dubai, UAE",canonicalPath:"/maternity-photography-dubai/",
  heroTitle: "Radiant. Powerful.",
  heroSubtitle: "Beautifully You.",
  emoji: "🤱",
  description: `You are in the midst of the most extraordinary transformation a human being can experience. Your body is creating life. There is nothing more powerful, more beautiful, more worthy of celebration than this season of becoming.

At MG Photography UAE, our maternity sessions are designed to celebrate you — not just your bump, but your strength, your glow, your anticipation, and the profound love you already feel for someone you haven't met yet.

We create cinematic maternity portraits that balance elegance with emotion. Whether you prefer the luxurious warmth of our Dubai studio or the golden light of an outdoor UAE location, every session is thoughtfully designed around your vision, your comfort, and the unique beauty of your pregnancy.

Best session timing is between 28–34 weeks of pregnancy, when your bump is beautifully round but you're still comfortable and glowing. We provide elegant wardrobe suggestions, stunning gowns, and professional guidance throughout.`,
  whySection: {
    title: "Why Expectant Mothers in Dubai Trust MG Photography",
    points: [
      "Maternity-specialist posing expertise — comfortable and flattering at every angle",
      "Luxury flowing gown wardrobe available for all body types",
      "Private studio sessions with full comfort provisions",
      "Studio & golden-hour outdoor options across Dubai",
      "Partner and family inclusion shots always welcomed",
      "Premium skin retouching that celebrates, not alters, your natural glow",
      "Delivery in 10–14 days with easy online gallery sharing",
    ],
  },
  packages: [
    {
      name: "Studio Glow",
      price: "AED 799",
      features: ["2-hour studio session","20 edited images","1 luxury gown included","2 backdrop setups","High-resolution gallery"],
    },
    {
      name: "Radiance",
      price: "AED 1,499",
      features: ["3-hour studio session","35 edited images","2 gowns included","Partner/family shots","4 backdrop setups","1 complimentary 8×10 print","Gallery within 10 days"],
    },
    {
      name: "Golden Story",
      price: "AED 2,499",
      features: ["Studio + outdoor golden-hour session","50+ edited images","3 premium gown options","Complete family shots","Drone portrait (outdoor)","Premium print album","Priority 7-day delivery"],
    },
  ],
  faq: [
    { q: "When is the best time for a maternity shoot?", a: "The ideal time is between 28–34 weeks of pregnancy. Your bump is beautifully prominent, and you're still comfortable and mobile. We recommend booking at 20–24 weeks to secure your ideal timing." },
    { q: "What should I wear for the session?", a: "We provide a curated selection of luxury gowns for all sessions. You're also welcome to bring your own outfits. We'll discuss wardrobe options in your pre-session consultation call." },
    { q: "Can my partner or family join?", a: "Absolutely — and we encourage it. Partner and family shots add beautiful emotional depth to your maternity gallery. Siblings especially create magical moments." },
    { q: "Is outdoor shooting available?", a: "Yes. We offer stunning outdoor sessions at golden-hour locations across Dubai — desert dunes, beachfronts, architectural backdrops, and green parks." },
  ],
  ctaText: "Celebrate This Season of You. Book Your Maternity Session.",
  keywords: ["maternity photography Dubai", "pregnancy photoshoot Dubai"],
  relatedServices: [
    { title: "Newborn Photography Dubai", href: "/newborn-photography-dubai" },
    { title: "Baby Photography Dubai", href: "/baby-photography-dubai" },
    { title: "Maternity Photography Abu Dhabi", href: "/maternity-photography-abu-dhabi" },
    { title: "Outdoor Photography Dubai", href: "/outdoor-photography-dubai" },
  ],
};

export default function MaternityPhotographyDubai() {
  return <ServicePageTemplate service={serviceData} />;
}
