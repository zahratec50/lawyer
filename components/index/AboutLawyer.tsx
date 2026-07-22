import { Scale, ShieldCheck, FileSearch, Users, Quote } from "lucide-react";

export default function AboutLawyer() {
  const values = [
    {
      icon: <Scale className="w-5 h-5" />,
      title: "تخصص حقوقی",
      desc: "تحلیل دقیق پرونده‌ها و انتخاب بهترین مسیر قانونی متناسب با شرایط هر موکل.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      title: "محرمانگی کامل",
      desc: "حفظ اطلاعات و اسناد موکلان با بالاترین سطح تعهد حرفه‌ای و اخلاقی.",
    },
    {
      icon: <FileSearch className="w-5 h-5" />,
      title: "بررسی دقیق پرونده",
      desc: "مطالعه کامل مدارک و مستندات پیش از هر اقدام حقوقی.",
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "اعتماد و همراهی",
      desc: "ارتباطی شفاف و مستمر با موکل در تمام مراحل رسیدگی.",
    },
  ];

  return (
    <section id="about" dir="rtl" className="relative py-16 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-burgundy-red/20 bg-burgundy-deep/10 text-burgundy-red text-sm font-medium">
            <Scale className="w-4 h-4" />
            رویکرد حرفه‌ای
          </div>

          <h2 className="mt-5 font-display text-2xl sm:text-3xl md:text-5xl font-semibold text-ink leading-tight">
            تجربه، دانش و تعهد در کنار شما
          </h2>

          <p className="mt-6 md:mt-8 text-ink-soft leading-8 text-sm md:text-lg max-w-3xl mx-auto">
            هر پرونده حقوقی شرایط و پیچیدگی‌های منحصربه‌فرد خود را دارد و
            دستیابی به بهترین نتیجه نیازمند تحلیل تخصصی، تجربه عملی و انتخاب
            راهکار قانونی مناسب است. هدف من ارائه خدمات حقوقی حرفه‌ای با تمرکز
            بر شفافیت، مسئولیت‌پذیری و دفاع مؤثر از حقوق موکلان است.
          </p>
        </div>

        <div className="mt-12 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {values.map((item) => (
            <div
              key={item.title}
              className="group flex items-start gap-4 rounded-[10px] bg-white border border-line p-5 md:p-6 transition-all duration-300 hover:border-burgundy/30 hover:shadow-lg"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-[10px] bg-ink text-[var(--brass-light)] flex items-center justify-center flex-shrink-0">
                {item.icon}
              </div>
              <div>
                <h3 className="font-semibold text-lg md:text-xl text-ink mb-2">
                  {item.title}
                </h3>
                <p className="text-ink-soft leading-7 text-sm md:text-base">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-5xl mx-auto mt-14 md:mt-24">
          <div className="relative overflow-hidden rounded-[12px] bg-ink p-6 md:p-12">
            <div className="absolute top-0 right-0 w-full h-[3px] bg-brass" />
            <Quote className="absolute top-5 left-5 md:top-8 md:left-8 w-8 h-8 md:w-10 md:h-10 text-[var(--brass-light)]/20" />

            <p className="relative z-10 font-display text-lg md:text-2xl text-paper leading-9 md:leading-relaxed text-center">
              دفاع از حقوق موکل تنها یک وظیفه حرفه‌ای نیست؛
              <br className="hidden md:block" />
              مسئولیتی است که بر پایه دانش، تعهد و اعتماد شکل می‌گیرد.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
