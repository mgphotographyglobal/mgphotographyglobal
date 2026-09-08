import { serviceMetadata } from "../lib/serviceMetadata";
import ServicePageTemplate from "../components/ServicePageTemplate";
import type { Metadata } from "next";

const baseMetadata: Metadata = {
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
  heroImage: {
    src: "/images/maternity-photography-dubai-hero-red-gown-waterfront.jpg",
    alt: "Pregnant woman in a red gown with fabric flowing in the wind beside Dubai Water Canal, Burj Khalifa in the background",
    objectPosition: "center 30%",
  },
  galleryTitle: "Maternity Photography Portfolio",
  gallery: [
    { src: "/images/gallery/maternity-photography-dubai-red-gown-flowing-fabric-waterfront.jpg", alt: "Pregnant woman in a red gown with fabric flowing in the wind beside Dubai Water Canal, Burj Khalifa in the background" },
    { src: "/images/gallery/maternity-portrait-lilac-gown-flowing-fabric-sunset.jpg", alt: "Pregnant woman in a lilac gown with sheer fabric flowing around her at sunset" },
    { src: "/images/gallery/maternity-photography-dubai-red-gown-skyline-baby-shoes.jpg", alt: "Pregnant woman in a flowing red gown holding baby shoes with the Dubai skyline behind her" },
    { src: "/images/gallery/maternity-portrait-couple-studio-yellow-backdrop.jpg", alt: "Expectant couple embracing in a studio maternity portrait against a golden-yellow backdrop" },
    { src: "/images/gallery/maternity-photography-dubai-couple-park-with-dog.jpg", alt: "Expectant couple sitting together in a park with their dog, Dubai skyline in the background" },
    { src: "/images/gallery/maternity-portrait-white-dress-garden-flowers.jpg", alt: "Pregnant woman in a white embroidered dress tossing yellow flowers in a sunlit garden" },
    { src: "/images/gallery/maternity-photography-dubai-white-dress-park-skyline.jpg", alt: "Pregnant woman in a white embroidered dress standing in a park with the Dubai skyline behind her" },
    { src: "/images/gallery/maternity-portrait-couple-baby-socks-garden.jpg", alt: "Expectant couple holding tiny baby socks together in a garden at golden hour" },
    { src: "/images/gallery/maternity-portrait-family-group-gazebo.jpg", alt: "Pregnant woman surrounded by family members celebrating together under a gazebo" },
    { src: "/images/gallery/maternity-portrait-couple-colonial-veranda-golden-hour.jpg", alt: "Expectant couple standing together on a pillared veranda at golden hour" },
    { src: "/images/gallery/maternity-portrait-tulle-gown-black-and-white.jpg", alt: "Pregnant woman in a dramatic tulle gown posing in a black and white studio portrait" },
    { src: "/images/gallery/maternity-portrait-couple-black-and-white-studio.jpg", alt: "Black and white studio portrait of an expectant couple embracing" },
    { src: "/images/gallery/maternity-portrait-black-and-white-silhouette-profile.jpg", alt: "Black and white profile portrait of a pregnant woman cradling her bump" },
    { src: "/images/gallery/maternity-portrait-couple-maroon-gown-indoor.jpg", alt: "Expectant couple standing together indoors, mother in a flowing maroon maternity gown" },
    { src: "/images/gallery/maternity-portrait-lilac-gown-traditional-veranda-night.jpg", alt: "Pregnant woman in a lilac gown seated on an ornately decorated traditional veranda at night" },
  ],
  relatedServices: [
    { title: "Newborn Photography Dubai", href: "/dubai-newborn-photography/" },
    { title: "Baby Photography Dubai", href: "/baby-photography-dubai/" },
    { title: "Maternity Photography Abu Dhabi", href: "/maternity-photography-abu-dhabi/" },
    { title: "Outdoor Photography Dubai", href: "/outdoor-photography-dubai/" },
  ],
};

export default function MaternityPhotographyDubai() {
  return <ServicePageTemplate service={serviceData} />;
}

export const metadata: Metadata = serviceMetadata(baseMetadata, serviceData);
