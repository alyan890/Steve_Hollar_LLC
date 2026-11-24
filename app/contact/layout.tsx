import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Concrete Estimates in Apopka, FL",
  description:
    "Request a free concrete estimate from Steve Hollar Concrete LLC in Apopka, FL. Call 321-229-1012. Serving Orange, Seminole & Lake Counties.",
  alternates: { canonical: "/contact" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
