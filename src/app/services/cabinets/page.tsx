import PageHero from "@/components/layout/PageHero";
import ServiceDetail from "@/components/sections/ServiceDetail";

export const metadata = {
  title: "Custom Cabinetry & Professional Carpentry | SPB Renovations",
  description:
    "Custom cabinetry and professional carpentry by SPB Renovations. Quality craftsmanship, beautiful finishes, and designs built around your space.",
};

export default function CabinetsPage() {
  return (
    <>
      <PageHero
        label="Services"
        headline="Custom Cabinetry & Professional Carpentry"
        subheadline="From custom kitchen cabinetry to built-ins and finish carpentry, we craft and install woodwork that elevates every space in your home."
        ctaText="Get a Free Estimate"
        ctaHref="/contact"
        image="/images/services/cabinets-hero.jpg"
      />
      <ServiceDetail
        intro="Great cabinets do more than store things — they define the character of your kitchen and bathroom."
        description="At SPB Renovations, we work with homeowners to design and install cabinetry that fits their space, their style, and their budget. Whether you're looking for a full custom build or quality semi-custom options, our team handles the layout, installation, and finishing details from start to finish. Every cabinet is installed level, secure, and finished to a standard we're proud to stand behind."
        highlights={[
          "Cabinetry",
          "Custom Carpentry",
          "Built-Ins & Trim Work",
          "Kitchen & Bathroom Cabinets",
          "Custom Woodworking",
          "Accent Walls & Millwork",
        ]}
        image="/images/services/cabinets-detail.jpg"
        imageAlt="Cabinet installation by SPB Renovations"
      />
    </>
  );
}
