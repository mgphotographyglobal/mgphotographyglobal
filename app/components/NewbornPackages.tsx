// NewbornPackages — luxury package pricing section
// Server component — all interactivity handled via CSS (no useState needed)
// Card images serve as cinematic mini-headers that transform cards from
// "pricing tables" into "experience offerings"
import Image from "next/image";

const WA = "https://wa.me/971588764748?text=Hi%20MG%20Photography%2C%20I%27d%20like%20to%20book%20a%20newborn%20photography%20package.";

// ── Icon SVGs — minimal, single-stroke, elegant ──────────────────────────
function IconSetup() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" style={{ flexShrink: 0, opacity: 0.7 }}>
      <circle cx="12" cy="12" r="3"/>
      <path d="M6.3 6.3l1.4 1.4M16.3 16.3l1.4 1.4M6.3 17.7l1.4-1.4M16.3 7.7l1.4-1.4M3 12h2M19 12h2M12 3v2M12 19v2"/>
    </svg>
  );
}
function IconImage() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" style={{ flexShrink: 0, opacity: 0.7 }}>
      <rect x="3" y="3" width="18" height="18" rx="2"/>
      <circle cx="8.5" cy="8.5" r="1.5"/>
      <path d="M21 15l-5-5L5 21"/>
    </svg>
  );
}
function IconDrive() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" style={{ flexShrink: 0, opacity: 0.7 }}>
      <rect x="7" y="2" width="10" height="20" rx="2"/>
      <line x1="12" y1="18" x2="12" y2="18.01"/>
      <rect x="10" y="6" width="4" height="3" rx="1"/>
    </svg>
  );
}
function IconFrame() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" style={{ flexShrink: 0, opacity: 0.7 }}>
      <rect x="2" y="2" width="20" height="20" rx="2"/>
      <rect x="6" y="6" width="12" height="12"/>
    </svg>
  );
}
function IconFamily() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" style={{ flexShrink: 0, opacity: 0.7 }}>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  );
}

// ── Feature item with matching icon ─────────────────────────────────────
type FeatureKey = "setup" | "image" | "drive" | "frame" | "family";

interface FeatureItem {
  type: FeatureKey;
  text: string;
}

function Feature({ item, light }: { item: FeatureItem; light: boolean }) {
  const color = light ? "rgba(250,246,238,0.75)" : "rgba(42,32,24,0.72)";
  const iconColor = light ? "rgba(201,168,76,0.9)" : "var(--gold-dark)";
  const Icon = {
    setup:  IconSetup,
    image:  IconImage,
    drive:  IconDrive,
    frame:  IconFrame,
    family: IconFamily,
  }[item.type];

  return (
    <li style={{ display: "flex", alignItems: "flex-start", gap: "0.65rem" }}>
      <span style={{ color: iconColor, marginTop: "2px" }}>
        <Icon />
      </span>
      <span style={{
        fontFamily: "var(--font-body)",
        fontSize: "0.875rem",
        color,
        lineHeight: 1.55,
      }}>
        {item.text}
      </span>
    </li>
  );
}

// ── Package definitions ──────────────────────────────────────────────────
interface Package {
  tier: string;
  badge: string | null;
  name: string;
  tagline: string;
  price: string;
  original: string | null;
  saving: string | null;
  features: FeatureItem[];
  btnText: string;
  img: string;
  imgAlt: string;
  imgPos: string;
  isSignature: boolean;
  isLuxury: boolean;
}

const packages: Package[] = [
  {
    tier:     "Beginning",
    badge:    null,
    name:     "Beginning",
    tagline:  "For preserving your baby's first tiny memories beautifully.",
    price:    "AED 500",
    original: null,
    saving:   null,
    features: [
      { type: "setup", text: "1 Styled Setup" },
      { type: "image", text: "10 Edited Images" },
    ],
    btnText: "Plan Your Baby's Shoot",
    img:    "/images/nb-white-knit-smile.png",
    imgAlt: "Sleeping newborn in white knit — beginning newborn session",
    imgPos: "center 35%",
    isSignature: false,
    isLuxury:    false,
  },
  {
    tier:     "Signature",
    badge:    "Most Popular",
    name:     "Signature",
    tagline:  "Our most loved newborn storytelling experience.",
    price:    "AED 800",
    original: "AED 1,000",
    saving:   "Save AED 200",
    features: [
      { type: "setup", text: "2 Styled Setups" },
      { type: "image", text: "15 Edited Images" },
      { type: "drive", text: "Complimentary Pen Drive" },
    ],
    btnText: "Choose This Experience",
    img:    "/images/nb-grandma-hijab-baby.png",
    imgAlt: "Grandmother holding smiling newborn — signature session",
    imgPos: "center 30%",
    isSignature: true,
    isLuxury:    false,
  },
  {
    tier:     "Premium",
    badge:    null,
    name:     "Premium",
    tagline:  "A premium newborn session with multiple artistic concepts.",
    price:    "AED 1,200",
    original: "AED 1,500",
    saving:   "Save AED 300",
    features: [
      { type: "setup", text: "3 Styled Setups" },
      { type: "image", text: "20 Edited Images" },
      { type: "drive", text: "Complimentary Pen Drive" },
    ],
    btnText: "Reserve Your Session",
    img:    "/images/nb-couple-embrace-baby.png",
    imgAlt: "Parents with newborn — premium family newborn session",
    imgPos: "center 25%",
    isSignature: false,
    isLuxury:    false,
  },
  {
    tier:     "Luxury",
    badge:    "Ultimate Experience",
    name:     "Luxury",
    tagline:  "A complete cinematic luxury family experience.",
    price:    "AED 2,000",
    original: "AED 2,500",
    saving:   "Save AED 500",
    features: [
      { type: "setup",  text: "5 Styled Setups" },
      { type: "image",  text: "30 Edited Images" },
      { type: "family", text: "Complimentary Family Shoot" },
      { type: "frame",  text: "Complimentary A4 Frame × 1" },
      { type: "frame",  text: "Complimentary A5 Frame × 1" },
    ],
    btnText: "Book Luxury Experience",
    img:    "/images/nb-hero-couple-window.png",
    imgAlt: "Couple kissing over newborn in window light — luxury family session",
    imgPos: "center 20%",
    isSignature: false,
    isLuxury:    true,
  },
];

// ── Card component ───────────────────────────────────────────────────────
function PackageCard({ pkg }: { pkg: Package }) {
  const { isSignature, isLuxury } = pkg;

  // Each card variant gets subtly different base styling
  // to create visual hierarchy without feeling repetitive
  const cardBg       = isSignature
    ? "linear-gradient(160deg, #1c1408 0%, #0f0c08 60%, #1a1208 100%)"
    : isLuxury
    ? "linear-gradient(160deg, #120e05 0%, #0f0c08 60%, #16110a 100%)"
    : "rgba(255,255,255,0.028)";

  const borderColor  = isSignature
    ? "rgba(201,168,76,0.55)"
    : isLuxury
    ? "rgba(201,168,76,0.35)"
    : "rgba(201,168,76,0.14)";

  const shadowStyle  = isSignature
    ? "0 0 0 1px rgba(201,168,76,0.3), 0 24px 64px rgba(0,0,0,0.55), 0 0 60px rgba(201,168,76,0.08)"
    : isLuxury
    ? "0 0 0 1px rgba(201,168,76,0.18), 0 20px 56px rgba(0,0,0,0.5)"
    : "0 8px 32px rgba(0,0,0,0.35)";

  const light = true; // all cards sit on dark backgrounds

  return (
    <div
      className={`pkg-card-wrap ${isSignature ? "pkg-signature" : ""} ${isLuxury ? "pkg-luxury" : ""}`}
      style={{
        position:     "relative",
        borderRadius: "16px",
        // Luxe outer glow wrapper for Signature/Luxury
        padding:       isSignature || isLuxury ? "1.5px" : "0",
        background:    isSignature
          ? "linear-gradient(145deg, rgba(201,168,76,0.7) 0%, rgba(201,168,76,0.2) 50%, rgba(201,168,76,0.5) 100%)"
          : isLuxury
          ? "linear-gradient(145deg, rgba(201,168,76,0.4) 0%, rgba(168,136,58,0.1) 50%, rgba(201,168,76,0.35) 100%)"
          : "none",
        // Card lift animation is CSS-driven via .pkg-card-wrap:hover
        transform:     "translateY(0)",
        transition:    "transform 0.45s cubic-bezier(0.16,1,0.3,1), box-shadow 0.45s cubic-bezier(0.16,1,0.3,1)",
        boxShadow:     shadowStyle,
        zIndex:        isSignature ? 2 : 1,
      }}
    >
      {/* Inner card surface */}
      <div style={{
        borderRadius: isSignature || isLuxury ? "14.5px" : "16px",
        background:   cardBg,
        backdropFilter: "blur(20px)",
        border:       isSignature || isLuxury ? "none" : `1px solid ${borderColor}`,
        overflow:     "hidden",
        display:      "flex",
        flexDirection: "column",
        height:       "100%",
      }}>

        {/* ── Card header image (180px cinematic crop) ─────────────── */}
        <div style={{ position: "relative", height: "180px", flexShrink: 0 }}>
          <Image
            src={pkg.img}
            alt={pkg.imgAlt}
            fill
            style={{ objectFit: "cover", objectPosition: pkg.imgPos }}
          />
          {/* Bottom fade — softly dissolves image into card body */}
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to bottom, transparent 40%, rgba(13,10,6,0.92) 100%)",
          }} />

          {/* Badge — anchored over the image bottom-right */}
          {pkg.badge && (
            <div style={{
              position:    "absolute",
              top:         "1rem",
              right:       "1rem",
              background:  isSignature
                ? "linear-gradient(135deg, #C9A84C, #E8D5A3, #C9A84C)"
                : "linear-gradient(135deg, rgba(201,168,76,0.9), rgba(168,136,58,0.9))",
              color:       "#0f0c08",
              fontFamily:  "var(--font-body)",
              fontSize:    "0.58rem",
              fontWeight:  700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              padding:     "0.3rem 0.75rem",
              borderRadius: "100px",
              boxShadow:   isSignature ? "0 2px 12px rgba(201,168,76,0.4)" : "none",
            }}>
              {pkg.badge}
            </div>
          )}
        </div>

        {/* ── Card body ────────────────────────────────────────────── */}
        <div style={{ padding: "1.75rem 1.75rem 2rem", display: "flex", flexDirection: "column", flex: 1, gap: 0 }}>

          {/* Tier label */}
          <div style={{
            fontFamily:    "var(--font-body)",
            fontSize:      "0.6rem",
            fontWeight:    700,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color:         isSignature ? "rgba(201,168,76,0.8)" : "rgba(201,168,76,0.55)",
            marginBottom:  "0.5rem",
          }}>
            {pkg.tier} Package
          </div>

          {/* Package name */}
          <h3 style={{
            fontFamily:    "var(--font-display)",
            fontSize:      "1.5rem",
            color:         isSignature ? "var(--gold-light)" : "var(--cream)",
            fontWeight:    600,
            lineHeight:    1.15,
            letterSpacing: "-0.01em",
            marginBottom:  "0.5rem",
          }}>
            {pkg.name}
          </h3>

          {/* Emotional micro-copy */}
          <p style={{
            fontFamily:  "var(--font-body)",
            fontSize:    "0.82rem",
            color:       "rgba(250,246,238,0.5)",
            lineHeight:  1.65,
            fontStyle:   "italic",
            marginBottom: "1.25rem",
          }}>
            {pkg.tagline}
          </p>

          {/* Gold divider */}
          <div style={{
            width:      "100%",
            height:     "1px",
            background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.3) 30%, rgba(201,168,76,0.3) 70%, transparent)",
            marginBottom: "1.25rem",
          }} />

          {/* Price block */}
          <div style={{ marginBottom: "1.5rem" }}>
            <div style={{
              fontFamily:  "var(--font-display)",
              fontSize:    "2.25rem",
              fontWeight:  700,
              lineHeight:  1,
              color:       isSignature ? "var(--gold-light)" : "var(--cream)",
              letterSpacing: "-0.02em",
            }}>
              {pkg.price}
            </div>
            {pkg.original && (
              <div style={{ display: "flex", alignItems: "center", gap: "0.65rem", marginTop: "0.5rem" }}>
                <span style={{
                  fontFamily:      "var(--font-body)",
                  fontSize:        "0.82rem",
                  color:           "rgba(250,246,238,0.3)",
                  textDecoration:  "line-through",
                }}>
                  {pkg.original}
                </span>
                <span style={{
                  fontFamily:    "var(--font-body)",
                  fontSize:      "0.7rem",
                  fontWeight:    600,
                  color:         "#6fcf97",
                  background:    "rgba(111,207,151,0.12)",
                  padding:       "0.18rem 0.55rem",
                  borderRadius:  "100px",
                  letterSpacing: "0.02em",
                }}>
                  {pkg.saving}
                </span>
              </div>
            )}
          </div>

          {/* Feature list */}
          <ul style={{
            listStyle:     "none",
            display:       "flex",
            flexDirection: "column",
            gap:           "0.75rem",
            marginBottom:  "auto",
            paddingBottom: "1.75rem",
          }}>
            {pkg.features.map((f) => (
              <Feature key={f.text} item={f} light={light} />
            ))}
          </ul>

          {/* CTA button */}
          <a
            href={`${WA}&text=${encodeURIComponent(`Hi MG Photography, I'm interested in the ${pkg.name} package for a newborn session in Dubai.`)}`} data-pixel-event={pkg.isLuxury ? 'InitiateCheckout' : 'Lead'} data-pixel-label={`Package Enquiry - ${pkg.name}`}
            className={`pkg-btn ${isSignature ? "pkg-btn-gold" : isLuxury ? "pkg-btn-luxury" : "pkg-btn-outline"}`}
            style={{
              display:      "block",
              textAlign:    "center",
              padding:      "0.95rem 1rem",
              borderRadius: "100px",
              fontFamily:   "var(--font-body)",
              fontSize:     "0.78rem",
              fontWeight:   600,
              letterSpacing: "0.08em",
              textDecoration: "none",
              transition:   "all 0.4s cubic-bezier(0.16,1,0.3,1)",
              position:     "relative",
              overflow:     "hidden",
            }}
          >
            {pkg.btnText}
          </a>

          {/* Urgency micro-copy */}
          <p style={{
            fontFamily:  "var(--font-body)",
            fontSize:    "0.7rem",
            color:       "rgba(250,246,238,0.28)",
            textAlign:   "center",
            marginTop:   "0.75rem",
            fontStyle:   "italic",
            letterSpacing: "0.02em",
          }}>
            Limited newborn sessions available each month.
          </p>
        </div>
      </div>
    </div>
  );
}

// ── Main export ──────────────────────────────────────────────────────────
export default function NewbornPackages() {
  return (
    <section
      id="packages"
      style={{
        // Dark warm background — creates strong contrast against the
        // surrounding light cream sections of the newborn page
        background: "linear-gradient(170deg, #100d08 0%, #0a0806 45%, #100d08 100%)",
        padding:    "clamp(5rem, 11vw, 9rem) 0",
        position:   "relative",
        overflow:   "hidden",
      }}
    >
      {/* Atmospheric radial glow — gold warmth from the center */}
      <div style={{
        position:     "absolute",
        top:          "50%",
        left:         "50%",
        transform:    "translate(-50%, -50%)",
        width:        "min(900px, 100vw)",
        height:       "min(900px, 100vw)",
        borderRadius: "50%",
        background:   "radial-gradient(circle, rgba(201,168,76,0.055) 0%, transparent 65%)",
        pointerEvents: "none",
      }} />

      {/* Very subtle top edge accent line */}
      <div style={{
        position:   "absolute",
        top:        0,
        left:       "10%",
        right:      "10%",
        height:     "1px",
        background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.25) 40%, rgba(201,168,76,0.25) 60%, transparent)",
      }} />

      <div className="container-luxury" style={{ position: "relative", zIndex: 2 }}>

        {/* ── Section header ──────────────────────────────────────── */}
        <div style={{ textAlign: "center", maxWidth: "580px", margin: "0 auto clamp(3.5rem, 7vw, 6rem)" }}>
          {/* Decorative divider */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem", marginBottom: "1.75rem" }}>
            <div style={{ flex: 1, maxWidth: "60px", height: "1px", background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.5))" }} />
            <div style={{
              width:        "6px",
              height:       "6px",
              borderRadius: "50%",
              background:   "var(--gold)",
              boxShadow:    "0 0 8px rgba(201,168,76,0.5)",
            }} />
            <div style={{ flex: 1, maxWidth: "60px", height: "1px", background: "linear-gradient(90deg, rgba(201,168,76,0.5), transparent)" }} />
          </div>

          <h2 style={{
            fontFamily:    "var(--font-display)",
            fontSize:      "clamp(2rem, 4.5vw, 3.75rem)",
            color:         "var(--cream)",
            lineHeight:    1.1,
            letterSpacing: "-0.025em",
            marginBottom:  "1.25rem",
            fontWeight:    600,
          }}>
            Choose your<br />
            <em style={{ color: "var(--gold-light)", fontWeight: 400 }}>experience</em>
          </h2>

          <p style={{
            fontFamily:  "var(--font-body)",
            fontSize:    "clamp(0.9rem, 1.5vw, 1.02rem)",
            color:       "rgba(250,246,238,0.55)",
            lineHeight:  1.82,
          }}>
            Thoughtfully crafted newborn photography experiences designed to preserve your baby&apos;s earliest moments with timeless elegance.
          </p>
        </div>

        {/* ── Card grid ───────────────────────────────────────────── */}
        {/* The Signature card (index 1) gets elevated via CSS class.
            On desktop all 4 sit side by side with Signature visually dominant.
            On mobile they stack in a single column. */}
        <div style={{
          display:             "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap:                 "1.25rem",
          alignItems:          "start",
        }}>
          {packages.map((pkg) => (
            <PackageCard key={pkg.name} pkg={pkg} />
          ))}
        </div>

        {/* ── Bottom reassurance bar ──────────────────────────────── */}
        <div style={{
          marginTop:      "3.5rem",
          padding:        "1.5rem 2rem",
          background:     "rgba(255,255,255,0.025)",
          border:         "1px solid rgba(201,168,76,0.1)",
          borderRadius:   "12px",
          display:        "flex",
          flexWrap:       "wrap",
          justifyContent: "center",
          gap:            "2rem 4rem",
        }}>
          {[
            { icon: "🛡️", text: "Baby Safety Certified" },
            { icon: "📸", text: "Transparent Pricing" },
            { icon: "⚡", text: "10–14 Day Delivery" },
            { icon: "✨", text: "Premium Hand-Editing" },
            { icon: "📍", text: "Studio & Home Shoots" },
          ].map(({ icon, text }) => (
            <div key={text} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <span style={{ fontSize: "1rem" }}>{icon}</span>
              <span style={{
                fontFamily:    "var(--font-body)",
                fontSize:      "0.78rem",
                color:         "rgba(250,246,238,0.5)",
                letterSpacing: "0.04em",
              }}>{text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── All card interaction styles in one block ─────────────── */}
      <style>{`

        /* Card lift on hover */
        .pkg-card-wrap:hover {
          transform: translateY(-8px) !important;
        }
        .pkg-signature:hover {
          transform: translateY(-10px) !important;
          box-shadow: 0 0 0 1px rgba(201,168,76,0.45),
                      0 32px 80px rgba(0,0,0,0.6),
                      0 0 80px rgba(201,168,76,0.12) !important;
        }
        .pkg-luxury:hover {
          transform: translateY(-8px) !important;
          box-shadow: 0 0 0 1px rgba(201,168,76,0.3),
                      0 28px 72px rgba(0,0,0,0.55) !important;
        }

        /* Gold shimmer button */
        .pkg-btn-gold {
          background: linear-gradient(90deg,
            #C9A84C 0%, #E8D5A3 35%, #C9A84C 55%, #A8883A 100%);
          background-size: 250% auto;
          color: #0f0c08;
        }
        .pkg-btn-gold:hover {
          animation: btnShimmer 1.4s linear infinite;
          box-shadow: 0 4px 20px rgba(201,168,76,0.4);
        }

        /* Luxury button — slightly darker gold */
        .pkg-btn-luxury {
          background: linear-gradient(90deg,
            #A8883A 0%, #C9A84C 35%, #E8D5A3 55%, #C9A84C 100%);
          background-size: 250% auto;
          color: #0f0c08;
        }
        .pkg-btn-luxury:hover {
          animation: btnShimmer 1.6s linear infinite;
          box-shadow: 0 4px 20px rgba(168,136,58,0.4);
        }

        /* Outline button for less prominent cards */
        .pkg-btn-outline {
          background:  transparent;
          border:      1.5px solid rgba(201,168,76,0.35);
          color:       rgba(250,246,238,0.75);
        }
        .pkg-btn-outline:hover {
          background:  rgba(201,168,76,0.1);
          border-color: rgba(201,168,76,0.6);
          color:       var(--gold-light);
        }

        /* Shimmer keyframe — slides the gradient across the button */
        @keyframes btnShimmer {
          0%   { background-position: 0%   center; }
          100% { background-position: 250% center; }
        }

        /* Mobile: stack cards in a single column */
        @media (max-width: 900px) {
          .pkg-card-wrap {
            /* Reset any scale so stacked cards are uniform width */
            transform: none !important;
          }
          .pkg-card-wrap:hover {
            transform: translateY(-5px) !important;
          }
        }
        @media (max-width: 640px) {
          /* Stack all 4 cards vertically on small screens */
          div[style*="repeat(4, 1fr)"] {
            grid-template-columns: 1fr !important;
          }
        }
        @media (min-width: 641px) and (max-width: 900px) {
          /* 2-column on tablet */
          div[style*="repeat(4, 1fr)"] {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
