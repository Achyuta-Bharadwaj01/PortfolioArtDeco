import type { ProjectDetail } from "@/lib/projects/getProjectDetail";
import { buildGalleryLayout } from "@/lib/projects/galleryLayout";
import { siteX } from "@/lib/constants/layout";
import { ProjectMedia } from "@/components/portfolio/ProjectMedia";
import { isVideoSrc } from "@/lib/utils/media";
import { toRomanNumeral } from "@/lib/utils/roman";

type ProjectGalleryProps = {
  project: Pick<ProjectDetail, "title" | "gallery">;
};

type GalleryMediaProps = {
  src: string;
  alt: string;
  numeral: number;
  className?: string;
};

function GalleryMedia({ src, alt, numeral, className = "" }: GalleryMediaProps) {
  const isVideo = isVideoSrc(src);

  return (
    <figure className={`group ${className}`}>
      <div className="bg-white p-1.5 ring-1 ring-black/[0.06] sm:p-2 lg:p-3">
        <div className="relative bg-mist">
          <ProjectMedia
            src={src}
            alt={alt}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
            autoPlay={isVideo}
            muted={isVideo}
            loop={isVideo}
            controls={isVideo}
          />
          <div className="pointer-events-none absolute inset-0 bg-navy/0 transition-colors duration-500 group-hover:bg-navy/10" />
          <figcaption className="absolute left-3 top-3 z-10 text-[9px] uppercase tracking-[0.32em] text-white/90 drop-shadow-sm sm:left-4 sm:top-4 sm:text-[10px] lg:text-[11px]">
            {toRomanNumeral(numeral)}
          </figcaption>
          {isVideo ? (
            <span className="absolute bottom-3 right-3 z-10 border border-white/30 bg-black/35 px-2.5 py-1 font-heading text-[8px] font-bold uppercase tracking-[0.24em] text-white/90 backdrop-blur-sm sm:bottom-4 sm:right-4 sm:px-3 sm:text-[9px] sm:tracking-[0.28em] lg:text-[10px]">
              Film
            </span>
          ) : null}
        </div>
      </div>
    </figure>
  );
}

export function ProjectGallery({ project }: ProjectGalleryProps) {
  const layout = buildGalleryLayout(project.gallery);

  if (project.gallery.length === 0) {
    return null;
  }

  return (
    <section className={`bg-mist pb-16 pt-12 sm:pb-24 sm:pt-16 lg:pb-36 lg:pt-24 ${siteX}`}>
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-10 flex items-center justify-center gap-3 sm:mb-14 sm:gap-4 lg:mb-20">
          <span className="h-px w-10 bg-navy/20 sm:w-16" />
          <p className="font-heading text-[9px] font-bold uppercase tracking-[0.36em] text-navy/60 sm:text-[10px] sm:tracking-[0.42em] lg:text-[11px]">
            Renders &amp; Spaces
          </p>
          <span className="h-px w-10 bg-navy/20 sm:w-16" />
        </div>

        <div className="space-y-5 sm:space-y-6 lg:space-y-8">
          {layout.map((group) => {
            if (group.variant === "feature") {
              const [src] = group.items;
              const [numeral] = group.numerals;

              return (
                <GalleryMedia
                  key={src}
                  src={src}
                  alt={`${project.title} media ${numeral}`}
                  numeral={numeral}
                />
              );
            }

            if (group.variant === "duo") {
              const [left, right] = group.items;
              const [leftNumeral, rightNumeral] = group.numerals;

              return (
                <div
                  key={`${left}-${right}`}
                  className="grid items-start gap-5 sm:grid-cols-2 sm:gap-6 lg:gap-8"
                >
                  <GalleryMedia
                    src={left}
                    alt={`${project.title} media ${leftNumeral}`}
                    numeral={leftNumeral}
                  />
                  <GalleryMedia
                    src={right}
                    alt={`${project.title} media ${rightNumeral}`}
                    numeral={rightNumeral}
                  />
                </div>
              );
            }

            const [src] = group.items;
            const [numeral] = group.numerals;

            return (
              <GalleryMedia
                key={src}
                src={src}
                alt={`${project.title} media ${numeral}`}
                numeral={numeral}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
