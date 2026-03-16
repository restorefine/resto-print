"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Layers, Maximize2, Sparkles, BookText, ArrowRight } from "lucide-react";
import { fadeUp } from "@/lib/constants";

const guides = [
  { href: "/guides/paper",       icon: <Layers size={18} />,    label: "Paper Types",          desc: "Gloss, silk, uncoated & more" },
  { href: "/guides/sizes",       icon: <Maximize2 size={18} />, label: "Print Sizes",          desc: "A0 to business card, explained" },
  { href: "/guides/finishes",    icon: <Sparkles size={18} />,  label: "Finishing Techniques", desc: "Lamination, foil, spot UV & more" },
  { href: "/guides/terminology", icon: <BookText size={18} />,  label: "Terminology",          desc: "CMYK, DPI, bleed — decoded" },
];

export default function GuidesTeaser() {
  return (
    <section className="bg-[#131313] py-24 px-6 sm:px-14 lg:px-52 border-t border-zinc-800">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
        <div>
          <motion.p
            variants={fadeUp} initial="hidden" whileInView="show"
            viewport={{ once: true }} custom={0}
            className="text-[10px] uppercase tracking-[0.3em] text-[#dc2626] mb-4"
          >
            Knowledge Base
          </motion.p>
          <motion.h2
            variants={fadeUp} initial="hidden" whileInView="show"
            viewport={{ once: true }} custom={1}
            className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tight leading-none"
          >
            Print{" "}
            <em style={{ fontFamily: "'Times New Roman', Times, serif", fontStyle: "italic" }} className="text-[#dc2626]">
              Guides
            </em>
          </motion.h2>
        </div>
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={2}>
          <Link
            href="/guides"
            className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-zinc-500 hover:text-white transition-colors"
          >
            View All Guides
            <ArrowRight size={11} />
          </Link>
        </motion.div>
      </div>

      {/* 2×2 grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-800">
        {guides.map((g, i) => (
          <motion.div
            key={g.href}
            variants={fadeUp} initial="hidden" whileInView="show"
            viewport={{ once: true, margin: "-60px" }} custom={i * 0.1}
          >
            <Link
              href={g.href}
              className="group bg-[#131313] flex flex-col gap-4 p-8 h-full hover:bg-zinc-900 transition-colors"
            >
              <div className="text-zinc-600 group-hover:text-[#dc2626] transition-colors">
                {g.icon}
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-500 mb-2">{g.label}</p>
                <p className="text-sm text-zinc-400 leading-relaxed">{g.desc}</p>
              </div>
              <ArrowRight size={13} className="text-zinc-700 group-hover:text-[#dc2626] group-hover:translate-x-1 transition-all mt-auto" />
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
