import Image from "next/image";
import { Parallax } from "@/components/motion/parallax";
import { Counter } from "@/components/motion/counter";
import { Reveal } from "@/components/motion/reveal";
import { SplitWords } from "@/components/motion/split-words";
import { IMAGES, STATS } from "@/lib/content";

export function Coach() {
  return (
    <section id="coaching" className="mx-auto max-w-6xl px-5 py-24 sm:py-32">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <Parallax className="relative aspect-[4/5] rounded-2xl" drift={50}>
          <Image
            src={IMAGES.coach}
            alt="Head coach spotting a member on the bench press"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="scale-110 rounded-2xl object-cover"
          />
        </Parallax>

        <div>
          <Reveal>
            <p className="mb-3 text-xs font-semibold tracking-[0.35em] text-primary uppercase">
              Coaching that gives a damn
            </p>
          </Reveal>
          <h2 className="font-display text-5xl uppercase sm:text-6xl">
            <SplitWords text="A coach in your corner. Every rep." />
          </h2>
          <Reveal delay={0.15}>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Your program is written by a human who reads your logs, watches your lifts and
              adjusts the plan every week. When the bar feels heavy at 6am, the Circle is already
              awake — and your coach already knows.
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <dl className="mt-10 grid grid-cols-3 gap-6">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-display text-4xl text-primary sm:text-5xl">
                    <Counter to={stat.value} suffix={stat.suffix} />
                  </dd>
                  <p className="mt-1 text-xs tracking-wide text-muted-foreground uppercase">
                    {stat.label}
                  </p>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
