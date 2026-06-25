import Image from "next/image";
import Link from "next/link";
import { PHONE_NUMBER, PHONE_HREF, EMAIL, EMAIL_HREF } from "@/lib/data/contact";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  // { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
];

const services = [
  { label: "Kitchen Remodeling", href: "/services/kitchen-remodeling" },
  { label: "Bathroom Remodeling", href: "/services/bathroom-remodeling" },
  { label: "Flooring Installation", href: "/services/flooring-installation" },
  { label: "Countertops", href: "/services/countertops" },
  { label: "Custom Cabinetry / Professional Carpentry", href: "/services/cabinets" },
  { label: "Demolition", href: "/services/demolition" },
  { label: "Drywall", href: "/services/drywall" },
  { label: "Painting", href: "/services/painting" },
  { label: "Glass Doors, Shower Enclosures & Mirrors", href: "/services/glass" },
];

const serviceAreas = [
  "Tampa",
  "St. Petersburg",
  "Clearwater",
  "Wesley Chapel",
  "Sarasota",
  "Lakeland",
  "Largo",
  "Brandon",
];

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-400">
      <div className="w-full px-6 md:px-12 lg:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link href="/">
              <Image
                src="/images/spb_renovations_logo_gold.png"
                alt="SPB Renovations"
                width={280}
                height={105}
                className="h-28 w-auto object-contain mb-5"
              />
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              High-quality home renovations designed around your style, built to
              elevate everyday living across the Tampa Bay area.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                aria-label="Facebook"
                className="hover:text-gold transition-colors"
              >
                <FacebookIcon />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-gold transition-colors"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-widest uppercase mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-widest uppercase mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="text-sm hover:text-gold transition-colors"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="text-white font-semibold text-sm tracking-widest uppercase mt-8 mb-5">
              Service Areas
            </h4>
            <p className="text-sm leading-relaxed">
              {serviceAreas.join(" · ")}
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-widest uppercase mb-5">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <PhoneIcon />
                <a
                  href={PHONE_HREF}
                  className="text-sm hover:text-gold transition-colors"
                >
                  {PHONE_NUMBER}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MailIcon />
                <a
                  href={EMAIL_HREF}
                  className="text-sm hover:text-gold transition-colors"
                >
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <ClockIcon />
                <span className="text-sm">
                  Monday – Friday
                  <br />
                  8:00 AM – 5:00 PM
                </span>
              </li>
            </ul>

            <Link
              href="/contact"
              className="inline-flex items-center bg-gold hover:bg-gold-dark text-white font-semibold px-5 py-3 rounded transition-colors text-sm mt-8"
            >
              Get a Free Estimate
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-zinc-800">
        <div className="w-full px-6 md:px-12 lg:px-20 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-zinc-500">
            © {new Date().getFullYear()} SPB Renovations. All rights reserved.
          </p>
          <p className="text-xs text-zinc-500">
            Serving the Greater Tampa Bay Area
          </p>
        </div>
      </div>
    </footer>
  );
}

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="shrink-0 mt-0.5 text-gold"
    >
      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="shrink-0 mt-0.5 text-gold"
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="shrink-0 mt-0.5 text-gold"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12,6 12,12 16,14" />
    </svg>
  );
}
