import Image from "next/image";
import Link from "next/link";
import MobileNav from "./MobileNav";

const serviceLinks = [
  { label: "Kitchen Remodeling", href: "/services/kitchen-remodeling" },
  { label: "Bathroom Remodeling", href: "/services/bathroom-remodeling" },
  { label: "Flooring Installation", href: "/services/flooring-installation" },
];

const navLinks = [
  { label: "Contact", href: "/contact" },
  { label: "Gallery", href: "/gallery" },
  { label: "Testimonials", href: "/testimonials" },
];

export default function Navbar({ scrolled = false, menuOpen = false, setMenuOpen }: { scrolled?: boolean; menuOpen?: boolean; setMenuOpen?: (v: boolean) => void }) {
  return (
    <nav className="bg-black/40 backdrop-blur-sm relative">
      <div className={`w-full px-6 md:px-20 flex items-center justify-between py-3 md:py-0 transition-all duration-300 ${scrolled ? "h-28 md:h-20" : "h-28 md:h-28"}`}>
        <Link href="/" className="flex items-center" onClick={() => setMenuOpen?.(false)}>
          <Image
            src="/images/spb_renovations_logo_gold.png"
            alt="SPB Renovations"
            width={320}
            height={120}
            className={`w-auto object-contain transition-all duration-500 ${scrolled ? "h-32 md:h-32" : "h-32 md:h-44"}`}
            priority
          />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/about"
            className="text-white font-medium hover:text-gold transition-colors"
          >
            About
          </Link>
          {/* Services dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 text-white font-medium hover:text-gold transition-colors">
              Services
              <ChevronDownIcon />
            </button>
            <div className="absolute top-full left-0 mt-2 w-52 bg-zinc-900 rounded shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              {serviceLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block px-5 py-3 text-sm text-zinc-300 hover:text-gold hover:bg-zinc-800 transition-colors first:rounded-t last:rounded-b"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="flex items-center gap-1 text-white font-medium hover:text-gold transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href="/contact"
          className="hidden md:inline-flex items-center bg-gold hover:bg-gold-dark text-white font-semibold px-5 py-3 rounded transition-colors"
        >
          Get a Free Estimate
        </Link>

        <MobileNav open={menuOpen} setOpen={setMenuOpen ?? (() => {})} />
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
