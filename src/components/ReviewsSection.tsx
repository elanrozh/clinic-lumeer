import React, { useState } from 'react';
import { Star, Quote, ChevronRight, ChevronLeft, ShieldCheck, Sparkles, UserCheck } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);

  const reviews = [
    {
      id: 1,
      quote:
        '«سوئیت اختصاصی، صفر دقیقه معطلی و نتیجه‌ای که واقعاً اعتماد‌به‌نفس من را دگرگون کرد. تزریق فیلر لب و زاویه فک من آن‌قدر نچرال و دقیق توسط دکتر منصوری انجام شد که حتی نزدیک‌ترین دوستانم فقط حس شادابی و جوانی صورتم را متوجه شدند نه اینکه کاری انجام داده‌ام. استانداردهای لومیِر واقعاً در سطح برترین کلینیک‌های سوئیس و پاریس است.»',
      author: 'مهندس فرنوش سپهری',
      role: 'مدیر برند مد و طراحی لباس',
      treatment: 'کانتورینگ طبیعی چهره و فیلر لب روسی',
      rating: 5,
      date: 'شهریور ۱۴۰۴ · مراجع وفادار ۲ ساله'
    },
    {
      id: 2,
      quote:
        '«من سال‌ها به خاطر اسکارهای شدید آکنه روی گونه‌هایم از حضور در جلسات کاری عکاسی فراری بودم و دو کلینیک دیگر به من گفته بودند کاری نمی‌شود کرد. در لومیِر پروتکل ۳ جلسه‌ای لیزر فراکشنال CO2 به همراه سابسیژن انجام دادم؛ پوستم اکنون صاف و صیقلی شده است. از پیگیری‌های دلسوزانه تیم پزشکی در روزهای بعد از لیزر بی‌نهایت سپاسگزارم.»',
      author: 'مهندس بردیا کاظمیان',
      role: 'کارآفرین و معمار ساختمان',
      treatment: 'درمان تخصصی اسکار آکنه و جوانسازی پوست',
      rating: 5,
      date: 'آبان ۱۴۰۴ · نتیجه قطعی بالینی'
    },
    {
      id: 3,
      quote:
        '«برای من مهم‌ترین ملاک حفظ کامل حریم خصوصی و امنیت بهداشتی بود. کلینیک لومیِر دقیقاً همان پناهگاه امنی است که هیچ فرد دیگری را در لابی ملاقات نمی‌کنید. خدمات هیدروفیشیال طلا و بوتاکس دور چشم را هر ۴ ماه تکرار می‌کنم و درخشندگی پوستم پایدار مانده است.»',
      author: 'دکتر هدی رضوان',
      role: 'متخصص داروسازی و عضو هیئت علمی',
      treatment: 'فیشیال طلای ۲۴ عیار و رفع خطوط پنجه‌کلاغی',
      rating: 5,
      date: 'دی ۱۴۰۴ · مراجع VIP'
    },
    {
      id: 4,
      quote:
        '«درمان اندولیفت غبغب بدون حتی یک بخیه یا بیهوشی انجام شد. فرم فک من کاملاً شارپ و سفت شد و همان روز به امور روزمره بازگشتم. متانت، مهارت دست و اخلاق حرفه‌ای کادر پزشکی لومیِر ستودنی است.»',
      author: 'کیوان رحمانی',
      role: 'مدیرعامل هلدینگ بازرگانی',
      treatment: 'اندولیفت لیزری غبغب و زاویه فک',
      rating: 5,
      date: 'بهمن ۱۴۰۴ · درمان سرپایی یک‌جلسه‌ای'
    }
  ];

  const nextReview = () => {
    setCurrentIdx((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIdx((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const current = reviews[currentIdx];

  return (
    <section id="reviews" className="py-24 bg-[#090d16] relative border-t border-slate-900 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-400 mb-3">
            <Sparkles className="w-4 h-4" />
            <span>PATIENT STORIES · داستان مراجعین</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            مورد اعتماد <span className="text-amber-400 font-serif">چهره‌های خاص و متمایز</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            روایت واقعی مراجعینی که سلامت، جوانی و فرم طبیعی چهره خود را به هنر دست پزشکان لومیِر سپردند.
          </p>
        </div>

        {/* Featured Testimonial Card */}
        <div className="rounded-3xl bg-[#0f172a]/90 border border-amber-500/30 hover:border-amber-500/50 p-8 sm:p-12 shadow-2xl relative glow-gold transition-colors">
          
          {/* Top Star Rating & Quote Icon */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-1.5 text-amber-400">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
              <span className="text-xs font-mono text-amber-300 font-bold mr-2">۵.۰ / ۵.۰</span>
            </div>

            <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-400 border border-amber-500/20 shadow-md">
              <Quote className="w-6 h-6 rotate-180" />
            </div>
          </div>

          {/* Testimonial Quote */}
          <blockquote className="text-lg sm:text-xl text-slate-100 font-medium leading-relaxed tracking-normal min-h-[140px] flex items-center">
            {current.quote}
          </blockquote>

          {/* Patient Details & Verified Badge */}
          <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="text-base font-bold text-white flex items-center gap-2">
                <span>{current.author}</span>
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="text-xs text-amber-400/90 font-medium mt-0.5">
                {current.role}
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                خدمت دریافت شده: <strong className="text-slate-300">{current.treatment}</strong>
              </div>
            </div>

            <div className="bg-slate-900/90 border border-slate-800 px-4 py-2 rounded-xl text-left">
              <div className="text-[11px] text-emerald-400 flex items-center gap-1">
                <UserCheck className="w-3.5 h-3.5" />
                <span>پرونده بالینی تأییدشده</span>
              </div>
              <div className="text-[10px] text-slate-400 mt-0.5 font-mono">
                {current.date}
              </div>
            </div>
          </div>

          {/* Pagination Indicators & Next/Prev Controls with enhanced hover */}
          <div className="mt-8 pt-6 border-t border-slate-800/60 flex items-center justify-between">
            <div className="flex items-center gap-2">
              {reviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIdx(idx)}
                  className={`h-2.5 rounded-full transition-all cursor-pointer ${
                    currentIdx === idx ? 'w-8 bg-amber-400' : 'w-2.5 bg-slate-700 hover:bg-slate-500'
                  }`}
                  aria-label={`نظر مراجع ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={prevReview}
                className="p-3 rounded-xl bg-slate-900 border border-slate-700 text-slate-300 hover:text-slate-950 hover:bg-amber-400 hover:border-amber-400 transition-all cursor-pointer active:scale-95 shadow-sm"
                aria-label="نظر قبلی"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              <button
                onClick={nextReview}
                className="p-3 rounded-xl bg-slate-900 border border-slate-700 text-slate-300 hover:text-slate-950 hover:bg-amber-400 hover:border-amber-400 transition-all cursor-pointer active:scale-95 shadow-sm"
                aria-label="نظر بعدی"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
