import { Scale, ShieldCheck, FileSearch, Users, Quote } from "lucide-react";

export default function AboutLawyer() {
  const values = [
    {
      icon: <Scale className="w-6 h-6" />,
      title: "تخصص حقوقی",
      desc: "تحلیل دقیق پرونده‌ها و انتخاب بهترین مسیر قانونی متناسب با شرایط هر موکل.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "محرمانگی کامل",
      desc: "حفظ اطلاعات و اسناد موکلان با بالاترین سطح تعهد حرفه‌ای و اخلاقی.",
    },
    {
      icon: <FileSearch className="w-6 h-6" />,
      title: "بررسی دقیق پرونده",
      desc: "مطالعه و ارزیابی کامل مدارک، مستندات و جزئیات پرونده پیش از هر اقدام حقوقی.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "اعتماد و همراهی",
      desc: "ایجاد ارتباطی شفاف و مستمر با موکل در تمامی مراحل رسیدگی حقوقی.",
    },
  ];

  return (
    <section
      id="about"
      dir="rtl"
      className="relative py-20 md:py-28 bg-white overflow-hidden"
    >
      {/* Background Pattern */}
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
        {/* Header */}
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
            به بهترین نتیجه، نیازمند بررسی دقیق، تحلیل تخصصی و انتخاب راهکار
            قانونی مناسب است. هدف ما ارائه خدمات حقوقی حرفه‌ای با تمرکز بر
            شفافیت، مسئولیت‌پذیری و دفاع مؤثر از حقوق موکلان است تا افراد و
            کسب‌وکارها بتوانند با اطمینان بیشتری مسیر قانونی خود را طی کنند.
          </p>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-2 lg:gap-4 overflow-x-auto pb-2 mt-16">
          {values.map((item) => (
            <div
              key={item.title}
              className="group bg-luxury-goldLight/20 border border-luxury-gold/10 rounded-[14px] lg:rounded-[22px] p-3 lg:p-6 hover:border-luxury-gold/30 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-4 lg:block">
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-[14px] bg-luxury-navy text-luxury-gold flex items-center justify-center mb-1 lg:mb-5">
                  {item.icon}
                </div>

                <h3 className="font-bold text-luxury-dark lg:mb-3">
                  {item.title}
                </h3>
              </div>

              <p className="text-sm text-gray-600 leading-7">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="max-w-5xl mx-auto mt-16">
          <div className="relative bg-gradient-to-br from-luxury-dark to-luxury-navy rounded-[32px] p-8 md:p-12 border border-luxury-gold/10 overflow-hidden">
            <Quote className="absolute top-6 right-6 lg:w-10 lg:h-10 text-luxury-gold/20" />

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
