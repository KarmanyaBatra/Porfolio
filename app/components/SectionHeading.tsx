import Reveal from "@/app/components/Reveal";

export default function SectionHeading({ index, title }: { index: number; title: string }) {
  return (
    <Reveal>
      <div className="flex items-baseline gap-3">
        <span className="font-mono text-sm text-lime-400">{String(index).padStart(2, "0")}</span>
        <h2 className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">{title}</h2>
      </div>
      <div className="mt-3 h-1 w-12 bg-lime-400" />
    </Reveal>
  );
}
