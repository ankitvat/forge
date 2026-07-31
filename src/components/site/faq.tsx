import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { SplitWords } from "@/components/motion/split-words";
import { FAQS } from "@/lib/content";

export function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-6xl px-5 py-24 sm:py-32">
      <h2 className="font-display text-5xl uppercase sm:text-6xl">
        <SplitWords text="Straight answers." />
      </h2>

      <Stagger className="mt-12 grid gap-x-10 gap-y-8 md:grid-cols-2" gap={0.08}>
        {FAQS.map((faq) => (
          <StaggerItem key={faq.q}>
            <div className="border-t border-white/10 pt-6">
              <h3 className="font-semibold">{faq.q}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>

      <Reveal delay={0.2} className="mt-16 text-center">
        <p className="text-xs tracking-wide text-muted-foreground uppercase">
          Still on the fence? Ask below — no sales pitch.
        </p>
      </Reveal>
    </section>
  );
}
