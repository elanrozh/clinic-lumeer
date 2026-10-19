import React from 'react';
import { Sparkles, Shield, Wind, Sparkle, Coffee, Lock, CheckCircle2 } from 'lucide-react';

export const ClinicSanctuary: React.FC = () => {
  return (
    <section id="sanctuary" className="py-24 bg-[#090d16] relative border-t border-slate-900 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-400 mb-3">
            <Lock className="w-4 h-4" />
            <span>THE SANCTUARY · پناهگاه اختصاصی زیبایی</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            محیطی آرام، خصوصی و <span className="text-amber-400 font-serif">فراتر از یک کلینیک معمولی</span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            ما مفهوم سنتی شلوغی و انتظار در مطب‌های زیبایی را از نو تعریف کرده‌ایم. در لومیِر، هر مراجعه‌کننده مستقیماً به سوئیت اختصاصی خود راهنمایی می‌شود.
          </p>
        </div>

        {/* 2 Big Visual Showcases with refined hover */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Card 1: VIP Suite Interior */}
          <div className="rounded-3xl overflow-hidden border border-slate-800 bg-[#0d1527] flex flex-col justify-between group hover:border-amber-500/50 hover:shadow-2xl hover:shadow-amber-500/10 hover:-translate-y-1 transition-all duration-300 shadow-xl">
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src="/src/assets/images/clinic_luxury_showcase_1792402953806.jpg"
                alt="سوئیت اختصاصی کلینیک لومیِر"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d1527] via-transparent to-transparent pointer-events-none" />
              <div className="absolute top-4 right-4 bg-slate-950/85 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-amber-500/30 text-amber-400 text-xs font-bold shadow-lg">
                سوئیت خصوصی درمان VIP
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-4">
              <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                حریم خصوصی مطلق و پذیرش مستقیم
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                جلسات درمان در فضایی آرام با نورپردازی متغیر و موسیقی ملایم اختصاصی انجام می‌شود. حضور در کلینیک بدون تلاقی زمانی با سایر مراجعین هماهنگ می‌گردد تا آرامش کامل شما تضمین شود.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-slate-800 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>پذیرش تک‌نفره با هماهنگی دقیق</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>پذیرایی ارگانیک و نوشیدنی‌های سفارشی</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: State-of-the-art Laser Suite */}
          <div className="rounded-3xl overflow-hidden border border-slate-800 bg-[#0d1527] flex flex-col justify-between group hover:border-amber-500/50 hover:shadow-2xl hover:shadow-amber-500/10 hover:-translate-y-1 transition-all duration-300 shadow-xl">
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src="/src/assets/images/laser_technology_room_1792409014355.jpg"
                alt="اتاق لیزر و تکنولوژی پیشرفته لومیِر"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d1527] via-transparent to-transparent pointer-events-none" />
              <div className="absolute top-4 right-4 bg-slate-950/85 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-cyan-500/30 text-cyan-400 text-xs font-bold shadow-lg">
                تکنولوژی‌های استاندارد FDA آمریکا
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-4">
              <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                پلتفرم‌های لیزری نسل ۲۰۲۵ بدون درد و بدون سوختگی
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                دستگاه‌های اورجینال کندلا آمریکا، اندولیفت ایتالیا و سیستم خنک‌کننده زیمر آلمان، تضمین‌کننده ایمن‌ترین و مؤثرترین تجربه درمان بدون ریسک لک یا آسیب به بافت‌های سالم هستند.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-slate-800 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>کولینگ منهای ۳۰ درجه بدون نیاز به بی‌حسی</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>فیلتراسیون ضدویروس HEPA بیمارستانی</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Feature Badges with subtle hover feedback */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-amber-500/40 hover:bg-slate-900/90 transition-all cursor-default">
            <Shield className="w-5 h-5 text-amber-400 mx-auto mb-2" />
            <div className="text-xs font-bold text-white">استریلیزاسیون کلاس A</div>
            <div className="text-[10px] text-slate-400 mt-0.5">اتوکلاوهای پیشرفته بیمارستانی</div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-amber-500/40 hover:bg-slate-900/90 transition-all cursor-default">
            <Lock className="w-5 h-5 text-amber-400 mx-auto mb-2" />
            <div className="text-xs font-bold text-white">سوئیت‌های خصوصی VIP</div>
            <div className="text-[10px] text-slate-400 mt-0.5">بدون مواجهه در سالن انتظار</div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-amber-500/40 hover:bg-slate-900/90 transition-all cursor-default">
            <Wind className="w-5 h-5 text-amber-400 mx-auto mb-2" />
            <div className="text-xs font-bold text-white">تهویه هوای مطبوع و پاک</div>
            <div className="text-[10px] text-slate-400 mt-0.5">هوای تازه با فیلتراسیون مداوم</div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-amber-500/40 hover:bg-slate-900/90 transition-all cursor-default">
            <Coffee className="w-5 h-5 text-amber-400 mx-auto mb-2" />
            <div className="text-xs font-bold text-white">پارکینگ اختصاصی والمَن</div>
            <div className="text-[10px] text-slate-400 mt-0.5">ورود و خروج بی‌دردسر در فرشته</div>
          </div>
        </div>

      </div>
    </section>
  );
};
