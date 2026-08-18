import ScrollReveal from "./ScrollReveal";

export default function BBBAccreditation() {
  return (
    <section className="bg-charcoal py-16 grain-overlay">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="font-mono text-safety-green uppercase tracking-widest text-sm mb-2">
              Accredited Business
            </p>
            <h2 className="font-display text-3xl md:text-4xl mb-4 leading-[1.1]">
              BBB ACCREDITED
            </h2>
            <p className="text-concrete-light max-w-2xl mx-auto">
              We&rsquo;re proud to be accredited by the Better Business Bureau,
              demonstrating our commitment to trust, integrity, and customer
              satisfaction.
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <img
              src="/BBB1.png"
              alt="BBB Accreditation Logo"
              className="h-20 md:h-24 w-auto object-contain"
            />
            <img
              src="/BBB2.png"
              alt="BBB Accreditation Logo"
              className="h-20 md:h-24 w-auto object-contain"
            />
            <img
              src="/BBB3.png"
              alt="BBB Accreditation Logo"
              className="h-20 md:h-24 w-auto object-contain"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}