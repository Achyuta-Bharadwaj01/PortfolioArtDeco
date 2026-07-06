import { Fragment } from "react";
import { JourneySideOrnament } from "@/components/home/JourneySideOrnament";
import {
  journeyEntries,
  journeyIntro,
  journeyMaxWidthClass,
  type JourneyEntry,
} from "@/lib/constants/journey";

function JourneyCard({ entry }: { entry: JourneyEntry }) {
  return (
    <article className="group relative flex w-[16.5rem] shrink-0 snap-start flex-col sm:w-[17.5rem] md:w-[18rem] lg:w-[19rem] xl:w-[20rem]">
      <div className="flex flex-col items-center">
        <span className="font-body text-[11px] font-semibold uppercase tracking-[0.28em] text-cocoa/55 sm:text-xs">
          {entry.period}
        </span>
        <span className="relative z-10 mt-3 flex h-3 w-3 items-center justify-center rounded-full border border-camel/40 bg-parchment ring-4 ring-parchment transition-colors duration-300 group-hover:border-camel group-hover:bg-camel" />
      </div>

      <div className="mt-5 bg-parchment p-4 ring-1 ring-cocoa/[0.06] transition-all duration-300 group-hover:ring-camel/25 group-hover:shadow-warm sm:p-5">
        <h3 className="font-heading text-base font-bold uppercase leading-snug tracking-[0.08em] text-black sm:text-[1.05rem]">
          {entry.title}
        </h3>
        <p className="mt-2 font-body text-sm font-medium text-camel">{entry.organization}</p>
        {entry.description ? (
          <p className="mt-4 font-body text-sm italic leading-relaxed text-black/60">
            {entry.description}
          </p>
        ) : null}
      </div>
    </article>
  );
}

function TimelineConnector() {
  return (
    <span
      aria-hidden="true"
      className="mt-[2.15rem] hidden h-px min-w-6 flex-1 shrink basis-10 bg-gradient-to-r from-cocoa/20 via-taupe/30 to-cocoa/20 sm:block lg:min-w-12 lg:max-w-36"
    />
  );
}

export function JourneySection() {
  return (
    <section className="relative bg-parchment pb-14 pt-4 lg:pb-20 lg:pt-6">
      <JourneySideOrnament side="left" />
      <JourneySideOrnament side="right" />

      <div className={`relative z-10 mx-auto w-full ${journeyMaxWidthClass} px-5 sm:px-6 lg:px-10 xl:px-12`}>
        <div className="mb-8 max-w-2xl border-b border-black/10 pb-8 lg:mb-10 lg:pb-10">
          <h2 className="font-heading text-2xl font-bold uppercase tracking-[0.14em] text-black sm:text-3xl">
            {journeyIntro.heading}
          </h2>
          <p className="mt-4 max-w-xl text-base italic leading-relaxed text-black/55 lg:text-lg">
            {journeyIntro.subheading}
          </p>
        </div>

        <div className="relative -mx-5 sm:-mx-6 lg:-mx-10 xl:-mx-12">
          <div className="overflow-x-auto overscroll-x-contain scroll-smooth pb-4 [-ms-overflow-style:none] [scrollbar-width:none] snap-x snap-mandatory scroll-px-5 sm:scroll-px-6 lg:scroll-px-10 xl:scroll-px-12 [&::-webkit-scrollbar]:hidden">
            <div className="flex min-w-full w-max items-start gap-5 px-5 sm:gap-0 sm:px-6 lg:px-10 xl:px-12">
              {journeyEntries.map((entry, index) => (
                <Fragment key={entry.id}>
                  {index > 0 ? <TimelineConnector /> : null}
                  <JourneyCard entry={entry} />
                </Fragment>
              ))}
            </div>
          </div>

          <p className="mt-2 text-center font-body text-[10px] uppercase tracking-[0.28em] text-taupe sm:hidden">
            Scroll to explore
          </p>
        </div>
      </div>
    </section>
  );
}