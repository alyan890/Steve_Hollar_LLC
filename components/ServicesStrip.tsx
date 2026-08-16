import ScrollReveal from "./ScrollReveal";

const SERVICES = [
  { name: "Slabs", desc: "Foundations & footers poured right & built to last." },
  { name: "Driveways", desc: "Durable driveways built to withstand the test of time." },
  { name: "Patios", desc: "Build your foundation on a patio that's built to last." },
  { name: "Sidewalks", desc: "Clean, code-compliant walkways, residential & commercial." },
  { name: "Grading", desc: "Site prep, grading, & clean up to get your site right." },
  { name: "Additions", desc: "Concrete work for home & building additions." },
  { name: "Block Work", desc: "Solid block construction for walls & structures." },
  { name: "Retaining Walls", desc: "Built to hold ground and look good doing it." },
];

export default function ServicesStrip() {
  return (
    <section className="bg-charcoal-soft py-24">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <p className="font-mono text-safety-green uppercase tracking-widest text-sm mb-2">
            What We Do
          </p>
          <h2 className="font-display text-4xl md:text-6xl mb-14">
            COMMERCIAL &amp; RESIDENTIAL
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-concrete/20">
          {SERVICES.map((s, i) => (
            <ScrollReveal key={s.name} delay={i * 0.05} y={20}>
              <div className="bg-charcoal-soft p-8 h-full group hover:bg-charcoal transition-colors">
                <span className="block w-6 h-1.5 bg-steel-blue-bright group-hover:bg-safety-green transition-colors" />
                <h3 className="font-display text-2xl mt-3 mb-2 group-hover:text-safety-green transition-colors">
                  {s.name.toUpperCase()}
                </h3>
                <p className="text-sm text-concrete-light">{s.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
