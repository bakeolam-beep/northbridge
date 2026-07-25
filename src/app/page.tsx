import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { TrustStrip } from "@/components/sections/trust-strip";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { Services } from "@/components/sections/services";
import { CaseStudy } from "@/components/sections/case-study";
import { Process } from "@/components/sections/process";
import { Testimonials } from "@/components/sections/testimonials";
import { FAQ } from "@/components/sections/faq";
import { CTA } from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <TrustStrip />
        <WhyChooseUs />
        <Services />
        <CaseStudy />
        <Process />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}