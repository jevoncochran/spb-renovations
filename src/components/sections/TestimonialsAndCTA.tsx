import TestimonialsPreview from "./TestimonialsPreview";
import CTACard from "./CTACard";

export default function TestimonialsAndCTA() {
  return (
    <section className="bg-white py-12">
      <div className="w-full px-12 md:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <TestimonialsPreview />
          <CTACard />
        </div>
      </div>
    </section>
  );
}
