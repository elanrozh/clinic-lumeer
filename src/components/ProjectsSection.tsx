import React, { useState } from 'react';
import { 
  Sparkles, 
  ExternalLink, 
  Layers, 
  Cpu, 
  SlidersHorizontal, 
  Languages, 
  ShoppingBag, 
  ArrowLeft, 
  Eye, 
  Calculator, 
  BarChart3, 
  Check, 
  Clock, 
  Globe2,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

interface ProjectsSectionProps {
  onOpenConsultationModal: (projectName?: string) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onOpenConsultationModal }) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  
  // Interactive feature states:
  // 1. Before/After slider position (0 - 100%)
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  
  // 2. Real estate investment calculator state
  const [unitArea, setUnitArea] = useState<number>(180); // meters
  const [downPaymentPct, setDownPaymentPct] = useState<number>(40); // percent
  
  // 3. Dashboard KPI active metric
  const [dashboardMetric, setDashboardMetric] = useState<'sales' | 'retention' | 'pipeline'>('sales');

  // 4. Health tourism language preview state
  const [portalLang, setPortalLang] = useState<'fa' | 'ar' | 'en'>('fa');

  // 5. Headless E-commerce active filter
  const [ecommerceFilter, setEcommerceFilter] = useState<'all' | 'perfume' | 'jewelry'>('all');

  // Calculate real estate installment (e.g. 150 million Toman/meter)
  const pricePerMeter = 160; // million Toman
  const totalPrice = unitArea * pricePerMeter;
  const downPayment = Math.round(totalPrice * (downPaymentPct / 100));
  const remainingInstallments = Math.round((totalPrice - downPayment) / 24); // 24 months

  const projects = [
    {
      id: 'clinic',
      title: 'پلتفرم مدیریت و رزرو کلینیک زیبایی VIP',
      tag: 'توسعه سفارشی',
      badgeColor: 'border-amber-500/40 text-amber-300 bg-amber-500/10',
      description: 'لندینگ‌پیج مدرن با فرم رزرو اختصاصی، مقایسه تصویر قبل/بعد و رابط کاربری لوکس تیره و طلایی.',
      stack: ['React 19', 'Tailwind CSS', 'Vite', 'RTL Engine', 'فرم رزرو نوبت آنی'],
      impact: '+۳۴۰٪ رزرو آنلاین خدمات VIP در ماه اول راه‌اندازی',
      image: '/src/assets/images/clinic_luxury_showcase_1792402953806.jpg',
      interactiveType: 'before_after'
    },
    {
      id: 'realestate',
      title: 'سامانه سه‌بعدی و تور مجازی املاک لوکس',
      tag: 'Three.js / WebGL',
      badgeColor: 'border-cyan-500/40 text-cyan-300 bg-cyan-500/10',
      description: 'نمایش تعاملی واحدهای ساختمانی و محاسبة اقساط سرمایه‌گذاری با سرعت اجرای بی‌نظیر.',
      stack: ['Three.js', 'WebGL', 'React 19', 'ماشین‌حساب هوشمند اقساط', 'رندر ۶۰ فریم'],
      impact: 'کاهش ۹۰ درصدی زمان تصمیم‌گیری خریداران هلدینگ‌های برج‌سازی فرشته',
      image: '/src/assets/images/realestate_luxury_3d_1792402954965.jpg',
      interactiveType: 'realestate_calc'
    },
    {
      id: 'erp',
      title: 'داشبورد هوشمند ERP و انبارداری B2B',
      tag: 'React / Recharts',
      badgeColor: 'border-emerald-500/40 text-emerald-300 bg-emerald-500/10',
      description: 'مدیریت فروش، تحلیل رفتار مشتریان (RFM) و گزارش‌گیری زنده با لود زیر ۱ ثانیه.',
      stack: ['React 19', 'Recharts', 'WebSockets', 'تحلیل RFM', 'لود دیتابیس زیر ۰.۸s'],
      impact: 'مدیریت آنلاین بیش از ۲۵۰ میلیارد تومان تراکنش زنجیره تأمین',
      image: '/src/assets/images/dashboard_b2b_analytics_1792402955554.jpg',
      interactiveType: 'erp_dashboard'
    },
    {
      id: 'health',
      title: 'پورتال بین‌المللی گردشگری سلامت',
      tag: 'چندزبانه (FA, AR, EN)',
      badgeColor: 'border-purple-500/40 text-purple-300 bg-purple-500/10',
      description: 'سیستم ارزیابی هوشمند مدارک پزشکی با سوئیچ آنلاین RTL/LTR و پشتیبانی زنده.',
      stack: ['Nuxt 3', 'i18n Multi-Locale', 'RTL/LTR Dynamic Engine', 'پزشکی از راه دور'],
      impact: 'جذب بیش از ۱,۲۰۰ توریست درمانی از کشورهای حاشیه خلیج فارس',
      image: '/src/assets/images/clinic_luxury_showcase_1792402953806.jpg',
      interactiveType: 'multilingual'
    },
    {
      id: 'ecommerce',
      title: 'فروشگاه اختصاصی Headless E-commerce',
      tag: 'Nuxt 3 / Headless',
      badgeColor: 'border-rose-500/40 text-rose-300 bg-rose-500/10',
      description: 'تجربه خرید فوق‌سریع برای برندهای خاص با فیلتر آنی بدون ریلود و اتصال به BNPL.',
      stack: ['Nuxt 3', 'Headless Commerce', 'Tailwind', 'درگاه اسنپ‌پی و دیجی‌پی', 'FCP 0.3s'],
      impact: '+۱۸۰٪ رشد تکمیل سبد خرید در مقایسه با فروشگاه‌های ووکامرسی کند',
      image: '/src/assets/images/ecommerce_luxury_showcase_1792402954990.jpg',
      interactiveType: 'headless_shop'
    }
  ];

  const currentProject = projects[activeTab];

  return (
    <section id="projects" className="py-24 bg-[#090d16] relative border-t border-slate-900 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-3">
              <Sparkles className="w-4 h-4" />
              <span>پورتفولیو و استانداردهای توسعه اختصاصی</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              ۵ راهکار پرچمدار برای بازار ایران و خاورمیانه
            </h2>
            <p className="mt-3 text-slate-400 text-base max-w-2xl leading-relaxed">
              نمونه‌هایی از پروژه‌های لوکس با معماری نرم‌افزاری اختصاصی، طراحی بصری بی‌همتا و عملکرد میلی‌ثانیه‌ای که استانداردهای وب را متحول کرده‌اند.
            </p>
          </div>

          <button
            onClick={() => onOpenConsultationModal()}
            className="self-start md:self-end px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-500/40 text-slate-200 hover:text-white text-sm font-semibold transition-colors flex items-center gap-2 cursor-pointer"
          >
            <span>سفارش پروژه مشابه</span>
            <ArrowLeft className="w-4 h-4 text-amber-400" />
          </button>
        </div>

        {/* Tab Navigation for 5 High-Ticket Projects */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none border-b border-slate-800/80">
          {projects.map((proj, idx) => (
            <button
              key={proj.id}
              onClick={() => setActiveTab(idx)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer flex items-center gap-2 ${
                activeTab === idx
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/50 shadow-lg shadow-amber-500/10'
                  : 'bg-slate-900/60 text-slate-400 border border-slate-800 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
            >
              <span className="font-mono text-xs opacity-60">۰{idx + 1}.</span>
              <span>{proj.title}</span>
            </button>
          ))}
        </div>

        {/* Showcase Detailed Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start rounded-3xl bg-[#0d1527]/90 border border-slate-800/80 p-6 sm:p-8 lg:p-10 shadow-2xl relative glow-gold">
          
          {/* Left Column: Project Metadata, Tech Stack & Outcomes (lg:col-span-5) */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6">
            <div>
              {/* Category Tag & Indicator */}
              <div className="flex items-center gap-3 mb-4">
                <span className={`text-xs px-3 py-1 rounded-full border font-medium ${currentProject.badgeColor}`}>
                  {currentProject.tag}
                </span>
                <span className="text-xs text-slate-400 font-mono">پروژه کد ۰{activeTab + 1}</span>
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug">
                {currentProject.title}
              </h3>

              {/* Description */}
              <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                {currentProject.description}
              </p>

              {/* Impact Callout */}
              <div className="mt-6 p-4 rounded-xl bg-amber-500/5 border border-amber-500/20">
                <div className="flex items-start gap-3">
                  <div className="p-1.5 rounded-lg bg-amber-500/20 text-amber-400 shrink-0 mt-0.5">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-amber-400 font-bold">دست‌آورد تجاری و تحلیلی:</div>
                    <div className="text-sm text-slate-200 mt-1 font-medium">{currentProject.impact}</div>
                  </div>
                </div>
              </div>

              {/* Technology Stack Tags */}
              <div className="mt-6">
                <div className="text-xs font-semibold text-slate-400 mb-2">استک فنی پیاده‌سازی شده:</div>
                <div className="flex flex-wrap gap-2">
                  {currentProject.stack.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Project CTA */}
            <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-4">
              <button
                onClick={() => onOpenConsultationModal(currentProject.title)}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>درخواست مشاوره برای این راهکار</span>
                <ArrowLeft className="w-4 h-4" />
              </button>

              <div className="text-xs text-slate-400 font-mono hidden sm:block">
                SLUG: #{currentProject.id}
              </div>
            </div>
          </div>

          {/* Right Column: Live Interactive Sandbox / Visual Demo (lg:col-span-7) */}
          <div className="lg:col-span-7 rounded-2xl border border-slate-700/60 bg-[#090d16] p-4 sm:p-6 shadow-inner overflow-hidden">
            
            {/* Top Toolbar of the Interactive Demo */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="font-semibold text-slate-300">محیط دمو تعاملی زنده</span>
              </div>
              <span className="font-mono text-amber-400/90">INTERACTIVE PREVIEW</span>
            </div>

            {/* 1. Before / After Comparison Slider (Clinic VIP) */}
            {currentProject.interactiveType === 'before_after' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-slate-300">
                  <span className="font-medium text-amber-400">اسلایدر مقایسه نتایج کلینیک زیبایی (قبل و بعد)</span>
                  <span>موقعیت اسلایدر: {sliderPosition}٪</span>
                </div>

                <div className="relative aspect-[16/10] rounded-xl overflow-hidden select-none border border-slate-800">
                  {/* Before Image Background */}
                  <img
                    src={currentProject.image}
                    alt="فضای کلینیک"
                    className="absolute inset-0 w-full h-full object-cover filter brightness-75 contrast-125 saturate-50"
                  />
                  <div className="absolute top-4 right-4 bg-slate-950/80 backdrop-blur-sm text-slate-300 text-xs px-2.5 py-1 rounded border border-slate-700">
                    طراحی قدیمی / قبل از ویسپار
                  </div>

                  {/* After Image Clipped by Slider */}
                  <div
                    className="absolute inset-0 overflow-hidden"
                    style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
                  >
                    <img
                      src={currentProject.image}
                      alt="طراحی لوکس ویسپار"
                      className="absolute inset-0 w-full h-full object-cover filter brightness-110 saturate-125"
                    />
                    <div className="absolute top-4 left-4 bg-amber-500 text-slate-950 font-bold text-xs px-2.5 py-1 rounded shadow-lg">
                      معماری لوکس و اختصاصی ویسپار
                    </div>
                  </div>

                  {/* Vertical Divider Handle Line */}
                  <div
                    className="absolute top-0 bottom-0 w-1 bg-amber-400 pointer-events-none shadow-[0_0_15px_#f59e0b]"
                    style={{ left: `${sliderPosition}%` }}
                  >
                    <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center font-bold text-xs shadow-2xl">
                      <SlidersHorizontal className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Input range overlay for dragging */}
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={sliderPosition}
                    onChange={(e) => setSliderPosition(Number(e.target.value))}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
                    aria-label="کنترل اسلایدر مقایسه"
                  />
                </div>

                <div className="flex items-center justify-between text-xs text-slate-400 pt-2">
                  <span>← برای مقایسه، اسلایدر وسط را به چپ و راست بکشید →</span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setSliderPosition(20)}
                      className="px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300"
                    >
                      بیشتر قبل
                    </button>
                    <button
                      onClick={() => setSliderPosition(50)}
                      className="px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300"
                    >
                      ۵۰/۵۰
                    </button>
                    <button
                      onClick={() => setSliderPosition(80)}
                      className="px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300"
                    >
                      بیشتر بعد
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* 2. Interactive Real Estate Calculator (Luxury Penthouse) */}
            {currentProject.interactiveType === 'realestate_calc' && (
              <div className="space-y-4">
                <div className="relative aspect-[16/8] rounded-xl overflow-hidden border border-slate-800 mb-4">
                  <img
                    src={currentProject.image}
                    alt="واحدهای لوکس ۳ بعدی"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  <div className="absolute bottom-3 right-4">
                    <span className="text-xs text-amber-400 font-mono">برج مسکونی رویال فرشته · واحد پنت‌هاوس</span>
                    <h4 className="text-lg font-bold text-white">پروژه تور ۳ بعدی WebGL</h4>
                  </div>
                </div>

                {/* Interactive Controls */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-900/80 p-4 rounded-xl border border-slate-800">
                  <div>
                    <label className="text-xs text-slate-400 block mb-1">
                      متراژ واحد: <span className="text-white font-bold">{unitArea} متر مربع</span>
                    </label>
                    <input
                      type="range"
                      min="100"
                      max="450"
                      step="10"
                      value={unitArea}
                      onChange={(e) => setUnitArea(Number(e.target.value))}
                      className="w-full accent-amber-500 cursor-pointer"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-slate-400 block mb-1">
                      درصد پیش‌پرداخت اولیه: <span className="text-amber-400 font-bold">{downPaymentPct}٪</span>
                    </label>
                    <input
                      type="range"
                      min="20"
                      max="70"
                      step="5"
                      value={downPaymentPct}
                      onChange={(e) => setDownPaymentPct(Number(e.target.value))}
                      className="w-full accent-amber-500 cursor-pointer"
                    />
                  </div>
                </div>

                {/* Calculation Outputs */}
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                    <div className="text-[11px] text-slate-400">قیمت کل واحد</div>
                    <div className="text-sm sm:text-base font-bold text-white font-mono mt-0.5">
                      {totalPrice.toLocaleString('fa-IR')} م.ت
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                    <div className="text-[11px] text-slate-400">پیش‌پرداخت ({downPaymentPct}٪)</div>
                    <div className="text-sm sm:text-base font-bold text-amber-400 font-mono mt-0.5">
                      {downPayment.toLocaleString('fa-IR')} م.ت
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                    <div className="text-[11px] text-slate-400">قسط ماهیانه (۲۴ ماه)</div>
                    <div className="text-sm sm:text-base font-bold text-emerald-400 font-mono mt-0.5">
                      {remainingInstallments.toLocaleString('fa-IR')} م.ت
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 3. ERP & B2B Dashboard Interactive Stats */}
            {currentProject.interactiveType === 'erp_dashboard' && (
              <div className="space-y-4">
                <div className="flex gap-2">
                  <button
                    onClick={() => setDashboardMetric('sales')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      dashboardMetric === 'sales'
                        ? 'bg-amber-500 text-slate-950 font-bold'
                        : 'bg-slate-900 text-slate-400 hover:text-white'
                    }`}
                  >
                    گزارش فروش و نقدینگی
                  </button>
                  <button
                    onClick={() => setDashboardMetric('retention')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      dashboardMetric === 'retention'
                        ? 'bg-amber-500 text-slate-950 font-bold'
                        : 'bg-slate-900 text-slate-400 hover:text-white'
                    }`}
                  >
                    تحلیل RFM مشتریان وفادار
                  </button>
                  <button
                    onClick={() => setDashboardMetric('pipeline')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      dashboardMetric === 'pipeline'
                        ? 'bg-amber-500 text-slate-950 font-bold'
                        : 'bg-slate-900 text-slate-400 hover:text-white'
                    }`}
                  >
                    موجودی انبار و توزیع
                  </button>
                </div>

                <div className="relative aspect-[16/9] rounded-xl overflow-hidden border border-slate-800">
                  <img
                    src={currentProject.image}
                    alt="داشبورد هوشمند ERP"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-transparent" />
                  
                  {/* Dynamic Metric Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80">
                    {dashboardMetric === 'sales' && (
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-xs text-slate-400">گردش مالی ماه جاری پلتفرم B2B</div>
                          <div className="text-xl font-bold text-amber-400 font-mono">۴۸.۲ میلیارد تومان</div>
                        </div>
                        <div className="text-left font-mono text-emerald-400 text-sm font-bold">
                          +۳۴.۸٪ رشد نسبت به فصل گذشته
                        </div>
                      </div>
                    )}
                    {dashboardMetric === 'retention' && (
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-xs text-slate-400">شاخص بازگشت مشتریان سازمانی</div>
                          <div className="text-xl font-bold text-cyan-400 font-mono">۸۷.۴٪ شاخص وفاداری</div>
                        </div>
                        <div className="text-left font-mono text-cyan-400 text-sm font-bold">
                          نرخ ریزش مشتری زیر ۲٪
                        </div>
                      </div>
                    )}
                    {dashboardMetric === 'pipeline' && (
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-xs text-slate-400">تعداد SKU فعال در ۳ مرکز توزیع</div>
                          <div className="text-xl font-bold text-purple-400 font-mono">۱۲,۴۸۰ قلم کالا</div>
                        </div>
                        <div className="text-left font-mono text-purple-400 text-sm font-bold">
                          اتصال آنی به سپیدار و همکاران سیستم
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* 4. Multilingual Health Portal Interactive Demo */}
            {currentProject.interactiveType === 'multilingual' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400">سوئیچ آنی جهت و زبان (Dynamic RTL/LTR):</span>
                  <div className="flex gap-1.5 p-1 bg-slate-900 rounded-lg border border-slate-800">
                    <button
                      onClick={() => setPortalLang('fa')}
                      className={`px-3 py-1 rounded text-xs font-semibold ${
                        portalLang === 'fa' ? 'bg-amber-500 text-slate-950' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      فارسی (RTL)
                    </button>
                    <button
                      onClick={() => setPortalLang('ar')}
                      className={`px-3 py-1 rounded text-xs font-semibold ${
                        portalLang === 'ar' ? 'bg-amber-500 text-slate-950' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      العربية (RTL)
                    </button>
                    <button
                      onClick={() => setPortalLang('en')}
                      className={`px-3 py-1 rounded text-xs font-semibold ${
                        portalLang === 'en' ? 'bg-amber-500 text-slate-950' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      English (LTR)
                    </button>
                  </div>
                </div>

                <div 
                  className={`p-6 rounded-xl border border-slate-800 bg-slate-900/90 transition-all ${
                    portalLang === 'en' ? 'text-left' : 'text-right'
                  }`}
                  dir={portalLang === 'en' ? 'ltr' : 'rtl'}
                >
                  {portalLang === 'fa' && (
                    <div>
                      <div className="inline-block px-2 py-0.5 bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs rounded mb-2">
                        پورتال گردشگری سلامت آریانا
                      </div>
                      <h4 className="text-lg font-bold text-white mb-2">ارزیابی آنلاین مدارک جراحی زیبایی و درمانی</h4>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        ارسال پرونده پزشکی، ویزیت ویدیویی با برترین جراحان فوق‌تخصص تهران و رزرو پکیج اقامت هتل ۵ ستاره با ترانسفر فرودگاهی VIP.
                      </p>
                    </div>
                  )}

                  {portalLang === 'ar' && (
                    <div>
                      <div className="inline-block px-2 py-0.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs rounded mb-2">
                        بوابة أريانا للسياحة العلاجية
                      </div>
                      <h4 className="text-lg font-bold text-white mb-2">التقييم الطبي الذكي وحجز العمليات الجراحية</h4>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        إرسال التقارير الطبية، استشارة فورية مع كبار الأطباء الجراحين، مع حجز إقامة فاخرة ونقل خاص من المطار.
                      </p>
                    </div>
                  )}

                  {portalLang === 'en' && (
                    <div>
                      <div className="inline-block px-2 py-0.5 bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs rounded mb-2 font-mono">
                        Ariana Health Tourism Portal
                      </div>
                      <h4 className="text-lg font-bold text-white mb-2 font-sans">VIP Medical Travel & Telemedicine Platform</h4>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Instant medical document evaluation, encrypted consultations with top cosmetic specialists, and seamless VIP hospitality packages.
                      </p>
                    </div>
                  )}

                  <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                    <span>زمان لود سوئیچ زبانه: ۱۲ میلی‌ثانیه</span>
                    <span className="text-amber-400 font-mono">ZERO PAGE RELOAD</span>
                  </div>
                </div>
              </div>
            )}

            {/* 5. Headless E-commerce Interactive Demo */}
            {currentProject.interactiveType === 'headless_shop' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    <button
                      onClick={() => setEcommerceFilter('all')}
                      className={`px-3 py-1 rounded-lg text-xs font-semibold ${
                        ecommerceFilter === 'all' ? 'bg-amber-500 text-slate-950 font-bold' : 'bg-slate-900 text-slate-400'
                      }`}
                    >
                      همه محصولات لوکس
                    </button>
                    <button
                      onClick={() => setEcommerceFilter('perfume')}
                      className={`px-3 py-1 rounded-lg text-xs font-semibold ${
                        ecommerceFilter === 'perfume' ? 'bg-amber-500 text-slate-950 font-bold' : 'bg-slate-900 text-slate-400'
                      }`}
                    >
                      عطر نیش و دست‌ساز
                    </button>
                    <button
                      onClick={() => setEcommerceFilter('jewelry')}
                      className={`px-3 py-1 rounded-lg text-xs font-semibold ${
                        ecommerceFilter === 'jewelry' ? 'bg-amber-500 text-slate-950 font-bold' : 'bg-slate-900 text-slate-400'
                      }`}
                    >
                      جواهرات و اکسسوری
                    </button>
                  </div>

                  <span className="text-[11px] text-emerald-400 font-mono">لود آنی بدون رفرش</span>
                </div>

                <div className="relative aspect-[16/9] rounded-xl overflow-hidden border border-slate-800">
                  <img
                    src={currentProject.image}
                    alt="فروشگاه هدلس ویسپار"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80 flex items-center justify-between">
                    <div>
                      <div className="text-xs text-amber-400 font-mono">HEADLESS NUXT 3 ARCHITECTURE</div>
                      <div className="text-base font-bold text-white mt-0.5">ادکلن دست‌ساز طلای شب (Aurum Nocturne)</div>
                      <div className="text-xs text-slate-400 mt-1">امکان خرید قسطی اسنپ‌پی در ۴ مرحله</div>
                    </div>
                    <div className="text-left">
                      <div className="text-lg font-bold text-white font-mono">۱۸,۵۰۰,۰۰۰ ت</div>
                      <button 
                        onClick={() => alert('محصول در دمو هدلس به سبد خرید اضافه شد (سرعت ثبت: ۴۰ میلی‌ثانیه)')}
                        className="mt-1 px-3 py-1 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold transition-colors cursor-pointer"
                      >
                        تست افزودن به سبد
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
