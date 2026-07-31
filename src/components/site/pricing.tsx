import Link from "next/link";
import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { SplitWords } from "@/components/motion/split-words";
import { PLANS, PLAN_INCLUSIONS } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Pricing() {
  return (
    <section id="membership" className="border-y border-white/5 bg-card/40">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:py-32">
        <Reveal>
          <p className="mb-3 text-xs font-semibold tracking-[0.35em] text-primary uppercase">
            Membership
          </p>
        </Reveal>
        <h2 className="max-w-3xl font-display text-5xl uppercase sm:text-6xl">
          <SplitWords text="One programme. Pick your term." />
        </h2>
        <Reveal delay={0.15}>
          <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
            Same coaching in every plan. The longer you commit, the less you pay per month.
          </p>
        </Reveal>

        <Stagger className="mt-12 grid gap-4 lg:grid-cols-3" gap={0.12}>
          {PLANS.map((plan) => (
            <StaggerItem key={plan.id} className="h-full">
              <Card
                className={cn(
                  "relative flex h-full flex-col overflow-visible border-white/5 transition-transform duration-300 hover:-translate-y-1.5",
                  plan.featured &&
                    "border-primary/60 bg-card shadow-[0_0_60px_-20px] shadow-primary/30",
                )}
              >
                {plan.featured && (
                  <Badge className="absolute -top-3 left-6 font-semibold uppercase">
                    Most popular
                  </Badge>
                )}
                <CardHeader>
                  <h3 className="font-display text-3xl uppercase">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground">{plan.blurb}</p>
                </CardHeader>
                <CardContent className="flex-1">
                  <p>
                    <span className="font-display text-5xl leading-none">{plan.price}</span>
                    {plan.cadence && (
                      <span className="ml-1 text-sm text-muted-foreground">{plan.cadence}</span>
                    )}
                  </p>
                  {plan.perMonth && (
                    <p className="mt-2 text-sm font-semibold text-primary">{plan.perMonth}</p>
                  )}
                </CardContent>
                <CardFooter>
                  <Button
                    asChild
                    className="w-full font-semibold uppercase"
                    variant={plan.featured ? "default" : "outline"}
                  >
                    <Link href={`#contact?plan=${plan.id}`}>{plan.cta}</Link>
                  </Button>
                </CardFooter>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.2}>
          <ul className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-white/10 pt-8 text-sm text-muted-foreground">
            {PLAN_INCLUSIONS.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <Check className="size-4 text-primary" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
