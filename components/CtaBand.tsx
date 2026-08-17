import ScrollReveal from "./ScrollReveal";

export default function CtaBand() {
  return (
    <section className="bg-safety-green text-caution-black">
      <div className="mx-auto max-w-7xl px-6 py-20 text-center">
        <ScrollReveal>
          <h2 className="font-display text-steel-blue-bright text-4xl md:text-6xl mb-6">
            READY TO GET STARTED?
          </h2>
          <p className="font-mono text-steel-blue-bright mb-8 max-w-xl mx-auto ">
            Free estimates. Licensed &amp; insured. Straightforward service,
            no cutting corners.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:321-229-1012"
              className="bg-caution-black text-steel-blue-bright font-mono font-bold uppercase tracking-wider px-8 py-4 hover:bg-charcoal-soft transition-colors"
            >
              Call 321-229-1012
            </a>
            
            <a
              href="/contact"
              className="border-2 border-caution-black text-steel-blue-bright hover:bg-steel-blue-bright font-mono font-bold uppercase tracking-wider px-8 py-4 hover:bg-caution-black hover:text-off-white transition-colors"
            >
              Request Estimate
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
