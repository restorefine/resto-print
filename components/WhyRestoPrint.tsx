"use client";

import { motion } from "framer-motion";
import { reasons, fadeUp, CMYK } from "@/lib/constants";
import SectionLabel from "@/components/SectionLabel";

export default function WhyRestoPrint() {
  return (
    <section id="why-us" className="bg-[#f5f4f0] px-6 sm:px-14 lg:px-52 py-24">
      <SectionLabel num="02" label="Why Choose Us" />

      <motion.h2
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUp}
        className="text-4xl sm:text-6xl font-black uppercase tracking-tight mb-16 max-w-lg leading-none text-[#0f0f0f]"
      >
        Why<br />
        <span className="font-normal text-[#CC0088]" style={{ fontFamily: "'Times New Roman', Times, serif", fontStyle: "italic" }}>
          RestoPrint
        </span>
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
        {reasons.map((r, i) => (
          <motion.div
            key={r.num}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            custom={i}
            className="border-t border-[#e8e7e2] py-8 pr-8 group"
          >
            {/* CMYK-colored number badge */}
            <span
              className="inline-block text-[9px] font-black uppercase tracking-[0.3em] px-2 py-1 mb-3"
              style={{ background: CMYK[i % CMYK.length], color: i === 2 ? "#131313" : "#fff" }}
            >
              {r.num}
            </span>
            <h3 className="font-black uppercase tracking-tight text-xl text-[#0f0f0f] mb-3">{r.title}</h3>
            <p className="text-[#71717a] text-sm leading-relaxed max-w-xs">{r.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
