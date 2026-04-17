import type { Metadata } from "next";
import IndustriesClient from "./IndustriesClient";

const BASE = "https://www.restoprint.co.uk";

export const metadata: Metadata = {
  title: "Industries We Serve — Restaurants, Hotels, Retail & More",
  description:
    "RestoPrint delivers professional printing for restaurants, cafés, hotels, retail, healthcare, beauty salons, gyms and more. Tailored print solutions for every UK industry — menus, flyers, branding and beyond.",
  keywords: [
    "printing for restaurants UK",
    "printing for cafes UK",
    "printing for hotels UK",
    "printing for retail UK",
    "printing for salons UK",
    "printing for gyms UK",
    "printing for healthcare UK",
    "printing for takeaways UK",
    "hospitality printing UK",
    "food industry printing UK",
    "restaurant branding printing",
    "menu printing for restaurants",
    "flyers for restaurants",
    "business printing UK",
    "industry printing services",
    "printing company UK",
    "affordable printing for small business",
    "RestoPrint industries",
  ],
  openGraph: {
    title: "Industries We Serve — RestoPrint UK",
    description:
      "From restaurants and hotels to retail and healthcare — RestoPrint delivers professional print for every UK industry.",
    url: `${BASE}/industries`,
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Industries We Serve — RestoPrint UK",
    description: "Professional printing for restaurants, cafés, hotels, retail and more across the UK.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: `${BASE}/industries` },
};

export default function IndustriesPage() {
  return <IndustriesClient />;
}
