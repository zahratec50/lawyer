import React from "react";
import { CheckCircle2 } from "lucide-react";

export default function MyJob() {
  const areas = [
    {
      title: "ارائه مشاوره حقوقی تخصصی",
      desc: "بررسی همه‌جانبه شرایط شما توسط وکلای مجرب و پایه یک",
    },
    {
      title: "پیگیری دقیق و مستمر پرونده‌ها",
      desc: "اطلاع‌رسانی لحظه‌ای و شفاف از روند پیشرفت قانونی کار",
    },
    {
      title: "پاسخگویی و ارتباط مستقیم با موکل",
      desc: "پشتیبانی دائمی و حفظ اصل امانت‌داری در تمامی مراحل",
    },
    {
      title: "ارائه راهکارهای حقوقی متناسب",
      desc: "یافتن بهترین، کم‌هزینه‌ترین و سریع‌ترین مسیر قانونی",
    },
    {
      title: "پذیرش پرونده در سراسر کشور",
      desc: "بدون محدودیت جغرافیایی برای احقاق حق و حقوق شما",
    },
    {
      title: "امکان مشاوره حضوری و غیرحضوری",
      desc: "انعطاف‌پذیری در زمان و نحوه برگزاری جلسات با موکلین",
    },
  ];

  return (
    <section
      dir="rtl"
      className="py-16 md:py-24 bg-gradient-to-b from-white to-amber-50/40 relative overflow-hidden border-b border-luxury-gold/10"
    >
      {/* المان‌های تزئینی پس‌زمینه */}
      <div className="absolute top-0 right-0 w-48 h-48 md:w-72 md:h-72 bg-luxury-gold/5 rounded-full blur-2xl md:blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-luxury-navy/5 rounded-full blur-2xl md:blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-5 md:px-12 lg:px-32 relative z-10">
        {/* هدر بخش - اصلاح فاصله بالا به خاطر حذف دکمه بازگشت */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-luxury-dark mb-4 md:mb-6 leading-tight">
            کاری که ما برای <span className="text-luxury-gold">شما</span> انجام
            میدهیم
          </h2>
          <p className="text-sm md:text-base text-gray-500 px-2 md:px-0">
            تعهد ما، ارائه خدمات حقوقی در بالاترین سطح استاندارد با حفظ اصل
            شفافیت و تسریع در روند پیگیری پرونده‌های شماست.
          </p>
          <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-transparent via-luxury-gold to-transparent mx-auto mt-6 rounded-full opacity-80"></div>
        </div>

        {/* گرید کارت‌ها - اصلاح بوردرها متناسب با تم تیره کارت */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
          {areas.map((item, index) => (
            <div
              key={index}
              className="group relative flex items-start p-5 md:p-6 bg-luxury-goldLight/25 rounded-[16px] border border-luxury-gold/10 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(212,175,55,0.1)] hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-default"
            >
              {/* خط طلایی کناری */}
              <div className="absolute inset-y-0 right-0 w-1 bg-luxury-gold scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom"></div>

              {/* بخش آیکون */}
              <div className="flex-shrink-0 ml-4 md:ml-5">
                <div className="w-10 h-10 md:w-11 md:h-11 flex items-center justify-center rounded-[12px] bg-luxury-navy border border-white/10 text-luxury-gold group-hover:bg-luxury-gold group-hover:text-luxury-dark transition-colors duration-300 shadow-sm">
                  <CheckCircle2 className="w-5 h-5 md:w-5.5 md:h-5.5" />
                </div>
              </div>

              {/* بخش متن */}
              <div className="flex flex-col text-right pt-0.5 md:pt-1">
                <h3 className="text-base md:text-lg font-bold text-luxury-navy mb-1.5 group-hover:text-luxury-gold transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-500 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
