import PageHero from "@/components/layout/PageHero";
import ServiceDetail from "@/components/sections/ServiceDetail";

export const metadata = {
  title: "Painting | SPB Renovations",
  description:
    "High-quality interior and exterior painting services by SPB Renovations that enhance and protect your property.",
};

export default function PaintingPage() {
  return (
    <>
      <PageHero
        label="Services"
        headline="Painting That Transforms"
        subheadline="High-quality interior and exterior painting services that enhance and protect your property."
        ctaText="Get a Free Estimate"
        ctaHref="/contact"
        image="/images/services/painting-hero.jpg"
      />
      <ServiceDetail
        intro="A fresh coat of paint is one of the most impactful upgrades you can make to any space."
        description="High-quality interior and exterior painting services that enhance and protect your property."
        highlights={[
          "Interior wall painting",
          "Exterior painting",
          "Baseboard painting",
          "Crown molding painting",
          "Cabinet painting and refinishing",
          "Touch-ups and complete repaints",
        ]}
        image="/images/services/painting-detail.jpg"
        imageAlt="Painting services by SPB Renovations"
      />
    </>
  );
}
