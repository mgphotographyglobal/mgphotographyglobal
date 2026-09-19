/**
 * /dubai-newborn-photography/ — Primary Canonical Landing Page
 * ─────────────────────────────────────────────────────────────
 * Google Ads Quality Score optimized
 * Core Web Vitals optimized (LCP image priority, no CLS)
 * WCAG AA accessible
 * Structured data: Service + FAQPage + ImageGallery + BreadcrumbList
 */
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Footer from "../components/Footer";
import MobileStickyCTA from "../components/MobileStickyCTA";
import Header from "../components/Header";
import LaunchOfferPopup from "../components/LaunchOfferPopup";
import { PackageIcon, type PackageIconType } from "../components/PackageIcons";
import { getPostsByCategory } from "../lib/blog";

const SITE_URL = "https://mgphotographyglobal.com";
const PAGE_URL = `${SITE_URL}/dubai-newborn-photography/`;
const WA_BASE = "https://wa.me/971588764748";
const WA_URL = `${WA_BASE}?text=${encodeURIComponent("Hi MG Photography UAE, I’m interested in a newborn home photoshoot in Dubai. Could you please share availability and package details? My baby is ___ days old and I’m in ___ area.")}`;
const CALL_URL = "tel:+971588764748";
const PAGE_DESCRIPTION = "Newborn photography at home in Dubai. Compare 10, 15 and 25-portrait collections, with props and home setup included. AED 100 Dubai home visit fee applies.";

// ─── SEO Metadata ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Dubai Newborn Photographer | MG Photography UAE",
  description: PAGE_DESCRIPTION,
  keywords: [
    "Dubai Newborn Photographer",
    "Newborn Photography Dubai",
    "Newborn Photoshoot Dubai",
    "Baby Photographer Dubai",
    "Newborn Session Dubai",
    "Home Newborn Photography Dubai",
    "Luxury Home Newborn Photography Dubai",
    "Newborn Photographer Abu Dhabi",
    "Newborn Photographer Sharjah",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: "Dubai Newborn Photographer | MG Photography UAE",
    description:
      PAGE_DESCRIPTION,
    type: "website",
    locale: "en_AE",
    url: PAGE_URL,
    siteName: "MG Photography UAE",
    images: [
      {
        url: "/images/hero-basket-newborn.webp",
        width: 1200,
        height: 630,
        alt: "Dubai newborn photographer — MG Photography UAE luxury newborn session",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dubai Newborn Photographer | MG Photography UAE",
    description: PAGE_DESCRIPTION,
    images: ["/images/hero-basket-newborn.webp"],
  },
};

// ─── Schema ───────────────────────────────────────────────────────────────────
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Dubai Newborn Photography", item: PAGE_URL },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${PAGE_URL}#service`,
  name: "Newborn Photography Dubai",
  serviceType: "Newborn Photography",
  provider: {
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#organization`,
    name: "MG Photography UAE",
    telephone: "+971588764748",
  },
  areaServed: [
    { "@type": "City", name: "Dubai" },
    { "@type": "City", name: "Abu Dhabi" },
    { "@type": "City", name: "Sharjah" },
  ],
  description:
    "Professional newborn photography sessions in Dubai. Safe, gentle posing in the comfort of your own home. Sessions ideal between 5–21 days after birth.",
  offers: [
    { "@type": "Offer", name: "Essence Collection Launch Offer", price: "500", priceCurrency: "AED" },
    { "@type": "Offer", name: "Signature Collection", price: "1250", priceCurrency: "AED" },
    { "@type": "Offer", name: "Legacy Collection", price: "2000", priceCurrency: "AED" },
  ],
};

// faqSchema and gallerySchema are defined further down, derived directly from
// the `faqs` and `galleryImages` arrays below — this keeps the structured data
// permanently in sync with what's actually visible on the page.

// ─── Content ──────────────────────────────────────────────────────────────────
const packages = [
  {
    name: "The Legacy Collection",
    emoji: "👑",
    eyebrow: "The Ultimate Experience",
    price: "AED 2,000",
    homeVisit: "AED 100",
    highlights: [
      { icon: "portraits", text: "25 Handcrafted High-Resolution Digital Portraits" },
      { icon: "setup", text: "4 Deluxe Artistically Curated Newborn Setups" },
      { icon: "family", text: "Full Immediate Family Portraits (Baby, Parents & Siblings)" },
      { icon: "macro", text: "Signature Macro Detail Portraits (Eyes, Lips, Hands & Feet)" },
      { icon: "props", text: "Premium Props & Luxury Baby Wardrobe" },
      { icon: "gown", text: "Luxury Maternity Gowns for Mom" },
      { icon: "home", text: "Professional Home Studio Setup" },
      { icon: "heart", text: "Baby-Led, Safe & Unhurried Session" },
      { icon: "retouch", text: "Expert Fine-Art Retouching" },
    ],
    cta: "Check Legacy Availability",
    waText: "Legacy Collection",
  },
  {
    name: "The Signature Collection",
    emoji: "⭐",
    eyebrow: "Our Most Loved",
    price: "AED 1,250",
    homeVisit: "AED 100",
    highlights: [
      { icon: "portraits", text: "15 Handcrafted High-Resolution Digital Portraits" },
      { icon: "setup", text: "3 Bespoke Artistically Curated Newborn Setups" },
      { icon: "family", text: "Full Immediate Family Portraits" },
      { icon: "props", text: "Premium Props & Luxury Baby Wardrobe" },
      { icon: "gown", text: "Luxury Maternity Gowns for Mom" },
      { icon: "home", text: "Professional Home Studio Setup" },
      { icon: "heart", text: "Baby-Led, Safe & Unhurried Session" },
      { icon: "retouch", text: "Expert Fine-Art Retouching" },
    ],
    cta: "Check Signature Availability",
    waText: "Signature Collection",
    featured: true,
  },
  {
    name: "The Essence Collection",
    emoji: "✨",
    eyebrow: "Launch Offer • Standard AED 800",
    price: "AED 500",
    homeVisit: "AED 100",
    highlights: [
      { icon: "portraits", text: "10 Handcrafted High-Resolution Digital Portraits" },
      { icon: "setup", text: "2 Beautifully Styled Newborn Setups" },
      { icon: "props", text: "Premium Props & Luxury Baby Wardrobe" },
      { icon: "home", text: "Professional Home Studio Setup" },
      { icon: "family", text: "Baby & Parent Portrait" },
      { icon: "heart", text: "Baby-Led, Safe & Unhurried Session" },
      { icon: "retouch", text: "Expert Fine-Art Retouching" },
    ],
    cta: "Check Essence Availability",
    waText: "Essence Collection",
  },
];

const addOns = [
  {
    emoji: "📷",
    name: "Macro Detail Collection",
    tagline: "Capture Every Tiny Detail",
    price: "AED 100",
    highlights: [
      { icon: "portraits", text: "5 Handcrafted Macro Portraits" },
      { icon: "retouch", text: "Expert Fine-Art Retouching" },
      { icon: "home", text: "Captured During Your Newborn Session" },
    ],
    chips: ["Eyes", "Lips", "Tiny Hands", "Tiny Feet", "Ears", "Eyelashes"],
    cta: "Add To My Session",
    waText: "Macro Detail Collection add-on",
  },
  {
    emoji: "🎥",
    name: "Cinematic Newborn Reel",
    tagline: "Your Baby's First Story Beautifully Told",
    price: "AED 200",
    highlights: [
      { icon: "film", text: "Up to 2 Minutes Cinematic Reel" },
      { icon: "palette", text: "Professionally Color Graded" },
      { icon: "portraits", text: "Vertical Format — Instagram & WhatsApp Ready" },
      { icon: "retouch", text: "Cinematic Storytelling, Full HD Delivery" },
    ],
    chips: ["Baby Included", "Parents Included", "Family Included"],
    cta: "Add To My Session",
    waText: "Cinematic Newborn Reel add-on",
  },
];

const faqs = [
  {
    q: "When is the best time for a newborn session in Dubai?",
    a: "Between 5–21 days after birth. Babies sleep deeply and curl into beautiful poses during this window. After 3 weeks they become more alert and poses are harder to achieve safely.",
  },
  {
    q: "Do you come to our home in Dubai?",
    a: "Absolutely. We offer home sessions across all Dubai areas — Downtown, Marina, JBR, Jumeirah, Arabian Ranches, Business Bay, and more. We bring all equipment, props, and setups to you.",
  },
  {
    q: "How do you keep babies safe during sessions?",
    a: "Baby safety is our priority. Sessions are baby-led and unhurried: we never force a pose, we follow your baby’s cues, keep the setup comfortable, and pause for feeding or soothing whenever needed.",
  },
  {
    q: "How many photos will we receive?",
    a: "The Essence Collection includes 10 edited digital portraits, Signature includes 15, and Legacy includes 25. Every image is individually edited — never batch processed. Gallery delivered within 5–7 working days via private online link.",
  },
  {
    q: "Which collections include family portraits?",
    a: "Essence includes a baby and parent portrait. Signature and Legacy include immediate family portraits. If you would like grandparents or other relatives to join, share the number of people when enquiring so we can confirm the arrangements.",
  },
  {
    q: "How much does newborn photography cost in Dubai?",
    a: "Our current Essence launch offer is AED 500 (standard AED 800), plus AED 100 for a Dubai home visit — AED 600 total during the offer. Signature is AED 1,250 and Legacy is AED 2,000, plus the Dubai home-visit fee. A 50% deposit secures your date, with the balance due on the session day.",
  },
  {
    q: "When should I book my Dubai newborn photographer?",
    a: "During pregnancy, ideally at 28–32 weeks. Newborn slots are limited and fill quickly. We hold your tentative date and confirm the exact time once your baby arrives.",
  },
  {
    q: "Do you offer payment plans?",
    a: "Yes. A 50% deposit secures your session, with the balance due on the session day. We accept bank transfer and cash. Contact us via WhatsApp to discuss.",
  },
];

const galleryImages = [
  { src: "/images/hero-basket-newborn.webp", alt: "Newborn in floral basket — Dubai newborn photographer MG Photography" },
  { src: "/images/nb-white-knit-smile.png", alt: "Sleeping newborn smiling in white knit — Dubai home-visit newborn session" },
  { src: "/images/nb-hero-couple-window.png", alt: "Parents kissing newborn by window — luxury newborn photography Dubai" },
  { src: "/images/nb-grandma-home-chandelier.png", alt: "Grandmother holding newborn at home — home newborn session Dubai" },
  { src: "/images/nb-hammock-aerial.png", alt: "Newborn in hammock aerial view — swing theme newborn photography Dubai" },
  { src: "/images/nb-white-knit-heart-chair.png", alt: "Newborn in heart chair setup — Dubai newborn home photography" },
  { src: "/images/nb-couple-embrace-baby.png", alt: "Couple embracing with newborn — family newborn photography Dubai" },
  { src: "/images/nb-grandma-hijab-baby.png", alt: "Grandmother and newborn — multi-generational family photography Dubai" },
  { src: "/images/nb-family-three-gen.png", alt: "Three-generation family newborn photo — Dubai family photographer" },
];

// ─── Derived schema ───────────────────────────────────────────────────────────
// Built directly from the `faqs` and `galleryImages` arrays above so the
// structured data can never drift out of sync with the visible page content.
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

const gallerySchema = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  "@id": `${PAGE_URL}#gallery`,
  name: "Newborn Photography Gallery — Dubai",
  url: PAGE_URL,
  image: galleryImages.map((img) => ({
    "@type": "ImageObject",
    contentUrl: `${SITE_URL}${img.src}`,
    caption: img.alt,
  })),
};

const WAIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true" focusable="false">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

// ─── Component ────────────────────────────────────────────────────────────────
export default function DubaiNewbornPhotography() {
  // Data-driven — matches this page's service against the blog's "Newborn
  // Photography" category, so new articles appear here automatically with
  // no edits to this file. Only published posts can appear.
  const helpfulArticles = getPostsByCategory("newborn-photography")
    .slice()
    .sort((a, b) => {
      if (a.isPillar !== b.isPillar) return a.isPillar ? -1 : 1;
      return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
    })
    .slice(0, 4);

  return (
    <>
      {/* Schema injection */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(gallerySchema) }} />

      <Header />
      <MobileStickyCTA whatsappUrl={WA_URL} whatsappLabel="Check Availability" serviceType="newborn_photography" packagesHref="#packages" packagesLabel="Packages" />
      <LaunchOfferPopup />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section
        aria-label="Dubai Newborn Photography — Hero"
        style={{ position: "relative", minHeight: "100svh", display: "flex", alignItems: "center", overflow: "hidden" }}
      >
        {/* LCP image — priority loaded */}
        <Image
          src="/images/hero-basket-newborn-girl.webp"
          alt="Sleeping newborn baby girl in a floral basket — Dubai newborn photographer MG Photography UAE"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center 30%" }}
        />
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "linear-gradient(105deg, rgba(10,8,5,0.94) 0%, rgba(10,8,5,0.72) 55%, rgba(10,8,5,0.22) 100%)" }} />
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,8,5,0.92) 0%, transparent 62%)" }} />

        <div style={{ position: "relative", zIndex: 10, width: "100%", maxWidth: "1280px", margin: "0 auto", padding: "clamp(7rem, 14vw, 11rem) clamp(1.25rem,5vw,4rem) clamp(3rem,8vw,6rem)" }}>
          <div style={{ maxWidth: "680px" }}>

            {/* Breadcrumb — improves Quality Score & internal linking */}
            <nav aria-label="Breadcrumb" style={{ marginBottom: "1.5rem" }}>
              <ol style={{ display: "flex", gap: "0.5rem", alignItems: "center", listStyle: "none", padding: 0, flexWrap: "wrap" }}>
                <li><Link href="/" style={{ fontFamily: "var(--font-body)", fontSize: "0.7rem", color: "rgba(250,246,238,0.55)", textDecoration: "none", letterSpacing: "0.05em" }}>Home</Link></li>
                <li aria-hidden="true" style={{ color: "rgba(201,168,76,0.4)", fontSize: "0.7rem" }}>›</li>
                <li><span style={{ fontFamily: "var(--font-body)", fontSize: "0.7rem", color: "var(--gold)", letterSpacing: "0.05em" }} aria-current="page">Dubai Newborn Photography</span></li>
              </ol>
            </nav>

            {/* Launch offer — transparent above-fold pricing */}
            <div
              role="note"
              aria-label="Dubai newborn launch offer"
              style={{ display: "inline-flex", alignItems: "center", gap: "0.65rem", background: "rgba(201,168,76,0.12)", border: "1px solid rgba(201,168,76,0.32)", padding: "0.45rem 1rem", marginBottom: "1.5rem" }}
            >
              <span aria-hidden="true">🎉</span>
              <span style={{ fontFamily: "var(--font-body)", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--gold)" }}>
                Launch Offer — Essence AED 500
              </span>
            </div>

            {/* H1 — keyword-rich, matches Google Ads message */}
            <h1 style={{ fontFamily: "var(--font-display)", lineHeight: 1.06, letterSpacing: "-0.03em", marginBottom: "1rem" }}>
              <span style={{ display: "block", fontSize: "clamp(2.2rem, 6vw, 5.5rem)", fontWeight: 700, background: "linear-gradient(135deg, var(--gold-light) 0%, var(--gold-pale) 45%, var(--gold) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Dubai Newborn Photography
              </span>
            </h1>
            <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.1rem, 2.5vw, 1.6rem)", color: "rgba(250,246,238,0.82)", fontWeight: 400, lineHeight: 1.4, marginBottom: "0.875rem", fontStyle: "italic" }}>
              Beautiful, baby-led newborn photography brought to your Dubai home — we bring the professional setup, props and newborn wardrobe.
            </p>

            <div style={{ marginBottom: "1.5rem", padding: "0.9rem 1rem", borderLeft: "2px solid var(--gold)", background: "rgba(201,168,76,0.07)" }}>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", color: "var(--cream)", lineHeight: 1.55, marginBottom: "0.25rem" }}>
                <strong style={{ color: "var(--gold-light)" }}>Launch price: AED 500</strong> + AED 100 Dubai home visit = <strong>AED 600 total</strong>
              </p>
              <a href="#packages" style={{ fontFamily: "var(--font-body)", fontSize: "0.78rem", color: "var(--gold)", textDecoration: "underline" }}>
                See all collections and inclusions
              </a>
            </div>

            {/* Session timing — answers key client question */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1.5rem" }}>
              <div aria-hidden="true" style={{ width: "28px", height: "1px", background: "var(--gold)", flexShrink: 0 }} />
              <p style={{ fontFamily: "var(--font-body)", fontSize: "0.8rem", color: "var(--gold)", fontWeight: 600, letterSpacing: "0.06em" }}>
                Best photographed between 5–21 days after birth
              </p>
            </div>

            {/* Location tag */}
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(250,246,238,0.5)", marginBottom: "2rem" }}>
              Dubai &bull; Doorstep Home-Visit Service
            </p>

            {/* Trust indicators — above fold */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem 1.5rem", marginBottom: "2rem" }}>
              {[
                "✓ Doorstep Service Across Dubai",
                "✓ Professional Home Studio Setup",
                "✓ Props & Newborn Wardrobe Included",
                "✓ Baby-Led, Unhurried Posing",
              ].map((item) => (
                <span key={item} style={{ fontFamily: "var(--font-body)", fontSize: "0.78rem", color: "rgba(250,246,238,0.82)", fontWeight: 500 }}>
                  {item}
                </span>
              ))}
            </div>

            {/* Primary CTAs */}
            <div style={{ display: "flex", gap: "0.875rem", flexWrap: "wrap" }}>
              <a
                href={WA_URL}
                className="btn-whatsapp"
                style={{ fontSize: "0.9rem", padding: "1rem 2.25rem" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Check Dubai newborn photography availability via WhatsApp"
                data-wa-location="Hero CTA"
                data-service-type="newborn_photography"
                data-track-event="availability_check_click"
              >
                <WAIcon />
                Check Availability on WhatsApp
              </a>
              <a
                href={CALL_URL}
                className="btn-outline"
                style={{ fontSize: "0.85rem" }}
                aria-label="Call MG Photography UAE"
                data-wa-location="Hero Call"
              >
                📞 Call Now
              </a>
            </div>
            <p style={{ marginTop: "0.85rem", fontFamily: "var(--font-body)", fontSize: "0.72rem", color: "rgba(250,246,238,0.55)" }}>
              No commitment — send your baby&apos;s age and Dubai area and we&apos;ll confirm the suitable collection and availability.
            </p>
          </div>
        </div>

        {/* Scroll cue */}
        <div aria-hidden="true" style={{ position: "absolute", bottom: "2rem", right: "clamp(1.5rem, 5vw, 4rem)", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.4rem", zIndex: 10 }}>
          <div style={{ width: "1px", height: "55px", background: "linear-gradient(to bottom, var(--gold), transparent)" }} />
        </div>
      </section>

      {/* ── HOME-VISIT VALUE — conversion reassurance directly below hero ── */}
      <section
        aria-label="What is included with a Dubai newborn home session"
        style={{ background: "#0c0b09", padding: "clamp(2.5rem, 5vw, 4rem) 0" }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 clamp(1.25rem,5vw,4rem)" }}>
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <div className="label" style={{ marginBottom: "0.65rem" }}>We Come To You</div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.45rem,3vw,2.4rem)", lineHeight: 1.15 }}>
              A newborn studio experience <span className="text-gold-gradient">inside your Dubai home</span>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(190px,1fr))", gap: "0.75rem" }}>
            {[
              ["🏠", "Doorstep Setup", "We bring the professional newborn setup to your home."],
              ["🧸", "Props & Wardrobe", "Newborn props, wraps and baby wardrobe are included."],
              ["🤍", "Baby-Led", "No rushing or forced poses — feeding and soothing breaks are welcome."],
              ["✨", "Fine-Art Finish", "Your selected portraits receive individual professional retouching."],
            ].map(([icon, title, desc]) => (
              <div key={title} style={{ padding: "1.25rem", border: "1px solid rgba(201,168,76,0.12)", background: "rgba(255,255,255,0.025)" }}>
                <div style={{ fontSize: "1.35rem", marginBottom: "0.55rem" }} aria-hidden="true">{icon}</div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1rem", color: "var(--cream)", marginBottom: "0.4rem" }}>{title}</h3>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.78rem", lineHeight: 1.6, color: "rgba(250,246,238,0.62)" }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY ──────────────────────────────────────────────────────────── */}
      <section
        id="gallery"
        aria-label="Newborn photography gallery"
        style={{ background: "var(--black)", padding: "clamp(4rem, 9vw, 7rem) 0" }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(1.25rem,5vw,4rem)" }}>
          <div style={{ textAlign: "center", marginBottom: "clamp(2.5rem, 5vw, 4rem)" }}>
            <div className="label" style={{ marginBottom: "0.75rem" }}>Our Work</div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.7rem,3.5vw,3rem)", lineHeight: 1.1, letterSpacing: "-0.025em" }}>
              Newborn Photography <span className="text-gold-gradient">Gallery — Dubai</span>
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0.5rem" }} aria-label="Gallery of newborn photography sessions in Dubai">
            {galleryImages.map((img, i) => (
              <div
                key={img.src}
                style={{
                  position: "relative",
                  aspectRatio: i === 0 ? "4/3" : i === 4 ? "4/3" : "3/4",
                  gridColumn: i === 0 ? "span 2" : i === 4 ? "span 2" : "span 1",
                  overflow: "hidden",
                }}
                data-track-event="gallery_view"
                data-wa-location="Gallery"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  loading={i < 3 ? "eager" : "lazy"}
                  sizes={i === 0 || i === 4 ? "66vw" : "33vw"}
                  style={{ objectFit: "cover", transition: "transform 0.7s ease" }}
                />
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <a
              href={WA_URL}
              className="btn-whatsapp"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Check newborn photography availability in Dubai via WhatsApp"
              data-wa-location="Gallery CTA"
              data-service-type="newborn_photography"
            >
              <WAIcon />
              Check Newborn Availability
            </a>
          </div>
        </div>
      </section>

      {/* ── PACKAGES ─────────────────────────────────────────────────────────── */}
      <section
        id="packages"
        aria-label="Newborn photography packages Dubai"
        style={{ background: "#0c0b09", padding: "clamp(4rem, 9vw, 7rem) 0", position: "relative", overflow: "hidden" }}
      >
        {/* Atmospheric gold glow */}
        <div style={{ position: "absolute", top: "10%", left: "50%", transform: "translateX(-50%)", width: "min(900px,100vw)", height: "500px", background: "radial-gradient(ellipse, rgba(201,168,76,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(1.25rem,5vw,4rem)", position: "relative" }}>
          <div style={{ textAlign: "center", maxWidth: "620px", margin: "0 auto clamp(2.5rem,5vw,3.5rem)" }}>
            <div className="label" style={{ marginBottom: "0.75rem" }}>Packages &amp; Pricing</div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.9rem,4vw,3.25rem)", lineHeight: 1.1, letterSpacing: "-0.025em", marginBottom: "1rem" }}>
              Newborn Photography <span className="text-gold-gradient">Collections</span><br />
              <span style={{ fontSize: "0.6em", color: "rgba(250,246,238,0.5)", fontWeight: 400 }}>Dubai</span>
            </h2>
            <p className="body-lg" style={{ fontSize: "0.95rem", marginBottom: "0.75rem" }}>
              Luxury home newborn photography designed to preserve your baby&apos;s first precious memories.
            </p>
            <p className="body-sm" style={{ fontSize: "0.82rem", maxWidth: "480px", margin: "0 auto" }}>
              Every collection includes professional home setup, premium props, luxury baby wardrobe, and expert fine-art retouching.
            </p>
          </div>

          {/* Baby-led / relaxed / no-rush pills — replaces transactional "session hours" framing */}
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.6rem", marginBottom: "clamp(2.5rem,5vw,4rem)" }}>
            {["Baby-Led", "Relaxed", "Luxury Experience", "No Rush"].map((label) => (
              <span
                key={label}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.68rem",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--gold-light)",
                  border: "1px solid rgba(201,168,76,0.3)",
                  background: "rgba(201,168,76,0.06)",
                  padding: "0.45rem 1rem",
                  borderRadius: "100px",
                }}
              >
                {label}
              </span>
            ))}
          </div>

          <div className="pkg-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem", alignItems: "start" }} role="list" aria-label="Newborn photography collections">
            {packages.map((pkg) => (
              <article
                key={pkg.name}
                role="listitem"
                aria-label={`${pkg.name} — ${pkg.price}`}
                className={`pkg-card ${pkg.featured ? "pkg-card-featured" : ""}`}
                style={{
                  position: "relative",
                  borderRadius: "18px",
                  padding: pkg.featured ? "1.5px" : "0",
                  background: pkg.featured
                    ? "linear-gradient(150deg, rgba(201,168,76,0.75) 0%, rgba(201,168,76,0.2) 50%, rgba(201,168,76,0.55) 100%)"
                    : "none",
                  boxShadow: pkg.featured
                    ? "0 0 0 1px rgba(201,168,76,0.3), 0 28px 70px rgba(0,0,0,0.55), 0 0 60px rgba(201,168,76,0.1)"
                    : "0 10px 36px rgba(0,0,0,0.4)",
                  zIndex: pkg.featured ? 2 : 1,
                }}
                data-track-event="package_view"
                data-wa-location={`Package Card - ${pkg.name}`}
              >
                <div style={{
                  borderRadius: pkg.featured ? "16.5px" : "18px",
                  background: pkg.featured
                    ? "linear-gradient(160deg, #1c1408 0%, #0f0c08 60%, #1a1208 100%)"
                    : "rgba(255,255,255,0.028)",
                  border: pkg.featured ? "none" : "1px solid rgba(201,168,76,0.14)",
                  backdropFilter: "blur(20px)",
                  padding: "2.25rem 1.85rem",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}>
                  {pkg.featured && (
                    <div aria-label="Most popular collection" style={{
                      position: "absolute", top: "-0.9rem", left: "50%", transform: "translateX(-50%)",
                      background: "linear-gradient(135deg, #C9A84C, #E8D5A3, #C9A84C)", color: "#0f0c08",
                      fontFamily: "var(--font-body)", fontSize: "0.6rem", fontWeight: 700,
                      letterSpacing: "0.18em", textTransform: "uppercase", padding: "0.4rem 1.2rem",
                      borderRadius: "100px", whiteSpace: "nowrap", boxShadow: "0 4px 16px rgba(201,168,76,0.4)",
                    }}>
                      Most Popular
                    </div>
                  )}

                  <div style={{ fontSize: "1.75rem", marginBottom: "0.5rem" }} aria-hidden="true">{pkg.emoji}</div>
                  <div style={{ fontFamily: "var(--font-body)", fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(201,168,76,0.65)", marginBottom: "0.4rem" }}>
                    {pkg.eyebrow}
                  </div>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", color: pkg.featured ? "var(--gold-light)" : "var(--cream)", fontWeight: 600, lineHeight: 1.2, letterSpacing: "-0.01em", marginBottom: "1.1rem" }}>
                    {pkg.name}
                  </h3>

                  <div style={{ width: "100%", height: "1px", background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.3) 30%, rgba(201,168,76,0.3) 70%, transparent)", marginBottom: "1.1rem" }} />

                  <div style={{ marginBottom: "1.5rem" }}>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: "2.4rem", fontWeight: 700, lineHeight: 1, color: pkg.featured ? "var(--gold-light)" : "var(--cream)", letterSpacing: "-0.02em" }}>
                      {pkg.price}
                    </div>
                    <div style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", color: "rgba(250,246,238,0.45)", marginTop: "0.4rem" }}>
                      + {pkg.homeVisit} Home Visit <span style={{ opacity: 0.7 }}>(Dubai)</span>
                    </div>
                  </div>

                  <ul style={{ listStyle: "none", padding: 0, marginBottom: "1.75rem", display: "flex", flexDirection: "column", gap: "0.7rem" }} aria-label={`${pkg.name} includes`}>
                    {pkg.highlights.map((h) => (
                      <li key={h.text} style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem" }}>
                        <span style={{ color: "rgba(201,168,76,0.9)", marginTop: "2px" }} aria-hidden="true">
                          <PackageIcon type={h.icon as PackageIconType} />
                        </span>
                        <span style={{ fontFamily: "var(--font-body)", fontSize: "0.83rem", color: "rgba(250,246,238,0.75)", lineHeight: 1.55 }}>
                          {h.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={`${WA_BASE}?text=${encodeURIComponent(`Hi MG Photography UAE, I’m interested in the ${pkg.waText} for a newborn home photoshoot in Dubai. Could you please confirm availability and the total price for my area?`)}`}
                    className={`pkg-btn ${pkg.featured ? "pkg-btn-gold" : "pkg-btn-outline"}`}
                    style={{
                      display: "flex", justifyContent: "center", alignItems: "center", gap: "0.5rem",
                      width: "100%", textAlign: "center", marginTop: "auto",
                      padding: "0.95rem 1rem", borderRadius: "100px",
                      fontFamily: "var(--font-body)", fontSize: "0.76rem", fontWeight: 700,
                      letterSpacing: "0.12em", textTransform: "uppercase", textDecoration: "none",
                      transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)", position: "relative", overflow: "hidden",
                    }}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Check availability for the ${pkg.name} newborn photography collection in Dubai via WhatsApp`}
                    data-wa-location={`Package - ${pkg.name}`}
                    data-service-type="newborn_photography"
                    data-track-event="package_availability_click"
                    data-package-name={pkg.name}
                  >
                    <WAIcon />
                    {pkg.cta}
                  </a>
                </div>
              </article>
            ))}
          </div>

          <p style={{ textAlign: "center", marginTop: "2.5rem", fontFamily: "var(--font-body)", fontSize: "0.78rem", color: "rgba(250,246,238,0.4)" }}>
            Dubai home visit is AED 100. Travel outside Dubai and optional add-ons are charged separately.
          </p>
        </div>
      </section>

      {/* ── ENHANCE YOUR EXPERIENCE ──────────────────────────────────────────── */}
      <section
        aria-label="Enhance your newborn photography session"
        style={{ background: "var(--black)", padding: "clamp(4rem, 8vw, 6rem) 0" }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(1.25rem,5vw,4rem)" }}>
          <div style={{ textAlign: "center", maxWidth: "560px", margin: "0 auto clamp(2.5rem,5vw,3.5rem)" }}>
            <div className="label" style={{ marginBottom: "0.75rem" }}>Elevate Your Session</div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.7rem,3.5vw,2.75rem)", lineHeight: 1.1, letterSpacing: "-0.025em" }}>
              Enhance Your <span className="text-gold-gradient">Experience</span>
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.5rem" }} role="list" aria-label="Session add-ons">
            {addOns.map((addon) => (
              <article
                key={addon.name}
                role="listitem"
                aria-label={`${addon.name} — ${addon.price}`}
                className="addon-card"
                style={{
                  borderRadius: "18px",
                  border: "1px solid rgba(201,168,76,0.16)",
                  background: "rgba(255,255,255,0.025)",
                  backdropFilter: "blur(20px)",
                  padding: "2rem",
                  boxShadow: "0 10px 36px rgba(0,0,0,0.35)",
                }}
                data-track-event="addon_view"
                data-wa-location={`Add-on Card - ${addon.name}`}
              >
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "1rem", marginBottom: "0.75rem" }}>
                  <div style={{ fontSize: "1.75rem" }} aria-hidden="true">{addon.emoji}</div>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "1.6rem", fontWeight: 700, color: "var(--gold-light)", whiteSpace: "nowrap" }}>{addon.price}</div>
                </div>

                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.3rem", color: "var(--cream)", fontWeight: 600, marginBottom: "0.35rem" }}>
                  {addon.name}
                </h3>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.85rem", color: "rgba(250,246,238,0.5)", fontStyle: "italic", marginBottom: "1.25rem" }}>
                  {addon.tagline}
                </p>

                <div style={{ width: "100%", height: "1px", background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.25) 30%, rgba(201,168,76,0.25) 70%, transparent)", marginBottom: "1.25rem" }} />

                <ul style={{ listStyle: "none", padding: 0, marginBottom: "1.25rem", display: "flex", flexDirection: "column", gap: "0.65rem" }} aria-label={`${addon.name} highlights`}>
                  {addon.highlights.map((h) => (
                    <li key={h.text} style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem" }}>
                      <span style={{ color: "rgba(201,168,76,0.9)", marginTop: "2px" }} aria-hidden="true">
                        <PackageIcon type={h.icon as PackageIconType} />
                      </span>
                      <span style={{ fontFamily: "var(--font-body)", fontSize: "0.82rem", color: "rgba(250,246,238,0.75)", lineHeight: 1.5 }}>
                        {h.text}
                      </span>
                    </li>
                  ))}
                </ul>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem", marginBottom: "1.75rem" }}>
                  {addon.chips.map((chip) => (
                    <span key={chip} style={{
                      fontFamily: "var(--font-body)", fontSize: "0.68rem", fontWeight: 600,
                      color: "rgba(250,246,238,0.65)", border: "1px solid rgba(250,246,238,0.15)",
                      padding: "0.3rem 0.75rem", borderRadius: "100px",
                    }}>
                      {chip}
                    </span>
                  ))}
                </div>

                <a
                  href={`${WA_BASE}?text=${encodeURIComponent(`Hi MG Photography UAE, I’m interested in the ${addon.waText} with a newborn home photoshoot in Dubai. Could you please share availability and details?`)}`}
                  className="pkg-btn pkg-btn-outline"
                  style={{
                    display: "flex", justifyContent: "center", alignItems: "center", gap: "0.5rem",
                    width: "100%", textAlign: "center",
                    padding: "0.9rem 1rem", borderRadius: "100px",
                    fontFamily: "var(--font-body)", fontSize: "0.74rem", fontWeight: 700,
                    letterSpacing: "0.12em", textTransform: "uppercase", textDecoration: "none",
                    transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Add the ${addon.name} to my newborn photography session via WhatsApp`}
                  data-wa-location={`Add-on - ${addon.name}`}
                  data-service-type="newborn_photography"
                  data-track-event="addon_click"
                >
                  <WAIcon />
                  {addon.cta}
                </a>
              </article>
            ))}
          </div>

          {/* Bottom info — home visit / travel charges */}
          <div style={{
            marginTop: "3rem", padding: "1.5rem 2rem", background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(201,168,76,0.1)", borderRadius: "12px", textAlign: "center",
          }}>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.85rem", color: "rgba(250,246,238,0.7)", marginBottom: "0.4rem" }}>
              <strong style={{ color: "var(--gold-light)" }}>Dubai Home Visit — AED 100</strong>
            </p>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.78rem", color: "rgba(250,246,238,0.45)" }}>
              Additional travel charges apply for Sharjah, Ajman, Abu Dhabi &amp; other Emirates.
            </p>
          </div>
        </div>
      </section>

      {/* ── Packages & add-ons interaction styles ────────────────────────── */}
      <style>{`
        .pkg-card { transition: transform 0.45s cubic-bezier(0.16,1,0.3,1), box-shadow 0.45s cubic-bezier(0.16,1,0.3,1); }
        .pkg-card:hover { transform: translateY(-8px); }
        .pkg-card-featured:hover {
          transform: translateY(-10px);
          box-shadow: 0 0 0 1px rgba(201,168,76,0.45), 0 34px 84px rgba(0,0,0,0.6), 0 0 80px rgba(201,168,76,0.14) !important;
        }
        .addon-card { transition: transform 0.4s cubic-bezier(0.16,1,0.3,1), border-color 0.4s ease, box-shadow 0.4s ease; }
        .addon-card:hover {
          transform: translateY(-6px);
          border-color: rgba(201,168,76,0.4);
          box-shadow: 0 20px 50px rgba(0,0,0,0.45);
        }
        .pkg-btn-gold {
          background: linear-gradient(90deg, #C9A84C 0%, #E8D5A3 35%, #C9A84C 55%, #A8883A 100%);
          background-size: 250% auto;
          color: #0f0c08;
        }
        .pkg-btn-gold:hover { animation: pkgBtnShimmer 1.4s linear infinite; box-shadow: 0 4px 20px rgba(201,168,76,0.4); }
        .pkg-btn-outline { background: transparent; border: 1.5px solid rgba(201,168,76,0.35); color: rgba(250,246,238,0.8); }
        .pkg-btn-outline:hover { background: rgba(201,168,76,0.1); border-color: rgba(201,168,76,0.6); color: var(--gold-light); }
        @keyframes pkgBtnShimmer { 0% { background-position: 0% center; } 100% { background-position: 250% center; } }

        @media (max-width: 900px) {
          .pkg-grid { grid-template-columns: 1fr !important; }
          .pkg-card:hover, .pkg-card-featured:hover { transform: translateY(-4px) !important; }
        }
        @media (max-width: 640px) {
          section[aria-label="Enhance your newborn photography session"] div[role="list"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      {/* ── WHY CHOOSE US ──────────────────────────────────────────────────── */}
      <section
        aria-label="Why choose MG Photography for newborn photography in Dubai"
        style={{ background: "var(--black)", padding: "clamp(4rem, 9vw, 7rem) 0" }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(1.25rem,5vw,4rem)" }}>
          <div style={{ textAlign: "center", marginBottom: "clamp(2.5rem, 5vw, 4rem)" }}>
            <div className="label" style={{ marginBottom: "0.75rem" }}>Why Families Choose Us</div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.7rem,3.5vw,3rem)", lineHeight: 1.1, letterSpacing: "-0.025em" }}>
              A Calm, Baby-Led <span className="text-gold-gradient">Newborn Experience</span>
            </h2>
          </div>
          <div className="trust-grid">
            {[
              { icon: "🤍", title: "Baby-Led Safe Posing", desc: "We follow your baby’s cues, never force a pose, and pause whenever feeding or soothing is needed." },
              { icon: "🏠", title: "Doorstep Home Service", desc: "We bring the professional newborn setup to your Dubai home so you and your baby can stay comfortable." },
              { icon: "✏️", title: "Fine-Art Retouching", desc: "Your selected portraits are individually edited and professionally retouched." },
              { icon: "⚡", title: "5–7 Working Day Gallery", desc: "Your edited gallery is delivered through a private online link." },
              { icon: "🎨", title: "Styled Setups Included", desc: "Props, wraps, backdrops and newborn wardrobe are prepared around your chosen collection." },
              { icon: "👨‍👩‍👧", title: "Parent & Family Options", desc: "Essence includes a parent portrait; Signature and Legacy include immediate family portraits." },
            ].map((t) => (
              <div key={t.title} className="trust-card">
                <div className="trust-icon" aria-hidden="true">{t.icon}</div>
                <h3 className="trust-title">{t.title}</h3>
                <p className="trust-desc">{t.desc}</p>
              </div>
            ))}
          </div>

          {/* Mid-page WhatsApp CTA */}
          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <a
              href={WA_URL}
              className="btn-whatsapp"
              style={{ fontSize: "0.9rem", padding: "1rem 2.5rem" }}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Check Dubai newborn photography availability on WhatsApp"
              data-wa-location="Why Choose Us CTA"
              data-service-type="newborn_photography"
            >
              <WAIcon />
              Check Newborn Availability on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section
        aria-label="Frequently asked questions about newborn photography in Dubai"
        style={{ background: "#0c0b09", padding: "clamp(4rem, 9vw, 7rem) 0" }}
      >
        <div style={{ maxWidth: "860px", margin: "0 auto", padding: "0 clamp(1.25rem,5vw,4rem)" }}>
          <div style={{ textAlign: "center", marginBottom: "clamp(2.5rem, 5vw, 4rem)" }}>
            <div className="label" style={{ marginBottom: "0.75rem" }}>FAQs</div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.7rem,3.5vw,3rem)", lineHeight: 1.1, letterSpacing: "-0.025em" }}>
              Newborn Photography Dubai <span className="text-gold-gradient">FAQ</span>
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {faqs.map((faq, i) => (
              <div
                key={faq.q}
                style={{ borderTop: i === 0 ? "1px solid rgba(201,168,76,0.15)" : "none", borderBottom: "1px solid rgba(201,168,76,0.15)", padding: "1.5rem 0" }}
                itemScope
                itemType="https://schema.org/Question"
              >
                <h3
                  style={{ fontFamily: "var(--font-display)", fontSize: "clamp(0.95rem, 1.8vw, 1.08rem)", color: "var(--cream)", fontWeight: 500, lineHeight: 1.35, marginBottom: "0.875rem" }}
                  itemProp="name"
                >
                  {faq.q}
                </h3>
                <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                  <p
                    style={{ fontFamily: "var(--font-body)", fontSize: "0.88rem", color: "rgba(250,246,238,0.65)", lineHeight: 1.75 }}
                    itemProp="text"
                  >
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <a
              href={WA_URL}
              className="btn-whatsapp"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ask MG Photography a question on WhatsApp"
              data-wa-location="FAQ CTA"
            >
              <WAIcon />
              Ask Us on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ── HELPFUL GUIDES — contextual links out to supporting blog content ── */}
      {helpfulArticles.length > 0 && (
        <section
          aria-label="Helpful newborn photography guides"
          style={{ background: "var(--black-rich)", padding: "clamp(3rem, 6vw, 5rem) 0" }}
        >
          <div style={{ maxWidth: "780px", margin: "0 auto", padding: "0 clamp(1.25rem,5vw,4rem)" }}>
            <div className="label" style={{ marginBottom: "0.75rem" }}>Learn More</div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.4rem,2.5vw,2rem)", lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: "1.75rem" }}>
              Helpful Newborn Photography Guides
            </h2>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0" }}>
              {helpfulArticles.map((article) => (
                <li key={article.slug} style={{ borderBottom: "1px solid rgba(201,168,76,0.1)", padding: "1.1rem 0" }}>
                  <Link
                    href={`/blog/${article.slug}/`}
                    style={{ color: "var(--cream)", fontFamily: "var(--font-display)", fontSize: "1.02rem", textDecoration: "none" }}
                    className="hover-gold"
                  >
                    {article.title}
                  </Link>
                  <p className="body-sm" style={{ fontSize: "0.85rem", marginTop: "0.4rem" }}>{article.excerpt}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ── INTERNAL LINKS ─────────────────────────────────────────────────── */}
      <section
        aria-label="Related photography services"
        style={{ background: "var(--black)", padding: "clamp(3rem, 6vw, 5rem) 0" }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(1.25rem,5vw,4rem)" }}>
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.4rem,2.5vw,2rem)", lineHeight: 1.2, letterSpacing: "-0.02em" }}>
              Also Available in <span className="text-gold-gradient">Dubai</span>
            </h2>
          </div>
          <nav aria-label="Related services" style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", justifyContent: "center" }}>
            {[
              { label: "Baby Photography Dubai", href: "/baby-photography-dubai/" },
              { label: "Maternity Photographer Dubai", href: "/maternity-photography-dubai/" },
              { label: "Family Photographer Dubai", href: "/outdoor-photography-dubai/" },
              { label: "Wedding Photography Dubai", href: "/wedding-photography-dubai/" },
              { label: "Newborn Photography Abu Dhabi", href: "/newborn-photography-abu-dhabi/" },
              { label: "Newborn Photography Sharjah", href: "/newborn-photography-sharjah/" },
              { label: "View All Reviews", href: "/testimonials/" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{ display: "inline-flex", padding: "0.55rem 1.1rem", border: "1px solid rgba(201,168,76,0.2)", fontFamily: "var(--font-body)", fontSize: "0.75rem", color: "rgba(250,246,238,0.65)", textDecoration: "none", letterSpacing: "0.04em", transition: "all 0.3s", fontWeight: 500 }}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────────────────────── */}
      <section
        aria-label="Check Dubai newborn photography session availability"
        style={{ background: "var(--black)", padding: "clamp(5rem, 12vw, 9rem) 0", textAlign: "center", position: "relative", overflow: "hidden" }}
      >
        <div aria-hidden="true" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "relative", zIndex: 2, maxWidth: "680px", margin: "0 auto", padding: "0 clamp(1.25rem,5vw,4rem)" }}>
          <div className="label" style={{ marginBottom: "1rem" }}>Check Your Date</div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem,5.5vw,4.5rem)", lineHeight: 1.06, letterSpacing: "-0.03em", marginBottom: "1.5rem" }}>
            Check Dubai Newborn<br />
            <span className="text-gold-gradient">Session Availability</span>
          </h2>

          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.5rem 1.5rem", marginBottom: "2.5rem" }}>
            {["✓ Doorstep Home Service", "✓ Props & Wardrobe Included", "✓ Baby-Led Posing", "✓ 5–7 Working Day Gallery"].map((item) => (
              <span key={item} style={{ fontSize: "0.8rem", color: "rgba(250,246,238,0.78)", fontFamily: "var(--font-body)", fontWeight: 500 }}>{item}</span>
            ))}
          </div>

          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "1rem" }}>
            <a
              href={WA_URL}
              className="btn-whatsapp"
              style={{ fontSize: "0.9rem", padding: "1.05rem 2.5rem" }}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Check Dubai newborn photography session availability via WhatsApp"
              data-wa-location="Final CTA"
              data-service-type="newborn_photography"
              data-track-event="availability_check_click"
            >
              <WAIcon />
              Check Availability on WhatsApp
            </a>
            <a
              href="#packages"
              className="btn-outline"
              style={{ fontSize: "0.88rem" }}
              aria-label="View Dubai newborn photography packages"
              data-track-event="view_packages_click"
              data-wa-location="Final CTA Packages"
            >
              View Packages
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
