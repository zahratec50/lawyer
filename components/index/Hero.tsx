import React from "react";
import { Scale, MapPin, FileText, Shield, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <header className="relative min-h-screen flex items-center justify-center pt-24 pb-12 lg:pt-16">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#0B132B_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <div className="container mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        {/* تصویر فاخر وکیل - در موبایل اول نمایش داده می‌شود و در دسکتاپ به چپ می‌رود */}
        <div className="lg:col-span-5 flex justify-center relative order-first lg:order-last mb-6 lg:mb-0">
          <div className="relative w-64 h-80 sm:w-72 sm:h-96 md:w-80 md:h-[440px] lg:w-96 lg:h-[500px] group">
            <div className="absolute inset-0 border-2 border-luxury-gold rounded-[20px] translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-all duration-500"></div>
            <div className="absolute inset-0 bg-luxury-navy rounded-[20px] overflow-hidden shadow-2xl border border-luxury-gold/20">
              <div className="w-full h-full bg-gradient-to-t from-luxury-dark via-transparent to-transparent absolute bottom-0 z-10"></div>
              <Image
                src="/images/mt.jpg"
                alt="سرکار خانم مریم طاهری وکیل پایه یک دادگستری"
                fill
                sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
                priority
                className="object-cover transition-all duration-700 scale-105 group-hover:scale-100"
              />
            </div>
            <div className="absolute bottom-6 -right-4 z-20 bg-luxury-navy/95 backdrop-blur-sm border border-luxury-gold/30 p-4 rounded-[16px] shadow-xl min-w-[180px] sm:min-w-[200px]">
              <h3 className="text-white font-bold text-base sm:text-lg">
                مریم طاهری
              </h3>
              <p className="text-luxury-gold text-xs mt-1">
                وکیل پایه یک دادگستری
              </p>
            </div>
          </div>
        </div>

        {/* متن هیرو - در موبایل بعد از عکس و در دسکتاپ سمت راست قرار می‌گیرد */}
        <div className="lg:col-span-7 text-center lg:text-right lg:pr-12 xl:pr-24 space-y-6 order-last lg:order-first">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-luxury-gold/10 border border-luxury-gold/30 text-luxury-gold text-xs sm:text-sm animate-pulse">
            <Scale className="w-4 h-4" />
            <span>وکیل پایه یک دادگستری و مشاور حقوقی</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black text-luxury-navy leading-tight">
            مریم طاهری
          </h1>
          <h2 className="text-transparent text-xl sm:text-2xl md:text-4xl font-bold bg-clip-text bg-gradient-to-l from-luxury-gold via-luxury-goldLight to-luxury-gold">
            وکیل پایه یک دادگستری و مشاور حقوقی
          </h2>
          <p className="text-xl font-bold text-luxury-gold">
            همراه شما در تمامی مراحل رسیدگی حقوقی و قضایی
          </p>
          <p className="text-gray-700 text-base sm:text-lg font-medium max-w-xl mx-auto lg:mx-0 leading-relaxed">
            با تکیه بر دانش روز، رتبه برتر آزمون وکالت و تعهد مطلق، در
            پیچیده‌ترین پرونده‌های حقوقی و کیفری در کنار شما هستیم تا عدالت جاری
            شود.
          </p>

          {/* مدال‌ها و رتبه‌ها - کاملا ریسپانسیو */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 max-w-lg mx-auto lg:mx-0">
            <div className="p-4 rounded-[16px] bg-luxury-navy backdrop-blur-sm border border-luxury-gold/10 hover:border-luxury-gold/40 transition-all text-center">
              <FileText className="w-5 h-5 text-luxury-gold mx-auto mb-2" />
              <div className="text-[10px] sm:text-xs text-gray-400">
                شماره پروانه
              </div>
              <div
                className="font-bold text-white mt-1 text-xs sm:text-sm tracking-wider"
                dir="ltr"
              >
                ۳۷۰۳۹
              </div>
            </div>
            <div className="p-4 rounded-[16px] bg-luxury-navy backdrop-blur-sm border border-luxury-gold/10 hover:border-luxury-gold/40 transition-all text-center">
              <MapPin className="w-5 h-5 text-luxury-gold mx-auto mb-2" />
              <div className="text-[10px] sm:text-xs text-gray-400">
                پذیرش پرونده
              </div>
              <div className="font-bold text-white mt-1 text-xs sm:text-sm">
                سراسر کشور
              </div>
            </div>

            <div className="p-4 rounded-[16px] bg-luxury-navy backdrop-blur-sm border border-luxury-gold/10 hover:border-luxury-gold/40 transition-all text-center col-span-2 sm:col-span-1">
              <Scale className="w-5 h-5 text-luxury-gold mx-auto mb-2" />
              <div className="text-[10px] sm:text-xs text-gray-400">مشاوره</div>
              <div className="font-bold text-white mt-1 text-xs sm:text-sm">
                حضوری و آنلاین
              </div>
            </div>
          </div>

          <div className="pt-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-luxury-gold to-luxury-goldLight text-luxury-dark font-extrabold rounded-[16px] shadow-[0_4px_20px_rgba(212,175,55,0.2)] hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <span>دریافت مشاوره فوری</span>
              <ArrowRight className="w-4 h-4 transform rotate-180" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
