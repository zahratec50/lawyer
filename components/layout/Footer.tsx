import React from "react";
import { Phone, Mail, MapPin, Send, Globe } from "lucide-react";

import { AiOutlineWhatsApp } from "react-icons/ai";

import { IoLogoLinkedin } from "react-icons/io5";

import Image from "next/image";

const quickLinks = [
  { href: "#about", label: "درباره من" },
  { href: "#expertise", label: "حوزه‌های تخصصی" },
  { href: "#process", label: "روند همکاری" },
  { href: "#faq", label: "پرسش‌های متداول" },
  { href: "#contact", label: "تماس" },
];

export default function Footer() {
  return (
    <footer
      dir="rtl"
      className="
        relative
        overflow-hidden
        bg-primary
        text-paper/70
      "
    >
      {/* subtle gold glow */}

      <div
        className="
          absolute
          left-0
          top-0
          h-72
          w-72
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
          grid
          gap-12
          px-4
          py-14
          sm:px-6
          md:grid-cols-3
          lg:px-20
        "
      >
        {/* Brand */}

        <div>
          <div
            className="
              flex
              items-center
              gap-3
            "
          >
            <Image
              src="/images/logo-photo-circular.png"
              alt="نشان مریم طاهری، وکیل پایه یک دادگستری"
              width={44}
              height={44}
              className="
                rounded-full
                border
                border-gold/40
              "
            />

            <span
              className="
                font-display
                text-lg
                text-paper
              "
            >
              مریم طاهری
            </span>
          </div>

          <p
            className="
              mt-5
              max-w-xs
              text-sm
              leading-8
            "
          >
            وکیل پایه یک دادگستری و مشاور حقوقی، همراه شما در تمامی مراحل رسیدگی
            حقوقی و قضایی.
          </p>
        </div>

        {/* Quick Links */}

        <div>
          <h3
            className="
              mb-5
              text-sm
              font-semibold
              text-paper
            "
          >
            دسترسی سریع
          </h3>

          <ul
            className="
            space-y-3
            text-sm
          "
          >
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="
                      transition-colors
                      hover:text-gold-light
                    "
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}

        <div>
          <h3
            className="
              mb-5
              text-sm
              font-semibold
              text-paper
            "
          >
            راه‌های ارتباطی
          </h3>

          <ul
            className="
              space-y-4
              text-sm
            "
          >
            <li
              className="
                flex
                items-center
                gap-3
              "
            >
              <Phone
                className="
                  h-4
                  w-4
                  text-gold-light
                "
              />

              <a
                href="tel:+989217127727"
                dir="ltr"
                className="
                  transition-colors
                  hover:text-gold-light
                "
              >
                ۰۹۲۱ ۷۱۲ ۷۷۲۷
              </a>
            </li>

            <li
              className="
                flex
                items-center
                gap-3
              "
            >
              <Mail
                className="
                  h-4
                  w-4
                  text-gold-light
                "
              />

              <a
                href="mailto:maryamtaheri1475@gmail.com"
                className="
                  break-all
                  transition-colors
                  hover:text-gold-light
                "
              >
                maryamtaheri1475@gmail.com
              </a>
            </li>

            <li
              className="
                flex
                items-start
                gap-3
              "
            >
              <MapPin
                className="
                  mt-1
                  h-4
                  w-4
                  shrink-0
                  text-gold-light
                "
              />

              <span>اصفهان، سهروردی، مجتمع زیتون، طبقه اول</span>
            </li>
          </ul>

          {/* Social */}

          <div
            className="
              mt-7
              flex
              items-center
              gap-5
            "
          >
            <a
              href="https://wa.me/message/LKIGZ6PEI7EZP1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="واتساپ"
              className="
                transition-colors
                hover:text-gold-light
              "
            >
              <AiOutlineWhatsApp
                className="
                  h-5
                  w-5
                "
              />
            </a>

            <a
              href="https://t.me/LawyerMaryamTaheri"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="تلگرام"
              className="
                transition-colors
                hover:text-gold-light
              "
            >
              <Send className="h-4 w-4" />
            </a>

            <a
              href="https://www.linkedin.com/in/maryam-taheri-6a1930266"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="لینکدین"
              className="
                transition-colors
                hover:text-gold-light
              "
            >
              <IoLogoLinkedin
                className="
                  h-5
                  w-5
                "
              />
            </a>

            <a
              href="https://eitaa.com/LawyerMaryamTaheri"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="ایتا"
              className="
                transition-colors
                hover:text-gold-light
              "
            >
              <Globe className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}

      <div
        className="
          border-t
          border-white/10
          py-6
          text-center
          text-xs
          text-paper/50
        "
      >
        تمامی حقوق مادی و معنوی این وب‌سایت متعلق به دفتر وکالت مریم طاهری
        می‌باشد © ۱۴۰۵
      </div>
    </footer>
  );
}
