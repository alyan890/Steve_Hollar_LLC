import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const anton = localFont({
  src: "../public/fonts/Anton-Regular.ttf",
  variable: "--font-anton",
  weight: "400",
  display: "swap",
});

const workSans = localFont({
  src: "../public/fonts/WorkSans-Variable.ttf",
  variable: "--font-work-sans",
  display: "swap",
});

const jetbrains = localFont({
  src: "../public/fonts/JetBrainsMono-Variable.ttf",
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://stevehollarconcrete.com"),
  title: "Steve Hollar Concrete LLC | Florida Concrete Contractor",
  description:
    "Family-owned, 3rd generation concrete contractor serving all your concrete needs across FL. Slabs, driveways, patios, block work, grading & more. Licensed & insured. Free estimates.",
  openGraph: {
    title: "Steve Hollar Concrete LLC | Florida Concrete Contractor",
    description:
      "Family-owned, 3rd generation concrete contractor serving all your concrete needs across FL. Slabs, driveways, patios, block work, grading & more. Licensed & insured. Free estimates.",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Steve Hollar Concrete LLC Logo",
      },
    ],
    type: "website",
    locale: "en_US",
    siteName: "Steve Hollar Concrete LLC",
  },
  twitter: {
    card: "summary_large_image",
    title: "Steve Hollar Concrete LLC | Florida Concrete Contractor",
    description:
      "Family-owned, 3rd generation concrete contractor serving all your concrete needs across FL.",
    images: ["/logo.png"],
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${anton.variable} ${workSans.variable} ${jetbrains.variable} antialiased`}
      >
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
