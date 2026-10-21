"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  Compass,
  FileSearch,
  FileText,
  MessageSquareText,
  RefreshCw,
  Scale,
} from "lucide-react";

// This content IS a sequence, so numbered steps and a connecting line are
// meaningful here (unlike in the other sections).
const steps = [
  {
    title: "بررسی اولیه پرونده",
    desc: "مطالعه مدارک و ارزیابی شرایط حقوقی برای تعیین مسیر مناسب.",
    icon: FileSearch,
  },
  {
    title: "ارائه استراتژی حقوقی",
    desc: "انتخاب راهکار حقوقی متناسب با شرایط و اهداف پرونده.",
    icon: Compass,
  },
  {
    title: "تنظیم اسناد و لوایح",
    desc: "تهیه دادخواست‌ها، لوایح، قراردادها و اسناد موردنیاز.",
    icon: FileText,
  },
  {
    title: "پیگیری مستمر",
    desc: "پیگیری مراحل رسیدگی و بررسی آخرین وضعیت پرونده.",
    icon: RefreshCw,
  },
  {
    title: "گزارش‌دهی شفاف",
    desc: "ارائه گزارش از روند پرونده و پاسخگویی به پرسش‌های موکل.",
    icon: MessageSquareText,
  },
  {
    title: "دفاع از حقوق موکل",
    desc: "دفاع مسئولانه از حقوق و منافع قانونی موکل در مسیر رسیدگی.",
    icon: Scale,
  },
];

const persianDigits = ["۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

export default function MyJob() {
  const listRef = useRef<HTMLOListElement>(null);
  const [reached, setReached] = useState(-1);

  // A step lights up once it passes ~60% of the viewport height
  useEffect(() => {
    const list = listRef.current;
    if (!list) return;

    const items = Array.from(list.children) as HTMLElement[];
    let ticking = false;

    const update = () => {
      if (ticking) return;
      ticking = true;

      window.requestAnimationFrame(() => {
        const line = window.innerHeight * 0.6;
        let index = -1;

        items.forEach((item, i) => {
          if (item.getBoundingClientRect().top < line) index = i;
        });

        setReached(index);
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

  return (
    <section
      id="process"
      dir="rtl"
      aria-labelledby="process-title"
      className="relative isolate overflow-hidden bg-burgundy-dark py-16 text-paper sm:py-24 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -right-32 -top-40 h-96 w-96 rounded-full bg-gold-light/[0.06] blur-[110px]" />
        <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-primary/30 blur-[110px]" />
      </div>

      <div className="container mx-auto px-5 sm:px-8 lg:px-16">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          {/* Intro */}
          <div className="lg:sticky lg:top-32 lg:h-fit">
            <h2
              id="process-title"
              className="font-display text-3xl font-semibold leading-[1.7] sm:text-4xl lg:text-[2.9rem]"
            >
              از بررسی تا پیگیری
            </h2>

            <p className="mt-5 max-w-md text-sm leading-8 text-paper/70 sm:text-base sm:leading-9">
              مسیر رسیدگی به هر پرونده با بررسی دقیق شرایط و انتخاب اقدامات
              متناسب با آن مشخص می‌شود.
            </p>

            <div className="mt-8 hidden border-t border-paper/15 pt-6 lg:block">
              <p className="text-sm leading-7 text-paper/65">
                برای آگاهی از مسیر مناسب پرونده خود، شرایط را مطرح کنید.
              </p>

              <a
                href="#contact"
                className="group mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-gold-light transition-colors hover:text-paper focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-light"
              >
                برای بررسی شرایط پرونده تماس بگیرید
                <ArrowLeft
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1"
                />
              </a>
            </div>
          </div>

          {/* Timeline */}
          <ol ref={listRef} className="min-w-0">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isReached = index <= reached;
              const isLast = index === steps.length - 1;

              return (
                <li
                  key={step.title}
                  className="relative flex gap-5 pb-10 last:pb-0 sm:gap-6"
                >
                  {/* Connector to the next step */}
                  {!isLast && (
                    <span
                      aria-hidden="true"
                      className="absolute bottom-0 right-[19.5px] top-10 w-px bg-paper/15"
                    >
                      <span
                        className={`absolute inset-0 origin-top bg-gold-light transition-transform duration-700 ease-out ${
                          index < reached ? "scale-y-100" : "scale-y-0"
                        }`}
                      />
                    </span>
                  )}

                  {/* Node */}
                  <span
                    aria-hidden="true"
                    className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border font-display text-lg font-semibold transition-colors duration-500 ${
                      isReached
                        ? "border-gold-light bg-gold-light text-burgundy-dark"
                        : "border-paper/25 bg-burgundy-dark text-paper/60"
                    }`}
                  >
                    {persianDigits[index]}
                  </span>

                  {/* Content */}
                  <div className="min-w-0 flex-1 pt-1">
                    <div className="flex items-center gap-2.5">
                      <Icon
                        aria-hidden="true"
                        className="h-4 w-4 shrink-0 text-gold-light/70"
                        strokeWidth={1.5}
                      />
                      <h3
                        className={`font-display text-lg font-semibold leading-8 transition-colors duration-500 sm:text-xl ${
                          isReached ? "text-paper" : "text-paper/70"
                        }`}
                      >
                        <span className="sr-only">
                          مرحله {persianDigits[index]}:{" "}
                        </span>
                        {step.title}
                      </h3>
                    </div>

                    <p className="mt-1.5 max-w-md text-sm leading-8 text-paper/70">
                      {step.desc}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>

          {/* Mobile closing action */}
          <div className="border-t border-paper/15 pt-6 lg:hidden">
            <p className="text-sm leading-7 text-paper/65">
              برای آگاهی از مسیر مناسب پرونده خود، شرایط را مطرح کنید.
            </p>

            <a
              href="#contact"
              className="group mt-3 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-gold-light transition-colors hover:text-paper focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-light"
            >
              برای بررسی شرایط پرونده تماس بگیرید
              <ArrowLeft
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
