"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, ClipboardList, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import { steps, fadeUp, WHATSAPP_URL, CMYK } from "@/lib/constants";
import SectionLabel from "@/components/SectionLabel";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

const stepIcons = [MessageCircle, ClipboardList, CheckCircle];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section
      id="how-it-works"
      className="bg-[#0f0f0f] px-6 sm:px-14 lg:px-52 py-24 border-t border-zinc-800"
    >
      <SectionLabel num="03" label="The Process" light />

      <motion.h2
        initial="hidden" whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUp}
        className="text-4xl sm:text-6xl font-black text-white uppercase tracking-tight mb-20 max-w-lg leading-none"
      >
        How to{" "}
        <span
          className="font-normal italic text-[#CC0088]"
          style={{ fontFamily: "'Times New Roman', Times, serif" }}
        >
          Order
        </span>
      </motion.h2>

      {/* Steps — 3-column on desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-zinc-800">
        {steps.map((step, i) => {
          const Icon = stepIcons[i];
          const isActive = activeStep === i;
          const color = CMYK[i]; // C → M → Y per step

          return (
            <motion.button
              key={step.num}
              initial="hidden" whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp} custom={i * 0.15}
              onMouseEnter={() => setActiveStep(i)}
              onMouseLeave={() => setActiveStep(null)}
              className="text-left group relative flex flex-col gap-6 p-8 lg:p-10 transition-colors bg-[#1a1a1a]"
              style={{ backgroundColor: isActive ? color : undefined }}
            >
              {/* Background number */}
              <span
                className="absolute right-6 top-4 text-8xl font-black select-none leading-none transition-colors text-zinc-800"
                style={{ color: isActive ? `${color}55` : undefined }}
              >
                {step.num}
              </span>

              {/* Icon */}
              <div
                className="relative z-10 w-10 h-10 flex items-center justify-center border transition-colors border-zinc-700 text-zinc-500"
                style={isActive ? { borderColor: `${color}66`, color: i === 2 ? "#131313" : "#fff" } : undefined}
              >
                <Icon size={18} strokeWidth={1.5} />
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-col gap-3">
                <span
                  className="text-[10px] uppercase tracking-[0.3em] transition-colors text-zinc-600"
                  style={isActive ? { color: i === 2 ? "#131313" : "#ffffffaa" } : undefined}
                >
                  Step {step.num} of {steps.length}
                </span>
                <h3
                  className="font-black uppercase tracking-tight text-xl leading-tight transition-colors text-zinc-100"
                  style={isActive ? { color: i === 2 ? "#131313" : "#ffffff" } : undefined}
                >
                  {step.title}
                </h3>
                <p
                  className="text-sm leading-relaxed transition-colors text-zinc-500"
                  style={isActive ? { color: i === 2 ? "#333" : "#ffffffbb" } : undefined}
                >
                  {step.desc}
                </p>
              </div>

              {/* Start here CTA on step 1 */}
              {i === 0 && (
                <Link
                  href="/order"
                  className="relative z-10 self-start inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] font-black transition-colors text-zinc-500"
                  style={isActive ? { color: "#fff" } : undefined}
                >
                  Start Here <ArrowRight size={11} />
                </Link>
              )}

              {/* Bottom indicator */}
              <div
                className="relative z-10 mt-auto h-0.5 w-8 transition-all bg-zinc-700"
                style={isActive ? { background: i === 2 ? "#131313" : "#ffffff55", width: "3rem" } : undefined}
              />
            </motion.button>
          );
        })}
      </div>

      {/* CTA band */}
      <motion.div
        initial="hidden" whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp} custom={0.4}
        className="mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-10 border-t border-zinc-800"
      >
        <p className="text-zinc-400 text-sm max-w-md leading-relaxed">
          The whole process takes{" "}
          <strong className="text-white">less than 2 minutes.</strong>{" "}
          Send us a message and we&rsquo;ll handle the rest.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 inline-flex items-center gap-3 bg-white text-[#0f0f0f] font-black uppercase tracking-widest text-[11px] px-8 py-4 hover:bg-zinc-200 transition-colors"
        >
          <WhatsAppIcon size={16} />
          Start Your Order
        </a>
      </motion.div>
    </section>
  );
}
