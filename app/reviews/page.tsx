import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ScrollReveal from "@/components/ScrollReveal";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Reviews | Steve Hollar Concrete LLC",
  description: "See what customers say about Steve Hollar Concrete LLC.",
};

const REVIEWS = Array.from({ length: 6 }).map(() => ({
  quote:
    "Placeholder review — replace with a real customer quote once Steve sends his Google or Facebook reviews.",
  name: "Customer Name",
  rating: 5,
}));

export default function ReviewsPage() {
  return (
    <main>
      <PageHeader eyebrow="Word On The Street" title="CUSTOMER REVIEWS" />

      <section className="py-20 bg-charcoal">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {REVIEWS.map((r, i) => (
              <ScrollReveal key={i} delay={i * 0.06}>
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

          <ScrollReveal className="text-center border-t border-concrete/20 pt-14">
            <h2 className="font-display text-3xl md:text-4xl mb-4">
              HAD A GOOD EXPERIENCE?
            </h2>
            <p className="text-concrete-light font-mono text-sm mb-6">
              We&rsquo;d love to hear from you — leave us a review.
            </p>
            <a
              href="tel:321-229-1012"
              className="inline-block bg-safety-green text-caution-black font-mono font-bold uppercase tracking-wider px-8 py-4 hover:bg-steel-blue-bright hover:text-off-white transition-colors"
            >
              Leave A Review
            </a>
          </ScrollReveal>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
