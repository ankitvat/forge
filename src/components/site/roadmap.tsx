import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { SplitWords } from "@/components/motion/split-words";
import { Separator } from "@/components/ui/separator";
import { ROADMAP } from "@/lib/content";

export function Roadmap() {
  return (
    <section id="roadmap" className="border-y border-white/5 bg-card/40">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:py-32">
        <Reveal>
          <p className="mb-3 text-xs font-semibold tracking-[0.35em] text-primary uppercase">
            The 6-month roadmap
          </p>
        </Reveal>
        <h2 className="max-w-3xl font-display text-5xl uppercase sm:text-7xl">
          <SplitWords text="Commit for 6 months." />
        </h2>
        <Reveal delay={0.2}>
          <p className="mt-4 max-w-xl text-muted-foreground">
            Results aren&apos;t instant — they&apos;re inevitable. Four stages, each one earning the
            next.
          </p>
        </Reveal>

        <Stagger className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4" gap={0.12}>
          {ROADMAP.map((stage) => (
            <StaggerItem key={stage.number}>
              <span className="text-outline font-display text-7xl">{stage.number}</span>
              <Separator className="my-5 bg-white/10" />
              <p className="text-xs font-semibold tracking-[0.25em] text-primary uppercase">
                {stage.months}
              </p>
              <h3 className="mt-2 font-display text-3xl uppercase">{stage.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{stage.body}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
