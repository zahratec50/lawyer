"use client";

import { useState } from "react";
import {
  ArrowLeft,
  BriefcaseBusiness,
  FileSignature,
  Scale,
  Users,
  type LucideIcon,
} from "lucide-react";

type Area = {
  id: string;
  icon: LucideIcon;
  title: string;
  desc: string;
  topics: string[];
};

// `id` values match the topic chips in Contact.tsx
const areas: Area[] = [
  {
    id: "commercial",
    icon: BriefcaseBusiness,
    title: "دعاوی تجاری و شرکت‌ها",
    desc: "تنظیم قراردادهای بین‌المللی، داوری، دعاوی مالکیت فکری و ثبت شرکت‌های تجاری با رویکرد حفظ منافع مالی شما.",
    topics: [
      "قراردادهای بین‌المللی",
      "داوری",
      "مالکیت فکری",
      "ثبت شرکت‌های تجاری",
    ],
  },
  {
    id: "criminal",
    icon: Scale,
    title: "دعاوی کیفری",
    desc: "دفاع حرفه‌ای در پرونده‌های جرایم اقتصادی، کلاهبرداری، جعل اسناد و جرایم سایبری با رعایت استانداردهای حرفه‌ای قضایی.",
    topics: ["جرایم اقتصادی", "کلاهبرداری", "جعل اسناد", "جرایم سایبری"],
  },
  {
    id: "property-family",
    icon: Users,
    title: "دعاوی ملکی و خانواده",
    desc: "حل اختلافات ثبتی، اراضی، سرقفلی، خرید و فروش املاک و ارائه مشاوره تخصصی در امور ارث و خانواده.",
    topics: [
      "اختلافات ثبتی",
      "اراضی",
      "سرقفلی",
      "خرید و فروش املاک",
      "ارث و خانواده",
    ],
  },
  {
    id: "contracts",
    icon: FileSignature,
    title: "قراردادها و اسناد حقوقی",
    desc: "تنظیم، بررسی و اصلاح قراردادها و اسناد حقوقی برای پیشگیری از اختلافات آینده و حفظ حقوق طرفین.",
    topics: [
      "تنظیم قرارداد",
      "بررسی و اصلاح",
      "پیشگیری از اختلاف",
      "حفظ حقوق طرفین",
    ],
  },
];

// function Detail({ area }: { area: Area }) {
//   const Icon = area.icon;

//   const handleConsult = () => {
//     // Pre-selects the topic in the Contact form (see Contact.tsx)
//     window.dispatchEvent(new CustomEvent("consult-topic", { detail: area.id }));
//   };

//   return (
//     <div className="panel-in relative overflow-hidden rounded-3xl bg-primary p-6 text-paper sm:p-8 lg:p-10">
//       <span
//         aria-hidden="true"
//         className="absolute inset-x-0 top-0 h-px bg-linear-to-l from-gold-light via-gold-light/40 to-transparent"
//       />
//       <span
//         aria-hidden="true"
//         className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full border border-gold-light/15"
//       />

//       <Icon
//         aria-hidden="true"
//         className="relative h-8 w-8 text-gold-light"
//         strokeWidth={1.3}
//       />

//       <h3 className="relative mt-5 font-display text-2xl font-semibold leading-relaxed sm:text-3xl">
//         {area.title}
//       </h3>

//       <p className="relative mt-3 max-w-xl text-sm leading-8 text-paper/80 sm:text-base sm:leading-9">
//         {area.desc}
//       </p>

//       <ul className="relative mt-6 flex flex-wrap gap-2">
//         {area.topics.map((topic) => (
//           <li
//             key={topic}
//             className="rounded-full border border-paper/25 px-3.5 py-1.5 text-xs text-paper/90"
//           >
//             {topic}
//           </li>
//         ))}
//       </ul>

//       <a
//         href="#contact"
//         onClick={handleConsult}
//         className="group relative mt-8 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-gold-light transition-colors hover:text-paper focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-light"
//       >
//         درخواست مشاوره در این زمینه
//         <ArrowLeft
//           aria-hidden="true"
//           className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1"
//         />
//       </a>
//     </div>
//   );
// }

function Detail({ area }: { area: Area }) {
  const Icon = area.icon;

  const handleConsult = () => {
    // Pre-selects the topic in the Contact form (see Contact.tsx)
    window.dispatchEvent(new CustomEvent("consult-topic", { detail: area.id }));
  };

  const corners = [
    "-right-[3px] -top-[3px]",
    "-left-[3px] -top-[3px]",
    "-bottom-[3px] -right-[3px]",
    "-bottom-[3px] -left-[3px]",
  ];

  return (
    <div className="panel-in relative isolate flex h-full flex-col overflow-hidden rounded-3xl bg-linear-to-br from-primary via-primary to-burgundy-dark p-3 text-paper shadow-[0_30px_70px_-35px_rgba(72,21,31,0.7)]">
      {/* Light from the corner + oversized watermark */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_100%_0%,rgba(198,167,125,0.22),transparent_52%)]"
      />
      <Icon
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-10 -left-10 -z-10 h-64 w-64 text-gold-light/[0.06] sm:h-80 sm:w-80"
        strokeWidth={0.6}
      />

      {/* Inner frame, like the border of a formal document */}
      <div className="relative flex flex-1 flex-col rounded-[1.35rem] border border-gold-light/25 p-6 sm:p-8 lg:p-10">
        {corners.map((position) => (
          <span
            key={position}
            aria-hidden="true"
            className={`absolute h-1.5 w-1.5 rotate-45 bg-gold-light ${position}`}
          />
        ))}

        {/* Status + medallion */}
        <div className="flex items-center justify-center gap-4">
          <span className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-gold-light/40 bg-burgundy-dark/40 text-gold-light">
            <span
              aria-hidden="true"
              className="absolute inset-1 rounded-full border border-gold-light/20"
            />
            <Icon
              aria-hidden="true"
              className="relative h-6 w-6"
              strokeWidth={1.3}
            />
          </span>
        </div>

        {/* Title + ornamental rule */}
        <h3 className="mt-7 text-center font-display text-3xl font-semibold leading-relaxed sm:text-4xl">
          {area.title}
        </h3>

        <div aria-hidden="true" className="mt-3 flex items-center gap-3">
          <span className="h-px w-16 bg-gold-light" />
          <span className="h-1.5 w-1.5 rotate-45 bg-gold-light" />
          <span className="h-px flex-1 bg-linear-to-l from-gold-light/40 to-transparent" />
        </div>

        <p className="mt-5 max-w-xl text-sm leading-8 text-paper/80 sm:text-base sm:leading-9">
          {area.desc}
        </p>

        {/* Topics, set out like a ledger */}
        <p className="hidden md:block mt-9 text-xs font-medium text-gold-light">
          موضوعات رایج
        </p>

        <ul className="mt-3 hidden md:grid border-t border-paper/10 sm:grid-cols-2 sm:gap-x-10">
          {area.topics.map((topic) => (
            <li
              key={topic}
              className="flex items-center gap-3 border-b border-paper/10 py-3.5 text-sm text-paper/95"
            >
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 shrink-0 rotate-45 border border-gold-light"
              />
              {topic}
            </li>
          ))}
        </ul>

        {/* Action bar */}
        <div className="mt-auto pt-10">
          <div className="flex flex-col gap-4 rounded-2xl border border-gold-light/25 bg-burgundy-dark/35 p-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:p-5">
            <div>
              <p className="text-sm font-semibold text-paper">
                مشاوره در همین حوزه
              </p>
              <p className="mt-1 text-xs leading-6 text-paper/65">
                موضوع به‌صورت خودکار در فرم درخواست انتخاب می‌شود.
              </p>
            </div>

            <a
              href="#contact"
              onClick={handleConsult}
              className="group inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-gold-light px-6 text-sm font-semibold text-burgundy-dark transition-colors hover:bg-paper focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-light"
            >
              درخواست مشاوره
              <ArrowLeft
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Expertise() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeArea = areas[activeIndex];

  return (
    <section
      id="expertise"
      dir="rtl"
      aria-labelledby="expertise-title"
      className="relative isolate overflow-hidden bg-paper py-16 sm:py-24 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-10 -z-10 h-[28rem] w-[28rem] rounded-full bg-gold/5 blur-[100px]"
      />

      <div className="container mx-auto px-5 sm:px-8 lg:px-16">
        <header className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16">
          <h2
            id="expertise-title"
            className="max-w-xl font-display text-3xl font-semibold leading-[1.7] text-ink sm:text-4xl lg:text-[2.9rem]"
          >
            هر پرونده، یک مسیر حقوقی متفاوت.
          </h2>

          <p className="max-w-lg text-sm leading-8 text-ink-soft sm:text-base sm:leading-9">
            ارائه راهکارهای حقوقی مبتنی بر تجربه، دانش و استراتژی‌های حرفه‌ای
            برای دفاع مؤثر از حقوق و منافع موکلان.
          </p>
        </header>

        <div className="mt-10 grid gap-8 sm:mt-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          {/* Index: accordion on mobile, selector on desktop */}
          <div className="min-w-0 border-t border-line">
            {areas.map((area, index) => {
              const Icon = area.icon;
              const isActive = index === activeIndex;
              const panelId = `expertise-panel-${area.id}`;

              return (
                <div
                  key={area.id}
                  className="border-b border-line/50 md:border-none"
                >
                  <button
                    type="button"
                    aria-expanded={isActive}
                    aria-controls={panelId}
                    onClick={() => setActiveIndex(index)}
                    className={`group flex w-full items-center gap-4 py-5 px-5 md:rounded-full text-right transition-colors duration-200 sm:py-6 ${
                      isActive
                        ? "text-primary bg-primary/5"
                        : "text-ink hover:text-primary"
                    }`}
                  >
                    <span
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-md border transition-colors duration-200 ${
                        isActive
                          ? "border-primary bg-primary text-gold-light"
                          : "border-gold/35 text-primary group-hover:border-gold"
                      }`}
                    >
                      <Icon
                        aria-hidden="true"
                        className="h-5 w-5"
                        strokeWidth={1.5}
                      />
                    </span>

                    <span className="flex-1 font-display text-lg font-semibold leading-8 sm:text-xl">
                      {area.title}
                    </span>

                    <ArrowLeft
                      aria-hidden="true"
                      className={`hidden h-5 w-5 shrink-0 text-gold transition-all duration-300 lg:block ${
                        isActive
                          ? "translate-x-0 opacity-100"
                          : "translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-60"
                      }`}
                    />
                  </button>

                  {/* Mobile: panel opens inline under its row */}
                  {isActive && (
                    <div id={panelId} className="pb-6 lg:hidden">
                      <Detail area={area} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Desktop: single panel beside the index */}
          <div
            role="region"
            aria-label={activeArea.title}
            className="hidden lg:sticky lg:top-28 lg:block lg:self-start"
          >
            <Detail key={activeArea.id} area={activeArea} />
          </div>
        </div>
      </div>
    </section>
  );
}
