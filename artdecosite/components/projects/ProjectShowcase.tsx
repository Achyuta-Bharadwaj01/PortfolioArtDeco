import Link from "next/link";
import {
  featuredProjects,
  projectNumerals,
} from "@/lib/constants/projects";
import { siteX } from "@/lib/constants/layout";
import { ProjectCard } from "@/components/projects/ProjectCard";

export function ProjectShowcase() {
  return (
    <section className="bg-mist pb-16 pt-6 sm:pb-20 sm:pt-8 lg:pb-36 lg:pt-12">
      <div className={`mx-auto w-full ${siteX}`}>
        <div className="mb-10 border-b border-black/10 pb-8 sm:mb-14 sm:pb-10 lg:mb-20 lg:flex lg:items-end lg:justify-between lg:pb-14">
          <div className="max-w-2xl">
            <p className="max-w-lg text-base italic leading-relaxed text-black/55 sm:text-lg lg:text-xl">
              Interiors composed with proportion, permanence, and a quiet sense of
              occasion.
            </p>
          </div>

          <div className="mt-8 flex items-center gap-4 sm:mt-10 lg:mt-0 lg:gap-5">
            <span className="hidden h-px w-12 bg-navy/25 sm:block lg:w-20" />
            <span className="text-black/20">◆</span>
            <span className="text-[10px] uppercase tracking-[0.35em] text-navy/70 sm:tracking-[0.4em]">
              MMXXVI
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-y-10 min-[480px]:grid-cols-2 min-[480px]:gap-x-4 min-[480px]:gap-y-12 sm:gap-x-5 sm:gap-y-14 lg:grid-cols-4 lg:gap-x-5 lg:gap-y-0 xl:gap-x-6">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              numeral={projectNumerals[index]}
            />
          ))}
        </div>

        <div className="mt-12 flex justify-center sm:mt-16 lg:mt-20">
          <Link
            href="/portfolio"
            className="group inline-flex w-full max-w-sm items-center justify-center gap-4 border border-black/20 bg-white px-6 py-3.5 transition-all duration-300 hover:border-teal hover:shadow-[0_8px_30px_rgba(2,43,58,0.06)] sm:w-auto sm:max-w-none sm:gap-5 sm:px-8 sm:py-4 lg:gap-6 lg:px-12 lg:py-5"
          >
            <span className="hidden h-px w-5 bg-black/25 transition-all duration-300 group-hover:w-8 group-hover:bg-teal sm:block" />
            <span className="font-heading text-[10px] font-bold uppercase tracking-[0.28em] text-black transition-colors duration-300 group-hover:text-teal sm:text-[11px] sm:tracking-[0.32em] lg:text-xs">
              View All Projects
            </span>
            <span className="hidden h-px w-5 bg-black/25 transition-all duration-300 group-hover:w-8 group-hover:bg-teal sm:block" />
          </Link>
        </div>
      </div>
    </section>
  );
}
