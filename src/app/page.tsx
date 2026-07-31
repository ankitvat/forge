import { MotionProvider } from "@/components/motion/motion-provider";
import { Preloader } from "@/components/motion/preloader";
import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { MarqueeBand } from "@/components/site/marquee-band";
import { Features } from "@/components/site/features";
import { Nutrition } from "@/components/site/nutrition";
import { Recipes } from "@/components/site/recipes";
import { Transformation } from "@/components/site/transformation";
import { Roadmap } from "@/components/site/roadmap";
import { Pricing } from "@/components/site/pricing";
import { Faq } from "@/components/site/faq";
import { Contact } from "@/components/site/contact";
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
        <Nutrition />
        <Recipes />
        <Transformation />
        <Roadmap />
        <Pricing />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </MotionProvider>
  );
}
