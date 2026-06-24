"use client";

import { useState } from "react";
import { PHONE_NUMBER, PHONE_HREF, EMAIL, EMAIL_HREF } from "@/lib/data/contact";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Wire up to an email service (e.g. Resend) when ready
    setSubmitted(true);
  }

  return (
    <section className="bg-transparent pb-20">
      <div className="w-full px-6 md:px-12 lg:px-20">
        <div className="bg-white rounded-xl shadow-2xl p-10 -mt-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left — info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-gold" />
              <span className="text-gold text-sm font-semibold tracking-widest uppercase">
                Get in Touch
              </span>
            </div>
            <h2 className="text-4xl font-bold text-zinc-900 leading-tight mb-5">
              Let&apos;s Start Your Renovation
            </h2>
            <p className="text-zinc-500 text-lg leading-relaxed mb-10">
              Ready to transform your home? Fill out the form and we&apos;ll be in
              touch within one business day to schedule your free consultation.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-gold/10 p-3 rounded">
                  <PhoneIcon />
                </div>
                <div>
                  <p className="font-semibold text-zinc-900">Phone</p>
                  <a href={PHONE_HREF} className="text-zinc-500 hover:text-gold transition-colors">
                    {PHONE_NUMBER}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-gold/10 p-3 rounded">
                  <MailIcon />
                </div>
                <div>
                  <p className="font-semibold text-zinc-900">Email</p>
                  <a href={EMAIL_HREF} className="text-zinc-500 hover:text-gold transition-colors">
                    {EMAIL}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-gold/10 p-3 rounded">
                  <ClockIcon />
                </div>
                <div>
                  <p className="font-semibold text-zinc-900">Office Hours</p>
                  <p className="text-zinc-500">Monday – Friday: 8:00 AM – 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-zinc-50 rounded-lg p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="bg-gold/10 p-4 rounded-full mb-5">
                  <CheckIcon />
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 mb-3">Message Sent!</h3>
                <p className="text-zinc-500 leading-relaxed">
                  Thank you for reaching out. We&apos;ll be in touch within one business day to schedule your free consultation.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-zinc-700 mb-1.5">
                      First Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Scott"
                      className="w-full border border-zinc-200 rounded px-4 py-3 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-700 mb-1.5">
                      Last Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Baldwin"
                      className="w-full border border-zinc-200 rounded px-4 py-3 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-700 mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full border border-zinc-200 rounded px-4 py-3 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-700 mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="(954) 000-0000"
                    className="w-full border border-zinc-200 rounded px-4 py-3 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-700 mb-1.5">
                    Type of Project
                  </label>
                  <select
                    className="w-full border border-zinc-200 rounded px-4 py-3 text-zinc-900 focus:outline-none focus:border-gold transition-colors bg-white"
                  >
                    <option value="">Select a service...</option>
                    <option>Whole Home Renovation</option>
                    <option>Kitchen Remodeling</option>
                    <option>Bathroom Remodeling</option>
                    <option>Design & Build</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-700 mb-1.5">
                    Tell Us About Your Project
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe your renovation goals, timeline, or any questions you have..."
                    className="w-full border border-zinc-200 rounded px-4 py-3 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-gold transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gold hover:bg-gold-dark text-white font-semibold py-4 rounded transition-colors"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}

function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="#C9A227">
      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C9A227" strokeWidth="2">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C9A227" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12,6 12,12 16,14" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="#C9A227" />
      <polyline points="7,12 10.5,15.5 17,9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
