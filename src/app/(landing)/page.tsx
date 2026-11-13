import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import RegistrationForm from "@/components/sections/RegistrationForm";
import Benefits from "@/components/sections/Benefits";
import MenuSection from "@/components/sections/MenuSection";
import Pricing from "@/components/sections/Pricing";
import HowItWorks from "@/components/sections/HowItWorks";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";
import MobileCTA from "@/components/sections/MobileCTA";
import LandingInteractions from "@/components/ui/LandingInteractions";
import StructuredData from "@/components/ui/StructuredData";

export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Langsung ke konten
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <RegistrationForm />
        <Benefits />
        <MenuSection />
        <Pricing />
        <HowItWorks />
        <FAQ />
      </main>
      <Footer />
      <MobileCTA />
      <StructuredData />
      <LandingInteractions />
    </>
  );
}
