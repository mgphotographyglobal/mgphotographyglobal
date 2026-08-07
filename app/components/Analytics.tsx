"use client";
/**
 * Analytics.tsx — Global tracking client component
 * ─────────────────────────────────────────────────
 * Handles:
 *  • GA4 custom event tracking (whatsapp_click, call_click, scroll_50/90,
 *    gallery_view, faq_expand, package_view, book_now_click, form_submit)
 *  • Meta Pixel ViewContent, Lead, Contact events
 *  • Automatic WhatsApp & Call click capture via event delegation
 *  • Scroll depth milestones (50% and 90%)
 *
 * Usage:
 *  Add <Analytics /> to layout.tsx body (once globally).
 *  Individual elements use data-wa-location, data-track-event attributes.
 *  Call window.mgTrack(event, params) from anywhere.
 */

import { useEffect } from "react";

// ─── Type declarations ────────────────────────────────────────────────────────
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    fbq: (...args: unknown[]) => void;
    // dataLayer is already declared globally by @next/third-parties/google
    // (imported in layout.tsx) — not redeclared here to avoid a modifier clash.
    mgTrack: (event: string, params?: Record<string, string>) => void;
    _scrollTracked: Set<number>;
  }
}

// ─── Core tracking functions ──────────────────────────────────────────────────
export function trackGA4(event: string, params: Record<string, string> = {}) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", event, {
      page_location: window.location.href,
      ...params,
    });
  }
  // Also push to GTM's dataLayer (object form, not gtag's arguments-array
  // form) so a GTM Custom Event trigger matching `event` can pick this up.
  // This single push covers every call site below: whatsapp_click,
  // call_click, generate_lead, view_item, book_now_click, scroll_50/90,
  // and any data-track-event passthrough (gallery_view, package_view, etc).
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event,
      page_location: window.location.href,
      ...params,
    });
  }
}

export function trackPixel(event: string, params: Record<string, unknown> = {}) {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("track", event, params);
  }
}

export function trackWhatsApp(buttonLocation: string, serviceType = "general") {
  trackGA4("whatsapp_click", {
    button_location: buttonLocation,
    service_type: serviceType,
    page_location: typeof window !== "undefined" ? window.location.href : "",
  });
  trackPixel("Contact", { content_name: "WhatsApp Click", content_category: buttonLocation });
}

export function trackCall(buttonLocation: string) {
  trackGA4("call_click", {
    button_location: buttonLocation,
    page_location: typeof window !== "undefined" ? window.location.href : "",
  });
  trackPixel("Contact", { content_name: "Call Click", content_category: buttonLocation });
}

export function trackLead(leadType: string, location: string) {
  trackGA4("generate_lead", { lead_type: leadType, button_location: location });
  trackPixel("Lead", { content_name: leadType, content_category: location });
}

export function trackViewContent(contentName: string, contentCategory: string) {
  trackGA4("view_item", { content_name: contentName, content_category: contentCategory });
  trackPixel("ViewContent", { content_name: contentName, content_category: contentCategory });
}

export function trackBookNow(packageName: string, location: string) {
  trackGA4("book_now_click", { package_name: packageName, button_location: location });
  trackPixel("InitiateCheckout", { content_name: packageName });
}

// ─── Analytics client component ───────────────────────────────────────────────
export default function Analytics() {
  useEffect(() => {
    // Expose global tracking function for inline use
    window.mgTrack = (event, params = {}) => trackGA4(event, params);

    // ── Scroll depth tracking (50% and 90%) ──────────────────────────────
    window._scrollTracked = window._scrollTracked || new Set();

    const onScroll = () => {
      const scrollPct = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );
      if (scrollPct >= 50 && !window._scrollTracked.has(50)) {
        window._scrollTracked.add(50);
        trackGA4("scroll_50", { percent_scrolled: "50" });
      }
      if (scrollPct >= 90 && !window._scrollTracked.has(90)) {
        window._scrollTracked.add(90);
        trackGA4("scroll_90", { percent_scrolled: "90" });
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    // ── Global click capture via event delegation ─────────────────────────
    const onClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a") as HTMLAnchorElement | null;
      if (!target) return;

      const href = target.href || "";
      const loc = target.dataset.waLocation || target.dataset.pixelLabel || "unknown";
      const svc = target.dataset.serviceType || inferServiceType(href);

      // WhatsApp links
      if (href.includes("wa.me") || href.includes("whatsapp")) {
        trackWhatsApp(loc, svc);
        // Also fire Meta Pixel via data-pixel-event if present
        if (target.dataset.pixelEvent) {
          trackPixel(target.dataset.pixelEvent, { content_name: loc });
        }
      }

      // Phone/call links
      if (href.startsWith("tel:")) {
        trackCall(loc || "call_link");
      }

      // Scroll-anchor "Book Session" / "View Portfolio" links
      if (target.dataset.trackEvent) {
        trackGA4(target.dataset.trackEvent, { button_location: loc, service_type: svc });
      }

      // Outbound link clicks — external domain, not WhatsApp/tel (tracked above)
      if (
        target.hostname &&
        target.hostname !== window.location.hostname &&
        !href.startsWith("tel:") &&
        !href.includes("wa.me") &&
        !href.includes("whatsapp")
      ) {
        trackGA4("outbound_click", {
          link_url: href,
          link_domain: target.hostname,
          link_text: (target.textContent || "").trim().slice(0, 100),
        });
      }
    };
    document.addEventListener("click", onClick);

    // ── Page-load ViewContent for key landing pages ───────────────────────
    const path = window.location.pathname;
    if (path.includes("newborn") || path.includes("dubai-newborn")) {
      trackViewContent("Newborn Photography", "Landing Page");
    } else if (path.includes("maternity")) {
      trackViewContent("Maternity Photography", "Landing Page");
    } else if (path.includes("wedding")) {
      trackViewContent("Wedding Photography", "Landing Page");
    } else if (path.includes("baby")) {
      trackViewContent("Baby Photography", "Landing Page");
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("click", onClick);
    };
  }, []);

  return null; // No visible output
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
function inferServiceType(href: string): string {
  if (href.includes("newborn")) return "newborn_photography";
  if (href.includes("maternity")) return "maternity_photography";
  if (href.includes("wedding")) return "wedding_photography";
  if (href.includes("baby")) return "baby_photography";
  if (href.includes("family")) return "family_photography";
  return "general";
}
