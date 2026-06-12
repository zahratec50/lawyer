import React from "react";
import { Briefcase, Scale, Users, Shield } from "lucide-react";

export default function Expertise() {
  const areas = [
    {
      icon: <Briefcase className="w-5 h-5 md:w-6 md:h-6" />,
      title: "دعاوی تجاری و شرکت‌ها",
      desc: "تنظیم قراردادهای بین‌المللی، داوری، دعاوی مالکیت فکری و ثبت شرکت‌های تجاری با رویکرد حفظ منافع مالی شما.",
    },
    {
      icon: <Scale className="w-5 h-5 md:w-6 md:h-6" />,
      title: "دعاوی کیفری",
      desc: "دفاع حرفه‌ای در پرونده‌های جرایم اقتصادی، کلاهبرداری، سرقت، جعل اسناد و جرایم سایبری با رعایت بالاترین استانداردهای قضایی.",
    },
    {
      icon: <Users className="w-5 h-5 md:w-6 md:h-6" />,
      title: "دعاوی ملکی و خانواده",
      desc: "حل اختلافات ثبتی، اراضی، سرقفلی، خرید و فروش املاک و ارائه مشاوره تخصصی در امور ارث و خانواده.",
    },
  ];

  return (
    <section
      dir="rtl"
      className="relative overflow-hidden py-14 md:py-24 bg-gradient-to-b from-white via-red-50 to-white border-y border-luxury-gold/10"
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#d4af37 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Decorative Blur */}
      <div className="absolute top-20 -right-24 w-72 h-72 rounded-full bg-luxury-gold/5 blur-3xl" />
      <div className="absolute bottom-20 -left-24 w-72 h-72 rounded-full bg-luxury-navy/5 blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-20 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-luxury-gold/20 bg-luxury-gold/5 text-luxury-gold text-xs md:text-sm font-semibold">
            <Shield className="w-4 h-4" />
            حوزه‌های تخصصی وکالت
          </div>

          <h2 className="mt-5 text-2xl sm:text-3xl md:text-5xl font-black text-luxury-dark leading-tight">
            خدمات تخصصی حقوقی
          </h2>

          <p className="mt-5 text-sm md:text-lg text-gray-600 leading-7 md:leading-8 max-w-2xl mx-auto">
            ارائه راهکارهای حقوقی مبتنی بر تجربه، دانش و استراتژی‌های حرفه‌ای
            برای دفاع مؤثر از حقوق و منافع موکلان.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
          {areas.map((item) => (
            <div
              key={item.title}
              className="
                group
                relative
                overflow-hidden
                rounded-[14px]
                md:rounded-[16px]
                bg-white/90
                backdrop-blur-sm
                border border-luxury-gold/10
                p-4
                md:p-7
                shadow-md
                hover:shadow-xl
                hover:border-luxury-gold/25
                transition-all
                duration-300
                hover:-translate-y-1
              "
            >
              {/* Gold Line */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-luxury-gold/70 to-transparent" />

              {/* Icon */}
              <div
                className="
                  w-11 h-11
                  md:w-14 md:h-14
                  rounded-[12px]
                  md:rounded-[14px]
                  bg-gradient-to-br
                  from-luxury-navy
                  to-[#0F2F63]
                  text-luxury-gold
                  flex
                  items-center
                  justify-center
                  shadow-md
                  mb-4
                  transition-transform
                  duration-300
                  group-hover:scale-105
                "
              >
                {item.icon}
              </div>

              {/* Content */}
              <h3 className="text-base md:text-xl font-extrabold text-luxury-dark mb-2 md:mb-3">
                {item.title}
              </h3>

              <p className="text-sm md:text-base text-gray-600 leading-7 md:leading-8">
                {item.desc}
              </p>

              {/* Accent */}
              <div className="mt-4 md:mt-6 flex justify-end">
                <div className="w-8 h-[3px] rounded-full bg-luxury-gold/25 transition-all duration-300 group-hover:w-14 group-hover:bg-luxury-gold" />
              </div>

              {/* Hover Glow */}
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-luxury-gold/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
