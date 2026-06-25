import PageHero from "@/components/layout/PageHero";
import ServiceDetail from "@/components/sections/ServiceDetail";

export const metadata = {
  title: "Drywall | SPB Renovations",
  description:
    "Professional drywall installation and finishing by SPB Renovations for new construction and remodeling projects.",
};

export default function DrywallPage() {
  return (
    <>
      <PageHero
        label="Services"
        headline="Drywall Installation & Finishing"
        subheadline="Professional drywall installation and finishing for new construction and remodeling projects."
        ctaText="Get a Free Estimate"
        ctaHref="/contact"
        image="/images/services/drywall-hero.jpg"
      />
      <ServiceDetail
        intro="Smooth walls and ceilings are the foundation of a finished space."
        description="Professional drywall installation and finishing for new construction and remodeling projects."
        highlights={[
          "Drywall installation",
          "Drywall repair and replacement",
          "Texture matching and application",
          "Wall and ceiling finishing",
        ]}
        image="/images/services/drywall-detail.jpg"
        imageAlt="Drywall installation by SPB Renovations"
      />
    </>
  );
}
