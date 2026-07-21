import VideoCard from "@/components/gallery/VideoCard";
import { videos } from "@/lib/data/gallery";

export const metadata = {
  title: "Gallery | SPB Renovations",
  description:
    "See our recent renovation projects. SPB Renovations serves residential and commercial clients across the Tampa Bay area.",
};

export default function GalleryPage() {
  return (
    <>
      <GalleryHero />
      <GalleryGrid />
    </>
  );
}

function GalleryHero() {
  return (
    <section
      className="relative flex items-center bg-zinc-900"
      style={{ height: "75vh" }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/gallery/gallery-hero.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/20" />
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-8 h-px bg-gold" />
          <span className="text-gold text-sm font-semibold tracking-widest uppercase">
            Our Work
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight max-w-2xl mb-5">
          Projects We&apos;re Proud Of
        </h1>
        <p className="text-zinc-300 text-lg leading-relaxed max-w-xl">
          A look at recent renovations — from kitchens and bathrooms to full
          home transformations across the Tampa Bay area.
        </p>
      </div>
    </section>
  );
}

function GalleryGrid() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="w-full px-6 md:px-12 lg:px-20">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-6 h-px bg-gold" />
            <span className="text-gold text-sm font-semibold tracking-widest uppercase">
              Videos
            </span>
          </div>
          <h2 className="text-3xl font-bold text-zinc-900">
            Featured Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12 max-w-2xl">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </div>
    </section>
  );
}
