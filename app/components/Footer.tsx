import { profile } from "@/app/data/content";

// Computed once at module load (build time), not during render, so it doesn't
// trip Next's cache-components "unstable value during prerender" check.
const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-6 text-sm text-neutral-500 sm:flex-row">
        <p>© {YEAR} {profile.name}. All rights reserved.</p>
        <p>Built with Next.js & Framer Motion.</p>
      </div>
    </footer>
  );
}
