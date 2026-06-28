import Link from "next/link";
import type { ComingSoonConfig } from "@/lib/constants/comingSoon";
import { pageTop, siteX } from "@/lib/constants/layout";

type ComingSoonPageProps = {
  config: ComingSoonConfig;
};

export function ComingSoonPage({ config }: ComingSoonPageProps) {
  return (
    <section className={`flex flex-1 flex-col bg-white ${pageTop}`}>
      <div
        className={`${siteX} mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center px-4 py-20 text-center sm:py-28 lg:py-32`}
      >
        <div className="mb-8 flex w-full max-w-md items-center gap-4 sm:gap-6">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent via-navy/20 to-navy/30" />
          <span className="text-black/20">◆</span>
          <span className="h-px flex-1 bg-gradient-to-l from-transparent via-navy/20 to-navy/30" />
        </div>

        <p className="font-heading text-[10px] font-bold uppercase tracking-[0.42em] text-navy/55 lg:text-[11px]">
          {config.heading}
        </p>

        <div className="mt-8 max-w-lg space-y-2">
          {config.lines.map((line) => (
            <p
              key={line}
              className="text-base italic leading-relaxed text-black/55 lg:text-xl"
            >
              {line}
            </p>
          ))}
        </div>

        <h1 className="mt-8 font-heading text-3xl font-bold uppercase tracking-[0.14em] text-black sm:text-4xl lg:mt-10 lg:text-5xl">
          {config.status}
        </h1>

        <div className="mt-10 flex w-full max-w-md items-center gap-4 sm:mt-12 sm:gap-6">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent via-navy/20 to-navy/30" />
          <span className="text-black/20">◆</span>
          <span className="h-px flex-1 bg-gradient-to-l from-transparent via-navy/20 to-navy/30" />
        </div>

        <Link
          href={config.backHref}
          className="group mt-10 inline-flex items-center gap-5 border border-black/20 bg-white px-8 py-4 transition-all duration-300 hover:border-teal hover:shadow-[0_8px_30px_rgba(2,43,58,0.06)] lg:gap-6 lg:px-12 lg:py-5"
        >
          <span className="h-px w-5 bg-black/25 transition-all duration-300 group-hover:w-8 group-hover:bg-teal" />
          <span className="font-heading text-[11px] font-bold uppercase tracking-[0.32em] text-black transition-colors duration-300 group-hover:text-teal lg:text-xs">
            {config.backLabel}
          </span>
          <span className="h-px w-5 bg-black/25 transition-all duration-300 group-hover:w-8 group-hover:bg-teal" />
        </Link>
      </div>
    </section>
  );
}
