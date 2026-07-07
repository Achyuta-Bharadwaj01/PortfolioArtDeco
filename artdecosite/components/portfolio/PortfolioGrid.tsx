import type { PortfolioItem } from "@/lib/portfolio/types";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { portfolioSectionCopy } from "@/lib/constants/portfolio";
import { toRomanNumeral } from "@/lib/utils/roman";

type PortfolioGridProps = {
  projects: PortfolioItem[];
  shoots: PortfolioItem[];
};

type PortfolioSectionProps = {
  eyebrow: string;
  intro: string;
  items: PortfolioItem[];
  startIndex?: number;
};

function PortfolioSection({
  eyebrow,
  intro,
  items,
  startIndex = 0,
}: PortfolioSectionProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <div className="space-y-14 lg:space-y-16">
      <div className="border-b border-gold/20 pb-10 lg:flex lg:items-end lg:justify-between lg:pb-12">
        <div className="max-w-2xl">
          <p className="font-body text-[10px] font-semibold uppercase tracking-[0.42em] text-gold/70 lg:text-[11px]">
            {eyebrow}
          </p>
          <p className="mt-5 max-w-lg text-lg italic leading-relaxed text-ink/55 lg:text-xl">
            {intro}
          </p>
        </div>

        <div className="mt-8 hidden items-center gap-5 lg:mt-0 lg:flex">
          <span className="h-px w-20 bg-gold/30" />
          <span className="text-gold/45">◆</span>
          <span className="font-body text-[10px] uppercase tracking-[0.4em] text-gold/60">
            {items.length.toString().padStart(2, "0")} Works
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-y-14 sm:grid-cols-2 sm:gap-x-5 sm:gap-y-16 lg:grid-cols-4 lg:gap-x-5 lg:gap-y-16 xl:gap-x-6">
        {items.map((item, index) => (
          <ProjectCard
            key={item.slug}
            project={item}
            numeral={toRomanNumeral(startIndex + index + 1)}
          />
        ))}
      </div>
    </div>
  );
}

export function PortfolioGrid({ projects, shoots }: PortfolioGridProps) {
  const totalCount = projects.length + shoots.length;

  return (
    <section className="bg-cream pb-24 pt-8 lg:pb-36 lg:pt-12">
      <div className="mx-auto w-full px-5 lg:px-8">
        <div className="mb-16 border-b border-gold/20 pb-12 lg:mb-20 lg:flex lg:items-end lg:justify-between lg:pb-14">
          <div className="max-w-2xl">
            <p className="font-body text-[10px] font-semibold uppercase tracking-[0.42em] text-gold/70 lg:text-[11px]">
              Portfolio
            </p>
            <p className="mt-5 max-w-lg text-lg italic leading-relaxed text-ink/55 lg:text-xl">
              {portfolioSectionCopy.pageIntro}
            </p>
          </div>

          <div className="mt-10 hidden items-center gap-5 lg:mt-0 lg:flex">
            <span className="h-px w-20 bg-gold/30" />
            <span className="text-gold/45">◆</span>
            <span className="font-body text-[10px] uppercase tracking-[0.4em] text-gold/60">
              {totalCount.toString().padStart(2, "0")} Works
            </span>
          </div>
        </div>

        <div className="space-y-20 lg:space-y-28">
          <PortfolioSection
            eyebrow={portfolioSectionCopy.projectsEyebrow}
            intro={portfolioSectionCopy.projectsIntro}
            items={projects}
          />
          <PortfolioSection
            eyebrow={portfolioSectionCopy.shootsEyebrow}
            intro={portfolioSectionCopy.shootsIntro}
            items={shoots}
            startIndex={projects.length}
          />
        </div>
      </div>
    </section>
  );
}
