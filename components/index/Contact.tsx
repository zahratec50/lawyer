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
    <section
      id="contact"
      dir="rtl"
      className="
        relative
        overflow-hidden
        bg-gradient-to-b
        from-paper
        to-paper-warm
        py-16
        md:py-28
      "
    >
      {/* Glow */}

      <div
        className="
        absolute
        left-0
        top-20
        h-96
        w-96
        rounded-full
        bg-gold-light/10
        blur-3xl
        pointer-events-none
      "
      />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-20">
        {/* Header */}

        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span
            className="
            inline-flex
            items-center
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
            ارتباط با وکیل
          </span>

          <h2
            className="
            mt-5
            font-display
            text-3xl
            font-semibold
            text-ink
            md:text-5xl
          "
          >
            تماس با مریم طاهری
          </h2>

          <p
            className="
            mt-5
            text-base
            leading-8
            text-ink-soft
          "
          >
            برای دریافت مشاوره حقوقی، بررسی پرونده و ارتباط مستقیم در تماس
            باشید.
          </p>
        </div>

        {/* Main Card */}

        <div
          className="
          mx-auto
          max-w-6xl
          overflow-hidden
          rounded-3xl
          border
          border-line
          bg-paper
          shadow-[0_30px_80px_rgba(22,32,43,.08)]
        "
        >
          <div className="grid lg:grid-cols-2">
            {/* Information */}

            <div className="p-6 sm:p-8 md:p-10">
              <h3
                className="
                mb-7
                text-sm
                font-semibold
                text-ink-soft
              "
              >
                راه‌های ارتباطی
              </h3>

              <div className="grid gap-7 sm:grid-cols-2">
                {infoRows.map((row) => (
                  <div key={row.label} className="flex gap-4">
                    <div
                      className="
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-primary/5
                    "
                    >
                      <row.icon className="h-5 w-5 text-gold" />
                    </div>

                    <div className="min-w-0">
                      <h4
                        className="
                        text-sm
                        font-semibold
                        text-ink
                      "
                      >
                        {row.label}
                      </h4>

                      {row.href ? (
                        <a
                          href={row.href}
                          dir={row.ltr ? "ltr" : undefined}
                          className="
                              mt-1
                              block
                              break-all
                              text-sm
                              text-ink-soft
                              transition-colors
                              hover:text-gold
                            "
                        >
                          {row.value}
                        </a>
                      ) : (
                        <p
                          className="
                            mt-1
                            text-sm
                            leading-7
                            text-ink-soft
                          "
                        >
                          {row.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map */}

              <a
                href="https://www.google.com/maps/search/?api=1&query=اصفهان+سهروردی+مجتمع+زیتون"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  mt-9
                  flex
                  items-center
                  justify-between
                  rounded-xl
                  border
                  border-line
                  bg-paper-warm/60
                  px-5
                  py-4
                  transition-all
                  hover:border-gold/40
                "
              >
                <span
                  className="
                  flex
                  items-center
                  gap-2
                  text-sm
                  font-medium
                  text-ink
                "
                >
                  <MapPin className="h-4 w-4 text-gold" />
                  مشاهده مسیر دفتر در Google Maps
                </span>

                <ArrowUpLeft
                  className="
                    h-4
                    w-4
                    text-gold
                    transition-transform
                    group-hover:-translate-y-1
                    group-hover:translate-x-1
                  "
                />
              </a>
            </div>

            {/* CTA */}

            <div
              className="
              flex
              flex-col
              justify-center
              bg-primary
              p-6
              sm:p-8
              md:p-10
            "
            >
              <span
                className="
                w-fit
                rounded-full
                border
                border-gold/30
                bg-white/5
                px-3
                py-1.5
                text-xs
                text-gold-light
              "
              >
                مشاوره تخصصی حقوقی
              </span>

              <h3
                className="
                mt-5
                font-display
                text-2xl
                font-semibold
                leading-tight
                text-paper
                md:text-3xl
              "
              >
                پرونده شما نیاز به
                <span
                  className="
                  mt-2
                  block
                  text-gold-light
                "
                >
                  بررسی تخصصی دارد؟
                </span>
              </h3>

              <p
                className="
                mt-5
                leading-8
                text-paper/70
              "
              >
                پیش از هر اقدام حقوقی، پرونده شما با دقت بررسی شده و مناسب‌ترین
                راهکار قانونی ارائه خواهد شد.
              </p>

              {/* Whatsapp */}

              <a
                href="https://wa.me/message/LKIGZ6PEI7EZP1"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  mt-7
                  flex
                  items-center
                  justify-between
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  px-5
                  py-4
                  transition-all
                  hover:bg-white/10
                "
              >
                <div className="flex items-center gap-4">
                  <div
                    className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-xl
                    bg-white/10
                  "
                  >
                    <AiOutlineWhatsApp
                      className="
                      h-6
                      w-6
                      text-gold-light
                    "
                    />
                  </div>

                  <div>
                    <p
                      className="
                      text-sm
                      font-semibold
                      text-paper
                    "
                    >
                      شروع مشاوره در واتساپ
                    </p>

                    <p
                      className="
                      mt-1
                      text-xs
                      text-paper/50
                    "
                    >
                      پاسخگویی در کوتاه‌ترین زمان ممکن
                    </p>
                  </div>
                </div>

                <ArrowUpLeft
                  className="
                  h-5
                  w-5
                  text-gold-light
                  transition-transform
                  group-hover:-translate-y-1
                  group-hover:translate-x-1
                "
                />
              </a>

              <div
                className="
                my-7
                h-px
                bg-white/10
              "
              />

              <div className="flex flex-wrap gap-6">
                <a
                  href="https://t.me/LawyerMaryamTaheri"
                  className="flex items-center gap-2 text-sm text-paper/60 hover:text-gold-light"
                >
                  <Send className="h-4 w-4" />
                  تلگرام
                </a>

                <a
                  href="https://www.linkedin.com/in/maryam-taheri-6a1930266"
                  className="flex items-center gap-2 text-sm text-paper/60 hover:text-gold-light"
                >
                  <IoLogoLinkedin className="h-4 w-4" />
                  لینکدین
                </a>

                <a
                  href="https://eitaa.com/LawyerMaryamTaheri"
                  className="flex items-center gap-2 text-sm text-paper/60 hover:text-gold-light"
                >
                  <Globe className="h-4 w-4" />
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
