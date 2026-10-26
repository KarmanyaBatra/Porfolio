"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/app/components/SectionHeading";
import { achievements } from "@/app/data/content";

const cards = [
  { bg: "bg-teal text-paper", shape: "rounded-full bg-saffron" },
  { bg: "bg-blush text-ink", shape: "rounded-tl-full bg-plum" },
];

export default function Achievements() {
  return (
    <section id="achievements" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeading title="Achievements" kicker="moments worth mentioning" accent="rust" />

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {achievements.map((a, i) => {
          const c = cards[i % cards.length];
          return (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 40, rotate: i % 2 ? 2 : -2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              whileHover={{ y: -6, rotate: i % 2 ? 1 : -1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ type: "spring", stiffness: 140, damping: 16, delay: i * 0.1 }}
              data-cursor-hover
              className={`relative overflow-hidden rounded-lg p-8 ${c.bg}`}
            >
              <motion.div
                aria-hidden
                className={`absolute -right-8 -top-8 h-32 w-32 opacity-90 ${c.shape}`}
                animate={{ rotate: [0, 12, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />
              <p className="relative text-xs tracking-[0.2em] uppercase opacity-75">{a.dates}</p>
              <h3 className="font-display relative mt-4 text-3xl">{a.title}</h3>
              <p className="font-display relative mt-1 text-lg italic opacity-80">{a.org}</p>
              <p className="relative mt-5 max-w-sm leading-relaxed opacity-90">{a.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
