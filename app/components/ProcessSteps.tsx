"use client";
// ProcessSteps — interactive "How It Works" section
// Each step elevates on hover (desktop) and gives tactile feedback on touch (mobile)
// Uses pure CSS transitions enhanced by React state for the gold accent line
import { useState } from "react";

const steps = [
  {
    num:   "01",
    icon:  "💬",
    title: "Enquiry",
    desc:  "Reach out via WhatsApp or our contact form. We respond within 2 hours.",
    detail: "Tell us about your vision — the type of session, your preferred dates, and anything special about your story. No question is too small.",
  },
  {
    num:   "02",
    icon:  "📞",
    title: "Consultation",
    desc:  "A personal call to understand your vision, session goals, and preferences.",
    detail: "We walk through every detail together — location ideas, outfit guidance, session flow, and what to expect on the day. You'll feel completely prepared.",
  },
  {
    num:   "03",
    icon:  "📷",
    title: "The Session",
    desc:  "A relaxed, cinematic experience designed entirely around you.",
    detail: "Whether in-studio or on-location, we guide you gently through every frame. You don't need to pose — we create the conditions for authentic emotion.",
  },
  {
    num:   "04",
    icon:  "✨",
    title: "Delivery",
    desc:  "Beautifully retouched high-resolution images delivered within 7–14 days.",
    detail: "Your private online gallery arrives with print-ready, fully retouched images. Every single one handcrafted — never batch-processed.",
  },
];

export default function ProcessSteps() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <div className="process-grid" style={{
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "0",
      position: "relative",
    }}>
      {/* Connecting line behind all step circles — desktop 4-col layout only */}
      <div className="process-connector" style={{
        position: "absolute",
        top: "1.75rem",
        left: "12.5%",
        right: "12.5%",
        height: "1px",
        background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.2) 20%, rgba(201,168,76,0.2) 80%, transparent)",
        pointerEvents: "none",
        zIndex: 0,
      }} />

      {steps.map((step, i) => {
        const isActive = activeStep === i;

        return (
          <div
            key={step.num}
            onMouseEnter={() => setActiveStep(i)}
            onMouseLeave={() => setActiveStep(null)}
            onTouchStart={() => setActiveStep(i === activeStep ? null : i)}
            style={{
              textAlign: "center",
              padding: "2rem 1.5rem",
              position: "relative",
              cursor: "default",
              // The core interaction: gentle elevation + gold tint on hover
              transform:   isActive ? "translateY(-6px)"  : "translateY(0)",
              background:  isActive ? "rgba(201,168,76,0.04)" : "transparent",
              borderTop:   isActive ? "2px solid rgba(201,168,76,0.5)" : "2px solid transparent",
              transition:  "all 0.45s cubic-bezier(0.16, 1, 0.3, 1)",
              zIndex: 1,
            }}
          >
            {/* Step icon circle — grows slightly on hover */}
            <div style={{
              width: "3.5rem",
              height: "3.5rem",
              border: `1px solid ${isActive ? "var(--gold)" : "rgba(201,168,76,0.25)"}`,
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 1.5rem",
              background: isActive ? "rgba(201,168,76,0.1)" : "var(--black)",
              fontSize: isActive ? "1.4rem" : "1.25rem",
              position: "relative",
              zIndex: 1,
              transition: "all 0.45s cubic-bezier(0.16, 1, 0.3, 1)",
              boxShadow: isActive ? "0 0 20px rgba(201,168,76,0.2)" : "none",
            }}>
              {step.icon}
            </div>

            <div className="label" style={{
              color: isActive ? "var(--gold)" : "rgba(201,168,76,0.4)",
              fontSize: "0.6rem",
              marginBottom: "0.5rem",
              transition: "color 0.3s",
            }}>
              {step.num}
            </div>

            <h3 style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.1rem",
              color: "var(--cream)",
              marginBottom: "0.75rem",
              transition: "color 0.3s",
            }}>
              {step.title}
            </h3>

            {/* Short description — always visible */}
            <p className="body-sm" style={{
              fontSize: "0.82rem",
              lineHeight: 1.7,
              marginBottom: isActive ? "1rem" : "0",
              transition: "margin 0.3s",
            }}>
              {step.desc}
            </p>

            {/* Extended detail — fades in on hover, cinematic reveal */}
            <div style={{
              overflow: "hidden",
              maxHeight: isActive ? "6rem" : "0",
              opacity:   isActive ? 1 : 0,
              transition: "max-height 0.5s cubic-bezier(0.16,1,0.3,1), opacity 0.4s ease",
            }}>
              <p style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.78rem",
                color: "rgba(201,168,76,0.7)",
                lineHeight: 1.7,
                fontStyle: "italic",
              }}>
                {step.detail}
              </p>
            </div>
          </div>
        );
      })}

      <style>{`
        @media (max-width: 767px) {
          /* 2-column on phones — was previously dead code (wrong class name),
             so mobile was silently rendering all 4 columns and overflowing */
          .process-grid {
            grid-template-columns: 1fr 1fr !important;
            row-gap: 1.5rem !important;
          }
          .process-grid > div {
            padding: 1.25rem 0.75rem !important;
          }
          .process-connector { display: none !important; }
        }
        @media (max-width: 420px) {
          /* Single column on the smallest phones — 2-up gets too tight */
          .process-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
