import Link from "next/link";
import type { PortfolioItem } from "@/lib/portfolio/types";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { portfolioSectionCopy } from "@/lib/constants/portfolio";
import { toRomanNumeral } from "@/lib/utils/roman";

type ProjectShowcaseProps = {
  items: PortfolioItem[];
};

export function ProjectShowcase({ items }: ProjectShowcaseProps) {
  return (
    <section className="relative bg-cream pb-16 pt-4 lg:pb-24 lg:pt-6">
      <div className="pointer-events-none absolute inset-0 bg-botanical opacity-25" />
      <div className="relative z-10 mx-auto w-full px-5 lg:px-8">
        <div className="mb-10 border-b border-gold/20 pb-8 lg:mb-12 lg:pb-10">
          <h2 className="font-heading text-3xl font-normal text-ink sm:text-4xl lg:text-[2.5rem]">
            {portfolioSectionCopy.showcaseHeading}
          </h2>
          <p className="mt-4 max-w-2xl text-base italic leading-relaxed text-ink/55 lg:mt-5 lg:text-lg">
            {portfolioSectionCopy.showcaseIntro}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-5 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-5 lg:gap-y-0 xl:gap-x-6">
          {items.map((item, index) => (
            <ProjectCard
              key={item.slug}
              project={item}
              numeral={toRomanNumeral(index + 1)}
            />
          ))}
        </div>

        <div className="mt-10 flex justify-center lg:mt-12">
          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-5 border border-gold/25 bg-cream-soft px-8 py-4 transition-all duration-300 hover:border-gold hover:shadow-gold lg:gap-6 lg:px-12 lg:py-5"
          >
            <span className="h-px w-5 bg-gold/30 transition-all duration-300 group-hover:w-8 group-hover:bg-gold" />
            <span className="font-body text-[11px] font-semibold uppercase tracking-[0.32em] text-ink/75 transition-colors duration-300 group-hover:text-gold lg:text-xs">
              View Full Portfolio
            </span>
            <span className="h-px w-5 bg-gold/30 transition-all duration-300 group-hover:w-8 group-hover:bg-gold" />
          </Link>
        </div>
      </div>
    </section>
  );
}
