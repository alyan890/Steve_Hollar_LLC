import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Concrete Project Gallery",
  description:
    "Photos of real concrete projects by Steve Hollar Concrete LLC: driveways, patios, slabs, block work, retaining walls and grading across Orange, Seminole & Lake Counties, FL.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
