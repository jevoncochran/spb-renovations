import PageHero from "@/components/layout/PageHero";
import ServiceDetail from "@/components/sections/ServiceDetail";

export const metadata = {
  title: "Kitchen Remodeling | SPB Renovations",
  description:
    "Transform your kitchen with SPB Renovations. Custom cabinetry, countertops, layouts, and finishes designed around how you live and cook.",
};

export default function KitchenRemodelingPage() {
  return (
    <>
      <PageHero
        label="Services"
        headline="Kitchen Remodeling That Inspires"
        subheadline="From custom cabinetry to high-end finishes, we design and build kitchens that are as functional as they are beautiful."
        ctaText="Get a Free Estimate"
        ctaHref="/contact"
        image="/images/services/kitchen-hero.jpg"
      />
      <ServiceDetail
        intro="Your kitchen is the heart of your home — and it should look and feel the part."
        description="At SPB Renovations, we approach every kitchen remodel with a focus on both form and function. Whether you're looking for a full gut renovation or a targeted refresh, our team works closely with you to design a space that fits your lifestyle, your taste, and your budget. From the initial layout planning to the final hardware installation, every detail is handled with care."
        highlights={[
          "Custom cabinetry design and installation",
          "Countertop selection and installation — quartz, granite, marble, and more",
          "Kitchen island design and build",
          "Tile backsplash and flooring installation",
          "Lighting layout and fixture installation",
          "Appliance integration and plumbing coordination",
          "Full project management from design to completion",
        ]}
        image="/images/services/kitchen-detail.jpg"
        imageAlt="Kitchen remodeling by SPB Renovations"
      />
    </>
  );
}
