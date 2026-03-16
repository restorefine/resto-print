"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  // Show after scrolling 300px
  useEffect(() => {
    const onScroll = () => {
      if (!dismissed) setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [dismissed]);

  return (
    <AnimatePresence>
      {visible && !dismissed && (
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 260, damping: 22 }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2"
        >
          {/* Main button */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 bg-[#25D366] text-white font-black uppercase tracking-widest text-[10px] px-5 py-3.5 shadow-lg shadow-green-900/30 hover:bg-[#1ebe5d] transition-colors"
          >
            <motion.div
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <WhatsAppIcon size={18} />
            </motion.div>
            <span className="hidden sm:inline">Get a Free Quote</span>
          </a>

          {/* Dismiss */}
          <button
            onClick={() => setDismissed(true)}
            className="flex items-center justify-center w-8 h-8 bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors shadow-lg"
            aria-label="Dismiss"
          >
            <X size={13} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
