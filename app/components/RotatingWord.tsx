"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export type Word = { text: string; className: string };

export default function RotatingWord({ words, interval = 2400 }: { words: Word[]; interval?: number }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % words.length), interval);
    return () => clearInterval(id);
  }, [words.length, interval]);

  const word = words[index];

  return (
    <span className="relative inline-flex overflow-hidden pb-1 align-bottom">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={word.text}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className={`font-display italic ${word.className}`}
        >
          {word.text}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
