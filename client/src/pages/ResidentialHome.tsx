import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileStickyBar from "@/components/MobileStickyBar";
import ResidentialHero from "@/components/sections/ResidentialHero";
import TrustBar from "@/components/sections/TrustBar";
import ResidentialElevation from "@/components/sections/ResidentialElevation";
import ResidentialServices from "@/components/sections/ResidentialServices";
import ResidentialWhyUs from "@/components/sections/ResidentialWhyUs";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import ServiceArea from "@/components/sections/ServiceArea";
import ResidentialFinalCTA from "@/components/sections/ResidentialFinalCTA";

export default function ResidentialHome() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pb-16 sm:pb-0">
        <ResidentialHero />
        <TrustBar />
        <ResidentialElevation />
        <ResidentialServices />
        <ResidentialWhyUs />
        <Process />
        <Testimonials />
        <ServiceArea />
        <ResidentialFinalCTA />
      </main>
      <Footer />
      <MobileStickyBar />
    </div>
  );
}
