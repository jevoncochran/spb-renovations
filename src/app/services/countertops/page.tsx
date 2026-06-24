import PageHero from "@/components/layout/PageHero";
import ServiceDetail from "@/components/sections/ServiceDetail";

export const metadata = {
  title: "Countertops | SPB Renovations",
  description:
    "Premium countertop installation by SPB Renovations. Quartz, granite, marble, and more — expertly fabricated and installed to elevate your kitchen or bathroom.",
};

export default function CountertopsPage() {
  return (
    <>
      <PageHero
        label="Services"
        headline="Countertops That Make a Statement"
        subheadline="From sleek quartz to timeless granite and marble, we supply and install premium countertops that bring beauty and durability to every surface."
        ctaText="Get a Free Estimate"
        ctaHref="/contact"
        image="/images/services/countertops-hero.jpg"
      />
      <ServiceDetail
        intro="The right countertop transforms a kitchen or bathroom from functional to exceptional."
        description="At SPB Renovations, we help homeowners select and install countertops that match their style, suit their lifestyle, and stand up to everyday use. Whether you're drawn to the clean look of quartz, the natural beauty of granite, or the luxury of marble, our team handles everything from material selection to precision fabrication and professional installation. Every edge, seam, and cutout is finished with care."
        highlights={[
          "Quartz countertop supply and installation",
          "Granite countertop supply and installation",
          "Marble and natural stone options",
          "Porcelain slab countertops",
          "Precision templating and fabrication",
          "Undermount and drop-in sink cutouts",
          "Backsplash coordination and installation",
          "Kitchen and bathroom countertop projects",
        ]}
        image="/images/services/countertops-detail.jpg"
        imageAlt="Countertop installation by SPB Renovations"
      />
    </>
  );
}
