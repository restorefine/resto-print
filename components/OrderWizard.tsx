"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/constants";

const PAPER_TYPES = ["Gloss", "Matte", "Silk", "Uncoated"];
const FINISHES    = ["Standard", "Laminated", "Spot UV", "Foil"];
const SIZES       = ["A6", "A5", "A4", "A3", "DL", "Custom"];
const TIMELINES   = ["ASAP (1–2 days)", "This week", "Next week", "No rush (2+ weeks)"];
const QUANTITIES  = ["25", "50", "100", "250", "500", "1000", "1000+"];

interface WizardProps {
  initialService: string;
  onClose: () => void;
}

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

const STEP_LABELS = ["SERVICE", "TYPE", "QTY", "TIMELINE", "DETAILS"];

export default function OrderWizard({ initialService, onClose }: WizardProps) {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormData>({
    service:   initialService,
    paperType: "",
    finish:    "",
    size:      "",
    quantity:  "",
    timeline:  "",
    name:      "",
    phone:     "",
    notes:     "",
  });

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

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
    onClose();
  };

  return (
    <div className="fixed inset-0 z-100 flex items-end sm:items-center justify-center sm:p-4">
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />

      {/* Panel — bottom sheet on mobile, centred modal on sm+ */}
      <motion.div
        className="relative z-10 bg-white w-full sm:max-w-2xl sm:rounded-2xl shadow-2xl flex flex-col max-h-[92vh] rounded-t-2xl"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 60 }}
        transition={{ type: "spring", stiffness: 60, damping: 18 }}
      >
        {/* Drag handle (mobile only) */}
        <div className="sm:hidden flex justify-center pt-3 pb-1">
          <div className="w-10 h-1 rounded-full bg-zinc-200" />
        </div>

        {/* Header */}
        <div className="px-5 sm:px-8 pt-4 sm:pt-8 pb-4 sm:pb-6 border-b border-zinc-100 shrink-0">
          <div className="flex items-start justify-between mb-5">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#dc2626] font-bold mb-1">
                Enquire Now
              </p>
              <h2 className="text-xl sm:text-3xl font-black tracking-tight leading-tight">
                Tell Us About{" "}
                <span className="italic font-normal text-[#dc2626]" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
                  Your Order
                </span>
              </h2>
            </div>
            <button onClick={onClose} className="text-zinc-400 hover:text-zinc-900 transition-colors mt-1 p-1">
              <X size={20} />
            </button>
          </div>

          {/* Step progress — numbers only on mobile, labels on sm+ */}
          <div className="flex items-center">
            {STEP_LABELS.map((label, i) => (
              <div key={label} className="flex items-center flex-1 last:flex-none">
                <div className="flex flex-col items-center gap-1">
                  <div
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs font-black border-2 transition-colors ${
                      i < step
                        ? "bg-[#dc2626] border-[#dc2626] text-white"
                        : i === step
                        ? "bg-white border-[#dc2626] text-[#dc2626]"
                        : "bg-zinc-100 border-zinc-200 text-zinc-400"
                    }`}
                  >
                    {i < step ? <Check size={11} /> : i + 1}
                  </div>
                  <span className={`hidden sm:block text-[9px] uppercase tracking-[0.15em] font-bold ${i === step ? "text-[#dc2626]" : "text-zinc-400"}`}>
                    {label}
                  </span>
                </div>
                {i < STEP_LABELS.length - 1 && (
                  <div className={`flex-1 h-px mx-1.5 sm:mx-2 sm:mb-4 ${i < step ? "bg-[#dc2626]" : "bg-zinc-200"}`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step content — scrollable */}
        <div className="px-5 sm:px-8 py-5 sm:py-6 overflow-y-auto flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.18 }}
            >
              {step === 0 && <StepService value={form.service} onChange={(v) => set("service", v)} />}
              {step === 1 && <StepType form={form} set={set} />}
              {step === 2 && <StepQuantity value={form.quantity} onChange={(v) => set("quantity", v)} />}
              {step === 3 && <StepTimeline value={form.timeline} onChange={(v) => set("timeline", v)} />}
              {step === 4 && <StepDetails form={form} set={set} />}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Footer nav */}
        <div className="px-5 sm:px-8 py-4 sm:pb-8 border-t border-zinc-100 shrink-0 flex justify-between items-center gap-3">
          <button
            onClick={() => setStep((s) => s - 1)}
            disabled={step === 0}
            className="text-sm font-black uppercase tracking-widest text-zinc-400 hover:text-zinc-900 disabled:opacity-0 transition-colors shrink-0"
          >
            Back
          </button>

          <div className="flex items-center gap-2 sm:gap-3">
            <span className="hidden sm:block text-[10px] uppercase tracking-[0.3em] text-zinc-400 shrink-0">
              Step {step + 1} of {STEP_LABELS.length}
            </span>
            {step < STEP_LABELS.length - 1 ? (
              <button
                onClick={() => setStep((s) => s + 1)}
                disabled={!canNext()}
                className="bg-[#09090b] text-white font-black uppercase tracking-widest text-xs px-5 py-3 hover:bg-zinc-700 disabled:opacity-30 transition-colors"
              >
                Next →
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={!canNext()}
                className="flex items-center gap-2 bg-[#25D366] text-white font-black uppercase tracking-widest text-xs px-5 py-3 hover:bg-[#1ebe5d] disabled:opacity-30 transition-colors"
              >
                <WhatsAppSVG />
                <span>Send on WhatsApp</span>
              </button>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/* ── Steps ── */

const SERVICE_OPTIONS = [
  { title: "Menu Printing",        desc: "Menus & table cards" },
  { title: "Flyers & Leaflets",    desc: "Promotions & events" },
  { title: "Business Cards",       desc: "Professional cards" },
  { title: "Stickers & Labels",    desc: "Branding & packaging" },
  { title: "Posters",              desc: "Large-format prints" },
  { title: "Restaurant Packaging", desc: "Boxes, bags & sleeves" },
];

function StepService({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <div>
      <p className="text-[10px] uppercase tracking-[0.3em] text-[#dc2626] font-bold mb-2">Step 1 of 5</p>
      <h3 className="text-lg sm:text-xl font-black tracking-tight mb-4">What are you looking for?</h3>
      <div className="grid grid-cols-2 gap-2 sm:gap-3">
        {SERVICE_OPTIONS.map((s) => (
          <button
            key={s.title}
            onClick={() => onChange(s.title)}
            className={`text-left p-3 sm:p-4 rounded-xl border transition-all ${
              value === s.title ? "border-[#dc2626] bg-red-50" : "border-zinc-200 hover:border-zinc-400"
            }`}
          >
            <p className="font-black text-sm tracking-tight">{s.title}</p>
            <p className="text-zinc-500 text-xs mt-0.5 hidden sm:block">{s.desc}</p>
          </button>
        ))}
      </div>
    </div>
  );
}

function StepType({ form, set }: { form: FormData; set: (k: keyof FormData, v: string) => void }) {
  return (
    <div>
      <p className="text-[10px] uppercase tracking-[0.3em] text-[#dc2626] font-bold mb-2">Step 2 of 5</p>
      <h3 className="text-lg sm:text-xl font-black tracking-tight mb-4">Paper, size & finish</h3>
      <div className="space-y-4">
        <OptionRow label="Paper Type" options={PAPER_TYPES} value={form.paperType} onChange={(v) => set("paperType", v)} />
        <OptionRow label="Size"       options={SIZES}       value={form.size}      onChange={(v) => set("size", v)} />
        <OptionRow label="Finish"     options={FINISHES}    value={form.finish}    onChange={(v) => set("finish", v)} />
      </div>
    </div>
  );
}

function StepQuantity({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <div>
      <p className="text-[10px] uppercase tracking-[0.3em] text-[#dc2626] font-bold mb-2">Step 3 of 5</p>
      <h3 className="text-lg sm:text-xl font-black tracking-tight mb-4">How many do you need?</h3>
      <div className="flex flex-wrap gap-2 sm:gap-3">
        {QUANTITIES.map((q) => (
          <button
            key={q}
            onClick={() => onChange(q)}
            className={`px-4 py-3 rounded-xl border font-black text-sm transition-all ${
              value === q
                ? "border-[#dc2626] bg-red-50 text-[#dc2626]"
                : "border-zinc-200 hover:border-zinc-400 text-zinc-700"
            }`}
          >
            {q}
          </button>
        ))}
      </div>
    </div>
  );
}

function StepTimeline({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <div>
      <p className="text-[10px] uppercase tracking-[0.3em] text-[#dc2626] font-bold mb-2">Step 4 of 5</p>
      <h3 className="text-lg sm:text-xl font-black tracking-tight mb-4">When do you need it?</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
        {TIMELINES.map((t) => (
          <button
            key={t}
            onClick={() => onChange(t)}
            className={`text-left px-4 py-3 sm:px-5 sm:py-4 rounded-xl border font-black text-sm transition-all ${
              value === t
                ? "border-[#dc2626] bg-red-50 text-[#dc2626]"
                : "border-zinc-200 hover:border-zinc-400 text-zinc-700"
            }`}
          >
            {t}
          </button>
        ))}
      </div>
    </div>
  );
}

function StepDetails({ form, set }: { form: FormData; set: (k: keyof FormData, v: string) => void }) {
  return (
    <div>
      <p className="text-[10px] uppercase tracking-[0.3em] text-[#dc2626] font-bold mb-2">Step 5 of 5</p>
      <h3 className="text-lg sm:text-xl font-black tracking-tight mb-4">Your details</h3>
      <div className="space-y-3">
        <input
          type="text"
          placeholder="Your name *"
          value={form.name}
          onChange={(e) => set("name", e.target.value)}
          className="w-full border border-zinc-200 rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:border-[#dc2626] transition-colors"
        />
        <input
          type="tel"
          placeholder="Phone number *"
          value={form.phone}
          onChange={(e) => set("phone", e.target.value)}
          className="w-full border border-zinc-200 rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:border-[#dc2626] transition-colors"
        />
        <textarea
          placeholder="Any extra notes or design details? (optional)"
          value={form.notes}
          onChange={(e) => set("notes", e.target.value)}
          rows={3}
          className="w-full border border-zinc-200 rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:border-[#dc2626] transition-colors resize-none"
        />
      </div>
    </div>
  );
}

/* ── Shared ── */

function OptionRow({ label, options, value, onChange }: {
  label: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-400 font-bold mb-2">{label}</p>
      <div className="flex flex-wrap gap-2">
        {options.map((o) => (
          <button
            key={o}
            onClick={() => onChange(o)}
            className={`px-3 py-2 sm:px-4 rounded-lg border text-xs font-black transition-all ${
              value === o
                ? "border-[#dc2626] bg-red-50 text-[#dc2626]"
                : "border-zinc-200 hover:border-zinc-400 text-zinc-700"
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
