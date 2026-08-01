import ServicePageTemplate from "../components/ServicePageTemplate";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Real Estate Photography Dubai | MG Photography UAE",
  description: "Professional HDR real estate photography in Dubai for agencies, developers & landlords. Help listings sell faster.",
  alternates: { canonical: "https://mgphotographyglobal.com/real-estate-photography-dubai/" },
};
const s = {
  title:"Real Estate Photography",location:"Dubai, UAE",canonicalPath:"/real-estate-photography-dubai/",heroTitle:"Spaces That",heroSubtitle:"Sell Themselves.",emoji:"🏙️",
  description:"In Dubai's competitive real estate market, the difference between a property that sits on the market and one that sells in days often comes down to one thing: the quality of its photography. Buyers make snap judgments based on listing images. Your property deserves photography that does it justice.\n\nMG Photography UAE provides professional HDR real estate photography for Dubai's agents, developers, and landlords. We photograph everything from studio apartments in JVC to palatial villas on Palm Jumeirah, with the same consistent quality, technical precision, and quick turnaround that Dubai's busiest real estate professionals rely on.",
  whySection:{
    title:"Why Dubai Real Estate Professionals Choose MG Photography",
    points:["HDR interior photography that captures true space and light","Blue-hour exterior twilight photography — maximum visual impact","Drone aerials for plot size, community, and location context","Full coverage from kitchens to master bedrooms to amenities","48-hour quick turnaround available for urgent listings","Trusted by leading Dubai real estate agencies","BNI Member — part of Dubai's trusted business network"],
  },
  packages:[
    {name:"Studio / 1BR",price:"AED 499",features:["Up to 600 sqft","15 edited images","Same-day session","Digital delivery in 48 hrs"]},
    {name:"2BR – 4BR Villa",price:"AED 999",features:["Up to 3,000 sqft","25 edited images","Twilight exterior","Digital delivery in 48 hrs"]},
    {name:"Luxury Villa / Commercial",price:"AED 1,999",features:["Unlimited area","40+ edited images","Drone aerial photography","Blue-hour exterior","Priority 24-hr delivery","Virtual tour support"]},
  ],
  faq:[
    {q:"How quickly can you deliver real estate photos?",a:"Standard delivery is 48 hours after the shoot. For urgent listings, we offer 24-hour rush delivery for an additional fee. We understand that time is money in Dubai real estate."},
    {q:"Do you shoot furnished and unfurnished properties?",a:"We photograph both. Unfurnished properties benefit from virtual staging, which we can arrange. Furnished properties we photograph as-is, ensuring every room is presented at its absolute best."},
    {q:"Can you do virtual tours or floor plans?",a:"Yes — virtual tour add-ons are available with our packages. We partner with Matterport-compatible photographers for interactive 3D tours that dramatically increase listing engagement."},
  ],
  ctaText:"List Better. Sell Faster. Book Your Property Photography.",
  keywords:["real estate photography Dubai","property photography Dubai"],
  relatedServices:[{title:"Architecture Photography Dubai",href:"/architecture-photography-dubai"},{title:"Outdoor Photography Dubai",href:"/outdoor-photography-dubai"}],
  heroImage:{src:"/images/architecture/luxury-villa-pool-real-estate-photography-dubai-02.jpg",alt:"Luxury villa infinity pool at sunset — real estate photography Dubai",objectPosition:"center 45%"},
};
export default function RealEstatePhotographyDubai(){return <ServicePageTemplate service={s}/>;}
