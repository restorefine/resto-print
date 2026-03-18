"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import { fadeUp, PRINT_SIZES } from "@/lib/constants";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Real A-series mm dimensions
const aData: Record<string, { w: number; h: number }> = {
  A0: { w: 841, h: 1189 },
  A1: { w: 594, h: 841 },
  A2: { w: 420, h: 594 },
  A3: { w: 297, h: 420 },
  A4: { w: 210, h: 297 },
  A5: { w: 148, h: 210 },
  A6: { w: 105, h: 148 },
  A7: { w: 74,  h: 105 },
};

const MAX_H_PX = 240; // A0 rendered height
const LABEL_TOP  = 34; // px reserved above rectangle for width dimension
const LABEL_RIGHT = 44; // px reserved right of rectangle for height dimension

const toIn = (mm: number) => (mm / 25.4).toFixed(1);

// Component for a single paper size with dimension lines
function PaperRect({ name, i }: { name: string; i: number }) {
  const d = aData[name];
  if (!d) return null;

  const hPx  = Math.round((d.h / aData["A0"].h) * MAX_H_PX);
  const wPx  = Math.round((d.w / aData["A0"].h) * MAX_H_PX);
  const wIn  = toIn(d.w);
  const hIn  = toIn(d.h);
  const fontSize = Math.max(8, Math.min(wPx * 0.2, 18));
  const showHLabel = hPx >= 24;

  const totalW = wPx + LABEL_RIGHT;
  const totalH = hPx + LABEL_TOP;

  return (
    <motion.div
      variants={fadeUp} initial="hidden" whileInView="show"
      viewport={{ once: true }} custom={i * 0.12}
      className="flex flex-col items-start gap-3 shrink-0"
    >
      <div style={{ width: totalW, height: totalH }} className="relative">

        {/* ── Width dimension line ── */}
        {/* Label */}
        <span
          className="absolute text-[9px] font-mono text-[#71717a]"
          style={{ top: 0, left: 0, width: wPx, textAlign: "center" }}
        >
          {wIn}&Prime;
        </span>
        {/* Horizontal rule */}
        <div
          className="absolute bg-[#e8e7e2]"
          style={{ top: LABEL_TOP - 10, left: 0, width: wPx, height: 1 }}
        />
        {/* Left tick */}
        <div className="absolute bg-[#e8e7e2]" style={{ top: LABEL_TOP - 13, left: 0, width: 1, height: 7 }} />
        {/* Right tick */}
        <div className="absolute bg-[#e8e7e2]" style={{ top: LABEL_TOP - 13, left: wPx - 1, width: 1, height: 7 }} />

        {/* ── Rectangle ── */}
        <div
          className="absolute border-2 border-[#0f0f0f] bg-[#f5f4f0] flex items-center justify-center"
          style={{ top: LABEL_TOP, left: 0, width: wPx, height: hPx }}
        >
          <span className="font-black text-[#0f0f0f] uppercase tracking-tight select-none"
            style={{ fontSize }}>
            {name}
          </span>
        </div>

        {/* ── Height dimension line ── */}
        {/* Vertical rule */}
        <div
          className="absolute bg-[#e8e7e2]"
          style={{ top: LABEL_TOP, left: wPx + 10, width: 1, height: hPx }}
        />
        {/* Top tick */}
        <div className="absolute bg-[#e8e7e2]" style={{ top: LABEL_TOP, left: wPx + 7, width: 7, height: 1 }} />
        {/* Bottom tick */}
        <div className="absolute bg-[#e8e7e2]" style={{ top: LABEL_TOP + hPx - 1, left: wPx + 7, width: 7, height: 1 }} />
        {/* Label — only if tall enough */}
        {showHLabel && (
          <span
            className="absolute text-[9px] font-mono text-[#71717a]"
            style={{
              top: LABEL_TOP,
              left: wPx + 16,
              height: hPx,
              writingMode: "vertical-rl",
              display: "flex",
              alignItems: "center",
              whiteSpace: "nowrap",
              transform: "rotate(180deg)",
            }}
          >
            {hIn}&Prime;
          </span>
        )}
      </div>

      {/* Size name + inches below */}
      <div className="flex flex-col gap-0.5">
        <span className="text-[9px] uppercase tracking-[0.2em] text-[#71717a] font-medium">{name}</span>
        <span className="text-[9px] font-mono text-[#71717a]">{wIn} × {hIn}&Prime;</span>
      </div>
    </motion.div>
  );
}

export default function SizesGuidePage() {
  const aSizes = PRINT_SIZES.filter((s) => s.name.startsWith("A") && s.name.length <= 2);

  return (
    <>
      <Navbar />
      <main className="bg-white text-[#0f0f0f] overflow-x-hidden">

        {/* Hero */}
        <section className="bg-white pt-40 pb-16 px-6 sm:px-14 lg:px-52 border-b border-[#e8e7e2]">
          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0}>
            <Breadcrumb crumbs={[
              { label: "Home", href: "/" },
              { label: "Guides", href: "/guides" },
              { label: "Size Guide" },
            ]} />
          </motion.div>
          <motion.p variants={fadeUp} initial="hidden" animate="show" custom={1}
            className="text-[10px] uppercase tracking-[0.3em] text-[#0099CC] mb-4">
            Guide · Print Sizes
          </motion.p>
          <motion.h1 variants={fadeUp} initial="hidden" animate="show" custom={2}
            className="text-5xl sm:text-7xl font-black text-[#0f0f0f] uppercase tracking-tight leading-none mb-6">
            Size{" "}
            <em style={{ fontFamily: "'Times New Roman', Times, serif", fontStyle: "italic" }} className="text-[#CC0088]">
              Guide
            </em>
          </motion.h1>
          <motion.p variants={fadeUp} initial="hidden" animate="show" custom={3}
            className="text-[#71717a] text-base max-w-xl leading-relaxed">
            A complete reference for standard UK print sizes — with exact dimensions in inches and common applications.
          </motion.p>
        </section>

        {/* A-series visual comparison */}
        <section className="py-20 px-6 sm:px-14 lg:px-52 border-b border-[#e8e7e2] overflow-x-auto bg-[#f5f4f0]">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#0099CC] mb-3">A-Series</p>
            <h2 className="text-2xl font-black uppercase tracking-tight mb-16">Visual Comparison</h2>
          </motion.div>
          <div className="flex items-end gap-6 pb-6 min-w-max">
            {aSizes.map((s, i) => (
              <PaperRect key={s.name} name={s.name} i={i} />
            ))}
          </div>
        </section>

        {/* Full sizes table — in inches */}
        <section className="py-20 px-6 sm:px-14 lg:px-52 border-b border-[#e8e7e2]">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#0099CC] mb-8">All Sizes</p>

          <div className="hidden sm:grid grid-cols-4 gap-4 pb-4 border-b border-[#e8e7e2] mb-2">
            {["Size", "Inches (W × H)", "Millimetres", "Common Use"].map((h) => (
              <span key={h} className="text-[10px] uppercase tracking-[0.25em] text-[#71717a]">{h}</span>
            ))}
          </div>

          {PRINT_SIZES.map((s, i) => {
            // Parse mm dimensions if available from aData or extract from dimensions string
            const known = aData[s.name];
            let inchStr = "—";
            if (known) {
              inchStr = `${toIn(known.w)} × ${toIn(known.h)}"`;
            }
            return (
              <motion.div
                key={s.name}
                variants={fadeUp} initial="hidden" whileInView="show"
                viewport={{ once: true, margin: "-40px" }} custom={i * 0.15}
                className="grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-4 py-5 border-b border-[#e8e7e2] last:border-0"
              >
                <div>
                  <p className="sm:hidden text-[10px] uppercase tracking-[0.25em] text-[#71717a] mb-1">Size</p>
                  <p className="font-black text-base uppercase tracking-tight">{s.name}</p>
                </div>
                <div>
                  <p className="sm:hidden text-[10px] uppercase tracking-[0.25em] text-[#71717a] mb-1">Inches</p>
                  <p className="text-sm font-mono text-[#71717a]">{inchStr}</p>
                </div>
                <div>
                  <p className="sm:hidden text-[10px] uppercase tracking-[0.25em] text-[#71717a] mb-1">Millimetres</p>
                  <p className="text-sm font-mono text-[#71717a]">{s.dimensions}</p>
                </div>
                <div>
                  <p className="sm:hidden text-[10px] uppercase tracking-[0.25em] text-[#71717a] mb-1">Common Use</p>
                  <p className="text-sm text-[#71717a]">{s.common}</p>
                </div>
              </motion.div>
            );
          })}
        </section>

        {/* CTA */}
        <section className="bg-[#f5f4f0] py-16 px-6 sm:px-14 lg:px-52 border-t border-[#e8e7e2]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <p className="text-[#71717a] text-sm max-w-md">
              Need a custom size? <strong className="text-[#0f0f0f]">We print to any dimension.</strong>
            </p>
            <Link href="/order" className="shrink-0 font-black uppercase tracking-widest text-[11px] px-8 py-4 bg-[#0f0f0f] text-white hover:bg-zinc-800 transition-colors">
              Get a Quote
            </Link>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
