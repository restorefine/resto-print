import Navbar from "@/components/Navbar";
import Hero from "@/components/HeroV2";
import Services from "@/components/Services";
import WhyRestoPrint from "@/components/WhyRestoPrint";
import IndustriesStrip from "@/components/IndustriesStrip";
import HowItWorks from "@/components/HowItWorks";
import GuidesTeaser from "@/components/GuidesTeaser";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-white text-[#09090b] overflow-x-hidden">
        <Hero />
        <Services />
        <WhyRestoPrint />
        <IndustriesStrip />
        <HowItWorks />
        <GuidesTeaser />
        <Footer />
      </main>
    </>
  );
}
