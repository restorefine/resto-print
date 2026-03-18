"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeUp, CMYK } from "@/lib/constants";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#f5f4f0] text-[#0f0f0f] overflow-x-hidden">

        {/* Hero */}
        <section className="bg-white pt-40 pb-16 px-6 sm:px-14 lg:px-52 border-b border-[#e8e7e2]">
          <motion.p variants={fadeUp} initial="hidden" animate="show" custom={0}
            className="text-[10px] uppercase tracking-[0.3em] text-[#0099CC] mb-4">
            What We Print
          </motion.p>
          <motion.h1
            variants={fadeUp} initial="hidden" animate="show" custom={1}
            className="text-5xl sm:text-7xl font-black text-[#0f0f0f] uppercase tracking-tight leading-none mb-6"
          >
            Print with{" "}
            <em style={{ fontFamily: "'Times New Roman', Times, serif", fontStyle: "italic" }} className="text-[#CC0088]">
              Us
            </em>
          </motion.h1>
          <motion.p variants={fadeUp} initial="hidden" animate="show" custom={2}
            className="text-[#71717a] text-base max-w-xl leading-relaxed">
            From menus to banners — every print product your business needs, produced to the highest standard.
          </motion.p>
        </section>

        {/* Product grid */}
        <section className="py-16 px-6 sm:px-14 lg:px-52">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {SERVICE_CARDS.map((s, i) => (
              <motion.div
                key={s.slug}
                variants={fadeUp} initial="hidden" whileInView="show"
                viewport={{ once: true, margin: "-60px" }} custom={i % 5 * 0.08}
              >
                <Link
                  href={`/services/${s.slug}`}
                  className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
                >
                  {/* Product image */}
                  <div className="w-full h-44 relative overflow-hidden bg-[#f5f4f0]">
                    <Image
                      src={s.img}
                      alt={s.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    />
                  </div>

                  {/* Info */}
                  <div className="p-4 flex flex-col gap-1">
                    <h2 className="text-sm font-black uppercase tracking-tight text-[#CC0088] leading-tight group-hover:text-[#a3006b] transition-colors">
                      {s.title}
                    </h2>
                    <p className="text-xs text-[#71717a]">{s.price}</p>
                    <p className="text-xs font-bold text-[#CC0088] mt-1">
                      Order Now &rsaquo;
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA band */}
        <section className="bg-white py-20 px-6 sm:px-14 lg:px-52 border-t border-[#e8e7e2]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#0099CC] mb-3">Ready to print?</p>
              <h2 className="text-3xl sm:text-4xl font-black text-[#0f0f0f] uppercase tracking-tight">
                Get an instant quote
              </h2>
            </div>
            <div className="flex gap-3">
              {CMYK.slice(0, 3).map((c, i) => (
                <div key={i} className="w-2 h-2 rounded-full self-center" style={{ background: c }} />
              ))}
              <Link
                href="/order"
                className="inline-flex items-center gap-2 font-black uppercase tracking-widest text-[11px] px-8 py-4 bg-[#CC0088] text-white hover:bg-[#a3006b] transition-colors"
              >
                Order Now <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
