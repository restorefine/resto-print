"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { WHATSAPP_URL, fadeUp, CMYK } from "@/lib/constants";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col bg-white">
      {/* Decorative: large blurred CMYK color blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-40 -right-20 w-125 h-125 rounded-full"
          style={{ background: CMYK[0], filter: "blur(120px)", opacity: 0.14 }}
        />
        <div
          className="absolute -bottom-32 -left-20 w-105 h-105 rounded-full"
          style={{ background: CMYK[1], filter: "blur(110px)", opacity: 0.12 }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-80 rounded-full"
          style={{ background: CMYK[2], filter: "blur(140px)", opacity: 0.10 }}
        />
      </div>

      {/* Grid background: very subtle */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(#0f0f0f 1px, transparent 1px), linear-gradient(90deg, #0f0f0f 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          opacity: 0.03,
        }}
      />

      {/* Main content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 pt-36 pb-16">
        <motion.div
          className="max-w-5xl mx-auto text-center w-full"
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
        >
          {/* CMYK ink swatch strip */}
          <motion.div variants={fadeUp} custom={0} className="mb-10 flex items-end justify-center gap-3">
            {(["C", "M", "Y", "K"] as const).map((label, i) => (
              <div key={label} className="flex flex-col items-center gap-1.5">
                <div
                  className="w-7 h-10 rounded-sm shadow-md"
                  style={{
                    background: CMYK[i],
                    border: i === 3 ? "1px solid #e8e7e2" : "none",
                  }}
                />
                <span
                  className="text-[9px] font-black tracking-widest"
                  style={{ color: CMYK[i] === "#131313" ? "#0f0f0f" : CMYK[i] }}
                >
                  {label}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Logo — black version */}
          <motion.div variants={fadeUp} custom={1} className="mb-6 flex items-center justify-center">
            <Image
              src="/resto-print-logo-black.png"
              alt="RestoPrint"
              width={180}
              height={48}
              className="h-12 w-auto object-contain"
              priority
            />
          </motion.div>

          {/* Label */}
          <motion.p
            variants={fadeUp}
            custom={1}
            className="text-[10px] uppercase tracking-[0.3em] text-[#71717a] mb-6"
          >
            Printing Services · UK
          </motion.p>

          {/* H1 */}
          <motion.h1
            variants={fadeUp}
            custom={2}
            className="text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tight text-[#0f0f0f] leading-[0.92] mb-6"
          >
            Quality Printing<br />
            For{" "}
            <span
              className="text-[#CC0088] italic font-normal"
              style={{ fontFamily: "'Times New Roman', Times, serif" }}
            >
              Restaurants
            </span>
            <br />
            &amp; Businesses
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeUp}
            custom={3}
            className="text-[#71717a] text-base sm:text-lg mb-10 max-w-lg mx-auto"
          >
            Menus · Flyers · Business Cards · Banners · Posters &amp; More
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            custom={4}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 bg-[#25D366] text-white font-black uppercase tracking-widest text-xs sm:text-sm px-6 sm:px-10 py-4 sm:py-5 hover:bg-[#1ebe5d] transition-colors"
            >
              <WhatsAppIcon />
              Get a Quote on WhatsApp
            </motion.a>

            <Link
              href="/services"
              className="inline-flex items-center gap-2 border border-[#0f0f0f] text-[#0f0f0f] font-black uppercase tracking-widest text-xs sm:text-sm px-6 sm:px-8 py-4 sm:py-5 hover:bg-[#0f0f0f] hover:text-white transition-all"
            >
              Browse Services
              <ArrowRight size={14} />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Trust bar — full width, dark */}
      <motion.div
        className="relative z-10 w-full bg-[#0f0f0f] text-white"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <div className="max-w-5xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-0">
          {[
            "3-Day Turnaround",
            "UK Nationwide Delivery",
            "No Minimum Order",
          ].map((item, i) => (
            <div key={item} className="flex items-center">
              {i > 0 && (
                <div className="hidden sm:flex items-center gap-0 mx-6">
                  {CMYK.slice(0, 3).map((c, ci) => (
                    <div
                      key={ci}
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: c, marginLeft: ci > 0 ? "3px" : 0 }}
                    />
                  ))}
                </div>
              )}
              <span className="text-[11px] font-black uppercase tracking-[0.2em] text-white">
                {item}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
