"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { about, achievements, education, experience, profile, skills } from "@/app/data/content";

type Line = { kind: "input" | "output"; content: ReactNode };

const HELP = [
  "Available commands:",
  "  whoami       who you're looking at",
  "  about        a short bio",
  "  experience   work history",
  "  skills       tech I work with",
  "  education    degree & coursework",
  "  contact      how to reach me",
  "  resume       open the PDF",
  "  clear        clear the screen",
];

function run(raw: string): ReactNode {
  const cmd = raw.trim().toLowerCase();

  switch (cmd) {
    case "":
      return null;
    case "help":
      return HELP.join("\n");
    case "whoami":
      return `${profile.name} — ${profile.role}\n${profile.tagline}`;
    case "about":
      return about.bio.join("\n\n");
    case "experience":
      return experience
        .map((r) => `${r.title} · ${r.company}  (${r.dates})\n  ${r.bullets[0]}`)
        .join("\n\n");
    case "skills":
      return skills.map((g) => `${g.group}: ${g.items.join(", ")}`).join("\n");
    case "education":
      return `${education.school}\n${education.degree}\n${education.location} — ${education.dates}\n${education.gpa}`;
    case "achievements":
      return achievements.map((a) => `${a.title} — ${a.org} (${a.dates})`).join("\n");
    case "contact":
      return `Email: ${profile.email}\n${profile.socials.map((s) => `${s.label}: ${s.href}`).join("\n")}`;
    case "resume":
      if (typeof window !== "undefined") window.open(profile.resumeUrl, "_blank");
      return `Opening ${profile.resumeUrl} …`;
    case "ls":
      return "about.txt  experience/  skills.txt  education.txt  contact.txt  resume.pdf";
    case "sudo hire karmanya":
      if (typeof window !== "undefined") navigator.clipboard?.writeText(profile.email);
      return `Permission granted.\n✓ ${profile.email} copied to clipboard. Go for it.`;
    default:
      return `command not found: ${cmd}\ntype 'help' to see what's available`;
  }
}

export default function Terminal() {
  const [history, setHistory] = useState<Line[]>([
    { kind: "output", content: `${profile.name.split(" ")[0]}'s resume, but you can type.` },
    { kind: "output", content: "type 'help' to get started." },
  ]);
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ block: "end" });
  }, [history]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = value;
    if (cmd.trim().toLowerCase() === "clear") {
      setHistory([]);
      setValue("");
      return;
    }
    const output = run(cmd);
    setHistory((h) => [
      ...h,
      { kind: "input", content: cmd },
      ...(output ? [{ kind: "output" as const, content: output }] : []),
    ]);
    setValue("");
  };

  return (
    <div className="mx-auto max-w-5xl px-6">
      <div
        onClick={() => inputRef.current?.focus()}
        data-cursor-hover
        className="overflow-hidden rounded-lg border border-white/15 bg-[#0a0a0a] font-mono text-sm shadow-2xl shadow-black/50"
      >
        <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/[0.03] px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
          <span className="ml-3 text-xs text-neutral-500">guest@karmanya.dev — zsh</span>
        </div>

        <div className="h-72 overflow-y-auto p-4">
          {history.map((line, i) => (
            <div key={i} className="mb-2 whitespace-pre-wrap">
              {line.kind === "input" ? (
                <span>
                  <span className="text-lime-400">guest@portfolio</span>
                  <span className="text-neutral-500">:~$ </span>
                  <span className="text-white">{line.content}</span>
                </span>
              ) : (
                <span className="text-neutral-400">{line.content}</span>
              )}
            </div>
          ))}

          <form onSubmit={submit} className="flex items-center gap-0">
            <span className="text-lime-400">guest@portfolio</span>
            <span className="text-neutral-500">:~$&nbsp;</span>
            <input
              ref={inputRef}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              autoComplete="off"
              spellCheck={false}
              aria-label="Terminal input"
              className="flex-1 bg-transparent text-white outline-none"
            />
          </form>
          <div ref={endRef} />
        </div>
      </div>
    </div>
  );
}
