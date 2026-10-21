"use client";

import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { AiOutlineWhatsApp } from "react-icons/ai";

/**
 * Mobile-only quick actions. Appears once the visitor has scrolled past the
 * first screen, and steps aside while the Contact section is in view (it
 * already offers the same actions there).
 */
export default function MobileActionBar() {
  const [pastHero, setPastHero] = useState(false);
  const [atContact, setAtContact] = useState(false);

  useEffect(() => {
    const onScroll = () =>
      setPastHero(window.scrollY > window.innerHeight * 0.6);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const contact = document.getElementById("contact");
    if (!contact) return;

    const observer = new IntersectionObserver(
      ([entry]) => setAtContact(entry.isIntersecting),
      { threshold: 0.15 },
    );

    observer.observe(contact);
    return () => observer.disconnect();
  }, []);

  const visible = pastHero && !atContact;

  return (
    <div
      dir="rtl"
      inert={!visible}
      className={`fixed inset-x-0 bottom-0 z-30 border-t border-line bg-paper/95 px-4 pt-3 backdrop-blur-lg transition-transform duration-300 lg:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <div className="mx-auto flex max-w-xl gap-3">
        <a
          href="https://wa.me/message/LKIGZ6PEI7EZP1"
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full bg-primary text-sm font-semibold text-surface transition-colors hover:bg-primary-dark"
        >
          <AiOutlineWhatsApp aria-hidden="true" className="h-5 w-5" />
          مشاوره در واتساپ
        </a>

        <a
          href="tel:+989217127727"
          className="flex min-h-12 items-center justify-center gap-2 rounded-full border border-primary/25 px-6 text-sm font-medium text-primary transition-colors hover:border-primary"
        >
          <Phone aria-hidden="true" className="h-4 w-4" />
          تماس
        </a>
      </div>
    </div>
  );
}
