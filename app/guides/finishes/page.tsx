import type { Metadata } from "next";
import FinishesGuideClient from "./FinishesGuideClient";

const BASE = "https://www.restoprint.co.uk";

export const metadata: Metadata = {
  title: "Print Finishing Guide — Lamination, Foil, Spot UV, Embossing & More",
  description:
    "Explore every print finishing technique available in the UK: gloss lamination, matte lamination, soft touch, spot UV, foil stamping, embossing, die cutting, and wipe-clean coating. Interactive previews included.",
  keywords: [
    "print finishing UK",
    "lamination printing UK",
    "gloss lamination UK",
    "matte lamination UK",
    "soft touch lamination UK",
    "spot UV printing UK",
    "foil stamping UK",
    "embossing printing UK",
    "die cutting UK",
    "wipe clean coating printing",
    "print finishes explained",
    "premium print finishes UK",
    "print finishing guide",
    "RestoPrint finishes guide",
  ],
  openGraph: {
    title: "Print Finishing Guide — RestoPrint UK",
    description:
      "Lamination, spot UV, foil stamping, embossing — every print finishing technique explained with interactive previews.",
    url: `${BASE}/guides/finishes`,
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Print Finishing Guide — RestoPrint UK",
    description: "Every print finishing technique explained: lamination, foil, spot UV, embossing and more.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: `${BASE}/guides/finishes` },
};

export default function FinishesGuidePage() {
  return <FinishesGuideClient />;
}
