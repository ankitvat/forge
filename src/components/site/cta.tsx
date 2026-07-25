import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Marquee } from "@/components/motion/marquee";
import { Reveal } from "@/components/motion/reveal";
import { IMAGES } from "@/lib/content";

export function Cta() {
  return (
    <section className="relative overflow-hidden border-t border-white/5">
      <Image
        src={IMAGES.cta}
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-25"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/40 to-background" />

      <div className="relative py-24 sm:py-32">
        <Marquee className="mb-12" reverse>
          <span className="text-outline mx-8 font-display text-7xl uppercase sm:text-9xl">
            No more excuses — No more excuses —
          </span>
        </Marquee>

        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 text-center">
          <Reveal>
            <h2 className="max-w-3xl font-display text-5xl uppercase sm:text-7xl">
              Rebuild yourself.
              <br />
              <span className="text-primary">Inside and out.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <Button asChild size="lg" className="h-14 px-10 text-base font-semibold uppercase">
              <Link href="#membership">
                Claim 25% off <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          </Reveal>
          <Reveal delay={0.25}>
            <p className="text-xs tracking-wide text-muted-foreground uppercase">
              First 100 members this month — no code needed
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
