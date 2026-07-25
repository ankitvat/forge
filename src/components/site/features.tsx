import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/motion/reveal";
import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { SplitWords } from "@/components/motion/split-words";
import { FEATURES } from "@/lib/content";

export function Features() {
  return (
    <section id="method" className="mx-auto max-w-6xl px-5 py-24 sm:py-32">
      <Reveal>
        <p className="mb-3 text-xs font-semibold tracking-[0.35em] text-primary uppercase">
          Everything you need
        </p>
      </Reveal>
      <h2 className="max-w-3xl font-display text-5xl uppercase sm:text-7xl">
        <SplitWords text="One system. Zero guesswork." />
      </h2>

      <Stagger className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" gap={0.08}>
        {FEATURES.map((feature) => (
          <StaggerItem key={feature.title}>
            <Card className="group h-full border-white/5 bg-card transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40">
              <CardContent className="flex h-full flex-col gap-4">
                <feature.icon
                  className="size-8 text-primary transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110"
                  aria-hidden="true"
                />
                <h3 className="font-display text-2xl uppercase">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{feature.body}</p>
              </CardContent>
            </Card>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
