export default function Marquee({ items }: { items: string[] }) {
  const track = [...items, ...items];

  return (
    <div className="relative overflow-hidden border-y border-white/10 bg-white/[0.02] py-3">
      <div className="animate-marquee flex w-max gap-8">
        {track.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-8 font-mono text-sm uppercase tracking-wider text-neutral-500"
          >
            {item}
            <span className="text-lime-400">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
