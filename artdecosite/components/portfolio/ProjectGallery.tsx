import type { PortfolioDetail } from "@/lib/portfolio/types";
import { MasonryGallery } from "@/components/portfolio/MasonryGallery";
import { ProjectMedia } from "@/components/portfolio/ProjectMedia";
import { isVideoSrc } from "@/lib/utils/media";

type ProjectGalleryProps = {
  project: Pick<PortfolioDetail, "title" | "gallery" | "kind">;
};

type GalleryMediaProps = {
  src: string;
  alt: string;
};

function GalleryMedia({ src, alt }: GalleryMediaProps) {
  const isVideo = isVideoSrc(src);

  return (
    <figure className="w-full overflow-hidden">
      <ProjectMedia
        src={src}
        alt={alt}
        sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
        autoPlay={isVideo}
        muted={isVideo}
        loop={isVideo}
        controls={isVideo}
      />
    </figure>
  );
}

export function ProjectGallery({ project }: ProjectGalleryProps) {
  if (project.gallery.length === 0) {
    return null;
  }

  return (
    <section className="bg-mist px-3 pb-28 pt-10 sm:px-5 lg:px-8 lg:pb-40 lg:pt-14 xl:px-10">
      <div className="mx-auto w-full">
        <MasonryGallery
          items={project.gallery}
          getKey={(src) => src}
          renderItem={(src, index) => (
            <GalleryMedia
              src={src}
              alt={`${project.title} media ${index + 1}`}
            />
          )}
        />
      </div>
    </section>
  );
}
