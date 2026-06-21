'use client';

import { useEffect, useRef, useState } from "react";
import { Navbar } from "@/components/navbar";

type NavVariant = "light" | "dark";

export default function Home() {
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
      {
        threshold: 0.25,
      },
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
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
        </section>

        <section className="px-8 pb-16 pt-16 lg:px-16 lg:pt-24">
          <h1 className="font-heading text-5xl font-bold leading-none tracking-[0.02em] lg:text-7xl">
            Welcome
          </h1>
          <p className="mt-8 max-w-xl text-xl font-normal leading-relaxed lg:text-2xl">
            Portfolio and creative work by Shaineela Ahmed.
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
        </section>
      </main>
    </>
  );
}
