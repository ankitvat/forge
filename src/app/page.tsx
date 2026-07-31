import { MotionProvider } from "@/components/motion/motion-provider";
import { Preloader } from "@/components/motion/preloader";
import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { MarqueeBand } from "@/components/site/marquee-band";
import { Nutrition } from "@/components/site/nutrition";
import { Recipes } from "@/components/site/recipes";
import { Transformation } from "@/components/site/transformation";
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
        <Nutrition />
        <Recipes />
        <Transformation />
        <Pricing />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </MotionProvider>
  );
}
