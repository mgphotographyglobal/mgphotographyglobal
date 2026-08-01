"use client";
// NewbornFAQ — accordion component for the newborn photography page
// Each item expands/collapses with a smooth height animation
// Built as a client component because it needs interactive state
import { useState } from "react";

const faqs = [
  {
    q: "What is the best age for newborn photography?",
    a: "The ideal window is within the first 5 to 14 days after birth. During this time, babies sleep deeply and remain naturally curled in the positions they held in the womb — which allows for the most beautiful, gentle posing. After 2–3 weeks, they become more wakeful and alert, which changes the style of session but is equally beautiful.",
  },
  {
    q: "Is my baby's safety fully ensured during the session?",
    a: "Absolutely — baby safety is our highest priority, above every artistic consideration. We use certified safe posing techniques, maintain the studio at a warm 26–28°C, sterilize all props and wraps between sessions, and never rush any pose. No composite or digitally manipulated poses are used — every image shows your baby exactly as they are.",
  },
  {
    q: "Can parents join the session?",
    a: "Yes, and we encourage it warmly. Parent and family inclusion shots add beautiful emotional depth to your gallery. These are some of the most treasured images from any session — the size of a parent's hand compared to a baby, or the look on a mother's face. Siblings are equally welcome.",
  },
  {
    q: "Are home shoots available?",
    a: "Yes. We offer home shoot sessions across Dubai, Abu Dhabi, and Sharjah. We bring a complete mobile studio setup — lighting, backdrops, props, and wraps — to your home. A home shoot charge of AED 100 applies. Many families prefer this as it keeps the baby in their own comfortable environment.",
  },
  {
    q: "How long after the session will I receive my images?",
    a: "Your beautifully retouched gallery is delivered within 10–14 business days. Each image is individually edited by hand — never batch-processed. You'll receive a private online gallery with high-resolution download links. For urgent requests, please ask us about priority delivery options.",
  },
  {
    q: "How long does a newborn session take?",
    a: "Sessions typically run between 2 and 5 hours depending on your package, but we work entirely at your baby's pace. Feeding breaks, settling time, and cuddle pauses are all built in. We never rush — the most beautiful images happen when both baby and parents are completely relaxed.",
  },
];

export default function NewbornFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // first item open by default

  return (
    <div>
      {/* FAQ schema markup for SEO — Google can display these directly in search results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: { "@type": "Answer", text: faq.a },
            })),
          }),
        }}
      />

      <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <div
              key={i}
              style={{
                borderBottom: "1px solid rgba(42,32,24,0.1)",
                background: isOpen ? "rgba(255,255,255,0.5)" : "transparent",
                transition: "background 0.3s",
              }}
            >
              {/* Question — clickable trigger */}
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                style={{
                  width: "100%",
                  textAlign: "left",
                  background: "none",
                  border: "none",
                  padding: "1.5rem 1.75rem",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  gap: "1.5rem",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.05rem",
                    fontWeight: 500,
                    color: isOpen ? "var(--gold-dark)" : "#2a2018",
                    lineHeight: 1.4,
                    transition: "color 0.3s",
                    textAlign: "left",
                  }}
                >
                  {faq.q}
                </h3>
                {/* Animated +/− icon */}
                <div
                  style={{
                    width: "1.4rem",
                    height: "1.4rem",
                    border: `1px solid ${isOpen ? "var(--gold-dark)" : "rgba(42,32,24,0.25)"}`,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    marginTop: "2px",
                    transition: "all 0.3s",
                    color: isOpen ? "var(--gold-dark)" : "rgba(42,32,24,0.5)",
                    fontSize: "1rem",
                    lineHeight: 1,
                  }}
                >
                  {isOpen ? "−" : "+"}
                </div>
              </button>

              {/* Answer — smooth height expansion */}
              <div
                style={{
                  maxHeight: isOpen ? "400px" : "0",
                  overflow: "hidden",
                  transition: "max-height 0.5s cubic-bezier(0.16,1,0.3,1)",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.92rem",
                    color: "rgba(42,32,24,0.68)",
                    lineHeight: 1.85,
                    padding: "0 1.75rem 1.75rem",
                  }}
                >
                  {faq.a}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
