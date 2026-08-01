import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppFloat from "../components/WhatsAppFloat";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About MG Photography UAE | Luxury Photography Studio Dubai",
  description: "The story behind MG Photography UAE — a luxury photography studio serving Dubai, Abu Dhabi & Sharjah with cinematic quality and heartfelt emotion. BNI Member.",
  alternates: { canonical: "https://mgphotographyglobal.com/about/" },
};

const values = [
  { title: "Cinematic Quality", desc: "Every image we deliver is treated with editorial-level care — premium retouching, intentional color grading, and cinematic composition.", icon: "🎬" },
  { title: "Emotional Truth", desc: "We chase the moments that can't be staged: the tears, the laughter, the quiet tenderness between people who love each other.", icon: "❤️" },
  { title: "Family First", desc: "Especially for newborns and children, safety and comfort always come before any artistic consideration. Always.", icon: "🛡️" },
  { title: "Cultural Respect", desc: "Dubai is beautifully diverse. We understand the traditions, the moments that matter, and the cultural nuances of every family we serve.", icon: "🌍" },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <WhatsAppFloat />

      {/* Hero */}
      <section style={{ paddingTop: "8rem", paddingBottom: "5rem", background: "var(--black)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "30%", right: "15%", width: "400px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 70%)", filter: "blur(40px)", pointerEvents: "none" }} />
        <div className="container-luxury" style={{ position: "relative" }}>
          <div className="label" style={{ marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <div className="gold-line" /> Our Story
          </div>
          <h1 className="display-lg" style={{ maxWidth: "700px", marginBottom: "2rem" }}>
            We Create Photographs<br />That Make You Feel<br /><span className="text-gold-shimmer">Something Real.</span>
          </h1>
          <p className="body-lg" style={{ maxWidth: "580px" }}>
            MG Photography UAE is a luxury photography studio based in Dubai, serving families, couples, businesses, and creative clients across the UAE with cinematic artistry and genuine emotional care.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section-pad bg-cream-section">
        <div className="container-luxury">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
            <div>
              <div className="label" style={{ marginBottom: "1rem" }}>The Beginning</div>
              <h2 className="display-sm" style={{ marginBottom: "1.5rem" }}>Born From a Belief That Photography Should Move You</h2>
              <p className="body-lg" style={{ marginBottom: "1.25rem" }}>
                MG Photography UAE was founded on a single, uncompromising belief: that photography should do more than document — it should transport you. Looking at a great photograph of your family, your wedding, or your newborn should feel like reliving the moment entirely, with all its warmth and weight and wonder.
              </p>
              <p className="body-lg" style={{ marginBottom: "1.25rem" }}>
                With over 8 years of professional experience and more than 500 families photographed across Dubai, Abu Dhabi, and Sharjah, we've grown from a one-person passion project into the UAE's most trusted luxury photography studio — but our commitment to personal, emotionally honest photography has never changed.
              </p>
              <p className="body-lg">
                We are proud members of BNI (Business Network International), recognized by Dubai's business community for our professionalism, reliability, and the consistent excellence of our work.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
              {[0,1,2,3].map(i => (
                <div key={i} className="photo-placeholder" style={{ aspectRatio: "3/4", background: `linear-gradient(${135+i*20}deg, #1c1c1c, #2a2a2a)`, borderRadius: "2px" }}>
                  <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", opacity: 0.2, fontSize: "2rem" }}>📷</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad" style={{ background: "var(--black)" }}>
        <div className="container-luxury">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <div className="label" style={{ marginBottom: "0.75rem" }}>What We Stand For</div>
            <h2 className="display-md">Our Values</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: "1.5rem" }}>
            {values.map((v) => (
              <div key={v.title} className="glass-card" style={{ padding: "2rem" }}>
                <div style={{ fontSize: "1.75rem", marginBottom: "1rem" }}>{v.icon}</div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", color: "var(--gold)", marginBottom: "0.75rem" }}>{v.title}</h3>
                <p className="body-sm" style={{ fontSize: "0.875rem", lineHeight: 1.7 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: "4rem 0", background: "var(--black-rich)", borderTop: "1px solid rgba(201,168,76,0.1)", borderBottom: "1px solid rgba(201,168,76,0.1)" }}>
        <div className="container-luxury">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))", gap: "2rem", textAlign: "center" }}>
            {[["500+","Families Photographed"],["8+","Years of Experience"],["3","UAE Cities Served"],["5★","Google Rating"],["BNI","Member Status"]].map(([val,lab]) => (
              <div key={lab}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "2.25rem", color: "var(--gold)", fontWeight: 700, lineHeight: 1 }}>{val}</div>
                <div className="body-sm" style={{ fontSize: "0.78rem", marginTop: "0.4rem" }}>{lab}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad" style={{ background: "var(--black)", textAlign: "center" }}>
        <div className="container-luxury">
          <h2 className="display-md" style={{ marginBottom: "1.5rem", maxWidth: "600px", margin: "0 auto 1.5rem" }}>
            Ready to Create <span className="text-gold-gradient">Beautiful Memories</span> Together?
          </h2>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap", marginTop: "2rem" }}>
            <a href="https://wa.me/971588764748?text=Hi%20MG%20Photography%20UAE%2C%20I%27d%20like%20to%20book%20a%20session." className="btn-whatsapp" style={{ padding: "1rem 2rem" }}>
              <svg viewBox="0 0 24 24" fill="currentColor" style={{width:"1rem",height:"1rem"}}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Book Your Session
            </a>
            <a href="/contact" className="btn-outline">Send Enquiry</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
