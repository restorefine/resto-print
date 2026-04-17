import type { Metadata } from "next";
import PaperGuideClient from "./PaperGuideClient";

const BASE = "https://www.restoprint.co.uk";

export const metadata: Metadata = {
  title: "Paper Types Guide — Gloss, Silk, Matte, Uncoated & More",
  description:
    "Learn everything about print paper stocks: gloss, silk, matte, uncoated, recycled and specialist papers. Includes a full GSM weight guide so you can choose the right stock for every print job.",
  keywords: [
    "paper types printing UK",
    "gloss paper printing",
    "silk paper printing",
    "matte paper printing",
    "uncoated paper printing",
    "what is GSM paper",
    "paper weight guide UK",
    "print paper guide",
    "best paper for menus",
    "best paper for business cards",
    "best paper for flyers",
    "paper stock guide UK",
    "printing paper weights UK",
    "RestoPrint paper guide",
  ],
  openGraph: {
    title: "Paper Types Guide — RestoPrint UK",
    description:
      "Gloss, silk, matte, uncoated — a complete guide to print paper stocks and GSM weights. Know which paper is right for your job.",
    url: `${BASE}/guides/paper`,
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Paper Types Guide — RestoPrint UK",
    description: "A complete guide to print paper stocks and GSM weights for UK businesses.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: `${BASE}/guides/paper` },
};

export default function PaperGuidePage() {
  return <PaperGuideClient />;
}
