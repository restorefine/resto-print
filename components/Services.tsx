"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeUp } from "@/lib/constants";
import SectionLabel from "@/components/SectionLabel";
import OrderWizard from "@/components/OrderWizard";

const SERVICE_CARDS = [
  { title: "Menu Printing",      slug: "menus",          price: "from £8.50",  img: "/our-services/menu-print.png" },
  { title: "Flyers & Leaflets",  slug: "flyers",         price: "from £12.50", img: "/our-services/flyer-print.png" },
  { title: "Business Cards",     slug: "business-cards", price: "from £9.00",  img: "/our-services/bsuiness-card-print.png" },
  { title: "Stickers & Labels",  slug: "stickers",       price: "from £10.00", img: "/our-services/sticker-print.png" },
  { title: "Posters",            slug: "posters",        price: "from £9.00",  img: "/our-services/poster-print.png" },
  { title: "Packaging",          slug: "packaging",      price: "from £45.00", img: "/our-services/packaging.png" },
  { title: "Brochures",          slug: "brochures",      price: "from £12.00", img: "/our-services/brochures.png" },
  { title: "Banners",            slug: "banners",        price: "from £27.00", img: "/our-services/banners.png" },
  { title: "Stationery",         slug: "stationery",     price: "from £15.00", img: "/our-services/stationary.png" },
  { title: "Promotional",        slug: "promotional",    price: "from £20.00", img: "/our-services/promotional.png" },
];

export default function Services() {
  const [activeService, setActiveService] = useState<string | null>(null);

  return (
    <>
      <section id="services" className="bg-[#f5f4f0] px-6 sm:px-14 lg:px-52 py-24 border-t border-[#e8e7e2]">
        <SectionLabel num="01" label="What We Print" />

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <motion.h2
            initial="hidden" whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="text-4xl sm:text-6xl font-black uppercase tracking-tight max-w-lg leading-none text-[#0f0f0f]"
          >
            Print with<br />
            <span className="font-normal italic text-[#CC0088]" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
              RestoPrint
            </span>
          </motion.h2>
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={1}>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-[#71717a] hover:text-[#0f0f0f] transition-colors"
            >
              View All Services <ArrowRight size={11} />
            </Link>
          </motion.div>
        </div>

        {/* Product card grid */}
        <div className="grid grid-cols-2 gap-4">
          {SERVICE_CARDS.map((s, i) => (
            <motion.div
              key={s.slug}
              initial="hidden" whileInView="show"
              viewport={{ once: true, margin: "-40px" }}
              variants={fadeUp} custom={i * 0.05}
            >
              <button
                onClick={() => setActiveService(s.title)}
                className="group w-full text-left bg-white overflow-hidden transition-all duration-300 flex flex-col border border-[#e8e7e2] hover:border-[#CC0088] hover:shadow-xl rounded-xl"
              >
                {/* Tall image */}
                <div className="w-full h-72 sm:h-80 relative overflow-hidden bg-[#f5f4f0]">
                  <Image
                    src={s.img}
                    alt={s.title}
                    fill
                    className="object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-out"
                    sizes="(max-width: 640px) 50vw, 50vw"
                  />
                  {/* Number badge */}
                  <span className="absolute top-3 left-3 w-7 h-7 rounded-full bg-white/90 text-[#0f0f0f] text-[10px] font-black flex items-center justify-center">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Info */}
                <div className="flex items-center justify-between gap-3 px-5 py-4">
                  <h3 className="text-base font-black uppercase tracking-tight text-[#0f0f0f] leading-tight">
                    {s.title}
                  </h3>
                  <div className="shrink-0 w-8 h-8 rounded-full border-2 border-[#CC0088] flex items-center justify-center group-hover:bg-[#CC0088] transition-colors">
                    <ArrowRight size={13} className="text-[#CC0088] group-hover:text-white transition-colors" />
                  </div>
                </div>
              </button>
            </motion.div>
          ))}
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
