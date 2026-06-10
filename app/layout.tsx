import type { Metadata } from "next";
import "./globals.css"; // استایل‌ها و فونت در اینجا لود می‌شوند

export const metadata: Metadata = {
  title: "وکیل پایه یک دادگستری و مشاور حقوقی",
  keywords: [
    " وکیل پایه یک دادگستری",
    "مشاور حقوقی",
    "وکیل ملکی",
    "بهترین وکیل تهران",
    "دعاوی کیفری",
    "دعاوی خانواده",
    "چک، سفته و مطالبات مالی",
    "تنظیم و بررسی قراردادها",
    "تنظیم دادخواست، شکواییه و لوایح",
    "مشاوره حقوقی اشخاص و کسب‌وکارها",
    "قبولی پرونده حقوقی",
  ],
  authors: [{ name: "مریم طاهری" }],
  openGraph: {
    title: " وکیل و مشاوره حقوقی",
    description: "دفاع از حقوق شما با استراتژی‌های مدرن حقوقی",
    type: "website",
    locale: "fa_IR",
  },
};

export interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      {/* کلاس font-sans به صورت خودکار از globals.css خوانده می‌شود */}
      <body className="font-vazirmatn antialiased bg-[#0A0A0A] text-white">
        {children}
      </body>
    </html>
  );
}
