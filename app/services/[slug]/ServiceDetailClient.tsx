"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  BookOpen, FileText, CreditCard, Tag, Image as ImageIcon,
  Package, BookMarked, Megaphone, PenLine, Gift, ArrowLeft, ArrowRight,
} from "lucide-react";
import { fadeUp, SERVICE_DETAILS, WHATSAPP_NUMBER } from "@/lib/constants";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";

// mm lookup for common print sizes — used for proportional previews
const sizeMM: Record<string, { w: number; h: number }> = {
  "A4":          { w: 210, h: 297 },
  "A5":          { w: 148, h: 210 },
  "A6":          { w: 105, h: 148 },
  "A3":          { w: 297, h: 420 },
  "A2":          { w: 420, h: 594 },
  "A1":          { w: 594, h: 841 },
  "A0":          { w: 841, h: 1189 },
  "DL":          { w: 99,  h: 210 },
  "Square":      { w: 148, h: 148 },
  "Square 148":  { w: 148, h: 148 },
  "Square 210":  { w: 210, h: 210 },
  "Standard UK": { w: 85,  h: 55  },
  "Slim":        { w: 85,  h: 42  },
  "Circle 50mm": { w: 50,  h: 50  },
  "Circle 75mm": { w: 75,  h: 75  },
  "Rectangle":   { w: 100, h: 70  },
  "Die-cut":     { w: 80,  h: 80  },
  "Roller Banner":{ w: 850, h: 2000 },
  "Pull-up Slim":{ w: 600, h: 2000 },
  "Large PVC":   { w: 1000, h: 500 },
  "A4 Letterhead":{ w: 210, h: 297 },
  "A5 Notepad":  { w: 148, h: 210 },
  "Compliment Slip": { w: 210, h: 99 },
};

const toIn = (mm: number) => (mm / 25.4).toFixed(1);

function SizePreview({ name, dimensions }: { name: string; dimensions: string }) {
  // Try exact match first, then partial
  const d = sizeMM[name] ?? Object.entries(sizeMM).find(([k]) => name.toLowerCase().includes(k.toLowerCase()))?.[1];
  if (!d) {
    return (
      <div className="border border-zinc-100 p-4 hover:border-zinc-300 transition-colors">
        <p className="text-base font-black uppercase tracking-tight mb-1">{name}</p>
        <p className="text-xs text-zinc-400 font-mono">{dimensions}</p>
      </div>
    );
  }

  const MAX = 64; // max dimension in px
  const scale = MAX / Math.max(d.w, d.h);
  const wPx = Math.round(d.w * scale);
  const hPx = Math.round(d.h * scale);
  const wIn = toIn(d.w);
  const hIn = toIn(d.h);

  return (
    <div className="border border-zinc-100 p-4 hover:border-zinc-300 transition-colors flex flex-col gap-3">
      {/* Paper shape */}
      <div className="flex items-end gap-2">
        <div
          className="border border-zinc-400 bg-zinc-50 shrink-0"
          style={{ width: wPx, height: hPx }}
        />
        <span className="text-[9px] font-mono text-zinc-400 leading-tight">
          {wIn}&Prime;<br />{hIn}&Prime;
        </span>
      </div>
      <div>
        <p className="text-sm font-black uppercase tracking-tight mb-0.5">{name}</p>
        <p className="text-[10px] font-mono text-zinc-400">{wIn} × {hIn}&Prime;</p>
      </div>
    </div>
  );
}

const iconMap: Record<string, React.ReactNode> = {
  BookOpen:   <BookOpen size={28} />,
  FileText:   <FileText size={28} />,
  CreditCard: <CreditCard size={28} />,
  Tag:        <Tag size={28} />,
  Image:      <ImageIcon size={28} />,
  Package:    <Package size={28} />,
  BookMarked: <BookMarked size={28} />,
  Megaphone:  <Megaphone size={28} />,
  PenLine:    <PenLine size={28} />,
  Gift:       <Gift size={28} />,
};

export default function ServiceDetailClient({ slug }: { slug: string }) {
  const s = SERVICE_DETAILS[slug];

  if (!s) {
    return (
      <>
        <Navbar />
        <main className="bg-white min-h-screen flex items-center justify-center px-6">
          <div className="text-center">
            <h1 className="text-4xl font-black uppercase mb-4">Service not found</h1>
            <Link href="/services" className="text-[#dc2626] text-sm uppercase tracking-widest">
              ← Back to Services
            </Link>
          </div>
        </main>
      </>
    );
  }

  const whatsappMsg = encodeURIComponent(`Hi, I'd like a quote for ${s.title}. Can you help?`);
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMsg}`;

  return (
    <>
      <Navbar />
      <main className="bg-white text-[#09090b] overflow-x-hidden">

        {/* Hero — dark */}
        <section className="bg-[#131313] pt-40 pb-24 px-6 sm:px-14 lg:px-52 border-b border-zinc-800">
          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0}>
            <Breadcrumb crumbs={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: s.title },
            ]} />
          </motion.div>

          <div className="flex items-start gap-6">
            <motion.div
              variants={fadeUp} initial="hidden" animate="show" custom={1}
              className="text-[#dc2626] mt-1 hidden sm:block"
            >
              {iconMap[s.icon]}
            </motion.div>
            <div>
              <motion.p
                variants={fadeUp} initial="hidden" animate="show" custom={1}
                className="text-[10px] uppercase tracking-[0.3em] text-[#dc2626] mb-4"
              >
                Printing Service
              </motion.p>
              <motion.h1
                variants={fadeUp} initial="hidden" animate="show" custom={2}
                className="text-5xl sm:text-7xl font-black text-white uppercase tracking-tight leading-none mb-4"
              >
                {s.title}
              </motion.h1>
              <motion.p
                variants={fadeUp} initial="hidden" animate="show" custom={3}
                className="text-lg sm:text-xl text-[#dc2626] mb-6 italic"
                style={{ fontFamily: "'Times New Roman', Times, serif" }}
              >
                {s.tagline}
              </motion.p>
              <motion.p
                variants={fadeUp} initial="hidden" animate="show" custom={4}
                className="text-zinc-400 text-base max-w-2xl leading-relaxed"
              >
                {s.desc}
              </motion.p>
            </div>
          </div>
        </section>

        {/* Materials + Sizes — white */}
        <section className="py-20 px-6 sm:px-14 lg:px-52 border-b border-zinc-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}>
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#dc2626] mb-6">Materials</p>
              <h2 className="text-2xl font-black uppercase tracking-tight mb-8">Paper & Stock Options</h2>
              <div className="flex flex-col">
                {s.materials.map((m) => (
                  <div key={m} className="flex items-center gap-4 py-3.5 border-b border-zinc-100 last:border-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#dc2626] shrink-0" />
                    <span className="text-sm font-medium">{m}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }} custom={1}>
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#dc2626] mb-6">Sizes</p>
              <h2 className="text-2xl font-black uppercase tracking-tight mb-8">Available Dimensions</h2>
              <div className="grid grid-cols-2 gap-3">
                {s.sizes.map((sz) => (
                  <SizePreview key={sz.name} name={sz.name} dimensions={sz.dimensions} />
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Finishing options — dark */}
        <section className="bg-[#131313] py-20 px-6 sm:px-14 lg:px-52 border-b border-zinc-800">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#dc2626] mb-6">Finishing</p>
            <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-10">Finishing Options</h2>
          </motion.div>
          <div className="flex flex-wrap gap-3">
            {s.finishes.map((f, i) => (
              <motion.span
                key={f}
                variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i * 0.5}
                className="px-4 py-2 border border-zinc-700 text-zinc-300 text-[11px] uppercase tracking-[0.2em] hover:border-white hover:text-white transition-colors"
              >
                {f}
              </motion.span>
            ))}
          </div>
        </section>

        {/* Use cases + Industries — white */}
        <section className="py-20 px-6 sm:px-14 lg:px-52 border-b border-zinc-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}>
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#dc2626] mb-6">Use Cases</p>
              <h2 className="text-2xl font-black uppercase tracking-tight mb-8">What It&rsquo;s Used For</h2>
              <ul className="flex flex-col gap-3">
                {s.useCases.map((u) => (
                  <li key={u} className="flex items-start gap-3 text-sm text-zinc-600">
                    <ArrowRight size={13} className="text-[#dc2626] mt-0.5 shrink-0" />
                    {u}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }} custom={1}>
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#dc2626] mb-6">Industries</p>
              <h2 className="text-2xl font-black uppercase tracking-tight mb-8">Who Uses This</h2>
              <div className="flex flex-wrap gap-2">
                {s.industries.map((ind) => (
                  <span
                    key={ind}
                    className="px-4 py-2 bg-zinc-50 border border-zinc-100 text-[11px] uppercase tracking-[0.2em] text-zinc-600 font-medium"
                  >
                    {ind}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA — dark */}
        <section className="bg-[#131313] py-20 px-6 sm:px-14 lg:px-52">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#dc2626] mb-3">Get Started</p>
              <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight leading-tight">
                Ready to order{" "}
                <em style={{ fontFamily: "'Times New Roman', Times, serif", fontStyle: "italic" }} className="text-[#dc2626]">
                  {s.title}?
                </em>
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                href="/order"
                className="font-black uppercase tracking-widest text-[11px] px-8 py-4 bg-white text-[#09090b] hover:bg-zinc-200 transition-colors text-center"
              >
                Order Now
              </Link>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-black uppercase tracking-widest text-[11px] px-8 py-4 bg-[#25D366] text-white hover:bg-[#1ebe5d] transition-colors text-center"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
