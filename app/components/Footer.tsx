import { profile } from "@/app/data/content";

// Computed once at module load (build time), not during render, so it doesn't
// trip Next's cache-components "unstable value during prerender" check.
const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-plum text-paper/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 border-t border-paper/15 px-6 py-8 text-sm sm:flex-row">
        <p>
          © {YEAR} {profile.name}
        </p>
        <p className="font-display italic">Designed &amp; built in New Delhi.</p>
      </div>
    </footer>
  );
}
