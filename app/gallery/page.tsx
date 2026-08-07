"use client";

import Image from "next/image";
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
  { title: "Concrete Driveway Project", category: "Driveways", tone: "from-steel-blue to-charcoal", image: "/optimized/20250627_103248.webp" },
  { title: "Outdoor Patio Concrete Work", category: "Patios", tone: "from-concrete to-charcoal", image: "/optimized/20260702_083108.webp" },
  { title: "Concrete Slab Installation", category: "Slabs", tone: "from-steel-blue-bright to-charcoal", image: "/optimized/20251006_163431.webp" },
  { title: "Concrete & Masonry Project", category: "Retaining Walls", tone: "from-safety-green/40 to-charcoal", image: "/optimized/20260723_141440.webp" },
  { title: "Site Preparation Project", category: "Grading", tone: "from-concrete to-charcoal", image: "/optimized/20260527_130331.webp" },
  { title: "Masonry & Concrete Work", category: "Block Work", tone: "from-steel-blue to-charcoal", image: "/optimized/20260604_101016.webp" },
  { title: "Driveway & Access Project", category: "Driveways", tone: "from-safety-green/40 to-charcoal", image: "/optimized/20260702_083108.webp" },
  { title: "Outdoor Concrete Patio Project", category: "Patios", tone: "from-steel-blue-bright to-charcoal", image: "/optimized/20260605_094536.webp" },
  { title: "Concrete Walkway Project", category: "Slabs", tone: "from-concrete to-charcoal", image: "/optimized/20210922_154818.webp" },
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
                  className={`relative aspect-4/3 bg-linear-to-br ${p.tone} grain-overlay overflow-hidden group cursor-pointer`}
                >
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-charcoal/85 via-charcoal/20 to-transparent" />
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
            Project photos are now featured throughout the gallery as jobs are completed.
          </p>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
