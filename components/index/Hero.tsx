import React from "react";
import { Scale, MapPin, FileText, Laptop2, ArrowLeft } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <header
      dir="rtl"
      className="relative overflow-hidden pt-2 pb-16 lg:pt-20 lg:pb-24"
    >
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(luxury-dark 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-line-light/5 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center relative z-10">
        {/* Portrait */}
        <div
          className="lg:col-span-5 flex justify-center relative order-first lg:order-last fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          <div className="relative w-64 h-80 sm:w-72 sm:h-96 md:w-80 md:h-[440px] lg:w-96 lg:h-[500px] group">
            <div className="absolute inset-0 border-2 border-brass rounded-[6px] translate-x-4 translate-y-4 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2" />
            <div className="absolute inset-0 bg-burgundy-brown rounded-[6px] overflow-hidden shadow-2xl">
              <div className="w-full h-full bg-gradient-to-t from-burgundy-brown via-transparent to-transparent absolute bottom-0 z-10" />
              <Image
                src="/images/mt.jpg"
                alt="سرکار خانم مریم طاهری، وکیل پایه یک دادگستری"
                fill
                sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
                priority
                className="object-cover transition-all duration-700 scale-105 group-hover:scale-100"
              />
            </div>
            <div className="absolute bottom-6 -right-4 z-20 bg-paper border border-line px-4 py-3 md:px-5 md:py-4 rounded-[6px] shadow-xl min-w-[150px] sm:min-w-[200px]">
              <h3 className="font-display text-ink font-semibold text-base sm:text-lg">
                مریم طاهری
              </h3>
              <p className="text-burgundy-red text-xs mt-1 font-medium">
                وکیل پایه یک دادگستری
              </p>
            </div>
          </div>
        </div>

        {/* Copy */}
        <div className="lg:col-span-7 text-center lg:text-right space-y-5 order-last lg:order-first">
          <div className="fade-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-burgundy-deep/10 border border-burgundy-red/15 text-burgundy-red text-xs sm:text-sm font-medium">
            <Scale className="w-3.5 h-3.5" />
            <span>وکیل پایه یک دادگستری و مشاور حقوقی</span>
          </div>

          <h1
            className="fade-up font-display text-3xl sm:text-4xl md:text-6xl font-semibold text-ink leading-[1.15]"
            style={{ animationDelay: "0.05s" }}
          >
            مریم طاهری
          </h1>

          <p
            className="fade-up text-ink-soft text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0"
            style={{ animationDelay: "0.1s" }}
          >
            با تکیه بر دانش روز، رتبه برتر آزمون وکالت و تعهد به شفافیت، در
            پیچیده‌ترین پرونده‌های حقوقی و کیفری در کنار شما هستم تا حق شما
            شنیده شود.
          </p>

          {/* Fact chips — real, verifiable info only */}
          <div
            className="fade-up grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 max-w-lg mx-auto lg:mx-0"
            style={{ animationDelay: "0.15s" }}
          >
            <div className="p-4 rounded-[10px] bg-ink text-center">
              <FileText className="w-5 h-5 text-brass-light mx-auto mb-2" />
              <div className="text-[10px] sm:text-xs text-paper/50">
                شماره پروانه
              </div>
              <div
                className="font-semibold text-paper mt-1 text-xs sm:text-sm"
                dir="ltr"
              >
                ۳۷۰۳۹
              </div>
            </div>
            <div className="p-4 rounded-[10px] bg-ink text-center">
              <MapPin className="w-5 h-5 text-[var(--brass-light)] mx-auto mb-2" />
              <div className="text-[10px] sm:text-xs text-paper/50">
                پذیرش پرونده
              </div>
              <div className="font-semibold text-paper mt-1 text-xs sm:text-sm">
                سراسر کشور
              </div>
            </div>
            <div className="p-4 rounded-[10px] bg-ink text-center col-span-2 sm:col-span-1">
              <Laptop2 className="w-5 h-5 text-[var(--brass-light)] mx-auto mb-2" />
              <div className="text-[10px] sm:text-xs text-paper/50">مشاوره</div>
              <div className="font-semibold text-paper mt-1 text-xs sm:text-sm">
                حضوری و آنلاین
              </div>
            </div>
          </div>

          <div
            className="fade-up flex flex-col sm:flex-row items-center gap-3 pt-3 justify-center lg:justify-start"
            style={{ animationDelay: "0.2s" }}
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-burgundy-red text-paper font-semibold rounded-full shadow-[0_10px_30px_-10px_rgba(124,35,49,0.6)] hover:bg-burgundy-deep transition-colors"
            >
              <span>دریافت مشاوره فوری</span>
              <ArrowLeft className="w-4 h-4" />
            </a>
            <a
              href="#expertise"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-line text-ink font-medium rounded-full hover:border-burgundy-red hover:text-burgundy-red transition-colors"
            >
              مشاهده حوزه‌های تخصصی
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
