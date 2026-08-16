import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import ScrollReveal from "@/components/ScrollReveal";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "About Us | Steve Hollar Concrete LLC",
  description:
    "Family-owned, father-son concrete team with 85+ years combined experience serving Orange County, FL.",
};

const VALUES = [
  {
    title: "New & Old Construction",
    desc:
      "From ground-up builds to updating existing concrete features, we scope the job, recommend durable solutions, and coordinate with other trades to keep the project moving.",
    image: "/optimized/20250627_103248.webp",
  },
  {
    title: "Demo & Haul Away",
    desc:
      "We safely remove old slabs and demo material, sort waste appropriately, and haul debris away so your site is clean and ready for the next phase.",
    image: "/optimized/20260527_130331.webp",
  },
  {
    title: "Form, Prep & Pour",
    desc:
      "Proper forming, subgrade preparation, reinforcement placement, and controlled pours are essential — we follow disciplined steps to ensure long-term performance.",
    image: "/optimized/20251006_163431.webp",
  },
  {
    title: "If We Break It, We Fix It",
    desc:
      "Repairs and touch-ups are part of the job. We assess damage, recommend corrective measures, and perform repairs that restore strength and appearance.",
    image: "/optimized/20260604_101016.webp",
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
                  <span className="w-2 h-2 bg-safety-green shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
            <p className="text-lg text-concrete-light leading-relaxed">
              We don&rsquo;t believe in cutting corners. Our goal is simple:
              deliver straightforward service, take pride in our
              craftsmanship, and ensure you love the final result.
            </p>
            <p className="text-lg text-concrete-light leading-relaxed mt-6">
              We use quality-ready mixes, proper reinforcement, and proven
              finishing techniques to ensure the surface performs for years.
              If a custom finish or color is required, we walk you through
              options and provide mockups so you get exactly what you want.
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
              THE HOLLAR STANDARD
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {VALUES.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 0.08}>
                <div className="border border-concrete/30 p-6 hover:border-safety-green transition-colors h-full grid grid-cols-1 sm:grid-cols-[120px_1fr] gap-6 items-start">
                  <div className="relative w-full h-40 sm:h-28 sm:w-28 rounded overflow-hidden">
                    <Image src={v.image} alt={v.title} fill className="object-cover" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl mb-3">
                      {v.title.toUpperCase()}
                    </h3>
                    <p className="text-concrete-light">{v.desc}</p>
                  </div>
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
