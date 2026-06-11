import React from "react";
import { MapPin, Phone, Mail, Send, Globe } from "lucide-react";
import { IoLogoLinkedin } from "react-icons/io5";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { Clock } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      dir="rtl"
      className="py-24 bg-gradient-to-b from-white to-luxury-goldLight to-white relative overflow-hidden"
    >
      <div className="container mx-auto lg:px-24 xl:px-32 px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* اطلاعات ثابت ارتباطی */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl font-extrabold text-luxury-dark">
              تماس با مریم طاهری
            </h2>
            <div className="w-16 h-1 bg-luxury-gold rounded-full"></div>
            <p className="text-gray-700 text-sm leading-relaxed font-medium">
              برای دریافت مشاوره حقوقی، بررسی پرونده و ارتباط مستقیم با مریم
              طاهری وکیل پایه یک دادگستری می‌توانید از راه‌های زیر در ارتباط
              باشید.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-4 p-4 rounded-[16px] bg-luxury-goldLight/25 border border-luxury-gold/15 shadow-sm">
                <MapPin className="w-6 h-6 text-luxury-navy shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-luxury-dark font-bold text-sm">
                    آدرس دفتر مرکزی:
                  </h4>
                  <p className="text-luxury-blue font-bold text-xs mt-1 leading-relaxed">
                    اصفهان، سهروردی، مجتمع زیتون، طبقه اول
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-[16px] bg-luxury-goldLight/25 border border-luxury-gold/15 shadow-sm">
                <Phone className="w-6 h-6 text-luxury-navy shrink-0" />
                <div>
                  <h4 className="text-luxury-dark font-bold text-sm">
                    شماره تلفن :
                  </h4>
                  <a
                    href="tel:+989217127727"
                    className="text-luxury-blue text-xs mt-1 font-semibold tracking-wider hover:text-luxury-gold transition-colors"
                    dir="ltr"
                  >
                    ۰۹۲۱ ۷۱۲ ۷۷۲۷
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-[16px] bg-luxury-goldLight/25 border border-luxury-gold/15 shadow-sm">
                <Mail className="w-6 h-6 text-luxury-navy shrink-0" />

                <div>
                  <h4 className="text-luxury-dark font-bold text-sm">
                    پست الکترونیک:
                  </h4>
                  <a
                    href="mailto:maryamtaheri1475@gmail.com"
                    className="text-luxury-blue font-medium text-xs mt-1 hover:text-luxury-gold transition-colors"
                    dir="ltr"
                  >
                    maryamtaheri1475@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-[16px] bg-luxury-goldLight/25 border border-luxury-gold/15 shadow-sm">
                <Clock className="w-6 h-6 text-luxury-navy shrink-0" />

                <div>
                  <h4 className="text-luxury-dark font-bold text-sm">
                    ساعات پاسخگویی
                  </h4>

                  <p className="text-luxury-blue font-medium text-xs mt-1">
                    شنبه تا پنجشنبه، ۹ صبح تا ۸ شب
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* شبکه‌های اجتماعی لوکس - اصلاح ساختار گرید برای موبایل */}
          <div className="lg:col-span-6 bg-gradient-to-br from-luxury-goldLight/30 to-luxury-goldLight/15 p-6 sm:p-8 rounded-[24px] border border-luxury-gold/20 shadow-xl space-y-6">
            <div className="text-center space-y-2">
              <h3 className="text-xl font-bold text-luxury-dark">
                شبکه‌های اجتماعی و ارتباط آنلاین
              </h3>
              <p className="text-gray-700 text-xs px-4">
                برای مشاهده تحلیل‌های حقوقی روزانه و ارتباط سریع‌تر، ما را دنبال
                کنید
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5" dir="ltr">
              {/* واتساپ */}
              <a
                href="https://wa.me/message/LKIGZ6PEI7EZP1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-4 rounded-[16px] bg-luxury-navy border border-luxury-navy/10 hover:border-luxury-gold transition-all duration-300 group text-center"
              >
                <AiOutlineWhatsApp className="w-7 h-7 text-luxury-gold mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-white text-xs font-semibold">واتساپ</span>
                <span className="text-gray-500 text-[9px] mt-1 tracking-tight truncate w-full">
                  @lawyer_handle
                </span>
              </a>

              {/* لینکدین */}
              <a
                href="https://www.linkedin.com/in/maryam-taheri-6a1930266"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-4 rounded-[16px] bg-luxury-navy border border-luxury-gold/10 hover:border-luxury-gold transition-all duration-300 group text-center"
              >
                <IoLogoLinkedin className="w-7 h-7 text-luxury-gold mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-white text-xs font-semibold">
                  لینکدین
                </span>
                <span className="text-gray-500 text-[9px] mt-1 tracking-tight truncate w-full">
                  lawyer-profile
                </span>
              </a>

              {/* تلگرام */}
              <a
                href="https://t.me/LawyerMaryamTaheri"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-4 rounded-[16px] bg-luxury-navy border border-luxury-gold/10 hover:border-luxury-gold transition-all duration-300 group text-center"
              >
                <Send className="w-7 h-7 text-luxury-gold mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-white text-xs font-semibold">تلگرام</span>
                <span className="text-gray-500 text-[9px] mt-1 tracking-tight truncate w-full">
                  @MaryamTaheri
                </span>
              </a>

              {/* ایتا */}
              <a
                href="https://eitaa.com/LawyerMaryamTaheri"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-4 rounded-[16px] bg-luxury-navy border border-luxury-gold/10 hover:border-luxury-gold transition-all duration-300 group text-center"
              >
                <Globe className="w-7 h-7 text-luxury-gold mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-white text-xs font-semibold">ایتا</span>
                <span className="text-gray-500 text-[9px] mt-1 tracking-tight truncate w-full">
                  @MaryamTaheri
                </span>
              </a>
            </div>

            <div className="pt-4 border-t border-luxury-blue/10 text-center">
              <span className="text-xs text-luxury-blue italic font-medium">
                حق، گرفتنی است؛ با دانش و قانون در کنارتان هستیم.
              </span>
            </div>
          </div>
        </div>
        <div className="mt-10 overflow-hidden rounded-[24px] border border-luxury-gold/20">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3360.2637402244027!2d51.6265563!3d32.6257993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fbc37cbe2fa380f%3A0x61f124ccdd4fd362!2z2YXYrNiq2YXYuSDYstuM2KrZiNmG!5e0!3m2!1sfa!2s!4v1781154397850!5m2!1sfa!2s"
            width="100%"
            height="420"
            loading="lazy"
            allowFullScreen
            className="w-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
