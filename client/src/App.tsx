/* Design: cuidado institucional contemporâneo — narrativa vertical de serviço, informação clara e proximidade humana. */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { AppointmentCTA } from "./components/alfasaude/AppointmentCTA";
import { FAQSection } from "./components/alfasaude/FAQSection";
import { Footer } from "./components/alfasaude/Footer";
import { FloatingWhatsApp } from "./components/alfasaude/FloatingWhatsApp";
import { Header } from "./components/alfasaude/Header";
import { HeroSection } from "./components/alfasaude/HeroSection";
import { HospitalsSection } from "./components/alfasaude/HospitalsSection";
import { LocationSection } from "./components/alfasaude/LocationSection";
import { PatientJourneySection } from "./components/alfasaude/PatientJourneySection";
import { QuickAccessSection } from "./components/alfasaude/QuickAccessSection";
import { ServicesSection } from "./components/alfasaude/ServicesSection";
import { StructureSection } from "./components/alfasaude/StructureSection";

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <div className="min-h-screen overflow-x-clip bg-[#F9FCFB]">
            <Header />
            <main>
              <HeroSection />
              <QuickAccessSection />
              <ServicesSection />
              <StructureSection />
              <PatientJourneySection />
              <HospitalsSection />
              <AppointmentCTA />
              <FAQSection />
              <LocationSection />
            </main>
            <Footer />
            <FloatingWhatsApp />
          </div>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
