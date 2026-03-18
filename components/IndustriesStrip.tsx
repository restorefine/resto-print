"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeUp, INDUSTRIES, CMYK } from "@/lib/constants";

// 6 industries — cycle through CMYK then repeat first two
const IND_COLORS = [CMYK[0], CMYK[1], CMYK[2], CMYK[3], CMYK[0], CMYK[1]];

export default function IndustriesStrip() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section className="bg-white py-24 px-6 sm:px-14 lg:px-52 border-t border-[#e8e7e2]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
        <div>
          <motion.p
            variants={fadeUp} initial="hidden" whileInView="show"
            viewport={{ once: true }} custom={0}
            className="text-[10px] uppercase tracking-[0.3em] text-[#CC0088] mb-4"
          >
            Who We Work With
          </motion.p>
          <motion.h2
            variants={fadeUp} initial="hidden" whileInView="show"
            viewport={{ once: true }} custom={1}
            className="text-4xl sm:text-5xl font-black uppercase tracking-tight leading-none text-[#0f0f0f]"
          >
            Built for Every{" "}
            <em style={{ fontFamily: "'Times New Roman', Times, serif", fontStyle: "italic" }} className="text-[#CC0088]">
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
            className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-[#71717a] hover:text-[#0f0f0f] transition-colors"
          >
            View All Industries
            <ArrowRight size={11} />
          </Link>
        </motion.div>
      </div>

      {/* Industry cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {INDUSTRIES.map((ind, i) => {
          const color = IND_COLORS[i];
          const isHovered = hoveredIdx === i;

          return (
            <motion.div
              key={ind.slug}
              variants={fadeUp} initial="hidden" whileInView="show"
              viewport={{ once: true, margin: "-60px" }} custom={i * 0.1}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              <Link
                href="/industries"
                className="group flex flex-col gap-3 p-5 h-full min-h-40 border border-[#e8e7e2] transition-all"
                style={{
                  borderColor: isHovered ? color : undefined,
                  backgroundColor: isHovered ? `${color}0d` : "#fff",
                }}
              >
                {/* Colored number badge */}
                <span
                  className="text-[10px] font-black uppercase tracking-[0.25em] transition-colors"
                  style={{ color: isHovered ? color : "#d4d4d8" }}
                >
                  0{i + 1}
                </span>

                {/* Color dot — more prominent */}
                <div
                  className="w-3 h-3 rounded-full transition-all"
                  style={{
                    background: isHovered ? color : "#e4e4e7",
                    transform: isHovered ? "scale(1.5)" : "scale(1)",
                    boxShadow: isHovered ? `0 0 8px ${color}66` : "none",
                  }}
                />

                <p
                  className="text-sm font-black uppercase tracking-tight leading-tight transition-colors"
                  style={{ color: isHovered ? color : "#0f0f0f" }}
                >
                  {ind.title.split(" & ")[0]}
                </p>
                <p className="text-xs text-[#71717a] leading-snug line-clamp-2">
                  {ind.tagline}
                </p>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
