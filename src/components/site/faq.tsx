import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/motion/reveal";
import { SplitWords } from "@/components/motion/split-words";
import { FAQS } from "@/lib/content";

export function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-3xl px-5 py-24 sm:py-32">
      <h2 className="text-center font-display text-5xl uppercase sm:text-6xl">
        <SplitWords text="Straight answers." />
      </h2>

      <Reveal delay={0.15} className="mt-12">
        <Accordion type="single" collapsible className="w-full">
          {FAQS.map((faq, i) => (
            <AccordionItem key={faq.q} value={`item-${i}`}>
              <AccordionTrigger className="text-left text-base font-semibold">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="leading-relaxed text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </section>
  );
}
