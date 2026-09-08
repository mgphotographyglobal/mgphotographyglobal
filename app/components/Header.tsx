"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

// Link directly to the canonical service URLs.
const services = [
  { label: "Newborn Photography",     href: "/dubai-newborn-photography/" },
  { label: "Baby Photography",        href: "/baby-photography-dubai/" },
  { label: "Maternity Photography",   href: "/maternity-photography-dubai/" },
  { label: "Wedding Photography",     href: "/wedding-photography-dubai/" },
  { label: "Pre-Wedding Photography", href: "/pre-wedding-photography-dubai/" },
  { label: "Outdoor Photography",     href: "/outdoor-photography-dubai/" },
  { label: "Birthday Photography",    href: "/birthday-photography-dubai/" },
  { label: "Architecture Photography",href: "/architecture-photography-dubai/" },
  { label: "Real Estate Photography", href: "/real-estate-photography-dubai/" },
];

const navLinks = [
  { label: "Home",         href: "/" },
  { label: "About",        href: "/about/" },
  { label: "Gallery",      href: "/gallery/" },
  { label: "Services",     href: "#",    hasDropdown: true },
  { label: "Testimonials", href: "/testimonials/" },
  { label: "Contact",      href: "/contact/" },
];

export default function Header() {
  const [scrolled,     setScrolled]     = useState(false);
  const [mobileOpen,   setMobileOpen]   = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  // Timeout ref for the dropdown — lets cursor travel from trigger to menu
  // without the menu snapping shut during transit
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openDropdown  = () => {
    if (leaveTimer.current) clearTimeout(leaveTimer.current);
    setServicesOpen(true);
  };
  const closeDropdown = () => {
    // 120ms grace period — enough time for the cursor to travel from
    // the nav item into the dropdown without the menu disappearing
    leaveTimer.current = setTimeout(() => setServicesOpen(false), 120);
  };

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 900,
      transition: "all 0.5s cubic-bezier(0.16,1,0.3,1)",
      background:   scrolled ? "rgba(13,13,13,0.96)" : "transparent",
      backdropFilter: scrolled ? "blur(20px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(201,168,76,0.12)" : "1px solid transparent",
    }}>
      <div className="container-luxury site-header-inner" style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        height: scrolled ? "4.5rem" : "5.5rem",
        transition: "height 0.5s cubic-bezier(0.16,1,0.3,1)",
      }}>

        {/* ── Logo ──────────────────────────────────────────────── */}
        <Link href="/" className="site-logo-link" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "0.65rem", minWidth: 0 }}>
          {/* Logo image — swap src to /images/mg-logo.png once uploaded */}
          <div className="site-logo-box" style={{
            width: "2.5rem", height: "2.5rem",
            border: "1.5px solid var(--gold)",
            display: "flex", alignItems: "center", justifyContent: "center",
            flexShrink: 0,
          }}>
            <span style={{
              fontFamily: "var(--font-display)", color: "var(--gold)",
              fontSize: "1rem", fontWeight: 700, letterSpacing: "0.05em",
            }}>MG</span>
          </div>
          <div className="site-logo-text" style={{ minWidth: 0 }}>
            <div className="site-logo-name" style={{
              fontFamily: "var(--font-display)", color: "var(--cream)",
              fontSize: "1.05rem", fontWeight: 600, lineHeight: 1.1, letterSpacing: "0.04em",
              whiteSpace: "nowrap",
            }}>MG Photography</div>
            <div className="label site-logo-tagline" style={{ fontSize: "0.56rem", letterSpacing: "0.18em", whiteSpace: "nowrap" }}>UAE — Dubai</div>
          </div>
        </Link>

        {/* ── Desktop Nav ───────────────────────────────────────── */}
        <nav style={{ display: "flex", alignItems: "center", gap: "2.5rem" }} className="desktop-nav">
          {navLinks.map((link) =>
            link.hasDropdown ? (

              // Services item with gap-safe dropdown
              // The key trick: both the trigger AND the dropdown container
              // share onMouseEnter/onMouseLeave with the same timer, so
              // the cursor can pass through without triggering a close
              <div
                key="services"
                style={{ position: "relative" }}
                onMouseEnter={openDropdown}
                onMouseLeave={closeDropdown}
              >
                <button style={{
                  background: "none", border: "none", cursor: "pointer", padding: "0.5rem 0",
                  color: servicesOpen ? "var(--gold)" : "rgba(250,246,238,0.75)",
                  fontFamily: "var(--font-body)", fontSize: "0.82rem", letterSpacing: "0.08em",
                  display: "flex", alignItems: "center", gap: "0.3rem",
                  transition: "color 0.3s",
                }}>
                  Services
                  <ChevronDown size={13} style={{
                    transition: "transform 0.3s",
                    transform: servicesOpen ? "rotate(180deg)" : "rotate(0deg)",
                  }} />
                </button>

                {/* Invisible hover bridge — fills the gap between the button
                    and the dropdown panel so the cursor doesn't "leave" the
                    hover zone during transit */}
                {servicesOpen && (
                  <div style={{
                    position: "absolute", top: "100%", left: "-20px", right: "-20px",
                    height: "12px", // bridge height = gap between item and panel
                    background: "transparent",
                  }} />
                )}

                {/* Dropdown panel — positioned below the bridge */}
                {servicesOpen && (
                  <div style={{
                    position: "absolute", top: "calc(100% + 10px)", left: "50%",
                    transform: "translateX(-50%)",
                    background: "rgba(13,13,13,0.98)", backdropFilter: "blur(24px)",
                    border: "1px solid rgba(201,168,76,0.18)",
                    minWidth: "250px", padding: "0.75rem 0",
                    animation: "fadeDropdown 0.22s ease",
                    zIndex: 1000,
                  }}>
                    {services.map((s) => (
                      <Link key={s.href} href={s.href} style={{
                        display: "block", padding: "0.65rem 1.4rem",
                        color: "rgba(250,246,238,0.72)",
                        fontFamily: "var(--font-body)", fontSize: "0.81rem",
                        textDecoration: "none", letterSpacing: "0.02em",
                        transition: "all 0.2s", borderLeft: "2px solid transparent",
                      }}
                        className="dropdown-link"
                      >{s.label}</Link>
                    ))}
                  </div>
                )}
              </div>

            ) : (
              <Link key={link.href} href={link.href} className="nav-link">{link.label}</Link>
            )
          )}
        </nav>

        {/* ── Desktop CTA ───────────────────────────────────────── */}
        <a
          href="https://wa.me/971588764748?text=Hi%20MG%20Photography%2C%20I%20would%20like%20to%20book%20a%20photography%20session."
          className="btn-primary desktop-nav"
          style={{ fontSize: "0.72rem", padding: "0.65rem 1.5rem" }}
        >
          Book Now
        </a>

        {/* ── Mobile hamburger ──────────────────────────────────── */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{ background: "none", border: "none", color: "var(--cream)", cursor: "pointer", padding: "0.5rem" }}
          className="mobile-toggle"
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* ── Mobile Menu ───────────────────────────────────────────── */}
      {mobileOpen && (
        <div style={{
          background: "rgba(13,13,13,0.99)", backdropFilter: "blur(20px)",
          borderTop: "1px solid rgba(201,168,76,0.12)", padding: "1.5rem 1.5rem 2rem",
        }}>
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div key="mobile-services">
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  style={{
                    background: "none", border: "none", width: "100%", textAlign: "left",
                    color: "rgba(250,246,238,0.8)", fontFamily: "var(--font-body)", fontSize: "1rem",
                    padding: "0.9rem 0", cursor: "pointer",
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    borderBottom: "1px solid rgba(201,168,76,0.08)",
                  }}
                >
                  Services
                  <ChevronDown size={16} style={{
                    transform: mobileServicesOpen ? "rotate(180deg)" : "none",
                    transition: "transform 0.3s",
                  }} />
                </button>
                {mobileServicesOpen && (
                  <div style={{ paddingLeft: "1rem", paddingBottom: "0.5rem" }}>
                    {services.map((s) => (
                      <Link key={s.href} href={s.href} onClick={() => setMobileOpen(false)} style={{
                        display: "block", padding: "0.6rem 0",
                        color: "rgba(250,246,238,0.6)", fontFamily: "var(--font-body)", fontSize: "0.9rem",
                        textDecoration: "none", borderBottom: "1px solid rgba(201,168,76,0.05)",
                      }}>{s.label}</Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)} style={{
                display: "block", padding: "0.9rem 0",
                color: "rgba(250,246,238,0.8)", fontFamily: "var(--font-body)", fontSize: "1rem",
                textDecoration: "none", borderBottom: "1px solid rgba(201,168,76,0.08)",
              }}>{link.label}</Link>
            )
          )}
          <div style={{ marginTop: "1.5rem" }}>
            <a
              href="https://wa.me/971588764748?text=Hi%20MG%20Photography%2C%20I%20would%20like%20to%20book%20a%20session."
              className="btn-whatsapp"
              style={{ width: "100%", justifyContent: "center" }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: "1rem", height: "1rem" }}>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
        @media (max-width: 767px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }

          /* Shorter header on mobile so it takes less vertical space
             and never eats into the hero content below it */
          .site-header-inner { height: 3.75rem !important; }

          /* Smaller logo mark on mobile */
          .site-logo-box {
            width: 2rem !important;
            height: 2rem !important;
          }
          .site-logo-box span { font-size: 0.8rem !important; }
          .site-logo-name { font-size: 0.88rem !important; }
          .site-logo-tagline { font-size: 0.5rem !important; letter-spacing: 0.14em !important; }
          .site-logo-link { gap: 0.5rem !important; }
        }
        @keyframes fadeDropdown {
          from { opacity: 0; transform: translateX(-50%) translateY(-6px); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
        .dropdown-link:hover {
          color: var(--gold) !important;
          border-left-color: var(--gold) !important;
          padding-left: 1.7rem !important;
        }
      `}</style>
    </header>
  );
}
