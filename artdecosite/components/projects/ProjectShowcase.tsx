import Link from "next/link";
import {
  featuredProjects,
  projectNumerals,
} from "@/lib/constants/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";

export function ProjectShowcase() {
  return (
    <section className="bg-mist py-24 lg:py-36">
      <div className="mx-auto w-full px-5 lg:px-8">
        <div className="mb-16 border-b border-black/10 pb-12 lg:mb-20 lg:flex lg:items-end lg:justify-between lg:pb-14">
          <div className="max-w-2xl">
            <p className="max-w-lg text-lg italic leading-relaxed text-black/55 lg:text-xl">
              Interiors composed with proportion, permanence, and a quiet sense of
              occasion.
            </p>
          </div>

          <div className="mt-10 hidden items-center gap-5 lg:mt-0 lg:flex">
            <span className="h-px w-20 bg-navy/25" />
            <span className="text-black/20">◆</span>
            <span className="text-[10px] uppercase tracking-[0.4em] text-navy/70">
              MMXXVI
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-y-14 sm:grid-cols-2 sm:gap-x-5 sm:gap-y-16 lg:grid-cols-4 lg:gap-x-5 lg:gap-y-0 xl:gap-x-6">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              numeral={projectNumerals[index]}
            />
          ))}
        </div>

        <div className="mt-16 flex justify-center lg:mt-20">
          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-5 border border-black/20 bg-white px-8 py-4 transition-all duration-300 hover:border-teal hover:shadow-[0_8px_30px_rgba(2,43,58,0.06)] lg:gap-6 lg:px-12 lg:py-5"
          >
            <span className="h-px w-5 bg-black/25 transition-all duration-300 group-hover:w-8 group-hover:bg-teal" />
            <span className="font-heading text-[11px] font-bold uppercase tracking-[0.32em] text-black transition-colors duration-300 group-hover:text-teal lg:text-xs">
              View All Projects
            </span>
            <span className="h-px w-5 bg-black/25 transition-all duration-300 group-hover:w-8 group-hover:bg-teal" />
          </Link>
        </div>
      </div>
    </section>
  );
}
