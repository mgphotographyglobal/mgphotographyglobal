import { serviceMetadata } from "../lib/serviceMetadata";
import ServicePageTemplate from "../components/ServicePageTemplate";
import type { Metadata } from "next";
const baseMetadata: Metadata = {
  title: "Architecture Photography Dubai | MG Photography UAE",
  description: "Premium architecture photography in Dubai — interior, exterior, commercial & residential. Book with MG Photography UAE today.",
  alternates: { canonical: "https://mgphotographyglobal.com/architecture-photography-dubai/" },
};
const s = {
  title:"Architecture Photography",location:"Dubai, UAE",canonicalPath:"/architecture-photography-dubai/",heroTitle:"Form, Light,",heroSubtitle:"And Vision.",emoji:"🏗️",
  description:"Architecture is the art of the built environment — and photographing it is the art of revealing what the architect intended. Light, shadow, geometry, texture, and the relationship between structure and sky: these are the elements that make architectural photography extraordinary.\n\nMG Photography UAE provides professional architecture photography for architects, developers, interior designers, and construction firms across Dubai and the wider UAE. Our approach balances technical precision with creative artistry, using professional-grade lighting and composition techniques to capture buildings and interiors in their finest possible light — quite literally.",
  whySection:{
    title:"Why UAE Architects & Developers Trust MG Photography",
    points:["Full technical knowledge of architectural photography equipment and technique","HDR and panoramic stitching techniques for interior coverage","Blue-hour and twilight exterior photography available","Available for both residential and commercial architectural projects","Quick turnaround for time-sensitive project submissions","Drone photography for aerial site documentation and overview"],
  },
  packages:[
    {name:"Interior",price:"AED 1,499",features:["Half-day interior session","20 edited images","HDR processing","Digital delivery"]},
    {name:"Exterior + Interior",price:"AED 2,799",features:["Full-day session","40 edited images","Blue-hour exterior shots","Drone photography","Digital delivery"]},
    {name:"Full Portfolio",price:"AED 4,999",features:["Multi-day comprehensive coverage","80+ edited images","Aerial drone documentation","Print & digital ready files","Priority 7-day delivery"]},
  ],
  faq:[
    {q:"What types of architecture do you photograph?",a:"We photograph residential villas, apartments, commercial buildings, hospitality spaces, retail interiors, offices, and construction milestones. If it's built, we can photograph it beautifully."},
    {q:"Do you provide drone photography for architecture?",a:"Yes — aerial drone photography is included in our higher packages and available as an add-on. Drone permits for Dubai are handled by our team."},
  ],
  ctaText:"Elevate Your Architectural Work With World-Class Photography.",
  keywords:["architecture photography Dubai","architectural photographer Dubai"],
  relatedServices:[{title:"Real Estate Photography Dubai",href:"/real-estate-photography-dubai/"},{title:"Outdoor Photography Dubai",href:"/outdoor-photography-dubai/"}],
  heroImage:{src:"/images/architecture/luxury-villa-exterior-architecture-photography-dubai-03.jpg",alt:"Luxury villa exterior at golden hour with tower balcony — architecture photography Dubai",objectPosition:"center 40%"},
};
export default function ArchitecturePhotographyDubai(){return <ServicePageTemplate service={s}/>;}

export const metadata: Metadata = serviceMetadata(baseMetadata, s);
