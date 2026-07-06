import Link from "next/link";
import type { ComingSoonConfig } from "@/lib/constants/comingSoon";
import { pageTop, siteX } from "@/lib/constants/layout";

type ComingSoonPageProps = {
  config: ComingSoonConfig;
};

export function ComingSoonPage({ config }: ComingSoonPageProps) {
  return (
    <section className={`flex flex-1 flex-col bg-parchment ${pageTop}`}>
      <div
        className={`${siteX} mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center px-4 py-20 text-center sm:py-28 lg:py-32`}
      >
        <div className="mb-8 flex w-full max-w-md items-center gap-4 sm:gap-6">
          <span className="divider-gold h-px flex-1" />
          <span className="text-brass/35">◆</span>
          <span className="divider-gold h-px flex-1" />
        </div>

        <p className="font-body text-[10px] font-semibold uppercase tracking-[0.42em] text-cocoa/55 lg:text-[11px]">
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
          <span className="divider-gold h-px flex-1" />
          <span className="text-brass/35">◆</span>
          <span className="divider-gold h-px flex-1" />
        </div>

        <Link
          href={config.backHref}
          className="group mt-10 inline-flex items-center gap-5 border border-cocoa/15 bg-parchment px-8 py-4 transition-all duration-300 hover:border-camel hover:shadow-warm lg:gap-6 lg:px-12 lg:py-5"
        >
          <span className="h-px w-5 bg-cocoa/25 transition-all duration-300 group-hover:w-8 group-hover:bg-camel" />
          <span className="font-body text-[11px] font-semibold uppercase tracking-[0.32em] text-black transition-colors duration-300 group-hover:text-camel lg:text-xs">
            {config.backLabel}
          </span>
          <span className="h-px w-5 bg-cocoa/25 transition-all duration-300 group-hover:w-8 group-hover:bg-camel" />
        </Link>
      </div>
    </section>
  );
}
