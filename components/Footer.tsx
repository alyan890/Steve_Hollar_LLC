import Link from "next/link";

const SERVICES = [
  "Slabs",
  "Driveways",
  "Patios",
  "Sidewalks",
  "Grading",
  "Additions",
  "Block Work",
  "Retaining Walls",
];

export default function Footer() {
  return (
    <footer className="bg-caution-black border-t border-concrete/20">
      <div className="hazard-stripe" />
      <div className="mx-auto max-w-7xl px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <p className="font-display text-2xl mb-2">
            STEVE HOLLAR <span className="text-safety-green">CONCRETE</span>
          </p>
          <p className="font-mono text-sm text-concrete-light">
            &ldquo;When you&rsquo;re done with the rest, hollar for the best!&rdquo;
          </p>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-safety-green mb-3">Quick Links</p>
          <ul className="space-y-2 text-sm text-off-white/80">
            <li><Link href="/" className="hover:text-safety-green">Home</Link></li>
            <li><Link href="/gallery" className="hover:text-safety-green">Gallery</Link></li>
            <li><Link href="/reviews" className="hover:text-safety-green">Reviews</Link></li>
            <li><Link href="/about" className="hover:text-safety-green">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-safety-green">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-safety-green mb-3">Services</p>
          <ul className="space-y-2 text-sm text-off-white/80 grid grid-cols-2 gap-x-4">
            {SERVICES.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-safety-green mb-3">Get In Touch</p>
          <ul className="space-y-2 text-sm text-off-white/80">
            <li>
              <a href="tel:321-229-1012" className="hover:text-safety-green">321-229-1012</a>
            </li>
            <li>
              <a href="mailto:steveh@stevehollarconcretellc.com" className="hover:text-safety-green break-all">
                steveh@stevehollarconcretellc.com
              </a>
            </li>
            <li className="text-concrete-light">Serving Orange County, FL</li>
            <li className="pt-1 text-xs">Licensed &amp; Insured &middot; Free Estimates</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-concrete/10 py-5 text-center text-xs font-mono text-concrete-light">
        &copy; {new Date().getFullYear()} Steve Hollar Concrete LLC. All Rights Reserved.
      </div>
    </footer>
  );
}
