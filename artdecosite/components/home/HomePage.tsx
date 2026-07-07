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
          className="relative h-[70vh] w-full overflow-hidden bg-moss-deep lg:h-screen"
        >
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src="/Assets/Shaineela%20Hero.mov"
            autoPlay
            muted
            loop
            playsInline
          />
          {/* Atmospheric dark green tint */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-moss-deep/40 via-transparent to-moss/20" />
          {/* Bottom fade to cream */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-cream to-transparent" />

          {/* Gold filigree corner ornaments — Gold_filgree.png is top-left oriented */}
          {/* bottom-left: flip vertically */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-0 z-10 scale-y-[-1]"
          >
            <img
              src="/UIItems/Gold_filgree.png"
              alt=""
              className="h-36 w-36 object-contain sm:h-48 sm:w-48 lg:h-64 lg:w-64"
              style={{ mixBlendMode: "multiply", opacity: 0.65 }}
            />
          </div>
          {/* bottom-right: rotate 180deg */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 right-0 z-10 rotate-180"
          >
            <img
              src="/UIItems/Gold_filgree.png"
              alt=""
              className="h-36 w-36 object-contain sm:h-48 sm:w-48 lg:h-64 lg:w-64"
              style={{ mixBlendMode: "multiply", opacity: 0.65 }}
            />
          </div>
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
