import React, { useState } from 'react';
import { Sparkles, Check, ArrowLeft, ChevronDown, ChevronUp, ShieldCheck, Heart } from 'lucide-react';

interface PricingPackagesProps {
  onSelectPackage: (packageName: string) => void;
}

export const PricingPackages: React.FC<PricingPackagesProps> = ({ onSelectPackage }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const packages = [
    {
      id: 'glow',
      name: 'پکیج درخشش طلایی لومیِر',
      tag: 'GOLDEN GLOW',
      target: 'شفافیت، آبرسانی عمیق و رفع خستگی پوست',
      features: [
        'هیدروفیشیال تخصصی ۹ مرحله‌ای آمریکایی',
        'مزوتراپی احیاکننده فیلورگا NCTF 135 فرانسه',
        'ماسک ورقه‌ای طلای ۲۴ عیار سوئیسی',
        'ماساژ لنفاوی و اکسیژن‌تراپی هایپرباریک'
      ],
      sessions: '۱ جلسه ۹۰ دقیقه‌ای',
      suitableFor: 'پیش از مراسم‌های مهم، مهمانی‌ها و جلسات خاص',
      recommended: false
    },
    {
      id: 'sculpt',
      name: 'پکیج کانتورینگ طبیعی ارگانیک',
      tag: 'SIGNATURE SCULPT',
      target: 'زاویه‌سازی فک، گونه و مادلینگ روسی لب نچرال',
      features: [
        '۳ سی‌سی ژل هیالورونیک آلیاکسین سوئیس / ژوودرم',
        'اصلاح هارمونی نیم‌رخ، خط خنده و چانه',
        'بوتاکس اورجینال دیسپورت انگلیس برای پیشانی و خط اخم',
        'ویزیت کنترل و روتوش رایگان پس از ۲ هفته'
      ],
      sessions: '۱ جلسه همراه با جلسه چکاپ رایگان',
      suitableFor: 'کسانی که به دنبال زیبایی شیک و غیرمصنوعی هستند',
      recommended: true
    },
    {
      id: 'resurface',
      name: 'پروتکل بازسازی و جوانسازی عمیق',
      tag: 'TOTAL RESURFACING',
      target: 'رفع کامل اسکار آکنه، منافذ باز و افتادگی پوست',
      features: [
        '۳ جلسه لیزر ترکیبی فراکشنال CO2',
        'سابسیژن تخصصی با کانولای ظریف بدون کبودی',
        '۲ جلسه مزوتراپی پی‌آرپی غنی از فاکتور رشد پلاکت',
        'کیت ترمیم‌کننده و مراقبت پوستی هدیه کلینیک'
      ],
      sessions: '۳ جلسه با فواصل ۴ هفته‌ای',
      suitableFor: 'اسکارهای مقاوم، خطوط عمیق و لک‌های مقاوم',
      recommended: false
    }
  ];

  const faqs = [
    {
      q: 'آیا تزریق فیلر و کانتورینگ در کلینیک لومیِر حالت مصنوعی ایجاد می‌کند؟',
      a: 'خیر، فلسفه بنیادین لومیِر «زیبایی نچرال و نامحسوس» است. پزشکان متخصص ما بر اساس نسبت‌های طلایی ارگونومی صورت ایرانی و با مقدار دقیق ژل‌های اروپایی عمل می‌کنند؛ به طوری که طراوت و جوانی چهره حفظ شود بدون اینکه فرم غیرطبیعی یا اغراق‌آمیز پیدا کند.'
    },
    {
      q: 'آیا اصالت ویال‌های فیلر و بوتاکس در حضور مراجع تأیید می‌شود؟',
      a: 'قطعاً. تمامی فیلرها و مزوژل‌های مصرفی دارای برچسب اصالت و هولوگرام رسمی سازمان غذا و دارو (TTAC) هستند. بسته‌بندی پلمپ در حضور خود شما بازگشایی شده و برچسب بارکد سریال به پرونده بالینی شما ضمیمه می‌گردد.'
    },
    {
      q: 'پروتکل حفظ حریم خصوصی مراجعین در سوئیت VIP به چه صورت است؟',
      a: 'پذیرش مراجعین در لومیِر با فواصل زمانی دقیق زمان‌بندی می‌شود. به محض ورود با راهنمایی کادر پذیرش مستقیماً به سوئیت اختصاصی هدایت می‌شوید و هیچ‌گونه مواجهه با سایر مراجعین در سالن انتظار وجود ندارد.'
    },
    {
      q: 'دوره نقاهت لیزر فراکشنال و اندولیفت چقدر است؟',
      a: 'به لطف تکنولوژی پیشرفته کولینگ همزمان و پالس‌های دقیق لیزر، قرمزی اولیه طی ۲ الی ۳ روز برطرف می‌شود و پوسته‌ریزی میکروسکوپی بدون درد ایجاد شده و تا روز پنجم پوستی کاملاً شاداب و تازه جایگزین می‌شود.'
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-[#0d1527] relative border-t border-slate-900 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-5 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-400 mb-3">
            <Sparkles className="w-4 h-4" />
            <span>TREATMENT PROTOCOLS · پکیج‌های درمانی برگزیده</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            برنامه‌های درمانی <span className="text-amber-400 font-serif">جامع و هدفمند</span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            ترکیبی از متدهای علمی و سازگار با یکدیگر که بهترین هم‌افزایی را برای رسیدن به نتایج ماندگار خلق می‌کنند.
          </p>
        </div>

        {/* 3 Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 relative group ${
                pkg.recommended
                  ? 'bg-[#090d16] border-2 border-amber-500 shadow-2xl shadow-amber-500/15 -translate-y-2 hover:-translate-y-3'
                  : 'bg-[#090d16]/80 border border-slate-800 hover:border-amber-500/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50'
              }`}
            >
              {pkg.recommended && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 text-slate-950 text-xs font-black shadow-lg">
                  محبوب‌ترین پکیج زیبایی VIP
                </div>
              )}

              <div>
                <div className="text-[11px] font-mono tracking-widest text-amber-400 font-bold mb-1">
                  {pkg.tag}
                </div>
                <h3 className="text-2xl font-black text-white group-hover:text-amber-300 transition-colors">
                  {pkg.name}
                </h3>
                <p className="text-xs text-amber-300/90 font-medium mt-1">
                  هدف: {pkg.target}
                </p>

                {/* Features */}
                <div className="mt-6 space-y-3 border-t border-slate-800 pt-5">
                  {pkg.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                      <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Meta */}
                <div className="mt-6 pt-5 border-t border-slate-800/80 space-y-2 text-xs text-slate-400">
                  <div>
                    تعداد و زمان: <strong className="text-white">{pkg.sessions}</strong>
                  </div>
                  <div>
                    مناسب برای: <strong className="text-slate-300">{pkg.suitableFor}</strong>
                  </div>
                </div>
              </div>

              {/* Action Button with refined hover */}
              <div className="mt-8 pt-5 border-t border-slate-800/80">
                <button
                  onClick={() => onSelectPackage(pkg.name)}
                  className={`w-full py-3.5 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer transition-all duration-200 ${
                    pkg.recommended
                      ? 'bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5 active:translate-y-0'
                      : 'bg-slate-900 hover:bg-amber-500 hover:text-slate-950 border border-slate-700 hover:border-amber-400 text-white hover:shadow-lg hover:shadow-amber-500/20 active:translate-y-0'
                  }`}
                >
                  <span>رزرو مشاوره این پکیج</span>
                  <ArrowLeft className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* FAQ Accordion Section */}
        <div className="mt-24 max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-black text-white">
              سوالات پرتکرار مراجعین محترم
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              پاسخ‌های شفاف تیم درمانی کلینیک لومیِر به ابهامات متداول
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'bg-[#090d16] border-amber-500/40 shadow-lg shadow-black/40'
                      : 'bg-[#090d16]/80 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-5 text-right flex items-center justify-between gap-4 text-sm font-bold text-white hover:text-amber-400 transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <div className={`p-1 rounded-lg transition-transform duration-200 ${isOpen ? 'bg-amber-500/20 text-amber-400' : 'text-slate-400'}`}>
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-amber-400 shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                      )}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs text-slate-300 leading-relaxed border-t border-slate-800/60 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
