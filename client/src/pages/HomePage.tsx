import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FabricShowcase from "@/components/FabricShowcase";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        <Hero />
        <FabricShowcase />
        <AboutSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
