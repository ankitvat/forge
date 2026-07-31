import { Card, CardContent } from "@/components/ui/card";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { SplitWords } from "@/components/motion/split-words";
import { NUTRITION_GOALS } from "@/lib/content";

export function Nutrition() {
  return (
    <section id="nutrition" className="mx-auto max-w-6xl px-5 py-24 sm:py-32">
      <Reveal>
        <p className="mb-3 text-xs font-semibold tracking-[0.35em] text-primary uppercase">
          Nutrition
        </p>
      </Reveal>
      <h2 className="max-w-3xl font-display text-5xl uppercase sm:text-6xl">
        <SplitWords text="A diet plan built for your goal." />
      </h2>
      <Reveal delay={0.15}>
        <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
          Fat loss and muscle gain need different food, not different willpower. You get the plan
          that matches the goal you&apos;re chasing right now — and it changes when the goal does.
        </p>
      </Reveal>

      <Stagger className="mt-14 grid gap-4 sm:grid-cols-2" gap={0.1}>
        {NUTRITION_GOALS.map((goal) => (
          <StaggerItem key={goal.label}>
            <Card className="h-full border-white/5 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40">
              <CardContent className="flex h-full flex-col gap-5">
                <p className="text-xs font-semibold tracking-[0.35em] text-primary uppercase">
                  {goal.label}
                </p>
                <h3 className="font-display text-3xl uppercase sm:text-4xl">{goal.title}</h3>
                <ul className="mt-2 space-y-3 text-sm leading-relaxed text-muted-foreground">
                  {goal.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
