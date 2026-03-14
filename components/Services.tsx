"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, FileText, CreditCard, Tag, Image, Package, LucideIcon } from "lucide-react";
import { services, fadeUp } from "@/lib/constants";
import SectionLabel from "@/components/SectionLabel";
import OrderWizard from "@/components/OrderWizard";

const iconMap: Record<string, LucideIcon> = {
  BookOpen,
  FileText,
  CreditCard,
  Tag,
  Image,
  Package,
};

export default function Services() {
  const [activeService, setActiveService] = useState<string | null>(null);

  return (
    <>
      <section id="services" className="px-6 sm:px-14 lg:px-52 py-24 border-t border-zinc-100">
        <SectionLabel num="01" label="What We Print" />

        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="text-4xl sm:text-6xl font-black uppercase tracking-tight mb-16 max-w-lg leading-none"
        >
          Our Printing<br />
          <span className="font-normal italic text-[#dc2626]" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
            Services
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const Icon = iconMap[s.icon];
            return (
              <motion.button
                key={s.title}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                custom={i}
                whileHover={{ scale: 1.02 }}
                onClick={() => setActiveService(s.title)}
                className="text-left bg-white border border-zinc-100 rounded-2xl p-8 shadow-sm hover:shadow-md hover:border-zinc-300 transition-all cursor-pointer group"
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-zinc-50 text-zinc-600 group-hover:bg-red-50 group-hover:text-[#dc2626] transition-colors mb-4">
                  {Icon && <Icon size={20} strokeWidth={1.5} />}
                </span>
                <h3 className="font-black uppercase tracking-tight text-lg mb-2">{s.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{s.desc}</p>
                <p className="mt-4 text-[10px] uppercase tracking-[0.25em] text-[#dc2626] font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                  Get a quote →
                </p>
              </motion.button>
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
