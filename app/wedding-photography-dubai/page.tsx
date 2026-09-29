import { serviceMetadata } from "../lib/serviceMetadata";
import ServicePageTemplate from "../components/ServicePageTemplate";
import type { Metadata } from "next";

const baseMetadata: Metadata = {
  title: "Wedding Photography Dubai | MG Photography UAE",
  description: "Wedding photography and videography packages in Dubai, with coverage options for intimate ceremonies and larger celebrations.",
  keywords: ["wedding photography Dubai", "wedding photographer Dubai", "Indian wedding photographer Dubai", "luxury wedding photography Dubai"],
  alternates: { canonical: "https://mgphotographyglobal.com/wedding-photography-dubai/" },
};

const serviceData = {
  title: "Wedding Photography",
  location: "Dubai, UAE",canonicalPath:"/wedding-photography-dubai/",
  heroTitle: "Your Love Story,",
  heroSubtitle: "Told Beautifully.",
  emoji: "💍",
  description: `Your wedding day is the intersection of everything you've built together — every late-night conversation, every dream, every promise. At MG Photography UAE, we don't just document your wedding. We craft a cinematic story that captures the weight of each moment: the nervous glance before the ceremony, the tears your father hides, the explosion of joy when you're finally pronounced husband and wife.

We specialize in luxury wedding photography across Dubai, Abu Dhabi, and Sharjah, with deep expertise in Indian weddings, destination weddings, and multicultural ceremonies. Our approach blends photojournalistic storytelling with editorial precision — resulting in images that feel both authentic and breathtakingly beautiful.

From intimate Nikah ceremonies to multi-day Hindu wedding celebrations, we understand the cultural nuances, the critical moments, and the invisible magic that makes your day uniquely yours.`,
  whySection: {
    title: "Why Dubai Couples Choose MG Photography for Their Wedding",
    points: [
      "Specialist expertise in Indian, South Asian & multicultural weddings in Dubai",
      "Photography and videography crew options listed clearly by package",
      "Pre-wedding consultation to map every critical moment",
      "Natural, authentic style — no forced poses or stiff formality",
      "Coverage options for ceremonies and celebrations lasting up to 10 hours",
    ],
  },
  packages: [
    {
      name: "MG Intimate",
      price: "AED 3,000",
      features: [
        "Unlimited RAW photos",
        "Film delivery: minimum 14 days",
      ],
    },
    {
      name: "MG Signature Wedding",
      price: "AED 4,000",
      features: [
        "Coverage up to 8 hours",
        "Crew: one candid photographer, one photographer and one videographer",
        "Unlimited RAW photos",
        "Film delivery: minimum 18 days",
      ],
    },
    {
      name: "MG Cinematic Celebration",
      price: "AED 5,000",
      features: [
        "Coverage up to 10 hours",
        "Crew: one photographer, one videographer and one candid photographer",
        "Unlimited RAW photos",
        "Three social reels",
      ],
    },
  ],
  faq: [
    { q: "Do you cover Indian weddings and multi-day events?", a: "Absolutely. We have extensive experience with South Indian, North Indian, Hindu, Muslim, and Christian wedding ceremonies across Dubai. We understand the critical religious moments, the cultural rituals, and the emotional arcs of each tradition." },
    { q: "How far in advance should we book?", a: "For popular dates (especially weekends in October–February), we recommend booking 6–12 months in advance. For off-peak dates, 3–4 months is usually sufficient." },
    { q: "Can we do an engagement or pre-wedding shoot?", a: "Yes! A pre-wedding shoot is the perfect way to get comfortable with us before the big day. We offer stunning locations across Dubai — from the desert to Burj Khalifa views to urban luxury settings." },
    { q: "What happens if you're unavailable on our date?", a: "In the rare event of an emergency, we have a trusted network of equally qualified photographers. We always ensure your day is covered and will notify you with ample time." },
    { q: "Do your wedding packages include videography?", a: "The MG Signature Wedding and MG Cinematic Celebration packages include a videographer. The package details above show the crew and coverage included in each option." },
  ],
  ctaText: "Let's Create Your Cinematic Love Story.",
  keywords: ["wedding photography Dubai", "Indian wedding photographer Dubai"],
  heroImage: {
    src: "/images/wedding-photography-dubai-hero-bridal-portrait.jpg",
    alt: "Indian bride in a purple and gold silk saree with traditional jewelry — wedding photography by MG Photography UAE",
    objectPosition: "center 25%",
  },
  galleryTitle: "Wedding Photography Portfolio",
  gallery: [
    { src: "/images/gallery/wedding-photography-dubai-bridal-portrait-jewelry-closeup-01.jpg", alt: "Close-up portrait of an Indian bride wearing a maang tikka and gold jewelry" },
    { src: "/images/gallery/wedding-photography-dubai-bride-makeup-application-02.jpg", alt: "Makeup artist applying eyeshadow to an Indian bride before her wedding ceremony" },
    { src: "/images/gallery/wedding-photography-dubai-bride-ring-light-getting-ready-03.jpg", alt: "Bride peeking through a ring light during her wedding getting-ready session" },
    { src: "/images/gallery/wedding-photography-dubai-bride-getting-ready-blue-saree-04.jpg", alt: "Bride in a blue embellished saree having makeup applied before her wedding" },
    { src: "/images/gallery/wedding-photography-dubai-bride-mirror-reflection-05.jpg", alt: "Bride looking at her reflection in a lit mirror while getting ready for her wedding" },
    { src: "/images/gallery/wedding-photography-dubai-bride-adjusting-maang-tikka-06.jpg", alt: "Bride adjusting her gold maang tikka, showing intricate henna on her hands" },
    { src: "/images/gallery/wedding-photography-dubai-wedding-ceremony-hands-ritual-07.jpg", alt: "Close-up of bride and groom's hands during a traditional wedding ritual with rose petals" },
    { src: "/images/gallery/wedding-photography-dubai-bride-ceremony-prayer-mandap-08.jpg", alt: "Bride with hands folded in prayer during her wedding ceremony on a decorated mandap stage" },
    { src: "/images/gallery/wedding-photography-dubai-bridal-portrait-purple-saree-09.jpg", alt: "Indian bride in a purple and gold silk saree with traditional jewelry, studio portrait" },
    { src: "/images/gallery/wedding-photography-dubai-bride-groom-silhouette-10.jpg", alt: "Silhouette of bride and groom with foreheads touching against a warm orange backdrop" },
  ],
  relatedServices: [
    { title: "Pre-Wedding Photography Dubai", href: "/pre-wedding-photography-dubai/" },
    { title: "Outdoor Photography Dubai", href: "/outdoor-photography-dubai/" },
    { title: "Wedding Photography Abu Dhabi", href: "/wedding-photography-abu-dhabi/" },
    { title: "Birthday Photography Dubai", href: "/birthday-photography-dubai/" },
  ],
};

export default function WeddingPhotographyDubai() {
  return <ServicePageTemplate service={serviceData} />;
}

export const metadata: Metadata = serviceMetadata(baseMetadata, serviceData);
