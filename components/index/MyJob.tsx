import React from "react";

export default function MyJob() {
  const areas = [
    {
      title: "بررسی اولیه پرونده",
      desc: "مطالعه مدارک و ارزیابی شرایط حقوقی پرونده.",
    },
    {
      title: "ارائه استراتژی حقوقی",
      desc: "تعیین بهترین مسیر قانونی متناسب با شرایط پرونده.",
    },
    {
      title: "تنظیم اسناد و لوایح",
      desc: "تهیه حرفه‌ای دادخواست‌ها، لوایح و قراردادها.",
    },
    {
      title: "پیگیری مستمر",
      desc: "نظارت و پیگیری تمامی مراحل رسیدگی پرونده.",
    },
    {
      title: "گزارش‌دهی شفاف",
      desc: "اطلاع‌رسانی منظم درباره روند پرونده.",
    },
    {
      title: "دفاع از حقوق موکل",
      desc: "پیگیری مؤثر برای حفظ حقوق و منافع قانونی موکل.",
    },
  ];

  return (
    <section
      dir="rtl"
      className="relative py-5 md:py-14 bg-gradient-to-t from-white via-red-50 to-white overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-72 h-72 bg-luxury-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-luxury-navy/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-flex items-center px-4 py-2 rounded-full border border-luxury-gold/20 bg-luxury-gold/5 text-luxury-gold text-sm font-semibold">
            فرآیند همکاری
          </span>

          <h2 className="mt-6 text-3xl md:text-5xl font-black text-luxury-dark">
            روند رسیدگی به پرونده
          </h2>

          <p className="mt-5 text-gray-600 leading-8">
            هر پرونده با یک فرآیند مشخص، شفاف و هدفمند دنبال می‌شود تا بهترین
            نتیجه ممکن حاصل گردد.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* متن سمت راست */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <h3 className="text-3xl font-black text-luxury-dark leading-tight">
                شفافیت در
                <span className="text-luxury-gold"> تمام مراحل </span>
                همکاری
              </h3>

              <p className="mt-6 text-gray-600 leading-8">
                از نخستین جلسه مشاوره تا پایان فرآیند رسیدگی، تمامی اقدامات
                حقوقی بر اساس برنامه‌ای مشخص و قابل پیگیری انجام می‌شود.
              </p>

              <div className="mt-8 border-r-2 border-luxury-gold pr-5">
                <p className="text-luxury-dark font-medium leading-8">
                  هر مرحله با هدف حفظ حقوق موکل و دستیابی به بهترین نتیجه
                  برنامه‌ریزی می‌شود.
                </p>
              </div>
            </div>
          </div>

          {/* تایم لاین */}
          <div className="lg:col-span-8">
            {areas.map((item, index) => (
              <div
                key={index}
                className="relative flex gap-5 md:gap-8 pb-10 md:pb-14"
              >
                {index !== areas.length - 1 && (
                  <div className="absolute right-5 top-12 h-full w-px bg-luxury-gold/20" />
                )}

                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-luxury-navy text-luxury-gold flex items-center justify-center font-bold flex-shrink-0 shadow-lg">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-luxury-dark mb-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 leading-7 text-sm md:text-base">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
