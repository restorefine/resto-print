"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Breadcrumb from "@/components/Breadcrumb";
import { fadeUp, PAPER_TYPES } from "@/lib/constants";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PaperGuidePage() {
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
              { label: "Paper Types" },
            ]} />
          </motion.div>
          <motion.p variants={fadeUp} initial="hidden" animate="show" custom={1}
            className="text-[10px] uppercase tracking-[0.3em] text-[#dc2626] mb-4">
            Guide · Paper & Stock
          </motion.p>
          <motion.h1 variants={fadeUp} initial="hidden" animate="show" custom={2}
            className="text-5xl sm:text-7xl font-black text-white uppercase tracking-tight leading-none mb-6">
            Paper{" "}
            <em style={{ fontFamily: "'Times New Roman', Times, serif", fontStyle: "italic" }} className="text-[#dc2626]">
              Types
            </em>
          </motion.h1>
          <motion.p variants={fadeUp} initial="hidden" animate="show" custom={3}
            className="text-zinc-400 text-base max-w-xl leading-relaxed">
            Choosing the right paper stock is fundamental to the success of any print job. Here&rsquo;s a breakdown of every stock we offer.
          </motion.p>
        </section>

        {/* GSM explainer */}
        <section className="py-16 px-6 sm:px-14 lg:px-52 border-b border-zinc-100 bg-zinc-50">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#dc2626] mb-4">What is GSM?</p>
            <p className="text-sm text-zinc-600 max-w-2xl leading-relaxed">
              <strong className="text-[#09090b]">GSM (Grams per Square Metre)</strong> is the standard measure of paper weight. The higher the GSM, the heavier and thicker the paper. A typical office printer uses 80gsm paper. Business cards are usually 350–400gsm. Understanding GSM helps you choose the right weight for the right job.
            </p>
          </motion.div>
          {/* Visual GSM scale */}
          <div className="mt-10 flex items-end gap-1 flex-wrap">
            {[80, 100, 120, 130, 170, 200, 300, 350, 400].map((g, i) => (
              <div key={g} className="flex flex-col items-center gap-2">
                <div
                  className="bg-[#09090b] w-10"
                  style={{ height: `${8 + i * 8}px` }}
                />
                <span className="text-[9px] text-zinc-500 font-mono">{g}</span>
              </div>
            ))}
            <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 ml-4 mb-1">gsm →</span>
          </div>
        </section>

        {/* Paper types table */}
        <section className="py-20 px-6 sm:px-14 lg:px-52">
          <div className="hidden sm:grid grid-cols-5 gap-4 pb-4 border-b border-zinc-200 mb-2">
            {["Stock", "GSM Range", "Feel", "Best For", "Not For"].map((h) => (
              <span key={h} className="text-[10px] uppercase tracking-[0.25em] text-zinc-400">{h}</span>
            ))}
          </div>
          {PAPER_TYPES.map((p, i) => (
            <motion.div
              key={p.name}
              variants={fadeUp} initial="hidden" whileInView="show"
              viewport={{ once: true, margin: "-40px" }} custom={i * 0.3}
              className="grid grid-cols-1 sm:grid-cols-5 gap-2 sm:gap-4 py-5 border-b border-zinc-100 last:border-0"
            >
              <div>
                <p className="sm:hidden text-[10px] uppercase tracking-[0.25em] text-zinc-400 mb-1">Stock</p>
                <p className="font-black text-base uppercase tracking-tight">{p.name}</p>
              </div>
              <div>
                <p className="sm:hidden text-[10px] uppercase tracking-[0.25em] text-zinc-400 mb-1">GSM</p>
                <p className="text-sm font-mono text-zinc-600">{p.gsm}</p>
              </div>
              <div>
                <p className="sm:hidden text-[10px] uppercase tracking-[0.25em] text-zinc-400 mb-1">Feel</p>
                <p className="text-sm text-zinc-600">{p.feel}</p>
              </div>
              <div>
                <p className="sm:hidden text-[10px] uppercase tracking-[0.25em] text-zinc-400 mb-1">Best For</p>
                <p className="text-sm text-zinc-600">{p.bestFor}</p>
              </div>
              <div>
                <p className="sm:hidden text-[10px] uppercase tracking-[0.25em] text-zinc-400 mb-1">Not For</p>
                <p className="text-sm text-zinc-400">{p.notFor}</p>
              </div>
            </motion.div>
          ))}
        </section>

        {/* CTA */}
        <section className="bg-[#131313] py-16 px-6 sm:px-14 lg:px-52 border-t border-zinc-800">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <p className="text-zinc-400 text-sm max-w-md">
              Not sure which paper is right for your project? <strong className="text-white">We&rsquo;ll advise you.</strong>
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
