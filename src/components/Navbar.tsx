import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowLeft, Sparkles, Phone, Clock, Shield } from 'lucide-react';

interface NavbarProps {
  onOpenBookingModal: (serviceName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBookingModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'صفحه اصلی', href: '#home' },
    { name: 'خدمات تخصصی', href: '#services' },
    { name: 'نتایج مراجعین', href: '#results' },
    { name: 'پزشکان متخصص', href: '#specialists' },
    { name: 'فضای کلینیک', href: '#sanctuary' },
    { name: 'نظرات مراجعین', href: '#reviews' },
    { name: 'تماس و نوبت‌دهی', href: '#booking' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#090d16]/95 backdrop-blur-md border-b border-slate-800/80 shadow-2xl shadow-black/50 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          
          {/* Right: Brand Name & Logo */}
          <a href="#home" className="flex items-center gap-3.5 shrink-0 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-500 via-amber-400 to-amber-200 p-[1.5px] shadow-lg shadow-amber-500/20 group-hover:shadow-amber-500/50 group-hover:scale-105 transition-all duration-300">
              <div className="w-full h-full bg-[#090d16] rounded-full flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-amber-400 group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-baseline gap-2">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-white group-hover:text-amber-400 transition-colors">
                  لومیِر
                </span>
                <span className="text-[11px] font-serif tracking-widest text-amber-300/80 uppercase">
                  LUMIÈRE
                </span>
              </div>
              <span className="text-[10px] sm:text-[11px] text-slate-400 font-medium group-hover:text-slate-300 transition-colors">
                کلینیک فوق‌تخصصی پوست، زیبایی و لیزر VIP
              </span>
            </div>
          </a>

          {/* Center: Nav links with smooth hover underline */}
          <nav className="hidden lg:flex items-center gap-7 text-xs xl:text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-amber-400 transition-colors whitespace-nowrap py-1 relative after:absolute after:bottom-0 after:right-0 after:w-0 after:h-[2px] after:bg-gradient-to-l after:from-amber-400 after:to-amber-500 hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Left: Contact Phone & VIP Booking CTA */}
          <div className="flex items-center gap-3 shrink-0">
            
            <a
              href="tel:02122002200"
              className="hidden sm:flex items-center gap-2 text-xs text-slate-300 hover:text-amber-300 px-3.5 py-2 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-amber-500/40 hover:bg-slate-800/80 transition-all shadow-sm cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span className="font-mono text-xs ltr font-bold">۰۲۱-۲۲۰۰۲۲۰۰</span>
            </a>

            <button
              onClick={() => onOpenBookingModal()}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-bold text-xs sm:text-sm shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer flex items-center gap-2 group"
            >
              <Sparkles className="w-3.5 h-3.5 text-slate-950 group-hover:rotate-12 transition-transform" />
              <span>رزرو مشاوره VIP</span>
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
              aria-label="منوی سایت"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#090d16]/98 border-b border-slate-800 px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-200 hover:text-amber-400 font-medium py-2 border-b border-slate-800/60 text-sm transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-3">
            <a
              href="tel:02122002200"
              className="w-full py-2.5 px-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 hover:text-amber-300 hover:border-amber-500/40 flex items-center justify-center gap-2 text-xs transition-colors"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>تماس مستقیم با پذیرش: ۰۲۱-۲۲۰۰۲۲۰۰</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBookingModal();
              }}
              className="w-full py-3 bg-gradient-to-r from-amber-400 to-amber-600 text-slate-950 font-bold rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 text-sm hover:from-amber-300 hover:to-amber-500 transition-all"
            >
              <Sparkles className="w-4 h-4" />
              <span>رزرو مشاوره خصوصی با پزشک</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
