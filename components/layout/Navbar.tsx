"use client";

import React, { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";
import Image from "next/image";

const links = [
  { href: "#about", label: "درباره من" },
  { href: "#expertise", label: "حوزه‌های تخصصی" },
  { href: "#process", label: "روند همکاری" },
  { href: "#faq", label: "پرسش‌های متداول" },
  { href: "#contact", label: "تماس" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      {
        // treat the section as "current" once it crosses a band near the
        // top of the viewport (just below the sticky navbar)
        rootMargin: "-45% 0px -50% 0px",
        threshold: 0,
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      dir="rtl"
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-line/50 backdrop-blur-md shadow-sm border-b border-line"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-20 flex items-center justify-between h-16 md:h-20">
        <a href="#" className="flex items-center gap-2.5 shrink-0">
          <Image
            src="/images/logo-photo-circular.png"
            alt="نشان مریم طاهری، وکیل پایه یک دادگستری"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="font-display font-semibold text-base md:text-lg text-ink">
            مریم طاهری
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {links.map((l) => {
            const isActive = active === l.href;
            return (
              <li key={l.href}>
                <a
                  href={l.href}
                  aria-current={isActive ? "true" : undefined}
                  className={`relative text-sm transition-colors pb-1 ${
                    isActive
                      ? "text-luxury-dark font-semibold"
                      : "text-ink-soft hover:text-luxury-dark2"
                  }`}
                >
                  {l.label}
                  <span
                    className={`absolute right-0 -bottom-0.5 h-[2px] rounded-full bg-luxury-navy transition-all duration-300 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+989217127727"
            className="flex items-center gap-2 text-sm text-ink-soft hover:text-luxury-dark2 transition-colors"
            dir="ltr"
          >
            <Phone className="w-4 h-4" />
            <span dir="rtl">۰۹۲۱۷۱۲۷۷۲۷</span>
          </a>
          <a
            href="#contact"
            className="rounded-full bg-burgundy-red text-paper text-sm font-semibold px-5 py-2.5 hover:bg-burgundy-deep transition-colors"
          >
            مشاوره فوری
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "بستن منو" : "باز کردن منو"}
          aria-expanded={open}
          className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full border border-line text-line"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-line bg-paper">
          <ul className="container mx-auto px-4 sm:px-6 py-4 flex flex-col gap-1">
            {links.map((l) => {
              const isActive = active === l.href;
              return (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    aria-current={isActive ? "true" : undefined}
                    className={`block py-3 border-b border-line last:border-0 transition-colors ${
                      isActive ? "text-burgundy font-semibold" : "text-ink"
                    }`}
                  >
                    {l.label}
                  </a>
                </li>
              );
            })}
            <li className="pt-4">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block text-center rounded-full bg-burgundy-red hover:bg-burgundy-deep text-paper font-semibold px-5 py-3"
              >
                مشاوره فوری
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
