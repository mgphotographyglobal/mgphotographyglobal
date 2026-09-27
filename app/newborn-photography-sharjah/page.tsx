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
    {name:"Essence",price:"AED 800 + travel",features:["10 edited portraits","2 newborn setups","Props and newborn wardrobe","Parent portrait","Baby-led posing and fine-art retouching"]},
    {name:"Signature",price:"AED 1,250 + travel",features:["15 edited portraits","3 newborn setups","Props and newborn wardrobe","Parent portrait","Baby-led posing and fine-art retouching"]},
    {name:"Legacy",price:"AED 2,000 + travel",features:["25 edited portraits","4 newborn setups","Immediate family portraits","Macro detail portraits","Props, newborn wardrobe and maternity gowns","Baby-led posing and fine-art retouching"]},
  ],
  faq:[
    {q:"Do you travel to Sharjah for newborn sessions?",a:"Yes, we travel to Sharjah for newborn sessions. Travel is quoted separately based on your exact location and confirmed before booking."},
    {q:"Which newborn collections are available in Sharjah?",a:"The same three collections are available: Essence includes 10 edited portraits and 2 setups, Signature includes 15 portraits and 3 setups, and Legacy includes 25 portraits and 4 setups. Travel is quoted separately."},
    {q:"Do you bring the newborn setup to our home?",a:"Yes. We bring the mobile photography setup, lighting, backdrops, props and wraps required for the session to your Sharjah home."},
  ],
  ctaText:"Premium Newborn Photography, Now Available in Sharjah.",
  keywords:["newborn photography Sharjah","newborn photographer Sharjah"],
  relatedServices:[{title:"Newborn Photography Dubai",href:"/dubai-newborn-photography/"},{title:"Newborn Photography Abu Dhabi",href:"/newborn-photography-abu-dhabi/"},{title:"Maternity Photography Dubai",href:"/maternity-photography-dubai/"}],
};
export default function NewbornPhotographySharjah(){return <ServicePageTemplate service={s}/>;}

export const metadata: Metadata = serviceMetadata(baseMetadata, s);
