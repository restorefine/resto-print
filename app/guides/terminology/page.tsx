"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";
import { ArrowLeft } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import { fadeUp, TERMINOLOGY } from "@/lib/constants";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ─── Term illustrations ────────────────────────────────────────────────────────
const Illustrations: Record<string, () => React.ReactElement> = {
  Bleed: () => (
    <svg viewBox="0 0 72 72" fill="none" className="w-full h-full">
      {/* Bleed area */}
      <rect x="4" y="4" width="64" height="64" stroke="#dc2626" strokeWidth="1.5" strokeDasharray="4 2" />
      {/* Trim line */}
      <rect x="12" y="12" width="48" height="48" stroke="#09090b" strokeWidth="1.5" />
      {/* Safe zone */}
      <rect x="20" y="20" width="32" height="32" fill="#f4f4f5" stroke="#a1a1aa" strokeWidth="1" strokeDasharray="3 2" />
      {/* Labels */}
      <text x="6" y="10" fontSize="5" fill="#dc2626" fontFamily="monospace">BLEED</text>
      <text x="26" y="39" fontSize="5" fill="#71717a" fontFamily="monospace" textAnchor="middle">SAFE</text>
    </svg>
  ),

  CMYK: () => (
    <svg viewBox="0 0 72 72" fill="none" className="w-full h-full">
      <rect x="4" y="4" width="28" height="28" fill="#00BCCD" rx="2" />
      <text x="18" y="23" fontSize="8" fill="white" textAnchor="middle" fontWeight="bold">C</text>
      <rect x="40" y="4" width="28" height="28" fill="#E4007C" rx="2" />
      <text x="54" y="23" fontSize="8" fill="white" textAnchor="middle" fontWeight="bold">M</text>
      <rect x="4" y="40" width="28" height="28" fill="#F5E400" rx="2" />
      <text x="18" y="59" fontSize="8" fill="#09090b" textAnchor="middle" fontWeight="bold">Y</text>
      <rect x="40" y="40" width="28" height="28" fill="#09090b" rx="2" />
      <text x="54" y="59" fontSize="8" fill="white" textAnchor="middle" fontWeight="bold">K</text>
    </svg>
  ),

  "Crop Marks": () => (
    <svg viewBox="0 0 72 72" fill="none" className="w-full h-full">
      <rect x="16" y="16" width="40" height="40" stroke="#09090b" strokeWidth="1.5" />
      {/* TL */}
      <line x1="4" y1="16" x2="12" y2="16" stroke="#09090b" strokeWidth="1.5" />
      <line x1="16" y1="4" x2="16" y2="12" stroke="#09090b" strokeWidth="1.5" />
      {/* TR */}
      <line x1="60" y1="16" x2="68" y2="16" stroke="#09090b" strokeWidth="1.5" />
      <line x1="56" y1="4" x2="56" y2="12" stroke="#09090b" strokeWidth="1.5" />
      {/* BL */}
      <line x1="4" y1="56" x2="12" y2="56" stroke="#09090b" strokeWidth="1.5" />
      <line x1="16" y1="60" x2="16" y2="68" stroke="#09090b" strokeWidth="1.5" />
      {/* BR */}
      <line x1="60" y1="56" x2="68" y2="56" stroke="#09090b" strokeWidth="1.5" />
      <line x1="56" y1="60" x2="56" y2="68" stroke="#09090b" strokeWidth="1.5" />
    </svg>
  ),

  DPI: () => (
    <svg viewBox="0 0 72 72" fill="none" className="w-full h-full">
      {/* Low DPI — sparse dots */}
      <rect x="4" y="4" width="30" height="30" fill="#f4f4f5" stroke="#d4d4d8" strokeWidth="1" />
      {[0,1,2].map(r => [0,1,2].map(c => (
        <circle key={`l${r}${c}`} cx={10 + c * 9} cy={10 + r * 9} r="2.5" fill="#71717a" />
      )))}
      <text x="19" y="42" fontSize="5.5" fill="#dc2626" textAnchor="middle" fontFamily="monospace">LOW DPI</text>

      {/* High DPI — dense dots */}
      <rect x="38" y="4" width="30" height="30" fill="#f4f4f5" stroke="#d4d4d8" strokeWidth="1" />
      {[0,1,2,3,4].map(r => [0,1,2,3,4].map(c => (
        <circle key={`h${r}${c}`} cx={41 + c * 5.5} cy={7 + r * 5.5} r="1.3" fill="#09090b" />
      )))}
      <text x="53" y="42" fontSize="5.5" fill="#dc2626" textAnchor="middle" fontFamily="monospace">HIGH DPI</text>
    </svg>
  ),

  GSM: () => (
    <svg viewBox="0 0 72 72" fill="none" className="w-full h-full">
      {[
        { y: 58, h: 4,  label: "80gsm",  fill: "#e4e4e7" },
        { y: 50, h: 6,  label: "120gsm", fill: "#d4d4d8" },
        { y: 40, h: 8,  label: "170gsm", fill: "#a1a1aa" },
        { y: 28, h: 10, label: "300gsm", fill: "#71717a" },
        { y: 14, h: 12, label: "400gsm", fill: "#3f3f46" },
      ].map((b) => (
        <g key={b.label}>
          <rect x="8" y={b.y} width="40" height={b.h} fill={b.fill} />
          <line x1="8" y1={b.y} x2="48" y2={b.y} stroke="white" strokeWidth="0.5" />
          <text x="52" y={b.y + b.h * 0.65} fontSize="5" fill="#71717a" fontFamily="monospace">{b.label}</text>
        </g>
      ))}
    </svg>
  ),

  Pantone: () => (
    <svg viewBox="0 0 72 72" fill="none" className="w-full h-full">
      {[
        "#dc2626","#ea580c","#ca8a04","#16a34a","#0284c7","#7c3aed","#db2777","#09090b"
      ].map((c, i) => (
        <g key={c}>
          <rect x={4 + i * 8} y="8" width="7" height="50" fill={c} />
          <text
            x={7.5 + i * 8} y="65" fontSize="4" fill="#71717a"
            textAnchor="middle" fontFamily="monospace"
            transform={`rotate(-90, ${7.5 + i * 8}, 65)`}
          >{100 + i * 10}</text>
        </g>
      ))}
    </svg>
  ),

  RGB: () => (
    <svg viewBox="0 0 72 72" fill="none" className="w-full h-full">
      <circle cx="36" cy="24" r="18" fill="#ef4444" opacity="0.75" />
      <circle cx="24" cy="46" r="18" fill="#22c55e" opacity="0.75" />
      <circle cx="48" cy="46" r="18" fill="#3b82f6" opacity="0.75" />
      <text x="36" y="10" fontSize="5" fill="#dc2626" textAnchor="middle" fontWeight="bold">R</text>
      <text x="16" y="66" fontSize="5" fill="#16a34a" textAnchor="middle" fontWeight="bold">G</text>
      <text x="56" y="66" fontSize="5" fill="#2563eb" textAnchor="middle" fontWeight="bold">B</text>
    </svg>
  ),

  "Safe Zone": () => (
    <svg viewBox="0 0 72 72" fill="none" className="w-full h-full">
      <rect x="4" y="4" width="64" height="64" stroke="#dc2626" strokeWidth="1.5" strokeDasharray="4 2" />
      <rect x="12" y="12" width="48" height="48" stroke="#09090b" strokeWidth="1.5" />
      <rect x="20" y="20" width="32" height="32" fill="#f4f4f5" stroke="#a1a1aa" strokeWidth="1" strokeDasharray="3 2" />
      <text x="36" y="39" fontSize="5" fill="#71717a" textAnchor="middle" fontFamily="monospace">SAFE</text>
      <text x="5" y="10" fontSize="4.5" fill="#dc2626" fontFamily="monospace">BLEED</text>
      <text x="13" y="26" fontSize="4.5" fill="#09090b" fontFamily="monospace">TRIM</text>
    </svg>
  ),

  "Trim Size": () => (
    <svg viewBox="0 0 72 72" fill="none" className="w-full h-full">
      {/* Document */}
      <rect x="12" y="8" width="48" height="56" fill="#f4f4f5" stroke="#d4d4d8" strokeWidth="1.5" />
      {/* Cut lines */}
      <line x1="12" y1="36" x2="60" y2="36" stroke="#dc2626" strokeWidth="1.5" strokeDasharray="4 2" />
      {/* Scissors icon approximate */}
      <circle cx="8" cy="33" r="3" fill="none" stroke="#dc2626" strokeWidth="1.5" />
      <circle cx="8" cy="39" r="3" fill="none" stroke="#dc2626" strokeWidth="1.5" />
      <line x1="10" y1="34.5" x2="60" y2="36" stroke="#dc2626" strokeWidth="1" opacity="0.4" />
      <line x1="10" y1="37.5" x2="60" y2="36" stroke="#dc2626" strokeWidth="1" opacity="0.4" />
      {/* Dimension arrows */}
      <line x1="12" y1="70" x2="60" y2="70" stroke="#09090b" strokeWidth="1" />
      <polygon points="12,68 12,72 8,70" fill="#09090b" />
      <polygon points="60,68 60,72 64,70" fill="#09090b" />
    </svg>
  ),

  "Saddle Stitch": () => (
    <svg viewBox="0 0 72 72" fill="none" className="w-full h-full">
      {/* Left page */}
      <rect x="8" y="10" width="26" height="52" fill="#e4e4e7" stroke="#d4d4d8" strokeWidth="1" />
      {/* Right page */}
      <rect x="38" y="10" width="26" height="52" fill="#f4f4f5" stroke="#d4d4d8" strokeWidth="1" />
      {/* Spine fold */}
      <line x1="36" y1="10" x2="36" y2="62" stroke="#09090b" strokeWidth="2" />
      {/* Staples */}
      <rect x="33" y="22" width="6" height="3" fill="#71717a" rx="1" />
      <rect x="33" y="46" width="6" height="3" fill="#71717a" rx="1" />
      {/* Text lines simulation */}
      <line x1="13" y1="24" x2="30" y2="24" stroke="#d4d4d8" strokeWidth="1.5" />
      <line x1="13" y1="30" x2="30" y2="30" stroke="#d4d4d8" strokeWidth="1.5" />
      <line x1="13" y1="36" x2="30" y2="36" stroke="#d4d4d8" strokeWidth="1.5" />
    </svg>
  ),

  "Perfect Binding": () => (
    <svg viewBox="0 0 72 72" fill="none" className="w-full h-full">
      {/* Book body */}
      <rect x="16" y="8" width="44" height="56" fill="#e4e4e7" stroke="#d4d4d8" strokeWidth="1" />
      {/* Spine */}
      <rect x="12" y="8" width="6" height="56" fill="#09090b" />
      {/* Pages lines */}
      <line x1="18" y1="9" x2="18" y2="63" stroke="#a1a1aa" strokeWidth="0.5" />
      <line x1="20" y1="9" x2="20" y2="63" stroke="#a1a1aa" strokeWidth="0.5" />
      <line x1="22" y1="9" x2="22" y2="63" stroke="#a1a1aa" strokeWidth="0.5" />
      {/* Cover text lines */}
      <line x1="28" y1="28" x2="54" y2="28" stroke="#d4d4d8" strokeWidth="2" />
      <line x1="28" y1="35" x2="46" y2="35" stroke="#d4d4d8" strokeWidth="1.5" />
    </svg>
  ),

  Overprint: () => (
    <svg viewBox="0 0 72 72" fill="none" className="w-full h-full">
      <rect x="8" y="20" width="36" height="32" fill="#dc2626" rx="2" />
      <rect x="28" y="20" width="36" height="32" fill="#09090b" rx="2" opacity="0.85" />
      {/* Overlap area highlight */}
      <rect x="28" y="20" width="16" height="32" fill="#7f1d1d" rx="0" />
      <text x="26" y="40" fontSize="5.5" fill="white" textAnchor="middle" fontFamily="monospace">INK 1</text>
      <text x="50" y="40" fontSize="5.5" fill="white" textAnchor="middle" fontFamily="monospace">INK 2</text>
    </svg>
  ),

  Proof: () => (
    <svg viewBox="0 0 72 72" fill="none" className="w-full h-full">
      {/* Document */}
      <rect x="12" y="6" width="38" height="50" fill="#f4f4f5" stroke="#d4d4d8" strokeWidth="1.5" rx="2" />
      {/* Folded corner */}
      <polyline points="38,6 50,6 50,18 38,6" fill="#d4d4d8" />
      {/* Text lines */}
      <line x1="18" y1="24" x2="44" y2="24" stroke="#d4d4d8" strokeWidth="2" />
      <line x1="18" y1="31" x2="44" y2="31" stroke="#d4d4d8" strokeWidth="1.5" />
      <line x1="18" y1="38" x2="36" y2="38" stroke="#d4d4d8" strokeWidth="1.5" />
      {/* Checkmark stamp */}
      <circle cx="50" cy="52" r="13" fill="#16a34a" />
      <polyline points="43,52 48,58 57,46" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  ),

  Vector: () => (
    <svg viewBox="0 0 72 72" fill="none" className="w-full h-full">
      {/* Smooth bezier curve */}
      <path d="M 8 56 C 20 10, 52 10, 64 56" stroke="#09090b" strokeWidth="2" fill="none" />
      {/* Control point handles */}
      <line x1="8" y1="56" x2="20" y2="10" stroke="#dc2626" strokeWidth="1" strokeDasharray="3 2" />
      <line x1="64" y1="56" x2="52" y2="10" stroke="#dc2626" strokeWidth="1" strokeDasharray="3 2" />
      {/* Anchor points */}
      <rect x="5" y="53" width="6" height="6" fill="white" stroke="#09090b" strokeWidth="1.5" />
      <rect x="61" y="53" width="6" height="6" fill="white" stroke="#09090b" strokeWidth="1.5" />
      {/* Control points */}
      <circle cx="20" cy="10" r="3" fill="#dc2626" />
      <circle cx="52" cy="10" r="3" fill="#dc2626" />
      <text x="36" y="68" fontSize="5" fill="#71717a" textAnchor="middle" fontFamily="monospace">SCALABLE</text>
    </svg>
  ),

  Raster: () => (
    <svg viewBox="0 0 72 72" fill="none" className="w-full h-full">
      {/* Pixel grid — 8×8 */}
      {Array.from({ length: 8 }).map((_, r) =>
        Array.from({ length: 8 }).map((_, c) => {
          const colors = ["#09090b","#3f3f46","#71717a","#e4e4e7"];
          const fill = colors[Math.abs((r * 3 + c * 5) % 4) === 0 ? 0 : (r + c) % 3 === 0 ? 2 : (r * c) % 2 === 0 ? 3 : 1];
          return (
            <rect key={`${r}${c}`} x={8 + c * 7} y={8 + r * 7} width="7" height="7" fill={fill} />
          );
        })
      )}
      {/* Magnify circle overlay */}
      <circle cx="52" cy="52" r="16" fill="none" stroke="#dc2626" strokeWidth="2" />
      <line x1="63" y1="63" x2="70" y2="70" stroke="#dc2626" strokeWidth="2.5" strokeLinecap="round" />
      <text x="36" y="70" fontSize="5" fill="#dc2626" textAnchor="middle" fontFamily="monospace">PIXELATED</text>
    </svg>
  ),
};

// Fallback illustration for terms without a custom one
function DefaultIllustration({ term }: { term: string }) {
  const initials = term.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase();
  return (
    <svg viewBox="0 0 72 72" fill="none" className="w-full h-full">
      <rect x="4" y="4" width="64" height="64" stroke="#e4e4e7" strokeWidth="1.5" />
      <text x="36" y="42" fontSize="20" fill="#d4d4d8" textAnchor="middle" fontWeight="900" fontFamily="sans-serif">
        {initials}
      </text>
    </svg>
  );
}

export default function TerminologyPage() {
  const grouped = TERMINOLOGY.reduce<Record<string, typeof TERMINOLOGY>>((acc, t) => {
    const letter = t.term[0].toUpperCase();
    if (!acc[letter]) acc[letter] = [];
    acc[letter].push(t);
    return acc;
  }, {});
  const letters = Object.keys(grouped).sort();

  return (
    <>
      <Navbar />
      <main className="bg-white text-[#09090b] overflow-x-hidden">

        {/* Hero */}
        <section className="bg-[#131313] pt-40 pb-24 px-6 sm:px-14 lg:px-52 border-b border-zinc-800">
          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0}>
            <Breadcrumb crumbs={[
              { label: "Home", href: "/" },
              { label: "Guides", href: "/guides" },
              { label: "Print Terminology" },
            ]} />
          </motion.div>
          <motion.p variants={fadeUp} initial="hidden" animate="show" custom={1}
            className="text-[10px] uppercase tracking-[0.3em] text-[#dc2626] mb-4">
            Guide · Glossary
          </motion.p>
          <motion.h1 variants={fadeUp} initial="hidden" animate="show" custom={2}
            className="text-5xl sm:text-7xl font-black text-white uppercase tracking-tight leading-none mb-6">
            Print{" "}
            <em style={{ fontFamily: "'Times New Roman', Times, serif", fontStyle: "italic" }} className="text-[#dc2626]">
              Terminology
            </em>
          </motion.h1>
          <motion.p variants={fadeUp} initial="hidden" animate="show" custom={3}
            className="text-zinc-400 text-base max-w-xl leading-relaxed">
            Bleed, CMYK, DPI, GSM — every print term you&rsquo;ll ever encounter, explained in plain English with a visual.
          </motion.p>
          {/* Letter index */}
          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={4}
            className="flex flex-wrap gap-2 mt-10">
            {letters.map((l) => (
              <a key={l} href={`#letter-${l}`}
                className="w-8 h-8 flex items-center justify-center text-[10px] font-black uppercase border border-zinc-700 text-zinc-400 hover:border-white hover:text-white transition-colors">
                {l}
              </a>
            ))}
          </motion.div>
        </section>

        {/* Glossary — card grid */}
        <section className="py-20 px-6 sm:px-14 lg:px-52">
          {letters.map((letter) => (
            <div key={letter} id={`letter-${letter}`} className="mb-16">
              {/* Letter divider */}
              <motion.div
                variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
                className="flex items-center gap-4 mb-8"
              >
                <span className="text-5xl font-black text-zinc-100 select-none leading-none">{letter}</span>
                <div className="flex-1 h-px bg-zinc-100" />
              </motion.div>

              {/* Cards grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {grouped[letter].map((t, i) => {
                  const Illus = Illustrations[t.term];
                  return (
                    <motion.div
                      key={t.term}
                      variants={fadeUp} initial="hidden" whileInView="show"
                      viewport={{ once: true, margin: "-40px" }} custom={i * 0.15}
                      className="border border-zinc-100 flex flex-col gap-5 p-6 hover:border-zinc-300 transition-colors"
                    >
                      {/* Illustration box */}
                      <div className="w-36 h-36 shrink-0">
                        {Illus ? <Illus /> : null}
                      </div>
                      {/* Term + definition */}
                      <div>
                        <p className="font-black text-base uppercase tracking-tight text-[#dc2626] mb-2">{t.term}</p>
                        <p className="text-base text-zinc-500 leading-relaxed">{t.def}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </section>

        {/* CTA */}
        <section className="bg-[#131313] py-16 px-6 sm:px-14 lg:px-52 border-t border-zinc-800">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <p className="text-zinc-400 text-sm max-w-md">
              Still confused? <strong className="text-white">Just ask us — we speak plain English.</strong>
            </p>
            <Link href="/order" className="shrink-0 font-black uppercase tracking-widest text-[11px] px-8 py-4 bg-white text-[#09090b] hover:bg-zinc-200 transition-colors">
              Get a Quote
            </Link>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
