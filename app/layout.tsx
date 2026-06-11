import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://maryamtaherilawyer.ir"),

  title: {
    default: "مریم طاهری | وکیل پایه یک دادگستری",
    template: "%s | مریم طاهری",
  },

  description:
    "مریم طاهری، وکیل پایه یک دادگستری و مشاور حقوقی. ارائه خدمات تخصصی در دعاوی ملکی، کیفری، خانواده، قراردادها و مشاوره حقوقی.",

  keywords: [
    "مریم طاهری",
    "مریم طاهری وکیل",
    "وکیل پایه یک دادگستری",
    "مشاور حقوقی",
    "وکیل خانواده",
    "وکیل کیفری",
    "وکیل ملکی",
    "تنظیم قرارداد",
    "مشاوره حقوقی",
    "maryam taheri lawyer",
    "maryamtaherilawyer",
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
    title: "مریم طاهری | وکیل پایه یک دادگستری",
    description:
      "ارائه خدمات حقوقی تخصصی در حوزه دعاوی ملکی، کیفری، خانواده و قراردادها.",
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
    description: "ارائه خدمات حقوقی تخصصی و مشاوره حقوقی",
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
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
        {children}
      </body>
    </html>
  );
}
