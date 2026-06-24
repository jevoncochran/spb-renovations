import PageHero from "@/components/layout/PageHero";
import ServiceDetail from "@/components/sections/ServiceDetail";

export const metadata = {
  title: "Kitchen & Bathroom Cabinets | SPB Renovations",
  description:
    "Custom kitchen and bathroom cabinet installation by SPB Renovations. Quality craftsmanship, beautiful finishes, and designs built around your space.",
};

export default function CabinetsPage() {
  return (
    <>
      <PageHero
        label="Services"
        headline="Cabinets Built for Your Space"
        subheadline="From custom kitchen cabinetry to bathroom vanity cabinets, we design and install storage solutions that are as beautiful as they are functional."
        ctaText="Get a Free Estimate"
        ctaHref="/contact"
        image="/images/services/cabinets-hero.jpg"
      />
      <ServiceDetail
        intro="Great cabinets do more than store things — they define the character of your kitchen and bathroom."
        description="At SPB Renovations, we work with homeowners to design and install cabinetry that fits their space, their style, and their budget. Whether you're looking for a full custom build or quality semi-custom options, our team handles the layout, installation, and finishing details from start to finish. Every cabinet is installed level, secure, and finished to a standard we're proud to stand behind."
        highlights={[
          "Custom and semi-custom kitchen cabinet installation",
          "Bathroom vanity cabinet design and installation",
          "Cabinet refacing and refinishing",
          "Soft-close hinges and drawer hardware",
          "Pull-out shelves and interior organizers",
          "Crown molding and trim finishing",
          "Island and pantry cabinet builds",
          "Full kitchen and bathroom layout planning",
        ]}
        image="/images/services/cabinets-detail.jpg"
        imageAlt="Cabinet installation by SPB Renovations"
      />
    </>
  );
}
