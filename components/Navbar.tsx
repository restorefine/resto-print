"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { X, Menu, ChevronDown, BookOpen, Ruler, Sparkles, BookMarked } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

const guideLinks = [
  { label: "Paper Types",          href: "/guides/paper",       icon: BookOpen,   desc: "GSM, coated, uncoated" },
  { label: "Print Sizes",          href: "/guides/sizes",       icon: Ruler,      desc: "A-series & custom formats" },
  { label: "Finishing Techniques", href: "/guides/finishes",    icon: Sparkles,   desc: "Gloss, matte, foil & more" },
  { label: "Terminology",          href: "/guides/terminology", icon: BookMarked, desc: "Bleed, DPI, CMYK explained" },
];

const primaryNav = [
  { label: "Services",     href: "/services" },
  { label: "Industries",   href: "/industries" },
  { label: "How It Works", href: "/#how-it-works", hash: "#how-it-works" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [mobileOpen, setMobileOpen] = useState(false);
  const [guidesOpen, setGuidesOpen] = useState(false);
  const guidesRef = useRef<HTMLLIElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (guidesRef.current && !guidesRef.current.contains(e.target as Node)) {
        setGuidesOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleHomeScroll = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    if (!isHome) return;
    e.preventDefault();
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 55, damping: 18, delay: 0.05 }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        {/* Main bar */}
        <div className="bg-[#0e0e0e]/98 backdrop-blur-xl border-b border-white/5">
          <nav className="flex items-center justify-between px-6 sm:px-14 lg:px-52 h-17">

            {/* Logo */}
            <Link href="/" className="shrink-0 flex items-center">
              <Image
                src="/resto-print-logo.png"
                alt="RestoPrint"
                width={150}
                height={38}
                className="h-8 w-auto object-contain"
                priority
              />
            </Link>

            {/* Desktop nav */}
            <ul className="hidden md:flex items-center gap-1">
              {primaryNav.map((item) => (
                <li key={item.href}>
                  {item.hash ? (
                    <a
                      href={isHome ? item.hash : item.href}
                      onClick={(e) => handleHomeScroll(e, item.hash!)}
                      className="block px-4 py-2 text-[11px] uppercase tracking-[0.2em] text-zinc-400 hover:text-white hover:bg-white/5 rounded-sm transition-all"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-4 py-2 text-[11px] uppercase tracking-[0.2em] text-zinc-400 hover:text-white hover:bg-white/5 rounded-sm transition-all"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}

              {/* Guides dropdown */}
              <li ref={guidesRef} className="relative">
                <button
                  onClick={() => setGuidesOpen((v) => !v)}
                  onMouseEnter={() => setGuidesOpen(true)}
                  className={`flex items-center gap-1.5 px-4 py-2 text-[11px] uppercase tracking-[0.2em] rounded-sm transition-all ${
                    guidesOpen ? "text-white bg-white/5" : "text-zinc-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  Guides
                  <ChevronDown
                    size={11}
                    className={`transition-transform duration-200 ${guidesOpen ? "rotate-180" : ""}`}
                  />
                </button>

                <AnimatePresence>
                  {guidesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.97 }}
                      transition={{ duration: 0.15, ease: "easeOut" }}
                      onMouseLeave={() => setGuidesOpen(false)}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-[#161616] border border-white/8 shadow-2xl shadow-black/60 overflow-hidden"
                    >
                      {/* Dropdown header */}
                      <div className="px-4 pt-3 pb-2 border-b border-white/5">
                        <p className="text-[9px] uppercase tracking-[0.3em] text-zinc-600">Print Guides</p>
                      </div>
                      {guideLinks.map((g) => {
                        const Icon = g.icon;
                        return (
                          <Link
                            key={g.href}
                            href={g.href}
                            onClick={() => setGuidesOpen(false)}
                            className="flex items-start gap-3 px-4 py-3 hover:bg-white/5 transition-colors group"
                          >
                            <div className="mt-0.5 w-6 h-6 flex items-center justify-center text-zinc-600 group-hover:text-[#dc2626] transition-colors shrink-0">
                              <Icon size={13} strokeWidth={1.5} />
                            </div>
                            <div>
                              <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-zinc-300 group-hover:text-white transition-colors">
                                {g.label}
                              </p>
                              <p className="text-[10px] text-zinc-600 group-hover:text-zinc-400 transition-colors mt-0.5">
                                {g.desc}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                      <div className="px-4 py-3 border-t border-white/5">
                        <Link
                          href="/guides"
                          onClick={() => setGuidesOpen(false)}
                          className="text-[9px] uppercase tracking-[0.3em] text-zinc-600 hover:text-[#dc2626] transition-colors"
                        >
                          View all guides →
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            </ul>

            {/* Right CTAs */}
            <div className="flex items-center gap-2">
              <Link
                href="/order"
                className="hidden sm:flex items-center font-black uppercase tracking-widest text-[10px] px-4 py-2.5 border border-zinc-800 text-zinc-400 hover:border-zinc-500 hover:text-white transition-all"
              >
                Order Now
              </Link>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#25D366] text-white font-black uppercase tracking-widest text-[10px] px-4 py-2.5 hover:bg-[#1ebe5d] transition-colors"
              >
                <WhatsAppIcon size={13} />
                <span className="hidden sm:inline">Get a Quote</span>
              </a>

              {/* Mobile burger */}
              <button
                onClick={() => setMobileOpen(true)}
                className="md:hidden ml-1 text-zinc-500 hover:text-white transition-colors p-1.5"
                aria-label="Open menu"
              >
                <Menu size={19} />
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-60 bg-black/80 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 80, damping: 20 }}
              className="fixed top-0 right-0 bottom-0 z-70 w-72 bg-[#0e0e0e] border-l border-white/5 flex flex-col"
            >
              <div className="flex items-center justify-between px-6 h-17 border-b border-white/5">
                <span className="text-[9px] uppercase tracking-[0.3em] text-zinc-600">Menu</span>
                <button onClick={() => setMobileOpen(false)} className="text-zinc-500 hover:text-white transition-colors">
                  <X size={18} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto">
                {/* Primary links */}
                <div className="px-6 pt-6 pb-2">
                  <p className="text-[9px] uppercase tracking-[0.3em] text-zinc-700 mb-3">Navigate</p>
                  {[
                    { label: "Services",     href: "/services" },
                    { label: "Industries",   href: "/industries" },
                    { label: "How It Works", href: isHome ? "#how-it-works" : "/#how-it-works" },
                    { label: "Order Now",    href: "/order" },
                  ].map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center py-3 text-sm font-medium text-zinc-300 hover:text-white border-b border-white/5 transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>

                {/* Guides section */}
                <div className="px-6 pt-5 pb-6">
                  <p className="text-[9px] uppercase tracking-[0.3em] text-zinc-700 mb-3">Guides</p>
                  {guideLinks.map((g) => {
                    const Icon = g.icon;
                    return (
                      <Link
                        key={g.href}
                        href={g.href}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center gap-3 py-2.5 text-sm text-zinc-400 hover:text-white border-b border-white/5 transition-colors group"
                      >
                        <Icon size={13} className="text-zinc-600 group-hover:text-[#dc2626] transition-colors" strokeWidth={1.5} />
                        {g.label}
                      </Link>
                    );
                  })}
                </div>

                {/* CTA */}
                <div className="px-6 pb-8">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-black uppercase tracking-widest text-[11px] px-4 py-3.5 hover:bg-[#1ebe5d] transition-colors w-full"
                  >
                    <WhatsAppIcon size={16} />
                    Get a Free Quote
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
