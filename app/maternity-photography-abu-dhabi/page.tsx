import ServicePageTemplate from "../components/ServicePageTemplate";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Maternity Photography Abu Dhabi | MG Photography",
  description: "Radiant maternity photography in Abu Dhabi. Cinematic pregnancy portraits for expectant mothers. Book your session.",
  alternates: { canonical: "https://mgphotographyglobal.com/maternity-photography-abu-dhabi/" },
};
const s = {
  title:"Maternity Photography",location:"Abu Dhabi, UAE",canonicalPath:"/maternity-photography-abu-dhabi/",heroTitle:"Abu Dhabi's Most",heroSubtitle:"Radiant Maternity Photography.",emoji:"🤱",
  description:"Pregnancy is the most powerful transformation a human being can experience — and it deserves to be celebrated with the same beauty and artistry you bring to every other chapter of your life. MG Photography UAE travels to Abu Dhabi to create luxury maternity portraits that are cinematic, emotional, and deeply personal.\n\nWe bring our full studio setup and premium wardrobe selection to Abu Dhabi locations, ensuring you experience the same luxury as our Dubai clients without compromise.",
  whySection:{title:"Why Abu Dhabi Mothers Trust MG Photography",points:["Luxury maternity sessions available across Abu Dhabi","Maternity-specialist posing for comfort and beauty at every angle","Premium gown wardrobe available for all body types","Studio and outdoor golden-hour sessions available","Partner and family shots always welcomed","Premium editing delivered within 10–14 days"]},
  packages:[
    {name:"Glow",price:"AED 999",features:["2-hour session","20 edited images","1 gown included","Digital gallery","Travel to Abu Dhabi"]},
    {name:"Radiance",price:"AED 1,699",features:["3-hour session","35 edited images","2 gowns + partner shots","Digital gallery + 1 print","Travel to Abu Dhabi"]},
    {name:"Golden Story",price:"AED 2,699",features:["Studio + outdoor session","50+ edited images","3 gowns + full family shots","Premium album","Priority delivery","Travel to Abu Dhabi"]},
  ],
  faq:[
    {q:"Do you offer maternity sessions in Abu Dhabi?",a:"Yes — we travel regularly to Abu Dhabi for maternity sessions. The same premium quality as our Dubai studio, brought to you."},
    {q:"What is the ideal time for a maternity shoot?",a:"Between 28–34 weeks for the best results. Your bump is beautiful and prominent, and you'll still be comfortable throughout the session."},
  ],
  ctaText:"Celebrate Your Pregnancy With Abu Dhabi's Finest Photography.",
  keywords:["maternity photography Abu Dhabi","pregnancy photoshoot Abu Dhabi"],
  relatedServices:[{title:"Maternity Photography Dubai",href:"/maternity-photography-dubai"},{title:"Newborn Photography Abu Dhabi",href:"/newborn-photography-abu-dhabi"},{title:"Wedding Photography Abu Dhabi",href:"/wedding-photography-abu-dhabi"}],
};
export default function MaternityPhotographyAbuDhabi(){return <ServicePageTemplate service={s}/>;}
