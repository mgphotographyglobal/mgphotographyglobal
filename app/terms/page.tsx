import Header from "../components/Header";
import Footer from "../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | MG Photography UAE",
  description: "Read MG Photography UAE's terms and conditions including booking policy, cancellation, payment terms, image delivery, and copyright.",
  alternates: { canonical: "https://mgphotographyglobal.com/terms/" },
};

const sections = [
  {
    title: "Booking & Confirmation",
    content: "All photography sessions must be confirmed with a deposit of 50% of the total package fee. Bookings are not confirmed until the deposit is received and a written confirmation (via WhatsApp, email, or message) has been provided by MG Photography UAE. Full payment is due on or before the date of the session."
  },
  {
    title: "Cancellation & Rescheduling",
    content: "We understand that life is unpredictable — especially with newborns and young families. Clients may reschedule a session at no charge with a minimum of 48 hours' notice. Sessions cancelled within 24 hours of the scheduled time may forfeit the deposit, at our discretion. In the case of sudden illness (particularly for newborns), we will always find a mutually suitable alternative date without penalty."
  },
  {
    title: "Payment Terms",
    content: "Payment is accepted via bank transfer, cash (UAE dirham), or agreed digital payment methods. All prices are quoted in AED and are inclusive of the services described in the chosen package. Additional services, prints, or products requested after session confirmation will be quoted and invoiced separately."
  },
  {
    title: "Image Delivery & Turnaround",
    content: "Standard delivery of professionally edited images is within 10–14 business days from the date of the session. Rush delivery options (5–7 days) may be available on request and may carry an additional fee. Images are delivered via a private, secure online gallery. Raw, unedited images are not delivered under any circumstances."
  },
  {
    title: "Image Selection & Editing",
    content: "MG Photography UAE retains full artistic discretion in the selection of images for editing and delivery. We deliver the strongest images from each session, curated and edited to the standard that represents our work. Requests for specific numbers of images beyond the package allowance can be accommodated at an additional per-image fee."
  },
  {
    title: "Copyright & Usage Rights",
    content: "All photographs taken by MG Photography UAE remain the intellectual property and copyright of MG Photography UAE. Clients receive a personal-use license for the images delivered, which includes printing, sharing on personal social media, and gifting. Commercial use of any image requires a separate written commercial license agreement. MG Photography UAE reserves the right to use any images for portfolio purposes, social media, website, and marketing materials, unless a written non-disclosure or privacy request has been made prior to the session."
  },
  {
    title: "Client Responsibilities",
    content: "Clients are responsible for ensuring the safety of all persons and property during location-based shoots. For newborn and baby sessions, clients should ensure the infant is fed, comfortable, and as rested as possible before the session. For outdoor sessions, clients are responsible for confirming any necessary permissions or permits for private locations. MG Photography UAE will not be held responsible for session interruptions caused by weather, third-party interference, or other factors outside our reasonable control."
  },
  {
    title: "Outdoor & Location Sessions",
    content: "Outdoor sessions are subject to weather conditions. In the event of extreme heat, rain, or conditions deemed unsafe for the client or equipment, MG Photography UAE reserves the right to postpone or reschedule the session at no charge to the client. All outdoor sessions are planned around optimal lighting conditions (golden hour / blue hour) to ensure the highest quality results."
  },
  {
    title: "Privacy & Data Protection",
    content: "MG Photography UAE respects your privacy. Personal details (name, contact information, session preferences) collected through our booking process are used solely for the purpose of managing your session and communicating with you. We do not share your personal data with third parties. Images are stored securely and shared only through private, password-protected online galleries unless explicit permission for broader use has been granted."
  },
  {
    title: "Limitation of Liability",
    content: "In the unlikely event of equipment failure, technical error, or circumstances beyond our control, MG Photography UAE's liability is limited to a refund of fees paid. We take every reasonable precaution to ensure sessions are documented fully and professionally, but cannot be held liable for unforeseeable technical failures. We carry professional photography equipment as backup for all sessions."
  },
  {
    title: "Contact & Disputes",
    content: "We are committed to resolving any concerns openly, quickly, and fairly. If you have any issue with your session, images, or service, please contact us directly via WhatsApp (+971 58 876 4748) or email (hello@mgphotographyglobal.com). We aim to acknowledge all concerns within 24 hours and resolve them within 5 business days."
  },
];

export default function TermsPage() {
  return (
    <>
      <Header />
      {/* Hero */}
      <section style={{ paddingTop: "8rem", paddingBottom: "3rem", background: "var(--black)" }}>
        <div className="container-luxury" style={{ maxWidth: "820px" }}>
          <div className="label" style={{ marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <div className="gold-line" /> Legal
          </div>
          <h1 className="display-md" style={{ marginBottom: "1.25rem" }}>
            Terms & <span className="text-gold-gradient">Conditions</span>
          </h1>
          <p className="body-lg">
            Please read the following terms carefully before booking a session with MG Photography UAE. These terms exist to ensure a clear, transparent, and mutually respectful relationship between you and us.
          </p>
          <p className="body-sm" style={{ marginTop: "1rem" }}>
            Last updated: January 2025 &nbsp;·&nbsp; Applicable to all bookings made with MG Photography UAE
          </p>
        </div>
      </section>

      {/* Content */}
      <section style={{ paddingBottom: "6rem", background: "var(--black)" }}>
        <div className="container-luxury" style={{ maxWidth: "820px" }}>
          <div className="gold-line-full" style={{ marginBottom: "3rem" }} />
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {sections.map((section, i) => (
              <div key={section.title} style={{ borderBottom: "1px solid rgba(201,168,76,0.08)", padding: "2.5rem 0" }}>
                <div style={{ display: "flex", gap: "1.5rem", alignItems: "flex-start" }}>
                  <span style={{ fontFamily: "var(--font-display)", color: "rgba(201,168,76,0.25)", fontSize: "1.5rem", fontWeight: 700, lineHeight: 1, flexShrink: 0, minWidth: "1.5rem" }}>{String(i+1).padStart(2,"0")}</span>
                  <div>
                    <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.15rem", color: "var(--gold)", fontWeight: 500, marginBottom: "0.9rem", lineHeight: 1.3 }}>{section.title}</h2>
                    <p className="body-lg" style={{ fontSize: "0.92rem", lineHeight: 1.8 }}>{section.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Contact */}
          <div className="glass-card" style={{ padding: "2rem", marginTop: "3rem" }}>
            <h3 className="display-sm" style={{ fontSize: "1.1rem", marginBottom: "1rem" }}>Questions About These Terms?</h3>
            <p className="body-lg" style={{ marginBottom: "1.5rem", fontSize: "0.9rem" }}>We believe in transparency and clear communication. If anything here is unclear, please reach out and we&apos;ll be happy to explain.</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
              <a href="https://wa.me/971588764748" className="btn-whatsapp" style={{ fontSize: "0.8rem" }}>
                <svg viewBox="0 0 24 24" fill="currentColor" style={{width:"0.9rem",height:"0.9rem"}}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp Us
              </a>
              <a href="/contact" className="btn-outline" style={{ fontSize: "0.8rem" }}>Contact Form</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
