import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyRestoPrint from "@/components/WhyRestoPrint";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-white text-[#09090b] overflow-x-hidden">
        <Hero />
        <Services />
        <WhyRestoPrint />
        <HowItWorks />
        <Footer />
      </main>
    </>
  );
}
