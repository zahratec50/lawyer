import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowUpLeft,
  Send,
  Globe,
} from "lucide-react";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { IoLogoLinkedin } from "react-icons/io5";

export default function Contact() {
  return (
    <section
      id="contact"
      dir="rtl"
      className="relative overflow-hidden py-16 md:py-28 bg-gradient-to-b from-white via-red-50/20 to-white"
    >
      {/* Decorative Blur */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-luxury-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-luxury-navy/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-20 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center px-4 py-2 rounded-full border border-luxury-gold/20 bg-luxury-gold/5 text-luxury-gold text-xs md:text-sm font-semibold">
            ارتباط با وکیل
          </span>

          <h2 className="mt-5 text-3xl md:text-5xl font-black text-luxury-dark">
            تماس با مریم طاهری
          </h2>

          <p className="mt-5 text-sm md:text-lg text-gray-600 leading-8">
            برای دریافت مشاوره حقوقی، بررسی پرونده و ارتباط مستقیم با ما در
            ارتباط باشید.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Contact Info */}
          <div className="lg:col-span-5">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-11 h-11 rounded-[12px] bg-luxury-gold/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-luxury-gold" />
                </div>

                <div>
                  <h3 className="font-bold text-luxury-dark">شماره تماس</h3>

                  <a
                    href="tel:+989217127727"
                    dir="ltr"
                    className="text-gray-600 hover:text-luxury-gold transition-colors"
                  >
                    ۰۹۲۱ ۷۱۲ ۷۷۲۷
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-11 h-11 rounded-[12px] bg-luxury-gold/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-luxury-gold" />
                </div>

                <div>
                  <h3 className="font-bold text-luxury-dark">پست الکترونیک</h3>

                  <a
                    href="mailto:maryamtaheri1475@gmail.com"
                    className="text-gray-600 hover:text-luxury-gold transition-colors break-all"
                  >
                    maryamtaheri1475@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-11 h-11 rounded-[12px] bg-luxury-gold/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-luxury-gold" />
                </div>

                <div>
                  <h3 className="font-bold text-luxury-dark">آدرس دفتر</h3>

                  <p className="text-gray-600 leading-7">
                    اصفهان، سهروردی، مجتمع زیتون، طبقه اول
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-11 h-11 rounded-[12px] bg-luxury-gold/10 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-luxury-gold" />
                </div>

                <div>
                  <h3 className="font-bold text-luxury-dark">ساعات پاسخگویی</h3>

                  <p className="text-gray-600">
                    شنبه تا پنجشنبه، ۹ صبح تا ۸ شب
                  </p>
                </div>
              </div>
              {/* Location Preview */}
              <div className="mt-12 md:mt-16">
                <a
                  href="https://maps.app.goo.gl/HRGokgTweSuTHfse6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                            group
                            relative
                            block
                            overflow-hidden
                            rounded-[28px]
                            border
                            border-luxury-gold/15
                            bg-gradient-to-br
                            from-luxury-navy
                            via-luxury-navy
                            to-luxury-blue
                            p-5
                            md:p-8
                            transition-all
                            duration-500
                            hover:border-luxury-gold/40
                            hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                          "
                >
                  {/* Background Decoration */}
                  <div className="absolute top-0 left-0 w-40 h-40 bg-luxury-gold/5 rounded-full blur-3xl" />

                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                      {/* Content */}
                      <div>
                        <span
                          className="
                                  inline-flex
                                  items-center
                                  gap-2
                                  rounded-full
                                  bg-luxury-gold/10
                                  px-3
                                  py-1.5
                                  text-xs
                                  font-semibold
                                  text-luxury-gold
                                "
                        >
                          <MapPin className="w-3.5 h-3.5" />
                          موقعیت دفتر
                        </span>

                        <h3
                          className="
                                  mt-4
                                  text-xl
                                  md:text-3xl
                                  font-black
                                  text-white
                                "
                        >
                          دفتر وکالت مریم طاهری
                        </h3>

                        <p
                          className="
                                  mt-3
                                  text-sm
                                  md:text-base
                                  leading-7
                                  text-gray-300
                                  max-w-xl
                                "
                        >
                          اصفهان، سهروردی، مجتمع زیتون، طبقه اول
                        </p>

                        <div
                          className="
                                mt-5
                                inline-flex
                                items-center
                                gap-2
                                text-luxury-gold
                                font-semibold
                                text-sm
                              "
                        >
                          مشاهده مسیر در Google Maps
                          <ArrowUpLeft
                            className="
                                    w-4
                                    h-4
                                    transition-transform
                                    duration-300
                                    group-hover:-translate-y-1
                                    group-hover:translate-x-1
                                  "
                          />
                        </div>
                      </div>

                      {/* Right Icon */}
                      <div
                        className="
                                  hidden
                                  md:flex
                                  w-20
                                  h-20
                                  rounded-[24px]
                                  bg-luxury-gold/10
                                  items-center
                                  justify-center
                                  shrink-0
                                  shadow-lg
                                "
                      >
                        <MapPin className="w-10 h-10 text-luxury-gold" />
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Luxury CTA */}
          <div className="lg:col-span-7">
            <div
              className="
                relative
                overflow-hidden
                rounded-[28px]
                border
                border-white/10
                bg-[#07111f]
                p-6
                md:p-10
                shadow-[0_25px_80px_rgba(0,0,0,0.25)]
              "
            >
              {/* Background */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-luxury-dark/10 blur-3xl" />

                <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-luxury-dark/5 blur-3xl" />

                <div className="absolute inset-0 bg-luxury-navy/40" />
              </div>

              <div className="relative z-10">
                <span
                  className="
                    inline-flex
                    items-center
                    rounded-full
                    border
                    border-luxury-gold/20
                    bg-luxury-gold/5
                    px-3
                    py-1.5
                    text-xs
                    text-luxury-gold
                  "
                >
                  مشاوره تخصصی حقوقی
                </span>

                <h3 className="mt-5 text-2xl md:text-5xl font-black leading-tight text-white">
                  پرونده شما نیاز به
                  <span className="block mt-1 text-luxury-gold">
                    بررسی تخصصی دارد؟
                  </span>
                </h3>

                <p className="mt-6 max-w-xl text-sm md:text-base leading-8 text-white/65">
                  پیش از هر اقدام حقوقی، پرونده شما با دقت بررسی شده و
                  مناسب‌ترین راهکار قانونی برای دستیابی به بهترین نتیجه ارائه
                  خواهد شد.
                </p>

                <a
                  href="https://wa.me/message/LKIGZ6PEI7EZP1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    mt-8
                    flex
                    items-center
                    justify-between
                    rounded-[14px]
                    border
                    border-luxury-gold/20
                    bg-white/5
                    backdrop-blur-sm
                    px-5
                    py-5
                    group
                    transition-all
                    duration-300
                    hover:border-luxury-gold
                    hover:bg-luxury-blue/30
                    hover:-translate-y-1
                  "
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-[12px] bg-luxury-gold/15">
                      <AiOutlineWhatsApp className="w-7 h-7 text-luxury-gold" />
                    </div>

                    <div>
                      <p className="font-bold text-white">
                        شروع مشاوره در واتساپ
                      </p>

                      <p className="text-sm text-white/50">
                        پاسخگویی در کوتاه‌ترین زمان ممکن
                      </p>
                    </div>
                  </div>

                  <ArrowUpLeft className="h-5 w-5 text-luxury-gold transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                </a>

                <div className="my-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                <div className="flex flex-wrap justify-center gap-6">
                  <a
                    href="https://t.me/LawyerMaryamTaheri"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-white/60 hover:text-luxury-gold transition-colors"
                  >
                    <Send className="w-4 h-4 " />
                    تلگرام
                  </a>

                  <a
                    href="https://www.linkedin.com/in/maryam-taheri-6a1930266"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-white/60 hover:text-luxury-gold transition-colors"
                  >
                    <IoLogoLinkedin className="w-4 h-4" />
                    لینکدین
                  </a>

                  <a
                    href="https://eitaa.com/LawyerMaryamTaheri"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-white/60 hover:text-luxury-gold transition-colors"
                  >
                    <Globe className="w-4 h-4" />
                    ایتا
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
