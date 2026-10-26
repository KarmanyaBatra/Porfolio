import Reveal from "@/app/components/Reveal";
import SectionHeading from "@/app/components/SectionHeading";
import { achievements } from "@/app/data/content";

export default function Achievements() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <SectionHeading index={4} title="Achievements" />

      <div className="mt-10 divide-y divide-white/10 border-t border-white/10">
        {achievements.map((a, i) => (
          <Reveal key={a.title} delay={i * 0.08}>
            <div className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:justify-between">
              <div>
                <h3 className="text-sm font-semibold text-white">
                  {a.title} <span className="font-normal text-neutral-500">— {a.org}</span>
                </h3>
                <p className="mt-1 text-sm text-neutral-400">{a.description}</p>
              </div>
              <span className="shrink-0 font-mono text-xs text-lime-400">{a.dates}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
