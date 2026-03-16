"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Layers, Maximize2, Sparkles, BookText, ArrowRight } from "lucide-react";
import { fadeUp } from "@/lib/constants";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const guides = [
  {
    href: "/guides/paper",
    icon: <Layers size={24} />,
    label: "Paper Types",
    title: "Paper & Stock Guide",
    desc: "Understand the difference between gloss, silk, uncoated, and specialist stocks — and when to use each one.",
  },
  {
    href: "/guides/sizes",
    icon: <Maximize2 size={24} />,
    label: "Print Sizes",
    title: "Size Guide",
    desc: "A complete reference for standard UK print sizes from A0 to business card, with common use cases.",
  },
  {
    href: "/guides/finishes",
    icon: <Sparkles size={24} />,
    label: "Finishing Techniques",
    title: "Finishing Guide",
    desc: "Explore lamination, foil stamping, spot UV, embossing, and every other finishing option we offer.",
  },
  {
    href: "/guides/terminology",
    icon: <BookText size={24} />,
    label: "Terminology",
    title: "Print Glossary",
    desc: "Bleed, CMYK, DPI, GSM — decoded. Everything you need to understand print specifications.",
  },
];

export default function GuidesPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white text-[#09090b] overflow-x-hidden">

        {/* Hero */}
        <section className="bg-[#131313] pt-40 pb-24 px-6 sm:px-14 lg:px-52 border-b border-zinc-800">
          <motion.p variants={fadeUp} initial="hidden" animate="show" custom={0}
            className="text-[10px] uppercase tracking-[0.3em] text-[#dc2626] mb-4">
            Knowledge Base
          </motion.p>
          <motion.h1 variants={fadeUp} initial="hidden" animate="show" custom={1}
            className="text-5xl sm:text-7xl font-black text-white uppercase tracking-tight leading-none mb-6">
            Print{" "}
            <em style={{ fontFamily: "'Times New Roman', Times, serif", fontStyle: "italic" }} className="text-[#dc2626]">
              Guides
            </em>
          </motion.h1>
          <motion.p variants={fadeUp} initial="hidden" animate="show" custom={2}
            className="text-zinc-400 text-base max-w-xl leading-relaxed">
            Everything you need to understand printing — from paper weights to finishing options — explained simply.
          </motion.p>
        </section>

        {/* Guide cards */}
        <section className="py-24 px-6 sm:px-14 lg:px-52">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-zinc-100">
            {guides.map((g, i) => (
              <motion.div
                key={g.href}
                variants={fadeUp} initial="hidden" whileInView="show"
                viewport={{ once: true, margin: "-60px" }} custom={i % 2}
              >
                <Link
                  href={g.href}
                  className="group bg-white flex flex-col gap-6 p-10 h-full hover:bg-zinc-50 transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div className="text-zinc-400 group-hover:text-[#dc2626] transition-colors">
                      {g.icon}
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-300">0{i + 1}</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-[#dc2626] mb-3">{g.label}</p>
                    <h2 className="text-2xl font-black uppercase tracking-tight mb-3 group-hover:text-[#dc2626] transition-colors">
                      {g.title}
                    </h2>
                    <p className="text-sm text-zinc-500 leading-relaxed">{g.desc}</p>
                  </div>
                  <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-zinc-400 group-hover:text-[#09090b] transition-colors">
                    Read Guide
                    <ArrowRight size={11} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
