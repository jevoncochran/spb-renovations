const trustItems = [
  {
    icon: <ShieldIcon />,
    title: "Licensed & Insured",
    description: "Your project is in safe hands.",
  },
  {
    icon: <BuildingIcon />,
    title: "Residential & Commercial",
    description: "We serve homeowners and businesses.",
  },
  {
    icon: <RibbonIcon />,
    title: "Quality Craftsmanship",
    description: "Built to the highest standards.",
  },
  {
    icon: <ClockIcon />,
    title: "On Time, Every Time",
    description: "We respect your time and space.",
  },
  {
    icon: <PeopleIcon />,
    title: "Client Focused",
    description: "Your satisfaction is our priority.",
  },
];

export default function TrustBar() {
  return (
    <section className="bg-zinc-100 border-t border-zinc-200">
      <div className="w-full px-6 md:px-12 lg:px-20 py-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {trustItems.map((item) => (
            <div key={item.title} className="flex items-start gap-4">
              <div className="shrink-0 text-zinc-600 mt-0.5">{item.icon}</div>
              <div>
                <p className="font-semibold text-zinc-900 text-sm">{item.title}</p>
                <p className="text-zinc-500 text-sm mt-0.5">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BuildingIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="3" width="18" height="18" rx="1" />
      <path d="M3 9h18" />
      <path d="M9 21V9" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function RibbonIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12,6 12,12 16,14" />
    </svg>
  );
}

function PeopleIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
