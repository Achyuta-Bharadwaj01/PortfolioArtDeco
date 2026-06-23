"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Navbar } from "@/components/navbar";
import { ProjectGallery } from "@/components/portfolio/ProjectGallery";
import { ProjectMedia } from "@/components/portfolio/ProjectMedia";
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
          className="relative min-h-[72vh] w-full overflow-hidden bg-black lg:min-h-screen"
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
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/35" />

          <div className="absolute inset-x-0 bottom-0 px-5 pb-14 pt-24 lg:px-8 lg:pb-20">
              <div className="mx-auto w-full max-w-7xl">
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-3 font-heading text-[10px] font-bold uppercase tracking-[0.32em] text-white/75 transition-colors hover:text-white lg:text-[11px]"
                >
                  <span className="h-px w-6 bg-white/50" />
                  Back to Portfolio
                </Link>

                <p className="mt-8 text-[10px] uppercase tracking-[0.38em] text-white/70 lg:text-[11px]">
                  {project.category}
                </p>
                <h1 className="mt-4 max-w-4xl font-heading text-4xl font-bold uppercase leading-tight tracking-[0.12em] text-white sm:text-5xl lg:text-6xl">
                  {project.title}
                </h1>
              </div>
            </div>
        </section>

        {project.description.length > 0 ? (
          <section className="bg-white px-5 py-20 lg:px-8 lg:py-28">
            <div className="mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-20">
              <div className="lg:sticky lg:top-40">
                <div className="flex items-center gap-4">
                  <span className="h-px w-12 bg-navy/20" />
                  <span className="text-black/20">◆</span>
                  <span className="h-px w-12 bg-navy/20" />
                </div>
                <p className="mt-6 font-heading text-[10px] font-bold uppercase tracking-[0.42em] text-navy/60 lg:text-[11px]">
                  The Story
                </p>
                <p className="mt-5 max-w-sm text-lg italic leading-relaxed text-black/55 lg:text-xl">
                  Concept, evolution, and the atmosphere behind the space.
                </p>
              </div>

              <div className="space-y-6 border-t border-black/10 pt-8 text-base leading-[1.9] text-black/65 lg:space-y-8 lg:border-t-0 lg:pt-0 lg:text-[1.05rem]">
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
