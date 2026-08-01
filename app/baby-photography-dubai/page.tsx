import ServicePageTemplate from "../components/ServicePageTemplate";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Baby Photography Dubai | Milestone Sessions | MG Photo",
  description: "Professional baby photography in Dubai for every milestone — 3 months, 6 months, sitter, cake smash. Premium quality. Book now.",
  alternates: { canonical: "https://mgphotographyglobal.com/baby-photography-dubai/" },
};
const serviceData = {
  title: "Baby Photography",
  location: "Dubai, UAE",canonicalPath:"/baby-photography-dubai/",
  heroTitle: "Every Milestone,",
  heroSubtitle: "Perfectly Preserved.",
  emoji: "🍼",
  description: `From their first wobbly sit to the explosion of their cake smash birthday — your baby is growing so fast, and every stage is a treasure that deserves to be captured beautifully. Our Dubai baby photography sessions are designed to document each milestone with warmth, artistry, and genuine joy.\n\nWe offer themed milestone sessions at 3 months, 6 months, 9 months, and 12 months, as well as sitter sessions, birthday parties, and special theme shoots tailored to your baby's personality.`,
  whySection: {
    title: "Why Dubai Parents Choose MG Photography for Baby Milestones",
    points: [
      "Specialist baby photographer with patience and a genuine way with young children",
      "Milestone packages covering 3, 6, 9 & 12 months for comprehensive coverage",
      "Fun, themed setups — from boho chic to explorer adventures to seasonal themes",
      "Parent inclusion shots available in all sessions",
      "Safe, baby-friendly studio environment in Dubai",
      "Same premium editing quality as all our services",
    ],
  },
  packages: [
    { name: "Milestone", price: "AED 699", features: ["1.5-hour session","15 edited images","1 themed setup","Digital gallery"] },
    { name: "Growing Story", price: "AED 2,499", features: ["4-session annual package (3/6/9/12 months)","15 images per session","Priority booking","Discounted add-ons","Annual photo book included"] },
    { name: "Cake Smash", price: "AED 999", features: ["Full cake smash setup","Bath/clean-up shots included","20 edited images","Themed decorations","Digital gallery + 1 print"] },
  ],
  faq: [
    { q: "When should I book a sitter session?", a: "Sitter sessions work best between 6–9 months when your baby can sit independently. For cake smash sessions, we recommend booking around 11–12 months." },
    { q: "Can I include siblings or family?", a: "Absolutely! We encourage family involvement. Additional family members can be included at no extra charge." },
  ],
  ctaText: "Every Stage of Babyhood Deserves to Be Remembered.",
  keywords: ["baby photography Dubai", "milestone baby photography Dubai"],
  relatedServices: [
    { title: "Newborn Photography Dubai", href: "/newborn-photography-dubai" },
    { title: "Maternity Photography Dubai", href: "/maternity-photography-dubai" },
    { title: "Birthday Photography Dubai", href: "/birthday-photography-dubai" },
  ],
};
export default function BabyPhotographyDubai() { return <ServicePageTemplate service={serviceData} />; }
