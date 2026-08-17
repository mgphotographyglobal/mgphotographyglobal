import ServicePageTemplate from "../components/ServicePageTemplate";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Pre-Wedding Photography Dubai | MG Photography UAE",
  description: "Cinematic pre-wedding & engagement photography in Dubai — desert dunes, Burj views & luxury locations. Book now.",
  alternates: { canonical: "https://mgphotographyglobal.com/pre-wedding-photography-dubai/" },
};
const s = {
  title:"Pre-Wedding Photography",location:"Dubai, UAE",canonicalPath:"/pre-wedding-photography-dubai/",heroTitle:"Romance Before Forever.",heroSubtitle:"Your Prelude Story.",emoji:"💑",
  description:"A pre-wedding shoot is more than just beautiful photos before your wedding day — it's your chance to explore Dubai's most stunning locations together, get comfortable in front of the camera, and create a visual love story that's entirely, uniquely yours.\n\nFrom golden-hour desert sessions at the Al Qudra Lakes to urban luxury shoots around Downtown Dubai and DIFC, we curate each pre-wedding shoot around your personalities, your love story, and the locations that speak to you.\n\nWe work with couples from all backgrounds — Indian, Arab, Western, and multicultural — bringing a deep cultural sensitivity and an eye for the authentic moments that make your love visible.",
  whySection:{
    title:"Why Dubai Couples Love Our Pre-Wedding Sessions",
    points:["Prime Dubai locations: desert, beaches, Downtown, DIFC, Burj Khalifa views","Sunset & golden-hour scheduling for the most cinematic lighting","Wardrobe guidance and location planning consultation included","Relaxed, natural approach — no awkward forced posing","Images ready in 10–14 days with premium color grading","Drone photography available for aerial couple portraits"],
  },
  packages:[
    {name:"Golden Hour",price:"AED 1,199",features:["3-hour session","30 edited images","1 location","Digital gallery"]},
    {name:"Romance",price:"AED 2,199",features:["5-hour session","50 edited images","2 locations","Golden-hour desert session","Digital gallery + 2 prints"]},
    {name:"Epic Love Story",price:"AED 3,499",features:["Full-day multi-location","80+ edited images","Drone photography","Sunset + golden hour","Premium print album","Priority delivery"]},
  ],
  faq:[
    {q:"When should we do the pre-wedding shoot?",a:"Ideally 2–6 months before your wedding. This gives time for editing, for album creation, and for you to use images in your wedding invitations and decor."},
    {q:"Can we shoot in the desert?",a:"Absolutely — the Dubai desert at golden hour is one of the most magical photography locations in the world. We know exactly when and where to go for the most cinematic results."},
    {q:"What should we wear?",a:"We provide a full wardrobe consultation before your shoot. Generally, flowing fabrics in neutral or earthy tones photograph beautifully. We recommend 2–3 outfit changes for variety."},
  ],
  ctaText:"Let's Create Your Cinematic Love Prelude.",
  keywords:["pre-wedding photography Dubai","engagement photoshoot Dubai"],
  heroImage:{
    src:"/images/pre-wedding-photography-dubai-hero-couple-floral-dress.jpg",
    alt:"Man lifting his partner in a flowing green floral dress during a pre-wedding photoshoot",
    objectPosition:"center 35%",
  },
  galleryTitle:"Pre-Wedding Photography Portfolio",
  gallery:[
    { src:"/images/gallery/pre-wedding-photography-dubai-couple-floral-dress-lift-06.jpg", alt:"Man lifting his partner in a flowing green floral dress on a beach walkway" },
    { src:"/images/gallery/pre-wedding-photography-dubai-couple-red-outfits-umbrella-09.jpg", alt:"Couple in matching red outfits sitting under a colorful umbrella on the beach" },
    { src:"/images/gallery/pre-wedding-photography-dubai-red-dress-portrait-rocks-07.jpg", alt:"Woman in a flowing red dress and sunglasses posing on coastal rocks" },
    { src:"/images/gallery/pre-wedding-photography-dubai-couple-silhouette-sunset-03.jpg", alt:"Silhouette of a couple holding hands against a blue sunset sky, framed through a ring" },
    { src:"/images/gallery/pre-wedding-photography-dubai-couple-red-outfits-embrace-10.jpg", alt:"Couple in red outfits lying on the beach sharing an intimate moment" },
    { src:"/images/gallery/pre-wedding-photography-dubai-couple-beach-boat-01.jpg", alt:"Couple sitting together on a wooden fishing boat on a beach" },
    { src:"/images/gallery/pre-wedding-photography-dubai-couple-lifeguard-tower-02.jpg", alt:"Couple standing together under a thatched wooden lifeguard tower on the beach" },
    { src:"/images/gallery/pre-wedding-photography-dubai-red-dress-flowing-fabric-08.jpg", alt:"Woman in a red flowing dress with fabric caught in the wind atop coastal rocks" },
    { src:"/images/gallery/pre-wedding-photography-dubai-couple-red-outfits-lighthouse-11.jpg", alt:"Couple in red outfits standing on a sandbar with a lighthouse in the distance" },
    { src:"/images/gallery/pre-wedding-photography-dubai-couple-silhouette-embrace-04.jpg", alt:"Silhouette of a couple embracing against a blue evening sky" },
    { src:"/images/gallery/pre-wedding-photography-dubai-couple-beach-candid-05.jpg", alt:"Couple lying together on the sand sharing a candid moment on the beach" },
    { src:"/images/gallery/pre-wedding-photography-dubai-couple-sharing-ice-cream-12.jpg", alt:"Couple in red outfits sharing an ice cream cone, photographed from above" },
    { src:"/images/gallery/pre-wedding-photography-dubai-couple-colonial-veranda-13.jpg", alt:"Couple in red outfits sitting together on a pillared colonial-style veranda" },
  ],
  relatedServices:[{title:"Wedding Photography Dubai",href:"/wedding-photography-dubai"},{title:"Outdoor Photography Dubai",href:"/outdoor-photography-dubai"}],
};
export default function PreWeddingPage(){return <ServicePageTemplate service={s}/>;}
