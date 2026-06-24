import Link from "next/link";

interface ComingSoonProps {
  page: string;
}

export default function ComingSoon({ page }: ComingSoonProps) {
  return (
    <section className="bg-white flex-1 flex items-center justify-center pt-60 pb-20 md:pt-56 md:pb-32">
      <div className="text-center px-6">
        <div className="inline-flex items-center gap-2 bg-gold/10 text-gold text-sm font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-8">
          <SparkleIcon />
          Coming Soon
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-5">
          Our {page} Page Is on Its Way
        </h1>
        <p className="text-zinc-500 text-lg leading-relaxed max-w-md mx-auto mb-10">
          We&apos;re putting the finishing touches on this page. In the meantime,
          feel free to reach out — we&apos;d love to hear from you.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="bg-gold hover:bg-gold-dark text-white font-semibold px-7 py-3 rounded transition-colors"
          >
            Get in Touch
          </Link>
          <Link
            href="/"
            className="text-zinc-600 hover:text-gold font-semibold px-7 py-3 rounded border border-zinc-200 hover:border-gold transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}

function SparkleIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
    </svg>
  );
}
