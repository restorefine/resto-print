import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FloatingCTA from "@/components/FloatingCTA";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "900"],
});

const BASE = "https://www.restoprint.co.uk";

export const metadata: Metadata = {
  metadataBase: new URL(BASE),
  title: {
    default: "RestoPrint — Affordable Restaurant & Business Printing UK",
    template: "%s | RestoPrint",
  },
  description:
    "High-quality, affordable printing for restaurants and businesses across the UK. Menu printing, flyers, business cards, posters, banners, stickers and more. Fast turnaround. Order via WhatsApp.",
  keywords: [
    "restaurant printing UK",
    "menu printing UK",
    "flyer printing UK",
    "leaflet printing UK",
    "business card printing UK",
    "poster printing UK",
    "banner printing UK",
    "sticker printing UK",
    "label printing UK",
    "brochure printing UK",
    "affordable printing UK",
    "cheap printing UK",
    "fast printing UK",
    "same day printing UK",
    "next day printing UK",
    "online printing UK",
    "print services UK",
    "commercial printing UK",
    "print shop UK",
    "custom printing UK",
    "restaurant menu printing",
    "takeaway menu printing",
    "cafe menu printing",
    "hotel printing services",
    "retail printing UK",
    "branded stationery UK",
    "promotional printing UK",
    "packaging printing UK",
    "print and design UK",
    "printing company UK",
    "printing branding UK",
    "business printing UK",
    "marketing print materials",
    "hospitality printing UK",
    "food business printing",
    "print for restaurants",
    "print for small business",
    "WhatsApp printing order",
    "RestoPrint",
  ],
  authors: [{ name: "RestoPrint", url: BASE }],
  creator: "RestoPrint",
  publisher: "RestoPrint",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: BASE,
    siteName: "RestoPrint",
    title: "RestoPrint — Affordable Restaurant & Business Printing UK",
    description:
      "High-quality printing for restaurants, cafés, hotels and businesses. Menu printing, flyers, business cards and more. Fast turnaround across the UK.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "RestoPrint — UK Printing for Restaurants & Businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RestoPrint — Affordable Restaurant & Business Printing UK",
    description:
      "High-quality printing for restaurants, cafés, hotels and businesses across the UK.",
    images: ["/og-image.png"],
  },
  category: "Printing Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": BASE,
              name: "RestoPrint",
              url: BASE,
              logo: `${BASE}/resto-print-logo.png`,
              description:
                "Affordable, high-quality printing for restaurants and businesses across the UK.",
              telephone: "+447700000000",
              email: "hello@restoprint.co.uk",
              address: {
                "@type": "PostalAddress",
                addressCountry: "GB",
              },
              areaServed: {
                "@type": "Country",
                name: "United Kingdom",
              },
              serviceType: [
                "Menu Printing",
                "Flyer Printing",
                "Business Card Printing",
                "Poster Printing",
                "Banner Printing",
                "Sticker Printing",
                "Brochure Printing",
                "Stationery Printing",
              ],
              priceRange: "££",
              sameAs: [],
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} font-(family-name:--font-inter) antialiased`}
        style={{ "--font-playfair": "'Times New Roman', Times, serif" } as React.CSSProperties}
      >
        {children}
        <FloatingCTA />
      </body>
    </html>
  );
}
