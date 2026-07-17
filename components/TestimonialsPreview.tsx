import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

const PLACEHOLDER_REVIEWS = [
  {
    quote: "Placeholder review — swap in a real customer quote once Steve sends his Google/Facebook reviews.",
    name: "Customer Name",
    rating: 5,
  },
  {
    quote: "Placeholder review — swap in a real customer quote once Steve sends his Google/Facebook reviews.",
    name: "Customer Name",
    rating: 5,
  },
  {
    quote: "Placeholder review — swap in a real customer quote once Steve sends his Google/Facebook reviews.",
    name: "Customer Name",
    rating: 5,
  },
];

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

        <div className="grid md:grid-cols-3 gap-6">
          {PLACEHOLDER_REVIEWS.map((r, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <div className="border border-concrete/30 p-8 h-full flex flex-col">
                <div className="text-safety-green mb-4 font-mono">
                  {"★".repeat(r.rating)}
                </div>
                <p className="text-concrete-light italic mb-6 flex-1">
                  &ldquo;{r.quote}&rdquo;
                </p>
                <p className="font-mono text-sm uppercase tracking-wider">
                  — {r.name}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

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
