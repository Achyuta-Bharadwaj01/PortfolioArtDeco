"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Navbar } from "@/components/navbar";
import { ProjectGallery } from "@/components/portfolio/ProjectGallery";
import { ProjectMedia } from "@/components/portfolio/ProjectMedia";
import { siteX } from "@/lib/constants/layout";
import type { ProjectDetail } from "@/lib/projects/getProjectDetail";
import { isVideoSrc } from "@/lib/utils/media";

type ProjectDetailViewProps = {
  project: ProjectDetail;
};

type NavVariant = "light" | "dark";

export function ProjectDetailView({ project }: ProjectDetailViewProps) {
  const [navVariant, setNavVariant] = useState<NavVariant>("light");
  const heroRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const heroEl = heroRef.current;
    if (!heroEl) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setNavVariant(entry.isIntersecting ? "light" : "dark");
      },
      { threshold: 0.2 },
    );

    observer.observe(heroEl);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar variant={navVariant} compact={navVariant === "dark"} />

      <main className="flex flex-1 flex-col">
        <section
          ref={heroRef}
          className="relative min-h-[62vh] w-full overflow-hidden bg-black sm:min-h-[68vh] lg:min-h-screen"
        >
          <ProjectMedia
            src={project.poster}
            alt={project.title}
            priority
            cover
            sizes="100vw"
            autoPlay={isVideoSrc(project.poster)}
            muted={isVideoSrc(project.poster)}
            loop={isVideoSrc(project.poster)}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/35" />

          <div className={`absolute inset-x-0 bottom-0 pb-10 pt-20 sm:pb-14 sm:pt-24 lg:pb-20 ${siteX}`}>
            <div className="mx-auto w-full max-w-7xl">
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 font-heading text-[9px] font-bold uppercase tracking-[0.28em] text-white/75 transition-colors hover:text-white sm:gap-3 sm:text-[10px] sm:tracking-[0.32em] lg:text-[11px]"
              >
                <span className="h-px w-5 bg-white/50 sm:w-6" />
                Back to Portfolio
              </Link>

              <p className="mt-6 text-[9px] uppercase tracking-[0.32em] text-white/70 sm:mt-8 sm:text-[10px] sm:tracking-[0.38em] lg:text-[11px]">
                {project.category}
              </p>
              <h1 className="mt-3 max-w-4xl text-balance font-heading text-3xl font-bold uppercase leading-tight tracking-[0.08em] text-white sm:mt-4 sm:text-4xl sm:tracking-[0.1em] md:text-5xl lg:text-6xl lg:tracking-[0.12em]">
                {project.title}
              </h1>
            </div>
          </div>
        </section>

        {project.description.length > 0 ? (
          <section className={`bg-white py-14 sm:py-20 lg:py-28 ${siteX}`}>
            <div className="mx-auto grid w-full max-w-7xl gap-10 sm:gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-20">
              <div className="lg:sticky lg:top-36">
                <div className="flex items-center gap-3 sm:gap-4">
                  <span className="h-px w-8 bg-navy/20 sm:w-12" />
                  <span className="text-black/20">◆</span>
                  <span className="h-px w-8 bg-navy/20 sm:w-12" />
                </div>
                <p className="mt-5 font-heading text-[9px] font-bold uppercase tracking-[0.36em] text-navy/60 sm:mt-6 sm:text-[10px] sm:tracking-[0.42em] lg:text-[11px]">
                  The Story
                </p>
                <p className="mt-4 max-w-sm text-base italic leading-relaxed text-black/55 sm:mt-5 sm:text-lg lg:text-xl">
                  Concept, evolution, and the atmosphere behind the space.
                </p>
              </div>

              <div className="space-y-5 border-t border-black/10 pt-6 text-sm leading-[1.85] text-black/65 sm:space-y-6 sm:pt-8 sm:text-base sm:leading-[1.9] lg:space-y-8 lg:border-t-0 lg:pt-0 lg:text-[1.05rem]">
                {project.description.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        <ProjectGallery project={project} />
      </main>
    </>
  );
}
