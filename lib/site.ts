// Single source of truth for business details (NAP). Keep these identical to the
// Google Business Profile, BBB, Angi and every other listing.

export const SITE = {
  name: "Steve Hollar Concrete LLC",
  shortName: "Steve Hollar Concrete",
  // Canonical host. Make sure the host (Vercel/Netlify/etc.) 301-redirects the
  // non-www version to this one.
  url: "https://www.stevehollarconcrete.com",
  phone: "321-229-1012",
  phoneE164: "+13212291012",
  email: "steveh@stevehollarconcretellc.com",
  city: "Apopka",
  state: "FL",
  zip: "32712",
  counties: ["Orange County", "Seminole County", "Lake County"],
  serviceAreaText: "Orange, Seminole & Lake Counties",
  slogan: "When you're done with the rest, Hollar for the best!",
  description:
    "Family-owned, 3rd generation concrete contractor based in Apopka, FL, serving Orange, Seminole & Lake Counties. Driveways, slabs, patios, sidewalks, block work, retaining walls & grading. Licensed & insured. Free estimates.",
  // TODO: replace with the short review link from Google Business Profile
  // (Business Profile > "Ask for reviews" > copy link, e.g. https://g.page/r/XXXX/review).
  reviewUrl:
    "https://www.google.com/search?q=steve+hollar+concrete+llc+reviews",
  // Public profiles that describe the same business (used in schema `sameAs`).
  // Add the Google Business Profile, BBB profile, Facebook, etc. when available.
  sameAs: [
    "https://angi.com/companylist/us/fl/apopka/steve-hollar-inc-reviews-7595868.htm",
  ],
  services: [
    { name: "Concrete Slabs", desc: "Foundations and footers poured right and built to last." },
    { name: "Concrete Driveways", desc: "Durable driveways built to withstand the test of time." },
    { name: "Concrete Patios", desc: "Patios built on a solid, properly prepared base." },
    { name: "Sidewalks & Walkways", desc: "Clean, code-compliant walkways, residential and commercial." },
    { name: "Site Grading", desc: "Site prep, grading and cleanup to get your site right." },
    { name: "Additions", desc: "Concrete work for home and building additions." },
    { name: "Block Work", desc: "Solid block construction for walls and structures." },
    { name: "Retaining Walls", desc: "Built to hold ground and look good doing it." },
  ],
} as const;

export const absoluteUrl = (path = "/") => `${SITE.url}${path === "/" ? "" : path}`;
