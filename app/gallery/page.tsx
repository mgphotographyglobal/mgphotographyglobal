import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppFloat from "../components/WhatsAppFloat";
import GalleryGrid from "./GalleryGrid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Photo Gallery | Newborn & Baby Photography Dubai",
  description: "Browse our portfolio of newborn, baby & maternity sessions across Dubai, Abu Dhabi & Sharjah. Luxury themed setups, hand-retouched.",
  keywords:
    "Newborn Photography Gallery Dubai, Baby Photography Portfolio Dubai, MG Photography UAE Gallery",
  alternates: { canonical: "https://mgphotographyglobal.com/gallery/" },
  openGraph: {
    title: "Photo Gallery | MG Photography UAE",
    description: "Browse our full portfolio of newborn, baby, and maternity photography sessions across the UAE.",
    type: "website",
    locale: "en_AE",
    images: ["/images/gallery/newborn-photography-dubai-purple-fairy-lights-sleeping-15.jpg"],
  },
};

export const galleryImages = [
  { src: "/images/gallery/newborn-baby-photography-dubai-purple-theme-parents-hands-01.jpg", alt: "Newborn baby held by parents' hands in a purple-themed setup with teddy bear and flowers", category: "Newborn" },
  { src: "/images/gallery/newborn-baby-photography-dubai-purple-bonnet-bunny-02.jpg", alt: "Sleeping newborn in a lace bonnet resting beside a crochet bunny toy", category: "Newborn" },
  { src: "/images/gallery/newborn-photography-dubai-crying-basket-neutral-03.jpg", alt: "Expressive newborn portrait in a woven basket with a floral headband", category: "Newborn" },
  { src: "/images/gallery/baby-photography-dubai-laughing-woven-basket-05.jpg", alt: "Laughing baby wrapped in lilac and cream fabric inside a woven basket", category: "Baby" },
  { src: "/images/gallery/newborn-photography-dubai-purple-blanket-back-view-06.jpg", alt: "Newborn resting on a purple knit blanket surrounded by dried florals", category: "Newborn" },
  { src: "/images/gallery/newborn-photography-dubai-macro-details-eye-hand-foot-08.jpg", alt: "Black and white macro details collage — newborn eye, nose, lips, hand, foot and ear", category: "Details" },
  { src: "/images/gallery/newborn-photography-dubai-heart-bowl-yellow-wrap-09.jpg", alt: "Baby swaddled in a soft yellow wrap inside a heart-shaped wooden bowl with dried florals", category: "Newborn" },
  { src: "/images/gallery/newborn-photography-dubai-heart-bowl-yellow-wrap-wide-10.jpg", alt: "Wide shot of baby in yellow wrap inside heart-shaped bowl, holding a small bunny toy", category: "Baby" },
  { src: "/images/gallery/newborn-photography-dubai-cream-hammock-sleeping-11.jpg", alt: "Newborn baby sleeping peacefully in a cream fabric hammock surrounded by eucalyptus and florals", category: "Newborn" },
  { src: "/images/gallery/newborn-photography-dubai-purple-floral-sleeping-12.jpg", alt: "Sleeping newborn in purple bonnet surrounded by dried lavender and daisies", category: "Newborn" },
  { src: "/images/gallery/baby-photography-dubai-pink-floral-headband-smiling-13.jpg", alt: "Smiling baby with a pink peony floral headband resting on a purple blanket", category: "Baby" },
  { src: "/images/gallery/baby-photography-dubai-purple-blanket-teddy-smiling-14.jpg", alt: "Smiling baby wrapped in a purple blanket beside a crochet teddy bear, surrounded by flowers", category: "Baby" },
  { src: "/images/gallery/newborn-photography-dubai-purple-fairy-lights-sleeping-15.jpg", alt: "Sleeping newborn with a floral headband, purple blooms and warm fairy lights in the background", category: "Newborn" },
  { src: "/images/gallery/baby-photography-dubai-purple-wrap-basket-laughing-16.jpg", alt: "Laughing baby wrapped in lavender and cream fabric in a wicker basket with fairy lights and florals", category: "Baby" },
  { src: "/images/gallery/newborn-photography-dubai-white-basket-candlelight-18.jpg", alt: "Sleeping newborn in lavender wrap inside a white wicker basket, lit by candlelight and roses", category: "Newborn" },
  { src: "/images/gallery/newborn-photography-dubai-pink-roses-fur-swaddle-19.jpg", alt: "Newborn baby swaddled in a lavender wrap surrounded by pink and lilac roses on cream fur", category: "Newborn" },
  { src: "/images/gallery/baby-photography-dubai-purple-blanket-flowers-smiling-21.jpg", alt: "Smiling baby resting on a purple blanket surrounded by pink peonies and fairy lights", category: "Baby" },
  { src: "/images/gallery/baby-photography-dubai-purple-nest-teddy-smiling-22.jpg", alt: "Smiling baby lying in a purple knit nest beside a crochet teddy bear and blossoms", category: "Baby" },
  { src: "/images/gallery/newborn-photography-dubai-green-wrap-macrame-sleeping-23.jpg", alt: "Newborn baby swaddled in an olive green wrap on a macrame backdrop with a crochet teddy bear", category: "Newborn" },
];

export default function GalleryPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "@id": "https://mgphotographyglobal.com/gallery/#gallery",
    name: "MG Photography UAE — Newborn & Baby Photography Gallery",
    description: "Portfolio of newborn, baby, and maternity photography sessions in Dubai, Abu Dhabi & Sharjah.",
    url: "https://mgphotographyglobal.com/gallery/",
    image: galleryImages.map((img) => ({
      "@type": "ImageObject",
      contentUrl: `https://mgphotographyglobal.com${img.src}`,
      caption: img.alt,
    })),
  };

  return (
    <>
      <Header />
      <WhatsAppFloat />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section style={{ paddingTop: "8rem", paddingBottom: "3rem", background: "var(--black)", textAlign: "center", position: "relative" }}>
        <div style={{ position: "absolute", top: "40%", left: "50%", transform: "translate(-50%,-50%)", width: "500px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle,rgba(201,168,76,0.06) 0%,transparent 70%)", pointerEvents: "none" }} />
        <div className="container-luxury" style={{ position: "relative" }}>
          <div className="label" style={{ marginBottom: "1rem" }}>Our Portfolio</div>
          <h1 className="display-lg" style={{ marginBottom: "1.25rem", maxWidth: "700px", margin: "0 auto 1.25rem" }}>
            Every Session Tells<br />a <span className="text-gold-shimmer">Story Worth Keeping</span>
          </h1>
          <p className="body-lg" style={{ maxWidth: "500px", margin: "0 auto" }}>
            A curated look at our newborn and baby photography — captured across Dubai, Abu Dhabi & Sharjah.
          </p>
        </div>
      </section>

      <GalleryGrid images={galleryImages} />

      <section style={{ background: "var(--black-rich)", padding: "clamp(4rem,8vw,6rem) 0", textAlign: "center" }}>
        <div className="container-luxury">
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem,3vw,2.5rem)", color: "var(--cream)", marginBottom: "1.25rem" }}>
            Ready to create your own?
          </h2>
          <a
            href="https://wa.me/971588764748?text=Hi%20MG%20Photography%2C%20I%27d%20like%20to%20book%20a%20session%20after%20seeing%20your%20gallery."
            className="btn-whatsapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book on WhatsApp
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
