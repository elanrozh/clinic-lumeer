import React, { useState } from 'react';
import { Sparkles, SlidersHorizontal, ArrowLeft, CheckCircle2, Shield, Calendar, Award, Eye, SplitSquareHorizontal } from 'lucide-react';

interface ResultsSectionProps {
  onOpenBookingModal: (treatmentName?: string) => void;
}

export const ResultsSection: React.FC<ResultsSectionProps> = ({ onOpenBookingModal }) => {
  const [sliderPos, setSliderPos] = useState<number>(50);
  const [selectedCaseIdx, setSelectedCaseIdx] = useState<number>(0);
  const [viewMode, setViewMode] = useState<'slider' | 'side-by-side' | 'before-only' | 'after-only'>('slider');

  const cases = [
    {
      id: 'acne-scar',
      title: 'درمان اسکار آکنه و بستن منافذ باز پوست',
      category: 'درماتولوژی بالینی و لیزر CO2',
      treatment: '۳ جلسه لیزر ترکیبی فراکشنال CO2 + سابسیژن با کانولا + مزوتراپی بازسازی کلاژن',
      patientInfo: 'مراجع ۳۲ ساله · درمان اسکارهای عمقی جای جوش گونه و شقیقه',
      sessions: '۳ جلسه (با فواصل ۴ هفته)',
      downtime: '۳ روز استراحت در منزل',
      longevity: 'دائمی و ماندگار',
      beforeImage: '/src/assets/images/skin_scar_before_1792410078224.jpg',
      afterImage: '/src/assets/images/skin_scar_after_1792410077420.jpg',
      beforeDesc: 'بافت نامنظم، اسکارهای فرورفته قدیمی آکنه و منافذ متسع پوستی',
      afterDesc: 'صاف و یکدست شدن بافت گونه، بسته شدن منافذ و شفافیت کامل کلاژن‌سازی'
    },
    {
      id: 'facial-contouring',
      title: 'کانتورینگ طبیعی چهره و اصلاح گودی زیر چشم',
      category: 'کانتورینگ نچرال و تزریق فیلر',
      treatment: 'تزریق فیلر آلیاکسین سوئیس در خط فک و زیر چشم + مادلینگ ملایم لب',
      patientInfo: 'مراجع ۲۸ ساله · اصلاح تعادل یک‌سوم پایینی صورت و شادابی نگاه بدون حالت مصنوعی',
      sessions: '۱ جلسه اختصاصی VIP',
      downtime: 'بدون نقاهت (تورم خفیف تا ۲۴ ساعت)',
      longevity: '۱۴ الی ۱۸ ماه',
      beforeImage: '/src/assets/images/contour_face_before_1792410078572.jpg',
      afterImage: '/src/assets/images/contour_face_after_1792410078591.jpg',
      beforeDesc: 'گودی ملایم زیر چشم، عدم تقارن طبیعی و کانتور نرم فک',
      afterDesc: 'نگاهی باطراوت، خط فک متقارن و گونه‌های برجسته با حفظ کامل فرم طبیعی'
    }
  ];

  const currentCase = cases[selectedCaseIdx];

  return (
    <section id="results" className="py-24 bg-[#090d16] relative border-t border-slate-900 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-400 mb-3">
            <Sparkles className="w-4 h-4" />
            <span>CLINICAL TRANSFORMATIONS · نتایج بالینی واقعی</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            مشاهده دگرگونی و <span className="text-amber-400 font-serif">نتایج درمانی قبل و بعد</span>
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            عکس‌های پزشکی مستند بدون هیچ‌گونه روتوش یا فیلتر نوری؛ ثبت‌شده در استودیو عکاسی کلینیک لومیِر با شرایط نوری کاملاً یکسان.
          </p>

          {/* Case Selector Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
            {cases.map((c, idx) => (
              <button
                key={c.id}
                onClick={() => {
                  setSelectedCaseIdx(idx);
                  setSliderPos(50);
                }}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                  selectedCaseIdx === idx
                    ? 'bg-amber-500 text-slate-950 font-bold shadow-lg shadow-amber-500/20 ring-2 ring-amber-400/50'
                    : 'bg-slate-900/90 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                <span className="font-mono text-xs opacity-70">پرونده ۰{idx + 1}:</span>
                <span>{c.title}</span>
              </button>
            ))}
          </div>

          {/* View Mode Segmented Controls */}
          <div className="mt-5 inline-flex items-center gap-1 p-1 rounded-xl bg-slate-900 border border-slate-800 text-xs">
            <button
              onClick={() => setViewMode('slider')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer font-medium flex items-center gap-1.5 ${
                viewMode === 'slider' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>اسلایدر تعاملی زنده</span>
            </button>
            <button
              onClick={() => setViewMode('side-by-side')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer font-medium flex items-center gap-1.5 ${
                viewMode === 'side-by-side' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              <SplitSquareHorizontal className="w-3.5 h-3.5" />
              <span>نمایش دو تصویر کنار هم</span>
            </button>
            <button
              onClick={() => setViewMode('before-only')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer font-medium ${
                viewMode === 'before-only' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              فقط قبل
            </button>
            <button
              onClick={() => setViewMode('after-only')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer font-medium ${
                viewMode === 'after-only' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              فقط بعد
            </button>
          </div>
        </div>

        {/* Main Frame */}
        <div className="rounded-3xl bg-[#0d1527] border border-amber-500/30 p-4 sm:p-8 shadow-2xl glow-gold">
          
          {/* Top Info Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-5 mb-5 border-b border-slate-800 text-xs">
            <div>
              <span className="text-amber-400 font-bold text-sm block sm:inline ml-2">
                {currentCase.title}
              </span>
              <span className="text-slate-400 font-medium">
                ({currentCase.treatment})
              </span>
            </div>
            <div className="text-slate-300 font-mono text-[11px] bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
              {currentCase.patientInfo}
            </div>
          </div>

          {/* VIEW MODE 1: Interactive Drag Slider */}
          {viewMode === 'slider' && (
            <div className="space-y-4">
              
              {/* Labels Bar above canvas */}
              <div className="flex items-center justify-between px-2 text-xs font-bold">
                <div className="flex items-center gap-2 text-emerald-400 bg-emerald-950/40 border border-emerald-800/60 px-3 py-1.5 rounded-lg">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>سمت چپ: نتیجه نهایی بعد از درمان (AFTER)</span>
                </div>
                <div className="flex items-center gap-2 text-amber-300 bg-amber-950/40 border border-amber-800/60 px-3 py-1.5 rounded-lg">
                  <span>سمت راست: وضعیت قبل از درمان (BEFORE)</span>
                  <SlidersHorizontal className="w-4 h-4" />
                </div>
              </div>

              {/* Slider Canvas Container */}
              <div className="relative aspect-[16/9] sm:aspect-[21/10] rounded-2xl overflow-hidden select-none border-2 border-slate-800 bg-black shadow-inner">
                
                {/* 1. Underlying Image: BEFORE (covers 100% of the box) */}
                <img
                  src={currentCase.beforeImage}
                  alt="وضعیت پوست قبل از درمان"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                
                {/* Static badge on Before side */}
                <div className="absolute top-4 right-4 bg-slate-950/85 backdrop-blur-md text-amber-300 font-bold text-xs sm:text-sm px-3.5 py-1.5 rounded-xl border border-amber-500/40 shadow-xl z-10 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                  <span>قبل از درمان (BEFORE)</span>
                </div>

                {/* 2. Revealing Image on top: AFTER (clipped from 0 to sliderPos%) */}
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)` }}
                >
                  <img
                    src={currentCase.afterImage}
                    alt="نتیجه نهایی بعد از درمان"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  
                  {/* Badge on After side */}
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-black text-xs sm:text-sm px-3.5 py-1.5 rounded-xl shadow-xl z-10 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-slate-950" />
                    <span>نتیجه نهایی (AFTER)</span>
                  </div>
                </div>

                {/* Vertical Divider Handle Line */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-amber-400 pointer-events-none shadow-[0_0_20px_#f59e0b]"
                  style={{ left: `${sliderPos}%` }}
                >
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-br from-amber-300 via-amber-400 to-amber-500 text-slate-950 flex items-center justify-center font-bold text-xs shadow-2xl border-2 border-white ring-4 ring-amber-400/30">
                    <SlidersHorizontal className="w-5 h-5 text-slate-950" />
                  </div>
                </div>

                {/* Invisible native range input on top for smooth mouse & touch dragging */}
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderPos}
                  onChange={(e) => setSliderPos(Number(e.target.value))}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
                  aria-label="اسلایدر مقایسه تغییرات قبل و بعد"
                />
              </div>

              {/* Quick slider controls */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 pt-2">
                <div className="flex items-center gap-2 text-slate-300">
                  <SlidersHorizontal className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>اسلایدر طلایی را با ماوس یا لمس به چپ و راست بکشید تا دگرگونی را لمس کنید.</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSliderPos(15)}
                    className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 hover:border-amber-500/40 cursor-pointer transition-colors"
                  >
                    بیشتر قبل (۱۵٪)
                  </button>
                  <button
                    onClick={() => setSliderPos(50)}
                    className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-amber-400 border border-slate-800 hover:border-amber-500/40 cursor-pointer transition-colors font-bold"
                  >
                    تقسیم ۵۰ / ۵۰
                  </button>
                  <button
                    onClick={() => setSliderPos(85)}
                    className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 hover:border-amber-500/40 cursor-pointer transition-colors"
                  >
                    بیشتر بعد (۸۵٪)
                  </button>
                </div>
              </div>

            </div>
          )}

          {/* VIEW MODE 2: Side by Side View */}
          {viewMode === 'side-by-side' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              
              {/* Before Card */}
              <div className="rounded-2xl overflow-hidden border border-amber-500/30 bg-[#090d16] p-3 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-amber-400">وضعیت قبل از درمان (BEFORE)</span>
                  <span className="text-[10px] text-slate-400">جلسه اول مشاوره</span>
                </div>
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-slate-800">
                  <img
                    src={currentCase.beforeImage}
                    alt="قبل از درمان"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {currentCase.beforeDesc}
                </p>
              </div>

              {/* After Card */}
              <div className="rounded-2xl overflow-hidden border border-emerald-500/40 bg-[#090d16] p-3 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-emerald-400">نتیجه نهایی بعد از درمان (AFTER)</span>
                  <span className="text-[10px] text-emerald-400 font-mono">CONFIRMED RESULT</span>
                </div>
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-slate-800">
                  <img
                    src={currentCase.afterImage}
                    alt="بعد از درمان"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {currentCase.afterDesc}
                </p>
              </div>

            </div>
          )}

          {/* VIEW MODE 3: Before Only */}
          {viewMode === 'before-only' && (
            <div className="space-y-3">
              <div className="text-sm font-bold text-amber-400">
                وضعیت قبل از شروع پروتکل درمانی:
              </div>
              <div className="relative aspect-[16/9] sm:aspect-[21/10] rounded-2xl overflow-hidden border border-amber-500/30">
                <img
                  src={currentCase.beforeImage}
                  alt="قبل از درمان"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 right-4 bg-slate-950/90 p-3 rounded-xl border border-slate-800 max-w-md text-xs text-slate-200">
                  {currentCase.beforeDesc}
                </div>
              </div>
            </div>
          )}

          {/* VIEW MODE 4: After Only */}
          {viewMode === 'after-only' && (
            <div className="space-y-3">
              <div className="text-sm font-bold text-emerald-400">
                نتیجه نهایی پس از تکمیل جلسات درمانی:
              </div>
              <div className="relative aspect-[16/9] sm:aspect-[21/10] rounded-2xl overflow-hidden border border-emerald-500/40">
                <img
                  src={currentCase.afterImage}
                  alt="بعد از درمان"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 right-4 bg-slate-950/90 p-3 rounded-xl border border-slate-800 max-w-md text-xs text-slate-200">
                  {currentCase.afterDesc}
                </div>
              </div>
            </div>
          )}

          {/* Clinical Specifications Bar */}
          <div className="mt-8 pt-6 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800">
              <div className="text-[11px] text-slate-400">طول دوره درمان:</div>
              <div className="text-sm font-bold text-white mt-0.5">{currentCase.sessions}</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800">
              <div className="text-[11px] text-slate-400">دوره نقاهت و استراحت:</div>
              <div className="text-sm font-bold text-amber-400 mt-0.5">{currentCase.downtime}</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800">
              <div className="text-[11px] text-slate-400">ماندگاری نتایج:</div>
              <div className="text-sm font-bold text-emerald-400 mt-0.5">{currentCase.longevity}</div>
            </div>
          </div>

          {/* Bottom Action */}
          <div className="mt-6 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-300">
              آیا تمایل دارید برای درمان مشابه، مشاوره اختصاصی با پزشک معالج داشته باشید؟
            </p>
            <button
              onClick={() => onOpenBookingModal(currentCase.title)}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-bold text-xs sm:text-sm flex items-center gap-2 cursor-pointer transition-all shadow-lg shadow-amber-500/20 hover:shadow-amber-500/35 hover:-translate-y-0.5"
            >
              <span>رزرو مشاوره برای این درمان</span>
              <ArrowLeft className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
