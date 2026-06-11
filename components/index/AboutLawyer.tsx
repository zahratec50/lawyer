import {
  Scale,
  Shield,
  Award,
  Briefcase,
  ArrowLeft,
} from "lucide-react";

export default function AboutLawyer() {
  const features = [
    {
      icon: <Scale className="w-6 h-6" />,
      title: "مشاوره تخصصی",
      desc: "بررسی دقیق ابعاد حقوقی هر پرونده پیش از شروع فرآیند.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "حفظ محرمانگی",
      desc: "پایبندی کامل به اصول امانت‌داری و محرمانگی اطلاعات موکل.",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "رتبه برتر آزمون",
      desc: "پشتوانه علمی قوی و تسلط بر قوانین و رویه‌های قضایی.",
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "پیگیری مستمر",
      desc: "پیگیری پرونده‌ها با دقت و ارائه گزارش شفاف به موکل.",
    },
  ];

  return (
    <section
      dir="rtl"
      className="relative py-20 md:py-28 bg-white overflow-hidden"
    >
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(#d4af37 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-luxury-gold/20 bg-luxury-gold/5 text-luxury-gold text-sm font-semibold">
            <Scale className="w-4 h-4" />
            درباره وکیل
          </div>

          <h2 className="mt-6 text-3xl md:text-5xl font-black text-luxury-dark">
            مریم طاهری
          </h2>

          <p className="mt-4 text-luxury-gold font-bold text-lg">
            وکیل پایه یک دادگستری و مشاور حقوقی
          </p>

          <p className="mt-8 text-gray-600 leading-8 text-justify md:text-center">
            مریم طاهری، وکیل پایه یک دادگستری و مشاور حقوقی، با تمرکز بر
            ارائه خدمات حقوقی تخصصی در حوزه دعاوی ملکی، دعاوی کیفری،
            دعاوی خانواده، تنظیم قراردادها و مشاوره حقوقی فعالیت می‌کند.
            هدف اصلی از ارائه خدمات حقوقی، دفاع از حقوق موکلان، ارائه
            راهکارهای قانونی مؤثر و همراهی در تمامی مراحل پرونده است.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {features.map((item) => (
            <div
              key={item.title}
              className="group bg-luxury-goldLight/20 border border-luxury-gold/10 rounded-[20px] p-6 hover:border-luxury-gold/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-[14px] bg-luxury-navy text-luxury-gold flex items-center justify-center mb-4">
                {item.icon}
              </div>

              <h3 className="font-bold text-luxury-dark mb-2">
                {item.title}
              </h3>

              <p className="text-sm text-gray-600 leading-7">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="max-w-5xl mx-auto mt-16">
          <div className="bg-gradient-to-br from-luxury-dark to-luxury-navy rounded-[32px] p-8 md:p-12 border border-luxury-gold/10">
            <h3 className="text-white text-2xl font-bold mb-6">
              چرا موکلان ما را انتخاب می‌کنند؟
            </h3>

            <p className="text-gray-300 leading-8 text-justify">
              در پرونده‌های حقوقی، انتخاب وکیل مناسب می‌تواند نقش مهمی در
              مدیریت صحیح فرآیندهای قانونی داشته باشد. ارائه مشاوره دقیق،
              بررسی مستندات، تنظیم لوایح حقوقی و پیگیری مستمر پرونده از
              جمله خدماتی است که با رویکردی حرفه‌ای و مسئولانه ارائه
              می‌شود. هر پرونده دارای شرایط منحصر‌به‌فرد است و راهکار
              حقوقی متناسب با همان شرایط طراحی می‌شود.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 mt-4 bg-gradient-to-r from-luxury-gold to-luxury-goldLight text-luxury-dark font-extrabold rounded-[16px] shadow-[0_4px_20px_rgba(212,175,55,0.2)] hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <span>دریافت مشاوره فوری</span>
              <ArrowLeft className="w-4 h-4 transform rotate-180" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}