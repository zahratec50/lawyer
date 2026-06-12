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
      className="relative overflow-hidden py-14 md:py-24 bg-gradient-to-b from-white via-red-50/30 to-white"
    >
      {/* Decorative Blur */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-luxury-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-luxury-navy/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-20 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
          <span className="inline-flex items-center px-4 py-2 rounded-full border border-luxury-gold/20 bg-luxury-gold/5 text-luxury-gold text-xs md:text-sm font-semibold">
            فرآیند همکاری
          </span>

          <h2 className="mt-5 text-2xl sm:text-3xl md:text-5xl font-black text-luxury-dark">
            روند رسیدگی به پرونده
          </h2>

          <p className="mt-5 text-sm md:text-lg text-gray-600 leading-7 md:leading-8 max-w-2xl mx-auto">
            هر پرونده با فرآیندی مشخص، شفاف و هدفمند دنبال می‌شود تا بهترین
            نتیجه ممکن حاصل گردد.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Content Side */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <h3 className="text-2xl md:text-4xl font-black text-luxury-dark leading-tight">
                شفافیت در
                <span className="text-luxury-gold"> تمام مراحل </span>
                همکاری
              </h3>

              <p className="mt-5 md:mt-6 text-gray-600 leading-8 text-sm md:text-base">
                از نخستین جلسه مشاوره تا پایان فرآیند رسیدگی، تمامی اقدامات
                حقوقی بر اساس برنامه‌ای مشخص و قابل پیگیری انجام می‌شود.
              </p>

              <div className="mt-6 md:mt-8 border-r-2 border-luxury-gold pr-4 md:pr-5">
                <p className="text-luxury-dark font-medium leading-7 md:leading-8 text-sm md:text-base">
                  هر مرحله با هدف حفظ حقوق موکل و دستیابی به بهترین نتیجه
                  برنامه‌ریزی می‌شود.
                </p>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="lg:col-span-8">
            <div className="space-y-8 md:space-y-10">
              {areas.map((item, index) => (
                <div
                  key={index}
                  className="relative flex items-start gap-4 md:gap-8"
                >
                  {/* Line */}
                  {index !== areas.length - 1 && (
                    <div
                      className="
                        absolute
                        right-[22px]
                        md:right-[28px]
                        top-12
                        md:top-14
                        w-px
                        h-full
                        bg-gradient-to-b
                        from-luxury-gold
                        to-luxury-gold/10
                      "
                    />
                  )}

                  {/* Number */}
                  <div
                    className="
                      w-11 h-11
                      md:w-14 md:h-14
                      rounded-full
                      border
                      border-luxury-gold/30
                      bg-white
                      shadow-md
                      flex
                      items-center
                      justify-center
                      flex-shrink-0
                      text-luxury-dark
                      font-bold
                      text-sm
                      md:text-base
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* Content */}
                  <div className="pb-4 md:pb-6">
                    <h3 className="text-lg md:text-2xl font-black text-luxury-dark mb-2">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 leading-7 md:leading-8 text-sm md:text-base max-w-2xl">
                      {item.desc}
                    </p>

                    <div className="mt-4 w-10 h-[2px] rounded-full bg-luxury-gold/30" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
