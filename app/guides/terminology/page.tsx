import type { Metadata } from "next";
import TerminologyGuideClient from "./TerminologyGuideClient";

const BASE = "https://www.restoprint.co.uk";

export const metadata: Metadata = {
  title: "Print Glossary — CMYK, DPI, GSM, Bleed, Crop Marks & More",
  description:
    "Decode print industry terminology with our illustrated glossary. CMYK, DPI, GSM, bleed, safe zone, trim size, crop marks, spot UV, vector, raster, overprint — every print term explained in plain English.",
  keywords: [
    "print terminology UK",
    "print glossary UK",
    "what is CMYK printing",
    "what is DPI in printing",
    "what is bleed in printing",
    "what is GSM paper",
    "crop marks explained",
    "trim size printing",
    "safe zone printing",
    "vector vs raster printing",
    "print terms explained",
    "printing jargon UK",
    "how to prepare print files",
    "RestoPrint terminology guide",
  ],
  openGraph: {
    title: "Print Terminology Glossary — RestoPrint UK",
    description:
      "CMYK, DPI, GSM, bleed, crop marks — every print term explained in plain English with visual illustrations.",
    url: `${BASE}/guides/terminology`,
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Print Terminology Glossary — RestoPrint UK",
    description: "Every print term you'll ever need — CMYK, DPI, bleed, safe zone and more — explained simply.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: `${BASE}/guides/terminology` },
};

export default function TerminologyPage() {
  return <TerminologyGuideClient />;
}
