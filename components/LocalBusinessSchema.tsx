import { SITE } from "@/lib/site";

// JSON-LD that tells Google and AI assistants who the business is, where it is,
// and which areas it serves. Rendered once in the root layout.
export default function LocalBusinessSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "@id": `${SITE.url}/#business`,
    name: SITE.name,
    alternateName: SITE.shortName,
    url: SITE.url,
    logo: `${SITE.url}/logo.png`,
    image: `${SITE.url}/optimized/20251006_163431.webp`,
    description: SITE.description,
    slogan: SITE.slogan,
    telephone: SITE.phoneE164,
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.city,
      addressRegion: SITE.state,
      postalCode: SITE.zip,
      addressCountry: "US",
    },
    areaServed: SITE.counties.map((c) => ({
      "@type": "AdministrativeArea",
      name: `${c}, FL`,
    })),
    knowsAbout: SITE.services.map((s) => s.name),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Concrete services",
      itemListElement: SITE.services.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.name, description: s.desc },
      })),
    },
    sameAs: SITE.sameAs,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
