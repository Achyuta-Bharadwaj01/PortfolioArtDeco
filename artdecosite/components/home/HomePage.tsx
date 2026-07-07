"use client";

import { useEffect } from "react";
import { AboutSection } from "@/components/home/AboutSection";
import { ContactSection } from "@/components/home/ContactSection";
import { JourneySection } from "@/components/home/JourneySection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { Navbar } from "@/components/navbar";
import { ProjectShowcase } from "@/components/projects";
import type { PortfolioItem } from "@/lib/portfolio/types";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { scrollToHash } from "@/lib/utils/scrollToHash";

type HomePageProps = {
  showcaseItems: PortfolioItem[];
};

export function HomePage({ showcaseItems }: HomePageProps) {
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) return;

    requestAnimationFrame(() => {
      scrollToHash(hash);
    });
  }, []);

  return (
    <>
      <Navbar />

      <main className="flex flex-1 flex-col bg-cream">
        <section className="relative h-[70vh] w-full overflow-hidden bg-moss-deep lg:h-screen">
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src="/Assets/Shaineela%20Hero.mov"
            autoPlay
            muted
            loop
            playsInline
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-moss-deep/40 via-transparent to-moss/20" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-cream to-transparent" />

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

        <SectionDivider />
        <AboutSection />
        <SectionDivider />
        <ProjectShowcase items={showcaseItems} />
        <SectionDivider />
        <JourneySection />
        <SectionDivider />
        <TestimonialsSection />
        <SectionDivider />
        <ContactSection />
      </main>
    </>
  );
}
