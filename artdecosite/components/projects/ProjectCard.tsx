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
      <div className="bg-white p-2 ring-1 ring-black/[0.06] lg:p-3">
        <div className="relative aspect-[3/4] w-full overflow-hidden bg-mist">
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
          <div className="pointer-events-none absolute inset-0 z-10 bg-navy/0 transition-colors duration-500 group-hover:bg-navy/10" />
          <span className="absolute left-4 top-4 z-10 text-[10px] uppercase tracking-[0.35em] text-white/90 drop-shadow-sm lg:left-5 lg:top-5 lg:text-[11px]">
            {numeral}
          </span>
        </div>
      </div>

      <div className="mt-6 border-t border-black/10 pt-5 text-center lg:mt-7 lg:pt-6">
        <p className="text-[10px] uppercase tracking-[0.32em] text-black/45 lg:text-[11px]">
          {project.category}
        </p>
        <p className="mt-2 font-heading text-lg font-bold uppercase tracking-[0.12em] text-black transition-colors group-hover:text-teal lg:text-xl">
          {project.title}
        </p>
      </div>
    </Link>
  );
}
