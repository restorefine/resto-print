"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import { fadeUp, FINISHES } from "@/lib/constants";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Base texture for each finish
const textureBg: Record<string, string> = {
  "Gloss Lamination":      "bg-gradient-to-br from-zinc-100 via-white to-zinc-300",
  "Matte Lamination":      "bg-gradient-to-br from-zinc-200 to-zinc-300",
  "Soft Touch Lamination": "bg-gradient-to-br from-zinc-300 to-zinc-400",
  "Spot UV":               "bg-gradient-to-br from-zinc-800 via-zinc-700 to-zinc-900",
  "Foil Stamping":         "bg-gradient-to-br from-yellow-200 via-amber-100 to-yellow-300",
  "Embossing":             "bg-zinc-100",
  "Die Cutting":           "bg-white",
  "Wipe-clean Coating":    "bg-gradient-to-br from-blue-50 to-sky-100",
};

// Shine gradient per finish — simulates the specific lamination/foil effect
const shineGradient: Record<string, string> = {
  "Gloss Lamination":
    "linear-gradient(105deg, transparent 38%, rgba(255,255,255,0.55) 46%, rgba(255,255,255,0.92) 50%, rgba(255,255,255,0.55) 54%, transparent 62%)",
  "Matte Lamination":
    "linear-gradient(105deg, transparent 42%, rgba(255,255,255,0.10) 49%, rgba(255,255,255,0.16) 51%, transparent 58%)",
  "Soft Touch Lamination":
    "linear-gradient(105deg, transparent 42%, rgba(255,220,180,0.15) 49%, rgba(255,230,200,0.22) 51%, transparent 58%)",
  "Spot UV":
    "linear-gradient(105deg, transparent 38%, rgba(255,255,255,0.6) 46%, rgba(255,255,255,0.98) 50%, rgba(255,255,255,0.6) 54%, transparent 62%)",
  "Foil Stamping":
    "linear-gradient(105deg, transparent 30%, rgba(255,200,0,0.3) 38%, rgba(255,255,255,0.85) 50%, rgba(180,140,255,0.4) 62%, transparent 70%)",
  "Embossing":
    "linear-gradient(105deg, transparent 42%, rgba(255,255,255,0.35) 49%, rgba(255,255,255,0.45) 51%, transparent 58%)",
  "Die Cutting":
    "linear-gradient(105deg, transparent 44%, rgba(200,200,200,0.25) 49%, rgba(220,220,220,0.3) 51%, transparent 56%)",
  "Wipe-clean Coating":
    "linear-gradient(105deg, transparent 38%, rgba(180,220,255,0.35) 46%, rgba(220,240,255,0.65) 50%, rgba(180,220,255,0.35) 54%, transparent 62%)",
};

// Extra overlay for embossing — a shadow-shift illusion
const extraOverlay: Record<string, string | null> = {
  "Embossing": "linear-gradient(135deg, rgba(255,255,255,0.6) 0%, transparent 40%, rgba(0,0,0,0.12) 100%)",
};

function FinishCard({ f, i }: { f: typeof FINISHES[number]; i: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      key={f.name}
      variants={fadeUp} initial="hidden" whileInView="show"
      viewport={{ once: true, margin: "-60px" }} custom={i % 2}
      className="bg-white border border-[#e8e7e2] hover:border-[#0f0f0f] transition-colors flex flex-col gap-6 p-8"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Texture preview — full width, tall */}
      <div
        className={`relative w-full h-36 rounded-sm overflow-hidden ${
          textureBg[f.name] ?? "bg-[#f5f4f0]"
        } ${f.name === "Die Cutting" ? "border-2 border-dashed border-[#e8e7e2]" : ""}`}
      >
        {/* Embossing raised-text illusion */}
        {f.name === "Embossing" && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              className="text-2xl font-black uppercase tracking-widest text-transparent select-none"
              style={{
                WebkitTextStroke: "1px rgba(0,0,0,0.15)",
                textShadow: "2px 2px 0 rgba(255,255,255,0.8), -1px -1px 0 rgba(0,0,0,0.1)",
                filter: "drop-shadow(0 1px 1px rgba(255,255,255,0.9))",
              }}
            >
              EMBOSS
            </span>
          </div>
        )}

        {/* Foil base metallic texture */}
        {f.name === "Foil Stamping" && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-black uppercase tracking-widest text-amber-600/60 select-none"
              style={{ textShadow: "0 1px 2px rgba(255,200,0,0.5), 0 -1px 2px rgba(255,255,255,0.8)" }}>
              FOIL
            </span>
          </div>
        )}

        {/* Spot UV — dark card with gloss patch */}
        {f.name === "Spot UV" && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-black uppercase tracking-widest text-white/20 select-none"
              style={{ textShadow: "0 0 12px rgba(255,255,255,0.5)" }}>
              SPOT UV
            </span>
          </div>
        )}

        {/* Die cut shape overlay */}
        {f.name === "Die Cutting" && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full border-2 border-dashed border-zinc-400 flex items-center justify-center">
              <div className="w-10 h-10 bg-zinc-100 rounded-full border border-zinc-300" />
            </div>
          </div>
        )}

        {/* Wipe-clean water droplets */}
        {f.name === "Wipe-clean Coating" && (
          <div className="absolute inset-0 flex items-center justify-center gap-4">
            {[16, 10, 14, 8].map((r, idx) => (
              <div key={idx}
                className="rounded-full bg-white/60 border border-blue-200/50"
                style={{ width: r * 2, height: r * 2 }} />
            ))}
          </div>
        )}

        {/* Extra static overlay (embossing shadow) */}
        {extraOverlay[f.name] && (
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: extraOverlay[f.name]! }}
          />
        )}

        {/* Shine sweep — always mounted, snaps back instantly when not hovered */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{ background: shineGradient[f.name] ?? shineGradient["Gloss Lamination"] }}
          animate={{ x: hovered ? "130%" : "-130%" }}
          transition={
            hovered
              ? { duration: 1.6, ease: [0.22, 0.61, 0.36, 1] }
              : { duration: 0 }
          }
        />
      </div>

      {/* Content */}
      <div>
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3 className="text-xl font-black uppercase tracking-tight">{f.name}</h3>
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#71717a] shrink-0 pt-1">0{i + 1}</span>
        </div>
        <p className="text-base text-[#71717a] leading-relaxed mb-5">{f.desc}</p>
        <div className="flex flex-col gap-2.5">
          <div className="flex items-start gap-3">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#CC0088] shrink-0 pt-0.5 min-w-12">Feel</span>
            <span className="text-sm text-[#71717a]">{f.feel}</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#CC0088] shrink-0 pt-0.5 min-w-12">Best For</span>
            <span className="text-sm text-[#71717a]">{f.bestFor}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function FinishesGuidePage() {
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
              { label: "Finishing Techniques" },
            ]} />
          </motion.div>
          <motion.p variants={fadeUp} initial="hidden" animate="show" custom={1}
            className="text-[10px] uppercase tracking-[0.3em] text-[#0099CC] mb-4">
            Guide · Finishing
          </motion.p>
          <motion.h1 variants={fadeUp} initial="hidden" animate="show" custom={2}
            className="text-5xl sm:text-7xl font-black text-[#0f0f0f] uppercase tracking-tight leading-none mb-6">
            Finishing{" "}
            <em style={{ fontFamily: "'Times New Roman', Times, serif", fontStyle: "italic" }} className="text-[#CC0088]">
              Techniques
            </em>
          </motion.h1>
          <motion.p variants={fadeUp} initial="hidden" animate="show" custom={3}
            className="text-[#71717a] text-base max-w-xl leading-relaxed">
            The right finish transforms a good print into an exceptional one. Hover each finish to see the effect in action.
          </motion.p>
        </section>

        {/* Finishes grid */}
        <section className="py-24 px-6 sm:px-14 lg:px-52">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {FINISHES.map((f, i) => (
              <FinishCard key={f.name} f={f} i={i} />
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#f5f4f0] py-16 px-6 sm:px-14 lg:px-52 border-t border-[#e8e7e2]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <p className="text-[#71717a] text-sm max-w-md">
              Unsure which finish suits your project? <strong className="text-[#0f0f0f]">Ask us — we&rsquo;ll guide you.</strong>
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
