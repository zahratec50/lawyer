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
      desc: "مطالعه کامل مدارک و مستندات پیش از هر اقدام حقوقی.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "اعتماد و همراهی",
      desc: "ارتباطی شفاف و مستمر با موکل در تمام مراحل رسیدگی.",
    },
  ];

  return (
    <section
      id="about"
      dir="rtl"
      className="relative overflow-hidden py-16 md:py-28 bg-gradient-to-b from-white via-red-50 to-white"
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

      {/* Decorative Blur */}
      <div className="absolute top-20 -right-20 w-72 h-72 bg-luxury-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 -left-20 w-72 h-72 bg-luxury-navy/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-20 relative z-10">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-luxury-gold/20 bg-luxury-gold/5 text-luxury-gold text-sm font-semibold">
            <Scale className="w-4 h-4" />
            رویکرد حرفه‌ای
          </div>

          <h2 className="mt-5 text-2xl sm:text-3xl md:text-5xl font-black text-luxury-dark leading-tight">
            تجربه، دانش و تعهد در کنار شما
          </h2>

          <p className="mt-6 md:mt-8 text-gray-600 leading-8 text-sm md:text-lg max-w-3xl mx-auto text-justify md:text-center">
            هر پرونده حقوقی دارای شرایط و پیچیدگی‌های منحصربه‌فردی است و دستیابی
            به بهترین نتیجه نیازمند تحلیل تخصصی، تجربه عملی و انتخاب راهکار
            قانونی مناسب است. هدف ما ارائه خدمات حقوقی حرفه‌ای با تمرکز بر
            شفافیت، مسئولیت‌پذیری و دفاع مؤثر از حقوق موکلان است.
          </p>
        </div>

        {/* Values */}
        <div className="mt-12 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-7">
          {values.map((item) => (
            <div
              key={item.title}
              className="
                group
                flex items-start gap-4
                rounded-[14px]
                bg-white/80
                backdrop-blur-sm
                border border-luxury-gold/10
                p-5 md:p-6
                transition-all duration-300
                hover:-translate-y-1
                hover:border-luxury-gold/30
                hover:shadow-xl
              "
            >
              <div
                className="
                  w-12 h-12
                  md:w-14 md:h-14
                  rounded-[14px]
                  bg-gradient-to-br
                  from-luxury-navy
                  to-[#102a56]
                  text-luxury-gold
                  flex items-center justify-center
                  flex-shrink-0
                  shadow-md
                "
              >
                {item.icon}
              </div>

              <div>
                <h3 className="font-extrabold text-lg md:text-xl text-luxury-dark mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-7 text-sm md:text-base">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Quote Section */}
        <div className="max-w-5xl mx-auto mt-14 md:mt-24">
          <div
            className="
              relative
              overflow-hidden
              rounded-[16px]
              border border-luxury-gold/20
              bg-gradient-to-br
              from-luxury-dark
              to-luxury-navy
              p-6 md:p-12
              shadow-2xl
            "
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-luxury-gold" />

            <Quote className="absolute top-5 right-5 md:top-8 md:right-8 w-8 h-8 md:w-12 md:h-12 text-luxury-gold/15" />

            <div className="absolute -bottom-20 -left-20 w-52 h-52 rounded-full bg-luxury-gold/10 blur-3xl" />

            <p
              className="
                relative z-10
                text-lg md:text-2xl
                text-white
                leading-9 md:leading-relaxed
                font-medium
                text-center
              "
            >
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
