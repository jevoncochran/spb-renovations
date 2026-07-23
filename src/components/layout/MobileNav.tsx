"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { PHONE_NUMBER, PHONE_HREF, EMAIL, EMAIL_HREF, FACEBOOK_HREF, INSTAGRAM_HREF } from "@/lib/data/contact";

const serviceLinks = [
  { label: "Kitchen Remodeling", href: "/services/kitchen-remodeling" },
  { label: "Bathroom Remodeling", href: "/services/bathroom-remodeling" },
  { label: "Flooring Installation", href: "/services/flooring-installation" },
  { label: "Countertops", href: "/services/countertops" },
  { label: "Cusgtom Cabinetry / Professional Carpentry", href: "/services/cabinets" },
  { label: "Demolition", href: "/services/demolition" },
  { label: "Drywall", href: "/services/drywall" },
  { label: "Painting", href: "/services/painting" },
  { label: "Glass Doors, Shower Enclosures & Mirrors", href: "/services/glass" },
];

export default function MobileNav({ open, setOpen }: { open: boolean; setOpen: (v: boolean) => void }) {
  const close = () => setOpen(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
        className="text-white hover:text-gold transition-colors"
      >
        {open ? <CloseIcon /> : <HamburgerIcon />}
      </button>

      <div
        className={`absolute top-full left-0 right-0 bg-zinc-900 z-50 overflow-hidden transition-all duration-500 ease-in-out ${
          open ? "max-h-[calc(100dvh-148px)] h-[calc(100dvh-148px)] opacity-100" : "max-h-0 h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col h-full px-8 py-6 justify-between overflow-y-auto">

          {/* Nav items */}
          <Link href="/about" onClick={close} className="flex items-center py-2 text-white hover:text-gold transition-colors">
            <span className="text-sm font-semibold tracking-widest uppercase">About</span>
          </Link>

          <div>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center gap-2 py-2 text-white hover:text-gold transition-colors"
            >
              <span className="text-sm font-semibold tracking-widest uppercase">Services</span>
              <ChevronIcon open={servicesOpen} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${servicesOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
              <div className="pl-4 flex flex-col gap-0.5 mt-0.5 mb-1">
                {serviceLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={close}
                    className="text-sm text-zinc-400 hover:text-gold transition-colors py-0.5"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link href="/contact" onClick={close} className="flex items-center py-2 text-white hover:text-gold transition-colors">
            <span className="text-sm font-semibold tracking-widest uppercase">Contact</span>
          </Link>

          <Link href="/gallery" onClick={close} className="flex items-center py-2 text-white hover:text-gold transition-colors">
            <span className="text-sm font-semibold tracking-widest uppercase">Gallery</span>
          </Link>

          <Link href="/testimonials" onClick={close} className="flex items-center py-2 text-white hover:text-gold transition-colors">
            <span className="text-sm font-semibold tracking-widest uppercase">Testimonials</span>
          </Link>

          {/* CTA */}
          <div className="flex justify-center">
            <Link
              href="/contact"
              onClick={close}
              className="bg-gold hover:bg-gold-dark text-white font-semibold px-8 py-3 rounded transition-colors text-sm tracking-wide"
            >
              Get a Free Estimate
            </Link>
          </div>

          {/* Contact info */}
          <div className="flex flex-col items-center gap-2 pt-4 border-t border-zinc-800">
            <a href={PHONE_HREF} className="flex items-center gap-2 text-sm text-zinc-400 hover:text-gold transition-colors">
              <PhoneIcon />
              {PHONE_NUMBER}
            </a>
            <a href={EMAIL_HREF} className="flex items-center gap-2 text-sm text-zinc-400 hover:text-gold transition-colors">
              <MailIcon />
              {EMAIL}
            </a>
          </div>

          {/* Socials */}
          <div className="flex flex-col items-center gap-2 pt-3 border-t border-zinc-800">
            <span className="text-xs text-zinc-500 tracking-widest uppercase">Follow Us</span>
            <div className="flex items-center gap-4">
              <a href={FACEBOOK_HREF} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-zinc-400 hover:text-gold transition-colors">
                <FacebookIcon />
              </a>
              <a href={INSTAGRAM_HREF} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-zinc-400 hover:text-gold transition-colors">
                <InstagramIcon />
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function HamburgerIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="#C9A227">
      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C9A227" strokeWidth="2">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
