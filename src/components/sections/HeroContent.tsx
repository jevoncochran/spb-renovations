import Link from "next/link";

export default function HeroContent() {
  return (
    <div className="pl-6 md:pl-20 pr-6 max-w-5xl">
      <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-5">
        Renovate. Refine. Relax.
      </p>
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
        Expert Renovations for Residential & Commercial Spaces
      </h1>
      <p className="text-zinc-300 text-base md:text-xl leading-relaxed mb-8">
        High-quality renovations for homeowners and businesses — designed around
        your vision, built to last.
      </p>
      <div className="flex flex-wrap gap-4">
        <Link
          href="/contact"
          className="bg-gold hover:bg-gold-dark text-white font-semibold px-8 py-4 rounded transition-colors text-lg"
        >
          Get a Free Estimate
        </Link>
        <Link
          href="/gallery"
          className="flex items-center gap-2 border border-white text-white font-semibold px-8 py-4 rounded hover:bg-white/10 transition-colors text-lg"
        >
          <PlayIcon />
          View Our Work
        </Link>
      </div>
    </div>
  );
}

function PlayIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <polygon points="5,3 19,12 5,21" />
    </svg>
  );
}
