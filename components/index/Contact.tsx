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

const infoRows = [
  {
    icon: Phone,
    label: "شماره تماس",
    value: "۰۹۲۱ ۷۱۲ ۷۷۲۷",
    href: "tel:+989217127727",
    ltr: true,
  },
  {
    icon: Mail,
    label: "پست الکترونیک",
    value: "maryamtaheri1475@gmail.com",
    href: "mailto:maryamtaheri1475@gmail.com",
  },
  {
    icon: MapPin,
    label: "آدرس دفتر",
    value: "اصفهان، سهروردی، مجتمع زیتون، طبقه اول",
  },
  {
    icon: Clock,
    label: "ساعات پاسخگویی",
    value: "شنبه تا پنجشنبه، ۹ صبح تا ۸ شب",
  },
];

export default function Contact() {
  return (
    <section id="contact" dir="rtl" className="relative py-16 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="inline-flex items-center px-4 py-2 rounded-full border border-burgundy-red/20 bg-burgundy-deep/10 text-burgundy-red text-xs md:text-sm font-medium">
            ارتباط با وکیل
          </span>

          <h2 className="mt-5 font-display text-3xl md:text-5xl font-semibold text-ink">
            تماس با مریم طاهری
          </h2>

          <p className="mt-5 text-sm md:text-lg text-ink-soft leading-8">
            برای دریافت مشاوره حقوقی، بررسی پرونده و ارتباط مستقیم در تماس
            باشید.
          </p>
        </div>

        {/* Single unified card holding everything */}
        <div className="max-w-6xl mx-auto rounded-[20px] border border-line bg-white shadow-sm overflow-hidden">
          <div className="grid lg:flex ">
            {/* Info column */}
            <div className="lg:col-span-6 p-6 sm:p-8 md:p-10">
              <h3 className="text-sm font-semibold text-ink-soft mb-6">
                راه‌های ارتباطی
              </h3>

              <div className="grid sm:grid-cols-2  gap-6 sm:gap-8">
                {infoRows.map((row) => (
                  <div key={row.label} className="flex gap-3.5">
                    <div className="w-11 h-11 rounded-[10px] bg-burgundy-tint/70 flex items-center justify-center shrink-0">
                      <row.icon className="w-5 h-5 text-burgundy" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-semibold text-ink text-sm">
                        {row.label}
                      </h4>
                      {row.href ? (
                        <a
                          href={row.href}
                          dir={row.ltr ? "ltr" : undefined}
                          className="text-ink-soft text-sm hover:text-burgundy-red/70 transition-colors break-all block mt-0.5"
                        >
                          {row.value}
                        </a>
                      ) : (
                        <p className="text-ink-soft text-sm leading-6 mt-0.5">
                          {row.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map link — same card, quieter presentation */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=اصفهان+سهروردی+مجتمع+زیتون"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-8 flex items-center justify-between gap-3 rounded-[12px] border border-line bg-paper-warm/60 px-5 py-4 hover:border-burgundy/30 transition-colors"
              >
                <span className="flex items-center gap-2 text-sm font-medium text-ink">
                  <MapPin className="w-4 h-4 text-burgundy" />
                  مشاهده مسیر دفتر در Google Maps
                </span>
                <ArrowUpLeft className="w-4 h-4 text-burgundy transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>

            {/* Divider: horizontal on mobile, vertical on desktop */}
            <div className="border-t lg:border-t-0 lg:border-r border-line" />

            {/* CTA column */}
            <div className="lg:col-span-6 bg-burgundy-red p-6 sm:p-8 md:p-10 flex flex-col justify-center">
              <span className="inline-flex w-fit items-center rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-[var(--brass-light)]">
                مشاوره تخصصی حقوقی
              </span>

              <h3 className="mt-5 font-display text-xl sm:text-2xl md:text-3xl font-semibold leading-tight text-paper">
                پرونده شما نیاز به
                <span className="block mt-1 text-brass-light">
                  بررسی تخصصی دارد؟
                </span>
              </h3>

              <p className="mt-4 text-sm md:text-base leading-7 text-paper/65">
                پیش از هر اقدام حقوقی، پرونده شما با دقت بررسی شده و مناسب‌ترین
                راهکار قانونی ارائه خواهد شد.
              </p>

              <a
                href="https://wa.me/message/LKIGZ6PEI7EZP1"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center justify-between rounded-[12px] border border-white/10 bg-ink/30 px-5 py-4 group transition-all duration-300 hover:bg-white/10"
              >
                <div className="flex items-center gap-3.5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-[10px] bg-white/10 shrink-0">
                    <AiOutlineWhatsApp className="w-6 h-6 text-brass-light" />
                  </div>
                  <div>
                    <p className="font-semibold text-paper text-sm">
                      شروع مشاوره در واتساپ
                    </p>
                    <p className="text-xs text-paper/50">
                      پاسخگویی در کوتاه‌ترین زمان ممکن
                    </p>
                  </div>
                </div>
                <ArrowUpLeft className="h-5 w-5 text-[var(--brass-light)] shrink-0 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
              </a>

              <div className="my-7 h-px bg-white/10" />

              <div className="flex flex-wrap items-center gap-6">
                <a
                  href="https://t.me/LawyerMaryamTaheri"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-paper/60 hover:text-[var(--brass-light)] transition-colors"
                >
                  <Send className="w-4 h-4" />
                  تلگرام
                </a>
                <a
                  href="https://www.linkedin.com/in/maryam-taheri-6a1930266"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-paper/60 hover:text-[var(--brass-light)] transition-colors"
                >
                  <IoLogoLinkedin className="w-4 h-4" />
                  لینکدین
                </a>
                <a
                  href="https://eitaa.com/LawyerMaryamTaheri"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-paper/60 hover:text-[var(--brass-light)] transition-colors"
                >
                  <Globe className="w-4 h-4" />
                  ایتا
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
