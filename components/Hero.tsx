"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { WHATSAPP_URL, fadeUp } from "@/lib/constants";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center text-center bg-[#131313] px-6 pt-36 pb-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <motion.div
        className="relative z-10 max-w-3xl mx-auto"
        initial="hidden"
        animate="show"
        variants={{ show: { transition: { staggerChildren: 0.1 } } }}
      >
        {/* Logo */}
        <motion.div variants={fadeUp} custom={0} className="mb-8 flex items-center justify-center">
          <Image
            src="/resto-print-logo.png"
            alt="RestoPrint"
            width={180}
            height={48}
            className="h-12 w-auto object-contain"
            priority
          />
        </motion.div>

        <motion.p
          variants={fadeUp}
          custom={1}
          className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 mb-4"
        >
          Printing Services · UK
        </motion.p>

        <motion.h1
          variants={fadeUp}
          custom={2}
          className="text-5xl sm:text-7xl font-black uppercase tracking-tight text-white leading-[0.92] mb-6"
        >
          Affordable<br />
          <span className="text-[#dc2626] italic font-normal" style={{ fontFamily: "'Times New Roman', Times, serif" }}>Printing</span><br />
          Solutions
        </motion.h1>

        <motion.p
          variants={fadeUp}
          custom={3}
          className="text-[#dc2626] text-xl sm:text-2xl mb-4 italic"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          High-quality printing for restaurants and businesses.
        </motion.p>

        <motion.p
          variants={fadeUp}
          custom={4}
          className="text-zinc-500 text-sm sm:text-base mb-10 max-w-md mx-auto"
        >
          Click below to chat with us on WhatsApp and get your quote instantly.
        </motion.p>

        <motion.a
          variants={fadeUp}
          custom={5}
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center gap-3 bg-[#25D366] text-white font-black uppercase tracking-widest text-xs sm:text-sm px-6 sm:px-10 py-4 sm:py-5 hover:bg-[#1ebe5d] transition-colors"
        >
          <WhatsAppIcon />
          <span className="sm:hidden">Get a Quote on WhatsApp</span>
          <span className="hidden sm:inline">Get Your Printing Quote on WhatsApp</span>
        </motion.a>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-600">Scroll</span>
        <motion.div
          className="w-px h-8 bg-zinc-700"
          animate={{ scaleY: [1, 0.4, 1] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        />
      </motion.div>
    </section>
  );
}
