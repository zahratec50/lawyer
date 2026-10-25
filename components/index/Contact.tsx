"use client";

import { useEffect, useId, useState } from "react";
import {
  ArrowUpLeft,
  Clock3,
  Globe,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { IoLogoLinkedin } from "react-icons/io5";

// NOTE: wa.me/<number>?text=... is used so the message arrives pre-filled.
// Make sure this is the same number as your WhatsApp account.
const WHATSAPP_NUMBER = "989217127727";

// `id` values match the areas in Expertise.tsx
const topics = [
  { id: "commercial", label: "دعاوی تجاری و شرکت‌ها" },
  { id: "criminal", label: "دعاوی کیفری" },
  { id: "property-family", label: "دعاوی ملکی و خانواده" },
  { id: "contracts", label: "قرارداد و اسناد" },
  { id: "other", label: "موضوع دیگر" },
];

const modes = [
  { id: "online", label: "آنلاین" },
  { id: "in-person", label: "حضوری در اصفهان" },
];

const contactItems = [
  {
    id: "phone",
    icon: Phone,
    label: "شماره تماس",
    value: "۰۹۲۱ ۷۱۲ ۷۷۲۷",
    href: "tel:+989217127727",
    direction: "ltr" as const,
  },
  {
    id: "email",
    icon: Mail,
    label: "پست الکترونیک",
    value: "maryamtaheri1475@gmail.com",
    href: "mailto:maryamtaheri1475@gmail.com",
    direction: "ltr" as const,
  },
  {
    id: "address",
    icon: MapPin,
    label: "آدرس دفتر",
    value: "اصفهان، سهروردی، مجتمع زیتون، طبقه اول",
    href: "https://www.google.com/maps/search/?api=1&query=اصفهان+سهروردی+مجتمع+زیتون",
    direction: "rtl" as const,
  },
  {
    id: "hours",
    icon: Clock3,
    label: "ساعات پاسخگویی",
    value: "شنبه تا پنجشنبه، ۹ صبح تا ۸ شب",
    direction: "rtl" as const,
  },
];

const socialLinks = [
  { label: "تلگرام", href: "https://t.me/LawyerMaryamTaheri", icon: Send },
  {
    label: "لینکدین",
    href: "https://www.linkedin.com/in/maryam-taheri-6a1930266",
    icon: IoLogoLinkedin,
  },
  { label: "ایتا", href: "https://eitaa.com/LawyerMaryamTaheri", icon: Globe },
];

const MAX_NOTE = 400;

export default function Contact() {
  const uid = useId();
  const [topic, setTopic] = useState("");
  const [mode, setMode] = useState("online");
  const [note, setNote] = useState("");

  // Expertise.tsx dispatches this when someone asks for a consultation
  // on a specific area, so the form arrives pre-filled.
  useEffect(() => {
    const onTopic = (event: Event) => {
      const id = (event as CustomEvent<string>).detail;
      if (topics.some((t) => t.id === id)) setTopic(id);
    };

    window.addEventListener("consult-topic", onTopic);
    return () => window.removeEventListener("consult-topic", onTopic);
  }, []);

  const buildWhatsAppHref = () => {
    const topicLabel = topics.find((t) => t.id === topic)?.label;
    const modeLabel = modes.find((m) => m.id === mode)?.label;

    const lines = [
      "سلام خانم طاهری، وقت‌تان بخیر.",
      "می‌خواهم درباره یک مسئله حقوقی مشاوره بگیرم.",
      topicLabel ? `موضوع: ${topicLabel}` : "",
      modeLabel ? `نوع مشاوره: ${modeLabel}` : "",
      note.trim() ? `توضیح کوتاه: ${note.trim()}` : "",
    ].filter(Boolean);

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      lines.join("\n"),
    )}`;
  };

  return (
    <section
      id="contact"
      dir="rtl"
      aria-labelledby="contact-heading"
      className="relative isolate overflow-hidden bg-linear-to-b from-paper to-paper-warm py-16 sm:py-24 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-36 top-20 -z-10 h-80 w-80 rounded-full border border-primary/5"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-0 -z-10 h-96 w-96 rounded-full bg-primary/[0.03] blur-3xl"
      />

      <div className="container mx-auto px-5 sm:px-8 lg:px-16">
        <header className="max-w-2xl">
          <h2
            id="contact-heading"
            className="font-display text-3xl font-semibold leading-[1.7] text-ink sm:text-4xl lg:text-5xl"
          >
            گام اول برای حل مسئله حقوقی شما
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-8 text-ink-soft sm:text-base sm:leading-9">
            موضوع پرونده را انتخاب کنید تا پیام آماده‌ای برای مریم طاهری ساخته
            شود. پیام در واتساپ باز می‌شود و پیش از ارسال می‌توانید آن را ویرایش
            کنید.
          </p>
        </header>

        <div className="mt-12 grid  sm:mt-14 lg:grid-cols-[1.1fr_0.9fr]">
          {/* ===== Consultation request sheet ===== */}
          <div className="relative overflow-hidden rounded-t-2xl md:rounded-r-4xl md:rounded-l-none border border-line bg-surface p-6 shadow-[0_24px_60px_-40px_rgba(72,21,31,0.35)] sm:p-9 lg:p-10">
            <span
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-0.5 bg-linear-to-l from-gold via-gold/40 to-transparent"
            />

            <h3 className="font-display text-xl font-semibold text-ink sm:text-2xl">
              درخواست مشاوره
            </h3>

            <fieldset className="mt-7">
              <legend className="text-sm font-medium text-ink">
                موضوع پرونده
              </legend>

              <div className="mt-3 flex flex-wrap gap-2">
                {topics.map((t) => (
                  <label key={t.id} className="cursor-pointer">
                    <input
                      type="radio"
                      name={`${uid}-topic`}
                      value={t.id}
                      checked={topic === t.id}
                      onChange={() => setTopic(t.id)}
                      className="peer sr-only"
                    />
                    <span className="inline-flex min-h-11 items-center rounded-full border border-line bg-paper px-4 text-sm text-ink transition-colors hover:border-gold peer-checked:border-primary peer-checked:bg-primary peer-checked:text-surface peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-primary">
                      {t.label}
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>

            <fieldset className="mt-7">
              <legend className="text-sm font-medium text-ink">
                نوع مشاوره
              </legend>

              <div className="mt-3 inline-flex rounded-full border border-line bg-paper p-1">
                {modes.map((m) => (
                  <label key={m.id} className="cursor-pointer">
                    <input
                      type="radio"
                      name={`${uid}-mode`}
                      value={m.id}
                      checked={mode === m.id}
                      onChange={() => setMode(m.id)}
                      className="peer sr-only"
                    />
                    <span className="inline-flex min-h-10 items-center rounded-full px-5 text-sm text-ink-soft transition-colors peer-checked:bg-primary peer-checked:text-surface peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-primary">
                      {m.label}
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>

            <div className="mt-7">
              <label
                htmlFor={`${uid}-note`}
                className="flex items-baseline justify-between text-sm font-medium text-ink"
              >
                <span>
                  توضیح کوتاه
                  <span className="mr-2 text-xs font-normal text-ink-muted">
                    (اختیاری)
                  </span>
                </span>
                <span className="text-xs font-normal tabular-nums text-ink-muted">
                  {note.length.toLocaleString("fa-IR")} /{" "}
                  {MAX_NOTE.toLocaleString("fa-IR")}
                </span>
              </label>

              <textarea
                id={`${uid}-note`}
                value={note}
                maxLength={MAX_NOTE}
                rows={4}
                onChange={(event) => setNote(event.target.value)}
                aria-describedby={`${uid}-note-hint`}
                placeholder="مسئله خود را در یک یا دو جمله بنویسید."
                className="mt-3 w-full resize-none rounded-md border border-line bg-paper px-4 py-3 text-sm leading-8 text-ink placeholder:text-ink-muted/70 focus-visible:border-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              />

              <p
                id={`${uid}-note-hint`}
                className="mt-2 text-xs leading-6 text-ink-muted"
              >
                لطفاً در این مرحله اطلاعات هویتی یا مدارک حساس ننویسید؛ آن‌ها را
                در جلسه مشاوره ارائه کنید.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={buildWhatsAppHref()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-primary px-8 text-sm font-semibold text-surface transition-colors hover:bg-primary-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
              >
                <AiOutlineWhatsApp aria-hidden="true" className="h-5 w-5" />
                ارسال در واتساپ
              </a>

              <a
                href="tel:+989217127727"
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border border-primary/25 px-8 text-sm font-medium text-primary transition-colors hover:border-primary hover:bg-primary/5"
              >
                <Phone aria-hidden="true" className="h-4 w-4" />
                تماس تلفنی
              </a>
            </div>

            <p className="mt-4 text-xs leading-6 text-ink-muted">
              چیزی روی این سایت ذخیره یا ارسال نمی‌شود؛ پیام فقط در واتساپ
              خودتان باز می‌شود.
            </p>
          </div>

          {/* ===== Contact details ===== */}
          <aside className="relative overflow-hidden rounded-b-2xl md:rounded-l-4xl md:rounded-r-none bg-primary p-6 text-paper sm:p-9 lg:p-10">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full border border-gold-light/15"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -left-8 -top-8 h-40 w-40 rounded-full border border-gold-light/20"
            />

            <h3 className="relative font-display text-xl font-semibold sm:text-2xl">
              راه‌های ارتباطی
            </h3>

            <ul className="relative mt-7 divide-y divide-paper/15">
              {contactItems.map(
                ({ id, icon: Icon, label, value, href, direction }) => (
                  <li key={id} className="flex gap-4 py-5 first:pt-0 last:pb-0">
                    <Icon
                      aria-hidden="true"
                      className="mt-1 h-5 w-5 shrink-0 text-gold-light"
                      strokeWidth={1.5}
                    />

                    <div className="min-w-0 flex-1">
                      <p className="text-xs leading-6 text-paper/65">{label}</p>

                      {href ? (
                        <a
                          href={href}
                          target={id === "address" ? "_blank" : undefined}
                          rel={
                            id === "address" ? "noopener noreferrer" : undefined
                          }
                          dir={direction}
                          className="mt-1 inline-flex max-w-full items-start gap-2 break-words text-sm font-medium leading-7 text-paper transition-colors hover:text-gold-light sm:text-[15px]"
                        >
                          <span className="break-words">{value}</span>
                          {id === "address" && (
                            <ArrowUpLeft
                              aria-hidden="true"
                              className="mt-1.5 h-4 w-4 shrink-0 text-gold-light"
                            />
                          )}
                        </a>
                      ) : (
                        <p
                          dir={direction}
                          className="mt-1 text-sm font-medium leading-7 text-paper sm:text-[15px]"
                        >
                          {value}
                        </p>
                      )}

                      {id === "address" && (
                        <p className="mt-0.5 text-xs leading-6 text-paper/60">
                          مشاهده روی نقشه
                        </p>
                      )}
                    </div>
                  </li>
                ),
              )}
            </ul>

            <div className="relative mt-8 flex items-center justify-between gap-4 border-t border-paper/15 pt-6">
              <span className="text-xs text-paper/65">شبکه‌های اجتماعی</span>

              <div className="flex items-center gap-2">
                {socialLinks.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    title={label}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-paper/20 text-paper/80 transition-colors hover:border-gold-light hover:text-gold-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-light"
                  >
                    <Icon size={18} strokeWidth={1.7} />
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
