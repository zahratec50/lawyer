import React from "react";
import Hero from "@/components/index/Hero";
import Expertise from "@/components/index/Expertise";
import Contact from "@/components/index/Contact";
import MyJob from "@/components/index/MyJob";
import AboutLawyer from "@/components/index/AboutLawyer";

export default function LawyerLanding() {
  return (
    <div
      className="min-h-screen bg-gradient-to-b from-white via-red-50 to-white text-gray-100 selection:bg-luxury-gold selection:text-luxury-dark overflow-x-hidden"
      dir="rtl"
    >
      {/* بخش خوش‌آمدگویی و اطلاعات هیرو */}
      <Hero />

      <AboutLawyer />

      {/* بخش تخصص‌ها و حوزه‌های کاری */}
      <Expertise />

      <MyJob />

      {/* بخش اطلاعات تماس و راه‌های ارتباطی شبکه اجتماعی */}
      <Contact />

      {/* فوتر ساده و شیک */}
      <footer className="bg-luxury-dark border-t border-luxury-gold/5 py-8 text-center text-xs text-gray-500">
        <p>
          تمامی حقوق مادی و معنوی این وب‌سایت متعلق به دفتر وکالت فوق می‌باشد.Ⓒ 2026
        </p>
      </footer>
    </div>
  );
}
