import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

export default function AboutTeaser() {
  return (
    <section className="bg-charcoal py-24 grain-overlay">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-16 items-center">
        <ScrollReveal>
          <p className="font-mono text-safety-green uppercase tracking-widest text-sm mb-2">
            85+ Years Combined Experience
          </p>
          <h2 className="font-display text-4xl md:text-6xl mb-6 leading-[0.95]">
            GENERATIONS
            <br />
            OF QUALITY
          </h2>
          <p className="text-concrete-light mb-4 max-w-md">
            At our core, we&rsquo;re a small, family-owned company built on honesty
            and hard work. A father and son team, carrying on a proud legacy
            as second and third-generation concrete workers.
          </p>
          <p className="text-concrete-light mb-8 max-w-md">
            We don&rsquo;t believe in cutting corners. Straightforward service,
            real craftsmanship, and a final result you&rsquo;ll love.
          </p>
          <Link
            href="/about"
            className="inline-block font-mono uppercase tracking-wider text-sm border-b-2 border-safety-green text-off-white hover:text-safety-green transition-colors pb-1"
          >
            Read Our Story →
          </Link>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="grid grid-cols-2 gap-4">
            {[
              "New & Old Construction",
              "Demo & Haul Away",
              "Form, Prep & Pour",
              "If We Break It, We Fix It",
            ].map((item) => (
              <div
                key={item}
                className="border border-concrete/30 p-6 hover:border-safety-green transition-colors"
              >
                <p className="font-display text-lg">{item.toUpperCase()}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
