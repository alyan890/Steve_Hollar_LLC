// REAL customer reviews only. Copy them word for word from Google, BBB or Angi,
// with the customer's first name + last initial and the city if known.
// Never invent or edit reviews: fake testimonials break the FTC rule on reviews
// and Google's guidelines. While this list is empty, the site shows links to the
// real review profiles instead.
export type Review = {
  quote: string;
  name: string; // e.g. "Mike T."
  city?: string; // e.g. "Apopka"
  source: "Google" | "BBB" | "Angi";
  rating: number;
};

export const REVIEWS: Review[] = [];
