import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "900"],
});


export const metadata: Metadata = {
  title: "RestoPrint — Affordable Printing Solutions",
  description:
    "High-quality printing for restaurants and businesses. Menu printing, flyers, business cards, stickers, posters and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-[family-name:var(--font-inter)] antialiased`} style={{ "--font-playfair": "'Times New Roman', Times, serif" } as React.CSSProperties}>
        {children}
      </body>
    </html>
  );
}
