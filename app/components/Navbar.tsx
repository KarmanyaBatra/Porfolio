"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, Search, X } from "lucide-react";
import { OPEN_COMMAND_PALETTE_EVENT } from "@/app/components/CommandPalette";
import { nav, profile } from "@/app/data/content";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-black/70 backdrop-blur-md border-b border-white/10" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-5xl px-6 h-16 flex items-center justify-between">
        <a href="#top" className="font-display font-semibold tracking-tight text-white">
          {profile.name}
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm text-neutral-300">
          {nav.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="hover:text-white transition-colors">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <button
            aria-label="Open command palette"
            data-cursor-hover
            onClick={() => window.dispatchEvent(new Event(OPEN_COMMAND_PALETTE_EVENT))}
            className="flex items-center gap-2 rounded-full border border-white/15 px-3 py-1.5 text-sm text-neutral-400 hover:text-white transition-colors"
          >
            <Search size={14} />
            <kbd className="text-xs text-neutral-500">⌘K</kbd>
          </button>
          <a
            href="#contact"
            data-cursor-hover
            className="inline-flex items-center rounded-md border border-white/15 px-4 py-1.5 text-sm text-white transition-colors hover:border-lime-400 hover:text-lime-400"
          >
            Let&apos;s talk
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          className="md:hidden text-white"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <motion.ul
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden flex flex-col gap-4 px-6 pb-6 text-neutral-200 bg-black/90 backdrop-blur-md border-b border-white/10"
        >
          {nav.map((item) => (
            <li key={item.href}>
              <a href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" onClick={() => setOpen(false)}>
              Let&apos;s talk
            </a>
          </li>
        </motion.ul>
      )}
    </header>
  );
}
