import type { Project } from "@/lib/constants/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { toRomanNumeral } from "@/lib/utils/roman";

type PortfolioGridProps = {
  projects: Project[];
};

export function PortfolioGrid({ projects }: PortfolioGridProps) {
  return (
    <section className="bg-mist pb-24 pt-8 lg:pb-36 lg:pt-12">
      <div className="mx-auto w-full px-5 lg:px-8">
        <div className="mb-16 border-b border-black/10 pb-12 lg:mb-20 lg:flex lg:items-end lg:justify-between lg:pb-14">
          <div className="max-w-2xl">
            <p className="font-heading text-[10px] font-bold uppercase tracking-[0.42em] text-navy/60 lg:text-[11px]">
              Portfolio
            </p>
            <p className="mt-5 max-w-lg text-lg italic leading-relaxed text-black/55 lg:text-xl">
              A complete collection of interiors, residences, and spaces shaped
              with proportion, permanence, and quiet occasion.
            </p>
          </div>

          <div className="mt-10 hidden items-center gap-5 lg:mt-0 lg:flex">
            <span className="h-px w-20 bg-navy/25" />
            <span className="text-black/20">◆</span>
            <span className="text-[10px] uppercase tracking-[0.4em] text-navy/70">
              {projects.length.toString().padStart(2, "0")} Projects
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-y-14 sm:grid-cols-2 sm:gap-x-5 sm:gap-y-16 lg:grid-cols-4 lg:gap-x-5 lg:gap-y-16 xl:gap-x-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              numeral={toRomanNumeral(index + 1)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
