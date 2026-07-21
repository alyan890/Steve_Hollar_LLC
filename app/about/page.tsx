import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ScrollReveal from "@/components/ScrollReveal";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "About Us | Steve Holler Concrete LLC",
  description:
    "Family-owned, father-son concrete team with 85+ years combined experience serving Brevard County, FL.",
};

const VALUES = [
  {
    title: "New & Old Construction",
    desc: "Whether it's ground-up new build or working into an existing property, we handle both.",
  },
  {
    title: "Demo & Haul Away",
    desc: "Old concrete out, debris hauled off — site left clean and ready.",
  },
  {
    title: "Form, Prep & Pour",
    desc: "Every job done right from the ground up: forming, prep work, and the pour itself.",
  },
  {
    title: "If We Break It, We Fix It",
    desc: "We stand behind our work. Straightforward accountability, no excuses.",
  },
];

const SPECIALTIES = [
  "High-Quality Concrete Installation",
  "Concrete Block",
  "Site Grading",
  "Cleanup",
];

export default function AboutPage() {
  return (
    <main>
      <PageHeader eyebrow="Our Story" title="GENERATIONS OF QUALITY" />

      <section className="py-24 bg-charcoal">
        <div className="mx-auto max-w-4xl px-6">
          <ScrollReveal>
            <p className="text-xl md:text-2xl text-off-white leading-relaxed mb-6">
              At our core, we are a small, family-owned company built on
              honesty and hard work. As a father and son team with over{" "}
              <span className="text-safety-green font-bold">
                85 years of combined experience
              </span>
              , we carry on a proud legacy as second and third-generation
              concrete workers.
            </p>
            <p className="text-lg text-concrete-light leading-relaxed mb-6">
              We handle both commercial and residential projects, specializing in:
            </p>
            <ul className="grid grid-cols-2 gap-3 mb-8">
              {SPECIALTIES.map((s) => (
                <li
                  key={s}
                  className="flex items-center gap-3 font-mono text-sm uppercase tracking-wide"
                >
                  <span className="w-2 h-2 bg-safety-green flex-shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
            <p className="text-lg text-concrete-light leading-relaxed">
              We don&rsquo;t believe in cutting corners. Our goal is simple:
              deliver straightforward service, take pride in our
              craftsmanship, and ensure you love the final result.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 bg-charcoal-soft">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal>
            <p className="font-mono text-safety-green uppercase tracking-widest text-sm mb-2">
              How We Work
            </p>
            <h2 className="font-display text-4xl md:text-6xl mb-14">
              THE HOLLER STANDARD
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {VALUES.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 0.08}>
                <div className="border border-concrete/30 p-8 hover:border-safety-green transition-colors h-full">
                  <h3 className="font-display text-2xl mb-3">
                    {v.title.toUpperCase()}
                  </h3>
                  <p className="text-concrete-light">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
