"use client";
/**
 * NewbornPixel.tsx
 * ─────────────────────────────────────────────────────────────────────────
 * Advanced Meta Pixel tracking scoped to /newborn-photography/ ONLY.
 *
 * The global pixel (fbq init + PageView) already fires from layout.tsx
 * on EVERY page. This component adds the ADDITIONAL events that are
 * specific to the newborn page:
 *
 *  • ViewContent       — on mount (content parameters for this specific page)
 *  • ViewContent (x2)  — when #packages and testimonials scroll into view
 *  • ScrollDepth50     — custom event when user scrolls past 50%
 *  • Schedule          — "Book Your Session" CTA clicks (hero, story section)
 *  • Contact           — WhatsApp button clicks (floating + final CTA)
 *  • Lead              — Package enquiry CTA clicks (all standard packages)
 *  • Lead              — Milestone package clicks
 *  • InitiateCheckout  — Luxury package CTA clicks (highest-value intent)
 *
 * HOW CTA TRACKING WORKS (zero coupling with server components):
 *  Buttons carry data-pixel-event and data-pixel-label attributes in their
 *  JSX. This component attaches ONE delegated click listener on document
 *  that catches them all — no event handlers passed as props.
 *
 * DUPLICATE PREVENTION:
 *  Guard refs (useRef) ensure each section-view event fires exactly once
 *  per page load, regardless of scroll back-and-forth.
 * ─────────────────────────────────────────────────────────────────────────
 */

import { useEffect, useRef } from "react";

// ── TypeScript: tell TS that fbq exists on window (loaded by layout.tsx) ─
declare global {
  interface Window {
    fbq: (...args: unknown[]) => void;
    _fbq: unknown;
  }
}

// ── Shared content parameters used across all events on this page ─────────
const CONTENT_PARAMS = {
  content_name:     "Newborn Photography Dubai",
  content_category: "Newborn Photography",
  content_type:     "product",
  currency:         "AED",
  value:            800, // Signature package price — most common booking
};

// ── Safe fbq wrapper — gracefully no-ops if pixel hasn't loaded yet ───────
function track(eventName: string, params?: Record<string, unknown>) {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("track", eventName, params ?? {});
  }
}
function trackCustom(eventName: string, params?: Record<string, unknown>) {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("trackCustom", eventName, params ?? {});
  }
}

export default function NewbornPixel() {
  // ── Guard refs — prevent duplicate events on re-renders ──────────────
  const firedViewContent  = useRef(false);
  const firedPackages     = useRef(false);
  const firedTestimonials = useRef(false);
  const firedScroll50     = useRef(false);

  // ── 1. ViewContent on mount ───────────────────────────────────────────
  // Note: PageView already fired globally from layout.tsx — we only add
  // the content-specific ViewContent event here.
  useEffect(() => {
    if (firedViewContent.current) return;
    firedViewContent.current = true;

    // Small delay ensures global pixel script has fully initialised
    const timer = setTimeout(() => {
      track("ViewContent", {
        ...CONTENT_PARAMS,
        content_ids: ["newborn-photography-dubai"],
      });
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  // ── 2. Package section enters viewport ────────────────────────────────
  useEffect(() => {
    const el = document.getElementById("packages");
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !firedPackages.current) {
          firedPackages.current = true;
          track("ViewContent", {
            ...CONTENT_PARAMS,
            content_name: "Newborn Package Pricing Viewed",
          });
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // ── 3. Testimonials section enters viewport ───────────────────────────
  useEffect(() => {
    // Find the testimonials section by its heading text
    const allH2s = document.querySelectorAll("h2");
    let section: Element | null = null;
    allH2s.forEach((h) => {
      if (h.textContent?.includes("trust us most")) {
        section = h.closest("section");
      }
    });
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !firedTestimonials.current) {
          firedTestimonials.current = true;
          track("ViewContent", {
            ...CONTENT_PARAMS,
            content_name: "Newborn Testimonials Viewed",
          });
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  // ── 4. Scroll depth > 50% ─────────────────────────────────────────────
  useEffect(() => {
    const onScroll = () => {
      if (firedScroll50.current) return;
      const scrolled = window.scrollY + window.innerHeight;
      const total    = document.documentElement.scrollHeight;
      if (scrolled / total > 0.5) {
        firedScroll50.current = true;
        trackCustom("ScrollDepth50", { page: "newborn-photography-dubai" });
        window.removeEventListener("scroll", onScroll);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ── 5. Delegated click listener for all data-pixel-event CTAs ─────────
  // Server-component JSX carries: data-pixel-event="Lead" data-pixel-label="..."
  // This single listener catches every click on the page and fires the
  // correct event — zero props needed, zero coupling.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      let el = e.target as HTMLElement | null;
      while (el && el !== document.body) {
        const event = el.dataset.pixelEvent;
        const label = el.dataset.pixelLabel ?? "";
        if (event) {
          const params = { ...CONTENT_PARAMS, content_name: label };
          switch (event) {
            case "Schedule":        track("Schedule",        params); break;
            case "Contact":         track("Contact",         params); break;
            case "Lead":            track("Lead",            params); break;
            case "InitiateCheckout":track("InitiateCheckout",params); break;
            default:                break;
          }
          break;
        }
        el = el.parentElement;
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  // This component renders nothing visible — it is pure tracking logic.
  return null;
}
