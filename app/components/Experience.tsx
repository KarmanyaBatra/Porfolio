"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import Reveal from "@/app/components/Reveal";
import SectionHeading from "@/app/components/SectionHeading";
import CountUp from "@/app/components/CountUp";
import { experience } from "@/app/data/content";

const palette = [
  { bar: "bg-teal", text: "text-teal", tint: "hover:bg-teal/5", border: "border-teal/40" },
  { bar: "bg-rust", text: "text-rust", tint: "hover:bg-rust/5", border: "border-rust/40" },
  { bar: "bg-plum", text: "text-plum", tint: "hover:bg-plum/5", border: "border-plum/40" },
];

export default function Experience() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeading title="Experience" kicker="from intern to engineer at Rayonix" accent="teal" />

      <div className="mt-12 space-y-4">
        {experience.map((role, i) => {
          const isOpen = openIndex === i;
          const isCurrent = role.dates.toLowerCase().includes("present");
          const c = palette[i % palette.length];
          return (
            <Reveal key={`${role.company}-${role.dates}`} delay={i * 0.08}>
              <motion.div
                layout
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className={`relative overflow-hidden rounded-lg border border-ink/10 bg-paper pl-7 pr-5 transition-colors ${c.tint}`}
              >
                <motion.span
                  className={`absolute inset-y-0 left-0 w-1.5 origin-top ${c.bar}`}
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2 + i * 0.1 }}
                />
                <span
                  aria-hidden
                  className={`font-display pointer-events-none absolute right-20 top-2 select-none text-8xl opacity-[0.07] ${c.text}`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  data-cursor-hover
                  className="flex w-full items-center justify-between gap-4 py-6 text-left"
                  aria-expanded={isOpen}
                >
                  <div>
                    <h3 className="font-display flex flex-wrap items-center gap-x-2 gap-y-1 text-2xl text-ink">
                      {role.title}
                      <span className={`italic ${c.text}`}>@ {role.company}</span>
                      {isCurrent && (
                        <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-sans text-[10px] tracking-wide uppercase ${c.border} ${c.text}`}>
                          <span className="relative flex h-1.5 w-1.5">
                            <span className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 ${c.bar}`} />
                            <span className={`relative inline-flex h-1.5 w-1.5 rounded-full ${c.bar}`} />
                          </span>
                          current
                        </span>
                      )}
                    </h3>
                    <p className="mt-1 text-sm text-faint">
                      {role.location} — {role.dates}
                    </p>
                  </div>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border ${c.border} ${c.text}`}
                  >
                    <Plus size={18} />
                  </motion.span>
                </button>

                {role.metrics && (
                  <div className="grid grid-cols-2 gap-4 pb-6 sm:grid-cols-4">
                    {role.metrics.map((metric) => (
                      <div key={metric.label}>
                        <div className={`font-display text-3xl ${c.text}`}>
                          <CountUp value={metric.value} />
                        </div>
                        <div className="text-xs text-faint">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                )}

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.ul
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="space-y-2.5 overflow-hidden pb-7 text-[15px] text-muted"
                    >
                      {role.bullets.map((bullet, bi) => (
                        <motion.li
                          key={bi}
                          initial={{ opacity: 0, x: -12 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.05 * bi + 0.1 }}
                          className="flex gap-3"
                        >
                          <span className={`mt-2 h-1.5 w-1.5 shrink-0 rotate-45 ${c.bar}`} />
                          {bullet}
                        </motion.li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </motion.div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
