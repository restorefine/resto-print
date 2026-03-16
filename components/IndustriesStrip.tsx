"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeUp, INDUSTRIES } from "@/lib/constants";

export default function IndustriesStrip() {
  return (
    <section className="bg-white py-24 px-6 sm:px-14 lg:px-52 border-t border-zinc-100">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
        <div>
          <motion.p
            variants={fadeUp} initial="hidden" whileInView="show"
            viewport={{ once: true }} custom={0}
            className="text-[10px] uppercase tracking-[0.3em] text-[#dc2626] mb-4"
          >
            Who We Work With
          </motion.p>
          <motion.h2
            variants={fadeUp} initial="hidden" whileInView="show"
            viewport={{ once: true }} custom={1}
            className="text-4xl sm:text-5xl font-black uppercase tracking-tight leading-none"
          >
            Built for Every{" "}
            <em style={{ fontFamily: "'Times New Roman', Times, serif", fontStyle: "italic" }} className="text-[#dc2626]">
              Industry
            </em>
          </motion.h2>
        </div>
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="show"
          viewport={{ once: true }} custom={2}
        >
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-zinc-500 hover:text-[#09090b] transition-colors"
          >
            View All Industries
            <ArrowRight size={11} />
          </Link>
        </motion.div>
      </div>

      {/* Horizontal scroll strip */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-zinc-100">
        {INDUSTRIES.map((ind, i) => (
          <motion.div
            key={ind.slug}
            variants={fadeUp} initial="hidden" whileInView="show"
            viewport={{ once: true, margin: "-60px" }} custom={i * 0.1}
          >
            <Link
              href="/industries"
              className="group bg-white flex flex-col gap-3 p-6 h-full hover:bg-zinc-50 transition-colors"
            >
              <span className="text-[10px] uppercase tracking-[0.25em] text-zinc-300 group-hover:text-[#dc2626] transition-colors">
                0{i + 1}
              </span>
              <p className="text-sm font-black uppercase tracking-tight leading-tight group-hover:text-[#dc2626] transition-colors">
                {ind.title.split(" & ")[0]}
              </p>
              <p className="text-xs text-zinc-400 leading-snug line-clamp-2">
                {ind.tagline}
              </p>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
