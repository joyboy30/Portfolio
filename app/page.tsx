import { Footer } from "@/components/footer";
import { Hero } from "@/components/sections/hero";
import Homepage from "@/components/sections/homepage";
import { Tools } from "@/components/sections/tools";
import { SeoProcess } from "@/components/sections/seo-process";
import FAQ from "@/components/sections/faq";

export default function Home() {
  return (
    <>
      <main id="main-content">
        <Hero />
        <Homepage />
        <Tools />
        <SeoProcess />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}