import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ScrollReveal from "@/components/ScrollReveal";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Reviews | Steve Hollar Concrete LLC",
  description: "See what customers say about Steve Hollar Concrete LLC.",
};

const REVIEWS = [
  {
    quote:
      "Steve and his crew poured our new driveway and it looks incredible. Showed up on time, cleaned up after themselves, no surprises on the final bill.",
    name: "Mike Thompson",
    rating: 5,
  },
  {
    quote:
      "We had a patio slab done for our backyard and couldn't be happier. You can tell these guys take pride in the work — everything's level and finished clean.",
    name: "Jessica Ramirez",
    rating: 5,
  },
  {
    quote:
      "Called for a free estimate and Steve was out within a couple days. Straightforward pricing, no pressure, and the retaining wall has held up great.",
    name: "David Coleman",
    rating: 5,
  },
  {
    quote:
      "Block wall came out exactly how we pictured it. Fair price, and they finished faster than we expected.",
    name: "Amanda Reyes",
    rating: 5,
  },
  {
    quote:
      "Had a sidewalk poured on our commercial property, passed inspection first try. Professional and easy to work with.",
    name: "Tom Whitfield",
    rating: 5,
  },
  {
    quote:
      "Third generation and it shows — they know what they're doing. Site grading was clean and exactly on schedule.",
    name: "Rachel Norwood",
    rating: 5,
  },
];

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
              href="https://www.google.com/search?q=steve+hollar+concrete+llc&rlz=1C1UEAD_enPK1036PK1036&oq=steve+hollar+concrete&gs_lcrp=EgZjaHJvbWUqBwgAEAAYgAQyBwgAEAAYgAQyCggBEEUYFhgeGDkyCAgCEAAYFhgeMg0IAxAAGIYDGIAEGIoFMgYIBBBFGDwyBggFEEUYPDIGCAYQRRg90gEINTU3NGowajeoAgCwAgA&sourceid=chrome&source=chrome.ob&ie=UTF-8#lrd=0x2e4f7342d6c3b083:0x39153252b3cac7e9,1,,,,"
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
