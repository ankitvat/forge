import Link from "next/link";
import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { SplitWords } from "@/components/motion/split-words";
import { PLANS } from "@/lib/content";
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
        <h2 className="max-w-3xl font-display text-5xl uppercase sm:text-7xl">
          <SplitWords text="Pick your lane." />
        </h2>

        <Stagger className="mt-14 grid gap-4 lg:grid-cols-3" gap={0.12}>
          {PLANS.map((plan) => (
            <StaggerItem key={plan.name} className="h-full">
              <Card
                className={cn(
                  // overflow-visible: the Card base clips overflow, which cuts
                  // the floating "Most popular" badge off at the top edge.
                  "relative flex h-full flex-col overflow-visible border-white/5 transition-transform duration-300 hover:-translate-y-1.5",
                  plan.featured && "border-primary/60 bg-card shadow-[0_0_60px_-20px] shadow-primary/30",
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
                  <p className="mt-4">
                    <span className="font-display text-5xl">{plan.price}</span>
                    <span className="text-sm text-muted-foreground">{plan.cadence}</span>
                  </p>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-sm">
                        <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    asChild
                    className="w-full font-semibold uppercase"
                    variant={plan.featured ? "default" : "outline"}
                  >
                    <Link href="#membership">Join the club</Link>
                  </Button>
                </CardFooter>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.2}>
          <p className="mt-8 text-center text-sm text-muted-foreground">
            30-day results guarantee. Train the program — see progress or get your money back.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
