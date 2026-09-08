import { serviceMetadata } from "../lib/serviceMetadata";
import ServicePageTemplate from "../components/ServicePageTemplate";
import type { Metadata } from "next";
const baseMetadata: Metadata = {
  title: "Newborn Photography Sharjah | MG Photography",
  description: "Premium newborn photography in Sharjah. Safe, cinematic, professional. Book your session today with MG Photography UAE.",
  alternates: { canonical: "https://mgphotographyglobal.com/newborn-photography-sharjah/" },
};
const s = {
  title:"Newborn Photography",location:"Sharjah, UAE",canonicalPath:"/newborn-photography-sharjah/",heroTitle:"Sharjah's Most",heroSubtitle:"Trusted Newborn Photographer.",emoji:"👶",
  description:"The first two weeks of your baby's life are a treasure that can never be recovered. At MG Photography UAE, we travel to Sharjah to create cinematic newborn portraits with the same premium quality that Dubai families have trusted for over 8 years.\n\nWe bring our fully-equipped studio setup to your Sharjah location — ensuring your baby stays comfortable, warm, and safe throughout the entire session.",
  whySection:{title:"Why Sharjah Families Choose MG Photography",points:["Available for sessions across all areas of Sharjah","Certified safe newborn posing — baby safety is always first","Premium editing and cinematic retouching on every image","Gallery delivered within 10–14 business days","Simple WhatsApp booking process","200+ newborn sessions completed across the UAE"]},
  packages:[
    {name:"Essential",price:"AED 1,099",features:["2-hour session","20 edited images","Digital gallery","Travel to Sharjah"]},
    {name:"Signature",price:"AED 1,999",features:["4-hour session","40 edited images","Family shots included","Digital gallery + 1 print","Travel to Sharjah"]},
    {name:"Luxury",price:"AED 2,999",features:["Full premium session","60+ edited images","Complete family coverage","Premium album","Priority delivery","Travel to Sharjah"]},
  ],
  faq:[
    {q:"Do you travel to Sharjah for newborn sessions?",a:"Yes, we regularly serve families in Sharjah. A small travel fee may apply. Contact us via WhatsApp for an exact quote for your location."},
    {q:"Is your equipment the same quality as in Dubai?",a:"Absolutely. We bring our full professional studio setup to every location — there is no difference in quality between our Dubai and Sharjah sessions."},
  ],
  ctaText:"Premium Newborn Photography, Now Available in Sharjah.",
  keywords:["newborn photography Sharjah","newborn photographer Sharjah"],
  relatedServices:[{title:"Newborn Photography Dubai",href:"/dubai-newborn-photography/"},{title:"Newborn Photography Abu Dhabi",href:"/newborn-photography-abu-dhabi/"},{title:"Maternity Photography Dubai",href:"/maternity-photography-dubai/"}],
};
export default function NewbornPhotographySharjah(){return <ServicePageTemplate service={s}/>;}

export const metadata: Metadata = serviceMetadata(baseMetadata, s);
