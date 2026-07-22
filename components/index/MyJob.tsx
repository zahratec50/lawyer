import React from "react";

export default function MyJob() {
  const steps = [
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
    <section id="process" dir="rtl" className="relative py-14 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
          <span className="inline-flex items-center px-4 py-2 rounded-full border border-burgundy-red/20 bg-burgundy-deep/10 text-burgundy-red text-xs md:text-sm font-medium">
            فرآیند همکاری
          </span>

          <h2 className="mt-5 font-display text-2xl sm:text-3xl md:text-5xl font-semibold text-ink">
            روند رسیدگی به پرونده
          </h2>

          <p className="mt-5 text-sm md:text-lg text-ink-soft leading-7 md:leading-8 max-w-2xl mx-auto">
            هر پرونده با فرآیندی مشخص، شفاف و هدفمند دنبال می‌شود تا بهترین
            نتیجه ممکن حاصل گردد.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <h3 className="font-display text-2xl md:text-4xl font-semibold text-ink leading-tight">
                شفافیت در
                <span className="text-burgundy-red/80"> تمام مراحل </span>
                همکاری
              </h3>

              <p className="mt-5 md:mt-6 text-ink-soft leading-8 text-sm md:text-base">
                از نخستین جلسه مشاوره تا پایان فرآیند رسیدگی، تمامی اقدامات
                حقوقی بر اساس برنامه‌ای مشخص و قابل پیگیری انجام می‌شود.
              </p>

              <div className="mt-6 md:mt-8 border-r-2 border-burgundy-red pr-4 md:pr-5">
                <p className="text-ink font-medium leading-7 md:leading-8 text-sm md:text-base">
                  هر مرحله با هدف حفظ حقوق موکل و دستیابی به بهترین نتیجه
                  برنامه‌ریزی می‌شود.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="space-y-8 md:space-y-10">
              {steps.map((item, index) => (
                <div
                  key={index}
                  className="relative flex items-start gap-4 md:gap-8"
                >
                  {index !== steps.length - 1 && (
                    <div className="absolute right-[22px] md:right-[28px] top-12 md:top-14 w-px h-full bg-gradient-to-b from-burgundy-red to-burgundy-red/10" />
                  )}

                  <div className="w-11 h-11 md:w-14 md:h-14 rounded-full border border-burgundy-red/30 bg-paper shadow-sm flex items-center justify-center flex-shrink-0 text-ink font-semibold text-sm md:text-base">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="pb-4 md:pb-6">
                    <h3 className="text-lg md:text-2xl font-semibold text-ink mb-2">
                      {item.title}
                    </h3>
                    <p className="text-ink-soft leading-7 md:leading-8 text-sm md:text-base max-w-2xl">
                      {item.desc}
                    </p>
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
