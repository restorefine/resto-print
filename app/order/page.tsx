import type { Metadata } from "next";
import OrderClient from "./OrderClient";

const BASE = "https://www.restoprint.co.uk";

export const metadata: Metadata = {
  title: "Get a Quote — Order Print via WhatsApp",
  description:
    "Order affordable, high-quality printing in minutes. Tell us your requirements — service, paper, size, quantity and timeline — and we'll send you a quote via WhatsApp. Fast turnaround across the UK.",
  keywords: [
    "order printing UK",
    "get a print quote UK",
    "print quote online UK",
    "cheap printing quote UK",
    "order menus online UK",
    "order flyers online UK",
    "order business cards online UK",
    "WhatsApp printing order",
    "fast print order UK",
    "affordable print quote",
    "RestoPrint order",
    "print enquiry UK",
  ],
  openGraph: {
    title: "Get a Print Quote — RestoPrint UK",
    description:
      "Order print in minutes via WhatsApp. Choose your service, paper, size and quantity — we'll get back to you fast.",
    url: `${BASE}/order`,
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Get a Print Quote — RestoPrint UK",
    description: "Order affordable UK printing via WhatsApp. Fast, easy, professional.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: `${BASE}/order` },
};

export default function OrderPage() {
  return <OrderClient />;
}
