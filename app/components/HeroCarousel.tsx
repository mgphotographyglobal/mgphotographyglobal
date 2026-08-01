"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface HeroSlide {
  src: string;
  alt: string;
  objectPosition?: string;
}

export default function HeroCarousel({ slides }: { slides: HeroSlide[] }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div style={{ position: "absolute", inset: 0 }}>
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          style={{
            position: "absolute",
            inset: 0,
            opacity: i === active ? 1 : 0,
            transition: "opacity 1.4s ease-in-out",
          }}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={i === 0}
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: slide.objectPosition || "center 20%" }}
          />
        </div>
      ))}

      {/* Slide indicators */}
      {slides.length > 1 && (
        <div
          style={{
            position: "absolute",
            bottom: "clamp(1.25rem, 3vh, 2rem)",
            left: "clamp(1.5rem, 5vw, 4rem)",
            display: "flex",
            gap: "0.5rem",
            zIndex: 10,
          }}
        >
          {slides.map((slide, i) => (
            <button
              key={slide.src}
              onClick={() => setActive(i)}
              aria-label={`Show slide ${i + 1}`}
              style={{
                width: i === active ? "1.75rem" : "0.5rem",
                height: "0.35rem",
                borderRadius: "999px",
                border: "none",
                background: i === active ? "var(--gold)" : "rgba(250,246,238,0.35)",
                cursor: "pointer",
                transition: "all 0.35s ease",
                padding: 0,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
