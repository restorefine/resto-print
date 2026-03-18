"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { WHATSAPP_NUMBER } from "@/lib/constants";

const PAPER_TYPES = ["Gloss", "Matte", "Silk", "Uncoated"];
const FINISHES    = ["Standard", "Laminated", "Spot UV", "Foil"];
const SIZES       = ["A6", "A5", "A4", "A3", "DL", "Custom"];
const TIMELINES   = ["ASAP (1–2 days)", "This week", "Next week", "No rush (2+ weeks)"];
const QUANTITIES  = ["25", "50", "100", "250", "500", "1000", "1000+"];

const STEPS = [
  { label: "SERVICE" },
  { label: "TYPE" },
  { label: "QUANTITY" },
  { label: "TIMELINE" },
  { label: "DETAILS" },
];

const SERVICE_OPTIONS = [
  { title: "Menu Printing",        desc: "Menus & table cards" },
  { title: "Flyers & Leaflets",    desc: "Promotions & events" },
  { title: "Business Cards",       desc: "Professional cards" },
  { title: "Stickers & Labels",    desc: "Branding & packaging" },
  { title: "Posters",              desc: "Large-format prints" },
  { title: "Restaurant Packaging", desc: "Boxes, bags & sleeves" },
];

type FormData = {
  service: string;
  paperType: string;
  finish: string;
  size: string;
  quantity: string;
  timeline: string;
  name: string;
  phone: string;
  notes: string;
};

// Scattered background dots — fixed positions so no hydration mismatch
const DOTS = [
  { top: "8%",  left: "3%"  }, { top: "15%", left: "18%" }, { top: "6%",  left: "35%" },
  { top: "22%", left: "52%" }, { top: "11%", left: "68%" }, { top: "18%", left: "82%" },
  { top: "5%",  left: "91%" }, { top: "32%", left: "7%"  }, { top: "38%", left: "28%" },
  { top: "29%", left: "44%" }, { top: "41%", left: "62%" }, { top: "35%", left: "76%" },
  { top: "27%", left: "94%" }, { top: "55%", left: "12%" }, { top: "62%", left: "31%" },
  { top: "48%", left: "57%" }, { top: "58%", left: "71%" }, { top: "44%", left: "87%" },
  { top: "72%", left: "4%"  }, { top: "68%", left: "22%" }, { top: "75%", left: "48%" },
  { top: "81%", left: "65%" }, { top: "70%", left: "79%" }, { top: "78%", left: "96%" },
  { top: "88%", left: "15%" }, { top: "92%", left: "38%" }, { top: "85%", left: "58%" },
  { top: "91%", left: "74%" }, { top: "86%", left: "90%" }, { top: "50%", left: "50%" },
];

export default function OrderPage() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<FormData>({
    service: "", paperType: "", finish: "", size: "",
    quantity: "", timeline: "", name: "", phone: "", notes: "",
  });

  const set = (key: keyof FormData, val: string) =>
    setForm((f) => ({ ...f, [key]: val }));

  const canNext = () => {
    if (step === 0) return !!form.service;
    if (step === 1) return !!form.paperType && !!form.size && !!form.finish;
    if (step === 2) return !!form.quantity;
    if (step === 3) return !!form.timeline;
    if (step === 4) return !!form.name && !!form.phone;
    return false;
  };

  const handleSubmit = () => {
    const msg = [
      `Hi! I'd like to place a printing order.`,
      ``,
      `📋 Service: ${form.service}`,
      `📄 Paper: ${form.paperType} · ${form.size} · ${form.finish}`,
      `🔢 Quantity: ${form.quantity}`,
      `⏱ Timeline: ${form.timeline}`,
      `👤 Name: ${form.name}`,
      `📞 Phone: ${form.phone}`,
      form.notes ? `📝 Notes: ${form.notes}` : "",
    ].filter(Boolean).join("\n");

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
    setSubmitted(true);
  };

  return (
    <div className="relative min-h-screen bg-white text-[#09090b] overflow-hidden">

      {/* Scattered red dots background */}
      {DOTS.map((d, i) => (
        <span
          key={i}
          className="absolute w-1 h-1 rounded-full bg-[#CC0088] opacity-30 pointer-events-none"
          style={{ top: d.top, left: d.left }}
        />
      ))}

      {/* Navbar */}
      <header className="relative z-10 flex items-center justify-between px-6 sm:px-14 lg:px-52 h-16 border-b border-[#e8e7e2]">
        <Link href="/">
          <Image
            src="/resto-print-logo-black.png"
            alt="RestoPrint"
            width={140}
            height={36}
            className="h-8 w-auto object-contain"
            priority
          />
        </Link>
        <Link
          href="/"
          className="text-[10px] uppercase tracking-[0.3em] text-[#71717a] hover:text-[#0f0f0f] transition-colors"
        >
          ← Back
        </Link>
      </header>

      {/* Page */}
      <div className="relative z-10 px-6 sm:px-14 lg:px-52 py-12 sm:py-16">

        {/* Heading */}
        <p className="text-[10px] uppercase tracking-[0.3em] text-[#0099CC] font-bold mb-3">
          Enquire Now
        </p>
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight mb-10">
          Tell Us About{" "}
          <span
            className="italic font-normal text-[#09090b]"
            style={{ fontFamily: "'Times New Roman', Times, serif" }}
          >
            Your Project
          </span>
        </h1>

        {/* Step progress bar */}
        <div className="flex items-start mb-12">
          {STEPS.map((s, i) => (
            <div key={s.label} className="flex items-center flex-1 last:flex-none">
              <div className="flex flex-col items-center gap-1.5">
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-black border-2 transition-all ${
                    i < step
                      ? "bg-[#CC0088] border-[#CC0088] text-white"
                      : i === step
                      ? "bg-white border-[#09090b] text-[#09090b] shadow-[0_0_0_3px_rgba(220,38,38,0.2)]"
                      : "bg-[#f5f4f0] border-[#e8e7e2] text-[#71717a]"
                  }`}
                >
                  {i < step ? <Check size={14} /> : i + 1}
                </div>
                <span className={`text-[9px] uppercase tracking-[0.2em] font-bold ${
                  i === step ? "text-[#0f0f0f]" : i < step ? "text-[#CC0088]" : "text-[#71717a]"
                }`}>
                  {s.label}
                </span>
              </div>
              {i < STEPS.length - 1 && (
                <div className={`flex-1 h-px mx-3 mb-5 transition-colors ${
                  i < step ? "bg-[#CC0088]" : "bg-[#e8e7e2]"
                }`} />
              )}
            </div>
          ))}
        </div>

        {/* Step content */}
        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="done"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center justify-center text-center py-24"
            >
              <div className="w-16 h-16 rounded-full bg-[#25D366] flex items-center justify-center mb-6">
                <Check size={28} className="text-white" />
              </div>
              <h2 className="text-3xl font-black uppercase tracking-tight mb-3">Order Sent!</h2>
              <p className="text-[#71717a] text-sm mb-8 max-w-xs">
                Your details have been sent via WhatsApp. We&apos;ll be in touch shortly.
              </p>
              <Link
                href="/"
                className="bg-[#09090b] text-white font-black uppercase tracking-widest text-xs px-8 py-4 hover:bg-zinc-700 transition-colors"
              >
                Back to Home
              </Link>
            </motion.div>
          ) : (
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.2 }}
            >
              {/* Step label */}
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#0099CC] font-bold mb-3">
                Step {step + 1} of {STEPS.length}
              </p>

              {step === 0 && (
                <>
                  <h2 className="text-2xl sm:text-4xl font-black tracking-tight mb-6">
                    What are you looking for?
                  </h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                    {SERVICE_OPTIONS.map((s) => (
                      <button
                        key={s.title}
                        onClick={() => set("service", s.title)}
                        className={`text-left p-5 rounded-2xl border transition-all ${
                          form.service === s.title
                            ? "border-[#CC0088] bg-red-50"
                            : "border-[#e8e7e2] bg-white hover:border-[#0f0f0f] hover:shadow-sm"
                        }`}
                      >
                        <p className="font-black text-base tracking-tight">{s.title}</p>
                        <p className="text-zinc-400 text-sm mt-1">{s.desc}</p>
                      </button>
                    ))}
                  </div>
                </>
              )}

              {step === 1 && (
                <>
                  <h2 className="text-2xl sm:text-4xl font-black tracking-tight mb-6">
                    Paper, size & finish
                  </h2>
                  <div className="space-y-6">
                    <OptionRow label="Paper Type" options={PAPER_TYPES} value={form.paperType} onChange={(v) => set("paperType", v)} />
                    <OptionRow label="Size"       options={SIZES}       value={form.size}      onChange={(v) => set("size", v)} />
                    <OptionRow label="Finish"     options={FINISHES}    value={form.finish}    onChange={(v) => set("finish", v)} />
                  </div>
                </>
              )}

              {step === 2 && (
                <>
                  <h2 className="text-2xl sm:text-4xl font-black tracking-tight mb-6">
                    How many do you need?
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {QUANTITIES.map((q) => (
                      <button
                        key={q}
                        onClick={() => set("quantity", q)}
                        className={`px-6 py-3 rounded-2xl border font-black text-sm transition-all ${
                          form.quantity === q
                            ? "border-[#CC0088] bg-red-50 text-[#CC0088]"
                            : "border-[#e8e7e2] bg-white hover:border-[#0f0f0f] text-[#71717a]"
                        }`}
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </>
              )}

              {step === 3 && (
                <>
                  <h2 className="text-2xl sm:text-4xl font-black tracking-tight mb-6">
                    When do you need it?
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {TIMELINES.map((t) => (
                      <button
                        key={t}
                        onClick={() => set("timeline", t)}
                        className={`text-left px-5 py-4 rounded-2xl border font-black text-sm transition-all ${
                          form.timeline === t
                            ? "border-[#CC0088] bg-red-50 text-[#CC0088]"
                            : "border-[#e8e7e2] bg-white hover:border-[#0f0f0f] text-[#71717a]"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </>
              )}

              {step === 4 && (
                <>
                  <h2 className="text-2xl sm:text-4xl font-black tracking-tight mb-6">
                    Your details
                  </h2>
                  <div className="space-y-3 max-w-xl">
                    <input
                      type="text"
                      placeholder="Your name *"
                      value={form.name}
                      onChange={(e) => set("name", e.target.value)}
                      className="w-full border border-[#e8e7e2] rounded-2xl px-4 py-3 text-sm font-medium focus:outline-none focus:border-[#0f0f0f] transition-colors bg-white"
                    />
                    <input
                      type="tel"
                      placeholder="Phone number *"
                      value={form.phone}
                      onChange={(e) => set("phone", e.target.value)}
                      className="w-full border border-[#e8e7e2] rounded-2xl px-4 py-3 text-sm font-medium focus:outline-none focus:border-[#0f0f0f] transition-colors bg-white"
                    />
                    <textarea
                      placeholder="Any extra notes or design details? (optional)"
                      value={form.notes}
                      onChange={(e) => set("notes", e.target.value)}
                      rows={4}
                      className="w-full border border-[#e8e7e2] rounded-2xl px-4 py-3 text-sm font-medium focus:outline-none focus:border-[#0f0f0f] transition-colors resize-none bg-white"
                    />
                  </div>
                </>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation */}
        {!submitted && (
          <div className="flex justify-between items-center mt-12 pt-6 border-t border-[#e8e7e2]">
            <button
              onClick={() => setStep((s) => s - 1)}
              disabled={step === 0}
              className="text-sm font-black uppercase tracking-widest text-[#71717a] hover:text-[#0f0f0f] disabled:opacity-0 transition-colors"
            >
              ← Back
            </button>
            <div className="flex items-center gap-4">
              {step < STEPS.length - 1 ? (
                <button
                  onClick={() => setStep((s) => s + 1)}
                  disabled={!canNext()}
                  className="bg-[#09090b] text-white font-black uppercase tracking-widest text-xs px-8 py-4 hover:bg-zinc-700 disabled:opacity-30 transition-colors"
                >
                  Next →
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={!canNext()}
                  className="flex items-center gap-2 bg-[#25D366] text-white font-black uppercase tracking-widest text-xs px-8 py-4 hover:bg-[#1ebe5d] disabled:opacity-30 transition-colors"
                >
                  <WhatsAppSVG />
                  Send on WhatsApp
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* ── Helpers ── */

function OptionRow({ label, options, value, onChange }: {
  label: string; options: string[]; value: string; onChange: (v: string) => void;
}) {
  return (
    <div>
      <p className="text-[10px] uppercase tracking-[0.25em] text-[#71717a] font-bold mb-2">{label}</p>
      <div className="flex flex-wrap gap-2">
        {options.map((o) => (
          <button
            key={o}
            onClick={() => onChange(o)}
            className={`px-5 py-2.5 rounded-xl border text-sm font-black transition-all ${
              value === o
                ? "border-[#CC0088] bg-red-50 text-[#CC0088]"
                : "border-[#e8e7e2] bg-white hover:border-[#0f0f0f] text-[#71717a]"
            }`}
          >
            {o}
          </button>
        ))}
      </div>
    </div>
  );
}

function WhatsAppSVG() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.886 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
