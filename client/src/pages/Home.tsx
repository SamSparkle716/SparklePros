import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileStickyBar from "@/components/MobileStickyBar";
import Hero from "@/components/sections/Hero";
import BusinessElevation from "@/components/sections/BusinessElevation";
import TrustBar from "@/components/sections/TrustBar";
import Services from "@/components/sections/Services";
import Industries from "@/components/sections/Industries";
import WhyUs from "@/components/sections/WhyUs";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import ServiceArea from "@/components/sections/ServiceArea";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pb-16 sm:pb-0">
        <Hero />
        <TrustBar />
        <BusinessElevation />
        <Services />
        <Industries />
        <WhyUs />
        <Process />
        <Testimonials />
        <ServiceArea />
        <FinalCTA />
      </main>
      <Footer />
      <MobileStickyBar />
    </div>
  );
}
