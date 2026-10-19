import React, { useState, useEffect } from 'react';
import { Sparkles, Calendar, Clock, Send, CheckCircle2, Phone, ShieldCheck, MapPin, AlertCircle, Heart } from 'lucide-react';

interface BookingSectionProps {
  prefilledService?: string;
  prefilledDoctor?: string;
}

export const BookingSection: React.FC<BookingSectionProps> = ({
  prefilledService,
  prefilledDoctor,
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(prefilledService || 'کانتورینگ و مادلینگ چهره (ژوودرم / آلیاکسین)');
  const [doctor, setDoctor] = useState(prefilledDoctor || 'اولین نوبت پزشک فوق‌تخصص (سریع‌ترین زمان)');
  const [preferredTime, setPreferredTime] = useState('عصر (۱۳:۰۰ الی ۱۷:۰۰)');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (prefilledService) {
      setService(prefilledService);
    }
  }, [prefilledService]);

  useEffect(() => {
    if (prefilledDoctor) {
      setDoctor(prefilledDoctor);
    }
  }, [prefilledDoctor]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim()) {
      setErrorMsg('لطفاً نام و نام خانوادگی و شماره تماس معتبر خود را وارد فرمایید.');
      return;
    }

    // Phone format check for Iran
    const phoneClean = phone.replace(/\s+/g, '');
    if (phoneClean.length < 10) {
      setErrorMsg('شماره تماس وارد شده ناقص است. لطفاً شماره موبایل ۱۱ رقمی معتبر وارد کنید.');
      return;
    }

    setErrorMsg('');
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  const serviceOptions = [
    'کانتورینگ و مادلینگ چهره (ژوودرم / آلیاکسین)',
    'درماتولوژی بالینی، مزوتراپی و پروفایلو',
    'لیزردرمانی پیشرفته و اندولیفت بدون جراحی',
    'درمان اسکار آکنه با لیزر فراکشنال CO2',
    'فیشیال و کلاژن‌تراپی طلای ۲۴ عیار سوئیسی',
    'جوانسازی اختصاصی دور چشم و بلفاروپلاستی',
    'فرم‌دهی و بادی کانتورینگ غیرتهاجمی',
    'مشاوره جامع معاینه و آنالیز سه‌بعدی پوست'
  ];

  const doctorOptions = [
    'اولین نوبت پزشک فوق‌تخصص (سریع‌ترین زمان)',
    'دکتر علیرضا منصوری (متخصص پوست و فلوشیپ لیزر)',
    'دکتر سارا صبوری (متخصص درماتولوژی و زیبایی)'
  ];

  return (
    <section id="booking" className="py-24 bg-[#090d16] relative border-t border-slate-900 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-400 mb-3">
            <Sparkles className="w-4 h-4" />
            <span>VIP RESERVATION · رزرو اختصاصی نوبت</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            آغاز مسیر <span className="text-amber-400 font-serif">اختصاصی زیبایی شما</span>
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            جلسه مشاوره، آنالیز ساختار چهره و معاینه بالینی با پزشک متخصص؛ کاملاً خصوصی و محرمانه در سوئیت VIP کلینیک لومیِر.
          </p>
        </div>

        {/* Booking Container */}
        <div className="rounded-3xl bg-[#0d1527] border border-amber-500/30 p-6 sm:p-10 shadow-2xl glow-gold">
          
          {submitted ? (
            <div className="text-center py-12 px-4 space-y-6 animate-in fade-in duration-300">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                درخواست نوبت VIP شما با موفقیت ثبت شد
              </h3>
              <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                اطلاعات پرونده شما تحویل دفتر هماهنگی پزشکان کلینیک لومیِر شد. مشاور بالینی کلینیک ظرف کمتر از ۲ ساعت آینده جهت هماهنگی ساعت دقیق حضور با شما تماس خواهند گرفت.
              </p>

              {/* Digital Reservation Voucher Preview */}
              <div className="max-w-md mx-auto p-5 rounded-2xl bg-[#090d16] border border-slate-800 text-right space-y-2.5 text-xs shadow-inner">
                <div className="flex justify-between border-b border-slate-800/80 pb-2">
                  <span className="text-slate-400">نام مراجع:</span>
                  <span className="text-white font-bold">{fullName}</span>
                </div>
                <div className="flex justify-between border-b border-slate-800/80 pb-2">
                  <span className="text-slate-400">خدمت درخواستی:</span>
                  <span className="text-amber-400 font-bold">{service}</span>
                </div>
                <div className="flex justify-between border-b border-slate-800/80 pb-2">
                  <span className="text-slate-400">پزشک معالج:</span>
                  <span className="text-white">{doctor}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">بازه زمانی منتخب:</span>
                  <span className="text-slate-200">{preferredTime}</span>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFullName('');
                    setPhone('');
                    setNotes('');
                  }}
                  className="px-6 py-3 rounded-xl bg-slate-900 border border-slate-700 hover:border-slate-600 text-slate-300 hover:text-white text-xs font-semibold cursor-pointer transition-colors"
                >
                  ثبت نوبت جدید برای همراه
                </button>
                <a
                  href="tel:02122002200"
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 text-xs font-bold flex items-center gap-2 shadow-lg shadow-amber-500/20 transition-all cursor-pointer"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>تماس مستقیم با پذیرش کلینیک</span>
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {errorMsg && (
                <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-medium flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    نام و نام خانوادگی <span className="text-amber-400">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="مثال: فرنوش سپهری"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#090d16] border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400/30 transition-all"
                    required
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    شماره تماس همراه <span className="text-amber-400">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="مثال: ۰۹۱۲۳۴۵۶۷۸۹"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#090d16] border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400/30 transition-all text-right"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Service Selection */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    خدمت یا مشاوره درخواستی:
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#090d16] border border-slate-800 text-white text-xs sm:text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400/30 transition-all"
                  >
                    {serviceOptions.map((s) => (
                      <option key={s} value={s} className="bg-[#090d16] text-white">
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Doctor Selection */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    پزشک معالج:
                  </label>
                  <select
                    value={doctor}
                    onChange={(e) => setDoctor(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#090d16] border border-slate-800 text-white text-xs sm:text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400/30 transition-all"
                  >
                    {doctorOptions.map((d) => (
                      <option key={d} value={d} className="bg-[#090d16] text-white">
                        {d}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Preferred Time Slots */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-2">
                  بازه زمانی مطلوب برای حضور در کلینیک:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {[
                    'صبح و ظهر (۱۰:۰۰ الی ۱۳:۰۰)',
                    'عصر (۱۳:۰۰ الی ۱۷:۰۰)',
                    'غروب (۱۷:۰۰ الی ۲۰:۰۰)'
                  ].map((timeSlot) => (
                    <button
                      type="button"
                      key={timeSlot}
                      onClick={() => setPreferredTime(timeSlot)}
                      className={`p-3 rounded-xl text-xs font-medium text-center border transition-all cursor-pointer ${
                        preferredTime === timeSlot
                          ? 'bg-amber-500/20 border-amber-500/60 text-amber-300 font-bold shadow-md shadow-amber-500/10'
                          : 'bg-[#090d16] border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                      }`}
                    >
                      {timeSlot}
                    </button>
                  ))}
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  یادداشت‌ها، انتظارات زیبایی یا سابقه حساسیت دارویی (اختیاری):
                </label>
                <textarea
                  rows={3}
                  placeholder="اگر قبلاً تزریق انجام داده‌اید یا اولویت خاصی مدنظر دارید بنویسید..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#090d16] border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400/30 transition-all resize-none"
                ></textarea>
              </div>

              {/* Submit CTA with polished hover */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-bold text-base rounded-xl shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <Clock className="w-5 h-5 animate-spin" />
                    <span>در حال ثبت اطلاعات...</span>
                  </span>
                ) : (
                  <>
                    <span>ثبت نهایی و رزرو مشاوره VIP</span>
                    <Send className="w-4 h-4 -scale-x-100" />
                  </>
                )}
              </button>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 text-[11px] text-slate-400">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>کلیه اطلاعات پرونده و نوبت شما نزد کلینیک لومیِر ۱۰۰٪ محرمانه است.</span>
                </div>
                <div className="flex items-center gap-1 text-amber-400 font-mono">
                  <span>VIP SANCTUARY GUARANTEE</span>
                </div>
              </div>

            </form>
          )}

        </div>

        {/* Location & Contact Bar Underneath */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-center gap-3 hover:border-amber-500/40 transition-colors">
            <MapPin className="w-5 h-5 text-amber-400 shrink-0" />
            <div>
              <div className="font-bold text-white">نشانی کلینیک:</div>
              <div className="text-slate-400 mt-0.5">تهران، زعفرانیه، خیابان آصف، برج الماس</div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-center gap-3 hover:border-amber-500/40 transition-colors">
            <Phone className="w-5 h-5 text-amber-400 shrink-0" />
            <div>
              <div className="font-bold text-white">تلفن خط ویژه VIP:</div>
              <a href="tel:02122002200" className="text-amber-400 font-mono ltr block mt-0.5 hover:underline">
                ۰۲۱-۲۲۰۰۲۲۰۰
              </a>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-center gap-3 hover:border-amber-500/40 transition-colors">
            <Clock className="w-5 h-5 text-amber-400 shrink-0" />
            <div>
              <div className="font-bold text-white">ساعات فعالیت:</div>
              <div className="text-slate-400 mt-0.5">شنبه تا پنجشنبه ۹:۰۰ الی ۲۱:۰۰ (با تعیین وقت)</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
