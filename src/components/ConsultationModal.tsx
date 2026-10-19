import React, { useState, useEffect } from 'react';
import { X, Sparkles, Send, CheckCircle2, Phone, Calendar, Clock, ShieldCheck, Heart } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
  initialDoctor?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  initialService,
  initialDoctor,
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(initialService || 'کانتورینگ و مادلینگ چهره (ژوودرم / آلیاکسین)');
  const [doctor, setDoctor] = useState(initialDoctor || 'اولین نوبت پزشک فوق‌تخصص (سریع‌ترین زمان)');
  const [preferredDate, setPreferredDate] = useState('هفته جاری (سریع‌ترین زمان)');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (initialService) setService(initialService);
  }, [initialService]);

  useEffect(() => {
    if (initialDoctor) setDoctor(initialDoctor);
  }, [initialDoctor]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim()) {
      setErrorMsg('لطفاً نام و شماره همراه خود را وارد کنید.');
      return;
    }

    if (phone.replace(/\s+/g, '').length < 10) {
      setErrorMsg('لطفاً شماره موبایل ۱۱ رقمی معتبر وارد فرمایید.');
      return;
    }

    setErrorMsg('');
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const servicesList = [
    'کانتورینگ و مادلینگ چهره (ژوودرم / آلیاکسین)',
    'درمان اسکار آکنه با لیزر فراکشنال CO2',
    'اندولیفت لیزری بدون جراحی غبغب و زاویه فک',
    'درماتولوژی بالینی و تزریق مزوژل پروفایلو و جالپرو',
    'فیشیال و کلاژن‌تراپی طلای ۲۴ عیار سوئیسی',
    'جوانسازی دور چشم و رفع خطوط پنجه‌کلاغی',
    'مشاوره جامع معاینه و آنالیز سه‌بعدی پوست'
  ];

  const doctorsList = [
    'اولین نوبت پزشک فوق‌تخصص (سریع‌ترین زمان)',
    'دکتر علیرضا منصوری (متخصص پوست و فلوشیپ لیزر)',
    'دکتر سارا صبوری (متخصص درماتولوژی و زیبایی)'
  ];

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      
      {/* Modal Dialog Container */}
      <div 
        className="w-full max-w-lg rounded-3xl bg-[#0d1527] border border-amber-500/40 p-6 sm:p-8 shadow-2xl relative glow-gold overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 left-5 p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 hover:border-slate-700 transition-colors cursor-pointer"
          aria-label="بستن پنجره"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-white">
              نوبت مشاوره VIP ثبت شد
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed max-w-sm mx-auto">
              مشاور امور مراجعین کلینیک لومیِر ظرف ۲ ساعت آینده با شماره <strong className="text-amber-400 font-mono">{phone}</strong> جهت نهایی‌سازی ساعت دقیق جلسه تماس خواهند گرفت.
            </p>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 text-right space-y-1">
              <div>خدمت: <strong className="text-white">{service}</strong></div>
              <div>پزشک: <strong className="text-amber-400">{doctor}</strong></div>
            </div>
            <div className="pt-2">
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-bold text-xs cursor-pointer shadow-lg shadow-amber-500/20 hover:shadow-amber-500/35 transition-all"
              >
                تأیید و بازگشت به سایت
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs text-amber-400 font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-4 h-4" />
                <span>کلینیک فوق‌تخصصی لومیِر</span>
              </div>
              <h3 className="text-2xl font-black text-white">
                رزرو نوبت مشاوره VIP
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                معاینه تخصصی در سوئیت اختصاصی بدون معطلی و در محیطی آرام.
              </p>
            </div>

            {errorMsg && (
              <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs">
                {errorMsg}
              </div>
            )}

            <div className="space-y-3.5">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  نام و نام خانوادگی مراجع <span className="text-amber-400">*</span>
                </label>
                <input
                  type="text"
                  placeholder="مثال: فرنوش سپهری"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#090d16] border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400/30 transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  شماره تماس همراه <span className="text-amber-400">*</span>
                </label>
                <input
                  type="tel"
                  placeholder="مثال: ۰۹۱۲۳۴۵۶۷۸۹"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#090d16] border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400/30 transition-all text-right"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  خدمت یا اقدام زیبایی مدنظر:
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#090d16] border border-slate-800 text-white text-xs sm:text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400/30 transition-all"
                >
                  {servicesList.map((s) => (
                    <option key={s} value={s} className="bg-[#090d16] text-white">
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  پزشک معالج:
                </label>
                <select
                  value={doctor}
                  onChange={(e) => setDoctor(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#090d16] border border-slate-800 text-white text-xs sm:text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400/30 transition-all"
                >
                  {doctorsList.map((d) => (
                    <option key={d} value={d} className="bg-[#090d16] text-white">
                      {d}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  بازه زمانی مطلوب برای حضور:
                </label>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {[
                    'هفته جاری (سریع‌ترین زمان)',
                    'هفته آینده',
                    'پنجشنبه‌ها و تعطیلات',
                    'هماهنگی تلفنی منعطف'
                  ].map((t) => (
                    <button
                      type="button"
                      key={t}
                      onClick={() => setPreferredDate(t)}
                      className={`p-2 rounded-xl border text-center transition-all cursor-pointer ${
                        preferredDate === t
                          ? 'bg-amber-500/20 border-amber-500/60 text-amber-300 font-bold shadow-md shadow-amber-500/10'
                          : 'bg-[#090d16] border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-bold text-sm rounded-xl shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4 animate-spin" />
                  <span>در حال ثبت اطلاعات...</span>
                </span>
              ) : (
                <>
                  <span>تأیید و دریافت نوبت VIP</span>
                  <Send className="w-4 h-4 -scale-x-100" />
                </>
              )}
            </button>

            <div className="text-center text-[10px] text-slate-500">
              حریم خصوصی شما کاملاً محفوظ است · بدون ارسال پیامک تبلیغاتی
            </div>
          </form>
        )}
      </div>

    </div>
  );
};
