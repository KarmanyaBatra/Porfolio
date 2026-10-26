import Reveal from "@/app/components/Reveal";
import SectionHeading from "@/app/components/SectionHeading";
import { skills } from "@/app/data/content";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-16">
      <SectionHeading index={3} title="Skills" />

      <div className="mt-10 divide-y divide-white/10 border-t border-white/10">
        {skills.map((group, i) => (
          <Reveal key={group.group} delay={i * 0.06}>
            <div className="grid gap-3 py-5 sm:grid-cols-[10rem_1fr] sm:items-baseline">
              <h3 className="font-mono text-xs uppercase tracking-wider text-neutral-500">
                {group.group}
              </h3>
              <div className="flex flex-wrap gap-x-2 gap-y-1.5">
                {group.items.map((skill, si) => (
                  <span key={skill} data-cursor-hover className="group text-sm text-neutral-300">
                    <span className="transition-colors group-hover:text-lime-400">{skill}</span>
                    {si < group.items.length - 1 && <span className="ml-2 text-neutral-700">/</span>}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
