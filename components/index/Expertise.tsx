import React from "react";
import { Briefcase, Scale, Users, FileSignature, Shield } from "lucide-react";

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
    {
      icon: <FileSignature className="w-5 h-5 md:w-6 md:h-6" />,
      title: "قراردادها و اسناد حقوقی",
      desc: "تنظیم، بازبینی و اصلاح قراردادها و اسناد رسمی برای پیشگیری از اختلافات آتی و حفظ حقوق طرفین.",
    },
  ];

  return (
    <section
      id="expertise"
      dir="rtl"
      className="relative py-14 md:py-24 bg-paper-warm/50 border-y border-line"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-20 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-burgundy-red/20 bg-burgundy-deep/10 text-burgundy-red text-xs md:text-sm font-medium">
            <Shield className="w-4 h-4" />
            حوزه‌های تخصصی وکالت
          </div>

          <h2 className="mt-5 font-display text-2xl sm:text-3xl md:text-5xl font-semibold text-ink leading-tight">
            خدمات تخصصی حقوقی
          </h2>

          <p className="mt-5 text-sm md:text-lg text-ink-soft leading-7 md:leading-8 max-w-2xl mx-auto">
            ارائه راهکارهای حقوقی مبتنی بر تجربه، دانش و استراتژی‌های حرفه‌ای
            برای دفاع مؤثر از حقوق و منافع موکلان.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {areas.map((item) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-[12px] bg-white border border-line p-5 md:p-7 hover:border-burgundy/25 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-11 h-11 md:w-14 md:h-14 rounded-[10px] bg-ink text-[var(--brass-light)] flex items-center justify-center mb-4">
                {item.icon}
              </div>

              <h3 className="text-base md:text-xl font-semibold text-ink mb-2 md:mb-3">
                {item.title}
              </h3>

              <p className="text-sm md:text-base text-ink-soft leading-7 md:leading-8">
                {item.desc}
              </p>

              <div className="mt-4 md:mt-6 w-8 h-[2px] rounded-full bg-brass/40 transition-all duration-300 group-hover:w-14 group-hover:bg-brass" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
