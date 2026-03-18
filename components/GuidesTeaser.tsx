"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Layers, Maximize2, Sparkles, BookText, ArrowRight } from "lucide-react";
import { fadeUp, CMYK, CMYK_TEXT } from "@/lib/constants";

const guides = [
  { href: "/guides/paper",       icon: Layers,    label: "Paper Types",          desc: "Gloss, silk, uncoated & more",       tag: "C" },
  { href: "/guides/sizes",       icon: Maximize2, label: "Print Sizes",          desc: "A0 to business card, explained",     tag: "M" },
  { href: "/guides/finishes",    icon: Sparkles,  label: "Finishing Techniques", desc: "Lamination, foil, spot UV & more",   tag: "Y" },
  { href: "/guides/terminology", icon: BookText,  label: "Terminology",          desc: "CMYK, DPI, bleed — decoded",         tag: "K" },
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
            className="text-[10px] uppercase tracking-[0.3em] text-[#CC0088] mb-4"
          >
            Knowledge Base
          </motion.p>
          <motion.h2
            variants={fadeUp} initial="hidden" whileInView="show"
            viewport={{ once: true }} custom={1}
            className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tight leading-none"
          >
            Print{" "}
            <em style={{ fontFamily: "'Times New Roman', Times, serif", fontStyle: "italic" }} className="text-[#CC0088]">
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

      {/* 4-card grid — each card gets a CMYK colour */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {guides.map((g, i) => {
          const Icon = g.icon;
          const bg = CMYK[i];
          const fg = CMYK_TEXT[i];
          return (
            <motion.div
              key={g.href}
              variants={fadeUp} initial="hidden" whileInView="show"
              viewport={{ once: true, margin: "-60px" }} custom={i * 0.1}
            >
              <Link
                href={g.href}
                className="group flex flex-col h-full overflow-hidden border border-zinc-800 hover:border-zinc-600 transition-colors"
              >
                {/* Coloured CMYK header block */}
                <div
                  className="flex items-end justify-between px-6 pt-8 pb-5"
                  style={{ background: bg }}
                >
                  <Icon size={28} strokeWidth={1.5} color={fg} />
                  <span
                    className="text-4xl font-black leading-none select-none"
                    style={{ color: fg, opacity: 0.25 }}
                  >
                    {g.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="bg-[#1a1a1a] flex flex-col gap-3 p-6 flex-1">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-400">{g.label}</p>
                  <p className="text-sm text-zinc-500 leading-relaxed">{g.desc}</p>
                  <ArrowRight
                    size={13}
                    className="mt-auto transition-all group-hover:translate-x-1"
                    style={{ color: bg }}
                  />
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
