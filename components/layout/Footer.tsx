import Image from "next/image";
import { ArrowUp, Globe, Mail, MapPin, Phone, Send } from "lucide-react";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { IoLogoLinkedin } from "react-icons/io5";

const quickLinks = [
  { href: "#about", label: "درباره من" },
  { href: "#expertise", label: "حوزه‌های تخصصی" },
  { href: "#process", label: "روند همکاری" },
  { href: "#faq", label: "پرسش‌های متداول" },
  { href: "#contact", label: "تماس" },
];

const socials = [
  {
    label: "واتساپ",
    href: "https://wa.me/message/LKIGZ6PEI7EZP1",
    icon: AiOutlineWhatsApp,
  },
  {
    label: "تلگرام",
    href: "https://t.me/LawyerMaryamTaheri",
    icon: Send,
  },
  {
    label: "لینکدین",
    href: "https://www.linkedin.com/in/maryam-taheri-6a1930266",
    icon: IoLogoLinkedin,
  },
  {
    label: "ایتا",
    href: "https://eitaa.com/LawyerMaryamTaheri",
    icon: Globe,
  },
];

const linkClass =
  "transition-colors hover:text-gold-light focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-light";

export default function Footer() {
  return (
    <footer
      dir="rtl"
      className="relative isolate overflow-hidden bg-burgundy-dark text-paper/75"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 -top-24 -z-10 h-72 w-72 rounded-full border border-gold-light/15"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-10 -top-10 -z-10 h-44 w-44 rounded-full border border-gold-light/20"
      />

      <div className="container mx-auto grid gap-12 px-5 py-14 sm:px-8 md:grid-cols-[1.2fr_0.8fr_1fr] lg:px-16 lg:py-16">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo-photo-circular.png"
              alt="نشان مریم طاهری، وکیل پایه یک دادگستری"
              width={48}
              height={48}
              className="rounded-full border border-gold-light/40"
            />
            <div>
              <p className="font-display text-xl font-semibold leading-snug text-paper">
                مریم طاهری
              </p>
              <p className="text-xs leading-5 text-paper/65">
                وکیل پایه یک دادگستری
              </p>
            </div>
          </div>

          <p className="mt-5 max-w-xs text-sm leading-8">
            وکیل پایه یک دادگستری و مشاور حقوقی، همراه شما در تمامی مراحل رسیدگی
            حقوقی و قضایی.
          </p>

          <p className="mt-4 text-xs text-paper/60">
            شماره پروانه وکالت: <span className="tabular-nums">۳۷۰۳۹</span>
          </p>
        </div>

        {/* Quick links */}
        <nav aria-label="دسترسی سریع">
          <h3 className="mb-5 text-sm font-semibold text-paper">دسترسی سریع</h3>

          <ul className="space-y-1 text-sm">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`inline-flex min-h-9 items-center ${linkClass}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}
        <div>
          <h3 className="mb-5 text-sm font-semibold text-paper">
            راه‌های ارتباطی
          </h3>

          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <Phone
                aria-hidden="true"
                className="h-4 w-4 shrink-0 text-gold-light"
              />
              <a
                href="tel:+989217127727"
                dir="ltr"
                className={`tabular-nums ${linkClass}`}
              >
                ۰۹۲۱ ۷۱۲ ۷۷۲۷
              </a>
            </li>

            <li className="flex items-center gap-3">
              <Mail
                aria-hidden="true"
                className="h-4 w-4 shrink-0 text-gold-light"
              />
              <a
                href="mailto:maryamtaheri1475@gmail.com"
                className={`break-all ${linkClass}`}
              >
                maryamtaheri1475@gmail.com
              </a>
            </li>

            <li className="flex items-start gap-3">
              <MapPin
                aria-hidden="true"
                className="mt-1.5 h-4 w-4 shrink-0 text-gold-light"
              />
              <a
                href="https://www.google.com/maps/search/?api=1&query=اصفهان+سهروردی+مجتمع+زیتون"
                target="_blank"
                rel="noopener noreferrer"
                className={`leading-7 ${linkClass}`}
              >
                اصفهان، سهروردی، مجتمع زیتون، طبقه اول
              </a>
            </li>
          </ul>

          <div className="mt-7 flex items-center gap-2">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-paper/20 text-paper/80 transition-colors hover:border-gold-light hover:text-gold-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-light"
              >
                <Icon aria-hidden="true" className="h-[18px] w-[18px]" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar (extra bottom padding on mobile clears the sticky action bar) */}
      <div className="border-t border-paper/10">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-5 pb-24 pt-6 text-center text-xs text-paper/60 sm:px-8 md:flex-row md:text-right lg:px-16 lg:pb-6">
          <p className="leading-7">
            تمامی حقوق مادی و معنوی این وب‌سایت متعلق به دفتر وکالت مریم طاهری
            می‌باشد © ۱۴۰۵
          </p>

          <a
            href="#"
            className="inline-flex min-h-11 items-center gap-2 text-paper/75 transition-colors hover:text-gold-light focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-light"
          >
            بازگشت به بالا
            <ArrowUp aria-hidden="true" className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
