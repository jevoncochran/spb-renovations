import Link from "next/link";

export default function CTACard() {
  return (
    <div className="bg-zinc-50 border border-zinc-200 rounded-lg p-7 flex flex-col justify-center h-full">
      <div className="w-8 h-0.5 bg-gold mb-5" />
      <h2 className="text-xl font-bold text-zinc-900 mb-3">
        Start Your Renovation Journey
      </h2>
      <p className="text-zinc-600 text-sm leading-relaxed mb-6">
        Let&apos;s bring your vision to life. Schedule a free consultation and
        receive a personalized quote.
      </p>
      <Link
        href="/contact"
        className="flex items-center justify-between bg-gold hover:bg-gold-dark text-white font-semibold px-5 py-3 rounded transition-colors mb-4 text-sm"
      >
        Schedule Your Consultation
        <ArrowRightIcon />
      </Link>
      <a
        href="tel:9548186405"
        className="flex items-center gap-2 text-zinc-700 text-sm font-medium hover:text-gold transition-colors"
      >
        <PhoneIcon />
        Or call (954) 818-6405
      </a>
    </div>
  );
}

function ArrowRightIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12,5 19,12 12,19" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
    </svg>
  );
}
