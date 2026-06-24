import Link from "next/link";

interface PageHeroProps {
  label: string;
  headline: string;
  subheadline?: string;
  ctaText?: string;
  ctaHref?: string;
  image: string;
  imagePosition?: string;
}

export default function PageHero({
  label,
  headline,
  subheadline,
  ctaText,
  ctaHref = "/contact",
  image,
  imagePosition = "center",
}: PageHeroProps) {
  return (
    <section
      className="relative flex items-center bg-zinc-900"
      style={{ height: "800px" }}
    >
      <div
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('${image}')`,
          backgroundPosition: imagePosition,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/20" />

      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-8 h-px bg-gold" />
          <span className="text-gold text-sm font-semibold tracking-widest uppercase">
            {label}
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight max-w-2xl mb-5">
          {headline}
        </h1>
        {subheadline && (
          <p className="text-zinc-300 text-lg leading-relaxed max-w-xl mb-8">
            {subheadline}
          </p>
        )}
        {ctaText && (
          <Link
            href={ctaHref}
            className="inline-flex items-center bg-gold hover:bg-gold-dark text-white font-semibold px-7 py-3 rounded transition-colors"
          >
            {ctaText}
          </Link>
        )}
      </div>
    </section>
  );
}
