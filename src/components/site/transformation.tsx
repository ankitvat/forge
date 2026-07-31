import Image from "next/image";
import { ImageIcon } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { SplitWords } from "@/components/motion/split-words";
import { TRANSFORMATION_PHOTOS, TRANSFORMATION_STATS } from "@/lib/content";

export function Transformation() {
  return (
    <section id="transformation" className="mx-auto max-w-6xl px-5 py-24 sm:py-32">
      <Reveal>
        <p className="mb-3 text-xs font-semibold tracking-[0.35em] text-primary uppercase">
          My Transformation
        </p>
      </Reveal>
      <h2 className="max-w-3xl font-display text-5xl uppercase sm:text-6xl">
        <SplitWords text="Ten years under the bar." />
      </h2>

      <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_auto] lg:gap-20">
        <Reveal delay={0.15} className="max-w-2xl space-y-6 leading-relaxed text-muted-foreground">
          <p>
            I&apos;ve been training for over ten years. The first two of those I wasted —
            programme-hopping, eating whatever was in front of me, waiting to feel motivated.
            Nothing changed until the training got boring and repeatable.
          </p>
          <p>
            What you see below is a decade of the same handful of lifts, tracked, adjusted, and
            repeated through injuries, desk jobs, travel and long stretches where progress was
            invisible. No shortcut in there. Just the part most people quit before reaching.
          </p>
          <p className="font-semibold text-foreground">
            That&apos;s the whole reason I coach the way I do — the system is what carried me, so
            the system is what I hand you.
          </p>
        </Reveal>

        <Reveal delay={0.25}>
          <dl className="border-l border-primary/40 pl-6">
            {TRANSFORMATION_STATS.map((stat) => (
              <div key={stat.label} className="mb-8 last:mb-0">
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-6xl leading-none sm:text-7xl">{stat.value}</dd>
                <p className="mt-2 max-w-xs text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>

      <Stagger className="mt-16 grid gap-3 sm:grid-cols-3 lg:grid-cols-5" gap={0.08}>
        {TRANSFORMATION_PHOTOS.map((photo) => (
          <StaggerItem key={photo.slot}>
            <figure>
              <div className="relative aspect-[3/4] overflow-hidden rounded-md border border-dashed border-white/15 bg-card/40">
                {photo.src ? (
                  <Image
                    src={photo.src}
                    alt={`${photo.slot} — ${photo.caption}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 20vw"
                    className="object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-center text-muted-foreground">
                    <ImageIcon className="size-6 opacity-60" aria-hidden="true" />
                    <p className="text-sm">{photo.slot}</p>
                    <p className="text-xs">
                      or <span className="underline">browse files</span>
                    </p>
                  </div>
                )}
              </div>
              <figcaption className="mt-3 text-xs tracking-wide text-muted-foreground uppercase">
                {photo.caption}
              </figcaption>
            </figure>
          </StaggerItem>
        ))}
      </Stagger>

      <p className="mt-6 text-xs text-muted-foreground">
        Drop your five photos straight onto the frames above — captions and years are editable in{" "}
        <code className="rounded bg-card px-1.5 py-0.5">src/lib/content.ts</code>.
      </p>
    </section>
  );
}
