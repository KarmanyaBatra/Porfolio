"use client";

import { motion } from "framer-motion";
import Reveal from "@/app/components/Reveal";
import SectionHeading from "@/app/components/SectionHeading";
import { about, education } from "@/app/data/content";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeading title="About" kicker="engineer, builder, occasional BBC guest" accent="saffron" />

      <div className="mt-14 grid gap-14 md:grid-cols-[1.4fr_1fr]">
        <div>
          <Reveal>
            <p className="font-display relative text-3xl leading-snug text-ink sm:text-4xl">
              <span className="absolute -left-2 -top-8 font-display text-8xl leading-none text-saffron select-none">
                &ldquo;
              </span>
              <span className="relative">
                I care about the number moving, <em className="text-rust">not just the feature shipping.</em>
              </span>
            </p>
          </Reveal>

          <div className="mt-10 space-y-5 text-lg leading-relaxed text-muted">
            {about.bio.map((paragraph, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <p>{paragraph}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, rotate: 0, y: 30 }}
          whileInView={{ opacity: 1, rotate: -2, y: 0 }}
          whileHover={{ rotate: 0, scale: 1.02 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ type: "spring", stiffness: 120, damping: 16 }}
          data-cursor-hover
          className="relative self-start rounded-lg bg-saffron p-7 text-ink shadow-[8px_8px_0_0_var(--color-ink)]"
        >
          <p className="text-xs tracking-[0.2em] uppercase">Education</p>
          <h3 className="font-display mt-3 text-2xl leading-tight">{education.school}</h3>
          <p className="mt-2 text-sm">{education.degree}</p>
          <p className="mt-1 text-xs tracking-wide uppercase opacity-70">
            {education.location} — {education.dates}
          </p>
          <p className="font-display mt-4 text-3xl">{education.gpa}</p>
          <div className="mt-5 flex flex-wrap gap-1.5">
            {education.coursework.map((course) => (
              <span key={course} className="rounded-full border border-ink/25 px-2.5 py-1 text-[11px]">
                {course}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
