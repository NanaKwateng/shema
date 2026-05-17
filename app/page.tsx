
import LandingPage from "@/components/layout/LandingPage";
import ServiceOverview from "@/components/bits/ServiceOverview";
import CompareGroup from "@/components/bits/CompareGroup";
import Process from "@/components/bits/Process";
import CounterBits from "@/components/bits/CounterBit";
import Testimonials from "@/components/layout/Testimonials";
import FAQ from "@/components/bits/FAQ";
import CTA from "@/components/layout/CTA";
import Footer from "@/components/layout/Footer";
import AboutGrid from "@/components/layout/AboutGrid";

export default function HomePage() {


  return (
    <main className="w-full relative z-10 bg-obsidian selection:bg-white selection:text-black">

      {/* SECTION 1: HERO CONTAINER */}
      <LandingPage />
      <AboutGrid />
      <CompareGroup />
      <ServiceOverview />

      {/* SECTION 6: PROCESS STEPS */}
      <Process />

      {/* SECTION 7: QUANTIFIABLE DIAGNOSTICS */}
      <CounterBits />

      {/* SECTION 8: FLOATING TESTIMONIALS */}
      <Testimonials />

      {/* SECTION 10: FAQ ARRAYS */}
      <FAQ />

      {/* SECTION 11: CLIMAX CTA BANNER */}
      <CTA />

      {/* SECTION 12: CINEMATIC SIGNATURE FOOTER */}
      <Footer />

    </main>
  );
}