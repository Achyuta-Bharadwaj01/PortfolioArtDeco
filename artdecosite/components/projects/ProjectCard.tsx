import Link from "next/link";
import type { Project } from "@/lib/constants/projects";
import { ProjectMedia } from "@/components/portfolio/ProjectMedia";
import { isVideoSrc } from "@/lib/utils/media";

type ProjectCardProps = {
  project: Project;
  numeral: string;
};

export function ProjectCard({ project, numeral }: ProjectCardProps) {
  const isVideo = isVideoSrc(project.image);

  return (
    <Link href={project.href} className="group block">
      <div className="bg-white p-1.5 ring-1 ring-black/[0.06] sm:p-2 lg:p-3">
        <div className="relative aspect-[3/4] w-full overflow-hidden bg-mist">
          <ProjectMedia
            src={project.image}
            alt={project.title}
            cover
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            autoPlay={isVideo}
            muted={isVideo}
            loop={isVideo}
            className="transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
          />
          <div className="pointer-events-none absolute inset-0 z-10 bg-navy/0 transition-colors duration-500 group-hover:bg-navy/10" />
          <span className="absolute left-3 top-3 z-10 text-[9px] uppercase tracking-[0.32em] text-white/90 drop-shadow-sm sm:left-4 sm:top-4 sm:text-[10px] lg:text-[11px]">
            {numeral}
          </span>
        </div>
      </div>

      <div className="mt-4 border-t border-black/10 pt-4 text-center sm:mt-5 sm:pt-5 lg:mt-7 lg:pt-6">
        <p className="text-[9px] uppercase tracking-[0.28em] text-black/45 sm:text-[10px] sm:tracking-[0.32em] lg:text-[11px]">
          {project.category}
        </p>
        <p className="mt-1.5 font-heading text-base font-bold uppercase tracking-[0.1em] text-black transition-colors group-hover:text-teal sm:mt-2 sm:text-lg lg:text-xl">
          {project.title}
        </p>
      </div>
    </Link>
  );
}
