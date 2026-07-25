import { Marquee } from "@/components/motion/marquee";
import { MARQUEE_WORDS } from "@/lib/content";

/** Volt ticker separating hero from content — the le-mugs marquee beat. */
export function MarqueeBand() {
  return (
    <div className="-rotate-1 bg-primary py-3 text-primary-foreground">
      <Marquee>
        {MARQUEE_WORDS.map((word) => (
          <span
            key={word}
            className="mx-6 flex items-center gap-6 font-display text-2xl uppercase sm:text-3xl"
          >
            {word}
            <span aria-hidden="true" className="text-lg">
              ✦
            </span>
          </span>
        ))}
      </Marquee>
    </div>
  );
}
