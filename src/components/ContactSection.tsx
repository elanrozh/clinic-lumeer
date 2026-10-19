import React, { useState } from 'react';
import { Sparkles, Send, CheckCircle2, Phone, Mail, MessageSquare, Clock, ShieldCheck, MapPin } from 'lucide-react';

interface ContactSectionProps {
  prefilledProject?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ prefilledProject }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    projectType: prefilledProject || 'کلینیک زیبایی VIP',
    budget: 'بالای ۱۰۰ میلیون تومان (پروژه پرچمدار)',
    description: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const projectTypes = [
    'پلتفرم کلینیک زیبایی VIP',
    'تور سه‌بعدی املاک لوکس',
    'داشبورد هوشمند ERP و SaaS',
    'فروشگاه اختصاصی Headless',
    'پورتال بین‌المللی چندزبانه',
    'سایر پروژه‌های سفارشی'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim()) {
      setErrorMsg('لطفاً نام و نام خانوادگی و شماره تماس معتبر خود را وارد فرمایید.');
      return;
    }

    setErrorMsg('');
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className="py-24 bg-[#090d16] relative border-t border-slate-900 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-3">
            <Sparkles className="w-4 h-4" />
            <span>مشاوره VIP و بررسی پروپوزال</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            شروع همکاری با آژانس دیجیتال ویسپار
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            جهت بررسی نیازهای فنی پروژه، تدوین معماری نرم‌افزار و برآورد زمان تحویل، اطلاعات اولیه کسب‌وکار خود را ثبت کنید. تیم ارشد فرانت‌اند ویسپار ظرف کمتر از ۴ ساعت کاری با شما تماس خواهند گرفت.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Direct Contact Cards & Agency Info (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Card 1: Direct Hotline */}
            <div className="rounded-2xl bg-[#0f172a]/80 border border-slate-800 p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">تماس مستقیم با واحد پذیرش VIP:</div>
                  <a href="tel:02188880000" className="text-lg font-bold text-white hover:text-amber-400 transition-colors font-mono ltr inline-block mt-0.5">
                    ۰۲۱-۸۸۸۸۰۰۰۰
                  </a>
                  <div className="text-[11px] text-emerald-400 mt-0.5 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block"></span>
                    <span>پاسخگویی سریع شنبه تا پنجشنبه ۹ الی ۱۸</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Official Telegram & Online Consultation */}
            <div className="rounded-2xl bg-[#0f172a]/80 border border-slate-800 p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">ارتباط فوری در تلگرام و واتس‌اپ:</div>
                  <div className="text-base font-bold text-white font-mono mt-0.5">
                    @WispaarAgency
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    ارسال مستندات فنی و بررسی اولیه در کمتر از ۳۰ دقیقه
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: Physical Address & Headquarters */}
            <div className="rounded-2xl bg-[#0f172a]/80 border border-slate-800 p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">نشانی استودیو و دفتر مرکزی:</div>
                  <div className="text-sm font-bold text-white mt-0.5">
                    تهران، منطقه ۱، خیابان فرشته (شهید فیاضی)، برج نماد
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    جلسات حضوری با هماهنگی قبلی
                  </div>
                </div>
              </div>
            </div>

            {/* Guarantee Badge */}
            <div className="p-5 rounded-2xl bg-amber-500/5 border border-amber-500/20 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-bold text-amber-300">تعهد و گارانتی رسمی کیفیت:</div>
                <div className="text-xs text-slate-300 mt-1 leading-relaxed">
                  تمامی پروژه‌های ویسپار دارای قرارداد رسمی عدم افشای اطلاعات (NDA)، پشتیبانی فنی ۶ ماهه اختصاصی و تضمین کتبی رتبه سرعت لود زیر ۱ ثانیه می‌باشند.
                </div>
              </div>
            </div>

          </div>

          {/* RTL Form (lg:col-span-7) */}
          <div className="lg:col-span-7 rounded-3xl bg-[#0d1527] border border-slate-800 p-6 sm:p-10 shadow-2xl relative glow-gold">
            
            {submitted ? (
              <div className="text-center py-12 px-4 space-y-5 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black text-white">
                  درخواست شما با موفقیت در صف اول ثبت شد!
                </h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  اطلاعات پروژه شما تحویل معمار ارشد پروژه‌های ویسپار گردید. ظرف ۴ ساعت کاری آینده جهت هماهنگی جلسه حضوری یا آنلاین با شماره تلفن شما تماس حاصل خواهد شد.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: '',
                        phone: '',
                        projectType: 'پلتفرم کلینیک زیبایی VIP',
                        budget: 'بالای ۱۰۰ میلیون تومان (پروژه پرچمدار)',
                        description: '',
                      });
                    }}
                    className="px-6 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-300 hover:text-white text-xs font-semibold cursor-pointer"
                  >
                    ثبت درخواست پروژه دیگر
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    فرم سفارش و دریافت مشاوره اختصاصی
                  </h3>
                  <p className="text-xs text-slate-400">
                    لطفاً اطلاعات مورد نیاز را به دقت پر فرمایید:
                  </p>
                </div>

                {errorMsg && (
                  <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-medium">
                    {errorMsg}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      نام و نام خانوادگی <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="مثال: دکتر علیرضا سلیمانی"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#090d16] border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 transition-colors"
                      required
                    />
                  </div>

                  {/* Phone field */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      شماره تماس همراه <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="مثال: ۰۹۱۲۱۲۳۴۵۶۷"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#090d16] border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 transition-colors text-right"
                      required
                    />
                  </div>
                </div>

                {/* Project Type selection */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">
                    نوع پروژه و حوزه فعالیت کسب‌وکار:
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {projectTypes.map((type) => (
                      <button
                        type="button"
                        key={type}
                        onClick={() => setFormData({ ...formData, projectType: type })}
                        className={`p-2.5 rounded-xl text-xs font-medium text-center border transition-all cursor-pointer ${
                          formData.projectType === type
                            ? 'bg-amber-500/20 border-amber-500/60 text-amber-300 font-bold shadow-md shadow-amber-500/10'
                            : 'bg-[#090d16] border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    توضیحات تکمیلی یا ویژگی‌های مدنظر شما:
                  </label>
                  <textarea
                    rows={4}
                    placeholder="در مورد اهداف تجاری، تعداد کاربران تقریبی، یا نیازمندی‌های خاص فنی خود بنویسید..."
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#090d16] border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 transition-colors resize-none"
                  ></textarea>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-bold text-base rounded-xl shadow-xl shadow-amber-500/20 hover:shadow-amber-500/30 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <Clock className="w-5 h-5 animate-spin" />
                      <span>در حال ارسال اطلاعات...</span>
                    </span>
                  ) : (
                    <>
                      <span>ارسال درخواست و دریافت برنامه زمان‌بندی VIP</span>
                      <Send className="w-4 h-4 -scale-x-100" />
                    </>
                  )}
                </button>

                <div className="text-center text-[11px] text-slate-500">
                  اطلاعات تماس شما به صورت ۱۰۰٪ محرمانه نزد آژانس ویسپار حفظ خواهد شد.
                </div>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
