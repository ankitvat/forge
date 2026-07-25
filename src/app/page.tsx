import { MotionProvider } from "@/components/motion/motion-provider";
import { Preloader } from "@/components/motion/preloader";
import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { MarqueeBand } from "@/components/site/marquee-band";
import { Features } from "@/components/site/features";
import { Roadmap } from "@/components/site/roadmap";
import { Coach } from "@/components/site/coach";
import { Pricing } from "@/components/site/pricing";
import { Faq } from "@/components/site/faq";
import { Cta } from "@/components/site/cta";
import { Footer } from "@/components/site/footer";

export default function Home() {
  return (
    <MotionProvider>
      <Preloader />
      <Navbar />
      <main>
        <Hero />
        <MarqueeBand />
        <Features />
        <Roadmap />
        <Coach />
        <Pricing />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </MotionProvider>
  );
}
