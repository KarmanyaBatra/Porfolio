"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Reveal from "@/app/components/Reveal";
import SectionHeading from "@/app/components/SectionHeading";
import CountUp from "@/app/components/CountUp";
import { experience } from "@/app/data/content";

export default function Experience() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-16">
      <SectionHeading index={2} title="Experience" />

      <div className="mt-10 space-y-3">
        {experience.map((role, i) => {
          const isOpen = openIndex === i;
          const isCurrent = role.dates.toLowerCase().includes("present");
          return (
            <Reveal key={`${role.company}-${role.dates}`} delay={i * 0.08}>
              <div
                className={`relative border-l-2 pl-5 transition-colors ${isOpen ? "border-lime-400" : "border-white/15"}`}
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-2 top-0 select-none font-mono text-7xl font-bold text-white/[0.03] sm:text-8xl"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  data-cursor-hover
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <div>
                    <h3 className="flex items-center gap-2 text-lg font-medium text-white">
                      {role.title} <span className="text-neutral-500">· {role.company}</span>
                      {isCurrent && (
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-lime-400/40 px-2 py-0.5 font-mono text-[10px] text-lime-400">
                          <span className="h-1.5 w-1.5 rounded-full bg-lime-400" /> current
                        </span>
                      )}
                    </h3>
                    <p className="mt-1 font-mono text-sm text-neutral-500">
                      {role.location} — {role.dates}
                    </p>
                  </div>
                  <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.25 }}>
                    <ChevronDown className="shrink-0 text-neutral-400" size={20} />
                  </motion.div>
                </button>

                {role.metrics && (
                  <div className="grid grid-cols-2 gap-4 pb-5 sm:grid-cols-4">
                    {role.metrics.map((metric) => (
                      <div key={metric.label}>
                        <div className="font-mono text-xl font-semibold text-lime-400">
                          <CountUp value={metric.value} />
                        </div>
                        <div className="text-xs text-neutral-500">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                )}

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <ul className="space-y-2 pb-6 text-sm text-neutral-400">
                        {role.bullets.map((bullet, bi) => (
                          <li key={bi} className="flex gap-2">
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-lime-400" />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
