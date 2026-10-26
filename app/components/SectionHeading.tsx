"use client";

import { motion } from "framer-motion";

export type Accent = "rust" | "teal" | "saffron" | "plum";

export const accentBg: Record<Accent, string> = {
  rust: "bg-rust",
  teal: "bg-teal",
  saffron: "bg-saffron",
  plum: "bg-plum",
};

export default function SectionHeading({
  title,
  kicker,
  accent,
}: {
  title: string;
  kicker: string;
  accent: Accent;
}) {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="flex items-end justify-between gap-6"
      >
        <div className="flex items-center gap-4">
          <motion.span
            className={`h-4 w-4 shrink-0 rounded-full ${accentBg[accent]}`}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 300, damping: 15, delay: 0.2 }}
          />
          <h2 className="font-display text-4xl text-ink sm:text-5xl">{title}</h2>
        </div>
        <span className="hidden max-w-xs text-right font-display text-lg italic text-faint sm:block">
          {kicker}
        </span>
      </motion.div>

      <div className="relative mt-5 h-px bg-ink/10">
        <motion.div
          className={`absolute inset-y-0 left-0 h-[3px] -translate-y-px origin-left ${accentBg[accent]}`}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          style={{ width: "100%" }}
        />
      </div>
    </div>
  );
}
