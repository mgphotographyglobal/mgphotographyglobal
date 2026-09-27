import { serviceMetadata } from "../lib/serviceMetadata";
import ServicePageTemplate from "../components/ServicePageTemplate";
import type { Metadata } from "next";
const baseMetadata: Metadata = {
  title: "Newborn Photography Abu Dhabi | MG Photography",
  description: "Baby-led newborn photography at home in Abu Dhabi. MG Photography UAE brings lighting, backdrops, props and wraps to your doorstep.",
  alternates: { canonical: "https://mgphotographyglobal.com/newborn-photography-abu-dhabi/" },
};
const s = {
  title:"Newborn Photography",location:"Abu Dhabi, UAE",canonicalPath:"/newborn-photography-abu-dhabi/",heroTitle:"Newborn Photography",heroSubtitle:"At Your Abu Dhabi Home.",emoji:"👶",
  description:"The first weeks with your baby pass quickly. MG Photography UAE travels to Abu Dhabi for baby-led newborn sessions in the comfort of your home.\n\nWe bring a mobile photography setup with lighting, backdrops, props and wraps. The session follows your baby's cues, with time for feeding, settling and cuddle breaks whenever needed.",
  whySection:{title:"Why Book a Home Newborn Session in Abu Dhabi",points:["Doorstep newborn sessions available across Abu Dhabi","Baby-led posing that follows your baby's cues","Lighting, backdrops, props and wraps brought to your home","Feeding, settling and cuddle breaks included","Hand-edited, high-resolution final portraits","WhatsApp booking and availability confirmation"]},
  packages:[
    {name:"Essence",price:"AED 800 + travel",features:["10 edited portraits","2 newborn setups","Props and newborn wardrobe","Parent portrait","Baby-led posing and fine-art retouching"]},
    {name:"Signature",price:"AED 1,250 + travel",features:["15 edited portraits","3 newborn setups","Props and newborn wardrobe","Parent portrait","Baby-led posing and fine-art retouching"]},
    {name:"Legacy",price:"AED 2,000 + travel",features:["25 edited portraits","4 newborn setups","Immediate family portraits","Macro detail portraits","Props, newborn wardrobe and maternity gowns","Baby-led posing and fine-art retouching"]},
  ],
  faq:[
    {q:"Do you travel to Abu Dhabi?",a:"Yes — we travel to Abu Dhabi for newborn sessions. Travel is quoted separately based on your exact location and confirmed before booking."},
    {q:"Which newborn collections are available in Abu Dhabi?",a:"The same three collections are available: Essence includes 10 edited portraits and 2 setups, Signature includes 15 portraits and 3 setups, and Legacy includes 25 portraits and 4 setups. Travel is quoted separately."},
    {q:"When should we book?",a:"We recommend booking during your second trimester. Sessions are best within the first 5–14 days after birth when babies are at their sleepiest and most flexible."},
  ],
  ctaText:"Plan Your Abu Dhabi Newborn Session at Home.",
  keywords:["newborn photography Abu Dhabi","newborn photographer Abu Dhabi"],
  relatedServices:[{title:"Newborn Photography Dubai",href:"/dubai-newborn-photography/"},{title:"Maternity Photography Abu Dhabi",href:"/maternity-photography-abu-dhabi/"},{title:"Wedding Photography Abu Dhabi",href:"/wedding-photography-abu-dhabi/"}],
};
export default function NewbornPhotographyAbuDhabi(){return <ServicePageTemplate service={s}/>;}

export const metadata: Metadata = serviceMetadata(baseMetadata, s);
