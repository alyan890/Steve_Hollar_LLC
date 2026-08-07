"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function ScrollVideoHero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const section = sectionRef.current;
    const content = contentRef.current;
    if (!section || !content) return;

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "+=200%",
        pin: true,
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    timeline.to(content, {
      y: -180,
      ease: "none",
    });

    ScrollTrigger.refresh();

    return () => {
      timeline.scrollTrigger?.kill();
      timeline.kill();
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative h-screen overflow-hidden grain-overlay">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster="/optimized/20251006_163431.webp"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      >
        <source src="/video/vecteezy_house-rotating-background_2019515.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 z-0 bg-linear-to-b from-charcoal/70 via-charcoal/40 to-charcoal" />

      <div ref={contentRef} className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center will-change-transform">
        <p className="mb-4 font-mono text-sm uppercase tracking-[0.3em] text-safety-green">
          3rd Generation &middot; Brevard County, FL
        </p>

        <h1 className="font-display text-[13vw] leading-[0.9] text-off-white md:text-[7vw]">
          {"WHEN YOU'RE DONE WITH THE REST,".split(" ").map((word, i) => (
            <span key={i} className="mr-[0.25em] inline-block">
              {word}
            </span>
          ))}
          <br />
          <span className="text-safety-green">HOLLER</span> FOR THE BEST
        </h1>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="tel:321-229-1012"
            className="bg-safety-green text-caution-black font-mono font-bold uppercase tracking-wider px-8 py-4 hover:bg-steel-blue-bright hover:text-off-white transition-colors"
          >
            Call 321-229-1012
          </a>
          <a
            href="/contact"
            className="border-2 border-off-white text-off-white font-mono font-bold uppercase tracking-wider px-8 py-4 hover:border-safety-green hover:text-safety-green transition-colors"
          >
            Get Free Estimate
          </a>
        </div>

        <p className="mt-8 animate-bounce font-mono text-xs uppercase tracking-widest text-concrete-light">
          Scroll ↓
        </p>
      </div>
    </section>
  );
}