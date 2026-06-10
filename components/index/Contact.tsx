import React from "react";
import { MapPin, Phone, Mail, Send, Globe } from "lucide-react";
import { IoLogoLinkedin } from "react-icons/io5";
import { AiOutlineWhatsApp } from "react-icons/ai";

export default function Contact() {
  return (
    <section
      id="contact"
      dir="rtl"
      className="py-24 bg-amber-50 relative overflow-hidden"
    >
      <div className="container mx-auto lg:px-24 xl:px-32 px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* اطلاعات ثابت ارتباطی */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl font-extrabold text-luxury-dark">
              پل‌های ارتباطی مستقیم
            </h2>
            <div className="w-16 h-1 bg-luxury-gold rounded-full"></div>
            <p className="text-gray-700 text-sm leading-relaxed font-medium">
              دفتر وکالت ما آماده پاسخگویی به سوالات حقوقی شماست. شما می‌توانید
              از طریق شماره‌های زیر یا شبکه‌های اجتماعی به صورت ۲۴ ساعته با ما
              در ارتباط باشید.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-4 p-4 rounded-[16px] bg-luxury-navy border border-luxury-gold/10 shadow-sm">
                <MapPin className="w-6 h-6 text-luxury-gold shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-white font-bold text-sm">
                    آدرس دفتر مرکزی:
                  </h4>
                  <p className="text-gray-400 text-xs mt-1 leading-relaxed">
                    سهروردی، مجتمع زیتون، طبقه اول
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-[16px] bg-luxury-navy border border-luxury-gold/10 shadow-sm">
                <Phone className="w-6 h-6 text-luxury-gold shrink-0" />
                <div>
                  <h4 className="text-white font-bold text-sm">شماره تلفن :</h4>
                  <p
                    className="text-gray-400 text-xs mt-1 font-semibold tracking-wider"
                    dir="ltr"
                  >
                    09217127727
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-[16px] bg-luxury-navy border border-luxury-gold/10 shadow-sm">
                <Mail className="w-6 h-6 text-luxury-gold shrink-0" />
                <div>
                  <h4 className="text-white font-bold text-sm">
                    پست الکترونیک:
                  </h4>
                  <p className="text-gray-400 text-xs mt-1" dir="ltr">
                    maryamtaheri1475@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* شبکه‌های اجتماعی لوکس - اصلاح ساختار گرید برای موبایل */}
          <div className="lg:col-span-6 bg-gradient-to-br from-luxury-navy to-luxury-dark p-6 sm:p-8 rounded-[24px] border border-luxury-gold/20 shadow-xl space-y-6">
            <div className="text-center space-y-2">
              <h3 className="text-xl font-bold text-white">
                شبکه‌های اجتماعی و ارتباط آنلاین
              </h3>
              <p className="text-gray-400 text-xs px-4">
                برای مشاهده تحلیل‌های حقوقی روزانه و ارتباط سریع‌تر، ما را دنبال
                کنید
              </p>
            </div>

            {/* اصلاح گرید به حالت منعطف و ریسپانسیو جهت عدم شلوغی متن‌ها */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5" dir="ltr">
              {/* واتساپ */}
              <a
                href="https://wa.me/message/LKIGZ6PEI7EZP1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-4 rounded-[16px] bg-luxury-dark/60 border border-luxury-gold/10 hover:border-luxury-gold transition-all duration-300 group text-center"
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
                className="flex flex-col items-center justify-center p-4 rounded-[16px] bg-luxury-dark/60 border border-luxury-gold/10 hover:border-luxury-gold transition-all duration-300 group text-center"
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
                className="flex flex-col items-center justify-center p-4 rounded-[16px] bg-luxury-dark/60 border border-luxury-gold/10 hover:border-luxury-gold transition-all duration-300 group text-center"
              >
                <Send className="w-7 h-7 text-luxury-gold mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-white text-xs font-semibold">تلگرام</span>
                <span className="text-gray-500 text-[9px] mt-1 tracking-tight truncate w-full">
                  @MaryamTaheri
                </span>
              </a>

              {/* ایتا */}
              <a
                href="https://t.me/LawyerMaryamTaheri"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-4 rounded-[16px] bg-luxury-dark/60 border border-luxury-gold/10 hover:border-luxury-gold transition-all duration-300 group text-center"
              >
                <Globe className="w-7 h-7 text-luxury-gold mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-white text-xs font-semibold">ایتا</span>
                <span className="text-gray-500 text-[9px] mt-1 tracking-tight truncate w-full">
                  @MaryamTaheri
                </span>
              </a>
            </div>

            <div className="pt-4 border-t border-luxury-gold/10 text-center">
              <span className="text-xs text-luxury-gold italic font-medium">
                حق، گرفتنی است؛ با دانش و قانون در کنارتان هستیم.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
