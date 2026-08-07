import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

const PLACEHOLDER_TILES = [
  { label: "Concrete Driveway", tone: "from-steel-blue to-charcoal", image: "/optimized/20250627_103248.webp" },
  { label: "Outdoor Patio", tone: "from-concrete to-charcoal", image: "/optimized/20251028_132956.webp" },
  { label: "Concrete & Masonry", tone: "from-safety-green/40 to-charcoal", image: "/optimized/20260723_141440.webp" },
  { label: "Site Preparation", tone: "from-steel-blue-bright to-charcoal", image: "/optimized/20260527_130331.webp" },
  { label: "Masonry Work", tone: "from-concrete to-charcoal", image: "/optimized/20260604_101016.webp" },
  { label: "Concrete Walkway", tone: "from-safety-green/40 to-charcoal", image: "/optimized/20210922_154818.webp" },
];

export default function GalleryPreview() {
  return (
    <section className="bg-charcoal-soft py-24">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal className="flex flex-wrap items-end justify-between gap-4 mb-14">
          <div>
            <p className="font-mono text-safety-green uppercase tracking-widest text-sm mb-2">
              Our Work
            </p>
            <h2 className="font-display text-4xl md:text-6xl">
              BUILT ON THE GROUND
            </h2>
          </div>
          <Link
            href="/gallery"
            className="font-mono uppercase tracking-wider text-sm border-2 border-off-white px-6 py-3 hover:border-safety-green hover:text-safety-green transition-colors"
          >
            View Full Gallery
          </Link>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {PLACEHOLDER_TILES.map((tile, i) => (
            <ScrollReveal key={tile.label} delay={i * 0.06} y={24}>
              <div
                className={`relative aspect-4/3 bg-linear-to-br ${tile.tone} grain-overlay overflow-hidden group cursor-pointer`}
              >
                <Image
                  src={tile.image}
                  alt={tile.label}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-charcoal/85 via-charcoal/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 bg-charcoal/80 px-4 py-3 translate-y-full group-hover:translate-y-0 transition-transform">
                  <p className="font-display text-lg">{tile.label.toUpperCase()}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
