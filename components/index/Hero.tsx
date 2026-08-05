import React from "react";
import { Scale, MapPin, FileText, Laptop2, ArrowLeft } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <header
      dir="rtl"
      className="relative overflow-hidden bg-gradient-to-b from-paper via-paper to-paper-warm pt-2 pb-16 lg:pt-20 lg:pb-24"
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(var(--line) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      {/* Soft golden glow */}
      <div className="absolute -top-32 -left-32 w-[420px] h-[420px] rounded-full bg-gold-light/10 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center relative z-10">
        {/* ================= Portrait ================= */}

        <div className="lg:col-span-5 flex justify-center relative order-first lg:order-last fade-up">
          <div className="relative w-64 h-80 sm:w-72 sm:h-96 md:w-80 md:h-[440px] lg:w-96 lg:h-[500px] group">
            {/* Golden frame */}
            <div className="absolute inset-0 border-2 border-gold rounded-xl translate-x-4 translate-y-4 transition-all duration-500 group-hover:translate-x-2 group-hover:translate-y-2" />

            {/* Image */}
            <div className="absolute inset-0 bg-primary rounded-xl overflow-hidden shadow-[0_35px_70px_rgba(22,32,43,.25)]">
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent z-10" />

              <Image
                src="/images/mt.jpg"
                alt="سرکار خانم مریم طاهری، وکیل پایه یک دادگستری"
                fill
                priority
                sizes="(max-width:768px) 256px,
                       (max-width:1024px) 320px,
                       384px"
                className="object-cover scale-105 transition-all duration-700 group-hover:scale-100"
              />
            </div>

            {/* Name Card */}

            <div className="absolute bottom-6 -right-4 z-20 bg-paper border border-line rounded-xl px-5 py-4 shadow-[0_20px_50px_rgba(22,32,43,.12)] min-w-[210px]">
              <h3 className="font-display text-ink font-semibold text-lg">
                مریم طاهری
              </h3>

              <p className="text-gold mt-1 text-sm font-medium">
                وکیل پایه یک دادگستری
              </p>
            </div>
          </div>
        </div>

        {/* ================= Copy ================= */}

        <div className="lg:col-span-7 text-center lg:text-right space-y-6 order-last lg:order-first">
          {/* Badge */}

          <div className="fade-up inline-flex items-center gap-2 rounded-full border border-gold/25 bg-gold-light/10 px-4 py-2 text-gold text-sm font-medium">
            <Scale className="w-4 h-4" />

            <span>وکیل پایه یک دادگستری و مشاور حقوقی</span>
          </div>

          {/* Heading */}

          <h1 className="fade-up font-display text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight text-ink">
            مریم طاهری
          </h1>

          {/* Description */}

          <p className="fade-up max-w-xl mx-auto lg:mx-0 text-base sm:text-lg leading-9 text-ink-soft">
            با تکیه بر دانش روز، رتبه برتر آزمون وکالت و تعهد به شفافیت، در
            پیچیده‌ترین پرونده‌های حقوقی و کیفری در کنار شما هستم تا از حقوق
            قانونی شما با دقت، تجربه و مسئولیت‌پذیری دفاع کنم.
          </p>

          {/* Cards */}

          <div className="fade-up grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0 pt-2">
            <div className="rounded-xl bg-primary p-5 text-center shadow-xl">
              <FileText className="mx-auto mb-3 h-5 w-5 text-gold-light" />

              <div className="text-xs text-white/60">شماره پروانه</div>

              <div dir="ltr" className="mt-2 font-semibold text-paper">
                ۳۷۰۳۹
              </div>
            </div>

            <div className="rounded-xl bg-primary p-5 text-center shadow-xl">
              <MapPin className="mx-auto mb-3 h-5 w-5 text-gold-light" />

              <div className="text-xs text-white/60">پذیرش پرونده</div>

              <div className="mt-2 font-semibold text-paper">سراسر کشور</div>
            </div>

            <div className="col-span-2 sm:col-span-1 rounded-xl bg-primary p-5 text-center shadow-xl">
              <Laptop2 className="mx-auto mb-3 h-5 w-5 text-gold-light" />

              <div className="text-xs text-white/60">مشاوره</div>

              <div className="mt-2 font-semibold text-paper">
                حضوری و آنلاین
              </div>
            </div>
          </div>

          {/* Buttons */}

          <div className="fade-up flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 font-semibold text-paper shadow-[0_18px_40px_-12px_rgba(22,32,43,.35)] transition-all duration-300 hover:-translate-y-1 hover:bg-primary-dark"
            >
              <span>دریافت مشاوره فوری</span>

              <ArrowLeft className="w-4 h-4" />
            </a>

            <a
              href="#expertise"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-line bg-paper px-8 py-4 font-medium text-ink transition-all duration-300 hover:border-gold hover:text-gold"
            >
              مشاهده حوزه‌های تخصصی
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
