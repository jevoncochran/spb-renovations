import PageHero from "@/components/layout/PageHero";
import AboutIntro from "@/components/sections/AboutIntro";
import WhatSetsUsApart from "@/components/sections/WhatSetsUsApart";
import MeetTheOwners from "@/components/sections/MeetTheOwners";

export const metadata = {
  title: "About | SPB Renovations",
  description:
    "Learn about SPB Renovations — our story, our values, and our commitment to delivering exceptional residential and commercial renovations across the Tampa Bay region.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About"
        headline="Built on Craftsmanship. Driven by Trust."
        subheadline="Serving Tampa Bay homeowners and businesses with high-quality renovations, honest communication, and a process designed to make your experience seamless from start to finish."
        ctaText="Schedule a Free Consultation"
        ctaHref="/contact"
        image="/images/about/about-hero.jpg"
        imagePosition="0 70%"
      />
      <AboutIntro />
      <WhatSetsUsApart />
      <MeetTheOwners />
    </>
  );
}
