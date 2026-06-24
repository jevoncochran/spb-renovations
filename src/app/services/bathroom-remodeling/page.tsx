import PageHero from "@/components/layout/PageHero";
import ServiceDetail from "@/components/sections/ServiceDetail";

export const metadata = {
  title: "Bathroom Remodeling | SPB Renovations",
  description:
    "Create a spa-like retreat with SPB Renovations. Custom tile work, vanities, walk-in showers, and quality fixtures tailored to your style.",
};

export default function BathroomRemodelingPage() {
  return (
    <>
      <PageHero
        label="Services"
        headline="Bathroom Remodeling Built for Comfort"
        subheadline="We transform ordinary bathrooms into spa-like retreats — with custom tile, premium fixtures, and craftsmanship that stands the test of time."
        ctaText="Get a Free Estimate"
        ctaHref="/contact"
        image="/images/services/bathroom-hero.jpg"
      />
      <ServiceDetail
        intro="A well-designed bathroom does more than function — it restores and recharges."
        description="SPB Renovations specializes in bathroom transformations of all sizes, from compact guest baths to expansive master suite renovations. We handle every aspect of the remodel — tile, plumbing, vanities, fixtures, and finishes — so you get a cohesive result that feels intentional from floor to ceiling. Our team brings the same attention to detail to every bathroom, regardless of scope."
        highlights={[
          "Walk-in shower design and tile installation",
          "Freestanding and built-in bathtub installation",
          "Custom vanity and cabinetry",
          "Floor and wall tile selection and installation",
          "Fixture and hardware upgrades",
          "Lighting and ventilation improvements",
          "Plumbing coordination and waterproofing",
        ]}
        image="/images/services/bathroom-detail.jpg"
        imageAlt="Bathroom remodeling by SPB Renovations"
      />
    </>
  );
}
