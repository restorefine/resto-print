"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen, FileText, CreditCard, Tag, Image, Package,
  BookMarked, Megaphone, PenLine, Gift, ArrowRight, LucideIcon,
} from "lucide-react";
import { services, fadeUp } from "@/lib/constants";
import SectionLabel from "@/components/SectionLabel";
import OrderWizard from "@/components/OrderWizard";

const iconMap: Record<string, LucideIcon> = {
  BookOpen, FileText, CreditCard, Tag, Image, Package,
  BookMarked, Megaphone, PenLine, Gift,
};

export default function Services() {
  const [activeService, setActiveService] = useState<string | null>(null);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <>
      <section id="services" className="px-6 sm:px-14 lg:px-52 py-24 border-t border-zinc-100">
        <SectionLabel num="01" label="What We Print" />

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <motion.h2
            initial="hidden" whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="text-4xl sm:text-6xl font-black uppercase tracking-tight max-w-lg leading-none"
          >
            Our Printing<br />
            <span className="font-normal italic text-[#dc2626]" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
              Services
            </span>
          </motion.h2>
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={1}>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-zinc-400 hover:text-[#09090b] transition-colors"
            >
              View All Services <ArrowRight size={11} />
            </Link>
          </motion.div>
        </div>

        {/* Interactive list */}
        <div className="flex flex-col border-t border-zinc-100">
          {services.map((s, i) => {
            const Icon = iconMap[s.icon];
            const isHovered = hoveredIdx === i;

            return (
              <motion.div
                key={s.title}
                initial="hidden" whileInView="show"
                viewport={{ once: true, margin: "-40px" }}
                variants={fadeUp} custom={i * 0.05}
                className="relative"
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                {/* Red left border on hover */}
                <motion.div
                  className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#dc2626]"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: isHovered ? 1 : 0 }}
                  transition={{ duration: 0.2 }}
                  style={{ originY: 0 }}
                />

                <button
                  onClick={() => setActiveService(s.title)}
                  className="w-full text-left border-b border-zinc-100 pl-5 pr-0 py-6 grid grid-cols-[2rem_1fr_auto] sm:grid-cols-[3rem_1fr_auto] items-center gap-4 sm:gap-8 group transition-colors hover:bg-zinc-50/50"
                >
                  {/* Number */}
                  <span className="text-[11px] font-black tabular-nums text-zinc-300 group-hover:text-[#dc2626] transition-colors select-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Title + icon + desc */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-5 min-w-0">
                    <div className="flex items-center gap-3">
                      <span className="text-zinc-300 group-hover:text-[#dc2626] transition-colors shrink-0">
                        {Icon && <Icon size={16} strokeWidth={1.5} />}
                      </span>
                      <h3 className="font-black uppercase tracking-tight text-base sm:text-lg leading-none group-hover:text-[#dc2626] transition-colors">
                        {s.title}
                      </h3>
                    </div>

                    <AnimatePresence>
                      {isHovered && (
                        <motion.p
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -8 }}
                          transition={{ duration: 0.18 }}
                          className="hidden sm:block text-sm text-zinc-500 leading-relaxed truncate"
                        >
                          {s.desc}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-3">
                    <AnimatePresence>
                      {isHovered && (
                        <motion.span
                          initial={{ opacity: 0, x: 8 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 8 }}
                          transition={{ duration: 0.18 }}
                          className="hidden sm:block text-[10px] uppercase tracking-[0.25em] text-[#dc2626] font-black whitespace-nowrap"
                        >
                          Get a Quote
                        </motion.span>
                      )}
                    </AnimatePresence>
                    <ArrowRight
                      size={14}
                      className="text-zinc-300 group-hover:text-[#dc2626] group-hover:translate-x-1 transition-all"
                    />
                  </div>
                </button>
              </motion.div>
            );
          })}
        </div>
      </section>

      <AnimatePresence>
        {activeService && (
          <OrderWizard
            initialService={activeService}
            onClose={() => setActiveService(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
