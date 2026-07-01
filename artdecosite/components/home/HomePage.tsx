"use client";

import { useEffect, useRef, useState } from "react";
import { AboutSection } from "@/components/home/AboutSection";
import { HeroTagline } from "@/components/home/HeroTagline";
import { ContactSection } from "@/components/home/ContactSection";
import { JourneySection } from "@/components/home/JourneySection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { Navbar } from "@/components/navbar";
import { ProjectShowcase } from "@/components/projects";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { scrollToHash } from "@/lib/utils/scrollToHash";

type NavVariant = "light" | "dark";

export function HomePage() {
  const [navVariant, setNavVariant] = useState<NavVariant>("light");
  const heroRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const heroEl = heroRef.current;
    if (!heroEl) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setNavVariant(entry.isIntersecting ? "light" : "dark");
      },
      { threshold: 0.25 },
    );

    observer.observe(heroEl);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) return;

    requestAnimationFrame(() => {
      scrollToHash(hash);
    });
  }, []);

  return (
    <>
      <Navbar variant={navVariant} compact={navVariant === "dark"} />

      <main className="flex flex-1 flex-col">
        <section
          ref={heroRef}
          className="relative h-[70vh] w-full overflow-hidden bg-black lg:h-screen"
        >
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src="/Assets/temp_hero_vid.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white to-transparent" />
        </section>

        <HeroTagline />
        <SectionDivider label="Selected Works" tone="mist" />
        <ProjectShowcase />
        <SectionDivider label="About" tone="fade" />
        <AboutSection />
        <SectionDivider label="Journey" tone="fadeReverse" />
        <JourneySection />
        <SectionDivider label="Testimonials" tone="fadeReverse" />
        <TestimonialsSection />
        <SectionDivider label="Contact" tone="mist" />
        <ContactSection />
      </main>
    </>
  );
}
