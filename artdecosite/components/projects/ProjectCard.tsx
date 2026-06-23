import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/constants/projects";

type ProjectCardProps = {
  project: Project;
  numeral: string;
};

export function ProjectCard({ project, numeral }: ProjectCardProps) {
  return (
    <Link href={project.href} className="group block">
      <div className="bg-white p-2 ring-1 ring-black/[0.06] lg:p-3">
        <div className="relative min-h-[22rem] overflow-hidden bg-mist sm:min-h-[26rem] lg:min-h-[32rem] xl:min-h-[36rem]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            unoptimized
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-navy/0 transition-colors duration-500 group-hover:bg-navy/10" />
          <span className="absolute left-4 top-4 text-[10px] uppercase tracking-[0.35em] text-white/90 drop-shadow-sm lg:left-5 lg:top-5 lg:text-[11px]">
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
