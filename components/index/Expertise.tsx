import React from "react";
import { Briefcase, Scale, Users, Shield } from "lucide-react";

export default function Expertise() {
  const areas = [
    {
      icon: <Briefcase className="w-6 h-6 md:w-7 md:h-7" />,
      title: "دعاوی تجاری و شرکت‌ها",
      desc: "تنظیم قراردادهای بین‌المللی، داوری، دعاوی مالکیت فکری و ثبت شرکت‌های تجاری با رویکرد حفظ منافع مالی شما.",
    },
    {
      icon: <Scale className="w-6 h-6 md:w-7 md:h-7" />,
      title: "دعاوی کیفری",
      desc: "دفاع حرفه‌ای در پرونده‌های جرایم اقتصادی، کلاهبرداری، سرقت، جعل اسناد و سایبر با رعایت بالاترین استانداردهای قضایی.",
    },
    {
      icon: <Users className="w-6 h-6 md:w-7 md:h-7" />,
      title: "دعاوی ملکی و خانواده",
      desc: "حل و فصل تخصصی اختلافات ثبتی، اراضی، سرقفلی، خرید و فروش ملکی و همچنین مشاوره‌های تخصصی ارث و خانواده.",
    },
  ];

  return (
    <section
      dir="rtl"
      className="py-5 md:py-10 bg-gradient-to-t from-white via-red-50 to-white relative border-t-[1px] border-b-[1px] border-luxury-gold/10"
    >
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#d4af37 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      ></div>

      <div className="container mx-auto px-5 lg:px-20 xl:px-32 relative z-10">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-[1px] bg-luxury-gold"></div>
            <Shield className="w-5 h-5 text-luxury-gold" />
            <div className="w-12 h-[1px] bg-luxury-gold"></div>
          </div>

          <h2 className="text-2xl md:text-4xl font-extrabold text-luxury-dark tracking-tight mb-4">
            حوزه‌های تخصصی وکالت
          </h2>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed px-4">
            ارائه خدمات حقوقی تخصصی با استراتژی‌های هوشمندانه برای تضمین موفقیت
            پرونده شما در محاکم قضایی
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 lg:gap-8">
          {areas.map((item, index) => (
            <div
              key={index}
              className={`group relative bg-luxury-goldLight/25 rounded-[20px] p-6 md:p-8 shadow-[0_4px_20px_rgb(0,0,0,0.04)] hover:shadow-[0_10px_40px_rgba(212,175,55,0.12)] transition-all duration-500 hover:-translate-y-2 border border-transparent hover:border-luxury-gold/20 flex flex-col h-full mt-6 md:mt-0`}
            >
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-luxury-gold/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 rounded-t-2xl"></div>

              <div className="absolute -top-3.5 md:-top-7 right-6 md:right-8 w-10 h-10 md:w-16 md:h-16 bg-luxury-navy rounded-[12px] shadow-lg flex items-center justify-center text-luxury-gold group-hover:bg-luxury-gold group-hover:text-white transition-colors duration-500 rotate-3 group-hover:-rotate-3">
                {item.icon}
              </div>

              <div className="pt-4 md:pt-10 md:flex-grow">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-luxury-navy mb-3 md:mb-4 group-hover:text-luxury-gold transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-500 leading-loose text-right group-hover:text-gray-700 transition-colors duration-300">
                  {item.desc}
                </p>
              </div>

              <div className="mt-0 pt-0 md:mt-8 md:pt-6 border-t border-gray-100 flex justify-end">
                <div className="w-8 h-1 bg-luxury-gold/20 rounded-full group-hover:w-16 group-hover:bg-luxury-gold transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
