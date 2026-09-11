import Header from "../../components/Header";
import Footer from "../../components/Footer";
import WhatsAppFloat from "../../components/WhatsAppFloat";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Dubai Wedding Photography Guide | MG Photography UAE",
  description: "The complete guide to wedding photography in Dubai — how to choose a photographer, what to look for, and timeline tips.",
  alternates: { canonical: "https://mgphotographyglobal.com/guides/dubai-wedding-photography-guide/" },
};
export default function DubaiWeddingGuide() {
  return (<>
    <Header /><WhatsAppFloat />
    <section style={{paddingTop:"8rem",paddingBottom:"3rem",background:"var(--black)"}}>
      <div className="container-luxury" style={{maxWidth:"820px"}}>
        <div className="label" style={{marginBottom:"1rem",display:"flex",alignItems:"center",gap:"0.75rem"}}><div className="gold-line"/>Wedding Guide</div>
        <h1 className="display-md" style={{marginBottom:"1.25rem"}}>The Complete Dubai<br/><span className="text-gold-gradient">Wedding Photography Guide (2025)</span></h1>
        <p className="body-lg" style={{marginBottom:"1.5rem"}}>Choosing a wedding photographer in Dubai is one of the most important decisions you&apos;ll make in your entire wedding planning journey. Unlike the flowers, the catering, or even the venue, your wedding photographs are the one investment that outlasts your wedding day itself. They will be looked at by your grandchildren. They deserve the very best.</p>
        <p className="body-lg" style={{marginBottom:"2rem"}}>See our <a href="/wedding-photography-dubai/" style={{color:"var(--gold)",textDecoration:"underline",textUnderlineOffset:"0.2em"}}>Dubai wedding photography service</a> for portfolio details and booking information.</p>
        <div className="gold-line-full"/>
      </div>
    </section>
    <section style={{paddingBottom:"5rem",background:"var(--black)"}}>
      <div className="container-luxury" style={{maxWidth:"820px"}}>
        <div style={{display:"flex",flexDirection:"column",gap:"3rem",marginTop:"2.5rem"}}>
          {[
            {title:"How to Choose Your Dubai Wedding Photographer",body:"The most important factor isn't price — it's style. Every photographer has a signature visual language, and yours needs to match yours. Look at complete wedding galleries, not just highlight images. Ask yourself: are these images emotional? Do they feel cinematic and documentary, or stiff and posed? Does the light feel natural or harsh? Great wedding photography tells the story of the day. If a gallery makes you feel something, that photographer understands storytelling."},
            {title:"Questions to Ask Before You Book",body:"Before committing to any wedding photographer in Dubai, ask them these essential questions: How many Dubai weddings have you photographed? What happens if you have an emergency on the day? Do you provide a second photographer for full coverage? What is your editing style and turnaround time? Can I see a complete gallery from a similar wedding? A photographer's answers — and their confidence in giving them — will tell you everything you need to know."},
            {title:"The Best Time for Wedding Portraits in Dubai",body:"Dubai's heat means that outdoor wedding portraits are best scheduled around golden hour — the 45 minutes before sunset — or early morning. Between October and April, afternoon sessions are comfortable. For summer weddings (May–September), all outdoor photography should be planned for early morning or evening. Indoor venues are obviously climate-controlled and available year-round. Your photographer should advise you on this timeline during your consultation."},
            {title:"What to Expect from MG Photography UAE",body:"When you book with MG Photography UAE, you begin with a detailed consultation call where we map your entire day — every important moment, every cultural ceremony, every family grouping. We work alongside your wedding planner and venue coordinator to ensure nothing is missed. We arrive early, stay late, and treat your day with the care and attention it deserves. You'll receive a teaser gallery within 72 hours, and your complete premium-edited gallery within 21 days."},
          ].map(sec=>(
            <div key={sec.title} style={{borderBottom:"1px solid rgba(201,168,76,0.08)",paddingBottom:"2.5rem"}}>
              <h2 style={{fontFamily:"var(--font-display)",fontSize:"1.15rem",color:"var(--gold)",marginBottom:"1rem"}}>{sec.title}</h2>
              <p className="body-lg" style={{fontSize:"0.92rem",lineHeight:1.85}}>{sec.body}</p>
            </div>
          ))}
        </div>
        <div className="glass-card" style={{padding:"2.5rem",marginTop:"3.5rem",textAlign:"center"}}>
          <h2 className="display-sm" style={{marginBottom:"1rem"}}>Ready to Secure Your <span className="text-gold-gradient">Wedding Date?</span></h2>
          <p className="body-lg" style={{marginBottom:"2rem",maxWidth:"480px",margin:"0 auto 2rem"}}>Popular dates book 6–12 months in advance. Check your date availability now.</p>
          <a href="https://wa.me/971588764748?text=Hi%2C%20I%27d%20like%20to%20check%20availability%20for%20wedding%20photography%20in%20Dubai." className="btn-whatsapp" style={{display:"inline-flex"}}>
            <svg viewBox="0 0 24 24" fill="currentColor" style={{width:"1rem",height:"1rem"}}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Check My Date
          </a>
        </div>
      </div>
    </section>
    <Footer/>
  </>);
}
