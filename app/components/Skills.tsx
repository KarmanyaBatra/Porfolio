"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/app/components/SectionHeading";
import { skills } from "@/app/data/content";

const chipColors = [
  "border-rust/40 text-rust hover:bg-rust hover:text-paper",
  "border-teal/40 text-teal hover:bg-teal hover:text-paper",
  "border-saffron text-ink hover:bg-saffron",
  "border-plum/40 text-plum hover:bg-plum hover:text-paper",
  "border-ink/30 text-ink hover:bg-ink hover:text-paper",
];

const dotColors = ["bg-rust", "bg-teal", "bg-saffron", "bg-plum", "bg-ink"];

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeading title="Skills" kicker="the toolbox, sorted" accent="plum" />

      <div className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2">
        {skills.map((group, gi) => (
          <motion.div
            key={group.group}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05, delayChildren: gi * 0.08 } } }}
          >
            <h3 className="flex items-center gap-2 text-xs tracking-[0.2em] text-faint uppercase">
              <span className={`h-2 w-2 rounded-full ${dotColors[gi % dotColors.length]}`} />
              {group.group}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <motion.span
                  key={skill}
                  data-cursor-hover
                  variants={{
                    hidden: { opacity: 0, scale: 0.6, y: 10 },
                    show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 260, damping: 18 } },
                  }}
                  whileHover={{ y: -3 }}
                  className={`rounded-full border px-3.5 py-1.5 text-sm transition-colors duration-200 ${chipColors[gi % chipColors.length]}`}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
