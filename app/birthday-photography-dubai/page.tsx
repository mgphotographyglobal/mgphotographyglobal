import { serviceMetadata } from "../lib/serviceMetadata";
import ServicePageTemplate from "../components/ServicePageTemplate";
import type { Metadata } from "next";
const baseMetadata: Metadata = {
  title: "Birthday Photography Dubai | MG Photography UAE",
  description: "Vibrant birthday event photography in Dubai, from kids' parties to luxury adult celebrations. Book with MG Photography UAE.",
  alternates: { canonical: "https://mgphotographyglobal.com/birthday-photography-dubai/" },
};
const s = {
  title:"Birthday Photography",location:"Dubai, UAE",canonicalPath:"/birthday-photography-dubai/",heroTitle:"Celebrate In Style.",heroSubtitle:"Every Moment Matters.",emoji:"🎂",
  description:"Birthdays are more than just a date on the calendar — they are the punctuation marks of a life well-lived. Whether it's a first birthday cake smash, a princess-themed toddler celebration, or an elegant adult milestone, every birthday deserves photography that captures both the energy and the emotion of the day.\n\nMG Photography UAE provides premium event and portrait photography for birthday celebrations across Dubai. We specialize in creating both candid documentary coverage of the celebration as well as posed portrait setups, giving you a complete visual story of the entire day.",
  whySection:{
    title:"Why Dubai Families Book MG Photography for Birthdays",
    points:["Experience with all ages: newborns to milestone adult birthdays","Combination of event coverage and portrait setups","Children specialists — patient, fun, and great at getting natural smiles","Fast-paced event photography with artistic awareness","Premium editing delivered in 7–10 business days","Coverage available at any Dubai venue, home, or outdoor location"],
  },
  packages:[
    {name:"Portrait Session",price:"AED 699",features:["Birthday portrait shoot","20 edited images","1 location setup","Digital gallery"]},
    {name:"Party Coverage",price:"AED 1,499",features:["3-hour event coverage","50+ candid & portrait images","Includes cake cut & moments","Digital gallery"]},
    {name:"Full Celebration",price:"AED 2,499",features:["Full-day event coverage","80+ edited images","Portraits + documentary","Premium printed album","Priority delivery"]},
  ],
  faq:[
    {q:"Do you cover events at any Dubai venue?",a:"Yes. We are familiar with most major event venues across Dubai and can photograph at any location — hotel ballrooms, garden parties, beach venues, and home celebrations."},
    {q:"Can you photograph both kids and adult birthdays?",a:"Absolutely. We specialize in both. For children's parties, we have the patience and skill to capture authentic moments. For adult milestones, we bring an editorial elegance to the coverage."},
  ],
  ctaText:"Make Your Celebration Unforgettable — Beautifully Documented.",
  keywords:["birthday photography Dubai","event photography Dubai"],
  relatedServices:[{title:"Outdoor Photography Dubai",href:"/outdoor-photography-dubai/"},{title:"Baby Photography Dubai",href:"/baby-photography-dubai/"}],
};
export default function BirthdayPhotographyDubai(){return <ServicePageTemplate service={s}/>;}

export const metadata: Metadata = serviceMetadata(baseMetadata, s);
