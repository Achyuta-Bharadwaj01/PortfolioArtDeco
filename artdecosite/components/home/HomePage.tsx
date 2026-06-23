"use client";

import { useEffect, useRef, useState } from "react";
import { Navbar } from "@/components/navbar";
import { ProjectShowcase } from "@/components/projects";

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

  return (
    <>
      <Navbar variant={navVariant} />

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
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-mist to-transparent" />
        </section>

        <ProjectShowcase />
      </main>
    </>
  );
}
