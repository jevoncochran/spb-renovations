import PageHero from "@/components/layout/PageHero";
import ServiceDetail from "@/components/sections/ServiceDetail";

export const metadata = {
  title: "Glass Doors, Shower Enclosures & Mirrors | SPB Renovations",
  description:
    "Custom glass doors, frameless shower enclosures, and mirror installation by SPB Renovations. Elegant glass solutions for every space in your home.",
};

export default function GlassPage() {
  return (
    <>
      <PageHero
        label="Services"
        headline="Glass Doors, Shower Enclosures & Mirrors"
        subheadline="Elegant, custom glass solutions that add sophistication and light to every space in your home."
        ctaText="Get a Free Estimate"
        ctaHref="/contact"
        image="/images/services/glass-hero.jpg"
      />
      <ServiceDetail
        intro="The right glass work opens up a space and adds a level of refinement that's hard to match."
        description="SPB Renovations supplies and installs custom glass doors, frameless shower enclosures, and mirrors with precision and care. Whether you're upgrading a bathroom with a frameless glass shower or adding a custom mirror to a living space, our team handles every installation cleanly and professionally."
        highlights={[
          "Custom glass doors",
          "Frameless shower enclosures",
          "Shower door installation",
          "Custom mirrors",
          "Mirror installation and replacement",
        ]}
        image="/images/services/glass-detail.jpg"
        imageAlt="Glass door and shower enclosure installation by SPB Renovations"
      />
    </>
  );
}
