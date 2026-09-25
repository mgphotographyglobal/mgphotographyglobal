import { serviceMetadata } from "../lib/serviceMetadata";
import ServicePageTemplate from "../components/ServicePageTemplate";
import type { Metadata } from "next";
const baseMetadata: Metadata = {
  title: "Newborn Photography Sharjah | MG Photography",
  description: "Baby-led newborn photography at home in Sharjah. MG Photography UAE brings lighting, backdrops, props and wraps to your doorstep.",
  alternates: { canonical: "https://mgphotographyglobal.com/newborn-photography-sharjah/" },
};
const s = {
  title:"Newborn Photography",location:"Sharjah, UAE",canonicalPath:"/newborn-photography-sharjah/",heroTitle:"Newborn Photography",heroSubtitle:"At Your Sharjah Home.",emoji:"👶",
  description:"The first weeks with your baby pass quickly. MG Photography UAE travels to Sharjah for baby-led newborn sessions in the comfort of your home.\n\nWe bring a mobile photography setup with lighting, backdrops, props and wraps. The session follows your baby's cues, with time for feeding, settling and cuddle breaks whenever needed.",
  whySection:{title:"Why Book a Home Newborn Session in Sharjah",points:["Doorstep newborn sessions available across Sharjah","Baby-led posing that follows your baby's cues","Lighting, backdrops, props and wraps brought to your home","Feeding, settling and cuddle breaks included","Hand-edited, high-resolution final portraits","WhatsApp booking and availability confirmation"]},
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
