"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Layers, Maximize2, Sparkles, BookText, ArrowRight } from "lucide-react";
import { fadeUp, CMYK, CMYK_TEXT } from "@/lib/constants";
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

export default function GuidesClient() {
  return (
    <>
      <Navbar />
      <main className="bg-white text-[#0f0f0f] overflow-x-hidden">

        {/* Hero */}
        <section className="bg-white pt-40 pb-16 px-6 sm:px-14 lg:px-52 border-b border-[#e8e7e2]">
          <motion.p variants={fadeUp} initial="hidden" animate="show" custom={0}
            className="text-[10px] uppercase tracking-[0.3em] text-[#0099CC] mb-4">
            Knowledge Base
          </motion.p>
          <motion.h1 variants={fadeUp} initial="hidden" animate="show" custom={1}
            className="text-5xl sm:text-7xl font-black text-[#0f0f0f] uppercase tracking-tight leading-none mb-6">
            Print{" "}
            <em style={{ fontFamily: "'Times New Roman', Times, serif", fontStyle: "italic" }} className="text-[#CC0088]">
              Guides
            </em>
          </motion.h1>
          <motion.p variants={fadeUp} initial="hidden" animate="show" custom={2}
            className="text-[#71717a] text-base max-w-xl leading-relaxed">
            Everything you need to understand printing — from paper weights to finishing options — explained simply.
          </motion.p>
        </section>

        {/* Guide cards — CMYK header blocks */}
        <section className="py-24 px-6 sm:px-14 lg:px-52">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {guides.map((g, i) => (
              <motion.div
                key={g.href}
                variants={fadeUp} initial="hidden" whileInView="show"
                viewport={{ once: true, margin: "-60px" }} custom={i % 2}
              >
                <Link
                  href={g.href}
                  className="group bg-white border border-[#e8e7e2] flex flex-col h-full hover:border-[#0f0f0f] transition-colors overflow-hidden"
                >
                  {/* CMYK colour header block */}
                  <div
                    className="flex items-center justify-between px-8 py-6"
                    style={{ backgroundColor: CMYK[i % 4] }}
                  >
                    <div style={{ color: CMYK_TEXT[i % 4] }}>
                      {g.icon}
                    </div>
                    <span
                      className="text-[10px] uppercase tracking-[0.3em] font-black"
                      style={{ color: CMYK_TEXT[i % 4] }}
                    >
                      0{i + 1}
                    </span>
                  </div>

                  {/* Card content */}
                  <div className="flex flex-col gap-4 p-8 flex-1">
                    <div className="flex-1">
                      <p className="text-[10px] uppercase tracking-[0.3em] text-[#0099CC] mb-3">{g.label}</p>
                      <h2 className="text-2xl font-black uppercase tracking-tight mb-3 group-hover:text-[#CC0088] transition-colors">
                        {g.title}
                      </h2>
                      <p className="text-sm text-[#71717a] leading-relaxed">{g.desc}</p>
                    </div>
                    <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-[#71717a] group-hover:text-[#0f0f0f] transition-colors">
                      Read Guide
                      <ArrowRight size={11} className="group-hover:translate-x-1 transition-transform" />
                    </div>
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
