import Image from "next/image";
import Link from "next/link";

const projectImages = [
  { src: "/images/projects/kitchen-1.jpg", alt: "Kitchen renovation 1" },
  { src: "/images/projects/bathroom-1.jpg", alt: "Bathroom remodel 1" },
  {
    src: "/images/projects/living_room-1.jpg",
    alt: "Living room transformation",
  },
  { src: "/images/projects/outdoor_patio.jpg", alt: "Outdoor patio" },
  { src: "/images/projects/master_bedroom.jpg", alt: "Master bedroom" },
  { src: "/images/projects/bathroom-2.jpg", alt: "Bathroom remodel 2" },
  { src: "/images/projects/kitchen-2.jpg", alt: "Kitchen remodel 2" },
  { src: "/images/projects/bathroom-3.jpg", alt: "Bathroom remodel 3" },
];

export default function RecentProjects() {
  return (
    <section className="bg-white py-12">
      <div className="w-full px-12 md:px-20">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="text-xl font-bold text-zinc-900">Recent Projects</h2>
          <div className="w-10 h-0.5 bg-gold mt-2" />
        </div>
        <Link
          href="/gallery"
          className="flex items-center gap-1 text-sm font-semibold text-zinc-800 hover:text-gold transition-colors"
        >
          View Gallery
          <ArrowRightIcon />
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {projectImages.map((img) => (
          <div
            key={img.alt}
            className="relative aspect-[4/3] rounded overflow-hidden bg-zinc-200"
          >
            {img.src ? (
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-zinc-400 text-xs text-center px-2">
                  {img.alt}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12,5 19,12 12,19" />
    </svg>
  );
}
