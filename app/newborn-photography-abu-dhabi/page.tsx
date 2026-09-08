import { serviceMetadata } from "../lib/serviceMetadata";
import ServicePageTemplate from "../components/ServicePageTemplate";
import type { Metadata } from "next";
const baseMetadata: Metadata = {
  title: "Newborn Photography Abu Dhabi | MG Photography",
  description: "Premium newborn photography in Abu Dhabi. Safe, cinematic, professional. Book your session today with MG Photography UAE.",
  alternates: { canonical: "https://mgphotographyglobal.com/newborn-photography-abu-dhabi/" },
};
const s = {
  title:"Newborn Photography",location:"Abu Dhabi, UAE",canonicalPath:"/newborn-photography-abu-dhabi/",heroTitle:"Abu Dhabi's Most",heroSubtitle:"Loved Newborn Photographer.",emoji:"👶",
  description:"The first two weeks of your baby's life are the most extraordinary — and the most fleeting. At MG Photography UAE, we travel to Abu Dhabi to create cinematic newborn portraits that will take your breath away every single time you look at them.\n\nOur fully-equipped mobile studio setup means we bring the same premium Dubai studio experience directly to Abu Dhabi families. Baby safety, comfort, and warmth are always our first priority — before any artistic consideration.",
  whySection:{title:"Why Abu Dhabi Families Trust MG Photography",points:["Regular sessions available in Abu Dhabi — no compromise on quality","Certified safe newborn posing and handling techniques","Premium studio quality delivered at your Abu Dhabi location","200+ newborn sessions across the UAE","High-resolution gallery delivered within 10–14 days","WhatsApp-first communication — fast and personal always"]},
  packages:[
    {name:"Essential",price:"AED 1,199",features:["2-hour session","20 edited images","Digital gallery","Travel to Abu Dhabi"]},
    {name:"Signature",price:"AED 2,099",features:["4-hour session","40 edited images","Family & sibling shots","Digital gallery + 1 print","Travel to Abu Dhabi"]},
    {name:"Luxury",price:"AED 3,299",features:["Full premium session","60+ edited images","Complete family coverage","Premium album","Priority delivery","Travel to Abu Dhabi"]},
  ],
  faq:[
    {q:"Do you travel to Abu Dhabi?",a:"Yes — we regularly travel to Abu Dhabi for newborn sessions. A travel fee may apply depending on your exact location. Contact us for a personalised quote."},
    {q:"When should we book?",a:"We recommend booking during your second trimester. Sessions are best within the first 5–14 days after birth when babies are at their sleepiest and most flexible."},
  ],
  ctaText:"Bringing Dubai's Best Newborn Photography to Abu Dhabi Families.",
  keywords:["newborn photography Abu Dhabi","newborn photographer Abu Dhabi"],
  relatedServices:[{title:"Newborn Photography Dubai",href:"/dubai-newborn-photography/"},{title:"Maternity Photography Abu Dhabi",href:"/maternity-photography-abu-dhabi/"},{title:"Wedding Photography Abu Dhabi",href:"/wedding-photography-abu-dhabi/"}],
};
export default function NewbornPhotographyAbuDhabi(){return <ServicePageTemplate service={s}/>;}

export const metadata: Metadata = serviceMetadata(baseMetadata, s);
