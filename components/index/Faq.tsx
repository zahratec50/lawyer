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
      className="relative py-16 md:py-28 bg-paper-warm/50 border-y border-line"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-burgundy-red/20 bg-burgundy-deep/10 text-burgundy-red text-xs md:text-sm font-medium">
            <HelpCircle className="w-4 h-4" />
            پرسش‌های متداول
          </span>

          <h2 className="mt-5 font-display text-2xl sm:text-3xl md:text-5xl font-semibold text-ink">
            سوالی دارید؟
          </h2>

          <p className="mt-5 text-sm md:text-lg text-ink-soft leading-7 md:leading-8">
            پاسخ چند پرسش پرتکرار موکلان درباره روند همکاری.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.q}
                className="rounded-[10px] border border-line bg-white overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 text-right px-5 py-4 md:px-6 md:py-5"
                >
                  <span className="font-medium text-ink text-sm md:text-base">
                    {item.q}
                  </span>
                  <Plus
                    className={`w-5 h-5 text-burgundy shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 md:px-6 md:pb-6 text-sm md:text-base text-ink-soft leading-7">
                      {item.a}
                    </p>
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
