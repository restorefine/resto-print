"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { WHATSAPP_URL } from "@/lib/constants";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "How It Works", href: "#how-it-works" },
];

export default function Navbar() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 60, damping: 18, delay: 0.1 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#131313]/90 backdrop-blur-md border-b border-zinc-800"
    >
      <nav className="flex items-center justify-between px-6 sm:px-14 lg:px-52 h-16">
        {/* Logo */}
        <a href="#hero" onClick={(e) => handleScroll(e, "#hero")} className="flex items-center gap-2">
          <Image
            src="/resto-print-logo.png"
            alt="RestoPrint"
            width={140}
            height={36}
            className="h-8 w-auto object-contain"
            priority
          />
        </a>

        {/* Nav links — hidden on mobile */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          {/* Order Now — full page */}
          <Link
            href="/order"
            className="hidden sm:flex items-center font-black uppercase tracking-widest text-[10px] px-4 py-2.5 border border-zinc-700 text-zinc-300 hover:border-white hover:text-white transition-colors"
          >
            Order Now
          </Link>

          {/* WhatsApp CTA */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#25D366] text-white font-black uppercase tracking-widest text-[10px] px-4 py-2.5 hover:bg-[#1ebe5d] transition-colors"
          >
            <WhatsAppIcon size={14} />
            <span className="hidden sm:inline">Get a Quote</span>
          </a>
        </div>
      </nav>
    </motion.header>
  );
}
