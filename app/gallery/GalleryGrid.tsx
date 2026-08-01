"use client";

import { useState } from "react";
import Image from "next/image";

interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

export default function GalleryGrid({ images }: { images: GalleryImage[] }) {
  const [filter, setFilter] = useState<string>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ["All", ...Array.from(new Set(images.map((img) => img.category)))];
  const filtered = filter === "All" ? images : images.filter((img) => img.category === filter);

  const closeLightbox = () => setLightboxIndex(null);
  const showPrev = () =>
    setLightboxIndex((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length));
  const showNext = () =>
    setLightboxIndex((i) => (i === null ? null : (i + 1) % filtered.length));

  return (
    <section style={{ background: "var(--black)", padding: "clamp(2rem,4vw,3rem) 0 clamp(5rem,10vw,7rem)" }}>
      <div className="container-luxury">
        {/* Category filters */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem", justifyContent: "center", marginBottom: "clamp(2.5rem,5vw,3.5rem)" }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.78rem",
                letterSpacing: "0.04em",
                padding: "0.6rem 1.4rem",
                border: `1px solid ${filter === cat ? "var(--gold)" : "rgba(250,246,238,0.2)"}`,
                background: filter === cat ? "var(--gold)" : "transparent",
                color: filter === cat ? "var(--black)" : "var(--cream)",
                cursor: "pointer",
                transition: "all 0.25s ease",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "0.75rem",
          }}
        >
          {filtered.map((img, i) => (
            <button
              key={img.src}
              onClick={() => setLightboxIndex(i)}
              aria-label={`View larger: ${img.alt}`}
              style={{
                position: "relative",
                aspectRatio: "4/5",
                overflow: "hidden",
                border: "none",
                padding: 0,
                cursor: "pointer",
                background: "#111",
              }}
              className="service-tile"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                loading="lazy"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                style={{ objectFit: "cover", transition: "transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94)" }}
                className="service-tile-img"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          onClick={closeLightbox}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(10,10,10,0.96)",
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "clamp(1rem,4vw,3rem)",
          }}
        >
          <button
            onClick={closeLightbox}
            aria-label="Close"
            style={{
              position: "absolute", top: "1.5rem", right: "1.5rem",
              background: "none", border: "none", color: "var(--cream)",
              fontSize: "2rem", cursor: "pointer", lineHeight: 1, zIndex: 1001,
            }}
          >
            ×
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); showPrev(); }}
            aria-label="Previous image"
            style={{
              position: "absolute", left: "clamp(0.5rem,3vw,2rem)", top: "50%", transform: "translateY(-50%)",
              background: "none", border: "none", color: "var(--gold)",
              fontSize: "2.5rem", cursor: "pointer", zIndex: 1001,
            }}
          >
            ‹
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); showNext(); }}
            aria-label="Next image"
            style={{
              position: "absolute", right: "clamp(0.5rem,3vw,2rem)", top: "50%", transform: "translateY(-50%)",
              background: "none", border: "none", color: "var(--gold)",
              fontSize: "2.5rem", cursor: "pointer", zIndex: 1001,
            }}
          >
            ›
          </button>
          <div
            onClick={(e) => e.stopPropagation()}
            style={{ position: "relative", width: "min(90vw, 900px)", height: "min(85vh, 900px)" }}
          >
            <Image
              src={filtered[lightboxIndex].src}
              alt={filtered[lightboxIndex].alt}
              fill
              sizes="90vw"
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      )}
    </section>
  );
}
