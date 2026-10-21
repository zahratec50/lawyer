"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowLeft, MapPin, Menu, Phone, X } from "lucide-react";
import { AiOutlineWhatsApp } from "react-icons/ai";

const links = [
  { href: "#about", label: "درباره من" },
  { href: "#expertise", label: "حوزه‌های تخصصی" },
  { href: "#process", label: "روند همکاری" },
  { href: "#faq", label: "پرسش‌های متداول" },
  { href: "#contact", label: "تماس" },
];

const PHONE_NUMBER = "+989217127727";
const DISPLAY_PHONE = "۰۹۲۱ ۷۱۲ ۷۷۲۷";
const WHATSAPP_URL = "https://wa.me/message/LKIGZ6PEI7EZP1";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const progressRef = useRef<HTMLSpanElement>(null);

  /* Scroll state + reading progress (written straight to the DOM, no re-render) */
  useEffect(() => {
    let ticking = false;

    const update = () => {
      if (ticking) return;
      ticking = true;

      window.requestAnimationFrame(() => {
        const y = window.scrollY;
        setScrolled(y > 12);

        const max = document.documentElement.scrollHeight - window.innerHeight;
        if (progressRef.current) {
          progressRef.current.style.transform = `scaleX(${
            max > 0 ? Math.min(y / max, 1) : 0
          })`;
        }

        ticking = false;
      });
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  /* Active section */
  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter((section): section is HTMLElement => section !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible[0]) setActive(`#${visible[0].target.id}`);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  /* Mobile sheet: Esc to close, lock page scroll, close when resizing to desktop */
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <>
      <header
        dir="rtl"
        className={`sticky top-0 z-50 border-b transition-[background-color,border-color] duration-300 ${
          scrolled || open
            ? "border-line bg-paper/95 backdrop-blur-xl"
            : "border-transparent bg-paper/70 backdrop-blur-md"
        }`}
      >
        <nav
          aria-label="منوی اصلی"
          className={`container mx-auto flex items-center justify-between gap-4 px-4 transition-[height] duration-300 sm:px-6 lg:px-12 xl:px-20 ${
            scrolled ? "h-[72px]" : "h-[72px] lg:h-[88px]"
          }`}
        >
          {/* Brand */}
          <a
            href="#"
            aria-label="مریم طاهری، صفحه اصلی"
            className="group flex shrink-0 items-center gap-3"
            onClick={() => setOpen(false)}
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 bg-surface p-0.5 transition-colors duration-300 group-hover:border-gold sm:h-12 sm:w-12">
              <Image
                src="/images/logo-photo-circular.png"
                alt="نشان مریم طاهری"
                width={48}
                height={48}
                priority
                className="h-full w-full rounded-full object-cover"
              />
            </span>

            <span className="flex flex-col">
              <span className="font-display text-lg font-semibold leading-snug text-ink transition-colors group-hover:text-primary sm:text-xl">
                مریم طاهری
              </span>
              <span className="text-[11px] leading-5 text-ink-soft">
                وکیل پایه یک دادگستری
              </span>
            </span>
          </a>

          {/* Desktop navigation */}
          <ul className="hidden items-center gap-1 lg:flex xl:gap-3">
            {links.map((link) => {
              const isActive = active === link.href;

              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={isActive ? "location" : undefined}
                    className={`group relative block px-3 py-2.5 text-sm transition-colors duration-200 ${
                      isActive
                        ? "font-semibold text-primary"
                        : "text-ink-soft hover:text-primary"
                    }`}
                  >
                    {link.label}
                    <span
                      aria-hidden="true"
                      className={`absolute inset-x-3 bottom-0.5 h-px origin-right bg-gold transition-transform duration-300 ${
                        isActive
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Desktop actions */}
          <div className="hidden shrink-0 items-center gap-3 lg:flex">
            <a
              href={`tel:${PHONE_NUMBER}`}
              aria-label={`تماس با شماره ${DISPLAY_PHONE}`}
              className="hidden items-center gap-2 px-2 py-2 text-sm font-medium tabular-nums text-ink transition-colors hover:text-primary xl:flex"
            >
              <span dir="ltr">{DISPLAY_PHONE}</span>
              <Phone aria-hidden="true" className="h-4 w-4 text-gold-deep" />
            </a>

            <a
              href="#contact"
              className="group inline-flex min-h-11 items-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-surface transition-colors duration-300 hover:bg-primary-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              درخواست مشاوره
              <ArrowLeft
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1"
              />
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "بستن منو" : "باز کردن منو"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line text-primary transition-colors hover:border-gold lg:hidden"
          >
            {open ? (
              <X aria-hidden="true" className="h-5 w-5" />
            ) : (
              <Menu aria-hidden="true" className="h-5 w-5" />
            )}
          </button>
        </nav>

        {/* Reading progress */}
        <span
          ref={progressRef}
          aria-hidden="true"
          className="absolute inset-x-0 -bottom-px h-0.5 origin-right scale-x-0 bg-gold"
        />
      </header>

      {/* Mobile sheet (sibling of header so backdrop-blur can't trap it) */}
      <div
        id="mobile-navigation"
        dir="rtl"
        inert={!open}
        aria-hidden={!open}
        className={`fixed inset-x-0 bottom-0 top-[72px] z-40 overflow-y-auto bg-paper transition-[opacity,visibility] duration-300 lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="mx-auto flex min-h-full max-w-xl flex-col px-5 pb-8 pt-4">
          <ul>
            {links.map((link) => {
              const isActive = active === link.href;

              return (
                <li key={link.href} className="border-b border-line">
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    aria-current={isActive ? "location" : undefined}
                    className={`flex min-h-16 items-center gap-4 font-display text-2xl transition-colors ${
                      isActive ? "text-primary" : "text-ink hover:text-primary"
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className={`h-6 w-0.5 transition-colors ${
                        isActive ? "bg-gold" : "bg-transparent"
                      }`}
                    />
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="mt-auto grid gap-3 pt-10">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex min-h-14 items-center justify-center gap-3 rounded-full bg-primary text-sm font-semibold text-surface transition-colors hover:bg-primary-dark"
            >
              <AiOutlineWhatsApp aria-hidden="true" className="h-5 w-5" />
              شروع مشاوره در واتساپ
            </a>

            <a
              href={`tel:${PHONE_NUMBER}`}
              onClick={() => setOpen(false)}
              className="flex min-h-14 items-center justify-center gap-3 rounded-full border border-primary/25 text-sm font-medium text-primary transition-colors hover:border-primary"
            >
              <Phone aria-hidden="true" className="h-4 w-4" />
              <span dir="ltr" className="tabular-nums">
                {DISPLAY_PHONE}
              </span>
            </a>

            <p className="mt-4 flex items-center justify-center gap-2 text-xs text-ink-soft">
              <MapPin
                aria-hidden="true"
                className="h-3.5 w-3.5 text-gold-deep"
              />
              اصفهان، سهروردی، مجتمع زیتون
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
