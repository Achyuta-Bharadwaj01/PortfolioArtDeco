import type { ProjectDetail } from "@/lib/projects/getProjectDetail";
import { buildGalleryLayout } from "@/lib/projects/galleryLayout";
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
      <div className="bg-white p-2 ring-1 ring-black/[0.06] lg:p-3">
        <div className="relative bg-mist">
          <ProjectMedia
            src={src}
            alt={alt}
            sizes="(max-width: 1024px) 100vw, 50vw"
            autoPlay={isVideo}
            muted={isVideo}
            loop={isVideo}
            controls={isVideo}
          />
          <div className="pointer-events-none absolute inset-0 bg-navy/0 transition-colors duration-500 group-hover:bg-navy/10" />
          <figcaption className="absolute left-4 top-4 z-10 text-[10px] uppercase tracking-[0.35em] text-white/90 drop-shadow-sm lg:left-5 lg:top-5 lg:text-[11px]">
            {toRomanNumeral(numeral)}
          </figcaption>
          {isVideo ? (
            <span className="absolute bottom-4 right-4 z-10 border border-white/30 bg-black/35 px-3 py-1 font-heading text-[9px] font-bold uppercase tracking-[0.28em] text-white/90 backdrop-blur-sm lg:text-[10px]">
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
    <section className="bg-mist px-5 pb-24 pt-16 lg:px-8 lg:pb-36 lg:pt-24">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-14 flex items-center justify-center gap-4 lg:mb-20">
          <span className="h-px w-16 bg-navy/20" />
          <p className="font-heading text-[10px] font-bold uppercase tracking-[0.42em] text-navy/60 lg:text-[11px]">
            Renders &amp; Spaces
          </p>
          <span className="h-px w-16 bg-navy/20" />
        </div>

        <div className="space-y-6 lg:space-y-8">
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
                  className="grid items-start gap-6 sm:grid-cols-2 lg:gap-8"
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
