"use client";
import Image from "next/image";
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppFloat from "./WhatsAppFloat";

interface ServicePageProps {
  service: {
    title: string;
    location: string;
    heroTitle: string;
    heroSubtitle: string;
    description: string;
    whySection: { title: string; points: string[] };
    packages: { name: string; price: string; features: string[] }[];
    faq: { q: string; a: string }[];
    ctaText: string;
    emoji: string;
    keywords: string[];
    relatedServices: { title: string; href: string }[];
    heroImage?: { src: string; alt: string; objectPosition?: string };
    gallery?: { src: string; alt: string }[];
    galleryTitle?: string;
    gallerySubtitle?: string;
    canonicalPath: string; // e.g. "/baby-photography-dubai/" — used for Service/FAQ/Breadcrumb schema + canonical
  };
}

export default function ServicePageTemplate({ service }: ServicePageProps) {
  const whatsappMsg = encodeURIComponent(`Hi MG Photography UAE, I'm interested in ${service.title} in ${service.location}. Please share more details.`);
  const SITE_URL = "https://mgphotographyglobal.com";
  const pageUrl = `${SITE_URL}${service.canonicalPath}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.title,
    name: `${service.title} — ${service.location}`,
    description: service.description.replace(/\s+/g, " ").trim(),
    url: pageUrl,
    provider: {
      "@type": "LocalBusiness",
      name: "MG Photography UAE",
      telephone: "+971588764748",
      url: SITE_URL,
    },
    areaServed: { "@type": "City", name: service.location.split(",")[0].trim() },
    offers: service.packages.map((p) => ({
      "@type": "Offer",
      name: p.name,
      price: p.price.replace(/[^0-9]/g, ""),
      priceCurrency: "AED",
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: service.title, item: pageUrl },
    ],
  };

  const gallerySchema = service.gallery && service.gallery.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "@id": `${pageUrl}#gallery`,
    name: service.galleryTitle || `${service.title} Portfolio`,
    url: pageUrl,
    image: service.gallery.map((img) => ({
      "@type": "ImageObject",
      contentUrl: `${SITE_URL}${img.src}`,
      caption: img.alt,
    })),
  } : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {gallerySchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(gallerySchema) }} />}
      <Header />
      <WhatsAppFloat />

      {/* Hero */}
      <section style={{ position: "relative", height: "70vh", minHeight: "500px", display: "flex", alignItems: "flex-end", paddingBottom: "5rem", overflow: "hidden" }}>
        {service.heroImage ? (
          <div style={{ position: "absolute", inset: 0 }}>
            <Image
              src={service.heroImage.src}
              alt={service.heroImage.alt}
              fill
              priority
              sizes="100vw"
              style={{ objectFit: "cover", objectPosition: service.heroImage.objectPosition || "center" }}
            />
          </div>
        ) : (
          <div className="photo-placeholder" style={{ position: "absolute", inset: 0 }}>
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, #0d0d0d 0%, #1a1511 60%, #0d0d0d 100%)" }} />
            <div style={{ position: "absolute", top: "30%", right: "20%", width: "350px", height: "350px", borderRadius: "50%", background: "radial-gradient(circle, rgba(201,168,76,0.1) 0%, transparent 70%)", filter: "blur(50px)" }} />
            <div style={{ position: "absolute", fontSize: "20rem", opacity: 0.03, top: "50%", left: "50%", transform: "translate(-50%,-50%)", pointerEvents: "none", userSelect: "none" }}>{service.emoji}</div>
          </div>
        )}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(13,13,13,0.95) 0%, rgba(13,13,13,0.4) 60%, rgba(13,13,13,0.2) 100%)" }} />
        <div className="container-luxury" style={{ position: "relative", zIndex: 10 }}>
          <div className="label" style={{ marginBottom: "0.75rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <div className="gold-line" />
            {service.location}
          </div>
          <h1 className="display-lg" style={{ marginBottom: "1rem" }}>
            {service.heroTitle}<br />
            <span className="text-gold-gradient">{service.heroSubtitle}</span>
          </h1>
          <a href={`https://wa.me/971588764748?text=${whatsappMsg}`} className="btn-whatsapp" style={{ marginTop: "1rem" }}>
            <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: "1rem", height: "1rem" }}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Book {service.title}
          </a>
        </div>
      </section>

      {/* Description */}
      <section className="section-pad" style={{ background: "var(--black)" }}>
        <div className="container-luxury" style={{ maxWidth: "780px" }}>
          <div className="label" style={{ marginBottom: "1rem" }}>About This Service</div>
          <h2 className="display-sm" style={{ marginBottom: "1.5rem" }}>The MG Photography Experience</h2>
          <p className="body-lg" style={{ whiteSpace: "pre-line" }}>{service.description}</p>
        </div>
      </section>

      {/* Gallery */}
      {service.gallery && service.gallery.length > 0 && (
        <section id="gallery" aria-label={`${service.title} gallery`} className="section-pad" style={{ background: "var(--black-rich)" }}>
          <div className="container-luxury">
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <div className="label" style={{ marginBottom: "0.75rem" }}>Our Work</div>
              <h2 className="display-sm">{service.galleryTitle || `${service.title} Portfolio`}</h2>
              {service.gallerySubtitle && (
                <p className="body-lg" style={{ maxWidth: "560px", margin: "1rem auto 0" }}>{service.gallerySubtitle}</p>
              )}
            </div>
            <div className="service-gallery-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0.5rem" }}>
              {service.gallery.map((img, i) => (
                <div
                  key={img.src}
                  style={{ position: "relative", aspectRatio: i === 0 ? "4/3" : "3/4", gridColumn: i === 0 ? "span 2" : "span 1", overflow: "hidden" }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    loading={i < 3 ? "eager" : "lazy"}
                    sizes={i === 0 ? "66vw" : "33vw"}
                    style={{ objectFit: "cover" }}
                  />
                </div>
              ))}
            </div>
          </div>
          <style>{`@media(max-width:768px){.service-gallery-grid{grid-template-columns:repeat(2,1fr)!important}}`}</style>
        </section>
      )}

      {/* Why MG */}
      <section className="section-pad bg-cream-section">
        <div className="container-luxury">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}>
            <div>
              <div className="label" style={{ marginBottom: "1rem" }}>Why Choose Us</div>
              <h2 className="display-sm">{service.whySection.title}</h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {service.whySection.points.map((point, i) => (
                <div key={i} style={{ display: "flex", gap: "1rem", alignItems: "flex-start", padding: "1.1rem 1.25rem", background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.15)" }}>
                  <div style={{ color: "var(--gold-dark)", fontWeight: 700, fontFamily: "var(--font-body)", fontSize: "0.85rem", flexShrink: 0, marginTop: "1px" }}>✓</div>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", color: "rgba(13,13,13,0.8)", lineHeight: 1.6 }}>{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.why-grid{grid-template-columns:1fr!important}}`}</style>
      </section>

      {/* Packages */}
      <section className="section-pad" style={{ background: "var(--black-rich)" }}>
        <div className="container-luxury">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <div className="label" style={{ marginBottom: "0.75rem" }}>Investment</div>
            <h2 className="display-sm">
              Choose Your <span className="text-gold-gradient">Package</span>
            </h2>
            <p className="body-lg" style={{ maxWidth: "440px", margin: "1rem auto 0" }}>Transparent pricing. No hidden fees. Premium quality guaranteed.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "1.25rem" }}>
            {service.packages.map((pkg, i) => (
              <div key={pkg.name} className="glass-card" style={{ padding: "2rem", border: i === 1 ? "1px solid rgba(201,168,76,0.5)" : undefined, background: i === 1 ? "rgba(201,168,76,0.05)" : undefined, position: "relative" }}>
                {i === 1 && <div className="label" style={{ position: "absolute", top: "-0.6rem", left: "50%", transform: "translateX(-50%)", background: "var(--gold)", color: "var(--black)", padding: "0.2rem 0.75rem", fontSize: "0.6rem", whiteSpace: "nowrap" }}>MOST POPULAR</div>}
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.15rem", color: "var(--cream)", marginBottom: "0.5rem" }}>{pkg.name}</h3>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "1.75rem", color: i === 1 ? "var(--gold)" : "var(--cream)", fontWeight: 700, marginBottom: "1.5rem" }}>{pkg.price}</div>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.65rem", marginBottom: "1.75rem" }}>
                  {pkg.features.map((f) => (
                    <li key={f} style={{ display: "flex", gap: "0.6rem", alignItems: "flex-start" }}>
                      <span style={{ color: "var(--gold)", fontSize: "0.75rem", marginTop: "3px" }}>◆</span>
                      <span className="body-sm" style={{ fontSize: "0.85rem" }}>{f}</span>
                    </li>
                  ))}
                </ul>
                <a href={`https://wa.me/971588764748?text=${whatsappMsg}`} className={i === 1 ? "btn-primary" : "btn-outline"} style={{ display: "block", textAlign: "center", width: "100%" }}>
                  Book This Package
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad" style={{ background: "var(--black)" }}>
        <div className="container-luxury" style={{ maxWidth: "720px" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div className="label" style={{ marginBottom: "0.75rem" }}>Questions Answered</div>
            <h2 className="display-sm">Frequently Asked <span className="text-gold-gradient">Questions</span></h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {service.faq.map((item, i) => (
              <div key={i} style={{ borderBottom: "1px solid rgba(201,168,76,0.1)", padding: "1.5rem 0" }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.05rem", color: "var(--cream)", marginBottom: "0.75rem", fontWeight: 500 }}>{item.q}</h3>
                <p className="body-lg" style={{ fontSize: "0.9rem" }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section style={{ padding: "3rem 0", background: "var(--black-soft)" }}>
        <div className="container-luxury">
          <div className="label" style={{ marginBottom: "1.5rem" }}>You Might Also Like</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
            {service.relatedServices.map((s) => (
              <a key={s.href} href={s.href} className="btn-outline" style={{ fontSize: "0.75rem", padding: "0.6rem 1.25rem" }}>
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad" style={{ background: "var(--black)", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "500px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div className="container-luxury" style={{ position: "relative", zIndex: 2 }}>
          <div className="label" style={{ marginBottom: "0.75rem" }}>{service.location}</div>
          <h2 className="display-md" style={{ marginBottom: "1.5rem", maxWidth: "600px", margin: "0 auto 1.5rem" }}>
            {service.ctaText}
          </h2>
          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "1rem", marginTop: "2rem" }}>
            <a href={`https://wa.me/971588764748?text=${whatsappMsg}`} className="btn-whatsapp" style={{ fontSize: "0.9rem", padding: "1rem 2.25rem" }}>
              <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: "1rem", height: "1rem" }}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Book Now via WhatsApp
            </a>
            <a href="/contact" className="btn-outline">Contact Us</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
