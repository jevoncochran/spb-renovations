import PageHero from "@/components/layout/PageHero";
import ServiceDetail from "@/components/sections/ServiceDetail";

export const metadata = {
  title: "Flooring Installation | SPB Renovations",
  description:
    "Expert flooring installation from SPB Renovations. Hardwood, luxury vinyl plank, tile, and more — installed with precision and care.",
};

export default function FlooringInstallationPage() {
  return (
    <>
      <PageHero
        label="Services"
        headline="Flooring That Sets the Foundation"
        subheadline="From hardwood to luxury vinyl plank and tile, we install flooring that elevates every room — laid with precision and built to last."
        ctaText="Get a Free Estimate"
        ctaHref="/contact"
        image="/images/services/flooring-hero.jpg"
      />
      <ServiceDetail
        intro="The right flooring ties a room together — and the right installer makes all the difference."
        description="At SPB Renovations, we install flooring that's built to perform and designed to impress. We work with a wide range of materials to suit any style and budget, and our installation process is thorough — from proper subfloor preparation to clean, precise finishing. Whether you're updating a single room or re-flooring your entire home, we treat every square foot with the same level of care."
        highlights={[
          "Hardwood flooring installation and refinishing",
          "Luxury vinyl plank (LVP) installation",
          "Porcelain and ceramic tile installation",
          "Natural stones: marble, granite, and travertine",
          "Carpet and rugs",
          "Subfloor preparation and leveling",
          "Transitions, trim, and baseboard finishing",
          "Whole-home and room-by-room projects",
          "Material selection guidance and sourcing support",
        ]}
        image="/images/services/flooring-detail.jpg"
        imageAlt="Flooring installation by SPB Renovations"
      />
    </>
  );
}
