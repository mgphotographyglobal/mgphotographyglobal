import Header from "../../components/Header";
import Footer from "../../components/Footer";
import WhatsAppFloat from "../../components/WhatsAppFloat";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "What to Wear for a Maternity Photoshoot | MG Photography",
  description: "Expert guide on what to wear for your Dubai maternity photoshoot — colors, fabrics, styling tips, and what to avoid.",
  alternates: { canonical: "https://mgphotographyglobal.com/guides/what-to-wear-maternity-photoshoot/" },
};
export default function MaternityWearGuide() {
  return (<>
    <Header /><WhatsAppFloat />
    <section style={{paddingTop:"8rem",paddingBottom:"3rem",background:"var(--black)"}}>
      <div className="container-luxury" style={{maxWidth:"820px"}}>
        <div className="label" style={{marginBottom:"1rem",display:"flex",alignItems:"center",gap:"0.75rem"}}><div className="gold-line"/>Maternity Guide</div>
        <h1 className="display-md" style={{marginBottom:"1.25rem"}}>What to Wear for Your<br/><span className="text-gold-gradient">Maternity Photoshoot in Dubai</span></h1>
        <p className="body-lg" style={{marginBottom:"1.5rem"}}>One of the most common questions we hear from expectant mothers before their session is: &quot;What should I wear?&quot; Great question — and the answer matters more than you might think. The right outfit choices can be the difference between images that feel merely pretty and images that feel utterly breathtaking.</p>
        <p className="body-lg" style={{marginBottom:"2rem"}}>For session examples and booking information, visit our <a href="/maternity-photography-dubai/" style={{color:"var(--gold)",textDecoration:"underline",textUnderlineOffset:"0.2em"}}>Dubai maternity photography service</a>.</p>
        <div className="gold-line-full"/>
      </div>
    </section>
    <section style={{paddingBottom:"5rem",background:"var(--black)"}}>
      <div className="container-luxury" style={{maxWidth:"820px"}}>
        <div style={{display:"flex",flexDirection:"column",gap:"3rem",marginTop:"2.5rem"}}>
          {[
            {title:"The Golden Rule: Flowing Fabrics Win",body:"If there is one principle that governs maternity photography fashion, it is this: flowing fabric creates magic. Lightweight chiffon, silk, linen, and jersey knit all move beautifully in both studio and outdoor settings. They drape elegantly over your bump and create a sense of cinematic motion that form-hugging fabrics simply cannot replicate. Our top recommendation? A floor-length flowing gown in a neutral or earth tone — it is virtually impossible to go wrong."},
            {title:"Colors That Photograph Beautifully in Dubai",body:"For studio sessions, the richest results come from earth tones (terracotta, rust, sand, caramel), muted pastels (dusty rose, sage green, soft lavender), and deep jewel tones (burgundy, emerald, navy). These tones complement our studio's warm, cinematic lighting and produce images that have extraordinary depth. For outdoor sessions in Dubai's natural golden light, whites and creams are transcendent — they absorb the golden hour light beautifully and create an almost otherworldly glow."},
            {title:"What to Avoid",body:"Bright neon colors and busy patterns compete with your face and bump for attention. Clothes with large logos or branding distract the eye. Stiff fabrics (denim, thick cotton) don't move and photograph with less elegance. Very tight fitted clothing can feel uncomfortable and may not drape as beautifully as you'd hope. That said, if something makes you feel extraordinary, wear it — confidence translates directly through a camera lens."},
            {title:"Our Wardrobe — Included in Your Session",body:"The good news? At MG Photography UAE, we provide a curated selection of luxury maternity gowns for every session. Our wardrobe includes flowing chiffon gowns, fitted silk dresses, and bohemian wrap styles in a range of colors from cream to forest green to deep burgundy — in sizes from XS to XL. You're welcome to wear one of our gowns, bring your own outfits, or combine both for more variety in your gallery."},
            {title:"Styling Tips for Partners & Family",body:"If your partner or children are joining the session, clothing coordination creates the most cohesive and elegant gallery. The goal isn't matching — it's harmonising. If you're wearing cream and gold tones, have your partner in warm neutrals (beige, tan, off-white). Avoid clashing colors or outfits that compete with the maternity subject. Children in white or soft pastels always look beautiful alongside a maternity subject."},
          ].map(sec=>(
            <div key={sec.title} style={{borderBottom:"1px solid rgba(201,168,76,0.08)",paddingBottom:"2.5rem"}}>
              <h2 style={{fontFamily:"var(--font-display)",fontSize:"1.15rem",color:"var(--gold)",marginBottom:"1rem"}}>{sec.title}</h2>
              <p className="body-lg" style={{fontSize:"0.92rem",lineHeight:1.85}}>{sec.body}</p>
            </div>
          ))}
        </div>
        <div className="glass-card" style={{padding:"2.5rem",marginTop:"3.5rem",textAlign:"center"}}>
          <h2 className="display-sm" style={{marginBottom:"1rem"}}>Ready to Create Your <span className="text-gold-gradient">Dream Maternity Session?</span></h2>
          <p className="body-lg" style={{marginBottom:"2rem",maxWidth:"460px",margin:"0 auto 2rem"}}>Book your session and we&apos;ll guide you through every wardrobe decision in our pre-session consultation.</p>
          <a href="https://wa.me/971588764748?text=Hi%2C%20I%27d%20like%20to%20book%20a%20maternity%20photoshoot%20in%20Dubai." className="btn-whatsapp" style={{display:"inline-flex"}}>
            <svg viewBox="0 0 24 24" fill="currentColor" style={{width:"1rem",height:"1rem"}}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Book Maternity Session
          </a>
        </div>
      </div>
    </section>
    <Footer/>
  </>);
}
