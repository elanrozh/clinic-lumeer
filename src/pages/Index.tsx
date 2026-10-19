import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { ServicesSection } from '../components/ServicesSection';
import { ResultsSection } from '../components/ResultsSection';
import { SpecialistsSection } from '../components/SpecialistsSection';
import { ClinicSanctuary } from '../components/ClinicSanctuary';
import { ReviewsSection } from '../components/ReviewsSection';
import { PricingPackages } from '../components/PricingPackages';
import { BookingSection } from '../components/BookingSection';
import { Footer } from '../components/Footer';
import { ConsultationModal } from '../components/ConsultationModal';
import { PhoneCall, Sparkles } from 'lucide-react';

export const IndexPage: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);
  const [selectedDoctor, setSelectedDoctor] = useState<string | undefined>(undefined);

  const handleOpenBooking = (service?: string, doctor?: string) => {
    setSelectedService(service);
    setSelectedDoctor(doctor);
    setModalOpen(true);
  };

  const scrollToResults = () => {
    const el = document.getElementById('results');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToBooking = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    const el = document.getElementById('booking');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 flex flex-col font-sans selection:bg-amber-500/30 selection:text-amber-200">
      
      {/* 1. Header Navigation */}
      <Navbar onOpenBookingModal={() => handleOpenBooking()} />

      {/* Main Clinic Experience */}
      <main className="flex-1">
        
        {/* 2. Hero Section */}
        <Hero 
          onOpenBookingModal={() => handleOpenBooking()}
          onExploreResults={scrollToResults}
        />

        {/* 3. Services Section ("Curated for you") */}
        <ServicesSection 
          onSelectService={(serviceName) => scrollToBooking(serviceName)}
        />

        {/* 4. Results Section ("See the transformation" with signature Before/After Slider) */}
        <ResultsSection 
          onOpenBookingModal={(treatmentName) => handleOpenBooking(treatmentName)}
        />

        {/* 5. Board-Certified Specialists ("Meet the Board") */}
        <SpecialistsSection 
          onSelectDoctor={(docName) => handleOpenBooking(undefined, docName)}
        />

        {/* 6. Clinic Sanctuary & Technologies */}
        <ClinicSanctuary />

        {/* 7. Treatment Protocols & FAQ */}
        <PricingPackages 
          onSelectPackage={(pkgName) => scrollToBooking(pkgName)}
        />

        {/* 8. Patient Stories & Reviews ("Trusted by the discerning") */}
        <ReviewsSection />

        {/* 9. VIP Reservation Section ("Begin your private journey") */}
        <BookingSection 
          prefilledService={selectedService}
          prefilledDoctor={selectedDoctor}
        />

      </main>

      {/* 10. Footer */}
      <Footer />

      {/* VIP Booking Modal */}
      <ConsultationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialService={selectedService}
        initialDoctor={selectedDoctor}
      />

      {/* Floating VIP Hotline Pill */}
      <div className="fixed bottom-6 left-6 z-40 hidden sm:flex items-center gap-2">
        <a
          href="tel:02122002200"
          className="px-4 py-2.5 rounded-full bg-slate-900/90 hover:bg-slate-800 border border-amber-500/40 text-amber-300 hover:text-white shadow-xl shadow-black/70 backdrop-blur-md text-xs font-semibold flex items-center gap-2 transition-all hover:scale-105 cursor-pointer glow-gold"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
          <span>پذیرش مستقیم VIP: ۰۲۱-۲۲۰۰۲۲۰۰</span>
        </a>
      </div>

    </div>
  );
};

export default IndexPage;
