import Image from "next/image";
import { ArrowLeft, Clock3, Laptop2, MapPin } from "lucide-react";

const facts = [
  { icon: MapPin, label: "پذیرش پرونده", value: "سراسر کشور" },
  { icon: Laptop2, label: "نوع مشاوره", value: "حضوری و آنلاین" },
  { icon: Clock3, label: "پاسخگویی", value: "شنبه تا پنجشنبه" },
];

const delay = (ms: number) => ({ animationDelay: `${ms}ms` });

export default function Hero() {
  return (
    <header
      dir="rtl"
      className="relative isolate overflow-hidden bg-paper pb-20 pt-10 sm:pt-14 lg:pb-28 lg:pt-20"
    >
      {/* Background: faint dot grid + two brass rings echoing the portrait arch */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.035]"
        style={{
          backgroundImage: "radial-gradient(var(--ink) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-44 top-8 -z-10 h-[34rem] w-[34rem] rounded-full border border-gold/20"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-28 top-24 -z-10 h-[26rem] w-[26rem] rounded-full border border-gold/15"
      />

      <div className="container mx-auto grid items-center gap-10 px-5 sm:px-8 lg:grid-cols-12 lg:gap-8 lg:px-16">
        {/* ================= Copy ================= */}
        <div className="lg:col-span-7">
          <div className="fade-up flex items-center gap-3" style={delay(0)}>
            <span aria-hidden="true" className="h-px w-10 bg-gold" />
            <p className="text-sm font-medium text-gold-deep">
              وکیل پایه یک دادگستری و مشاور حقوقی
            </p>
          </div>

          <h1
            className="fade-up mt-6 font-display text-[3.5rem] font-bold leading-[1.4] tracking-tight text-ink sm:text-7xl lg:text-[6.5rem]"
            style={delay(90)}
          >
            مریم طاهری
          </h1>

          <p
            className="fade-up mt-6 max-w-xl text-base leading-9 text-ink-soft sm:text-lg sm:leading-10"
            style={delay(180)}
          >
            با تکیه بر دانش روز، رتبه برتر آزمون وکالت و تعهد به شفافیت، در
            پیچیده‌ترین پرونده‌های حقوقی و کیفری در کنار شما هستم تا از حقوق
            قانونی شما با دقت، تجربه و مسئولیت‌پذیری دفاع کنم.
          </p>

          <div
            className="fade-up mt-9 flex flex-col gap-3 sm:flex-row"
            style={delay(270)}
          >
            <a
              href="#contact"
              className="group inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-primary px-8 text-sm font-semibold text-surface transition-colors duration-300 hover:bg-primary-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              دریافت مشاوره فوری
              <ArrowLeft
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1"
              />
            </a>

            <a
              href="#expertise"
              className="inline-flex min-h-13 items-center justify-center rounded-full border border-primary/25 px-8 text-sm font-medium text-primary transition-colors duration-300 hover:border-primary hover:bg-primary/5"
            >
              مشاهده حوزه‌های تخصصی
            </a>
          </div>

          <dl
            className="fade-up mt-12 grid max-w-xl grid-cols-3 border-t border-line pt-6"
            style={delay(360)}
          >
            {facts.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="min-w-0 px-2 first:ps-0 sm:px-4 [&:not(:first-child)]:border-s [&:not(:first-child)]:border-line"
              >
                <dt className="flex items-center gap-1.5 text-[11px] leading-5 text-ink-muted sm:text-xs">
                  <Icon
                    aria-hidden="true"
                    className="h-3.5 w-3.5 shrink-0 text-gold-deep"
                    strokeWidth={1.6}
                  />
                  {label}
                </dt>
                <dd className="mt-1 text-[13px] font-semibold leading-6 text-ink sm:text-sm">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* ================= Portrait + license seal ================= */}
        <div
          className="fade-up order-first lg:order-0 lg:col-span-5"
          style={delay(200)}
        >
          <div className="relative mx-auto w-[min(56vw,14rem)] sm:w-[min(60vw,18rem)] lg:ms-0 lg:me-0 lg:w-full lg:max-w-[26rem]">
            <div className="relative aspect-4/5">
              {/* Offset brass outline */}
              <div
                aria-hidden="true"
                className="absolute inset-0 -translate-x-3 translate-y-3 rounded-b-xl rounded-t-[999px] border border-gold"
              />

              {/* Photo */}
              <div className="absolute inset-0 overflow-hidden rounded-b-xl rounded-t-[999px] bg-primary shadow-[0_30px_60px_-30px_rgba(72,21,31,0.5)]">
                <Image
                  src="/images/mt.jpg"
                  alt="سرکار خانم مریم طاهری، وکیل پایه یک دادگستری"
                  fill
                  priority
                  sizes="(max-width: 1024px) 80vw, 420px"
                  className="object-cover"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-linear-to-t from-primary/45 via-transparent to-transparent"
                />
              </div>

              {/* License seal: the page's one signature moment */}
              <div className="absolute -right-3 bottom-10 z-10 -rotate-[8deg] sm:-right-6">
                <div className="stamp-in relative grid h-24 w-24 place-items-center rounded-full bg-paper text-primary shadow-[0_16px_30px_-14px_rgba(72,21,31,0.55)] sm:h-32 sm:w-32">
                  <span
                    aria-hidden="true"
                    className="absolute inset-1 rounded-full border-2 border-primary/80"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute inset-2.5 rounded-full border border-primary/40"
                  />
                  <div className="relative text-center leading-tight">
                    <p className="text-[10px] font-medium sm:text-[11px]">
                      پروانه وکالت
                    </p>
                    <p className="my-0.5 font-display text-2xl font-bold tabular-nums sm:text-[1.7rem]">
                      ۳۷۰۳۹
                    </p>
                    <p className="text-[9px] font-medium sm:text-[10px]">
                      پایه یک دادگستری
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
