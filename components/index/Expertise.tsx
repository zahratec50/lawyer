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
      desc: "دفاع حرفه‌ای در پرونده‌های جرایم اقتصادی، کلاهبرداری، جعل اسناد و جرایم سایبری با رعایت استانداردهای حرفه‌ای قضایی.",
    },
    {
      icon: <Users className="w-5 h-5 md:w-6 md:h-6" />,
      title: "دعاوی ملکی و خانواده",
      desc: "حل اختلافات ثبتی، اراضی، سرقفلی، خرید و فروش املاک و ارائه مشاوره تخصصی در امور ارث و خانواده.",
    },
    {
      icon: <FileSignature className="w-5 h-5 md:w-6 md:h-6" />,
      title: "قراردادها و اسناد حقوقی",
      desc: "تنظیم، بررسی و اصلاح قراردادها و اسناد حقوقی برای پیشگیری از اختلافات آینده و حفظ حقوق طرفین.",
    },
  ];

  return (
    <section
      id="expertise"
      dir="rtl"
      className="
        relative
        overflow-hidden
        border-y
        border-line
        bg-gradient-to-b
        from-paper
        to-paper-warm
        py-16
        md:py-28
      "
    >
      {/* Golden glow */}
      <div className="absolute right-0 top-20 h-80 w-80 rounded-full bg-gold-light/10 blur-3xl pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-20">
        {/* Header */}

        <div className="mx-auto mb-12 max-w-3xl text-center md:mb-20">
          <div
            className="
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-gold/20
            bg-gold-light/10
            px-4
            py-2
            text-sm
            font-medium
            text-gold
          "
          >
            <Shield className="w-4 h-4" />
            حوزه‌های تخصصی وکالت
          </div>

          <h2
            className="
            mt-5
            font-display
            text-3xl
            font-semibold
            leading-tight
            text-ink
            md:text-5xl
          "
          >
            خدمات تخصصی حقوقی
          </h2>

          <p
            className="
            mx-auto
            mt-5
            max-w-2xl
            text-base
            leading-8
            text-ink-soft
          "
          >
            ارائه راهکارهای حقوقی مبتنی بر تجربه، دانش و استراتژی‌های حرفه‌ای
            برای دفاع مؤثر از حقوق و منافع موکلان.
          </p>
        </div>

        {/* Cards */}

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-7">
          {areas.map((item) => (
            <div
              key={item.title}
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-line
                bg-paper
                p-6
                transition-all
                duration-300

                hover:-translate-y-1
                hover:border-gold/30
                hover:shadow-[0_25px_60px_rgba(22,32,43,.08)]
              "
            >
              {/* Icon */}

              <div
                className="
                mb-5
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-xl
                bg-primary
                text-gold-light
                shadow-lg

                md:h-14
                md:w-14
              "
              >
                {item.icon}
              </div>

              <h3
                className="
                mb-3
                text-lg
                font-semibold
                text-ink
                md:text-xl
              "
              >
                {item.title}
              </h3>

              <p
                className="
                text-sm
                leading-8
                text-ink-soft
                md:text-base
              "
              >
                {item.desc}
              </p>

              {/* Accent line */}

              <div
                className="
                  mt-6
                  h-[2px]
                  w-8
                  rounded-full
                  bg-gold/40
                  transition-all
                  duration-500

                  group-hover:w-16
                  group-hover:bg-gold
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
