import React from 'react';
import { ArrowUp, Sparkles, ShieldCheck, Heart, MapPin, Phone, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050811] text-slate-400 py-16 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Manifesto (col-span-5) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-500 via-amber-400 to-amber-200 p-[1.5px] shadow-lg shadow-amber-500/20">
                <div className="w-full h-full bg-[#090d16] rounded-full flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-amber-400" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black text-white tracking-tight">
                  کلینیک زیبایی لومیِر
                </span>
                <span className="text-[10px] font-serif tracking-widest text-amber-400 uppercase">
                  LUMIÈRE VIP CLINIC
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              پناهگاهی خصوصی برای هنر زیبایی طبیعی، جوانسازی پیشرفته و درمان‌های کدمحور درماتولوژی با نظارت مستقیم پزشکان بورد تخصصی.
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-[11px] text-slate-300">
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800">
                پروانه رسمی وزارت بهداشت
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800">
                عضو انجمن درماتولوژی اروپا EADV
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800">
                متریال دارای FDA و CE
              </span>
            </div>
          </div>

          {/* Treatments Links (col-span-4) */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-sm font-bold text-white mb-2">خدمات تخصصی کلینیک</div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors inline-block hover:-translate-x-1 duration-200">
                  کانتورینگ طبیعی چهره و فیلر لب روسی
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors inline-block hover:-translate-x-1 duration-200">
                  درمان اسکار و جای جوش با لیزر فراکشنال CO2
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors inline-block hover:-translate-x-1 duration-200">
                  اندولیفت لیزری بدون جراحی غبغب و زاویه فک
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors inline-block hover:-translate-x-1 duration-200">
                  فیشیال لوکس نانوطلای ۲۴ عیار سوئیسی
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors inline-block hover:-translate-x-1 duration-200">
                  تزریق مزوژل‌های کلاژن‌ساز پروفایلو و جالپرو
                </a>
              </li>
            </ul>
          </div>

          {/* Clinic Information & Emergency (col-span-3) */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-sm font-bold text-white mb-2">ارتباط با پذیرش VIP</div>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="tel:02122002200" className="hover:text-amber-400 font-mono ltr transition-colors">
                  ۰۲۱-۲۲۰۰۲۲۰۰
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="font-mono hover:text-white transition-colors">vip@lumiereclinic.ir</span>
              </li>
              <li className="flex items-start gap-2 text-slate-400">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>تهران، زعفرانیه، خیابان آصف، برج الماس، طبقه ۵</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>
              تمامی حقوق مادی و معنوی محفوظ است © ۲۰۲۶ کلینیک فوق‌تخصصی پوست و زیبایی لومیِر (Lumière VIP Aesthetic Clinic).
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-950 hover:bg-amber-400 hover:border-amber-400 transition-all flex items-center gap-1.5 cursor-pointer active:scale-95 shadow-sm"
            aria-label="بازگشت به ابتدای صفحه"
          >
            <span>بازگشت به بالا</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
