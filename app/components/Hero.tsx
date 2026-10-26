"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/app/components/BrandIcons";
import Magnetic from "@/app/components/Magnetic";
import Marquee from "@/app/components/Marquee";
import Typewriter from "@/app/components/Typewriter";
import { profile, skills } from "@/app/data/content";

const socialIcons: Record<string, typeof GithubIcon> = {
  GitHub: GithubIcon,
  LinkedIn: LinkedinIcon,
};

const tickerItems = skills.flatMap((g) => g.items).slice(0, 14);

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="relative flex min-h-[90vh] items-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mx-auto w-full max-w-5xl px-6 pt-24"
        >
          <motion.p
            variants={item}
            className="mb-4 flex items-center gap-2 font-mono text-sm text-lime-400"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-lime-400" />
            {profile.name} — {profile.location}
          </motion.p>

          <motion.h1
            variants={item}
            className="font-display text-5xl font-bold leading-[0.95] tracking-tight text-white sm:text-7xl md:text-8xl"
          >
            {profile.name.split(" ")[0]}
            <br />
            <span className="text-neutral-600">builds</span>
          </motion.h1>

          <motion.div
            variants={item}
            className="mt-4 min-h-[1.5em] font-mono text-xl text-lime-400 sm:text-2xl"
          >
            <Typewriter words={profile.roles} />
          </motion.div>

          <motion.p variants={item} className="mt-6 max-w-xl text-lg text-neutral-400">
            {profile.tagline}
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
            <Magnetic>
              <a
                href="#experience"
                data-cursor-hover
                className="inline-flex rounded-md bg-lime-400 px-6 py-3 text-sm font-semibold text-black"
              >
                See my work
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
                data-cursor-hover
                className="inline-flex rounded-md border border-white/15 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
              >
                Resume
              </a>
            </Magnetic>

            <div className="ml-2 flex items-center gap-3">
              {profile.socials.map((s) => {
                const Icon = socialIcons[s.label];
                return (
                  <Magnetic key={s.label}>
                    <a
                      href={s.href}
                      aria-label={s.label}
                      target="_blank"
                      rel="noreferrer"
                      data-cursor-hover
                      className="flex rounded-full border border-white/10 p-2.5 text-neutral-300 transition-colors hover:border-white/30 hover:text-white"
                    >
                      {Icon ? <Icon width={18} height={18} /> : s.label}
                    </a>
                  </Magnetic>
                );
              })}
            </div>
          </motion.div>
        </motion.div>

        <motion.a
          href="#about"
          data-cursor-hover
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-neutral-500 hover:text-white transition-colors"
          aria-label="Scroll to about section"
        >
          <ArrowDown size={20} />
        </motion.a>
      </div>

      <Marquee items={tickerItems} />
    </section>
  );
}
