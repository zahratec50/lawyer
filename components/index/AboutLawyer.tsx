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
    <section
      id="about"
      dir="rtl"
      className="relative py-10 md:py-28 bg-gradient-to-t from-white via-red-50 to-white overflow-hidden"
    >
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: "radial-gradient(#d4af37 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-luxury-gold/20 bg-luxury-gold/5 text-luxury-gold text-sm font-semibold">
            <Scale className="w-4 h-4" />
            رویکرد حرفه‌ای
          </div>

          <h2 className="mt-6 text-3xl md:text-5xl font-black text-luxury-dark">
            تجربه، دانش و تعهد در کنار شما
          </h2>

          <p className="mt-8 text-gray-600 leading-8 text-justify md:text-center">
            هر پرونده حقوقی دارای شرایط و پیچیدگی‌های منحصربه‌فردی است و دستیابی
            به بهترین نتیجه نیازمند تحلیل تخصصی، تجربه عملی و انتخاب راهکار
            قانونی مناسب است. هدف ما ارائه خدمات حقوقی حرفه‌ای با تمرکز بر
            شفافیت، مسئولیت‌پذیری و دفاع مؤثر از حقوق موکلان است.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-x-14 md:gap-y-10">
          {values.map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-4 border-b border-luxury-gold/10 pb-6 md:pb-8"
            >
              <div className="w-9 h-9 md:w-12 md:h-12 rounded-[12px] bg-luxury-navy text-luxury-gold flex items-center justify-center flex-shrink-0">
                {item.icon}
              </div>

              <div>
                <h3 className="font-bold text-base sm:text-lg md:text-xl text-luxury-dark mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 md:leading-7 leading-6 text-xs md:text-sm">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-5xl mx-auto mt-20">
          <div className="relative bg-gradient-to-br from-luxury-dark to-luxury-navy rounded-[32px] p-8 md:p-12 border border-luxury-gold/10 overflow-hidden">
            <Quote className="absolute top-6 right-6 w-6 h-6 md:w-10 md:h-10 text-luxury-gold/20" />

            <p className="text-xl md:text-2xl text-white leading-relaxed font-medium text-center">
              دفاع از حقوق موکل تنها یک وظیفه حرفه‌ای نیست؛
              <br />
              مسئولیتی است که بر پایه دانش، تعهد و اعتماد شکل می‌گیرد.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
