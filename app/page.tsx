import Image from "next/image";
import HeroCarousel from "./components/HeroCarousel";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MobileStickyCTA from "./components/MobileStickyCTA";
import WhatsAppFloat from "./components/WhatsAppFloat";
import ProcessSteps from "./components/ProcessSteps";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dubai Newborn, Baby & Maternity Photography | MG",
  description: "Award-winning newborn, baby, maternity, family & wedding photography in Dubai. 500+ families. 5-star reviews. Book via WhatsApp.",
  keywords:
    "Dubai Newborn Photographer, Newborn Photography Dubai, Baby Photoshoot Dubai, Maternity Photographer Dubai, Family Photographer Dubai, Wedding Photographer Dubai",
  openGraph: {
    title: "Dubai Newborn, Baby & Maternity Photography | MG Photography UAE",
    description:
      "Luxury newborn, baby, maternity & family photography in Dubai. 500+ families photographed. Book your session today.",
    type: "website",
    locale: "en_AE",
  },
};

const WA_BOOK =
  "https://wa.me/971588764748?text=Hi%20MG%20Photography%2C%20I%27d%20like%20to%20book%20a%20session%20in%20Dubai.";
const WA_NEWBORN =
  "https://wa.me/971588764748?text=Hi%20MG%20Photography%2C%20I%27d%20like%20to%20book%20a%20newborn%20photography%20session%20in%20Dubai.";
const CALL_URL = "tel:+971588764748";

const WAIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: "1rem", height: "1rem", flexShrink: 0 }}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const heroSlides = [
  {
    src: "/images/hero-basket-newborn.png",
    alt: "Newborn baby photographer Dubai — MG Photography UAE luxury newborn sessions",
    objectPosition: "center 20%",
  },
  {
    src: "/images/gallery/newborn-photography-dubai-purple-fairy-lights-sleeping-15.jpg",
    alt: "Sleeping newborn baby with fairy lights and purple florals — luxury newborn photography Dubai",
    objectPosition: "center 25%",
  },
  {
    src: "/images/gallery/baby-photography-dubai-pink-floral-headband-smiling-13.jpg",
    alt: "Smiling baby girl with pink floral headband — baby photography Dubai",
    objectPosition: "center 22%",
  },
  {
    src: "/images/gallery/newborn-photography-dubai-pink-roses-fur-swaddle-19.jpg",
    alt: "Newborn baby swaddled in lavender wrap surrounded by pink roses — newborn photography Dubai",
    objectPosition: "center 30%",
  },
];

const quickServices = [
  {
    title: "Newborn Photography",
    desc: "Safe, gentle sessions in the first 14 days",
    href: "/newborn-photography/",
    icon: "🌸",
  },
  {
    title: "Baby Photography",
    desc: "Milestone sessions at 3, 6 & 12 months",
    href: "/baby-photography/",
    icon: "⭐",
  },
  {
    title: "Maternity Photography",
    desc: "Radiant bump portraits at 28–36 weeks",
    href: "/maternity-photography/",
    icon: "✨",
  },
  {
    title: "Family Photography",
    desc: "Timeless portraits for every family",
    href: "/outdoor-photography/",
    icon: "🏡",
  },
  {
    title: "Wedding Photography",
    desc: "Cinematic coverage of your special day",
    href: "/wedding-photography/",
    icon: "💍",
  },
];

const trustPoints = [
  { icon: "📸", title: "500+ Sessions", desc: "Trusted by families across Dubai, Abu Dhabi & Sharjah" },
  { icon: "✏️", title: "Professional Editing", desc: "Hand-retouched images — never batch processed" },
  { icon: "🎨", title: "Luxury Themes", desc: "Premium setups, backdrops & carefully curated props" },
  { icon: "🏠", title: "Home & Studio", desc: "We come to you, or welcome you to our studio" },
  { icon: "⚡", title: "Fast Delivery", desc: "Gallery delivered within 5–7 working days" },
  { icon: "⭐", title: "5-Star Reviews", desc: "100% of clients would recommend MG Photography" },
];

const services = [
  {
    title: "Newborn Photography",
    subtitle: "First breath. Forever memories.",
    href: "/newborn-photography/",
    img: "/images/hero-basket-newborn.png",
    imgAlt: "Sleeping newborn in floral basket",
    objectPos: "center 20%",
  },
  {
    title: "Baby Photography",
    subtitle: "Every milestone, preserved.",
    href: "/baby-photography/",
    img: "/images/story-rainbow-smile.png",
    imgAlt: "Joyful baby smiling in rainbow wrap",
    objectPos: "center 30%",
  },
  {
    title: "Maternity Photography",
    subtitle: "Radiant. Timeless. Powerful.",
    href: "/maternity-photography/",
    img: "/images/story-mother-holding.png",
    imgAlt: "Mother tenderly holding newborn",
    objectPos: "center top",
  },
  {
    title: "Wedding Photography",
    subtitle: "Your love story, told beautifully.",
    href: "/wedding-photography/",
    img: null,
    imgAlt: "",
    objectPos: "center",
  },
  {
    title: "Pre-Wedding Photography",
    subtitle: "Romance before forever.",
    href: "/pre-wedding-photography/",
    img: "/images/story-parent-fingers.png",
    imgAlt: "Intimate parental connection — parent fingers with baby",
    objectPos: "center",
  },
  {
    title: "Outdoor Photography",
    subtitle: "Dubai's beauty, your canvas.",
    href: "/outdoor-photography/",
    img: "/images/story-sibling.png",
    imgAlt: "Sibling with newborn — family outdoor portrait Dubai",
    objectPos: "center 30%",
  },
  {
    title: "Architecture Photography",
    subtitle: "Form, light, and vision.",
    href: "/architecture-photography/",
    img: "/images/architecture/luxury-villa-exterior-architecture-photography-dubai-03.jpg",
    imgAlt: "Luxury villa exterior at golden hour — architecture photography Dubai",
    objectPos: "center 40%",
  },
  {
    title: "Real Estate Photography",
    subtitle: "Spaces that sell themselves.",
    href: "/real-estate-photography/",
    img: "/images/architecture/luxury-villa-pool-real-estate-photography-dubai-02.jpg",
    imgAlt: "Luxury villa pool at sunset — real estate photography Dubai",
    objectPos: "center 45%",
  },
];

const recentSessions = [
  { src: "/images/gallery/newborn-baby-photography-dubai-purple-theme-parents-hands-01.jpg", alt: "Newborn baby held by parents' hands in purple-themed setup — newborn photography Dubai" },
  { src: "/images/gallery/newborn-baby-photography-dubai-purple-bonnet-bunny-02.jpg", alt: "Sleeping newborn in lace bonnet with crochet bunny — newborn photography Dubai" },
  { src: "/images/gallery/baby-photography-dubai-laughing-woven-basket-05.jpg", alt: "Laughing baby wrapped in lilac and cream in a woven basket — baby photography Dubai" },
  { src: "/images/gallery/newborn-photography-dubai-cream-hammock-sleeping-11.jpg", alt: "Newborn baby sleeping in a cream fabric hammock — newborn photography Dubai" },
  { src: "/images/gallery/newborn-photography-dubai-heart-bowl-yellow-wrap-09.jpg", alt: "Baby swaddled in yellow wrap inside a heart-shaped bowl with florals — newborn photography Dubai" },
  { src: "/images/gallery/baby-photography-dubai-purple-blanket-teddy-smiling-14.jpg", alt: "Smiling baby wrapped in purple blanket with teddy bear — baby photography Dubai" },
  { src: "/images/gallery/baby-photography-dubai-purple-wrap-basket-laughing-16.jpg", alt: "Laughing baby wrapped in lavender and cream in a wicker basket — baby photography Dubai" },
  { src: "/images/gallery/newborn-photography-dubai-green-wrap-macrame-sleeping-23.jpg", alt: "Newborn baby swaddled in olive green wrap on macrame backdrop — newborn photography Dubai" },
];

const testimonials = [
  { name: "Priya Sharma",            location: "Dubai Marina",    text: "MG Photography captured our newborn in a way that made me cry with joy. Every single image is a masterpiece. I have already booked the 3-month and 6-month sessions.",    service: "Newborn Photography"     },
  { name: "Aisha Al Mansoori",       location: "Abu Dhabi",       text: "Our wedding photos are absolutely stunning. They captured moments I didn't even know were happening. Our families were blown away. Truly world-class work.",                   service: "Wedding Photography"     },
  { name: "Rahul & Deepa Nair",      location: "Sharjah",         text: "The maternity shoot exceeded all expectations. The editing quality is extraordinary — I feel like a Bollywood celebrity in these photos! We will treasure these forever.",     service: "Maternity Photography"   },
  { name: "Fatima Hassan",           location: "Downtown Dubai",   text: "We've used MG Photography three times now. Each time the quality gets better. They've become our family photographers for life.",                                            service: "Family Photography"      },
  { name: "James & Maria Rodriguez", location: "JBR, Dubai",      text: "The pre-wedding shoot at the desert was absolutely cinematic. It felt like we were in a movie. Forever grateful.",                                                             service: "Pre-Wedding Photography" },
  { name: "Ahmed Al Rashid",         location: "Business Bay",    text: "The architectural shots are magazine-quality. Our properties sold 40% faster with these professional photographs. Worth every dirham.",                                         service: "Real Estate Photography" },
];

export default function HomePage() {
  return (
    <>
      <Header />
      <WhatsAppFloat />
      <MobileStickyCTA />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section style={{ position: "relative", height: "100svh", minHeight: "640px", overflow: "hidden", display: "flex", alignItems: "flex-end" }}>
        <HeroCarousel slides={heroSlides} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(105deg, rgba(13,13,13,0.88) 0%, rgba(13,13,13,0.60) 45%, rgba(13,13,13,0.18) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(13,13,13,0.97) 0%, rgba(13,13,13,0.35) 45%, transparent 72%)" }} />
        <div style={{ position: "absolute", top: "10%", right: "5%", width: "50vw", height: "50vw", maxWidth: "600px", maxHeight: "600px", borderRadius: "50%", background: "radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)", filter: "blur(60px)", pointerEvents: "none" }} />

        <div className="container-luxury" style={{ position: "relative", zIndex: 10, paddingBottom: "clamp(3rem, 8vh, 6rem)" }}>
          <div style={{ maxWidth: "700px" }}>
            {/* Location label */}
            <div className="label" style={{ marginBottom: "1.25rem", display: "flex", alignItems: "center", gap: "0.85rem" }}>
              <div className="gold-line" />
              Dubai · Abu Dhabi · Sharjah
            </div>

            {/* H1 — keyword-rich, conversion-focused */}
            <h1 style={{ fontFamily: "var(--font-display)", lineHeight: 1.06, letterSpacing: "-0.03em", marginBottom: "1.25rem" }}>
              <span style={{ display: "block", fontSize: "clamp(1.9rem, 5vw, 4rem)", color: "var(--cream)", fontWeight: 400 }}>Dubai Newborn, Baby &</span>
              <span style={{ display: "block", fontSize: "clamp(2.4rem, 6.5vw, 5.5rem)", fontWeight: 700, background: "linear-gradient(135deg, var(--gold-light) 0%, var(--gold-pale) 45%, var(--gold) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Maternity Photography</span>
            </h1>
            <p className="body-lg" style={{ maxWidth: "500px", marginBottom: "1.75rem", fontSize: "clamp(0.95rem, 1.8vw, 1.1rem)" }}>
              Capture the moments you'll treasure forever with luxury photography designed for Dubai families.
            </p>

            {/* Trust indicators — visible above the fold */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem 1.5rem", marginBottom: "2rem" }}>
              {[
                "✓ Dubai Based Photographer",
                "✓ 500+ Families Photographed",
                "✓ 5-Star Client Reviews",
                "✓ Home & Studio Sessions Available",
              ].map((item) => (
                <span key={item} style={{ fontSize: "clamp(0.7rem, 1.4vw, 0.8rem)", color: "rgba(250,246,238,0.85)", fontFamily: "var(--font-body)", fontWeight: 500, letterSpacing: "0.01em" }}>
                  {item}
                </span>
              ))}
            </div>

            {/* Primary CTAs */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.875rem", alignItems: "center" }}>
              <a
                href={WA_BOOK}
                className="btn-whatsapp"
                style={{ fontSize: "0.85rem", padding: "0.95rem 2rem" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WAIcon />
                Book on WhatsApp
              </a>
              <a href="/newborn-photography/" className="btn-outline" style={{ fontSize: "0.82rem" }}>
                View Portfolio →
              </a>
            </div>

            {/* Stats bar */}
            <div style={{ marginTop: "2.5rem", display: "flex", flexWrap: "wrap", gap: "1.5rem 3rem", paddingTop: "1.75rem", borderTop: "1px solid rgba(201,168,76,0.18)" }}>
              {[["500+","Families"],["8+","Years"],["5★","Rating"],["3","UAE Cities"]].map(([val,lab]) => (
                <div key={lab}>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "1.6rem", color: "var(--gold)", fontWeight: 700, lineHeight: 1 }}>{val}</div>
                  <div className="body-sm" style={{ fontSize: "0.72rem", marginTop: "0.2rem" }}>{lab}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ position: "absolute", bottom: "2rem", right: "clamp(1.5rem, 5vw, 4rem)", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.4rem", zIndex: 10 }}>
          <div className="label" style={{ fontSize: "0.55rem", writingMode: "vertical-rl", letterSpacing: "0.25em" }}>Scroll</div>
          <div style={{ width: "1px", height: "60px", background: "linear-gradient(to bottom, var(--gold), transparent)" }} />
        </div>
      </section>

      {/* ── QUICK SERVICES — immediately below hero ───────────────────────── */}
      <section style={{ background: "#0c0b09", padding: "clamp(3rem, 7vw, 5rem) 0" }}>
        <div className="container-luxury">
          <div style={{ textAlign: "center", marginBottom: "clamp(2rem, 4vw, 3rem)" }}>
            <div className="label" style={{ marginBottom: "0.75rem" }}>Our Services</div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 3.5vw, 2.75rem)", lineHeight: 1.12, letterSpacing: "-0.025em" }}>
              Photography for <span className="text-gold-gradient">Dubai Families</span>
            </h2>
          </div>

          <div className="quick-services-grid">
            {quickServices.map((s) => (
              <a key={s.href} href={s.href} className="quick-service-card" aria-label={`${s.title} in Dubai`}>
                <div className="quick-service-icon">{s.icon}</div>
                <div>
                  <h3 className="quick-service-title">{s.title}</h3>
                  <p className="quick-service-desc">{s.desc}</p>
                </div>
                <span className="quick-service-cta">Book Now →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST SECTION ─────────────────────────────────────────────────── */}
      <section style={{ background: "var(--black)", padding: "clamp(4rem, 9vw, 7rem) 0" }}>
        <div className="container-luxury">
          <div style={{ textAlign: "center", maxWidth: "560px", margin: "0 auto clamp(2.5rem, 5vw, 4rem)" }}>
            <div className="label" style={{ marginBottom: "0.75rem" }}>Why Us</div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.7rem, 3.5vw, 3rem)", lineHeight: 1.1, letterSpacing: "-0.025em" }}>
              Why Dubai Families Choose <span className="text-gold-gradient">MG Photography</span>
            </h2>
          </div>

          <div className="trust-grid">
            {trustPoints.map((t) => (
              <div key={t.title} className="trust-card">
                <div className="trust-icon">{t.icon}</div>
                <h3 className="trust-title">{t.title}</h3>
                <p className="trust-desc">{t.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "clamp(2rem, 4vw, 3rem)" }}>
            <a href={WA_BOOK} className="btn-whatsapp" style={{ fontSize: "0.85rem" }} target="_blank" rel="noopener noreferrer">
              <WAIcon />
              Book Your Session via WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ── EMOTIONAL STORYTELLING ── teddy close-up ─────────────────────── */}
      <section style={{ background: "var(--black)", padding: "clamp(5rem,12vw,9rem) 0", overflow: "hidden" }}>
        <div className="container-luxury">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(3rem,6vw,7rem)", alignItems: "center" }}>
            <div style={{ position: "relative", aspectRatio: "4/5", marginLeft: "-2rem" }}>
              <Image src="/images/story-teddy-closeup.png" alt="Newborn baby holding teddy bear — intimate close-up newborn photography Dubai" fill style={{ objectFit: "cover" }} />
              <div style={{ position: "absolute", bottom: "-1.5rem", right: "-1.5rem", width: "60%", height: "60%", border: "1px solid rgba(201,168,76,0.25)", zIndex: -1 }} />
            </div>
            <div style={{ paddingRight: "2rem" }}>
              <div className="label" style={{ marginBottom: "1.5rem" }}>The First Days</div>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem,4vw,3.5rem)", lineHeight: 1.1, letterSpacing: "-0.025em", marginBottom: "1.5rem" }}>
                Tiny fingers.<br />A world of<br /><em style={{ color: "var(--gold)" }}>pure wonder.</em>
              </h2>
              <ul style={{ listStyle: "none", padding: 0, marginBottom: "2rem", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                {[
                  "Sessions in the first 14 days — when they curl & sleep deeply",
                  "Newborn-safe posing by certified photographer",
                  "Home visits across Dubai or in-studio sessions",
                  "Full gallery delivered within 5–7 days",
                ].map((item) => (
                  <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem", fontFamily: "var(--font-body)", fontSize: "0.9rem", color: "rgba(250,246,238,0.72)", lineHeight: 1.6 }}>
                    <span style={{ color: "var(--gold)", flexShrink: 0, marginTop: "0.1rem" }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                <a href={WA_NEWBORN} className="btn-whatsapp" style={{ fontSize: "0.78rem", padding: "0.8rem 1.5rem" }} target="_blank" rel="noopener noreferrer">
                  <WAIcon />
                  Book Newborn Session
                </a>
                <a href="/newborn-photography/" className="btn-outline" style={{ fontSize: "0.78rem", padding: "0.8rem 1.5rem" }}>
                  View Gallery →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAMILY TRUST ── parent hands framing baby ────────────────────── */}
      <section style={{ background: "#0a0a0a", overflow: "hidden" }}>
        <div style={{ position: "relative", height: "clamp(480px,70vh,780px)", width: "100%" }}>
          <Image src="/images/trust-parent-hands.png" alt="Family photographer Dubai — parent hands surrounding newborn baby" fill style={{ objectFit: "cover", objectPosition: "center 30%" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(10,10,10,0.0) 40%, rgba(10,10,10,0.88) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,10,10,0.7) 0%, transparent 50%)" }} />
          <div style={{ position: "absolute", right: "clamp(1.5rem,8vw,8rem)", top: "50%", transform: "translateY(-50%)", maxWidth: "420px", zIndex: 10 }}>
            <div className="label" style={{ marginBottom: "1.25rem" }}>Family Connection</div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem,3.5vw,3rem)", color: "var(--cream)", lineHeight: 1.12, letterSpacing: "-0.02em", marginBottom: "1.25rem" }}>
              Protected by love.<br /><span className="text-gold-gradient">Preserved forever.</span>
            </h2>
            <p className="body-lg" style={{ marginBottom: "2rem", fontSize: "1rem" }}>
              Every session is designed around your family's comfort, your baby's safety, and the invisible emotional threads that bind you.
            </p>
            <a href={WA_BOOK} className="btn-whatsapp" style={{ fontSize: "0.82rem" }} target="_blank" rel="noopener noreferrer">
              <WAIcon />
              Book a Family Session
            </a>
          </div>
        </div>
      </section>

      {/* ── WHAT WE CREATE ── editorial service tiles ─────────────────────── */}
      <section style={{ background: "var(--black)", padding: "clamp(5rem,10vw,8rem) 0" }}>
        <div className="container-luxury">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", alignItems: "end", marginBottom: "clamp(3rem,6vw,5rem)" }}>
            <div>
              <div className="label" style={{ marginBottom: "1rem" }}>What We Create</div>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem,4.5vw,4rem)", lineHeight: 1.08, letterSpacing: "-0.03em" }}>
                Photography for<br /><span className="text-gold-gradient">every chapter</span>
              </h2>
            </div>
            <p className="body-lg" style={{ paddingBottom: "0.25rem" }}>
              From a baby's first breath to architectural grandeur — every service carries the same obsessive attention to detail.
            </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gridAutoRows: "280px",
            gap: "3px",
          }}>
            {services.map((service, i) => {
              const isHero  = i === 0;
              const isWide  = i === 2;
              const isWide2 = i === 4;
              return (
                <a
                  key={service.href}
                  href={service.href}
                  className="service-tile"
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    textDecoration: "none",
                    display: "block",
                    gridColumn: isHero ? "span 2" : isWide ? "span 2" : isWide2 ? "span 2" : "span 1",
                    gridRow:   isHero ? "span 2" : "span 1",
                    background: service.img ? "transparent" : "linear-gradient(135deg, #1a1a1a 0%, #242424 100%)",
                  }}
                >
                  {service.img && (
                    <Image
                      src={service.img}
                      alt={`${service.title} Dubai — MG Photography UAE`}
                      fill
                      style={{ objectFit: "cover", objectPosition: service.objectPos, transition: "transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94)" }}
                      className="service-tile-img"
                    />
                  )}
                  <div style={{
                    position: "absolute", inset: 0,
                    background: service.img
                      ? "linear-gradient(to top, rgba(13,13,13,0.88) 0%, rgba(13,13,13,0.3) 50%, rgba(13,13,13,0.1) 100%)"
                      : "linear-gradient(135deg, rgba(201,168,76,0.08) 0%, transparent 60%)",
                    transition: "background 0.4s",
                  }} />
                  <div className="service-tile-line" style={{
                    position: "absolute", bottom: 0, left: 0,
                    width: "0%", height: "2px",
                    background: "var(--gold)",
                    transition: "width 0.4s cubic-bezier(0.16,1,0.3,1)",
                  }} />
                  <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "1.5rem" }}>
                    <div className="label" style={{ fontSize: "0.56rem", color: "rgba(201,168,76,0.6)", marginBottom: "0.4rem" }}>0{i + 1}</div>
                    <h3 style={{
                      fontFamily: "var(--font-display)",
                      fontSize: isHero ? "1.5rem" : "1.1rem",
                      color: "var(--cream)", fontWeight: 500, lineHeight: 1.2, marginBottom: "0.3rem",
                    }}>{service.title}</h3>
                    <p className="body-sm" style={{ fontSize: "0.78rem" }}>{service.subtitle}</p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── OUR STORY ─────────────────────────────────────────────────────── */}
      <section style={{ background: "var(--cream-warm)", padding: "clamp(5rem,12vw,9rem) 0", overflow: "hidden" }}>
        <div className="container-luxury">
          <div style={{ maxWidth: "600px", marginBottom: "clamp(3.5rem,7vw,6rem)" }}>
            <div className="label" style={{ marginBottom: "1rem", color: "var(--gold-dark)" }}>Our Story</div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem,4.5vw,4rem)", color: "var(--black)", lineHeight: 1.08, letterSpacing: "-0.025em", marginBottom: "1.75rem" }}>
              Born from a belief that<br />photography should<br /><em>move you.</em>
            </h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "1.05rem", color: "rgba(13,13,13,0.7)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
              MG Photography UAE began with a singular conviction — that every family deserves images that live on their walls, in their hearts, and in the stories they tell their children.
            </p>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "1.05rem", color: "rgba(13,13,13,0.7)", lineHeight: 1.8 }}>
              Over 8 years and 500+ families across Dubai, Abu Dhabi & Sharjah, we have never stopped believing that the most important thing in any photograph is the feeling it leaves behind.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr 1fr", gridTemplateRows: "auto auto", gap: "0.75rem", marginBottom: "4rem" }}>
            <div style={{ position: "relative", gridRow: "span 2", aspectRatio: "3/4" }}>
              <Image src="/images/story-rainbow-smile.png" alt="Baby smiling in rainbow wrap — baby photography Dubai milestone session" fill style={{ objectFit: "cover" }} />
              <div style={{ position: "absolute", bottom: "1rem", left: "1rem", background: "rgba(13,13,13,0.65)", backdropFilter: "blur(8px)", padding: "0.4rem 0.75rem" }}>
                <span style={{ fontFamily: "var(--font-body)", fontSize: "0.62rem", color: "var(--gold)", letterSpacing: "0.12em", textTransform: "uppercase" }}>Joy</span>
              </div>
            </div>
            <div style={{ position: "relative", aspectRatio: "4/3" }}>
              <Image src="/images/story-bear-hat-cot.png" alt="Newborn in bear hat — newborn photography Dubai studio" fill style={{ objectFit: "cover" }} />
            </div>
            <div style={{ position: "relative", aspectRatio: "4/3" }}>
              <Image src="/images/story-parent-fingers.png" alt="Parent fingers holding newborn — maternity photographer Dubai" fill style={{ objectFit: "cover" }} />
            </div>
            <div style={{ position: "relative", gridColumn: "span 2", aspectRatio: "16/7" }}>
              <Image src="/images/story-sibling.png" alt="Older sibling gazing at newborn — family photographer Dubai" fill style={{ objectFit: "cover", objectPosition: "center 30%" }} />
              <div style={{ position: "absolute", bottom: "1rem", right: "1rem", background: "rgba(13,13,13,0.65)", backdropFilter: "blur(8px)", padding: "0.4rem 0.75rem" }}>
                <span style={{ fontFamily: "var(--font-body)", fontSize: "0.62rem", color: "var(--gold)", letterSpacing: "0.12em", textTransform: "uppercase" }}>Family</span>
              </div>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px,1fr))", gap: "2rem", paddingTop: "3rem", borderTop: "1px solid rgba(13,13,13,0.12)" }}>
            {[
              { title: "Handcrafted cinematic retouching", desc: "Every image individually retouched by hand — never batch-processed, never generic." },
              { title: "Emotion-first storytelling",       desc: "We photograph what cannot be staged: the exhale, the quiet gaze, the involuntary smile." },
              { title: "Calm, newborn-safe sessions",      desc: "Your baby's comfort and safety guide every single artistic decision we make." },
              { title: "Thoughtfully curated memories",    desc: "We don't deliver hundreds of images. We deliver the right ones — each worthy of your wall." },
            ].map((val) => (
              <div key={val.title}>
                <div style={{ width: "1.75rem", height: "1px", background: "var(--gold-dark)", marginBottom: "1rem" }} />
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1rem", color: "var(--black)", fontWeight: 500, marginBottom: "0.6rem", lineHeight: 1.35 }}>{val.title}</h3>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.85rem", color: "rgba(13,13,13,0.62)", lineHeight: 1.7 }}>{val.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: "3rem" }}>
            <a href="/about/" className="btn-primary" style={{ background: "var(--black)", color: "var(--cream)" }}>Read Our Full Story →</a>
          </div>
        </div>
      </section>

      {/* ── RECENT SESSIONS ──────────────────────────────────────────────── */}
      <section style={{ background: "var(--black)", padding: "clamp(5rem,10vw,8rem) 0" }}>
        <div className="container-luxury">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", alignItems: "end", marginBottom: "clamp(3rem,6vw,5rem)" }}>
            <div>
              <div className="label" style={{ marginBottom: "1rem" }}>Recent Sessions</div>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem,4.5vw,4rem)", lineHeight: 1.08, letterSpacing: "-0.03em" }}>
                Fresh from<br /><span className="text-gold-gradient">the studio</span>
              </h2>
            </div>
            <p className="body-lg" style={{ paddingBottom: "0.25rem" }}>
              A glimpse into our latest newborn and baby sessions across Dubai, Abu Dhabi & Sharjah — captured this month.
            </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gridAutoRows: "220px",
            gap: "3px",
          }}>
            {recentSessions.map((session, i) => (
              <div
                key={session.src}
                className="service-tile"
                style={{
                  position: "relative",
                  overflow: "hidden",
                  gridColumn: i === 0 ? "span 2" : "span 1",
                  gridRow: i === 0 ? "span 2" : "span 1",
                }}
              >
                <Image
                  src={session.src}
                  alt={session.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  loading="lazy"
                  style={{ objectFit: "cover", transition: "transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94)" }}
                  className="service-tile-img"
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(13,13,13,0.5) 0%, transparent 40%)" }} />
              </div>
            ))}
          </div>

          <div style={{ marginTop: "3rem", textAlign: "center" }}>
            <a href="/gallery/" className="btn-outline" style={{ fontSize: "0.82rem" }}>View Full Gallery →</a>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────────── */}
      <section style={{ background: "var(--black-rich)", padding: "clamp(5rem,10vw,8rem) 0" }}>
        <div className="container-luxury">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "5rem", alignItems: "start" }}>
            <div style={{ position: "sticky", top: "6rem" }}>
              <div className="label" style={{ marginBottom: "1rem" }}>Client Reviews</div>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem,3.5vw,3rem)", lineHeight: 1.12, letterSpacing: "-0.025em", marginBottom: "1.5rem" }}>
                Stories that<br /><span className="text-gold-gradient">move us.</span>
              </h2>
              <p className="body-lg" style={{ marginBottom: "2rem", fontSize: "0.95rem" }}>
                Real words from real families across Dubai, Abu Dhabi & Sharjah. Every review verified on Google.
              </p>
              <div className="stars" style={{ marginBottom: "1rem" }}>{"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}</div>
              <p className="body-sm" style={{ marginBottom: "2rem", fontSize: "0.78rem" }}>5.0 · 500+ sessions</p>
              <a href="https://share.google/DzyXsdZg9iUQWHYg2" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ fontSize: "0.72rem", padding: "0.55rem 1.1rem" }}>View Google Reviews →</a>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {testimonials.map((t) => (
                <div key={t.name} className="testimonial-card" style={{ padding: "2rem", border: "1px solid rgba(201,168,76,0.1)", background: "rgba(255,255,255,0.02)" }}>
                  <div className="stars" style={{ marginBottom: "1rem" }}>{"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}</div>
                  <p style={{ fontFamily: "var(--font-display)", fontSize: "1rem", color: "var(--cream-warm)", lineHeight: 1.75, fontStyle: "italic", marginBottom: "1.5rem" }}>
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                      <div style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "0.9rem", color: "var(--cream)" }}>{t.name}</div>
                      <div className="body-sm" style={{ fontSize: "0.75rem" }}>{t.location}</div>
                    </div>
                    <div className="label" style={{ fontSize: "0.58rem", textAlign: "right" }}>{t.service}</div>
                  </div>
                </div>
              ))}
              <a href="/testimonials/" className="btn-outline" style={{ alignSelf: "flex-start", marginTop: "0.5rem" }}>Read All Reviews →</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────────────── */}
      <section style={{ background: "var(--black)", padding: "clamp(5rem,10vw,8rem) 0" }}>
        <div className="container-luxury">
          <div style={{ textAlign: "center", maxWidth: "520px", margin: "0 auto clamp(3.5rem,7vw,5.5rem)" }}>
            <div className="label" style={{ marginBottom: "1rem" }}>How It Works</div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem,3.5vw,3rem)", lineHeight: 1.12, letterSpacing: "-0.025em" }}>
              Simple. Calm.<br /><span className="text-gold-gradient">Unforgettable.</span>
            </h2>
          </div>
          <ProcessSteps />
        </div>
      </section>

      {/* ── FOLLOW OUR WORK ───────────────────────────────────────────────── */}
      <section style={{ background: "#0a0a0a", overflow: "hidden" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: "clamp(480px,65vh,700px)" }}>
          <div style={{ position: "relative" }}>
            <Image src="/images/story-mother-holding.png" alt="Mother holding newborn baby — maternity photographer Dubai" fill style={{ objectFit: "cover", objectPosition: "center top" }} />
          </div>
          <div style={{ background: "var(--black)", display: "flex", flexDirection: "column", justifyContent: "center", padding: "clamp(3rem,8vw,7rem) clamp(2.5rem,6vw,6rem)" }}>
            <div className="label" style={{ marginBottom: "1.25rem" }}>Follow Our Work</div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem,3.5vw,3rem)", lineHeight: 1.12, letterSpacing: "-0.025em", marginBottom: "1.5rem" }}>
              Every session.<br />A love story<br /><em style={{ color: "var(--gold)" }}>of its own.</em>
            </h2>
            <p className="body-lg" style={{ marginBottom: "2.5rem", fontSize: "0.97rem" }}>
              Follow us on Instagram to see behind-the-scenes moments, latest sessions, and the quiet magic that happens when a parent sees their child's portraits for the first time.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
              {[
                { platform: "Instagram", handle: "@mgphotography.in",       href: "https://www.instagram.com/mgphotography.in" },
                { platform: "YouTube",   handle: "@mgphotography.thanjavur", href: "https://youtube.com/@mgphotography.thanjavur" },
                { platform: "Facebook",  handle: "MG Photography",           href: "https://www.facebook.com/share/18ctTaB2GS/" },
              ].map(({ platform, handle, href }) => (
                <a key={platform} href={href} target="_blank" rel="noopener noreferrer" className="social-link"
                  style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "0.875rem 1.25rem", border: "1px solid rgba(201,168,76,0.15)", textDecoration: "none", background: "rgba(255,255,255,0.02)" }}>
                  <div style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: "0.65rem", color: "var(--gold)", letterSpacing: "0.12em", width: "1.8rem", flexShrink: 0 }}>{platform.slice(0,2).toUpperCase()}</div>
                  <div>
                    <div style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "0.85rem", color: "var(--cream)" }}>{platform}</div>
                    <div className="body-sm" style={{ fontSize: "0.75rem" }}>{handle}</div>
                  </div>
                  <svg style={{ marginLeft: "auto", color: "rgba(201,168,76,0.4)" }} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── HIGH-CONVERTING FINAL CTA ─────────────────────────────────────── */}
      <section style={{ background: "var(--black)", padding: "clamp(6rem,14vw,10rem) 0", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "700px", height: "700px", borderRadius: "50%", background: "radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div className="container-luxury" style={{ position: "relative", zIndex: 2, maxWidth: "760px" }}>
          <div className="label" style={{ marginBottom: "1.25rem" }}>Ready to Book?</div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem,5.5vw,5rem)", lineHeight: 1.06, letterSpacing: "-0.03em", marginBottom: "1.5rem" }}>
            Ready to Capture Your<br />
            <span style={{ background: "linear-gradient(135deg, var(--gold-light), var(--gold-pale), var(--gold))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Baby's First Memories?</span>
          </h2>

          {/* Trust checklist */}
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.5rem 2rem", marginBottom: "2.5rem" }}>
            {[
              "✓ Luxury Photography Experience",
              "✓ Beautiful Custom Themes",
              "✓ Professional Retouching",
              "✓ Fast Delivery",
              "✓ Trusted by Dubai Families",
            ].map((item) => (
              <span key={item} style={{ fontSize: "0.82rem", color: "rgba(250,246,238,0.8)", fontFamily: "var(--font-body)", fontWeight: 500 }}>
                {item}
              </span>
            ))}
          </div>

          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "1rem", marginBottom: "3.5rem" }}>
            <a href={WA_BOOK} className="btn-whatsapp" style={{ fontSize: "0.9rem", padding: "1.05rem 2.5rem" }} target="_blank" rel="noopener noreferrer">
              <WAIcon />
              Book on WhatsApp
            </a>
            <a href="/newborn-photography/" className="btn-outline" style={{ fontSize: "0.88rem" }}>View Portfolio →</a>
          </div>

          <div style={{ display: "inline-flex", alignItems: "center", gap: "1.25rem", padding: "0.85rem 1.75rem", border: "1px solid rgba(201,168,76,0.18)", background: "rgba(201,168,76,0.04)" }}>
            <span style={{ color: "var(--gold)", fontWeight: 800, fontFamily: "var(--font-body)", letterSpacing: "0.1em", fontSize: "0.85rem" }}>BNI</span>
            <div style={{ width: "1px", height: "1.25rem", background: "rgba(201,168,76,0.3)" }} />
            <span className="body-sm" style={{ fontSize: "0.78rem" }}>Proud Member · Business Network International · Dubai Chapter</span>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        .service-tile { transition: all 0.4s cubic-bezier(0.25,0.46,0.45,0.94); }
        .service-tile:hover { filter: brightness(1.06); }
        .service-tile:hover .service-tile-img { transform: scale(1.05); }
        .service-tile:hover .service-tile-line { width: 100% !important; }
        @media (max-width: 768px) {
          .service-tile-grid { grid-template-columns: 1fr 1fr !important; }
          .service-tile-grid > a { grid-column: span 1 !important; grid-row: span 1 !important; }
        }
      `}</style>
    </>
  );
}
