import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { GoogleTagManager } from "@next/third-parties/google";
import Analytics from "./components/Analytics";
import "./globals.css";

// ─── GA4 Measurement ID — replace with your actual ID ──────────────────────
// Format: G-XXXXXXXXXX — get this from Google Analytics > Admin > Data Streams
const GA_ID: string = "G-K504JFHLK3";
const PIXEL_ID = "1471358291339174";
const SITE_URL = "https://mgphotographyglobal.com";

// ─── GTM Container ID ────────────────────────────────────────────────────────
// GA4 above stays as a direct gtag.js implementation (NOT managed through GTM)
// to avoid double pageviews. Do not add a GA4 Configuration tag inside this
// GTM container — see the note next to <GoogleTagManager /> below.
const GTM_ID = "GTM-5M595Z78";

// ─── Metadata ────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Dubai Newborn, Baby & Maternity Photography | MG Photography UAE",
    template: "%s",
  },
  description:
    "Award-winning newborn, baby, maternity, family & wedding photography in Dubai. 500+ families. 5-star Google reviews. Home & studio sessions across Dubai, Abu Dhabi & Sharjah. Book via WhatsApp.",
  keywords: [
    "Dubai Newborn Photographer",
    "Newborn Photography Dubai",
    "Baby Photoshoot Dubai",
    "Maternity Photographer Dubai",
    "Family Photographer Dubai",
    "Wedding Photographer Dubai",
    "luxury newborn photography Dubai",
    "newborn baby photographer UAE",
    "photography Abu Dhabi",
    "photography Sharjah",
    "MG Photography UAE",
  ],
  authors: [{ name: "MG Photography UAE" }],
  creator: "MG Photography UAE",
  publisher: "MG Photography UAE",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: SITE_URL,
    siteName: "MG Photography UAE",
    title: "Dubai Newborn, Baby & Maternity Photography | MG Photography UAE",
    description:
      "Luxury newborn, baby, maternity & family photography in Dubai. 500+ families. 5-star reviews. Home & studio sessions. Book via WhatsApp.",
    images: [
      {
        url: "/images/hero-basket-newborn.webp",
        width: 1200,
        height: 630,
        alt: "Dubai Newborn Photographer — MG Photography UAE luxury newborn photography",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dubai Newborn, Baby & Maternity Photography | MG Photography UAE",
    description:
      "Luxury photography for Dubai families. 500+ sessions. 5-star reviews. Book via WhatsApp.",
    images: ["/images/hero-basket-newborn.webp"],
  },
  icons: { icon: "/favicon.ico", shortcut: "/favicon.ico" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0D0D0D",
};

// ─── Schema Markup ────────────────────────────────────────────────────────────
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": `${SITE_URL}/#organization`,
  name: "MG Photography UAE",
  alternateName: "MG Photography Dubai",
  description:
    "Award-winning luxury photography studio specialising in newborn, maternity, baby, family and wedding photography across Dubai, Abu Dhabi and Sharjah, UAE.",
  url: SITE_URL,
  telephone: "+971588764748",
  image: `${SITE_URL}/images/hero-basket-newborn.webp`,
  logo: `${SITE_URL}/favicon.ico`,
  priceRange: "AED 500 – AED 2,800",
  currenciesAccepted: "AED",
  paymentAccepted: "Cash, Bank Transfer",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Dubai",
    addressLocality: "Dubai",
    addressRegion: "Dubai",
    addressCountry: "AE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "25.2048",
    longitude: "55.2708",
  },
  areaServed: [
    { "@type": "City", name: "Dubai", "@id": "https://www.wikidata.org/wiki/Q612" },
    { "@type": "City", name: "Abu Dhabi", "@id": "https://www.wikidata.org/wiki/Q3392" },
    { "@type": "City", name: "Sharjah", "@id": "https://www.wikidata.org/wiki/Q178903" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Photography Services Dubai",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Newborn Photography Dubai", url: `${SITE_URL}/dubai-newborn-photography/` } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Baby Photography Dubai", url: `${SITE_URL}/baby-photography-dubai/` } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Maternity Photography Dubai", url: `${SITE_URL}/maternity-photography-dubai/` } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Wedding Photography Dubai", url: `${SITE_URL}/wedding-photography-dubai/` } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Family Photography Dubai", url: `${SITE_URL}/outdoor-photography-dubai/` } },
    ],
  },
  aggregateRating: {
    // Sources: Google Reviews (73) + Justdial Ratings (121) = 194 total
    // ratingCount: all ratings across both platforms
    // reviewCount: written text reviews only (Google Reviews)
    // Last verified: 2025 — update these values as review counts grow
    "@type": "AggregateRating",
    ratingValue: "5.0",
    bestRating: "5",
    worstRating: "1",
    ratingCount: "194",
    reviewCount: "73",
  },
  sameAs: [
    "https://www.instagram.com/mgphotography.in",
    "https://www.facebook.com/share/18ctTaB2GS/",
    "https://youtube.com/@mgphotography.thanjavur",
    "https://share.google/DzyXsdZg9iUQWHYg2",
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      opens: "09:00",
      closes: "20:00",
    },
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: "MG Photography UAE",
  url: SITE_URL,
  description: "Luxury newborn, baby, maternity & family photography in Dubai, Abu Dhabi & Sharjah",
  publisher: { "@id": `${SITE_URL}/#organization` },
};

// ─── Root Layout ─────────────────────────────────────────────────────────────
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AE" dir="ltr">
      <head>
        {/* ── Critical font preconnect — eliminates render-blocking ── */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=DM+Sans:wght@400;500;600;700&display=swap"
        />

        {/* ── Schema.org structured data ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />

        {/* ── GA4 — loads after interactive, doesn't block paint ── */}
        {GA_ID && GA_ID !== "G-XXXXXXXXXX" && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script
              id="ga4-init"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_ID}', {
                    send_page_view: true,
                    cookie_flags: 'SameSite=None;Secure',
                  });
                `,
              }}
            />
          </>
        )}

        {/* ── Meta Pixel — deferred, doesn't block paint ── */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${PIXEL_ID}');
              fbq('track', 'PageView');
            `,
          }}
        />
      </head>
      <body>
        {/* Google Tag Manager (noscript) — required fallback for JS-disabled
            browsers. @next/third-parties only injects the script loader below,
            so this iframe is added manually per Google's official spec. */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>

        {/* Skip to content — accessibility */}
        <a href="#main-content" className="skip-to-content" tabIndex={0}>
          Skip to main content
        </a>

        {/* Main content wrapper */}
        <main id="main-content">
          {children}
        </main>

        {/* Global analytics event listeners */}
        <Analytics />

        {/* Meta Pixel noscript fallback */}
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
      </body>

      {/* Google Tag Manager — official @next/third-parties integration.
          Loads gtm.js via next/script (afterInteractive), independent of GA4
          above. GA4 is NOT routed through this container, so no GA4
          Configuration tag should be added inside GTM — that would fire a
          second, duplicate pageview alongside the direct gtag.js call. */}
      <GoogleTagManager gtmId={GTM_ID} />
    </html>
  );
}
