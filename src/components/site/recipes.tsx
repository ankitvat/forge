import { Card, CardContent } from "@/components/ui/card";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { SplitWords } from "@/components/motion/split-words";
import { RECIPES } from "@/lib/content";

export function Recipes() {
  return (
    <section id="recipes" className="border-y border-white/5 bg-card/40">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:py-32">
        <Reveal>
          <p className="mb-3 text-xs font-semibold tracking-[0.35em] text-primary uppercase">
            Recipes
          </p>
        </Reveal>
        <h2 className="max-w-3xl font-display text-5xl uppercase sm:text-6xl">
          <SplitWords text="Food you'll actually cook." />
        </h2>
        <Reveal delay={0.15}>
          <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
            Every plan ships with a recipe book — Indian kitchen, ten ingredients or fewer, under
            twenty minutes.
          </p>
        </Reveal>

        <Stagger className="mt-14 grid gap-4 md:grid-cols-3" gap={0.1}>
          {RECIPES.map((recipe) => (
            <StaggerItem key={recipe.title}>
              <Card className="h-full border-white/5 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40">
                <CardContent className="flex h-full flex-col gap-4">
                  <div className="flex items-center justify-between text-xs font-semibold tracking-[0.25em] uppercase">
                    <span className="text-muted-foreground">{recipe.time}</span>
                    <span className="text-primary">{recipe.tag}</span>
                  </div>
                  <h3 className="font-display text-2xl uppercase sm:text-3xl">{recipe.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{recipe.body}</p>
                  <div className="mt-auto flex items-center gap-6 border-t border-white/5 pt-4 text-xs tracking-wide text-muted-foreground uppercase">
                    <span>
                      <span className="text-foreground">{recipe.kcal}</span> kcal
                    </span>
                    <span>
                      <span className="text-foreground">{recipe.protein}g</span> protein
                    </span>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
