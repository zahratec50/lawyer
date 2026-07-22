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
    <footer dir="rtl" className="bg-ink text-paper/70">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20 py-14 grid gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5">
            <Image
              src="/images/logo-photo-circular.png"
              alt="نشان مریم طاهری، وکیل پایه یک دادگستری"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="font-display text-lg text-paper">مریم طاهری</span>
          </div>
          <p className="mt-4 text-sm leading-7 max-w-xs">
            وکیل پایه یک دادگستری و مشاور حقوقی، همراه شما در تمامی مراحل رسیدگی
            حقوقی و قضایی.
          </p>
        </div>

        <div>
          <h3 className="text-paper font-semibold mb-4 text-sm">دسترسی سریع</h3>
          <ul className="space-y-2.5 text-sm">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="hover:text-[var(--brass-light)] transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-paper font-semibold mb-4 text-sm">
            راه‌های ارتباطی
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 shrink-0" />
              <a
                href="tel:+989217127727"
                className="hover:text-[var(--brass-light)] transition-colors"
                dir="ltr"
              >
                ۰۹۲۱ ۷۱۲ ۷۷۲۷
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 shrink-0" />
              <a
                href="mailto:maryamtaheri1475@gmail.com"
                className="hover:text-[var(--brass-light)] transition-colors break-all"
              >
                maryamtaheri1475@gmail.com
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
              <span>اصفهان، سهروردی، مجتمع زیتون، طبقه اول</span>
            </li>
          </ul>

          <div className="flex items-center gap-4 mt-5">
            <a
              href="https://wa.me/message/LKIGZ6PEI7EZP1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="واتساپ"
              className="hover:text-[var(--brass-light)] transition-colors"
            >
              <AiOutlineWhatsApp className="w-5 h-5" />
            </a>
            <a
              href="https://t.me/LawyerMaryamTaheri"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="تلگرام"
              className="hover:text-[var(--brass-light)] transition-colors"
            >
              <Send className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/maryam-taheri-6a1930266"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="لینکدین"
              className="hover:text-[var(--brass-light)] transition-colors"
            >
              <IoLogoLinkedin className="w-5 h-5" />
            </a>
            <a
              href="https://eitaa.com/LawyerMaryamTaheri"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="ایتا"
              className="hover:text-[var(--brass-light)] transition-colors"
            >
              <Globe className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-xs">
        تمامی حقوق مادی و معنوی این وب‌سایت متعلق به دفتر وکالت مریم طاهری
        می‌باشد © ۱۴۰۵
      </div>
    </footer>
  );
}
