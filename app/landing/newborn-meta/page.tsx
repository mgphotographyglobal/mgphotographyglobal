import WhatsAppFloat from "../../components/WhatsAppFloat";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Newborn Photography Dubai | Meta Ads | MG Photography",
  description: "Your baby's first moments deserve luxury photography. Safe, cinematic newborn portraits in Dubai. Book today.",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://mgphotographyglobal.com/landing/newborn-meta/" },
};
const whatsappUrl = "https://wa.me/971588764748?text=Hi%20MG%20Photography%20UAE%2C%20I%20saw%20your%20Instagram%20and%20would%20love%20to%20book%20a%20newborn%20photography%20session%20in%20Dubai.";
export default function NewbornMetaLanding() {
  return (
    <div style={{minHeight:"100vh",background:"var(--black)",display:"flex",flexDirection:"column"}}>
      <WhatsAppFloat/>
      <header style={{padding:"1.25rem 1.5rem",display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:"1px solid rgba(201,168,76,0.1)"}}>
        <div style={{display:"flex",alignItems:"center",gap:"0.65rem"}}>
          <div style={{width:"2rem",height:"2rem",border:"1.5px solid var(--gold)",display:"flex",alignItems:"center",justifyContent:"center"}}>
            <span style={{fontFamily:"var(--font-display)",color:"var(--gold)",fontSize:"0.8rem",fontWeight:700}}>MG</span>
          </div>
          <div style={{fontFamily:"var(--font-display)",color:"var(--cream)",fontSize:"0.95rem"}}>MG Photography UAE</div>
        </div>
        <a href={whatsappUrl} className="btn-primary" style={{fontSize:"0.72rem",padding:"0.55rem 1.25rem"}}>Book Now</a>
      </header>
      <main style={{flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",padding:"4rem 1.5rem",position:"relative"}}>
        <div style={{position:"absolute",top:"30%",left:"50%",transform:"translateX(-50%)",width:"600px",height:"600px",borderRadius:"50%",background:"radial-gradient(circle,rgba(201,168,76,0.07) 0%,transparent 70%)",pointerEvents:"none"}}/>
        <div style={{position:"relative",maxWidth:"680px"}}>
          <div className="label" style={{marginBottom:"1rem"}}>For New Parents in Dubai</div>
          <h1 className="display-lg" style={{marginBottom:"1.25rem"}}>
            These First Days<br/>Pass in the Blink<br/><span className="text-gold-shimmer">of an Eye.</span>
          </h1>
          <p className="body-lg" style={{maxWidth:"480px",margin:"0 auto 2.5rem"}}>
            They curl. They sleep. They fit in your palm. These days will be gone so fast. Let MG Photography UAE preserve them forever — with the artistry they deserve.
          </p>
          <a href={whatsappUrl} className="btn-whatsapp" style={{fontSize:"1rem",padding:"1.1rem 2.5rem",display:"inline-flex",gap:"0.65rem",marginBottom:"1rem"}}>
            <svg viewBox="0 0 24 24" fill="currentColor" style={{width:"1.1rem",height:"1.1rem"}}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Reserve Your Session Now
          </a>
          <p className="body-sm" style={{fontSize:"0.75rem"}}>🔒 Safe · Certified · Professional · Dubai UAE</p>
        </div>
      </main>
      <section style={{padding:"2.5rem 1.5rem",background:"rgba(201,168,76,0.04)",borderTop:"1px solid rgba(201,168,76,0.1)"}}>
        <div style={{maxWidth:"720px",margin:"0 auto",display:"flex",flexWrap:"wrap",gap:"1rem",justifyContent:"center"}}>
          {[["👶","Baby Safety First","Certified safe posing techniques"],["✨","Cinematic Quality","Premium editing on every image"],["⚡","Fast Response","WhatsApp reply in 2 hours"],["📍","Dubai & UAE","Dubai · Abu Dhabi · Sharjah"]].map(([icon,title,desc])=>(
            <div key={title} style={{display:"flex",gap:"0.75rem",alignItems:"flex-start",flex:"1",minWidth:"180px",padding:"1rem",background:"rgba(255,255,255,0.02)",border:"1px solid rgba(201,168,76,0.1)"}}>
              <span style={{fontSize:"1.25rem"}}>{icon}</span>
              <div>
                <div style={{fontFamily:"var(--font-body)",fontWeight:600,fontSize:"0.85rem",color:"var(--cream)",marginBottom:"0.2rem"}}>{title}</div>
                <div className="body-sm" style={{fontSize:"0.75rem"}}>{desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <footer style={{padding:"1.5rem",borderTop:"1px solid rgba(201,168,76,0.08)",textAlign:"center"}}>
        <p className="body-sm" style={{fontSize:"0.75rem"}}>© MG Photography UAE · Dubai, UAE · <a href="/terms" style={{color:"var(--gold)",textDecoration:"none"}}>Terms</a></p>
      </footer>
    </div>
  );
}
