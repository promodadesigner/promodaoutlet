import { useState, useCallback } from "react";
import Header from "@/components/Header";
import IntroVideo from "@/components/IntroVideo";
import HeroCarousel from "@/components/HeroCarousel";
import FabricShowcase from "@/components/FabricShowcase";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  const [introComplete, setIntroComplete] = useState(false);

  const handleIntroComplete = useCallback(() => {
    setIntroComplete(true);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {!introComplete && <IntroVideo onComplete={handleIntroComplete} />}
      
      <div
        className={`transition-opacity duration-500 ${
          introComplete ? "opacity-100" : "opacity-0"
        }`}
      >
        <Header />

        <main>
          <HeroCarousel />
          <FabricShowcase />
          <AboutSection />
          <ContactSection />
        </main>

        <Footer />
      </div>
    </div>
  );
}
