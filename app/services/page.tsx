import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

const BASE = "https://www.restoprint.co.uk";

export const metadata: Metadata = {
  title: "All Print Services — Menus, Flyers, Business Cards & More",
  description:
    "Explore RestoPrint's complete range of UK printing services. Menu printing, flyers, business cards, posters, banners, stickers, brochures, packaging and promotional items — all at affordable prices with fast turnaround.",
  keywords: [
    "print services UK",
    "menu printing UK",
    "flyer printing UK",
    "business card printing UK",
    "poster printing UK",
    "banner printing UK",
    "sticker printing UK",
    "brochure printing UK",
    "packaging printing UK",
    "promotional printing UK",
    "stationery printing UK",
    "leaflet printing UK",
    "affordable printing UK",
    "fast printing UK",
    "restaurant printing services",
    "business printing UK",
    "printing company UK",
    "online printing UK",
    "cheap printing UK",
    "RestoPrint services",
  ],
  openGraph: {
    title: "All Print Services — RestoPrint UK",
    description:
      "Every print product your business needs — menus, flyers, business cards, banners, stickers and more. Affordable, fast, high quality.",
    url: `${BASE}/services`,
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "All Print Services — RestoPrint UK",
    description: "Menus, flyers, business cards, banners and more. Affordable UK printing with fast turnaround.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: `${BASE}/services` },
};

export default function ServicesPage() {
  return <ServicesClient />;
}
