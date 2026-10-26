"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Search, X } from "lucide-react";
import { OPEN_COMMAND_PALETTE_EVENT } from "@/app/components/CommandPalette";
import { nav, profile } from "@/app/data/content";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(`#${e.target.id}`);
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    nav.forEach((n) => {
      const el = document.querySelector(n.href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "border-b border-ink/10 bg-paper/85 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="font-display text-lg text-ink">
          {profile.name.split(" ")[0]}
          <span className="text-rust">.</span>
        </a>

        <ul className="hidden items-center gap-1 text-sm text-muted md:flex">
          {nav.map((item) => {
            const isActive = active === item.href;
            return (
              <li key={item.href} className="relative">
                <a
                  href={item.href}
                  className={`relative z-10 block px-3 py-1.5 transition-colors ${isActive ? "text-paper" : "hover:text-ink"}`}
                >
                  {item.label}
                </a>
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-ink"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <button
            aria-label="Open command palette"
            data-cursor-hover
            onClick={() => window.dispatchEvent(new Event(OPEN_COMMAND_PALETTE_EVENT))}
            className="flex items-center gap-2 rounded-full border border-ink/15 px-3 py-1.5 text-sm text-muted transition-colors hover:border-plum hover:text-plum"
          >
            <Search size={14} />
            <kbd className="text-xs">⌘K</kbd>
          </button>
          <a
            href="#contact"
            data-cursor-hover
            className="inline-flex items-center rounded-md bg-rust px-4 py-1.5 text-sm text-paper transition-colors hover:bg-ink"
          >
            Let&apos;s talk
          </a>
        </div>

        <button aria-label="Toggle menu" className="text-ink md:hidden" onClick={() => setOpen((v) => !v)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="flex flex-col gap-4 overflow-hidden border-b border-ink/10 bg-paper/95 px-6 pb-6 text-muted backdrop-blur-md md:hidden"
          >
            {[...nav, { label: "Let's talk", href: "#contact" }].map((item) => (
              <li key={item.label}>
                <a href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
