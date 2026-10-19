import React, { useState } from 'react';
import { Sparkles, ArrowLeft, Check, Clock, ShieldCheck, HeartHandshake, Eye, Activity, Zap } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'face' | 'skin' | 'laser'>('all');

  const treatments = [
    {
      id: 'facial-aesthetics',
      category: 'face',
      tag: 'SCULPT & REFINE',
      title: 'کانتورینگ و مادلینگ چهره',
      englishTitle: 'Facial Aesthetics',
      description: 'تزریق فیلرهای هیالورونیک اختصاصی، لیفت با نخ‌های کلاژن‌ساز و زاویه‌سازی طبیعی متناسب با ارگونومی چهره شما.',
      details: [
        'تزریق فیلر خط خنده، گونه و شقیقه با ماندگاری بالا',
        'مادلینگ طبیعی لب با متد روسی و نچرال اروپایی',
        'لیفت صورت و ابرو با نخ‌های قابل جذب Silhouette Soft',
        'زاویه‌سازی فک و چانه جهت ایجاد تعادل نیم‌رخ'
      ],
      duration: '۴۵ الی ۶۰ دقیقه',
      downtime: 'بدون دوره نقاهت (بازگشت فوری به فعالیت)',
      brands: 'ژوودرم فرانسه / آلیاکسین سوئیس / الانسه',
      recommended: true
    },
    {
      id: 'dermatology',
      category: 'skin',
      tag: 'MEDICAL-GRADE CARE',
      title: 'درماتولوژی بالینی و مزوتراپی',
      englishTitle: 'Clinical Dermatology',
      description: 'تشخیص تخصصی پوست، درمان لک‌های مقاوم ملاسما، رفع جای جوش و تغذیه سلولی با کوکتل‌های غنی دارویی.',
      details: [
        'مزوتراپی جوانساز با فیلورگا NCTF 135HA فرانسه',
        'تزریق جوانسازهای جالپرو (Jalupro) و پروفایلو (Profhilo)',
        'سابسیژن و درمان اسکارهای عمیق آکنه با متد ترکیبی',
        'پی‌آرپی غنی‌شده برای تحریک بازسازی بافت پوست'
      ],
      duration: '۳۰ الی ۴۵ دقیقه',
      downtime: '۲۴ ساعت قرمزی خفیف',
      brands: 'Jalupro ایتالیا / Filorga فرانسه',
      recommended: false
    },
    {
      id: 'laser-therapy',
      category: 'laser',
      tag: 'PRECISION TECHNOLOGY',
      title: 'لیزردرمانی پیشرفته و اندولیفت',
      englishTitle: 'Advanced Laser Therapy',
      description: 'پلتفرم‌های لیزری نسل جدید برای سفت‌کردن پوست، رفع غبغب بدون جراحی، بازسازی منافذ و روشن‌سازی پوست.',
      details: [
        'اندولیفت لیزری با فیبر نوری برای لیفت غبغب و زاویه فک',
        'لیزر فراکشنال CO2 جهت جوانسازی عمقی و بستن منافذ',
        'لیزر کیوسوئیچ و پیکوشور برای رفع لک و پیگمانتاسیون',
        'لیزر موهای زائد با دستگاه کندلا الکساندریت جنتل‌پرو ۲۰۲۵'
      ],
      duration: '۳۰ الی ۹۰ دقیقه (بسته به موضع)',
      downtime: '۱ تا ۴ روز بازسازی اپیدرم',
      brands: 'Candela USA / Eufoton Italy',
      recommended: true
    },
    {
      id: 'skin-sanctuary',
      category: 'skin',
      tag: 'HOLISTIC LUXURY',
      title: 'فیشیال و کلاژن‌تراپی VIP',
      englishTitle: 'VIP Skin Sanctuary',
      description: 'پاکسازی عمقی چندمرحله‌ای، اکسیژن‌رسانی به لایه‌های میانی پوست، و ماساژ درناژ لنفاوی با سرم‌های ارگانیک طلا.',
      details: [
        'هیدروفیشیال ۹ مرحله‌ای با دستگاه اصل آمریکایی',
        'استفاده از ماسک ورقه‌ای طلای ۲۴ عیار سوئیسی',
        'ماساژ لیفتینگ صورت و درناژ لنفاوی دور چشم',
        'اکسیژن‌تراپی هایپرباریک جهت درخشش و شفافیت آنی'
      ],
      duration: '۷۵ دقیقه آرامش مطلق',
      downtime: 'صفر (درخشش فوری برای مراسم)',
      brands: 'Valmont سوئیس / Biologique Recherche فرانسه',
      recommended: false
    },
    {
      id: 'periorbital',
      category: 'face',
      tag: 'PRECISION EYE CARE',
      title: 'جوانسازی اختصاصی چشم و پلک',
      englishTitle: 'Periorbital Rejuvenation',
      description: 'رفع گودی و سیاهی زیر چشم، درمان خطوط پنجه‌کلاغی و بلفاروپلاستی بدون اسکار برای احیای شادابی نگاه.',
      details: [
        'تزریق فیلر اختصاصی زیر چشم تئوسیال ریدنس ۲',
        'مزوژل روشن‌کننده دور چشم برای کاهش تیرگی',
        'بلفاروپلاستی ظریف پلک بالا با حداقل برش',
        'بوتاکس میگرن و پنجه‌کلاغی با برندهای مجاز مصپورت و دیسپورت'
      ],
      duration: '۳۰ الی ۶۰ دقیقه',
      downtime: '۲ الی ۵ روز',
      brands: 'Teosyal Redensity II / Dysport UK',
      recommended: false
    },
    {
      id: 'body-silhouette',
      category: 'laser',
      tag: 'NON-INVASIVE SCULPT',
      title: 'فرم‌دهی و بادی کانتورینگ غیرتهاجمی',
      englishTitle: 'Body Contouring',
      description: 'کاهش سایز موضعی، رفع سلولیت و لیفت بافت‌های شل‌شده بدن بدون نیاز به بیهوشی، برش یا جراحی سنگین.',
      details: [
        'کرایولیپولیز پزشکی ۳۶۰ درجه برای حذف چربی‌های مقاوم',
        'هایفوتراپی بدن جهت سفت‌کردن پوست بازو و شکم',
        'مزوتراپی لیپولیتیک جهت تسریع چربی‌سوزی موضعی',
        'آنالیز ترکیب بدنی InBody و مشاوره تغذیه اختصاصی'
      ],
      duration: '۶۰ دقیقه',
      downtime: 'بدون دوره نقاهت',
      brands: 'Zeltiq CoolSculpting / InBody',
      recommended: false
    }
  ];

  const filtered = treatments.filter((t) => {
    if (activeFilter === 'all') return true;
    return t.category === activeFilter;
  });

  return (
    <section id="services" className="py-24 bg-[#0d1527] relative border-t border-slate-900 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-400 mb-3">
            <Sparkles className="w-4 h-4" />
            <span>SIGNATURE TREATMENTS · خدمات امضای کلینیک</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            دست‌چین‌شده برای <span className="text-amber-400 font-serif">درخشش و زیبایی شما</span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            در لومیِر، زیبایی یک فرآیند شتاب‌زده نیست؛ هر طرح درمان بر اساس آناتومی منحصربه‌فرد چهره شما و با بالاترین استانداردهای ایمنی پزشکی طراحی می‌شود.
          </p>

          {/* Filter Pills */}
          <div className="mt-8 inline-flex items-center gap-1.5 p-1 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-lg">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/25'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              همه خدمات کلینیک
            </button>
            <button
              onClick={() => setActiveFilter('face')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeFilter === 'face'
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/25'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              کانتورینگ و صورت
            </button>
            <button
              onClick={() => setActiveFilter('skin')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeFilter === 'skin'
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/25'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              پوست و درماتولوژی
            </button>
            <button
              onClick={() => setActiveFilter('laser')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeFilter === 'laser'
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/25'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              لیزر و اندولیفت
            </button>
          </div>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filtered.map((service) => (
            <div
              key={service.id}
              className="rounded-3xl p-6 sm:p-7 bg-[#090d16] border border-slate-800/90 hover:border-amber-500/50 hover:shadow-2xl hover:shadow-amber-500/10 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between relative group"
            >
              {service.recommended && (
                <div className="absolute -top-3 left-6 px-3.5 py-0.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 text-slate-950 text-[10px] font-black shadow-lg shadow-amber-500/20">
                  خدمت برگزیده VIP
                </div>
              )}

              <div>
                {/* Tag Kicker */}
                <div className="text-[11px] font-mono tracking-widest text-amber-400 font-bold mb-2">
                  {service.tag}
                </div>

                {/* Persian Title + English subtitle */}
                <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                  {service.title}
                </h3>
                <span className="text-xs text-slate-400 font-serif italic block mt-0.5">
                  {service.englishTitle}
                </span>

                {/* Description */}
                <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {service.description}
                </p>

                {/* Bullet details */}
                <div className="mt-5 space-y-2.5 border-t border-slate-800/80 pt-4">
                  {service.details.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <Check className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Clinical Metadata */}
                <div className="mt-6 pt-4 border-t border-slate-800/60 grid grid-cols-2 gap-2 text-[11px] text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    <span>{service.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{service.downtime}</span>
                  </div>
                </div>

                <div className="mt-2 text-[10px] text-slate-400 font-mono">
                  برندهای مجاز: <span className="text-slate-300">{service.brands}</span>
                </div>
              </div>

              {/* Action Button: Clean separate hover state without whole-card trigger */}
              <div className="mt-6 pt-5 border-t border-slate-800/80">
                <button
                  onClick={() => onSelectService(service.title)}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-900 border border-slate-700 hover:border-amber-400 hover:bg-gradient-to-r hover:from-amber-400 hover:to-amber-500 hover:text-slate-950 text-slate-200 text-xs font-bold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-md hover:shadow-amber-500/25 active:scale-[0.98]"
                >
                  <span>رزرو مشاوره این خدمت</span>
                  <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Doctor Consultation Banner */}
        <div className="mt-14 rounded-3xl bg-gradient-to-r from-slate-950 via-[#0d1527] to-slate-950 border border-amber-500/30 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl hover:border-amber-500/50 transition-colors">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center shrink-0">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">
                هنوز مطمئن نیستید چه درمانی مناسب چهره و پوست شماست؟
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                در جلسه مشاوره حضوری VIP با دستگاه آنالیزور سه‌بعدی پوست، وضعیت کلاژن و لایه‌های عمقی پوست بررسی و بهترین برنامه درمان انفرادی تدوین می‌شود.
              </p>
            </div>
          </div>

          <button
            onClick={() => onSelectService('مشاوره جامع آنالیز سه‌بعدی چهره')}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-bold text-xs sm:text-sm whitespace-nowrap shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 transition-all cursor-pointer hover:-translate-y-0.5 active:translate-y-0"
          >
            رزرو جلسه آنالیز چهره با پزشک
          </button>
        </div>

      </div>
    </section>
  );
};
