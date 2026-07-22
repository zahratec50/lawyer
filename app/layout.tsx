import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Vazirmatn } from "next/font/google";

const vazir = Vazirmatn({
  subsets: ["arabic"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://maryamtaherilawyer.ir"),

  icons: {
    icon: "/images/favicon-512.png",
  },

  title: {
    default: "مریم طاهری | وکیل پایه یک دادگستری در تهران",
    template: "%s | مریم طاهری",
  },

  description:
    "مریم طاهری، وکیل پایه یک دادگستری (پروانه ۳۷۰۳۹) در تهران. مشاوره و وکالت تخصصی در دعاوی ملکی، کیفری، خانواده، تجاری و تنظیم قرارداد؛ به‌صورت حضوری و آنلاین در سراسر کشور.",

  keywords: [
    "مریم طاهری",
    "مریم طاهری وکیل",
    "وکیل پایه یک دادگستری تهران",
    "مشاور حقوقی تهران",
    "وکیل خانواده",
    "وکیل کیفری",
    "وکیل ملکی",
    "تنظیم قرارداد",
    "مشاوره حقوقی آنلاین",
    "maryam taheri lawyer",
  ],

  authors: [{ name: "مریم طاهری" }],
  creator: "مریم طاهری",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "fa_IR",
    url: "https://maryamtaherilawyer.ir",
    siteName: "Maryam Taheri Lawyer",
    title: "مریم طاهری | وکیل پایه یک دادگستری در تهران",
    description:
      "ارائه خدمات حقوقی تخصصی در حوزه دعاوی ملکی، کیفری، خانواده، تجاری و قراردادها؛ حضوری و آنلاین.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "مریم طاهری | وکیل پایه یک دادگستری",
    description: "ارائه خدمات حقوقی تخصصی و مشاوره حقوقی حضوری و آنلاین",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Attorney",
    name: "مریم طاهری",
    jobTitle: "وکیل پایه یک دادگستری",
    url: "https://maryamtaherilawyer.ir",
    image: "https://maryamtaherilawyer.ir/images/mt.jpg",
    telephone: "+989217127727",
    email: "maryamtaheri1475@gmail.com",
    areaServed: "Iran",
    availableLanguage: ["Persian"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "اصفهان",
      streetAddress: "سهروردی، مجتمع زیتون، طبقه اول",
      addressCountry: "IR",
    },
  };

  return (
    <html lang="fa" dir="rtl">
      <head suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={vazir.variable} suppressHydrationWarning>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
