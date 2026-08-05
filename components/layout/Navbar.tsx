"use client";

import React, { useEffect, useState } from "react";
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
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);

    onScroll();

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },

      {
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
      className={`
        sticky
        top-0
        z-50
        transition-all
        duration-300

        ${
          scrolled
            ? `
          bg-paper/90
          backdrop-blur-xl
          shadow-[0_10px_40px_rgba(22,32,43,.06)]
          border-b
          border-line
          `
            : `
          bg-transparent
          border-transparent
          `
        }

      `}
    >
      <nav
        className="
        container
        mx-auto
        flex
        h-16
        items-center
        justify-between
        px-4
        sm:px-6
        lg:h-20
        lg:px-20
      "
      >
        {/* Logo */}

        <a
          href="#"
          className="
            flex
            shrink-0
            items-center
            gap-3
          "
        >
          <Image
            src="/images/logo-photo-circular.png"
            alt="نشان مریم طاهری، وکیل پایه یک دادگستری"
            width={42}
            height={42}
            className="
              rounded-full
              border
              border-gold/20
            "
          />

          <span
            className="
              font-display
              text-base
              font-semibold
              text-ink
              md:text-lg
            "
          >
            مریم طاهری
          </span>
        </a>

        {/* Desktop Menu */}

        <ul
          className="
          hidden
          items-center
          gap-8
          lg:flex
        "
        >
          {links.map((link) => {
            const isActive = active === link.href;

            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={isActive ? "true" : undefined}
                  className={`
                      relative
                      pb-2
                      text-sm
                      transition-colors

                      ${
                        isActive
                          ? `
                        font-semibold
                        text-gold
                        `
                          : `
                        text-ink-soft
                        hover:text-gold
                        `
                      }
                    `}
                >
                  {link.label}

                  <span
                    className={`
                        absolute
                        right-0
                        bottom-0
                        h-[2px]
                        rounded-full
                        bg-gold
                        transition-all
                        duration-300

                        ${isActive ? "w-full" : "w-0"}

                      `}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA */}

        <div
          className="
          hidden
          items-center
          gap-5
          lg:flex
        "
        >
          <a
            href="tel:+989217127727"
            dir="ltr"
            className="
              flex
              items-center
              gap-2
              text-sm
              text-ink-soft
              transition-colors
              hover:text-gold
            "
          >
            <Phone className="h-4 w-4" />

            <span dir="rtl">۰۹۲۱۷۱۲۷۷۲۷</span>
          </a>

          <a
            href="#contact"
            className="
              rounded-full
              bg-primary
              px-6
              py-3
              text-sm
              font-semibold
              text-paper
              transition-all
              hover:bg-primary/90
              hover:shadow-lg
            "
          >
            مشاوره فوری
          </a>
        </div>

        {/* Mobile Button */}

        <button
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "بستن منو" : "باز کردن منو"}
          aria-expanded={open}
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            border
            border-gold/30
            text-primary
            lg:hidden
          "
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile Menu */}

      {open && (
        <div
          className="
              border-t
              border-line
              bg-paper
              lg:hidden
            "
        >
          <ul
            className="
              container
              mx-auto
              flex
              flex-col
              gap-1
              px-4
              py-4
              sm:px-6
            "
          >
            {links.map((link) => {
              const isActive = active === link.href;

              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`
                          block
                          border-b
                          border-line
                          py-3
                          text-sm

                          ${
                            isActive
                              ? `
                            font-semibold
                            text-gold
                            `
                              : `
                            text-ink
                            `
                          }
                        `}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}

            <li className="pt-4">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="
                    block
                    rounded-full
                    bg-primary
                    px-5
                    py-3
                    text-center
                    font-semibold
                    text-paper
                  "
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
