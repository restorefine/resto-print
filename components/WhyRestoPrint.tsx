"use client";

import { motion } from "framer-motion";
import { reasons, fadeUp } from "@/lib/constants";
import SectionLabel from "@/components/SectionLabel";

export default function WhyRestoPrint() {
  return (
    <section id="why-us" className="bg-[#131313] px-6 sm:px-14 lg:px-52 py-24">
      <SectionLabel num="02" label="Why Choose Us" light />

      <motion.h2
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUp}
        className="text-4xl sm:text-6xl font-black uppercase tracking-tight mb-16 max-w-lg leading-none text-white"
      >
        Why<br />
        <span className="font-normal italic text-[#dc2626]" style={{ fontFamily: "var(--font-playfair)" }}>
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
            className="border-t border-zinc-800 py-8 pr-8"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#dc2626] font-bold">{r.num}</span>
            <h3 className="font-black uppercase tracking-tight text-xl text-white mt-2 mb-3">{r.title}</h3>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">{r.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
