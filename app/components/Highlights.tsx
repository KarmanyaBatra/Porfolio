"use client";

import { motion } from "framer-motion";
import CountUp from "@/app/components/CountUp";
import { highlights } from "@/app/data/content";

export default function Highlights() {
  return (
    <section className="relative overflow-hidden bg-rust py-20 text-paper">
      <motion.div
        aria-hidden
        className="absolute -right-24 -top-24 h-80 w-80 rounded-full border-[40px] border-saffron/40"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        aria-hidden
        className="absolute -bottom-16 left-10 h-40 w-40 rounded-tr-full bg-plum/50"
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-2xl italic text-paper/80"
        >
          By the numbers
        </motion.p>

        <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-4">
          {highlights.map((h, i) => (
            <motion.div
              key={h.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="border-t border-paper/30 pt-4"
            >
              <div className="font-display text-5xl sm:text-6xl">
                <CountUp value={h.value} duration={1.6} />
              </div>
              <p className="mt-3 text-sm leading-snug text-paper/80">{h.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
