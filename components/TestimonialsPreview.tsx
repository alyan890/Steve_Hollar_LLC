import Link from "next/link";
import ScrollReveal from "./ScrollReveal";
import ReviewProof from "./ReviewProof";

export default function TestimonialsPreview() {
  return (
    <section className="bg-charcoal py-24 grain-overlay">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal className="mb-14">
          <p className="font-mono text-safety-green uppercase tracking-widest text-sm mb-2">
            Word On The Street
          </p>
          <h2 className="font-display text-4xl md:text-6xl">WHAT FOLKS SAY</h2>
        </ScrollReveal>

        <ReviewProof limit={3} />

        <ScrollReveal delay={0.2} className="text-center mt-10">
          <Link
            href="/reviews"
            className="font-mono uppercase tracking-wider text-sm border-b-2 border-safety-green hover:text-safety-green transition-colors pb-1"
          >
            Read All Reviews →
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
