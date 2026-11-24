import { SITE } from "@/lib/site";
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ScrollReveal from "@/components/ScrollReveal";
import CtaBand from "@/components/CtaBand";
import ReviewProof from "@/components/ReviewProof";

export const metadata: Metadata = {
  title: "Customer Reviews",
  description:
    "Read reviews of Steve Hollar Concrete LLC, a BBB A+ accredited concrete contractor in Apopka, FL serving Orange, Seminole & Lake Counties.",
  alternates: { canonical: "/reviews" },
};

export default function ReviewsPage() {
  return (
    <main>
      <PageHeader eyebrow="Word On The Street" title="CUSTOMER REVIEWS" />

      <section className="py-20 bg-charcoal">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16">
            <ReviewProof />
          </div>

          <ScrollReveal className="text-center border-t border-concrete/20 pt-14">
            <h2 className="font-display text-3xl md:text-4xl mb-4">
              HAD A GOOD EXPERIENCE?
            </h2>
            <p className="text-concrete-light font-mono text-sm mb-6">
              We&rsquo;d love to hear from you — leave us a review.
            </p>
            <a
              href={SITE.reviewUrl}
              target="_blank"
              rel="noopener noreferrer"
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
