import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { CaseStudies } from "@/components/sections/case-studies";
import { Skills } from "@/components/sections/skills";
import { Tools } from "@/components/sections/tools";
import { Services } from "@/components/sections/services";
import { Certifications } from "@/components/sections/certifications";
import { AIPortfolio } from "@/components/sections/ai-portfolio";
import { Timeline } from "@/components/sections/timeline";
import { SeoProcess } from "@/components/sections/seo-process";
import { Testimonials } from "@/components/sections/testimonials";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <Experience />
        <CaseStudies />
        <Skills />
        <Tools />
        <Services />
        <Certifications />
        <AIPortfolio />
        <Timeline />
        <SeoProcess />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
