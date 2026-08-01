import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppFloat from "../components/WhatsAppFloat";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Testimonials | MG Photography UAE Reviews Dubai",
  description: "Real reviews from real families. MG Photography UAE is Dubai's most trusted luxury photography studio. 5-star rated across Google & social media.",
  alternates: { canonical: "https://mgphotographyglobal.com/testimonials/" },
};

const testimonials = [
  { name:"Priya Sharma", location:"Dubai Marina", rating:5, text:"MG Photography captured our newborn in a way that made me cry with joy. Every single image is a masterpiece. The studio was so cozy and safe — my baby was sleeping throughout and never once disturbed. I've already booked them for our 3-month and 6-month sessions. Highest possible recommendation.", service:"Newborn Photography", verified:"Google Review" },
  { name:"Aisha Al Mansoori", location:"Abu Dhabi", rating:5, text:"Our wedding photos are absolutely stunning. The team understood exactly what we wanted — cinematic, romantic, luxurious. They captured moments I didn't even know were happening. Our families in Abu Dhabi and India were blown away. Truly world-class work.", service:"Wedding Photography", verified:"Google Review" },
  { name:"Rahul & Deepa Nair", location:"Sharjah", rating:5, text:"The maternity shoot exceeded all expectations. Every pose was comfortable and flattering. The editing quality is extraordinary — I feel like a Bollywood celebrity in these photos! We'll treasure these images forever. Booking the newborn session with them already.", service:"Maternity Photography", verified:"Google Review" },
  { name:"Fatima Hassan", location:"Downtown Dubai", rating:5, text:"We've used MG Photography three times now — for our first baby, second baby, and family portraits last year. Each time the quality gets better. They remember our preferences, our kids are comfortable with them, and the results are always breathtaking. They've become our family photographers for life.", service:"Family Photography", verified:"Google Review" },
  { name:"James & Maria Rodriguez", location:"JBR, Dubai", rating:5, text:"The pre-wedding shoot at the desert was absolutely cinematic. Neither of us are naturally comfortable in front of the camera, but the photographer made us feel so relaxed and natural. It felt like we were in a movie. I cannot recommend them enough — simply extraordinary.", service:"Pre-Wedding Photography", verified:"Google Review" },
  { name:"Ahmed Al Rashid", location:"Business Bay", rating:5, text:"Hired MG Photography for our real estate portfolio across 5 properties. The architectural shots are magazine-quality. Our listings are getting significantly more enquiries and our properties are selling faster. Worth every dirham and then some. Already booked for 3 more properties.", service:"Real Estate Photography", verified:"Google Review" },
  { name:"Sunita & Vikram Patel", location:"Palm Jumeirah", rating:5, text:"We flew to Dubai specifically for our anniversary portrait session with MG Photography. The desert golden-hour shoot was everything we hoped for and more. The images are now displayed in our home in India and every guest asks who took them. Absolutely magical.", service:"Outdoor Photography", verified:"Google Review" },
  { name:"Layla Khalid", location:"Jumeirah, Dubai", rating:5, text:"My daughter's first birthday cake smash was captured perfectly. The setup was so beautiful, the photographer was absolutely brilliant with her — she was laughing and playing all through the session. The gallery made our whole family cry happy tears. Flawless from start to finish.", service:"Birthday Photography", verified:"Google Review" },
  { name:"Mohammed Al Farsi", location:"DIFC, Dubai", rating:5, text:"The architecture photography for our commercial project was exceptional. The team understood the brief immediately and the final images are being used in our international investor presentations. Professional, fast, and brilliant quality. Strong recommendation for any developer.", service:"Architecture Photography", verified:"Google Review" },
];

export default function TestimonialsPage() {
  return (
    <>
      <Header />
      <WhatsAppFloat />
      {/* Hero */}
      <section style={{ paddingTop: "8rem", paddingBottom: "4rem", background: "var(--black)", textAlign: "center", position: "relative" }}>
        <div style={{ position: "absolute", top: "40%", left: "50%", transform: "translate(-50%,-50%)", width: "500px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle,rgba(201,168,76,0.06) 0%,transparent 70%)", pointerEvents: "none" }} />
        <div className="container-luxury" style={{ position: "relative" }}>
          <div className="label" style={{ marginBottom: "1rem" }}>Client Love</div>
          <h1 className="display-lg" style={{ marginBottom: "1.25rem", maxWidth: "700px", margin: "0 auto 1.25rem" }}>
            Words From the Families<br />Who <span className="text-gold-shimmer">Trust Us Most</span>
          </h1>
          <p className="body-lg" style={{ maxWidth: "480px", margin: "0 auto 2rem" }}>
            Real stories. Verified reviews. 5-star rated on Google by families across Dubai, Abu Dhabi & Sharjah.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "2.5rem", flexWrap: "wrap" }}>
            {[["5.0","Google Rating"],["500+","Sessions Completed"],["100%","Recommend Rate"]].map(([val,lab]) => (
              <div key={lab} style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "2rem", color: "var(--gold)", fontWeight: 700 }}>{val}</div>
                <div className="body-sm" style={{ fontSize: "0.75rem" }}>{lab}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Review Link */}
      <div style={{ background: "rgba(201,168,76,0.06)", borderTop: "1px solid rgba(201,168,76,0.12)", borderBottom: "1px solid rgba(201,168,76,0.12)", padding: "1.25rem 0" }}>
        <div className="container-luxury" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1.5rem", flexWrap: "wrap" }}>
          <div className="stars">{"★★★★★".split("").map((s,i) => <span key={i}>{s}</span>)}</div>
          <span className="body-sm" style={{ fontSize: "0.85rem" }}>5.0 Rating on Google Business</span>
          <a href="https://share.google/DzyXsdZg9iUQWHYg2" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ fontSize: "0.72rem", padding: "0.45rem 1rem" }}>
            View on Google →
          </a>
        </div>
      </div>

      {/* Testimonials Grid */}
      <section className="section-pad" style={{ background: "var(--black)" }}>
        <div className="container-luxury">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: "1.25rem" }}>
            {testimonials.map((t) => (
              <div key={t.name} className="glass-card" style={{ padding: "2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <div className="stars">{"★★★★★".split("").map((s,i) => <span key={i}>{s}</span>)}</div>
                  <span style={{ fontSize: "0.65rem", color: "rgba(250,246,238,0.35)", fontFamily: "var(--font-body)" }}>{t.verified}</span>
                </div>
                <p style={{ fontFamily: "var(--font-display)", fontSize: "0.93rem", color: "var(--cream-warm)", lineHeight: 1.72, fontStyle: "italic", flex: 1 }}>
                  &ldquo;{t.text}&rdquo;
                </p>
                <div style={{ borderTop: "1px solid rgba(201,168,76,0.1)", paddingTop: "1rem", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                  <div>
                    <div style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "0.9rem", color: "var(--cream)" }}>{t.name}</div>
                    <div className="body-sm" style={{ fontSize: "0.75rem" }}>{t.location}</div>
                  </div>
                  <div className="label" style={{ fontSize: "0.58rem", textAlign: "right", maxWidth: "120px" }}>{t.service}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad" style={{ background: "var(--black-rich)", textAlign: "center" }}>
        <div className="container-luxury">
          <div className="label" style={{ marginBottom: "0.75rem" }}>Join Our Family</div>
          <h2 className="display-md" style={{ marginBottom: "1.25rem", maxWidth: "580px", margin: "0 auto 1.25rem" }}>
            Your Story Deserves to Be<br /><span className="text-gold-gradient">Told Beautifully.</span>
          </h2>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap", marginTop: "2rem" }}>
            <a href="https://wa.me/971588764748?text=Hi%2C%20I%20saw%20your%20reviews%20and%20would%20love%20to%20book%20a%20session." className="btn-whatsapp" style={{ padding: "1rem 2rem" }}>
              <svg viewBox="0 0 24 24" fill="currentColor" style={{width:"1rem",height:"1rem"}}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Book Your Session
            </a>
            <a href="/contact" className="btn-primary">Send an Enquiry</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
