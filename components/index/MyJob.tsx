import React from "react";

export default function MyJob() {
  const steps = [
    {
      title: "بررسی اولیه پرونده",
      desc: "مطالعه مدارک، بررسی مستندات و ارزیابی دقیق شرایط حقوقی پرونده برای تعیین بهترین مسیر قانونی.",
    },
    {
      title: "ارائه استراتژی حقوقی",
      desc: "انتخاب مناسب‌ترین راهکار حقوقی متناسب با شرایط و اهداف پرونده.",
    },
    {
      title: "تنظیم اسناد و لوایح",
      desc: "تهیه حرفه‌ای دادخواست‌ها، لوایح، قراردادها و سایر اسناد موردنیاز.",
    },
    {
      title: "پیگیری مستمر",
      desc: "پیگیری تمام مراحل رسیدگی و اطلاع از آخرین وضعیت پرونده.",
    },
    {
      title: "گزارش‌دهی شفاف",
      desc: "ارائه گزارش‌های منظم از روند پرونده و پاسخگویی به پرسش‌های موکل.",
    },
    {
      title: "دفاع از حقوق موکل",
      desc: "دفاع مؤثر و مسئولانه برای حفظ حقوق و منافع قانونی موکل تا پایان پرونده.",
    },
  ];

  return (
    <section
      id="process"
      dir="rtl"
      className="relative overflow-hidden bg-gradient-to-b from-paper to-paper-warm py-16 md:py-28"
    >
      {/* Golden Glow */}
      <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-gold-light/10 blur-3xl pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-20">
        {/* Heading */}

        <div className="mx-auto mb-14 max-w-3xl text-center md:mb-20">
          <span className="inline-flex items-center rounded-full border border-gold/20 bg-gold-light/10 px-4 py-2 text-sm font-medium text-gold">
            فرآیند همکاری
          </span>

          <h2 className="mt-5 font-display text-3xl font-semibold text-ink md:text-5xl">
            روند رسیدگی به پرونده
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-ink-soft">
            هر پرونده با فرآیندی مشخص، شفاف و هدفمند مدیریت می‌شود تا بهترین
            نتیجه ممکن برای موکل حاصل گردد.
          </p>
        </div>

        <div className="grid gap-14 lg:grid-cols-12">
          {/* Left Side */}

          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <h3 className="font-display text-3xl font-semibold leading-tight text-ink md:text-4xl">
                شفافیت در
                <span className="text-gold"> تمام مراحل </span>
                همکاری
              </h3>

              <p className="mt-6 leading-8 text-ink-soft">
                از نخستین جلسه مشاوره تا پایان رسیدگی، تمامی اقدامات حقوقی بر
                اساس برنامه‌ای مشخص، شفاف و قابل پیگیری انجام می‌شود.
              </p>

              <div className="mt-8 border-r-2 border-gold pr-5">
                <p className="leading-8 text-ink">
                  هر مرحله با هدف حفظ حقوق موکل، کاهش ریسک‌های حقوقی و دستیابی
                  به بهترین نتیجه برنامه‌ریزی می‌شود.
                </p>
              </div>
            </div>
          </div>

          {/* Timeline */}

          <div className="lg:col-span-8">
            <div className="space-y-10">
              {steps.map((item, index) => (
                <div
                  key={index}
                  className="group relative flex items-start gap-6"
                >
                  {index !== steps.length - 1 && (
                    <div className="absolute right-[27px] top-14 h-full w-px bg-gradient-to-b from-gold via-gold/40 to-transparent" />
                  )}

                  {/* Number */}

                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary text-paper font-semibold shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:bg-primary-dark">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* Card */}

                  <div className="flex-1 rounded-2xl border border-line bg-paper p-6 transition-all duration-300 group-hover:border-gold/25 group-hover:shadow-[0_20px_45px_rgba(22,32,43,.08)]">
                    <h3 className="mb-3 text-xl font-semibold text-ink">
                      {item.title}
                    </h3>

                    <p className="leading-8 text-ink-soft">{item.desc}</p>
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
