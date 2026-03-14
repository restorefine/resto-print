"use client";

import { motion } from "framer-motion";
import { steps, fadeUp, WHATSAPP_URL } from "@/lib/constants";
import SectionLabel from "@/components/SectionLabel";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="px-6 sm:px-14 lg:px-52 py-24 border-t border-zinc-100">
      <SectionLabel num="03" label="The Process" />

      <motion.h2
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUp}
        className="text-4xl sm:text-6xl font-black uppercase tracking-tight mb-16 max-w-lg leading-none"
      >
        How to<br />
        <span className="font-normal italic text-[#dc2626]" style={{ fontFamily: "var(--font-playfair)" }}>
          Order
        </span>
      </motion.h2>

      <div className="flex flex-col">
        {steps.map((step, i) => (
          <motion.div
            key={step.num}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            custom={i}
            className="flex gap-8 items-start border-t border-zinc-100 py-10"
          >
            <span className="text-5xl font-black text-zinc-100 leading-none min-w-12 tabular-nums select-none">
              {step.num}
            </span>
            <div>
              <h3 className="font-black uppercase tracking-tight text-xl mb-2">{step.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed max-w-md">{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        className="mt-16 flex justify-center"
      >
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-[#09090b] text-white font-black uppercase tracking-widest text-sm px-10 py-5 hover:bg-zinc-800 transition-colors"
        >
          <WhatsAppIcon />
          Start Your Order
        </a>
      </motion.div>
    </section>
  );
}
