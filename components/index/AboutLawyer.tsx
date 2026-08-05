import { Scale, ShieldCheck, FileSearch, Users, Quote } from "lucide-react";

export default function AboutLawyer() {
  const values = [
    {
      icon: <Scale className="w-5 h-5" />,
      title: "تخصص حقوقی",
      desc: "تحلیل دقیق پرونده‌ها و انتخاب بهترین مسیر قانونی متناسب با شرایط هر موکل.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      title: "محرمانگی کامل",
      desc: "حفظ اطلاعات و اسناد موکلان با بالاترین سطح تعهد حرفه‌ای و اخلاقی.",
    },
    {
      icon: <FileSearch className="w-5 h-5" />,
      title: "بررسی دقیق پرونده",
      desc: "مطالعه کامل مدارک و مستندات پیش از هر اقدام حقوقی.",
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "اعتماد و همراهی",
      desc: "ارتباطی شفاف و مستمر با موکل در تمام مراحل رسیدگی.",
    },
  ];

  return (
    <section
      id="about"
      dir="rtl"
      className="
        relative
        overflow-hidden
        bg-paper
        py-16
        md:py-28
      "
    >
      {/* Background glow */}

      <div
        className="
          absolute
          right-0
          top-24
          h-80
          w-80
          rounded-full
          bg-gold-light/10
          blur-3xl
          pointer-events-none
        "
      />

      <div
        className="
        container
        relative
        z-10
        mx-auto
        px-4
        sm:px-6
        lg:px-20
      "
      >
        {/* Header */}

        <div
          className="
          mx-auto
          max-w-4xl
          text-center
        "
        >
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
            <Scale className="h-4 w-4" />
            رویکرد حرفه‌ای
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
            تجربه، دانش و تعهد در کنار شما
          </h2>

          <p
            className="
              mx-auto
              mt-7
              max-w-3xl
              text-base
              leading-8
              text-ink-soft
              md:text-lg
            "
          >
            هر پرونده حقوقی شرایط و پیچیدگی‌های منحصربه‌فرد خود را دارد و
            دستیابی به بهترین نتیجه نیازمند تحلیل تخصصی، تجربه عملی و انتخاب
            راهکار قانونی مناسب است. هدف من ارائه خدمات حقوقی حرفه‌ای با تمرکز
            بر شفافیت، مسئولیت‌پذیری و دفاع مؤثر از حقوق موکلان است.
          </p>
        </div>

        {/* Values Cards */}

        <div
          className="
            mt-14
            grid
            grid-cols-1
            gap-6
            md:mt-20
            md:grid-cols-2
          "
        >
          {values.map((item) => (
            <div
              key={item.title}
              className="
                  group
                  flex
                  items-start
                  gap-5
                  rounded-2xl
                  border
                  border-line
                  bg-paper
                  p-6
                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:border-gold/30
                  hover:shadow-[0_20px_50px_rgba(22,32,43,.08)]
                "
            >
              {/* Icon */}

              <div
                className="
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-primary
                    text-gold-light
                    shadow-md

                    md:h-14
                    md:w-14
                  "
              >
                {item.icon}
              </div>

              <div>
                <h3
                  className="
                      mb-2
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
              </div>
            </div>
          ))}
        </div>

        {/* Quote */}

        <div
          className="
            mx-auto
            mt-16
            max-w-5xl
            md:mt-24
          "
        >
          <div
            className="
              relative
              overflow-hidden
              rounded-3xl
              bg-primary
              p-7
              md:p-12
              shadow-[0_30px_80px_rgba(22,32,43,.15)]
            "
          >
            {/* Gold line */}

            <div
              className="
                absolute
                right-0
                top-0
                h-1
                w-full
                bg-gradient-to-r
                from-transparent
                via-gold
                to-transparent
              "
            />

            <Quote
              className="
                absolute
                left-6
                top-6
                h-10
                w-10
                text-gold-light/20
                md:left-10
                md:top-10
              "
            />

            <p
              className="
                relative
                z-10
                text-center
                font-display
                text-lg
                leading-9
                text-paper
                md:text-2xl
                md:leading-relaxed
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
