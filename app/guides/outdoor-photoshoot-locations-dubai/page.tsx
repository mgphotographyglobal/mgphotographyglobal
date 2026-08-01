import Header from "../../components/Header";
import Footer from "../../components/Footer";
import WhatsAppFloat from "../../components/WhatsAppFloat";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Best Outdoor Photoshoot Locations Dubai | MG Photography",
  description: "Top outdoor photoshoot locations in Dubai — desert dunes, JBR beach, Downtown, DIFC & hidden gems. Expert guide.",
  alternates: { canonical: "https://mgphotographyglobal.com/guides/outdoor-photoshoot-locations-dubai/" },
};
const locations = [
  {name:"Al Qudra Desert",why:"The most cinematic backdrop in Dubai. Golden hour transforms the sand dunes into a sea of amber light. Perfect for families, couples, and pre-wedding shoots."},
  {name:"JBR Beach & The Walk",why:"Turquoise water, golden sand, and the Dubai Marina skyline create a perfect blend of natural beauty and urban luxury. Best at sunrise or golden hour."},
  {name:"Downtown Dubai & Dubai Fountain",why:"Iconic. The Burj Khalifa backdrop is instantly recognizable globally and gives your photos unmistakable Dubai energy. Blue hour is particularly magical here."},
  {name:"DIFC (Dubai International Financial Centre)",why:"Architectural grandeur meets urban elegance. The glass towers, wide open plazas, and dramatic light make DIFC perfect for couples, professionals, and editorial-style sessions."},
  {name:"Al Seef Heritage District",why:"Where old Dubai meets modern luxury. Traditional wind towers, lantern-lit alleyways, and the creek backdrop create a uniquely Emirati visual story."},
  {name:"Bluewaters Island & Ain Dubai",why:"The world's largest observation wheel provides a stunning geometric backdrop. The island's clean, modern aesthetic is perfect for family lifestyle and couple portraits."},
  {name:"Dubai Miracle Garden (Seasonal)",why:"Available October–April, this extraordinary floral garden offers over 150 million flowers in incredible arrangements — a truly unique and colourful backdrop."},
];
export default function OutdoorLocationsGuide() {
  return (<>
    <Header /><WhatsAppFloat />
    <section style={{paddingTop:"8rem",paddingBottom:"3rem",background:"var(--black)"}}>
      <div className="container-luxury" style={{maxWidth:"820px"}}>
        <div className="label" style={{marginBottom:"1rem",display:"flex",alignItems:"center",gap:"0.75rem"}}><div className="gold-line"/>Photography Guide</div>
        <h1 className="display-md" style={{marginBottom:"1.25rem"}}>Best Outdoor Photoshoot Locations<br/><span className="text-gold-gradient">in Dubai (2025)</span></h1>
        <p className="body-lg" style={{marginBottom:"2rem"}}>Dubai is one of the most visually extraordinary cities in the world — and choosing the right location for your photoshoot can be the difference between beautiful and breathtaking. This guide shares our favourite outdoor photography locations across Dubai, curated from 8+ years of creating premium images across the city.</p>
        <div className="gold-line-full"/>
      </div>
    </section>
    <section style={{paddingBottom:"5rem",background:"var(--black)"}}>
      <div className="container-luxury" style={{maxWidth:"820px"}}>
        <p className="body-lg" style={{marginBottom:"3rem",marginTop:"2rem"}}>At MG Photography UAE, we schedule all outdoor sessions around Dubai's golden hour — the magical 45–60 minutes before sunset when the light turns warm, golden, and impossibly beautiful. This is the secret behind the cinematic quality of our outdoor work. Let us show you Dubai's most stunning hidden gems and iconic locations.</p>
        <div style={{display:"flex",flexDirection:"column",gap:"0"}}>
          {locations.map((loc,i)=>(
            <div key={loc.name} style={{borderBottom:"1px solid rgba(201,168,76,0.08)",padding:"2rem 0",display:"flex",gap:"1.5rem"}}>
              <span style={{fontFamily:"var(--font-display)",color:"rgba(201,168,76,0.3)",fontSize:"1.75rem",fontWeight:700,lineHeight:1,flexShrink:0}}>{String(i+1).padStart(2,"0")}</span>
              <div>
                <h3 style={{fontFamily:"var(--font-display)",fontSize:"1.1rem",color:"var(--gold)",marginBottom:"0.65rem"}}>{loc.name}</h3>
                <p className="body-lg" style={{fontSize:"0.92rem"}}>{loc.why}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="glass-card" style={{padding:"2.5rem",marginTop:"3.5rem",textAlign:"center"}}>
          <h2 className="display-sm" style={{marginBottom:"1rem"}}>Book Your <span className="text-gold-gradient">Outdoor Session</span></h2>
          <p className="body-lg" style={{marginBottom:"2rem",maxWidth:"460px",margin:"0 auto 2rem"}}>Tell us your favourite location and we'll plan the perfect session around Dubai's best light.</p>
          <a href="https://wa.me/971588764748?text=Hi%2C%20I%27d%20like%20to%20book%20an%20outdoor%20photoshoot%20in%20Dubai." className="btn-whatsapp" style={{display:"inline-flex"}}>
            <svg viewBox="0 0 24 24" fill="currentColor" style={{width:"1rem",height:"1rem"}}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Book Outdoor Session
          </a>
        </div>
      </div>
    </section>
    <Footer/>
  </>);
}
