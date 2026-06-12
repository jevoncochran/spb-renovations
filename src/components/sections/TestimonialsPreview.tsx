"use client";

import { useState } from "react";
import { testimonials } from "@/lib/data/testimonials";

export default function TestimonialsPreview() {
  const [active, setActive] = useState(0);
  const testimonial = testimonials[active];

  return (
    <div>
      <div className="mb-5">
        <h2 className="text-xl font-bold text-zinc-900">What Our Clients Say</h2>
        <div className="w-10 h-0.5 bg-gold mt-2" />
      </div>

      <div className="flex gap-1 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <StarIcon key={i} />
        ))}
      </div>

      <p className="text-zinc-700 leading-relaxed mb-4 text-sm">
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      <p className="text-zinc-600 text-sm font-medium">
        — {testimonial.author}, {testimonial.location}
      </p>

      <div className="flex gap-2 mt-6">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              i === active ? "bg-gold" : "bg-zinc-300"
            }`}
            aria-label={`Testimonial ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function StarIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="#C9A227">
      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
    </svg>
  );
}
