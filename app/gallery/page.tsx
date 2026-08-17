import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppFloat from "../components/WhatsAppFloat";
import GalleryGrid from "./GalleryGrid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Photo Gallery | Wedding, Maternity, Newborn & Baby Photography Dubai",
  description: "Browse our portfolio of wedding, pre-wedding, newborn, baby & maternity sessions across Dubai, Abu Dhabi & Sharjah. Luxury themed setups, hand-retouched.",
  keywords:
    "Wedding Photography Gallery Dubai, Pre-Wedding Photography Portfolio, Newborn Photography Gallery Dubai, Baby Photography Portfolio Dubai, MG Photography UAE Gallery",
  alternates: { canonical: "https://mgphotographyglobal.com/gallery/" },
  openGraph: {
    title: "Photo Gallery | MG Photography UAE",
    description: "Browse our full portfolio of wedding, pre-wedding, newborn, baby, and maternity photography sessions across the UAE.",
    type: "website",
    locale: "en_AE",
    images: ["/images/gallery/wedding-photography-dubai-bridal-portrait-purple-saree-09.jpg"],
  },
};

export const galleryImages = [
  { src: "/images/gallery/wedding-photography-dubai-bridal-portrait-jewelry-closeup-01.jpg", alt: "Close-up portrait of an Indian bride wearing a maang tikka and gold jewelry", category: "Wedding" },
  { src: "/images/gallery/wedding-photography-dubai-bride-makeup-application-02.jpg", alt: "Makeup artist applying eyeshadow to an Indian bride before her wedding ceremony", category: "Wedding" },
  { src: "/images/gallery/wedding-photography-dubai-bride-ring-light-getting-ready-03.jpg", alt: "Bride peeking through a ring light during her wedding getting-ready session", category: "Wedding" },
  { src: "/images/gallery/wedding-photography-dubai-bride-getting-ready-blue-saree-04.jpg", alt: "Bride in a blue embellished saree having makeup applied before her wedding", category: "Wedding" },
  { src: "/images/gallery/wedding-photography-dubai-bride-mirror-reflection-05.jpg", alt: "Bride looking at her reflection in a lit mirror while getting ready for her wedding", category: "Wedding" },
  { src: "/images/gallery/wedding-photography-dubai-bride-adjusting-maang-tikka-06.jpg", alt: "Bride adjusting her gold maang tikka, showing intricate henna on her hands", category: "Wedding" },
  { src: "/images/gallery/wedding-photography-dubai-wedding-ceremony-hands-ritual-07.jpg", alt: "Close-up of bride and groom's hands during a traditional wedding ritual with rose petals", category: "Wedding" },
  { src: "/images/gallery/wedding-photography-dubai-bride-ceremony-prayer-mandap-08.jpg", alt: "Bride with hands folded in prayer during her wedding ceremony on a decorated mandap stage", category: "Wedding" },
  { src: "/images/gallery/wedding-photography-dubai-bridal-portrait-purple-saree-09.jpg", alt: "Indian bride in a purple and gold silk saree with traditional jewelry, studio portrait", category: "Wedding" },
  { src: "/images/gallery/wedding-photography-dubai-bride-groom-silhouette-10.jpg", alt: "Silhouette of bride and groom with foreheads touching against a warm orange backdrop", category: "Wedding" },
  { src: "/images/gallery/pre-wedding-photography-dubai-couple-beach-boat-01.jpg", alt: "Couple sitting together on a wooden fishing boat on a beach", category: "Pre-Wedding" },
  { src: "/images/gallery/pre-wedding-photography-dubai-couple-lifeguard-tower-02.jpg", alt: "Couple standing together under a thatched wooden lifeguard tower on the beach", category: "Pre-Wedding" },
  { src: "/images/gallery/pre-wedding-photography-dubai-couple-silhouette-sunset-03.jpg", alt: "Silhouette of a couple holding hands against a blue sunset sky, framed through a ring", category: "Pre-Wedding" },
  { src: "/images/gallery/pre-wedding-photography-dubai-couple-silhouette-embrace-04.jpg", alt: "Silhouette of a couple embracing against a blue evening sky", category: "Pre-Wedding" },
  { src: "/images/gallery/pre-wedding-photography-dubai-couple-beach-candid-05.jpg", alt: "Couple lying together on the sand sharing a candid moment on the beach", category: "Pre-Wedding" },
  { src: "/images/gallery/pre-wedding-photography-dubai-couple-floral-dress-lift-06.jpg", alt: "Man lifting his partner in a flowing green floral dress on a beach walkway", category: "Pre-Wedding" },
  { src: "/images/gallery/pre-wedding-photography-dubai-red-dress-portrait-rocks-07.jpg", alt: "Woman in a flowing red dress and sunglasses posing on coastal rocks", category: "Pre-Wedding" },
  { src: "/images/gallery/pre-wedding-photography-dubai-red-dress-flowing-fabric-08.jpg", alt: "Woman in a red flowing dress with fabric caught in the wind atop coastal rocks", category: "Pre-Wedding" },
  { src: "/images/gallery/pre-wedding-photography-dubai-couple-red-outfits-umbrella-09.jpg", alt: "Couple in matching red outfits sitting under a colorful umbrella on the beach", category: "Pre-Wedding" },
  { src: "/images/gallery/pre-wedding-photography-dubai-couple-red-outfits-embrace-10.jpg", alt: "Couple in red outfits lying on the beach sharing an intimate moment", category: "Pre-Wedding" },
  { src: "/images/gallery/pre-wedding-photography-dubai-couple-red-outfits-lighthouse-11.jpg", alt: "Couple in red outfits standing on a sandbar with a lighthouse in the distance", category: "Pre-Wedding" },
  { src: "/images/gallery/pre-wedding-photography-dubai-couple-sharing-ice-cream-12.jpg", alt: "Couple in red outfits sharing an ice cream cone, photographed from above", category: "Pre-Wedding" },
  { src: "/images/gallery/pre-wedding-photography-dubai-couple-colonial-veranda-13.jpg", alt: "Couple in red outfits sitting together on a pillared colonial-style veranda", category: "Pre-Wedding" },
  { src: "/images/gallery/maternity-photography-dubai-red-gown-flowing-fabric-waterfront.jpg", alt: "Pregnant woman in a red gown with fabric flowing in the wind beside Dubai Water Canal, Burj Khalifa in the background", category: "Maternity" },
  { src: "/images/gallery/maternity-portrait-lilac-gown-flowing-fabric-sunset.jpg", alt: "Pregnant woman in a lilac gown with sheer fabric flowing around her at sunset", category: "Maternity" },
  { src: "/images/gallery/maternity-photography-dubai-red-gown-skyline-baby-shoes.jpg", alt: "Pregnant woman in a flowing red gown holding baby shoes with the Dubai skyline behind her", category: "Maternity" },
  { src: "/images/gallery/maternity-portrait-couple-studio-yellow-backdrop.jpg", alt: "Expectant couple embracing in a studio maternity portrait against a golden-yellow backdrop", category: "Maternity" },
  { src: "/images/gallery/maternity-photography-dubai-couple-park-with-dog.jpg", alt: "Expectant couple sitting together in a park with their dog, Dubai skyline in the background", category: "Maternity" },
  { src: "/images/gallery/maternity-portrait-white-dress-garden-flowers.jpg", alt: "Pregnant woman in a white embroidered dress tossing yellow flowers in a sunlit garden", category: "Maternity" },
  { src: "/images/gallery/maternity-photography-dubai-white-dress-park-skyline.jpg", alt: "Pregnant woman in a white embroidered dress standing in a park with the Dubai skyline behind her", category: "Maternity" },
  { src: "/images/gallery/maternity-portrait-couple-baby-socks-garden.jpg", alt: "Expectant couple holding tiny baby socks together in a garden at golden hour", category: "Maternity" },
  { src: "/images/gallery/maternity-portrait-family-group-gazebo.jpg", alt: "Pregnant woman surrounded by family members celebrating together under a gazebo", category: "Maternity" },
  { src: "/images/gallery/maternity-portrait-couple-colonial-veranda-golden-hour.jpg", alt: "Expectant couple standing together on a pillared veranda at golden hour", category: "Maternity" },
  { src: "/images/gallery/maternity-portrait-tulle-gown-black-and-white.jpg", alt: "Pregnant woman in a dramatic tulle gown posing in a black and white studio portrait", category: "Maternity" },
  { src: "/images/gallery/maternity-portrait-couple-black-and-white-studio.jpg", alt: "Black and white studio portrait of an expectant couple embracing", category: "Maternity" },
  { src: "/images/gallery/maternity-portrait-black-and-white-silhouette-profile.jpg", alt: "Black and white profile portrait of a pregnant woman cradling her bump", category: "Maternity" },
  { src: "/images/gallery/maternity-portrait-couple-maroon-gown-indoor.jpg", alt: "Expectant couple standing together indoors, mother in a flowing maroon maternity gown", category: "Maternity" },
  { src: "/images/gallery/maternity-portrait-lilac-gown-traditional-veranda-night.jpg", alt: "Pregnant woman in a lilac gown seated on an ornately decorated traditional veranda at night", category: "Maternity" },
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
    name: "MG Photography UAE — Wedding, Newborn & Baby Photography Gallery",
    description: "Portfolio of wedding, pre-wedding, newborn, baby, and maternity photography sessions in Dubai, Abu Dhabi & Sharjah.",
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
            A curated look at our wedding, pre-wedding, maternity, newborn and baby photography — captured across Dubai, Abu Dhabi & Sharjah.
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
