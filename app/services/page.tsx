"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  BookOpen, FileText, CreditCard, Tag, Image as ImageIcon,
  Package, BookMarked, Megaphone, PenLine, Gift, ArrowRight,
} from "lucide-react";
import { fadeUp, services } from "@/lib/constants";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const iconMap: Record<string, React.ReactNode> = {
  BookOpen:   <BookOpen size={22} />,
  FileText:   <FileText size={22} />,
  CreditCard: <CreditCard size={22} />,
  Tag:        <Tag size={22} />,
  Image:      <ImageIcon size={22} />,
  Package:    <Package size={22} />,
  BookMarked: <BookMarked size={22} />,
  Megaphone:  <Megaphone size={22} />,
  PenLine:    <PenLine size={22} />,
  Gift:       <Gift size={22} />,
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white text-[#09090b] overflow-x-hidden">

        {/* Hero */}
        <section className="bg-[#131313] pt-40 pb-24 px-6 sm:px-14 lg:px-52 border-b border-zinc-800">
          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0}>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#dc2626] mb-4">
              What We Print
            </p>
          </motion.div>
          <motion.h1
            variants={fadeUp} initial="hidden" animate="show" custom={1}
            className="text-5xl sm:text-7xl font-black text-white uppercase tracking-tight leading-none mb-6"
          >
            All{" "}
            <em style={{ fontFamily: "'Times New Roman', Times, serif", fontStyle: "italic" }} className="text-[#dc2626]">
              Services
            </em>
          </motion.h1>
          <motion.p
            variants={fadeUp} initial="hidden" animate="show" custom={2}
            className="text-zinc-400 text-base max-w-xl leading-relaxed"
          >
            From menus to banners — every print product your business needs, produced to the highest standard.
          </motion.p>
        </section>

        {/* Services grid */}
        <section className="py-24 px-6 sm:px-14 lg:px-52">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-100">
            {services.map((s, i) => (
              <motion.div
                key={s.slug}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                custom={i % 3}
              >
                <Link
                  href={`/services/${s.slug}`}
                  className="group bg-white flex flex-col gap-6 p-8 h-full hover:bg-zinc-50 transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div className="text-zinc-400 group-hover:text-[#dc2626] transition-colors">
                      {iconMap[s.icon]}
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-300 group-hover:text-[#dc2626] transition-colors">
                      0{i + 1}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-black uppercase tracking-tight mb-2 group-hover:text-[#dc2626] transition-colors">
                      {s.title}
                    </h2>
                    <p className="text-sm text-zinc-500 leading-relaxed">{s.desc}</p>
                  </div>
                  <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-zinc-400 group-hover:text-[#09090b] transition-colors">
                    View Details
                    <ArrowRight size={11} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA band */}
        <section className="bg-[#131313] py-20 px-6 sm:px-14 lg:px-52 border-t border-zinc-800">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#dc2626] mb-3">Ready to print?</p>
              <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
                Get an instant quote
              </h2>
            </div>
            <Link
              href="/order"
              className="shrink-0 font-black uppercase tracking-widest text-[11px] px-8 py-4 bg-[#dc2626] text-white hover:bg-red-700 transition-colors"
            >
              Order Now
            </Link>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
