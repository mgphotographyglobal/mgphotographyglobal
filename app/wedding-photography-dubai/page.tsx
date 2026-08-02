import ServicePageTemplate from "../components/ServicePageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wedding Photography Dubai | MG Photography UAE",
  description: "Cinematic wedding photography in Dubai specializing in Indian & destination weddings. Fast delivery, available UAE-wide.",
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
      "Two-photographer teams available for comprehensive coverage",
      "Cinematic videography add-on available on request",
      "Pre-wedding consultation to map every critical moment",
      "Natural, authentic style — no forced poses or stiff formality",
      "Premium color grading and retouching on every delivered image",
      "Drone photography available for venue overviews and arrival shots",
    ],
  },
  packages: [
    {
      name: "Intimate",
      price: "AED 3,500",
      features: [
        "8-hour single photographer coverage",
        "300+ professionally edited images",
        "High-resolution private gallery",
        "Getting-ready & ceremony coverage",
        "Online gallery for 1 year",
        "Delivery within 21 days",
      ],
    },
    {
      name: "Grand",
      price: "AED 6,500",
      features: [
        "Full-day two-photographer coverage",
        "500+ professionally edited images",
        "Pre-wedding consultation session",
        "Getting-ready through reception",
        "Teaser gallery within 72 hours",
        "Premium printed album (30 pages)",
        "Drone photography included",
        "Delivery within 21 days",
      ],
    },
    {
      name: "Cinematic Suite",
      price: "AED 9,999",
      features: [
        "Two-day multi-event coverage",
        "Unlimited edited images",
        "Dedicated lead photographer",
        "Cinematic highlight reel (video)",
        "Two premium printed albums",
        "Priority 14-day delivery",
        "Drone + indoor aerial coverage",
        "Complimentary engagement shoot",
      ],
    },
  ],
  faq: [
    { q: "Do you cover Indian weddings and multi-day events?", a: "Absolutely. We have extensive experience with South Indian, North Indian, Hindu, Muslim, and Christian wedding ceremonies across Dubai. We understand the critical religious moments, the cultural rituals, and the emotional arcs of each tradition." },
    { q: "How far in advance should we book?", a: "For popular dates (especially weekends in October–February), we recommend booking 6–12 months in advance. For off-peak dates, 3–4 months is usually sufficient." },
    { q: "Can we do an engagement or pre-wedding shoot?", a: "Yes! A pre-wedding shoot is the perfect way to get comfortable with us before the big day. We offer stunning locations across Dubai — from the desert to Burj Khalifa views to urban luxury settings." },
    { q: "What happens if you're unavailable on our date?", a: "In the rare event of an emergency, we have a trusted network of equally qualified photographers. We always ensure your day is covered and will notify you with ample time." },
    { q: "Do you offer videography?", a: "Yes, we offer cinematic videography as an add-on to our wedding packages. A highlight reel and full-ceremony edit are available. Contact us for combined photo + video bundle pricing." },
  ],
  ctaText: "Let's Create Your Cinematic Love Story.",
  keywords: ["wedding photography Dubai", "Indian wedding photographer Dubai"],
  relatedServices: [
    { title: "Pre-Wedding Photography Dubai", href: "/pre-wedding-photography-dubai" },
    { title: "Outdoor Photography Dubai", href: "/outdoor-photography-dubai" },
    { title: "Wedding Photography Abu Dhabi", href: "/wedding-photography-abu-dhabi" },
    { title: "Birthday Photography Dubai", href: "/birthday-photography-dubai" },
  ],
};

export default function WeddingPhotographyDubai() {
  return <ServicePageTemplate service={serviceData} />;
}
