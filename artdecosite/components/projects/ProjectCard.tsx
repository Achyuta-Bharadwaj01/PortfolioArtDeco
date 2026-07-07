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
      <div className="bg-cream-soft p-2 ring-1 ring-gold/15 transition-all duration-300 group-hover:ring-gold/40 group-hover:shadow-gold lg:p-3">
        <div className="relative aspect-[3/4] w-full overflow-hidden bg-linen">
          <ProjectMedia
            src={project.image}
            alt={project.title}
            cover
            sizes="(max-width: 768px) 50vw, 25vw"
            autoPlay={isVideo}
            muted={isVideo}
            loop={isVideo}
            className="transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
          />
          <div className="pointer-events-none absolute inset-0 z-10 bg-moss/0 transition-colors duration-500 group-hover:bg-moss/10" />
          <span className="absolute left-4 top-4 z-10 font-heading text-[11px] uppercase tracking-[0.35em] text-cream/90 drop-shadow-sm lg:left-5 lg:top-5 lg:text-xs">
            {numeral}
          </span>
        </div>
      </div>

      <div className="mt-6 border-t border-gold/15 pt-5 text-center transition-colors duration-300 group-hover:border-gold/35 lg:mt-7 lg:pt-6">
        <p className="text-[10px] font-body uppercase tracking-[0.32em] text-gold lg:text-[11px]">
          {project.category}
        </p>
        <p className="mt-2 font-heading text-lg font-semibold uppercase tracking-[0.12em] text-ink transition-colors group-hover:text-gold lg:text-xl">
          {project.title}
        </p>
      </div>
    </Link>
  );
}
