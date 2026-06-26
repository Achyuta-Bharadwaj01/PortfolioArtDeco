import type { Project } from "@/lib/constants/projects";
import { siteX } from "@/lib/constants/layout";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { toRomanNumeral } from "@/lib/utils/roman";

type PortfolioGridProps = {
  projects: Project[];
};

export function PortfolioGrid({ projects }: PortfolioGridProps) {
  return (
    <section className="bg-mist pb-16 pt-6 sm:pb-24 sm:pt-8 lg:pb-36 lg:pt-12">
      <div className={`mx-auto w-full ${siteX}`}>
        <div className="mb-10 border-b border-black/10 pb-8 sm:mb-14 sm:pb-10 lg:mb-20 lg:flex lg:items-end lg:justify-between lg:pb-14">
          <div className="max-w-2xl">
            <p className="font-heading text-[9px] font-bold uppercase tracking-[0.36em] text-navy/60 sm:text-[10px] sm:tracking-[0.42em] lg:text-[11px]">
              Portfolio
            </p>
            <p className="mt-4 max-w-lg text-base italic leading-relaxed text-black/55 sm:mt-5 sm:text-lg lg:text-xl">
              A complete collection of interiors, residences, and spaces shaped
              with proportion, permanence, and quiet occasion.
            </p>
          </div>

          <div className="mt-8 flex items-center gap-4 sm:mt-10 lg:mt-0 lg:gap-5">
            <span className="hidden h-px w-12 bg-navy/25 sm:block lg:w-20" />
            <span className="text-black/20">◆</span>
            <span className="text-[10px] uppercase tracking-[0.35em] text-navy/70 sm:tracking-[0.4em]">
              {projects.length.toString().padStart(2, "0")} Projects
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-y-10 min-[480px]:grid-cols-2 min-[480px]:gap-x-4 min-[480px]:gap-y-12 sm:gap-x-5 sm:gap-y-14 lg:grid-cols-4 lg:gap-x-5 lg:gap-y-16 xl:gap-x-6">
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
