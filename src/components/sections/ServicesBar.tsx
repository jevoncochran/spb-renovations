import { services } from "@/lib/data/services";

const icons: Record<string, React.ReactNode> = {
  home: (
    <svg width="44" height="44" viewBox="0 0 64 64" fill="none" stroke="#C9A227" strokeWidth="2.5">
      <path d="M8 28L32 8l24 20" />
      <path d="M14 24v28h12V38h12v14h12V24" />
      <rect x="26" y="38" width="12" height="14" />
    </svg>
  ),
  kitchen: (
    <svg width="44" height="44" viewBox="0 0 64 64" fill="none" stroke="#C9A227" strokeWidth="2.5">
      <rect x="8" y="16" width="48" height="36" rx="2" />
      <line x1="8" y1="28" x2="56" y2="28" />
      <line x1="32" y1="28" x2="32" y2="52" />
      <rect x="14" y="8" width="10" height="10" rx="1" />
      <rect x="40" y="8" width="10" height="10" rx="1" />
      <circle cx="20" cy="20" r="2" fill="#C9A227" />
      <circle cx="44" cy="20" r="2" fill="#C9A227" />
    </svg>
  ),
  bathroom: (
    <svg width="44" height="44" viewBox="0 0 64 64" fill="none" stroke="#C9A227" strokeWidth="2.5">
      <path d="M16 32 C16 24 24 18 32 18 C40 18 48 24 48 32" />
      <path d="M10 32h44v6c0 6-4 10-10 10H20c-6 0-10-4-10-10v-6z" />
      <line x1="20" y1="52" x2="18" y2="58" />
      <line x1="44" y1="52" x2="46" y2="58" />
      <line x1="16" y1="18" x2="16" y2="10" />
      <circle cx="16" cy="8" r="2" fill="#C9A227" />
    </svg>
  ),
  design: (
    <svg width="44" height="44" viewBox="0 0 64 64" fill="none" stroke="#C9A227" strokeWidth="2.5">
      <rect x="8" y="8" width="36" height="48" rx="2" />
      <line x1="14" y1="20" x2="38" y2="20" />
      <line x1="14" y1="30" x2="38" y2="30" />
      <line x1="14" y1="40" x2="28" y2="40" />
      <path d="M40 40 L56 24 L60 28 L44 44z" />
      <line x1="40" y1="40" x2="38" y2="46" />
    </svg>
  ),
};

export default function ServicesBar() {
  return (
    <section className="bg-white py-12">
      <div className="w-full px-12 md:px-20">
        <div className="flex items-center">
          {services.map((service, index) => (
            <>
              <div key={service.title} className="flex items-start gap-4 flex-1 px-6">
                <div className="shrink-0">{icons[service.icon]}</div>
                <div>
                  <h3 className="font-semibold text-zinc-900 mb-1">{service.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{service.description}</p>
                </div>
              </div>
              {index < services.length - 1 && (
                <div key={`divider-${index}`} className="w-px h-12 bg-zinc-200 shrink-0" />
              )}
            </>
          ))}
        </div>
      </div>
    </section>
  );
}
