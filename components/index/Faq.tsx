"use client";

import React, { useState } from "react";
import { Plus, HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "برای شروع مشاوره حقوقی باید چه کار کنم؟",
    a: "کافی است از طریق تماس تلفنی، واتساپ یا تلگرام درخواست خود را ارسال کنید تا هماهنگی جلسه مشاوره، حضوری یا آنلاین، انجام شود.",
  },
  {
    q: "آیا مشاوره و پیگیری پرونده به‌صورت آنلاین هم انجام می‌شود؟",
    a: "بله. علاوه بر مشاوره حضوری در دفتر اصفهان، امکان مشاوره آنلاین و پیگیری پرونده برای موکلان سراسر کشور فراهم است.",
  },
  {
    q: "چه مدارکی برای بررسی اولیه پرونده لازم است؟",
    a: "بسته به نوع پرونده متفاوت است؛ در جلسه اول، فهرست دقیق مدارک لازم متناسب با موضوع پرونده شما اعلام می‌شود.",
  },
  {
    q: "مدت‌زمان رسیدگی به یک پرونده چقدر است؟",
    a: "این زمان به نوع دعوا، مرجع رسیدگی‌کننده و پیچیدگی پرونده بستگی دارد و پس از بررسی اولیه، برآورد واقع‌بینانه‌ای ارائه می‌شود.",
  },
  {
    q: "آیا اطلاعات و مدارک من محرمانه باقی می‌ماند؟",
    a: "بله. رعایت محرمانگی کامل اطلاعات و اسناد موکلان یک تعهد حرفه‌ای و اخلاقی است که در تمام مراحل همکاری رعایت می‌شود.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  return (
    <section
      id="faq"
      dir="rtl"
      className="relative overflow-hidden border-y border-line bg-gradient-to-b from-paper via-paper to-paper-warm py-16 md:py-28"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Golden Glow */}
      <div className="absolute top-0 right-0 h-80 w-80 rounded-full bg-gold-light/10 blur-3xl pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-20">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold-light/10 px-4 py-2 text-sm font-medium text-gold">
            <HelpCircle className="h-4 w-4" />
            پرسش‌های متداول
          </span>

          <h2 className="mt-5 font-display text-3xl font-semibold text-ink md:text-5xl">
            سوالی دارید؟
          </h2>

          <p className="mt-5 text-base leading-8 text-ink-soft">
            پاسخ چند پرسش پرتکرار موکلان درباره روند همکاری، مشاوره و پیگیری
            پرونده‌ها.
          </p>
        </div>

        <div className="mx-auto max-w-3xl space-y-4">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.q}
                className={`
                  overflow-hidden
                  rounded-2xl
                  border
                  transition-all
                  duration-300

                  ${
                    isOpen
                      ? "border-gold/30 bg-paper shadow-[0_18px_45px_rgba(22,32,43,.08)]"
                      : "border-line bg-paper hover:border-gold/20 hover:shadow-lg"
                  }
                `}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between px-6 py-5 text-right"
                >
                  <span className="font-medium text-ink md:text-lg">
                    {item.q}
                  </span>

                  <div
                    className={`
                      flex h-9 w-9 items-center justify-center rounded-full
                      transition-all duration-300

                      ${
                        isOpen
                          ? "bg-gold text-paper rotate-45"
                          : "bg-gold-light/10 text-gold"
                      }
                    `}
                  >
                    <Plus className="h-5 w-5" />
                  </div>
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-line/70 px-6 pb-6 pt-5">
                      <p className="leading-8 text-ink-soft">{item.a}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
