import Image from "next/image";
import Link from "next/link";
import { WHATSAPP_URL, CMYK } from "@/lib/constants";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import MailIcon from "@/components/icons/MailIcon";

const footerLinks = {
  Services: [
    { label: "Menu Printing",        href: "/services/menus" },
    { label: "Business Cards",       href: "/services/business-cards" },
    { label: "Flyers & Leaflets",    href: "/services/flyers" },
    { label: "Posters",              href: "/services/posters" },
    { label: "View All Services",    href: "/services" },
  ],
  Company: [
    { label: "Industries",           href: "/industries" },
    { label: "How It Works",         href: "/#how-it-works" },
    { label: "Order Now",            href: "/order" },
  ],
  Guides: [
    { label: "Paper Types",          href: "/guides/paper" },
    { label: "Print Sizes",          href: "/guides/sizes" },
    { label: "Finishing Techniques", href: "/guides/finishes" },
    { label: "Terminology",          href: "/guides/terminology" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#0f0f0f]">
      <div className="px-6 sm:px-14 lg:px-52 py-16 border-t border-zinc-800">
        {/* Top — logo + contact */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 pb-12 border-b border-zinc-800">
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

        {/* Link columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 py-12 border-b border-zinc-800">
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-600 mb-5">{section}</p>
              <ul className="flex flex-col gap-3">
                {links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-zinc-400 hover:text-white transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-700">
            © {new Date().getFullYear()} RestoPrint. All rights reserved.
          </p>
          <p className="italic text-[#CC0088] text-sm" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
            Made for restaurants &amp; businesses.
          </p>
        </div>
      </div>

      {/* CMYK stripe at very bottom */}
      <div className="flex h-1">
        {CMYK.map((c) => (
          <div key={c} className="flex-1" style={{ background: c }} />
        ))}
      </div>
    </footer>
  );
}
