import Image from "next/image";
import Link from "next/link";

const bullets = [
  "Decades of combined experience in residential renovation.",
  "Built on a foundation of honest communication and reliable timelines.",
  "Hands-on owners involved in every project from start to finish.",
  "Committed to treating every home with the same care as their own.",
];

export default function MeetTheOwners() {
  return (
    <section className="bg-white py-20">
      <div className="w-full px-12 md:px-20">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-zinc-900">
            Meet{" "}
            <span className="text-gold italic font-serif">
              Scott & Patricia
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4">
            <div className="relative rounded overflow-hidden bg-zinc-200">
              <Image
                src="/images/about/scott-and-patricia.jpg"
                alt="Scott and Patricia Baldwin"
                width={600}
                height={700}
                className="w-full object-cover"
              />
              <div className="bg-zinc-900 px-6 py-4">
                <p className="text-white font-semibold text-lg">Scott & Patricia Baldwin</p>
                <p className="text-gold text-sm tracking-wide uppercase mt-0.5">
                  Founders, SPB Renovations
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <blockquote className="border-l-4 border-gold bg-zinc-50 px-6 py-5 rounded mb-8">
              <p className="text-zinc-600 text-lg italic leading-relaxed">
                &ldquo;We started SPB Renovations because we believed homeowners deserved better — better communication, better craftsmanship, and a team that actually cares about the outcome.&rdquo;
              </p>
            </blockquote>

            <div className="space-y-4 mb-8">
              <p className="text-zinc-500 leading-relaxed">
                Scott and Patricia Baldwin are the founders of SPB Renovations and the heart behind everything the company stands for. Originally from Ontario, Canada, the couple brought with them a strong work ethic, a deep respect for quality craftsmanship, and a shared belief that a renovation should be a positive experience — not a stressful one.
              </p>
              <p className="text-zinc-500 leading-relaxed">
                With decades of experience in the home remodeling industry, Scott and Patricia have overseen projects of all sizes — from targeted kitchen and bathroom remodels to complete whole-home transformations. Their complementary strengths mean every project benefits from both skilled execution and thoughtful design guidance.
              </p>
              <p className="text-zinc-500 leading-relaxed">
                They founded SPB Renovations with a simple mission: to deliver the kind of renovations they would want in their own home. That means showing up, following through, and never cutting corners — on quality, communication, or care.
              </p>
            </div>

            <ul className="space-y-3 mb-10">
              {bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="text-zinc-600 leading-relaxed">{bullet}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              className="inline-flex items-center bg-gold hover:bg-gold-dark text-white font-semibold px-7 py-3 rounded transition-colors"
            >
              Get in Touch With Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="shrink-0 mt-0.5">
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
