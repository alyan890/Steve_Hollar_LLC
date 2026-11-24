import { SITE } from "@/lib/site";
import { REVIEWS } from "@/lib/reviews";
import ScrollReveal from "./ScrollReveal";

// Shows real reviews from lib/reviews.ts, or links to the review profiles while
// that list is empty.
export default function ReviewProof({ limit }: { limit?: number }) {
  const list = limit ? REVIEWS.slice(0, limit) : REVIEWS;

  if (list.length === 0) {
    const cards = [
      { title: "BBB A+", text: "Accredited business with an A+ rating from the Better Business Bureau." },
      { title: "5.0 on Angi", text: "Rated 5 out of 5 by homeowners on Angi.", href: SITE.sameAs[0] },
      { title: "Google Reviews", text: "See what our customers in Central Florida say on Google.", href: SITE.reviewUrl },
    ];
    return (
      <div className="grid md:grid-cols-3 gap-6">
        {cards.map((c, i) => (
          <ScrollReveal key={c.title} delay={i * 0.08}>
            <div className="border border-concrete/30 p-8 h-full flex flex-col">
              <p className="font-display text-3xl text-safety-green mb-3">{c.title}</p>
              <p className="text-concrete-light mb-6 flex-1">{c.text}</p>
              {c.href && (
                <a
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm uppercase tracking-wider border-b-2 border-safety-green self-start pb-1 hover:text-safety-green transition-colors"
                >
                  Read reviews →
                </a>
              )}
            </div>
          </ScrollReveal>
        ))}
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {list.map((r, i) => (
        <ScrollReveal key={`${r.name}-${i}`} delay={i * 0.06}>
          <div className="border border-concrete/30 p-8 h-full flex flex-col">
            <div className="text-safety-green mb-4 font-mono">{"★".repeat(r.rating)}</div>
            <p className="text-concrete-light italic mb-6 flex-1">&ldquo;{r.quote}&rdquo;</p>
            <p className="font-mono text-sm uppercase tracking-wider">
              — {r.name}
              {r.city ? `, ${r.city}` : ""} <span className="text-concrete-light">via {r.source}</span>
            </p>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}
