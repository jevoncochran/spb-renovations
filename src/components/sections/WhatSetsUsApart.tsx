import Image from "next/image";
import Link from "next/link";

const bullets = [
  "Licensed and insured professionals with years of proven renovation experience.",
  "Custom-built solutions designed around your home, your style, and your needs.",
  "Clear timelines and consistent communication from start to finish.",
  "Clean, organized job sites with respect for your home throughout the process.",
];

export default function WhatSetsUsApart() {
  return (
    <section className="bg-zinc-50 py-20">
      <div className="w-full px-12 md:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[4/3] rounded overflow-hidden bg-zinc-200">
            <Image
              src="/images/about/about-differentiator.jpg"
              alt="SPB Renovations craftsmanship"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-gold" />
              <span className="text-gold text-sm font-semibold tracking-widest uppercase">
                Our Difference
              </span>
            </div>
            <h2 className="text-4xl font-bold text-zinc-900 leading-tight mb-5">
              What Sets Us Apart
            </h2>
            <p className="text-zinc-500 text-lg leading-relaxed mb-8">
              We built SPB Renovations to deliver projects the right way. That
              means honest conversations, realistic timelines, and work that
              holds up over time. Every project is managed with attention to
              detail and a commitment to getting it done properly from start to
              finish.
            </p>

            <ul className="space-y-4 mb-10">
              {bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="text-zinc-600 leading-relaxed">
                    {bullet}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              className="inline-flex items-center bg-gold hover:bg-gold-dark text-white font-semibold px-7 py-3 rounded transition-colors"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      className="shrink-0 mt-0.5"
    >
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
