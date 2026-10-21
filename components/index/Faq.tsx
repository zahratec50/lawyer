"use client";

import { useId, useRef, useState, type KeyboardEvent } from "react";
import { Phone, Plus } from "lucide-react";
import { AiOutlineWhatsApp } from "react-icons/ai";

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
  const instanceId = useId();
  const triggers = useRef<(HTMLButtonElement | null)[]>([]);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  // Arrow keys / Home / End move between questions
  const handleKeyDown = (event: KeyboardEvent, index: number) => {
    const last = faqs.length - 1;
    let next: number | null = null;

    if (event.key === "ArrowDown") next = index === last ? 0 : index + 1;
    else if (event.key === "ArrowUp") next = index === 0 ? last : index - 1;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = last;

    if (next !== null) {
      event.preventDefault();
      triggers.current[next]?.focus();
    }
  };

  return (
    <section
      id="faq"
      dir="rtl"
      aria-labelledby={`${instanceId}-title`}
      className="relative isolate overflow-hidden bg-paper py-16 sm:py-24 lg:py-32"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-28 top-20 -z-10 h-80 w-80 rounded-full bg-gold/5 blur-3xl"
      />

      <div className="container mx-auto px-5 sm:px-8 lg:px-16">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          {/* Intro + direct help */}
          <header className="lg:sticky lg:top-32 lg:h-fit">
            <h2
              id={`${instanceId}-title`}
              className="font-display text-3xl font-semibold leading-[1.7] text-ink sm:text-4xl lg:text-[3rem]"
            >
              پیش از تصمیم‌گیری، آگاه باشید.
            </h2>

            <p className="mt-5 max-w-md text-sm leading-8 text-ink-soft sm:text-base sm:leading-9">
              پاسخ پرسش‌های رایج درباره مشاوره حقوقی، روند همکاری و پیگیری
              پرونده‌ها؛ برای شروعی آگاهانه و مطمئن.
            </p>

            <div className="mt-8 hidden border-t border-line pt-6 lg:block">
              <p className="text-sm font-medium text-ink">
                پاسخ پرسش خود را پیدا نکردید؟
              </p>
              <p className="mt-1.5 text-xs leading-6 text-ink-soft">
                برای بررسی شرایط خود، مستقیم پیام بدهید یا تماس بگیرید.
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href="https://wa.me/message/LKIGZ6PEI7EZP1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 rounded-full bg-primary px-5 text-sm font-medium text-surface transition-colors hover:bg-primary-dark"
                >
                  <AiOutlineWhatsApp
                    aria-hidden="true"
                    className="h-4.5 w-4.5"
                  />
                  واتساپ
                </a>
                <a
                  href="tel:+989217127727"
                  className="inline-flex min-h-11 items-center gap-2 rounded-full border border-primary/25 px-5 text-sm font-medium text-primary transition-colors hover:border-primary"
                >
                  <Phone aria-hidden="true" className="h-4 w-4" />
                  تماس
                </a>
              </div>
            </div>
          </header>

          {/* Questions: a ruled list, answers open under their question */}
          <div className="min-w-0 border-t border-line">
            {faqs.map((item, index) => {
              const isOpen = openIndex === index;
              const questionId = `${instanceId}-question-${index}`;
              const answerId = `${instanceId}-answer-${index}`;

              return (
                <article key={item.q} className="group border-b border-line">
                  <h3>
                    <button
                      ref={(el) => {
                        triggers.current[index] = el;
                      }}
                      id={questionId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      onKeyDown={(event) => handleKeyDown(event, index)}
                      className="flex w-full items-start gap-5 py-5 text-right sm:py-6"
                    >
                      <span
                        className={`flex-1 text-[15px] font-medium leading-8 transition-colors duration-200 sm:text-base ${
                          isOpen
                            ? "text-primary"
                            : "text-ink group-hover:text-primary"
                        }`}
                      >
                        {item.q}
                      </span>

                      <span
                        aria-hidden="true"
                        className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                          isOpen
                            ? "rotate-45 border-primary bg-primary text-surface"
                            : "border-line text-ink-soft group-hover:border-gold group-hover:text-gold-deep"
                        }`}
                      >
                        <Plus className="h-4 w-4" strokeWidth={1.6} />
                      </span>
                    </button>
                  </h3>

                  <div
                    id={answerId}
                    role="region"
                    aria-labelledby={questionId}
                    inert={!isOpen}
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="mb-6 ml-14 border-r-2 border-gold/60 pr-5 sm:mb-7">
                        <p className="max-w-xl text-sm leading-9 text-ink-soft sm:text-[15px]">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}

            {/* Mobile help (desktop version lives beside the heading) */}
            <div className="mt-8 lg:hidden">
              <p className="text-sm font-medium text-ink">
                پاسخ پرسش خود را پیدا نکردید؟
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href="https://wa.me/message/LKIGZ6PEI7EZP1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 rounded-full bg-primary px-5 text-sm font-medium text-surface transition-colors hover:bg-primary-dark"
                >
                  <AiOutlineWhatsApp
                    aria-hidden="true"
                    className="h-4.5 w-4.5"
                  />
                  واتساپ
                </a>
                <a
                  href="tel:+989217127727"
                  className="inline-flex min-h-11 items-center gap-2 rounded-full border border-primary/25 px-5 text-sm font-medium text-primary transition-colors hover:border-primary"
                >
                  <Phone aria-hidden="true" className="h-4 w-4" />
                  تماس
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
