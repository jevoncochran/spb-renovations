import PageHero from "@/components/layout/PageHero";
import ServiceDetail from "@/components/sections/ServiceDetail";

export const metadata = {
  title: "Demolition | SPB Renovations",
  description:
    "Safe and efficient demolition services by SPB Renovations. We remove existing materials cleanly and responsibly to prepare your space for renovation.",
};

export default function DemolitionPage() {
  return (
    <>
      <PageHero
        label="Services"
        headline="Demolition Done Right"
        subheadline="Safe and efficient removal of existing materials to prepare your space for renovation."
        ctaText="Get a Free Estimate"
        ctaHref="/contact"
        image="/images/services/demolition-hero.jpg"
      />
      <ServiceDetail
        intro="Every great renovation starts with a clean slate."
        description="Safe and efficient removal of existing materials to prepare your space for renovation."
        highlights={[
          "Non-structural wall demolition",
          "Drywall removal",
          "Flooring removal",
          "Cabinet removal",
          "Interior demolition and site preparation",
        ]}
        image="/images/services/demolition-detail.jpg"
        imageAlt="Demolition services by SPB Renovations"
      />
    </>
  );
}
