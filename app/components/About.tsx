import Reveal from "@/app/components/Reveal";
import SectionHeading from "@/app/components/SectionHeading";
import { about, education } from "@/app/data/content";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-28">
      <SectionHeading index={1} title="About" />

      <div className="mt-10 grid gap-10 md:grid-cols-[1.4fr_1fr]">
        <div className="space-y-5 text-lg text-neutral-300">
          {about.bio.map((paragraph, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <p>{paragraph}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className="border-l-2 border-lime-400 pl-5">
            <h3 className="text-sm font-semibold text-white">{education.school}</h3>
            <p className="mt-1 text-sm text-neutral-400">{education.degree}</p>
            <p className="mt-1 font-mono text-xs text-neutral-500">
              {education.location} — {education.dates}
            </p>
            <p className="mt-3 font-mono text-sm text-lime-400">{education.gpa}</p>
            <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1.5 text-xs text-neutral-500">
              {education.coursework.map((course, i) => (
                <span key={course}>
                  {course}
                  {i < education.coursework.length - 1 && <span className="text-neutral-700"> ·</span>}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
