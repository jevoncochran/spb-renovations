import Image from "next/image";
import Link from "next/link";

interface ServiceDetailProps {
  intro: string;
  description: string;
  highlights: string[];
  image: string;
  imageAlt: string;
}

export default function ServiceDetail({
  intro,
  description,
  highlights,
  image,
  imageAlt,
}: ServiceDetailProps) {
  return (
    <section className="bg-white py-20">
      <div className="w-full px-12 md:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div>
            <p className="text-zinc-900 text-xl leading-relaxed font-medium mb-6">
              {intro}
            </p>
            <p className="text-zinc-500 text-lg leading-relaxed mb-10">
              {description}
            </p>

            <h3 className="text-zinc-900 font-semibold text-sm tracking-widest uppercase mb-5">
              What&apos;s Included
            </h3>
            <ul className="space-y-3 mb-10">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="text-zinc-600 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              className="inline-flex items-center bg-gold hover:bg-gold-dark text-white font-semibold px-7 py-3 rounded transition-colors"
            >
              Get a Free Estimate
            </Link>
          </div>

          <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-zinc-200">
            <Image
              src={image}
              alt={imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="shrink-0 mt-0.5">
      <circle cx="12" cy="12" r="10" fill="#C9A227" />
      <polyline
        points="7,12 10.5,15.5 17,9"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
