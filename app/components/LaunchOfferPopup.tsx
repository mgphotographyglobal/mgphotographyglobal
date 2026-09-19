"use client";
/**
 * LaunchOfferPopup — compact launch-offer card for the Dubai newborn landing page.
 * Desktop: bottom-right. Mobile: bottom-center, clear of the sticky CTA bar.
 * Appears ~3s after load, dismiss persists for the browser session only.
 */

import { useEffect, useState } from "react";

const WA_URL =
  "https://wa.me/971588764748?text=Hi%20MG%20Photography%20UAE%2C%20I%E2%80%99m%20interested%20in%20the%20AED%20500%20Essence%20newborn%20launch%20offer.%20Could%20you%20please%20confirm%20availability%3F%20My%20baby%20is%20___%20days%20old%20and%20I%E2%80%99m%20in%20___%20area.";
const SESSION_KEY = "mg-launch-offer-dismissed";

const WAIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true" focusable="false">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function LaunchOfferPopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let dismissed = false;
    try {
      dismissed = sessionStorage.getItem(SESSION_KEY) === "1";
    } catch {
      dismissed = false;
    }
    if (dismissed) return;

    const timer = setTimeout(() => setShow(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShow(false);
    try {
      sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      /* sessionStorage unavailable — popup simply won't persist dismissal */
    }
  };

  if (!show) return null;

  return (
    <div className="launch-offer-popup" role="dialog" aria-label="Launch offer">
      <button
        type="button"
        className="launch-offer-close"
        onClick={handleClose}
        aria-label="Close launch offer popup"
      >
        ×
      </button>

      <div className="launch-offer-badge launch-offer-badge-desktop">🎉 LAUNCHING OFFER — 37.5% OFF</div>
      <div className="launch-offer-badge launch-offer-badge-mobile">🎉 LAUNCH OFFER — 37.5% OFF</div>

      <div className="launch-offer-price">
        <span className="launch-offer-price-old">AED 800</span>
        <span aria-hidden="true">→</span>
        <span className="launch-offer-price-new">AED 500</span>
      </div>

      <p className="launch-offer-copy launch-offer-copy-desktop">
        Essence Collection launch price: AED 500 + AED 100 Dubai home visit
        (AED 600 total). Check your date on WhatsApp.
      </p>
      <p className="launch-offer-copy launch-offer-copy-mobile">
        Essence AED 500 + AED 100 Dubai home visit.
      </p>

      <a
        href={WA_URL}
        className="launch-offer-cta"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Check availability for the AED 500 newborn photography launch offer on WhatsApp"
        data-wa-location="Launch Offer Popup"
        data-service-type="newborn_photography"
        data-track-event="launch_offer_availability_click"
        data-package-name="Essence Launch Offer"
      >
        <WAIcon />
        Check Offer Availability
      </a>
    </div>
  );
}
