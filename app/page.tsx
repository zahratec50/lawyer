import React from "react";
import Hero from "@/components/index/Hero";
import AboutLawyer from "@/components/index/AboutLawyer";
import Expertise from "@/components/index/Expertise";
import MyJob from "@/components/index/MyJob";
import FAQ from "@/components/index/Faq";
import Contact from "@/components/index/Contact";

export default function LawyerLanding() {
  return (
    <main
      className="min-h-screen bg-paper text-ink selection:bg-burgundy selection:text-paper overflow-x-hidden"
      dir="rtl"
    >
      <Hero />
      <AboutLawyer />
      <Expertise />
      <MyJob />
      <FAQ />
      <Contact />
    </main>
  );
}
