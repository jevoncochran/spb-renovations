import HeroSection from "@/components/sections/HeroSection";
import ServicesBar from "@/components/sections/ServicesBar";
import RecentProjects from "@/components/sections/RecentProjects";
import TestimonialsAndCTA from "@/components/sections/TestimonialsAndCTA";
import TrustBar from "@/components/sections/TrustBar";

export default function HomePage() {
  return (
    <div className="flex flex-col flex-1">
      <HeroSection />
      <ServicesBar />
      <RecentProjects />
      <TestimonialsAndCTA />
      <TrustBar />
    </div>
  );
}
