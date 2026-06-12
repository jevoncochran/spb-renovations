export default function TopBar() {
  return (
    <div className="bg-white text-zinc-800 text-sm py-2.5 px-12 md:px-20 border-b border-zinc-200">
      <div className="w-full grid grid-cols-3 items-center">
        <div className="flex items-center gap-6">
          <a
            href="tel:9548186405"
            className="flex items-center gap-2 hover:text-gold transition-colors"
          >
            <PhoneIcon />
            (954) 818-6405
          </a>
          <a
            href="mailto:info@spbrenovations.com"
            className="flex items-center gap-2 hover:text-gold transition-colors"
          >
            <MailIcon />
            contact@spbrenovations.com
          </a>
        </div>
        <div className="flex justify-center">
          <span className="flex items-center gap-2 text-zinc-600">
            <ClockIcon />
            Monday through Friday: 8:00 AM to 5:00 PM
          </span>
        </div>
        <div className="flex items-center gap-3 justify-end">
          <span className="text-zinc-500">Follow Us</span>
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
    </div>
  );
}

function PhoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
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
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12,6 12,12 16,14" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      width="16"
      height="16"
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
