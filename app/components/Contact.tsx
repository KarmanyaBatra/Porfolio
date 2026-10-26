"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Copy } from "lucide-react";
import Magnetic from "@/app/components/Magnetic";
import { profile } from "@/app/data/content";

const headline = ["Let's", "build", "something", "good."];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-plum py-32 text-paper">
      <motion.div
        aria-hidden
        className="absolute -left-20 top-16 h-56 w-56 rounded-full bg-rust"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute -right-10 bottom-10 h-44 w-44 rounded-tl-full bg-saffron"
        animate={{ rotate: [0, -10, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute right-1/3 top-10 h-16 w-16 rounded-full border-2 border-paper/40"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <p className="text-xs tracking-[0.2em] text-paper/60 uppercase">Contact</p>

        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          className="font-display mt-6 text-5xl leading-[1.05] sm:text-7xl md:text-8xl"
        >
          {headline.map((word, i) => (
            <span key={word} className="mr-[0.25em] inline-flex overflow-hidden pb-[0.1em]">
              <motion.span
                className={`inline-block ${i === headline.length - 1 ? "italic text-saffron" : ""}`}
                variants={{
                  hidden: { y: "110%" },
                  show: { y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
                }}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-8 max-w-md text-lg text-paper/75"
        >
          Have a role, project, or idea in mind? My inbox is open.
        </motion.p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Magnetic strength={0.2}>
            <a
              href={`mailto:${profile.email}`}
              data-cursor-hover
              className="group inline-flex items-center gap-3 rounded-full bg-paper px-7 py-4 text-ink"
            >
              <span className="font-display text-xl sm:text-2xl">{profile.email}</span>
              <span className="text-rust transition-transform duration-300 group-hover:translate-x-1.5">→</span>
            </a>
          </Magnetic>
          <button
            onClick={copy}
            data-cursor-hover
            aria-label="Copy email address"
            className="inline-flex items-center gap-2 rounded-full border border-paper/30 px-5 py-4 text-sm transition-colors hover:bg-paper/10"
          >
            {copied ? <Check size={16} /> : <Copy size={16} />}
            {copied ? "Copied" : "Copy"}
          </button>
        </div>

        <div className="mt-10 flex gap-6 text-sm text-paper/70">
          {profile.socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              data-cursor-hover
              className="underline decoration-paper/30 underline-offset-4 transition-colors hover:text-saffron hover:decoration-saffron"
            >
              {s.label} ↗
            </a>
          ))}
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            data-cursor-hover
            className="underline decoration-paper/30 underline-offset-4 transition-colors hover:text-saffron hover:decoration-saffron"
          >
            Resume ↗
          </a>
        </div>
      </div>
    </section>
  );
}
