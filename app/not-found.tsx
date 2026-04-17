import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Page Not Found — 404",
  description: "The page you're looking for doesn't exist. Return to RestoPrint and explore our affordable UK printing services.",
  robots: { index: false, follow: false },
};

const CMYK = ["#00BCCD", "#E4007C", "#F5E400", "#09090b"];

export default function NotFound() {
  return (
    <div className="relative min-h-screen bg-white text-[#09090b] overflow-hidden flex flex-col">

      {/* CMYK top bar */}
      <div className="flex h-1 w-full">
        {CMYK.map((c) => (
          <div key={c} className="flex-1" style={{ background: c }} />
        ))}
      </div>

      {/* Navbar */}
      <header className="flex items-center justify-between px-6 sm:px-14 lg:px-52 h-16 border-b border-[#e8e7e2]">
        <Link href="/">
          <Image
            src="/resto-print-logo-black.png"
            alt="RestoPrint"
            width={140}
            height={36}
            className="h-8 w-auto object-contain"
            priority
          />
        </Link>
        <Link
          href="/"
          className="text-[10px] uppercase tracking-[0.3em] text-[#71717a] hover:text-[#0f0f0f] transition-colors"
        >
          ← Home
        </Link>
      </header>

      {/* Main content */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 text-center py-24">

        {/* 404 display */}
        <div className="flex items-end gap-1 mb-10 select-none">
          {"404".split("").map((char, i) => (
            <span
              key={i}
              className="text-[120px] sm:text-[180px] font-black leading-none tracking-tighter"
              style={{ color: CMYK[i % 4] }}
            >
              {char}
            </span>
          ))}
        </div>

        <p className="text-[10px] uppercase tracking-[0.3em] text-[#71717a] mb-4">
          Page Not Found
        </p>
        <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight leading-tight mb-6 max-w-lg">
          This page has been{" "}
          <em
            className="text-[#CC0088]"
            style={{ fontFamily: "'Times New Roman', Times, serif", fontStyle: "italic" }}
          >
            trimmed.
          </em>
        </h1>
        <p className="text-[#71717a] text-base max-w-md leading-relaxed mb-12">
          The page you&rsquo;re looking for doesn&rsquo;t exist or has been moved. Let&rsquo;s get you back on press.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/"
            className="font-black uppercase tracking-widest text-[11px] px-8 py-4 bg-[#0f0f0f] text-white hover:bg-zinc-700 transition-colors"
          >
            Back to Home
          </Link>
          <Link
            href="/services"
            className="font-black uppercase tracking-widest text-[11px] px-8 py-4 border border-[#0f0f0f] text-[#0f0f0f] hover:bg-[#f5f4f0] transition-colors"
          >
            View Services
          </Link>
          <Link
            href="/order"
            className="font-black uppercase tracking-widest text-[11px] px-8 py-4 bg-[#CC0088] text-white hover:bg-[#a3006b] transition-colors"
          >
            Get a Quote
          </Link>
        </div>

        {/* Quick nav */}
        <div className="mt-16 flex flex-wrap justify-center gap-x-8 gap-y-2">
          {[
            { label: "Services", href: "/services" },
            { label: "Industries", href: "/industries" },
            { label: "Guides", href: "/guides" },
            { label: "Order Now", href: "/order" },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[10px] uppercase tracking-[0.3em] text-[#71717a] hover:text-[#CC0088] transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </main>

      {/* CMYK bottom bar */}
      <div className="flex h-1 w-full">
        {[...CMYK].reverse().map((c) => (
          <div key={c} className="flex-1" style={{ background: c }} />
        ))}
      </div>
    </div>
  );
}
