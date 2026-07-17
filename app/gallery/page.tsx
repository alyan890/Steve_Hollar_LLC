"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import ScrollReveal from "@/components/ScrollReveal";
import CtaBand from "@/components/CtaBand";

const CATEGORIES = [
  "All",
  "Driveways",
  "Patios",
  "Slabs",
  "Block Work",
  "Retaining Walls",
  "Grading",
];

const PROJECTS = [
  { title: "Residential Driveway Pour", category: "Driveways", tone: "from-steel-blue to-charcoal" },
  { title: "Backyard Patio Slab", category: "Patios", tone: "from-concrete to-charcoal" },
  { title: "Commercial Foundation Slab", category: "Slabs", tone: "from-steel-blue-bright to-charcoal" },
  { title: "Retaining Wall Build", category: "Retaining Walls", tone: "from-safety-green/40 to-charcoal" },
  { title: "Site Grading Prep", category: "Grading", tone: "from-concrete to-charcoal" },
  { title: "Block Wall Construction", category: "Block Work", tone: "from-steel-blue to-charcoal" },
  { title: "Extended Driveway", category: "Driveways", tone: "from-safety-green/40 to-charcoal" },
  { title: "Covered Patio Slab", category: "Patios", tone: "from-steel-blue-bright to-charcoal" },
  { title: "Sidewalk Addition", category: "Slabs", tone: "from-concrete to-charcoal" },
];

export default function GalleryPage() {
  const [active, setActive] = useState("All");
  const filtered =
    active === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === active);

  return (
    <main>
      <PageHeader eyebrow="Our Work" title="PROJECT GALLERY" />

      <section className="py-16 bg-charcoal">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap gap-3 mb-14">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`font-mono text-xs uppercase tracking-widest px-5 py-2.5 border transition-colors ${
                  active === cat
                    ? "bg-safety-green text-caution-black border-safety-green"
                    : "border-concrete/40 text-concrete-light hover:border-safety-green hover:text-safety-green"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 0.05} y={24}>
                <div
                  className={`relative aspect-[4/3] bg-gradient-to-br ${p.tone} grain-overlay overflow-hidden group cursor-pointer`}
                >
                  <div className="absolute inset-0 flex items-center justify-center opacity-40 group-hover:opacity-70 transition-opacity">
                    <span className="font-mono text-xs uppercase tracking-widest text-off-white text-center px-4">
                      Photo Coming Soon
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-charcoal/85 px-4 py-3">
                    <p className="font-mono text-[11px] text-safety-green uppercase tracking-widest">
                      {p.category}
                    </p>
                    <p className="font-display text-lg">{p.title.toUpperCase()}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <p className="text-center text-concrete-light font-mono text-sm mt-14">
            Real project photos coming soon — this gallery updates as jobs wrap up.
          </p>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
