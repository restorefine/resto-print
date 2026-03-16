"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeUp, INDUSTRIES } from "@/lib/constants";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function IndustriesPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white text-[#09090b] overflow-x-hidden">

        {/* Hero */}
        <section className="bg-[#131313] pt-40 pb-24 px-6 sm:px-14 lg:px-52 border-b border-zinc-800">
          <motion.p variants={fadeUp} initial="hidden" animate="show" custom={0}
            className="text-[10px] uppercase tracking-[0.3em] text-[#dc2626] mb-4">
            Who We Serve
          </motion.p>
          <motion.h1 variants={fadeUp} initial="hidden" animate="show" custom={1}
            className="text-5xl sm:text-7xl font-black text-white uppercase tracking-tight leading-none mb-6">
            Print for Every{" "}
            <em style={{ fontFamily: "'Times New Roman', Times, serif", fontStyle: "italic" }} className="text-[#dc2626]">
              Industry
            </em>
          </motion.h1>
          <motion.p variants={fadeUp} initial="hidden" animate="show" custom={2}
            className="text-zinc-400 text-base max-w-xl leading-relaxed">
            We work with businesses across all sectors — from restaurants to corporate firms — delivering print that performs.
          </motion.p>
        </section>

        {/* Industry cards */}
        {INDUSTRIES.map((ind, i) => {
          const isDark = i % 2 !== 0;
          return (
            <section
              key={ind.slug}
              className={`py-20 px-6 sm:px-14 lg:px-52 border-b ${
                isDark
                  ? "bg-[#131313] border-zinc-800"
                  : "bg-white border-zinc-100"
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Left */}
                <motion.div
                  variants={fadeUp} initial="hidden" whileInView="show"
                  viewport={{ once: true, margin: "-60px" }}
                >
                  <p className={`text-[10px] uppercase tracking-[0.3em] mb-4 ${isDark ? "text-zinc-500" : "text-zinc-400"}`}>
                    0{i + 1}
                  </p>
                  <h2 className={`text-3xl sm:text-4xl font-black uppercase tracking-tight leading-tight mb-4 ${isDark ? "text-white" : "text-[#09090b]"}`}>
                    {ind.title}
                  </h2>
                  <p
                    className="text-lg italic mb-6"
                    style={{ fontFamily: "'Times New Roman', Times, serif", color: "#dc2626" }}
                  >
                    {ind.tagline}
                  </p>
                  <p className={`text-sm leading-relaxed ${isDark ? "text-zinc-400" : "text-zinc-600"}`}>
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
                    <p className={`text-[10px] uppercase tracking-[0.3em] mb-4 ${isDark ? "text-[#dc2626]" : "text-[#dc2626]"}`}>
                      Print Services
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {ind.services.map((srv) => (
                        <span
                          key={srv}
                          className={`px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] font-medium border ${
                            isDark
                              ? "border-zinc-700 text-zinc-300"
                              : "border-zinc-200 text-zinc-600"
                          }`}
                        >
                          {srv}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Use cases */}
                  <div>
                    <p className={`text-[10px] uppercase tracking-[0.3em] mb-4 ${isDark ? "text-[#dc2626]" : "text-[#dc2626]"}`}>
                      Common Uses
                    </p>
                    <ul className="flex flex-col gap-2">
                      {ind.useCases.map((u) => (
                        <li key={u} className={`flex items-start gap-3 text-sm ${isDark ? "text-zinc-400" : "text-zinc-600"}`}>
                          <ArrowRight size={13} className="text-[#dc2626] mt-0.5 shrink-0" />
                          {u}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href="/order"
                    className={`self-start font-black uppercase tracking-widest text-[10px] px-6 py-3 transition-colors ${
                      isDark
                        ? "bg-white text-[#09090b] hover:bg-zinc-200"
                        : "bg-[#09090b] text-white hover:bg-zinc-800"
                    }`}
                  >
                    Get a Quote
                  </Link>
                </motion.div>
              </div>
            </section>
          );
        })}

        {/* Bottom CTA */}
        <section className="bg-[#dc2626] py-20 px-6 sm:px-14 lg:px-52">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-red-200 mb-3">Not listed above?</p>
              <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
                We print for all industries.
              </h2>
            </div>
            <Link
              href="/order"
              className="shrink-0 font-black uppercase tracking-widest text-[11px] px-8 py-4 bg-white text-[#dc2626] hover:bg-zinc-100 transition-colors"
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
