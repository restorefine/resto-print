import type { Metadata } from "next";
import { SERVICE_DETAILS } from "@/lib/constants";
import ServiceDetailClient from "./ServiceDetailClient";

const BASE = "https://www.restoprint.co.uk";

export function generateStaticParams() {
  return Object.keys(SERVICE_DETAILS).map((slug) => ({ slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const s = SERVICE_DETAILS[slug];
  if (!s) return {};

  const title = `${s.title} UK — Affordable & Fast | RestoPrint`;
  const description = `${s.desc} Available in multiple sizes and finishes. Fast turnaround across the UK. Get a free quote via WhatsApp.`;

  return {
    title,
    description,
    keywords: [
      `${s.title.toLowerCase()} UK`,
      `${s.title.toLowerCase()} for restaurants`,
      `affordable ${s.title.toLowerCase()}`,
      `cheap ${s.title.toLowerCase()} UK`,
      `fast ${s.title.toLowerCase()} UK`,
      `next day ${s.title.toLowerCase()} UK`,
      `custom ${s.title.toLowerCase()} UK`,
      `online ${s.title.toLowerCase()} UK`,
      ...s.industries.map((i) => `${s.title.toLowerCase()} for ${i.toLowerCase()}`),
      "print services UK",
      "printing company UK",
      "affordable printing UK",
      "RestoPrint",
    ],
    openGraph: {
      title,
      description,
      url: `${BASE}/services/${slug}`,
      images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    },
    alternates: { canonical: `${BASE}/services/${slug}` },
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <ServiceDetailClient slug={slug} />;
}
