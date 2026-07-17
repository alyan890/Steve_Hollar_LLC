import ScrollVideoHero from "@/components/ScrollVideoHero";
import ServicesStrip from "@/components/ServicesStrip";
import AboutTeaser from "@/components/AboutTeaser";
import GalleryPreview from "@/components/GalleryPreview";
import TestimonialsPreview from "@/components/TestimonialsPreview";
import CtaBand from "@/components/CtaBand";

export default function Home() {
  return (
    <main>
      <ScrollVideoHero />
      <ServicesStrip />
      <AboutTeaser />
      <GalleryPreview />
      <TestimonialsPreview />
      <CtaBand />
    </main>
  );
}
