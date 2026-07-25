import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import { TrustStrip } from "@/components/sections/trust-strip";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { Services } from "@/components/sections/services";
import { CaseStudy } from "@/components/sections/case-study";

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
      </main>
    </>
  );
}