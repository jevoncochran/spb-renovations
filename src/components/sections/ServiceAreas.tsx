const cities = [
  "Tampa",
  "St. Petersburg",
  "Clearwater",
  "Wesley Chapel",
  "Sarasota",
  "Lakeland",
  "Largo",
  "Brandon",
  "Riverview",
  "Land O' Lakes",
  "New Tampa",
  "Lutz",
];

export default function ServiceAreas() {
  return (
    <section className="bg-zinc-50 py-16">
      <div className="w-full px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-gold" />
              <span className="text-gold text-sm font-semibold tracking-widest uppercase">
                Where We Work
              </span>
            </div>
            <h2 className="text-3xl font-bold text-zinc-900 mb-3">
              Serving the Greater Tampa Bay Area
            </h2>
            <p className="text-zinc-500 text-lg mb-8">
              We proudly serve homeowners throughout the Tampa Bay region. If you
              don&apos;t see your city listed, reach out — we may still be able to help.
            </p>
            <div className="flex flex-wrap gap-3">
            {cities.map((city) => (
              <div
                key={city}
                className="flex items-center gap-2 bg-white border border-zinc-200 rounded px-4 py-3"
              >
                <MapPinIcon />
                <span className="text-zinc-700 font-medium text-sm">{city}</span>
              </div>
            ))}
            </div>
          </div>

          <div className="rounded-xl overflow-hidden border border-zinc-200 shadow-md h-[450px]">
            <iframe
              title="SPB Renovations Service Area — Tampa Bay, FL"
              src="https://maps.google.com/maps?q=Tampa+Bay,+Florida&z=10&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function MapPinIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C9A227" strokeWidth="2" className="shrink-0">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
