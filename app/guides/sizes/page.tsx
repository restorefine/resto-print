import type { Metadata } from "next";
import SizesGuideClient from "./SizesGuideClient";

const BASE = "https://www.restoprint.co.uk";

export const metadata: Metadata = {
  title: "UK Print Size Guide — A0 to Business Card Dimensions",
  description:
    "Complete reference for standard UK print sizes. A-series paper dimensions from A0 to A7, DL envelopes, business cards and more — with exact measurements in millimetres and inches plus common print uses.",
  keywords: [
    "UK print sizes",
    "A4 size printing",
    "A5 size printing",
    "A3 size printing",
    "A0 A1 A2 print sizes UK",
    "business card size UK",
    "DL print size",
    "print size guide UK",
    "paper dimensions UK",
    "print size in mm UK",
    "print size in inches UK",
    "what size flyer UK",
    "standard UK print sizes",
    "RestoPrint size guide",
  ],
  openGraph: {
    title: "UK Print Size Guide — RestoPrint",
    description:
      "A0 to business card — every standard UK print size with exact millimetre and inch dimensions and common uses.",
    url: `${BASE}/guides/sizes`,
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "UK Print Size Guide — RestoPrint",
    description: "Every standard UK print size with mm and inch dimensions — from A0 posters to business cards.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: `${BASE}/guides/sizes` },
};

export default function SizesGuidePage() {
  return <SizesGuideClient />;
}
