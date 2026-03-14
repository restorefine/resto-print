import Image from "next/image";
import { WHATSAPP_URL } from "@/lib/constants";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import MailIcon from "@/components/icons/MailIcon";

export default function Footer() {
  return (
    <footer className="bg-[#131313] px-6 sm:px-14 lg:px-52 py-16 border-t border-zinc-800">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
        <Image
          src="/resto-print-logo.png"
          alt="RestoPrint"
          width={420}
          height={108}
          className="h-24 w-auto object-contain"
        />

        <div className="flex flex-col sm:flex-row gap-6 text-sm">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-zinc-400 hover:text-[#25D366] transition-colors"
          >
            <WhatsAppIcon size={16} />
            <span>+44 7700 000 000</span>
          </a>
          <a
            href="mailto:hello@restoprint.co.uk"
            className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
          >
            <MailIcon />
            <span>hello@restoprint.co.uk</span>
          </a>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-700">
          © {new Date().getFullYear()} RestoPrint. All rights reserved.
        </p>
        <p className="italic text-[#dc2626] text-sm" style={{ fontFamily: "var(--font-playfair)" }}>
          Made for restaurants & businesses.
        </p>
      </div>
    </footer>
  );
}
