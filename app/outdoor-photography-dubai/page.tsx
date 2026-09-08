import { serviceMetadata } from "../lib/serviceMetadata";
import ServicePageTemplate from "../components/ServicePageTemplate";
import type { Metadata } from "next";
const baseMetadata: Metadata = {
  title: "Outdoor Photography Dubai | MG Photography UAE",
  description: "Stunning outdoor photography across Dubai — families, couples, portraits. Desert, beach & Downtown. Premium quality.",
  alternates: { canonical: "https://mgphotographyglobal.com/outdoor-photography-dubai/" },
};
const s = {
  title:"Outdoor Photography",location:"Dubai, UAE",canonicalPath:"/outdoor-photography-dubai/",heroTitle:"Dubai Is Your Canvas.",heroSubtitle:"Every Frame, A Story.",emoji:"🌅",
  description:"Dubai is one of the most visually extraordinary cities on earth — from the amber desert dunes of the interior to the gleaming skyline of Downtown, the turquoise waters of JBR, and the architectural wonder of DIFC. At MG Photography UAE, we treat the entire city as our studio.\n\nOur outdoor photography sessions are perfect for families, couples, individuals, and groups who want premium portraits in Dubai's most beautiful locations. Whether you're celebrating an anniversary, documenting your expat life in Dubai, or simply want beautiful portraits of your family, we create cinematic images that capture the beauty of the moment and the magic of this city.",
  whySection:{
    title:"Why Our Outdoor Sessions Are Dubai's Finest",
    points:["Expert knowledge of Dubai's best photography locations at every time of day","Golden-hour scheduling for the most cinematic, warm light","Family-friendly approach — experienced with children and pets","Multiple location sessions available in single bookings","Drone photography available for aerial portraits and group shots","Delivery within 10–14 days with premium color grading"],
  },
  packages:[
    {name:"Portrait",price:"AED 599",features:["1.5-hour session","15 edited images","1 location","Digital gallery"]},
    {name:"Family Story",price:"AED 1,199",features:["3-hour session","30 edited images","2 locations","Family of up to 6","Digital gallery + 2 prints"]},
    {name:"Dubai Epic",price:"AED 2,199",features:["Full-day session","60+ edited images","3+ premium locations","Drone photography","Premium album","Priority delivery"]},
  ],
  faq:[
    {q:"What are the best outdoor locations in Dubai?",a:"Our favourites include the Al Qudra Desert, JBR Beach, Downtown Dubai, Bluewaters Island, DIFC, Al Seef, and the palm-lined avenues of Emirates Hills. We also know hidden gems most photographers don't use."},
    {q:"What time of day is best?",a:"Golden hour — 1 hour before sunset — gives the most magical, warm, cinematic light. Blue hour just after sunset is equally stunning for lifestyle shots. We schedule all outdoor sessions around optimal light."},
    {q:"Can you photograph in restricted areas or malls?",a:"Some locations in Dubai require permits. We handle all permit applications for our sessions and know exactly which locations require advance planning."},
  ],
  ctaText:"Book Your Outdoor Session in Dubai's Most Beautiful Locations.",
  keywords:["outdoor photography Dubai","family photography Dubai"],
  relatedServices:[{title:"Pre-Wedding Photography Dubai",href:"/pre-wedding-photography-dubai/"},{title:"Wedding Photography Dubai",href:"/wedding-photography-dubai/"},{title:"Birthday Photography Dubai",href:"/birthday-photography-dubai/"}],
};
export default function OutdoorPhotographyDubai(){return <ServicePageTemplate service={s}/>;}

export const metadata: Metadata = serviceMetadata(baseMetadata, s);
