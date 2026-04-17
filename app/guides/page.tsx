import type { Metadata } from "next";
import GuidesClient from "./GuidesClient";

const BASE = "https://www.restoprint.co.uk";

export const metadata: Metadata = {
  title: "Print Guides — Paper Types, Sizes, Finishes & Terminology",
  description:
    "Free printing guides covering paper types and GSM, UK print sizes from A0 to business card, finishing techniques like lamination and foil, and a full print terminology glossary. Learn before you print.",
  keywords: [
    "print guides UK",
    "printing help UK",
    "paper types guide",
    "UK print sizes guide",
    "print finishing guide",
    "print terminology glossary",
    "what is GSM printing",
    "gloss vs matte paper",
    "A4 vs A5 print size",
    "lamination foil spot UV guide",
    "CMYK DPI bleed explained",
    "how to prepare print files UK",
    "printing knowledge base",
    "RestoPrint guides",
  ],
  openGraph: {
    title: "Print Guides — RestoPrint UK",
    description:
      "Free guides on paper types, print sizes, finishing techniques and terminology. Everything you need to know before ordering print.",
    url: `${BASE}/guides`,
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Print Guides — RestoPrint UK",
    description: "Paper types, print sizes, finishing techniques and print terminology — all explained simply.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: `${BASE}/guides` },
};

export default function GuidesPage() {
  return <GuidesClient />;
}
