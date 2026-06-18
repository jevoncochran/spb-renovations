import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services", hasDropdown: true },
  { label: "Gallery", href: "/gallery" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <nav className="bg-black/40 backdrop-blur-sm">
      <div className="w-full px-12 md:px-20 h-28 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/spb_renovations_logo_gold.png"
            alt="SPB Renovations"
            width={320}
            height={120}
            className="h-44 w-auto object-contain"
            priority
          />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="flex items-center gap-1 text-white font-medium hover:text-gold transition-colors"
            >
              {link.label}
              {link.hasDropdown && <ChevronDownIcon />}
            </Link>
          ))}
        </div>

        <Link
          href="/contact"
          className="hidden md:inline-flex items-center bg-gold hover:bg-gold-dark text-white font-semibold px-5 py-3 rounded transition-colors"
        >
          Get a Free Estimate
        </Link>
      </div>
    </nav>
  );
}

function ChevronDownIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}
