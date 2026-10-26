"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/app/components/BrandIcons";
import HeroShapes from "@/app/components/HeroShapes";
import Magnetic from "@/app/components/Magnetic";
import RotatingWord, { type Word } from "@/app/components/RotatingWord";
import { profile } from "@/app/data/content";

const socialIcons: Record<string, typeof GithubIcon> = {
  GitHub: GithubIcon,
  LinkedIn: LinkedinIcon,
};

const builds: Word[] = [
  { text: "web platforms", className: "text-rust" },
  { text: "ML models", className: "text-teal" },
  { text: "vision pipelines", className: "text-plum" },
  { text: "IoT systems", className: "text-ink underline decoration-saffron decoration-[6px] underline-offset-4" },
];

const [firstName, lastName] = profile.name.split(" ");

function Letters({ text, delay, className }: { text: string; delay: number; className?: string }) {
  return (
    <span className={`inline-flex overflow-hidden pb-[0.08em] ${className ?? ""}`}>
      {text.split("").map((ch, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ y: "110%" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, delay: delay + i * 0.04, ease: [0.22, 1, 0.36, 1] }}
        >
          {ch}
        </motion.span>
      ))}
    </span>
  );
}

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-6 pt-24 md:grid-cols-[1.25fr_1fr]">
        <div>
          <motion.p {...fadeUp(0.1)} className="mb-6 flex items-center gap-3 text-sm tracking-[0.2em] text-faint uppercase">
            <span className="h-2 w-2 rounded-full bg-teal" />
            {profile.location}
          </motion.p>

          <h1 className="font-display text-6xl leading-[0.95] tracking-tight text-ink sm:text-7xl lg:text-8xl">
            <Letters text={firstName} delay={0.2} />
            <br />
            <Letters text={`${lastName}.`} delay={0.5} className="italic text-rust" />
          </h1>

          <motion.p {...fadeUp(1)} className="font-display mt-6 text-2xl text-muted sm:text-3xl">
            Engineer who ships <RotatingWord words={builds} />
          </motion.p>

          <motion.p
            {...fadeUp(1.15)}
            className="mt-6 max-w-xl border-l-2 border-saffron pl-5 text-lg leading-relaxed text-muted"
          >
            {profile.tagline}
          </motion.p>

          <motion.div {...fadeUp(1.3)} className="mt-10 flex flex-wrap items-center gap-4">
            <Magnetic>
              <a
                href="#experience"
                data-cursor-hover
                className="group relative inline-flex overflow-hidden rounded-md bg-ink px-6 py-3 text-sm font-medium text-paper"
              >
                <span className="absolute inset-0 origin-left scale-x-0 bg-rust transition-transform duration-500 ease-out group-hover:scale-x-100" />
                <span className="relative">See my work →</span>
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
                data-cursor-hover
                className="group relative inline-flex overflow-hidden rounded-md border border-ink/20 px-6 py-3 text-sm font-medium text-ink"
              >
                <span className="absolute inset-0 origin-bottom scale-y-0 bg-saffron transition-transform duration-500 ease-out group-hover:scale-y-100" />
                <span className="relative">Resume</span>
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
                      className="flex rounded-full border border-ink/15 p-2.5 text-muted transition-colors hover:border-teal hover:bg-teal hover:text-paper"
                    >
                      {Icon ? <Icon width={18} height={18} /> : s.label}
                    </a>
                  </Magnetic>
                );
              })}
            </div>
          </motion.div>
        </div>

        <div className="hidden md:block">
          <HeroShapes />
        </div>
      </div>

      <motion.a
        href="#about"
        data-cursor-hover
        aria-label="Scroll to about section"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col lg:flex items-center gap-2 text-xs tracking-[0.2em] text-faint uppercase"
        {...fadeUp(1.6)}
      >
        Scroll
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
          <ArrowDown size={16} />
        </motion.span>
      </motion.a>
    </section>
  );
}
