import Magnetic from "@/app/components/Magnetic";
import Reveal from "@/app/components/Reveal";
import SectionHeading from "@/app/components/SectionHeading";
import { profile } from "@/app/data/content";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-28">
      <SectionHeading index={5} title="Contact" />

      <Reveal delay={0.1}>
        <p className="mt-10 max-w-md text-neutral-400">
          Have a role, project, or idea in mind? My inbox is open.
        </p>

        <Magnetic strength={0.15} className="mt-6 inline-block">
          <a
            href={`mailto:${profile.email}`}
            data-cursor-hover
            className="group inline-flex items-baseline gap-3 text-3xl font-bold tracking-tight text-white sm:text-5xl"
          >
            {profile.email}
            <span className="text-lime-400 transition-transform group-hover:translate-x-2">→</span>
          </a>
        </Magnetic>
      </Reveal>
    </section>
  );
}
