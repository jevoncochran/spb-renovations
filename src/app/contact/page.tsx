import ContactForm from "@/components/sections/ContactForm";
import ServiceAreas from "@/components/sections/ServiceAreas";

export const metadata = {
  title: "Contact | SPB Renovations",
  description:
    "Get in touch with SPB Renovations to schedule your free consultation. We serve homeowners across the Tampa Bay area.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactForm />
      <ServiceAreas />
    </>
  );
}

function ContactHero() {
  return (
    <section
      className="relative flex items-center bg-zinc-900"
      style={{ height: "75vh" }}
    >
      <div
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('/images/contact/kitchen_remodel.jpg')",
          backgroundPosition: "center 60%",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/20" />
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-8 h-px bg-gold" />
          <span className="text-gold text-sm font-semibold tracking-widest uppercase">
            Contact Us
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight max-w-2xl mb-5">
          Let&apos;s Build Something Beautiful Together
        </h1>
        <p className="text-zinc-300 text-lg leading-relaxed max-w-xl">
          Schedule your free consultation and take the first step toward the home you&apos;ve always envisioned.
        </p>
      </div>
    </section>
  );
}
