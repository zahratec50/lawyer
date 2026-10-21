"use client";

import dynamic from "next/dynamic";
import {
  ArrowDownLeft,
  FileSearch,
  Scale,
  ShieldCheck,
  Users,
} from "lucide-react";

const LegalBalanceScene = dynamic(() => import("./LegalBalanceScene"), {
  ssr: false,
  loading: () => (
    <div
      aria-hidden="true"
      className="h-[280px] animate-pulse sm:h-[360px] lg:h-[440px]"
    />
  ),
});

const values = [
  {
    icon: Scale,
    title: "تخصص حقوقی",
    desc: "تحلیل دقیق پرونده‌ها و انتخاب مسیر قانونی متناسب با شرایط هر موکل.",
  },
  {
    icon: ShieldCheck,
    title: "محرمانگی اطلاعات",
    desc: "حفظ اطلاعات و اسناد موکلان با تعهد حرفه‌ای و اخلاقی.",
  },
  {
    icon: FileSearch,
    title: "بررسی دقیق",
    desc: "مطالعه مدارک و مستندات پیش از هر اقدام حقوقی.",
  },
  {
    icon: Users,
    title: "اعتماد و همراهی",
    desc: "ارتباط شفاف با موکل در تمام مراحل رسیدگی.",
  },
];

export default function AboutLawyer() {
  return (
    <section
      id="about"
      dir="rtl"
      aria-labelledby="about-title"
      className="relative overflow-hidden border-y border-line bg-paper-warm/60 py-8 sm:py-20 lg:py-28"
    >
      <div className="container mx-auto px-5 sm:px-8 lg:px-16">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* Text first on every screen size */}
          <div className="min-w-0">
            <h2
              id="about-title"
              className="max-w-2xl font-display text-3xl font-semibold leading-[1.7] text-ink sm:text-4xl lg:text-[3.25rem]"
            >
              دانش حقوقی، با تعهدی انسانی
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-8 text-ink-soft sm:text-base sm:leading-9">
              هر پرونده حقوقی شرایط و پیچیدگی‌های منحصربه‌فرد خود را دارد.
              دستیابی به بهترین نتیجه نیازمند تحلیل تخصصی، تجربه عملی و انتخاب
              راهکار قانونی مناسب است. هدف، ارائه خدمات حقوقی حرفه‌ای با تمرکز
              بر شفافیت، مسئولیت‌پذیری و دفاع مؤثر از حقوق موکلان است.
            </p>

            <ul className="mt-10 grid gap-x-10 gap-y-7 border-t border-line pt-8 sm:grid-cols-2">
              {values.map(({ icon: Icon, title, desc }) => (
                <li key={title} className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-gold/35 text-primary">
                    <Icon
                      aria-hidden="true"
                      className="h-5 w-5"
                      strokeWidth={1.5}
                    />
                  </span>

                  <div className="min-w-0">
                    <h3 className="text-[15px] font-semibold leading-7 text-ink">
                      {title}
                    </h3>
                    <p className="mt-1 text-[13px] leading-7 text-ink-soft">
                      {desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="group mt-10 inline-flex min-h-12 items-center gap-3 rounded-full bg-primary px-6 text-sm font-medium text-surface transition-colors hover:bg-primary-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              آشنایی بیشتر و درخواست مشاوره
              <ArrowDownLeft
                aria-hidden="true"
                className="h-4 w-4 transition-transform group-hover:-translate-x-1 group-hover:translate-y-1"
              />
            </a>
          </div>

          {/* Scene */}
          <div className="relative order-first mx-auto w-full max-w-lg lg:order-none">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-[15%] rounded-full border border-gold/25"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-[23%] rounded-full border border-gold/15"
            />

            <LegalBalanceScene />

            <p className="relative mx-auto mt-2 flex w-fit items-center gap-3 px-5 py-2 text-xs text-ink-soft">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-gold"
              />
              تعادل میان دانش، دقت و مسئولیت
            </p>
          </div>
        </div>

        {/* Pull quote */}
        <blockquote className="relative mt-16 overflow-hidden rounded-lg md:rounded-4xl bg-burgundy-dark px-6 py-10 sm:mt-20 sm:px-12 sm:py-14 lg:px-20">
          <span
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-px bg-linear-to-l from-gold-light via-gold-light/30 to-transparent"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute top-1 right-5 font-display text-[7rem] leading-none text-gold-light/15 sm:right-10 sm:text-[10rem]"
          >
            ❞
          </span>

          <p className="relative mx-auto max-w-3xl text-center font-display text-xl leading-[2.1] text-paper sm:text-2xl sm:leading-[2.2] lg:text-[1.9rem]">
            دفاع از حقوق موکل تنها یک وظیفه حرفه‌ای نیست؛ مسئولیتی است که بر
            پایه دانش، تعهد و اعتماد شکل می‌گیرد.
          </p>
        </blockquote>
      </div>
    </section>
  );
}
