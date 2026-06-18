import HeroContent from "./HeroContent";

export default function HeroSection() {
  return (
    <section
      className="relative flex items-center bg-zinc-900"
      style={{ height: "100dvh" }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/kitchen.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/10" />
      <div className="relative z-10 w-full">
        <HeroContent />
      </div>
    </section>
  );
}
