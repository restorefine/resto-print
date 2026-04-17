"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { WHATSAPP_URL, CMYK } from "@/lib/constants";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { ArrowRight } from "lucide-react";

const PREVIEW_IMAGES = [
  { src: "/our-services/menu-print.png",          alt: "Menu Printing" },
  { src: "/our-services/bsuiness-card-print.png", alt: "Business Cards" },
  { src: "/our-services/flyer-print.png",         alt: "Flyers" },
  { src: "/our-services/poster-print.png",        alt: "Posters" },
];

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } };

export default function HeroV2() {
  return (
    <section id="hero" className="relative min-h-screen bg-white flex flex-col">

      {/* Main content — split layout */}
      <div className="flex-1 flex flex-col lg:flex-row items-center gap-12 px-6 sm:px-14 lg:px-24 pt-36 pb-16 max-w-350 mx-auto w-full">

        {/* ── Left: Text + CTAs ── */}
        <motion.div
          className="flex-1 flex flex-col items-start"
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
        >
          {/* CMYK stripe */}
          <motion.div variants={fadeUp} className="flex gap-1.5 mb-8">
            {CMYK.map((c, i) => (
              <div
                key={i}
                className="w-5 h-5 rounded-sm"
                style={{ background: c, border: i === 3 ? "1px solid #e8e7e2" : "none" }}
              />
            ))}
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-5xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-[#0f0f0f] leading-[0.95] mb-6"
          >
            Quality Printing<br />
            <span
              className="font-normal"
              style={{ fontFamily: "'Times New Roman', Times, serif", fontStyle: "italic", color: "#CC0088" }}
            >
              For Restaurants
            </span><br />
            &amp; Businesses
          </motion.h1>

          <motion.p variants={fadeUp} className="text-[#71717a] text-base sm:text-lg mb-10 max-w-md">
            Menus · Flyers · Business Cards · Banners · Posters &amp; More
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-start gap-4">
            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 bg-[#25D366] text-white font-black uppercase tracking-widest text-xs px-8 py-4 hover:bg-[#1ebe5d] transition-colors"
            >
              <WhatsAppIcon />
              Get a Quote
            </motion.a>

            <Link
              href="/services"
              className="inline-flex items-center gap-2 border border-[#0f0f0f] text-[#0f0f0f] font-black uppercase tracking-widest text-xs px-8 py-4 hover:bg-[#0f0f0f] hover:text-white transition-all"
            >
              Browse Services
              <ArrowRight size={13} />
            </Link>
          </motion.div>

          {/* Trust pills */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mt-10">
            {["3-Day Turnaround", "UK Delivery", "No Minimum Order"].map((t) => (
              <span
                key={t}
                className="text-[10px] font-black uppercase tracking-[0.2em] text-[#71717a] border border-[#e8e7e2] px-3 py-1.5"
              >
                {t}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* ── Right: 2×2 service image grid ── */}
        <motion.div
          className="flex-1 w-full max-w-lg lg:max-w-none"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
        >
          <div className="grid grid-cols-2 gap-4">
            {PREVIEW_IMAGES.map((img, i) => (
              <motion.div
                key={img.alt}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                className="relative overflow-hidden rounded-2xl bg-[#f5f4f0] group"
                style={{ aspectRatio: "4/3" }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 25vw"
                  priority={i < 2}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* CMYK bottom bar */}
      <div className="w-full flex h-1.5">
        {CMYK.map((c, i) => (
          <div key={i} className="flex-1" style={{ background: c }} />
        ))}
      </div>
    </section>
  );
}
