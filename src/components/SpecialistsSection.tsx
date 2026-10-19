import React from 'react';
import { Sparkles, Award, ShieldCheck, GraduationCap, Calendar, ArrowLeft, Heart } from 'lucide-react';

interface SpecialistsSectionProps {
  onSelectDoctor: (doctorName: string) => void;
}

export const SpecialistsSection: React.FC<SpecialistsSectionProps> = ({ onSelectDoctor }) => {
  const doctors = [
    {
      id: 'dr-mansouri',
      name: 'دکتر علیرضا منصوری',
      title: 'متخصص پوست، مو، زیبایی و لیزر',
      role: 'مؤسس و مدیر پزشکی کلینیک لومیِر',
      board: 'دارای بورد تخصصی و فلوشیپ بین‌المللی لیزر',
      degrees: [
        'فلوشیپ پیشرفته لیزر و اندولیفت از دانشگاه میلان ایتالیا',
        'عضو آکادمی درماتولوژی و ونرولوژی اروپا (EADV)',
        'بیش از ۱۲ سال سابقه جراحی‌های زیبایی سرپایی و کانتورینگ',
        'مدرس دوره‌های تزریق پیشرفته فیلر و نخ‌های جوانساز'
      ],
      image: '/src/assets/images/doctor_alavi_portrait_1792409014244.jpg',
      procedures: '+۷,۰۰۰ ویزیت و درمان موفق',
      experience: '۱۴ سال سابقه طبابت'
    },
    {
      id: 'dr-sabouri',
      name: 'دکتر سارا صبوری',
      title: 'متخصص درماتولوژی و زیبایی',
      role: 'سرپرست بخش درمان‌های ترکیبی جوانسازی',
      board: 'بورد تخصصی ناسیونال با رتبه ممتاز',
      degrees: [
        'دوره تکمیلی تکنیک‌های تزریق مادلینگ چهره از زوریخ سوئیس',
        'پژوهشگر ارشد درمان اسکار و ملاسما با متدهای نوین کلاژن‌سازی',
        'عضو انجمن متخصصین پوست ایران (IRSOD)',
        'تمرکز بر نتایج کاملاً طبیعی و غیرقابل تشخیص جراحی'
      ],
      image: '/src/assets/images/clinic_hero_portrait_1792409012705.jpg',
      procedures: '+۵,۲۰۰ کانتورینگ طبیعی',
      experience: '۱۱ سال سابقه طبابت'
    }
  ];

  return (
    <section id="specialists" className="py-24 bg-[#0d1527] relative border-t border-slate-900 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 right-5 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-400 mb-3">
            <GraduationCap className="w-4 h-4" />
            <span>BOARD-CERTIFIED SPECIALISTS · کادر درمانی برگزیده</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            پزشکان دارای <span className="text-amber-400 font-serif">بورد تخصصی و فلوشیپ</span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            در کلینیک لومیِر هیچ روندی توسط تکنسین‌های تجربی انجام نمی‌شود؛ کلیه مشاوره‌ها، طراحی زاویه چهره و اقدامات تزریقی مستقیماً توسط پزشکان متخصص اجرا می‌گردد.
          </p>
        </div>

        {/* Doctor Profiles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {doctors.map((doc) => (
            <div
              key={doc.id}
              className="rounded-3xl bg-[#090d16] border border-slate-800/90 hover:border-amber-500/50 p-6 sm:p-8 transition-all duration-300 shadow-2xl hover:shadow-amber-500/10 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                  {/* Doctor Image */}
                  <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-2xl overflow-hidden border-2 border-amber-500/30 shrink-0 shadow-lg shadow-black/60 group-hover:border-amber-500/70 transition-colors">
                    <img
                      src={doc.image}
                      alt={doc.name}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Doctor Headline */}
                  <div className="text-center sm:text-right flex-1">
                    <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[11px] font-semibold mb-2">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>{doc.board}</span>
                    </div>

                    <h3 className="text-2xl font-black text-white group-hover:text-amber-300 transition-colors">
                      {doc.name}
                    </h3>
                    <div className="text-xs text-amber-400/90 font-medium mt-0.5">
                      {doc.title}
                    </div>
                    <div className="text-xs text-slate-400 mt-1">
                      {doc.role}
                    </div>

                    {/* Stats pills */}
                    <div className="mt-4 flex flex-wrap gap-2 justify-center sm:justify-start text-[11px] text-slate-300 font-mono">
                      <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800">
                        {doc.experience}
                      </span>
                      <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-amber-300 font-bold">
                        {doc.procedures}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Credentials & Memberships */}
                <div className="mt-6 pt-5 border-t border-slate-800/80 space-y-2.5">
                  <div className="text-xs font-bold text-slate-400 mb-2">مدارک علمی و سوابق تخصصی:</div>
                  {doc.degrees.map((deg, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <Award className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{deg}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-5 border-t border-slate-800/80">
                <button
                  onClick={() => onSelectDoctor(doc.name)}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-amber-500/20 hover:shadow-amber-500/35 hover:-translate-y-0.5 active:translate-y-0 transition-all"
                >
                  <Calendar className="w-4 h-4 text-slate-950" />
                  <span>رزرو نوبت مشاوره با {doc.name}</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
