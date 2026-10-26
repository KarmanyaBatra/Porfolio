"use client";

import { useEffect, useState, useCallback } from "react";
import { Command } from "cmdk";
import {
  ArrowUpRight,
  Download,
  Mail,
  Check,
  type LucideIcon,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/app/components/BrandIcons";
import { nav, profile } from "@/app/data/content";

type Item = {
  label: string;
  hint?: string;
  icon?: LucideIcon | typeof GithubIcon;
  onSelect: () => void;
};

export const OPEN_COMMAND_PALETTE_EVENT = "open-command-palette";

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === "Escape") setOpen(false);
    };
    const openFromEvent = () => setOpen(true);
    document.addEventListener("keydown", down);
    window.addEventListener(OPEN_COMMAND_PALETTE_EVENT, openFromEvent);
    return () => {
      document.removeEventListener("keydown", down);
      window.removeEventListener(OPEN_COMMAND_PALETTE_EVENT, openFromEvent);
    };
  }, []);

  const go = useCallback((href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  }, []);

  const navItems: Item[] = nav.map((n) => ({ label: `Go to ${n.label}`, onSelect: () => go(n.href) }));

  const actionItems: Item[] = [
    {
      label: copied ? "Email copied!" : "Copy email address",
      hint: profile.email,
      icon: copied ? Check : Mail,
      onSelect: () => {
        navigator.clipboard.writeText(profile.email);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      },
    },
    {
      label: "Download resume",
      icon: Download,
      onSelect: () => {
        window.open(profile.resumeUrl, "_blank");
        setOpen(false);
      },
    },
    {
      label: "Open GitHub",
      icon: GithubIcon,
      onSelect: () => {
        window.open(profile.socials.find((s) => s.label === "GitHub")?.href, "_blank");
        setOpen(false);
      },
    },
    {
      label: "Open LinkedIn",
      icon: LinkedinIcon,
      onSelect: () => {
        window.open(profile.socials.find((s) => s.label === "LinkedIn")?.href, "_blank");
        setOpen(false);
      },
    },
  ];

  return (
    <Command.Dialog
      open={open}
      onOpenChange={setOpen}
      label="Command palette"
      overlayClassName="fixed inset-0 z-[89] bg-black/60 backdrop-blur-sm"
      contentClassName="fixed left-1/2 top-28 z-[90] w-[min(90vw,34rem)] -translate-x-1/2 overflow-hidden rounded-2xl border border-white/10 bg-neutral-950/95 shadow-2xl shadow-black/50 backdrop-blur-xl"
    >
      <div className="flex items-center gap-2 border-b border-white/10 px-4">
        <Command.Input
          placeholder="Type a command or search…"
          className="w-full bg-transparent py-4 text-sm text-white outline-none placeholder:text-neutral-500"
        />
        <kbd className="rounded border border-white/15 px-1.5 py-0.5 text-[10px] text-neutral-500">esc</kbd>
      </div>

      <Command.List className="max-h-80 overflow-y-auto p-2">
        <Command.Empty className="px-3 py-6 text-center text-sm text-neutral-500">
          No results found.
        </Command.Empty>

        <Command.Group heading="Navigate">
          {navItems.map((item) => (
            <Command.Item
              key={item.label}
              onSelect={item.onSelect}
              className="flex cursor-pointer items-center justify-between rounded-lg px-3 py-2.5 text-sm text-neutral-200 aria-selected:bg-lime-400/10 aria-selected:text-lime-300"
            >
              <span className="flex items-center gap-2">
                <ArrowUpRight size={14} className="text-neutral-500" />
                {item.label}
              </span>
            </Command.Item>
          ))}
        </Command.Group>

        <Command.Group heading="Actions">
          {actionItems.map((item) => {
            const Icon = item.icon;
            return (
              <Command.Item
                key={item.label}
                onSelect={item.onSelect}
                className="flex cursor-pointer items-center justify-between rounded-lg px-3 py-2.5 text-sm text-neutral-200 aria-selected:bg-lime-400/10 aria-selected:text-lime-300"
              >
                <span className="flex items-center gap-2">
                  {Icon && <Icon width={14} height={14} className="text-neutral-500" />}
                  {item.label}
                </span>
                {item.hint && <span className="text-xs text-neutral-500">{item.hint}</span>}
              </Command.Item>
            );
          })}
        </Command.Group>
      </Command.List>
    </Command.Dialog>
  );
}
