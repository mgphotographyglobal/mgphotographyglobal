import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppFloat from "../components/WhatsAppFloat";
import type { Metadata } from "next";

const GOOGLE_PROFILE_URL = "https://share.google/DzyXsdZg9iUQWHYg2";

export const metadata: Metadata = {
  title: "Client Feedback | MG Photography UAE",
  description:
    "Read current client feedback for MG Photography UAE at its original Google source, then enquire about photography across Dubai, Abu Dhabi and Sharjah.",
  alternates: { canonical: "https://mgphotographyglobal.com/testimonials/" },
};

const bookingSteps = [
  {
    number: "01",
    title: "Read Current Feedback",
    text: "Open our Google profile to read feedback in its original context and see the most current information available there.",
  },
  {
    number: "02",
    title: "Choose Your Service",
    text: "Explore newborn, maternity, wedding and family photography options for your preferred UAE location.",
  },
  {
    number: "03",
    title: "Check Availability",
    text: "Message us on WhatsApp with your service, location and preferred date so we can confirm the next steps.",
  },
];

export default function TestimonialsPage() {
  return (
    <>
      <Header />
      <WhatsAppFloat />

      <section
        style={{
          paddingTop: "8rem",
          paddingBottom: "4rem",
          background: "var(--black)",
          textAlign: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "40%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle,rgba(201,168,76,0.06) 0%,transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div className="container-luxury" style={{ position: "relative" }}>
          <div className="label" style={{ marginBottom: "1rem" }}>
            Client Feedback
          </div>
          <h1
            className="display-lg"
            style={{
              marginBottom: "1.25rem",
              maxWidth: "760px",
              margin: "0 auto 1.25rem",
            }}
          >
            Read Feedback at Its
            <br />
            <span className="text-gold-shimmer">Original Source</span>
          </h1>
          <p
            className="body-lg"
            style={{ maxWidth: "620px", margin: "0 auto 2rem" }}
          >
            For transparency, current client feedback is available on our
            Google Business Profile rather than copied into this website.
          </p>
          <a
            href={GOOGLE_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            View Our Google Profile →
          </a>
        </div>
      </section>

      <section className="section-pad" style={{ background: "var(--black-rich)" }}>
        <div className="container-luxury">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
              gap: "1.25rem",
            }}
          >
            {bookingSteps.map((step) => (
              <div key={step.number} className="glass-card" style={{ padding: "2rem" }}>
                <div
                  className="label"
                  style={{ fontSize: "0.7rem", marginBottom: "1rem" }}
                >
                  {step.number}
                </div>
                <h2
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.35rem",
                    color: "var(--cream)",
                    marginBottom: "0.75rem",
                  }}
                >
                  {step.title}
                </h2>
                <p className="body-sm" style={{ lineHeight: 1.75 }}>
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="section-pad"
        style={{ background: "var(--black)", textAlign: "center" }}
      >
        <div className="container-luxury">
          <div className="label" style={{ marginBottom: "0.75rem" }}>
            Dubai · Abu Dhabi · Sharjah
          </div>
          <h2
            className="display-md"
            style={{
              marginBottom: "1.25rem",
              maxWidth: "620px",
              margin: "0 auto 1.25rem",
            }}
          >
            Ready to Plan Your
            <br />
            <span className="text-gold-gradient">Photography Session?</span>
          </h2>
          <p className="body-lg" style={{ maxWidth: "580px", margin: "0 auto" }}>
            Tell us the photography service, UAE location and preferred date.
            We&apos;ll reply with availability and the relevant collection details.
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "1rem",
              flexWrap: "wrap",
              marginTop: "2rem",
            }}
          >
            <a
              href="https://wa.me/971588764748?text=Hi%20MG%20Photography%20UAE%2C%20I%20would%20like%20to%20check%20availability%20for%20a%20photography%20session."
              className="btn-whatsapp"
              style={{ padding: "1rem 2rem" }}
            >
              Check Availability
            </a>
            <a href="/contact/" className="btn-primary">
              Send an Enquiry
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
