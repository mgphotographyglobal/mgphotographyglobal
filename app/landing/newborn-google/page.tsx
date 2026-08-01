import WhatsAppFloat from "../../components/WhatsAppFloat";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Luxury Newborn Photography Dubai | Book Today",
  description: "Premium newborn photography in Dubai. Safe, professional, cinematic. Book your session now via WhatsApp. Limited dates available.",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://mgphotographyglobal.com/landing/newborn-google/" },
};
const whatsappUrl = "https://wa.me/971588764748?text=Hi%20MG%20Photography%20UAE%2C%20I%20found%20you%20on%20Google%20and%20would%20like%20to%20book%20a%20newborn%20photography%20session%20in%20Dubai.";
export default function NewbornGoogleLanding() {
  return (
    <div style={{minHeight:"100vh",background:"var(--black)",display:"flex",flexDirection:"column"}}>
      <WhatsAppFloat/>
      {/* Minimal Header */}
      <header style={{padding:"1.25rem 1.5rem",display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:"1px solid rgba(201,168,76,0.1)"}}>
        <div style={{display:"flex",alignItems:"center",gap:"0.65rem"}}>
          <div style={{width:"2rem",height:"2rem",border:"1.5px solid var(--gold)",display:"flex",alignItems:"center",justifyContent:"center"}}>
            <span style={{fontFamily:"var(--font-display)",color:"var(--gold)",fontSize:"0.8rem",fontWeight:700}}>MG</span>
          </div>
          <div style={{fontFamily:"var(--font-display)",color:"var(--cream)",fontSize:"0.95rem"}}>MG Photography UAE</div>
        </div>
        <a href={whatsappUrl} className="btn-primary" style={{fontSize:"0.72rem",padding:"0.55rem 1.25rem"}}>Book Now</a>
      </header>

      {/* Hero */}
      <main style={{flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",padding:"4rem 1.5rem",position:"relative"}}>
        <div style={{position:"absolute",top:"30%",left:"50%",transform:"translateX(-50%)",width:"600px",height:"600px",borderRadius:"50%",background:"radial-gradient(circle,rgba(201,168,76,0.07) 0%,transparent 70%)",pointerEvents:"none"}}/>
        <div style={{position:"relative",maxWidth:"720px"}}>
          <div className="label" style={{marginBottom:"1rem"}}>Dubai · Abu Dhabi · Sharjah</div>
          <h1 className="display-lg" style={{marginBottom:"1.25rem"}}>
            Luxury Newborn Photography<br/><span className="text-gold-shimmer">in Dubai</span>
          </h1>
          <p className="body-lg" style={{maxWidth:"500px",margin:"0 auto 2rem"}}>
            The first 14 days are irreplaceable. We create cinematic, emotionally stunning newborn portraits that you will treasure for the rest of your life. 500+ families trust MG Photography UAE.
          </p>
          {/* Trust signals */}
          <div style={{display:"flex",justifyContent:"center",gap:"2rem",flexWrap:"wrap",marginBottom:"2.5rem",padding:"1.5rem",border:"1px solid rgba(201,168,76,0.15)"}}>
            {[["500+","Families"],["5★","Google Rating"],["8+","Years"],["UAE","Certified Safe"]].map(([val,lab])=>(
              <div key={lab} style={{textAlign:"center"}}>
                <div style={{fontFamily:"var(--font-display)",fontSize:"1.5rem",color:"var(--gold)",fontWeight:700,lineHeight:1}}>{val}</div>
                <div className="body-sm" style={{fontSize:"0.72rem",marginTop:"0.2rem"}}>{lab}</div>
              </div>
            ))}
          </div>
          <a href={whatsappUrl} className="btn-whatsapp" style={{fontSize:"1rem",padding:"1.1rem 2.5rem",display:"inline-flex",gap:"0.65rem"}}>
            <svg viewBox="0 0 24 24" fill="currentColor" style={{width:"1.1rem",height:"1.1rem"}}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Book Your Session via WhatsApp
          </a>
          <p className="body-sm" style={{marginTop:"1rem",fontSize:"0.75rem"}}>⚡ We respond within 2 hours · Limited dates available</p>
        </div>
      </main>

      {/* Social proof */}
      <section style={{padding:"2.5rem 1.5rem",background:"rgba(201,168,76,0.04)",borderTop:"1px solid rgba(201,168,76,0.1)"}}>
        <div style={{maxWidth:"720px",margin:"0 auto",textAlign:"center"}}>
          <div className="stars" style={{justifyContent:"center",marginBottom:"1rem"}}>{"★★★★★".split("").map((s,i)=><span key={i}>{s}</span>)}</div>
          <p style={{fontFamily:"var(--font-display)",fontSize:"1rem",color:"var(--cream-warm)",fontStyle:"italic",marginBottom:"0.75rem",lineHeight:1.7}}>
            &ldquo;MG Photography captured our newborn in a way that made me cry with joy. Every single image is a masterpiece.&rdquo;
          </p>
          <div className="body-sm" style={{fontSize:"0.78rem"}}>— Priya Sharma, Dubai Marina</div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{padding:"1.5rem",borderTop:"1px solid rgba(201,168,76,0.08)",textAlign:"center"}}>
        <p className="body-sm" style={{fontSize:"0.75rem"}}>© MG Photography UAE · Dubai, UAE · <a href="/terms" style={{color:"var(--gold)",textDecoration:"none"}}>Terms</a></p>
      </footer>
    </div>
  );
}
