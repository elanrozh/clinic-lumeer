import React from 'react';
import { ArrowLeft, Sparkles, CheckCircle2, ShieldCheck, Star, Calendar, Award, Lock } from 'lucide-react';

interface HeroProps {
  onOpenBookingModal: () => void;
  onExploreResults: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBookingModal, onExploreResults }) => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#090d16]">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[550px] bg-radial-glow pointer-events-none -z-10" />
      <div className="absolute top-1/4 right-5 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-5 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Right Column (Text Content & Calls-to-Action in RTL) */}
          <div className="lg:col-span-7 space-y-6 text-right">
            
            {/* Private Consultation Pill / Kicker */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-amber-500/30 hover:border-amber-500/60 text-amber-300 text-xs sm:text-sm font-medium backdrop-blur-md shadow-lg shadow-amber-500/5 transition-colors">
              <Lock className="w-3.5 h-3.5 text-amber-400" />
              <span>مشاوره خصوصی و نوبت‌دهی VIP</span>
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
              <span className="text-slate-400 text-xs">کلینیک فوق‌تخصصی لومیِر</span>
            </div>

            {/* Main Luxury Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.3] sm:leading-[1.25]">
              هنر زیبایی{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-amber-300 via-amber-400 to-amber-500 inline-block font-serif">
                ماندگار و درخشش اصیل
              </span>
            </h1>

            {/* Subtitle Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
              خدمات فوق‌تخصصی درماتولوژی، کانتورینگ چهره و جوانسازی عمیق در محیطی کاملاً خصوصی، محرمانه و اختصاصی؛ زیر نظر پزشکان صاحب‌نام دارای بورد تخصصی بین‌المللی و جدیدترین تکنولوژی‌های روز دنیا.
            </p>

            {/* Action Buttons with refined hovers */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenBookingModal}
                className="px-8 py-4 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-bold text-base rounded-xl shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-1 active:translate-y-0 transition-all duration-200 flex items-center justify-center gap-3 cursor-pointer group"
              >
                <span>رزرو نوبت مشاوره VIP</span>
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1.5 transition-transform" />
              </button>

              <button
                onClick={onExploreResults}
                className="px-6 py-4 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-amber-400/60 hover:text-amber-300 text-slate-200 font-semibold text-sm rounded-xl backdrop-blur-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-md hover:-translate-y-0.5 active:translate-y-0"
              >
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>مشاهده نتایج قبل و بعد</span>
              </button>
            </div>

            {/* Quick Availability Signal */}
            <div className="pt-2 flex items-center gap-2 text-xs text-amber-300/90 font-medium">
              <Calendar className="w-4 h-4 text-amber-400" />
              <span>امکان رزرو نوبت اختصاصی برای هفته جاری (تعداد مراجعین روزانه محدود)</span>
            </div>

            {/* Trust Points */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 border-t border-slate-800/80 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>سوئیت اختصاصی بدون سالن انتظار</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>متریال و فیلرهای اورجینال اروپایی</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>دستگاه‌های دارای تأییدیه FDA آمریکا</span>
              </div>
            </div>

          </div>

          {/* Left Column (Luxury Portrait with Floating Metric Badges in RTL) */}
          <div className="lg:col-span-5 relative">
            
            {/* Visual Container */}
            <div className="relative rounded-3xl overflow-hidden border border-amber-500/30 hover:border-amber-500/60 transition-colors p-2 bg-gradient-to-b from-slate-900 via-[#0d1527] to-[#090d16] shadow-2xl glow-gold">
              
              <div className="relative aspect-[3/4] sm:aspect-[4/5] rounded-2xl overflow-hidden group">
                <img
                  src="/src/assets/images/clinic_hero_portrait_1792409012705.jpg"
                  alt="درمان‌های زیبایی لوکس کلینیک لومیِر"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-transparent to-transparent pointer-events-none" />

                {/* Floating Badge 1: 5,000+ Procedures */}
                <div className="absolute top-5 right-5 p-3 sm:p-3.5 rounded-2xl bg-slate-950/85 backdrop-blur-md border border-amber-500/30 hover:border-amber-500/60 hover:scale-105 transition-all shadow-2xl cursor-default">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold text-xs">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white font-mono">+۵,۰۰۰</div>
                      <div className="text-[10px] text-slate-400">روند درمانی موفق</div>
                    </div>
                  </div>
                </div>

                {/* Floating Badge 2: 4.9/5 Rating */}
                <div className="absolute top-1/2 -translate-y-1/2 left-5 p-3 sm:p-3.5 rounded-2xl bg-slate-950/85 backdrop-blur-md border border-slate-700/80 hover:border-amber-400/50 hover:scale-105 transition-all shadow-2xl cursor-default">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white font-mono">۴.۹ / ۵</div>
                      <div className="text-[10px] text-slate-400">۱,۲۰۰+ نظر ثبت‌شده</div>
                    </div>
                  </div>
                </div>

                {/* Floating Badge 3: Board Certified */}
                <div className="absolute bottom-5 right-5 left-5 p-3.5 rounded-2xl bg-slate-950/90 backdrop-blur-md border border-amber-500/30 hover:border-amber-500/60 transition-colors shadow-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 p-[1px] shrink-0">
                      <div className="w-full h-full bg-[#090d16] rounded-[11px] flex items-center justify-center text-amber-400">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">پزشکان دارای بورد تخصصی و فلوشیپ</div>
                      <div className="text-[10px] text-amber-400/90 mt-0.5">تضمین بالاترین استانداردهای پزشکی جهان</div>
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* 4 Pillars Sanctuary Bar with rich hover transitions */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="p-5 rounded-2xl bg-[#0f172a]/70 border border-slate-800/90 hover:border-amber-500/40 hover:bg-[#0f172a]/95 hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm shadow-md">
            <div className="text-xs text-amber-400 font-bold uppercase tracking-wider mb-1">حفظ حریم خصوصی</div>
            <div className="text-base font-bold text-white">پروتکل VIP و محرمانه</div>
            <div className="text-xs text-slate-400 mt-1">پذیرش انفرادی بدون مواجهه با سایر مراجعین</div>
          </div>

          <div className="p-5 rounded-2xl bg-[#0f172a]/70 border border-slate-800/90 hover:border-amber-500/40 hover:bg-[#0f172a]/95 hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm shadow-md">
            <div className="text-xs text-amber-400 font-bold uppercase tracking-wider mb-1">رویکرد درمانی</div>
            <div className="text-base font-bold text-white">زیبایی طبیعی و نچرال</div>
            <div className="text-xs text-slate-400 mt-1">بدون فرم‌های اگزجره، بر پایه آناتومی چهره</div>
          </div>

          <div className="p-5 rounded-2xl bg-[#0f172a]/70 border border-slate-800/90 hover:border-amber-500/40 hover:bg-[#0f172a]/95 hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm shadow-md">
            <div className="text-xs text-amber-400 font-bold uppercase tracking-wider mb-1">اصالت دارویی</div>
            <div className="text-base font-bold text-white">لیبل رسمی وزارت بهداشت</div>
            <div className="text-xs text-slate-400 mt-1">بازگشایی ویال فیلر و بوتاکس در حضور مراجع</div>
          </div>

          <div className="p-5 rounded-2xl bg-[#0f172a]/70 border border-slate-800/90 hover:border-amber-500/40 hover:bg-[#0f172a]/95 hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm shadow-md">
            <div className="text-xs text-amber-400 font-bold uppercase tracking-wider mb-1">پیگیری پس از درمان</div>
            <div className="text-base font-bold text-white">پشتیبانی ۲۴ ساعته کادر درمان</div>
            <div className="text-xs text-slate-400 mt-1">ویزیت‌های فالوآپ رایگان تا بهبودی کامل</div>
          </div>
        </div>

      </div>
    </section>
  );
};
