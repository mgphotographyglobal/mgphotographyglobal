import ServicePageTemplate from "../components/ServicePageTemplate";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Wedding Photography Abu Dhabi | MG Photography",
  description: "Cinematic wedding photography in Abu Dhabi. Indian & destination weddings, premium quality. Book your date now.",
  alternates: { canonical: "https://mgphotographyglobal.com/wedding-photography-abu-dhabi/" },
};
const s = {
  title:"Wedding Photography",location:"Abu Dhabi, UAE",canonicalPath:"/wedding-photography-abu-dhabi/",heroTitle:"Abu Dhabi's Most",heroSubtitle:"Cinematic Wedding Photography.",emoji:"💍",
  description:"Abu Dhabi's grandeur — from the gleaming Sheikh Zayed Grand Mosque to the golden sands of Reem Island — deserves wedding photography that matches its magnificence. At MG Photography UAE, we bring our cinematic storytelling expertise to Abu Dhabi weddings with the same depth, artistry, and emotional intelligence that has earned us 5 stars across the UAE.\n\nWe specialize in Indian weddings, multicultural ceremonies, and luxury destination wedding coverage across Abu Dhabi and the surrounding emirates.",
  whySection:{title:"Why Abu Dhabi Couples Choose MG Photography",points:["Deep expertise in Indian and multicultural wedding ceremonies","Available for all Abu Dhabi wedding venues and outdoor locations","Two-photographer teams for comprehensive coverage","Pre-wedding consultation to map every critical moment","Cinematic two-day multi-event coverage available","Premium albums and video highlight reels available"]},
  packages:[
    {name:"Intimate",price:"AED 4,000",features:["8-hour single photographer","300+ edited images","Ceremony + reception","Digital gallery","Travel to Abu Dhabi"]},
    {name:"Grand",price:"AED 7,500",features:["Full-day two photographers","500+ edited images","Drone photography","Premium album (30 pages)","Teaser gallery in 72hrs","Travel to Abu Dhabi"]},
    {name:"Cinematic Suite",price:"AED 11,500",features:["Two-day multi-event coverage","Unlimited edited images","Highlight video reel","Two premium albums","Priority 14-day delivery","Complimentary engagement shoot","Travel to Abu Dhabi"]},
  ],
  faq:[
    {q:"Do you cover weddings at the Sheikh Zayed Grand Mosque area?",a:"We are familiar with Abu Dhabi's most iconic venues and locations. Note that photography within the mosque is governed by strict rules — we ensure full compliance while capturing the beauty of the surrounding architecture."},
    {q:"How do we book you for our Abu Dhabi wedding?",a:"Simply WhatsApp us your date and venue — we'll confirm availability and arrange a consultation call within 2 hours."},
  ],
  ctaText:"Let's Create Your Abu Dhabi Love Story.",
  keywords:["wedding photography Abu Dhabi","Indian wedding photographer Abu Dhabi"],
  relatedServices:[{title:"Wedding Photography Dubai",href:"/wedding-photography-dubai"},{title:"Pre-Wedding Photography Dubai",href:"/pre-wedding-photography-dubai"},{title:"Newborn Photography Abu Dhabi",href:"/newborn-photography-abu-dhabi"}],
};
export default function WeddingPhotographyAbuDhabi(){return <ServicePageTemplate service={s}/>;}
