"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeUp, INDUSTRIES, CMYK } from "@/lib/constants";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function IndustriesPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white text-[#0f0f0f] overflow-x-hidden">

        {/* Hero */}
        <section className="bg-white pt-40 pb-16 px-6 sm:px-14 lg:px-52 border-b border-[#e8e7e2]">
          <motion.p variants={fadeUp} initial="hidden" animate="show" custom={0}
            className="text-[10px] uppercase tracking-[0.3em] text-[#0099CC] mb-4">
            Who We Serve
          </motion.p>
          <motion.h1 variants={fadeUp} initial="hidden" animate="show" custom={1}
            className="text-5xl sm:text-7xl font-black text-[#0f0f0f] uppercase tracking-tight leading-none mb-6">
            Print for Every{" "}
            <em style={{ fontFamily: "'Times New Roman', Times, serif", fontStyle: "italic" }} className="text-[#CC0088]">
              Industry
            </em>
          </motion.h1>
          <motion.p variants={fadeUp} initial="hidden" animate="show" custom={2}
            className="text-[#71717a] text-base max-w-xl leading-relaxed">
            We work with businesses across all sectors — from restaurants to corporate firms — delivering print that performs.
          </motion.p>
        </section>

        {/* Industry cards — alternating white / off-white */}
        {INDUSTRIES.map((ind, i) => {
          const isAlt = i % 2 !== 0;
          return (
            <section
              key={ind.slug}
              className={`py-20 px-6 sm:px-14 lg:px-52 border-b border-[#e8e7e2] ${
                isAlt ? "bg-[#f5f4f0]" : "bg-white"
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Left */}
                <motion.div
                  variants={fadeUp} initial="hidden" whileInView="show"
                  viewport={{ once: true, margin: "-60px" }}
                >
                  <p className="text-[10px] uppercase tracking-[0.3em] mb-4 text-[#71717a]">
                    0{i + 1}
                  </p>
                  <h2 className="text-3xl sm:text-4xl font-black text-[#0f0f0f] uppercase tracking-tight leading-tight mb-4">
                    {ind.title}
                  </h2>
                  <p
                    className="text-lg italic mb-6"
                    style={{ fontFamily: "'Times New Roman', Times, serif", color: "#CC0088" }}
                  >
                    {ind.tagline}
                  </p>
                  <p className="text-sm leading-relaxed text-[#71717a]">
                    {ind.desc}
                  </p>
                </motion.div>

                {/* Right */}
                <motion.div
                  variants={fadeUp} initial="hidden" whileInView="show"
                  viewport={{ once: true, margin: "-60px" }} custom={1}
                  className="flex flex-col gap-8"
                >
                  {/* Services used */}
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.3em] mb-4 text-[#0099CC]">
                      Print Services
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {ind.services.map((srv, si) => (
                        <span
                          key={srv}
                          className="px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] font-medium border border-[#e8e7e2] text-[#71717a] hover:border-[#0f0f0f] transition-colors"
                          style={{ borderLeftColor: CMYK[si % 4], borderLeftWidth: 2 }}
                        >
                          {srv}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Use cases */}
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.3em] mb-4 text-[#0099CC]">
                      Common Uses
                    </p>
                    <ul className="flex flex-col gap-2">
                      {ind.useCases.map((u) => (
                        <li key={u} className="flex items-start gap-3 text-sm text-[#71717a]">
                          <ArrowRight size={13} className="text-[#CC0088] mt-0.5 shrink-0" />
                          {u}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href="/order"
                    className="self-start font-black uppercase tracking-widest text-[10px] px-6 py-3 bg-[#0f0f0f] text-white hover:bg-zinc-800 transition-colors"
                  >
                    Get a Quote
                  </Link>
                </motion.div>
              </div>
            </section>
          );
        })}

        {/* Bottom CTA */}
        <section className="bg-[#f5f4f0] py-20 px-6 sm:px-14 lg:px-52 border-t border-[#e8e7e2]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#0099CC] mb-3">Not listed above?</p>
              <h2 className="text-3xl sm:text-4xl font-black text-[#0f0f0f] uppercase tracking-tight">
                We print for all industries.
              </h2>
            </div>
            <Link
              href="/order"
              className="shrink-0 font-black uppercase tracking-widest text-[11px] px-8 py-4 bg-[#CC0088] text-white hover:bg-red-700 transition-colors"
            >
              Enquire Now
            </Link>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
